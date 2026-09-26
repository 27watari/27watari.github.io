import { useEffect } from "react";

type WorkLightboxProps = {
  image: string;
  title: string;
  category: string;
  onClose: () => void;
};

export default function WorkLightbox({
  image,
  title,
  category,
  onClose,
}: WorkLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground-950/90 p-4 md:p-10 cursor-zoom-out"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} の画像プレビュー`}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="閉じる"
        className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-background-50/90 text-foreground-900 hover:bg-background-50 transition-colors cursor-pointer"
      >
        <i className="ri-close-line w-6 h-6 flex items-center justify-center text-[22px]" />
      </button>

      <figure
        className="flex flex-col items-center max-w-full max-h-full"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-lg bg-background-100">
          <img
            src={image}
            alt={`${title} のサイトイメージ`}
            title={`${title} 制作実績`}
            className="block max-w-[92vw] max-h-[76vh] md:max-w-[86vw] md:max-h-[82vh] w-auto h-auto object-contain"
          />
        </div>
        <figcaption className="mt-4 md:mt-5 text-center">
          <span className="font-label text-[10px] tracking-[0.18em] uppercase text-background-200">
            {category}
          </span>
          <p className="mt-1 text-sm md:text-base font-bold text-background-50">
            {title}
          </p>
        </figcaption>
      </figure>
    </div>
  );
}