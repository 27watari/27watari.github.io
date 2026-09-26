import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background-50 px-6 text-center">
      <span className="pointer-events-none select-none font-heading text-[9rem] md:text-[12rem] font-black leading-none text-background-200">
        404
      </span>

      <div className="relative z-10 -mt-10 md:-mt-16">
        <p className="font-label text-[11px] tracking-[0.28em] uppercase text-primary-600">
          Page Not Found
        </p>
        <h1 className="mt-4 text-2xl md:text-3xl font-bold text-foreground-950">
          お探しのページは見つかりませんでした
        </h1>
        <p className="mt-3 text-sm text-foreground-600">
          URL: <span className="text-foreground-800">{location.pathname}</span>
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary-600 px-7 py-3.5 font-label text-[13px] tracking-[0.08em] text-background-50 hover:bg-primary-700 transition-colors cursor-pointer"
        >
          トップへ戻る
          <i className="ri-arrow-right-line w-4 h-4 flex items-center justify-center" />
        </Link>
      </div>
    </div>
  );
}