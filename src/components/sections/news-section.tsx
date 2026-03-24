import { useReveal } from "@/hooks/use-reveal"
import { useState } from "react"

const NEWS = [
  {
    date: "18 марта 2026",
    tag: "Оборудование",
    title: "Новая линейка фасовочных автоматов для стиков",
    excerpt:
      "Представляем обновлённую серию оборудования для фасовки порошкообразных и пастообразных продуктов с увеличенной производительностью до 400 стиков/мин.",
  },
  {
    date: "05 марта 2026",
    tag: "Партнёрство",
    title: "TARGET PROM GLOBAL расширяет поставки из Турции",
    excerpt:
      "Подписаны новые соглашения с ведущими турецкими производителями термоусадочного и упаковочного оборудования серии VERMO.",
  },
  {
    date: "20 февраля 2026",
    tag: "Сервис",
    title: "Запуск расширенной программы гарантийного обслуживания",
    excerpt:
      "Теперь на весь спектр упаковочных автоматов действует расширенная гарантия до 3 лет с выездным сервисом и поставкой оригинальных запчастей.",
  },
  {
    date: "10 февраля 2026",
    tag: "Выставка",
    title: "Участие в международной выставке упаковочных технологий",
    excerpt:
      "Компания представила флагманские модели мультиголовочных дозаторов и автоматических комплексов на крупнейшей отраслевой выставке.",
  },
  {
    date: "28 января 2026",
    tag: "Проект",
    title: "Успешный запуск линии для фармацевтического предприятия",
    excerpt:
      "Завершён монтаж и пусконаладка полностью автоматизированной линии упаковки для крупного фармацевтического завода в Центральном регионе России.",
  },
  {
    date: "15 января 2026",
    tag: "Оборудование",
    title: "Поставка автоматических комплексов из Китая",
    excerpt:
      "Первая партия высокопроизводительных упаковочных комплексов нового поколения успешно прошла таможенное оформление и готова к отгрузке клиентам.",
  },
]

const TAG_COLORS: Record<string, string> = {
  "Оборудование": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "Партнёрство":  "text-purple-400 border-purple-400/30 bg-purple-400/10",
  "Сервис":       "text-green-400 border-green-400/30 bg-green-400/10",
  "Выставка":     "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
  "Проект":       "text-red-400 border-red-400/30 bg-red-400/10",
}

export function NewsSection() {
  const { ref, isVisible } = useReveal(0.2)
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start flex-col px-6 pt-24 pb-8 md:px-12 md:pt-28 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl flex flex-col h-full">
        {/* Header */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"
          }`}
        >
          <h2 className="mb-1 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Новости
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">/ Последние события</p>
        </div>

        {/* News grid */}
        <div className="grid flex-1 gap-4 overflow-hidden md:grid-cols-2 lg:grid-cols-3">
          {NEWS.map((item, i) => (
            <div
              key={i}
              className={`group flex flex-col justify-between border border-foreground/10 p-5 transition-all duration-700 hover:border-foreground/25 hover:bg-foreground/5 cursor-pointer rounded-lg ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div>
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2 py-0.5 font-mono text-xs ${
                      TAG_COLORS[item.tag] ?? "text-foreground/50 border-foreground/20 bg-foreground/5"
                    }`}
                  >
                    {item.tag}
                  </span>
                  <span className="font-mono text-xs text-foreground/40">{item.date}</span>
                </div>

                <h3 className="mb-2 font-sans text-base font-light leading-snug text-foreground transition-colors group-hover:text-foreground/90 md:text-lg">
                  {item.title}
                </h3>

                <p
                  className={`font-mono text-xs leading-relaxed text-foreground/60 transition-all duration-500 ${
                    expanded === i ? "max-h-40 opacity-100" : "max-h-0 overflow-hidden opacity-0 md:max-h-40 md:opacity-100"
                  }`}
                >
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-3 flex items-center gap-1 font-mono text-xs text-foreground/30 transition-colors group-hover:text-foreground/60">
                <span>Читать далее</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
