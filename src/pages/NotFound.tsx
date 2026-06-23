import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="grid min-h-[60vh] place-items-center px-6 text-center">
      <div>
        <p className="font-display text-7xl text-gradient-rose">404</p>
        <h1 className="mt-4 font-display text-3xl">Page not found</h1>
        <p className="mt-2 text-muted-foreground">The candle you're looking for has burned out.</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-gradient-rose px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white">
          Back home
        </Link>
      </div>
    </section>
  );
}
