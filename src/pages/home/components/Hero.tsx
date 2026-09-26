export default function Hero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-background-100">
      {/* 大きな写真（スマホ版に準拠した写真バンド） */}
      <div className="relative w-full h-[58svh] min-h-[400px] md:h-[70vh] md:min-h-[560px] overflow-hidden">
        <img
          src="https://storage.helloreaddy.io/project_files/1a95bb11-e279-4085-a76e-0522cb3e10df/20fc981e-99a5-402d-a861-49f645b68650_compressed_sakiphotoPAR539051106_TP_V.webp"
          alt="ノートパソコンでコーディング作業をする手元"
          title="Web Design / Coding ポートフォリオ"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-x-0 top-0 h-24 md:h-28 bg-gradient-to-b from-black/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-2/5 md:h-[30%] bg-gradient-to-t from-background-100 via-background-100/85 md:via-background-100/40 to-transparent" />
      </div>

      {/* 写真の下端に重なる見出し（右寄せ） */}
      <div className="relative z-10 -mt-14 md:-mt-20 lg:-mt-28 px-5 md:px-10">
        <div className="mx-auto w-full max-w-[1180px] text-right">
          <h1 className="flex flex-col items-end text-[24px] md:text-[40px] lg:text-[48px] font-bold leading-[1.45] md:leading-[1.4] tracking-tight text-foreground-950">
            <span>サイトの制作から、</span>
            <span>
              <span className="text-primary-600">運用・発信</span>まで。
            </span>
          </h1>
        </div>
      </div>

      {/* 本文＋ボタン */}
      <div className="relative z-0 px-5 md:px-10 pt-6 md:pt-10 pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1180px] md:text-center">
          <p className="max-w-xl md:mx-auto text-[14px] md:text-[15px] leading-[2] text-foreground-700">
            <span className="text-primary-700">HTML / CSS</span>と
            <span className="text-primary-700">WordPress</span>を軸に、サイト制作から更新・保守まで対応。
            <br />
            正確さとスピード感を大切に、現場で使える形に仕上げます。
          </p>

          <div className="mt-8 md:mt-9 flex flex-col md:flex-row md:items-center md:justify-center gap-3">
            <a
              href="#works"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-primary-600 text-background-50 px-7 py-3.5 font-label text-[13px] tracking-[0.08em] hover:bg-primary-700 transition-colors cursor-pointer"
            >
              制作に携わったサイト
            </a>
            <a
              href="#skills"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-foreground-950/20 text-foreground-950 px-7 py-3.5 font-label text-[13px] tracking-[0.08em] hover:bg-foreground-950/5 transition-colors cursor-pointer"
            >
              スキル・経歴を見る
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}