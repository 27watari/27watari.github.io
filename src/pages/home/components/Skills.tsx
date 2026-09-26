import { skillCategories, tools } from "@/mocks/profile";

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-background-100 py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-10">
        <div className="reveal max-w-2xl mx-auto md:mx-0 text-center md:text-left">
          <p className="font-label text-[11px] tracking-[0.2em] uppercase text-primary-600">
            Skills
          </p>
          <h2 className="mt-3 text-2xl md:text-[28px] font-bold text-foreground-950">
            スキル
          </h2>
          <p className="mt-4 max-w-2xl text-left text-[14px] md:text-[15px] leading-[1.95] text-foreground-600">
            実務での更新・運用経験をベースに、正確かつスピード感のある業務遂行を心がけています。
          </p>
        </div>

        <div className="mt-8 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {skillCategories.map((skill, index) => (
            <div
              key={skill.id}
              className="reveal flex items-start gap-4 md:gap-5 rounded-lg bg-background-50 border border-background-200/70 p-5 md:p-7"
              style={{ transitionDelay: `${(index % 2) * 80}ms` }}
            >
              <div className="w-12 h-12 shrink-0 flex items-center justify-center rounded-full bg-accent-100 text-accent-700">
                <i className={`${skill.icon} text-xl`} />
              </div>
              <div>
                <p className="font-label text-[10px] tracking-[0.24em] uppercase text-foreground-500">
                  {skill.category}
                </p>
                <h3 className="mt-1.5 text-base md:text-lg font-bold text-foreground-950">
                  {skill.skillSet}
                </h3>
                <p className="mt-2 text-sm md:text-[15px] leading-[1.9] text-foreground-600">
                  {skill.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 md:mt-12 rounded-lg bg-secondary-100 border border-secondary-200/70 p-5 md:p-8">
          <h3 className="font-label text-[11px] tracking-[0.28em] uppercase text-primary-600">
            使用ソフト・ツール
          </h3>
          <div className="mt-5 md:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {tools.map((group) => (
              <div key={group.label}>
                <p className="font-label text-[10px] tracking-[0.2em] uppercase text-foreground-500">
                  {group.label}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="whitespace-nowrap rounded-full bg-background-50 px-3.5 py-1.5 text-xs md:text-sm text-foreground-700 border border-secondary-200/80"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}