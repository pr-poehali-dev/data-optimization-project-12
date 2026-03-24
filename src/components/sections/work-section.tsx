import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"
import { MagneticButton } from "@/components/magnetic-button"

const EQUIPMENT = [
  {
    number: "01",
    title: "Фасовка в стики",
    category: "Порошкообразные и пастообразные продукты",
    year: "Топ",
    direction: "left",
    detail: true,
  },
  {
    number: "02",
    title: "Фасовочно-упаковочные линии",
    category: "Пищевая промышленность · Фармацевтика",
    year: "Россия",
    direction: "right",
    detail: false,
  },
  {
    number: "03",
    title: "Термоусадочное оборудование",
    category: "Косметология · Химическая отрасль",
    year: "Турция",
    direction: "left",
    detail: false,
  },
  {
    number: "04",
    title: "Автоматические упаковочные комплексы",
    category: "Промышленность · Логистика",
    year: "Китай",
    direction: "right",
    detail: false,
  },
]

const STICK_ADVANTAGES = [
  { num: "01", title: "Удобство", desc: "Точное дозирование, лёгкое открывание — идеально для конечного потребителя" },
  { num: "02", title: "Экономичность", desc: "Минимум материала и энергии, снижение себестоимости упаковки" },
  { num: "03", title: "Экологичность", desc: "Совместимость с биоразлагаемыми плёнками и современными материалами" },
  { num: "04", title: "Автоматизация", desc: "Полный цикл: дозировка → заполнение → запечатывание → укладка в шоубоксы" },
]

export function WorkSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)
  const [showDetail, setShowDetail] = useState(false)

  if (showDetail) {
    return <StickDetail onBack={() => setShowDetail(false)} scrollToSection={scrollToSection} />
  }

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-10 transition-all duration-700 md:mb-14 ${
            isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Оборудование
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Направления поставок</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {EQUIPMENT.map((item, i) => (
            <div
              key={i}
              className={`group flex items-center justify-between border-b border-foreground/10 py-5 transition-all duration-700 hover:border-foreground/30 md:py-6 ${
                !isVisible
                  ? item.direction === "left"
                    ? "-translate-x-16 opacity-0"
                    : "translate-x-16 opacity-0"
                  : "translate-x-0 opacity-100"
              } ${item.detail ? "cursor-pointer" : ""}`}
              style={{
                transitionDelay: `${i * 120}ms`,
                marginLeft: i % 2 === 0 ? "0" : "auto",
                maxWidth: i % 2 === 0 ? "85%" : "92%",
              }}
              onClick={item.detail ? () => setShowDetail(true) : undefined}
            >
              <div className="flex items-baseline gap-4 md:gap-8">
                <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
                  {item.number}
                </span>
                <div>
                  <h3 className="mb-1 font-sans text-xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
                    {item.title}
                    {item.detail && (
                      <span className="ml-3 font-mono text-xs text-foreground/40 group-hover:text-foreground/60">
                        → подробнее
                      </span>
                    )}
                  </h3>
                  <p className="font-mono text-xs text-foreground/50 md:text-sm">{item.category}</p>
                </div>
              </div>
              <span className={`font-mono text-xs md:text-sm ${item.detail ? "text-foreground/60 group-hover:text-foreground/90" : "text-foreground/30"}`}>
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StickDetail({
  onBack,
  scrollToSection,
}: {
  onBack: () => void
  scrollToSection?: (index: number) => void
}) {
  const { ref, isVisible } = useReveal(0.1)

  const STEPS = [
    { n: "1", title: "Подготовка сырья", desc: "Продукт очищается и измельчается до необходимой консистенции" },
    { n: "2", title: "Дозировка", desc: "Точное измерение количества продукта для каждого стика" },
    { n: "3", title: "Упаковка", desc: "Автоматическое наполнение и герметичное запечатывание пакетов" },
    { n: "4", title: "Контроль качества", desc: "Проверка каждого пакета на дефекты и правильность заполнения" },
    { n: "5", title: "Укладка в шоубоксы", desc: "Группировка и упаковка в коробки для транспортировки и продажи" },
  ]

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center overflow-y-auto px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl py-8">
        <button
          onClick={onBack}
          className={`mb-8 font-mono text-xs text-foreground/50 transition-all duration-500 hover:text-foreground/90 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          ← Назад к оборудованию
        </button>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div>
            <div
              className={`mb-8 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"
              }`}
            >
              <p className="mb-2 font-mono text-xs text-foreground/50">/ Технология упаковки</p>
              <h2 className="font-sans text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Фасовка
                <br />
                в стики
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-foreground/80 md:text-base">
                Упаковка порошкообразных и пастообразных продуктов в удобные стик-пакеты — для пищевых добавок, кофе,
                чая, специй, фармацевтики и косметики.
              </p>
            </div>

            <div
              className={`space-y-4 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <p className="font-mono text-xs text-foreground/50">/ Преимущества</p>
              {STICK_ADVANTAGES.map((a, i) => (
                <div key={i} className="flex gap-4 border-l border-foreground/20 pl-4">
                  <span className="font-mono text-xs text-foreground/30 mt-0.5">{a.num}</span>
                  <div>
                    <p className="font-sans text-sm font-medium text-foreground">{a.title}</p>
                    <p className="font-mono text-xs text-foreground/60">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              className={`mb-6 transition-all duration-700 ${
                isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <p className="mb-4 font-mono text-xs text-foreground/50">/ Процесс фасовки</p>
              <div className="space-y-4">
                {STEPS.map((step, i) => (
                  <div
                    key={i}
                    className={`flex gap-4 transition-all duration-500`}
                    style={{ transitionDelay: `${200 + i * 100}ms` }}
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/20 font-mono text-xs text-foreground/50">
                      {step.n}
                    </div>
                    <div>
                      <p className="font-sans text-sm font-light text-foreground">{step.title}</p>
                      <p className="font-mono text-xs text-foreground/55">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`mt-8 flex gap-3 transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <MagneticButton variant="primary" size="lg" onClick={() => scrollToSection?.(4)}>
                Запросить подбор
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
