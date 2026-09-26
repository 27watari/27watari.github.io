import { useEffect, useState } from "react";

const navItems = [
  { label: "Works", jp: "制作実績", href: "#works" },
  { label: "Skills", jp: "スキル", href: "#skills" },
  { label: "About", jp: "私について", href: "#about" },
  { label: "Experience", jp: "職務経歴", href: "#experience" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const offset = window.innerHeight * 0.35;
      let current = "";
      navItems.forEach((item) => {
        const el = document.querySelector<HTMLElement>(item.href);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          current = item.href;
        }
      });
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // メニュー展開中は背面のスクロールをロック
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const light = !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-background-50/95 backdrop-blur-md border-b border-background-200/70"
            : "bg-transparent border-b border-transparent"
        }`}
      >
      <div className="mx-auto w-full max-w-[1180px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 cursor-pointer"
          aria-label="トップへ戻る"
          onClick={() => setMenuOpen(false)}
        >
          <span
            className={`font-label text-[13px] md:text-base font-bold tracking-[0.2em] md:tracking-[0.32em] transition-colors duration-500 ${
              light && !menuOpen ? "text-background-50" : "text-foreground-950"
            }`}
          >
            MEGUMI TERASAKI
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeId === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative font-label text-xs tracking-[0.14em] uppercase cursor-pointer transition-colors duration-300 ${
                  light
                    ? isActive
                      ? "text-background-50"
                      : "text-background-100 hover:text-background-50"
                    : isActive
                      ? "text-primary-600"
                      : "text-foreground-600 hover:text-primary-600"
                }`}
              >
                {item.label}
                <span
                  className={`pointer-events-none absolute -bottom-1.5 left-0 h-[2px] w-full origin-left transition-transform duration-300 ease-out ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  } ${light ? "bg-background-50" : "bg-primary-500"}`}
                />
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`md:hidden w-11 h-11 -mr-2 flex items-center justify-center cursor-pointer transition-colors duration-500 ${
            light && !menuOpen ? "text-background-50" : "text-foreground-950"
          }`}
        >
          <i
            className={
              menuOpen ? "ri-close-line text-[26px]" : "ri-menu-line text-[26px]"
            }
          />
        </button>
        </div>
      </header>

      {menuOpen && (
        <div className="md:hidden animate-menu-panel fixed inset-x-0 top-16 bottom-0 z-40 bg-background-50 overflow-y-auto">
          <div className="flex min-h-full flex-col px-6 pt-7 pb-10">
            <div className="flex items-center justify-between">
              <p className="font-label text-[10px] tracking-[0.3em] uppercase text-foreground-400">
                Menu
              </p>
            </div>

            <nav className="mt-5 flex flex-col">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={activeId === item.href ? "true" : undefined}
                  style={{ animationDelay: `${index * 65}ms` }}
                  className="animate-menu-item group flex items-center justify-between gap-4 border-b border-background-200/70 py-5 cursor-pointer"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="flex flex-col">
                      <span className="font-heading text-[24px] font-bold leading-tight text-foreground-950 transition-colors duration-300 group-hover:text-primary-600">
                        {item.label}
                      </span>
                      <span className="mt-1 text-xs text-foreground-500">
                        {item.jp}
                      </span>
                    </span>
                  </span>
                  <i className="ri-arrow-right-up-line text-lg text-foreground-300 transition-colors duration-300 group-hover:text-primary-600" />
                </a>
              ))}
            </nav>

            <div style={{ animationDelay: "280ms" }} className="animate-menu-item mt-auto pt-10">
              <div className="rounded-lg bg-background-100 border border-background-200/70 p-5">
                <p className="font-label text-[10px] tracking-[0.28em] uppercase text-foreground-400">
                  Role
                </p>
                <p className="mt-2 text-sm font-bold text-foreground-950">
                  Web Designer / Coder
                </p>
                <p className="mt-1 text-xs text-foreground-600">
                  サイト制作から運用・発信まで対応
                </p>
              </div>
              <p className="mt-6 font-label text-[11px] tracking-[0.1em] text-foreground-400">
                © 2026 MEGUMI TERASAKI
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}