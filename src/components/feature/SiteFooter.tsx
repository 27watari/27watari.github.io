export default function SiteFooter() {
  return (
    <footer className="w-full bg-secondary-100 border-t border-secondary-200/70">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-10 py-12 md:py-16">
        <div className="max-w-md">
          <p className="font-label text-sm tracking-[0.32em] text-foreground-950">
            PORTFOLIO
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground-600">
            サイトの制作から、運用・発信まで。
            <br />
            更新・保守・コーディング、SNS運用、動画編集に対応します。
          </p>
        </div>

        <div className="mt-10 md:mt-12 pt-7 md:pt-8 border-t border-secondary-300/60">
          <p className="font-label text-xs tracking-[0.1em] text-foreground-500">
            © 2026 MEGUMI TERASAKI
          </p>
        </div>
      </div>
    </footer>
  );
}