import { useMemo, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSearch, FiFilter } from "react-icons/fi";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const PER_PAGE = 9;

export default function Shop() {
  useEffect(() => { document.title = "Shop — Lunelle Flames"; }, []);

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<"featured" | "low" | "high">("featured");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = products.filter(
      (p) =>
        (category === "All" || p.category === category) &&
        p.name.toLowerCase().includes(query.toLowerCase()),
    );
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [query, category, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  useEffect(() => setPage(1), [query, category, sort]);

  return (
    <>
      <section className="bg-gradient-luxury py-16 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">Our Collection</span>
        <h1 className="mt-2 font-display text-5xl md:text-6xl">Shop All Candles</h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          {products.length} handcrafted candles • Soy wax • Premium fragrance oils
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Filters */}
        <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-secondary p-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative flex-1 max-w-md">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search candles..."
              className="w-full rounded-full bg-white py-2.5 pl-11 pr-4 text-sm outline-none ring-1 ring-border focus:ring-primary"
            />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 text-sm">
              <FiFilter className="text-primary" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-full bg-white px-4 py-2 ring-1 ring-border focus:outline-none"
              >
                <option>All</option>
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "featured" | "low" | "high")}
              className="rounded-full bg-white px-4 py-2 text-sm ring-1 ring-border focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Grid */}
        {visible.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">No candles match your search.</p>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 gap-5 md:grid-cols-3"
          >
            {visible.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </motion.div>
        )}

        {/* Pagination */}
        {pageCount > 1 && (
          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: pageCount }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`h-10 w-10 rounded-full text-sm transition ${
                  page === i + 1
                    ? "bg-gradient-rose text-white shadow-card"
                    : "bg-white text-foreground ring-1 ring-border hover:bg-secondary"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
