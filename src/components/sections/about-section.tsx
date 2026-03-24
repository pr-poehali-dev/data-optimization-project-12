import { MagneticButton } from "@/components/magnetic-button"
import { useReveal } from "@/hooks/use-reveal"
import { useState, useEffect } from "react"

const GUARANTEE_SLIDES = [
  {
    url: "https://cdn.poehali.dev/projects/6aa484ae-9e0d-4763-b9e2-55d4013903e4/bucket/bb39f555-b1a6-4f4a-ad39-5310b330a0f1.png",
    alt: "Гарантия на упаковочный автомат 3 года",
  },
  {
    url: "https://cdn.poehali.dev/projects/6aa484ae-9e0d-4763-b9e2-55d4013903e4/bucket/5ba555ee-eab2-4872-aff7-91ea1ab40e05.png",
    alt: "Гарантия на упаковочный автомат 2 года",
  },
  {
    url: "https://cdn.poehali.dev/projects/6aa484ae-9e0d-4763-b9e2-55d4013903e4/bucket/9efadcdf-3339-460b-86d1-5a790d30116c.png",
    alt: "Гарантия на упаковочный автомат 3 года",
  },
  {
    url: "https://cdn.poehali.dev/projects/6aa484ae-9e0d-4763-b9e2-55d4013903e4/bucket/891933e7-68e4-44ac-9657-5626d90af20f.png",
    alt: "Гарантия на весовой мультиголовочный дозатор 2 года",
  },
  {
    url: "https://cdn.poehali.dev/projects/6aa484ae-9e0d-4763-b9e2-55d4013903e4/bucket/c5bfe79e-0dd7-4ff5-9445-8d0269e99037.png",
    alt: "Гарантия на упаковочный автомат 18 месяцев",
  },
]

export function AboutSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % GUARANTEE_SLIDES.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-4 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-20">
          {/* Left side */}
          <div className="flex flex-col justify-center">
            <div
              className={`mb-6 transition-all duration-700 md:mb-8 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
              }`}
            >
              <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:mb-4 md:text-5xl lg:text-6xl">
                Надёжный
                <br />
                партнёр
                <br />
                <span className="text-foreground/40">в упаковке</span>
              </h2>
            </div>

            <div
              className={`mb-6 space-y-3 transition-all duration-700 md:space-y-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                TARGET PROM GLOBAL — поставщик премиального упаковочного оборудования от ведущих производителей России, Турции и Китая.
              </p>
              <p className="max-w-md text-sm leading-relaxed text-foreground/90 md:text-base">
                Мы предлагаем полный цикл: от подбора оборудования и доставки до монтажа и сервисного сопровождения.
              </p>
            </div>

            <div
              className={`flex flex-wrap gap-3 transition-all duration-700 md:gap-4 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <MagneticButton size="lg" variant="primary" onClick={() => scrollToSection?.(4)}>
                Получить консультацию
              </MagneticButton>
              <MagneticButton size="lg" variant="secondary" onClick={() => scrollToSection?.(1)}>
                Оборудование
              </MagneticButton>
            </div>
          </div>

          {/* Right side — guarantee slider */}
          <div
            className={`flex flex-col items-center justify-center transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <p className="mb-3 self-start font-mono text-xs text-foreground/50">/ Гарантийные обязательства</p>
            <div className="relative w-full overflow-hidden rounded-xl">
              {GUARANTEE_SLIDES.map((slide, i) => (
                <img
                  key={i}
                  src={slide.url}
                  alt={slide.alt}
                  className={`w-full object-cover transition-all duration-700 ${
                    i === current ? "opacity-100 scale-100" : "absolute inset-0 opacity-0 scale-95"
                  }`}
                  style={{ borderRadius: "0.75rem" }}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="mt-4 flex gap-2">
              {GUARANTEE_SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-foreground/80" : "w-1.5 bg-foreground/30 hover:bg-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
