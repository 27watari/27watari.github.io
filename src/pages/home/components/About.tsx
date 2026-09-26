import { approach, profileInfo } from "@/mocks/profile";

export default function About() {
  return (
    <section id="about" className="w-full bg-background-50 py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-10">
        <div className="reveal flex flex-wrap items-center justify-center md:justify-between gap-3">
          <p className="font-label text-[11px] tracking-[0.2em] uppercase text-primary-600">
            About
          </p>
          <p className="hidden md:inline-flex items-center gap-2 rounded-full bg-background-100 border border-background-200/70 px-4 py-1.5">
            <span className="font-label text-[10px] tracking-[0.26em] uppercase text-foreground-500">
              Role
            </span>
            <span className="text-[13px] font-bold text-foreground-950">
              {profileInfo.role}
            </span>
          </p>
        </div>

        <h2 className="reveal mt-4 text-center md:text-left text-2xl md:text-[28px] font-bold text-foreground-950">
          私について
        </h2>

        <div className="reveal mt-6 space-y-6">
          {profileInfo.intro.map((paragraph) => (
            <p
              key={paragraph}
              className="text-[14px] md:text-[15px] leading-[2.1] whitespace-pre-line text-foreground-600"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="reveal mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {approach.map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-lg bg-background-100 border border-background-200/70 p-5 md:p-6"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-full bg-accent-100 text-accent-700">
                <i className={`${item.icon} text-lg`} />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground-950">
                {item.title}
              </h3>
              <p className="mt-3 text-sm md:text-[15px] leading-[1.9] text-foreground-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}