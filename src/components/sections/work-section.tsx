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

const TABS = [
  { id: "stick", label: "Фасовка в стики" },
  { id: "carton", label: "Stick-in-Carton" },
  { id: "vertical", label: "Вертикальные автоматы" },
]

const STICK_ADVANTAGES = [
  { num: "01", title: "Удобство", desc: "Точное дозирование, лёгкое открывание — идеально для конечного потребителя" },
  { num: "02", title: "Экономичность", desc: "Минимум материала и энергии, снижение себестоимости упаковки" },
  { num: "03", title: "Экологичность", desc: "Совместимость с биоразлагаемыми плёнками и современными материалами" },
  { num: "04", title: "Автоматизация", desc: "Полный цикл: дозировка → заполнение → запечатывание → укладка в шоубоксы" },
]

const STICK_STEPS = [
  { n: "1", title: "Подготовка сырья", desc: "Продукт очищается и измельчается до необходимой консистенции" },
  { n: "2", title: "Дозировка", desc: "Точное измерение количества продукта для каждого стика" },
  { n: "3", title: "Упаковка", desc: "Автоматическое наполнение и герметичное запечатывание пакетов" },
  { n: "4", title: "Контроль качества", desc: "Проверка каждого пакета на дефекты и правильность заполнения" },
  { n: "5", title: "Укладка в шоубоксы", desc: "Группировка и упаковка в коробки для транспортировки и продажи" },
]

const CARTON_ADVANTAGES = [
  { num: "01", title: "Высокая производительность", desc: "Упаковка большого количества изделий за короткий срок — максимальная пропускная способность производства" },
  { num: "02", title: "Автоматизация процесса", desc: "Автоматическое управление всеми этапами снижает ручной труд, минимизирует ошибки и повышает эффективность цикла" },
  { num: "03", title: "Надёжность и долговечность", desc: "Высококачественные компоненты и тщательная инженерия обеспечивают длительный срок службы и низкие затраты на обслуживание" },
  { num: "04", title: "Гибкость настройки", desc: "Быстрая перенастройка на разные размеры картонных коробок для адаптации к требованиям любого заказчика" },
  { num: "05", title: "Экономичность эксплуатации", desc: "Эффективное использование материалов и энергии снижает производственные затраты и повышает рентабельность" },
]

const VERTICAL_FEATURES = [
  { num: "01", title: "До 180 упаковок/мин", desc: "Высокая производительность с системой непрерывной протяжки плёнки — минимум простоев" },
  { num: "02", title: "Гарантия 3 года", desc: "Подтверждение высокого качества и долговечности — полное гарантийное сопровождение" },
  { num: "03", title: "Вакуумная протяжка", desc: "Контроль подачи упаковочного материала — исключает складки и перекосы плёнки" },
  { num: "04", title: "Серводвигатель", desc: "Плавное и точное движение механизмов повышает общую эффективность процесса" },
  { num: "05", title: "Сенсорный интерфейс", desc: "Большой экран с дружественным интерфейсом — интуитивная настройка и мониторинг" },
]

