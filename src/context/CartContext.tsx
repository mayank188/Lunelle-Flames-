import { createContext, useContext, useEffect, useReducer, useState, type ReactNode } from "react";
import type { Product } from "@/data/products";

export type CartItem = Product & { quantity: number };

type State = { items: CartItem[] };
type Action =
  | { type: "ADD"; product: Product; quantity?: number }
  | { type: "REMOVE"; id: number }
  | { type: "UPDATE"; id: number; quantity: number }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; items: CartItem[] };

const initialState: State = { items: [] };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "HYDRATE":
      return { items: action.items };
    case "ADD": {
      const qty = action.quantity ?? 1;
      const existing = state.items.find((i) => i.id === action.product.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.product.id ? { ...i, quantity: i.quantity + qty } : i,
          ),
        };
      }
      return { items: [...state.items, { ...action.product, quantity: qty }] };
    }
    case "REMOVE":
      return { items: state.items.filter((i) => i.id !== action.id) };
    case "UPDATE":
      return {
        items: state.items
          .map((i) => (i.id === action.id ? { ...i, quantity: Math.max(1, action.quantity) } : i))
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  total: number;
  count: number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "lunelle-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) dispatch({ type: "HYDRATE", items: JSON.parse(raw) });
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items, hydrated]);

  const total = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = state.items.reduce((sum, i) => sum + i.quantity, 0);

  const value: CartContextValue = {
    items: state.items,
    total,
    count,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addItem: (product, quantity) => {
      dispatch({ type: "ADD", product, quantity });
      setIsOpen(true);
    },
    removeItem: (id) => dispatch({ type: "REMOVE", id }),
    updateQty: (id, qty) => dispatch({ type: "UPDATE", id, quantity: qty }),
    clear: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be inside CartProvider");
  return ctx;
}

export function buildWhatsAppCheckoutUrl(
  items: CartItem[],
  total: number,
  customer?: { name?: string; phone?: string; address?: string },
) {
  const phone = "919999999999";
  const lines = items.map(
    (i) => `• ${i.name} × ${i.quantity} — ₹${i.price * i.quantity}`,
  );
  const message =
    `Hello Lunelle Flames,\n\nI would like to order:\n\n${lines.join("\n")}\n\n` +
    `Total: ₹${total}\n\n` +
    `Name: ${customer?.name ?? ""}\nPhone: ${customer?.phone ?? ""}\nAddress: ${customer?.address ?? ""}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
