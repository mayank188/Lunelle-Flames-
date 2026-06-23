import { useEffect, useState, lazy, Suspense } from "react";

const App = lazy(() => import("./App"));

/**
 * The full Lunelle Flames storefront runs on react-router-dom.
 * We mount it client-side only (BrowserRouter needs `window`).
 */
export function ClientApp() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-luxury">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-flicker rounded-full bg-gradient-rose" />
          <p className="mt-4 font-display text-lg text-foreground/70">Lunelle Flames</p>
        </div>
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gradient-luxury">
          <div className="h-12 w-12 animate-flicker rounded-full bg-gradient-rose" />
        </div>
      }
    >
      <App />
    </Suspense>
  );
}
