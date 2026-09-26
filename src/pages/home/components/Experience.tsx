import { career } from "@/mocks/profile";

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-background-100 py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-10">
        <div className="reveal max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <p className="font-label text-[11px] tracking-[0.2em] uppercase text-primary-600">
            Experience
          </p>
          <h2 className="mt-3 text-2xl md:text-[28px] font-bold text-foreground-950">
            職務経歴
          </h2>
          <p className="mt-4 max-w-2xl text-left text-[14px] md:text-[15px] leading-[1.95] text-foreground-600">
            サイトの保守・改修から、コンテンツ運用、アクセス解析まで。
            <br />
            実務で積み上げてきた経験をまとめました。
          </p>
        </div>

        <div className="mt-8 md:mt-14 space-y-7 md:space-y-10">
          {career.map((item, index) => (
            <article
              key={item.company}
              className="reveal grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 border-t border-background-200/70 pt-7 md:pt-8"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="md:col-span-4">
                <h3 className="whitespace-pre-line text-lg font-bold text-foreground-950">
                  {item.company}
                </h3>
                <p className="mt-2 font-label text-xs tracking-[0.12em] text-accent-700">
                  {item.role}
                </p>
                <p className="mt-2 inline-flex items-center gap-1.5 font-label text-[12px] tracking-[0.06em] text-foreground-600">
                  <i className="ri-calendar-line text-foreground-400 w-4 h-4 flex items-center justify-center" />
                  <span>{item.period}</span>
                </p>
              </div>
              <ul className="md:col-span-8 space-y-3">
                {item.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm md:text-[15px] leading-[1.9] text-foreground-700"
                  >
                    <i className="ri-check-line text-accent-600 w-4 h-4 mt-1 shrink-0 flex items-center justify-center" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}