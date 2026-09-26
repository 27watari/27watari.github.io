import { useState } from "react";
import { works } from "@/mocks/works";
import WorkLightbox from "@/pages/home/components/WorkLightbox";

export default function Works() {
  const [activeWork, setActiveWork] = useState<
    (typeof works)[number] | null
  >(null);

  return (
    <section id="works" className="w-full bg-background-50 py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-10">
        <div className="reveal text-center md:text-left">
          <p className="font-label text-[11px] tracking-[0.2em] uppercase text-primary-600">
            Works
          </p>
          <h2 className="mt-3 text-2xl md:text-[28px] font-bold text-foreground-950">
            制作実績
          </h2>
          <p className="mt-4 max-w-2xl text-left text-[14px] md:text-[15px] leading-[1.95] text-foreground-600">
            実務で更新・改修に関わったサイトと、個人開発のプロジェクトです。
            <br />
            担当範囲は、サイト保守・レスポンシブ対応・コンテンツ制作などです。
          </p>
        </div>

        <div className="mt-8 md:mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-7">
          {works.map((work, index) => (
            <article
              key={work.id}
              className="reveal group flex flex-col rounded-lg overflow-hidden bg-background-100 border border-background-200/70 hover:border-primary-300 transition-colors"
              style={{ transitionDelay: `${(index % 2) * 90}ms` }}
            >
              <button
                type="button"
                onClick={() => setActiveWork(work)}
                aria-label={`${work.title} の画像を拡大表示`}
                className="relative block w-full h-[210px] md:h-[300px] overflow-hidden bg-background-200 cursor-zoom-in"
              >
                <img
                  src={work.image}
                  alt={`${work.title} のサイトイメージ`}
                  title={`${work.title} 制作実績`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-background-50/90 backdrop-blur-sm px-3 py-1 font-label text-[10px] tracking-[0.16em] uppercase text-foreground-700">
                  {work.category}
                </span>
                <span className="absolute bottom-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-background-50/90 backdrop-blur-sm text-foreground-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <i className="ri-zoom-in-line w-5 h-5 flex items-center justify-center text-[18px]" />
                </span>
              </button>

              <div className="flex flex-col flex-1 p-5 md:p-7">
                <h3 className="text-lg md:text-xl font-bold text-foreground-950">
                  {work.title}
                </h3>
                <p className="mt-3 text-sm md:text-[15px] leading-[1.9] text-foreground-600">
                  {work.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary-100 px-3 py-1 font-label text-[10px] tracking-[0.1em] text-secondary-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {work.url ? (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-label text-[11px] tracking-[0.2em] uppercase text-primary-600 group-hover:text-primary-700 transition-colors cursor-pointer"
                  >
                    サイトを見る
                  </a>
                ) : (
                  <span className="mt-6 inline-flex items-center gap-2 font-label text-[11px] tracking-[0.2em] uppercase text-foreground-400">
                    {work.status || "制作実績"}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeWork && (
        <WorkLightbox
          image={activeWork.image}
          title={activeWork.title}
          category={activeWork.category}
          onClose={() => setActiveWork(null)}
        />
      )}
    </section>
  );
}