export function WorkSection({ scrollToSection }: { scrollToSection?: (index: number) => void }) {
  const { ref, isVisible } = useReveal(0.3)
  const [showDetail, setShowDetail] = useState(false)

  if (showDetail) {
    return <EquipmentDetail onBack={() => setShowDetail(false)} scrollToSection={scrollToSection} />
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

function EquipmentDetail({
  onBack,
  scrollToSection,
}: {
  onBack: () => void
  scrollToSection?: (index: number) => void
}) {
  const { ref, isVisible } = useReveal(0.1)
  const [activeTab, setActiveTab] = useState("stick")

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col overflow-y-auto px-6 pt-20 pb-8 md:px-12 md:pt-24 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col h-full">
        {/* Back + tabs */}
        <div className={`mb-6 transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <button
            onClick={onBack}
            className="mb-4 font-mono text-xs text-foreground/50 transition-colors hover:text-foreground/90"
          >
            ← Назад к оборудованию
          </button>

          <div className="flex gap-1 overflow-x-auto pb-1">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`shrink-0 rounded-lg px-4 py-2 font-mono text-xs transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-foreground/15 text-foreground"
                    : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "stick" && (
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <p className="mb-2 font-mono text-xs text-foreground/50">/ Технология упаковки</p>
                <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:text-4xl">
                  Фасовка в стики
                </h2>
                <p className="mb-6 max-w-md text-sm leading-relaxed text-foreground/80">
                  Упаковка порошкообразных и пастообразных продуктов в удобные стик-пакеты — для пищевых добавок, кофе, чая, специй, фармацевтики и косметики.
                </p>
                <p className="mb-4 font-mono text-xs text-foreground/50">/ Преимущества</p>
                <div className="space-y-3">
                  {STICK_ADVANTAGES.map((a, i) => (
                    <div key={i} className="flex gap-4 border-l border-foreground/20 pl-4">
                      <span className="mt-0.5 font-mono text-xs text-foreground/30">{a.num}</span>
                      <div>
                        <p className="font-sans text-sm font-medium text-foreground">{a.title}</p>
                        <p className="font-mono text-xs text-foreground/60">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`} style={{ transitionDelay: "150ms" }}>
                <p className="mb-4 font-mono text-xs text-foreground/50">/ Процесс фасовки</p>
                <div className="space-y-4">
                  {STICK_STEPS.map((step, i) => (
                    <div key={i} className="flex gap-4">
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
                <div className="mt-8">
                  <MagneticButton variant="primary" size="lg" onClick={() => scrollToSection?.(5)}>
                    Запросить подбор
                  </MagneticButton>
                </div>
              </div>
            </div>
          )}

          {activeTab === "carton" && (
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <p className="mb-2 font-mono text-xs text-foreground/50">/ Система автоматической упаковки</p>
                <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:text-4xl">
                  Automatic<br />Stick-in-Carton
                </h2>
                <p className="mb-6 max-w-md text-sm leading-relaxed text-foreground/80">
                  Инновационная система обладает высоким уровнем автоматизации и является оптимальным решением для предприятий, стремящихся повысить конкурентоспособность.
                </p>
                <p className="mb-4 font-mono text-xs text-foreground/50">/ Преимущества системы</p>
                <div className="space-y-3">
                  {CARTON_ADVANTAGES.map((a, i) => (
                    <div key={i} className="flex gap-4 border-l border-foreground/20 pl-4">
                      <span className="mt-0.5 font-mono text-xs text-foreground/30">{a.num}</span>
                      <div>
                        <p className="font-sans text-sm font-medium text-foreground">{a.title}</p>
                        <p className="font-mono text-xs text-foreground/60">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`flex flex-col justify-between transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`} style={{ transitionDelay: "150ms" }}>
                <div>
                  <p className="mb-4 font-mono text-xs text-foreground/50">/ Итог</p>
                  <p className="max-w-md text-sm leading-relaxed text-foreground/80">
                    Система Automatic Stick-in-Carton — это современное решение для предприятий пищевой, фармацевтической и косметической промышленности, где требуется точная автоматическая укладка стиков в картонные коробки с минимальными трудозатратами.
                  </p>
                </div>
                <div className="mt-8">
                  <MagneticButton variant="primary" size="lg" onClick={() => scrollToSection?.(5)}>
                    Получить консультацию
                  </MagneticButton>
                </div>
              </div>
            </div>
          )}

          {activeTab === "vertical" && (
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                <p className="mb-2 font-mono text-xs text-foreground/50">/ Упаковочное оборудование</p>
                <h2 className="mb-3 font-sans text-3xl font-light leading-[1.1] tracking-tight text-foreground md:text-4xl">
                  Вертикальные<br />упаковочные автоматы
                </h2>
                <p className="mb-6 max-w-md text-sm leading-relaxed text-foreground/80">
                  Высокопроизводительные машины с системой непрерывной протяжки плёнки, обеспечивающие бесперебойную работу и минимальные простои производства.
                </p>
                <p className="mb-4 font-mono text-xs text-foreground/50">/ Ключевые характеристики</p>
                <div className="space-y-3">
                  {VERTICAL_FEATURES.map((a, i) => (
                    <div key={i} className="flex gap-4 border-l border-foreground/20 pl-4">
                      <span className="mt-0.5 font-mono text-xs text-foreground/30">{a.num}</span>
                      <div>
                        <p className="font-sans text-sm font-medium text-foreground">{a.title}</p>
                        <p className="font-mono text-xs text-foreground/60">{a.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`flex flex-col justify-between transition-all duration-700 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`} style={{ transitionDelay: "150ms" }}>
                <div>
                  <p className="mb-4 font-mono text-xs text-foreground/50">/ Технологии управления</p>
                  <div className="space-y-4">
                    {[
                      { title: "Автоматические системы управления", desc: "Точное управление процессом упаковки на всех этапах производственного цикла" },
                      { title: "Вакуумная протяжка плёнки", desc: "Оптимизированная подача упаковочного материала — исключает складки и перекосы" },
                      { title: "Сенсорный экран управления", desc: "Дружественный интерфейс упрощает настройку и мониторинг — интуитивно понятен даже новичкам" },
                    ].map((item, i) => (
                      <div key={i} className="rounded-lg border border-foreground/10 p-4">
                        <p className="mb-1 font-sans text-sm font-medium text-foreground">{item.title}</p>
                        <p className="font-mono text-xs text-foreground/60">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8">
                  <MagneticButton variant="primary" size="lg" onClick={() => scrollToSection?.(5)}>
                    Запросить подбор
                  </MagneticButton>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
