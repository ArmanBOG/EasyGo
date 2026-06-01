import type { ReactNode } from "react";

type CardProps = {
  title: string;
  body?: string;
  eyebrow?: string;
};

const problems = [
  {
    title: "Неиспользуемая cargo-емкость",
    body: "Свободное пространство на пассажирских рейсах остается недомонетизированным.",
  },
  {
    title: "Ручная координация",
    body: "Малые грузы требуют сложной связи между курьером, аэропортом и авиакомпанией.",
  },
  {
    title: "Нет цифрового слоя",
    body: "Рынку не хватает единой платформы для распределения авиагрузов.",
  },
  {
    title: "Низкая прозрачность",
    body: "Статусы, ETA и емкость рейса не видны в едином интерфейсе.",
  },
];

const steps = ["Клиент", "Курьер", "Аэропорт", "Рейс", "Прибытие", "Доставка"];
const statuses = ["Создано", "Курьер назначен", "В аэропорту", "В полете", "Передано получателю"];

const cities = [
  { name: "Almaty", tier: "primary", className: "left-[72%] top-[76%]" },
  { name: "Astana", tier: "primary", className: "left-[52%] top-[34%]" },
  { name: "Shymkent", tier: "primary", className: "left-[48%] top-[80%]" },
  { name: "Atyrau", tier: "primary", className: "left-[16%] top-[66%]" },
  { name: "Kostanay", tier: "secondary", className: "left-[40%] top-[27%]" },
  { name: "Petropavlovsk", tier: "secondary", className: "left-[51%] top-[18%]" },
  { name: "Pavlodar", tier: "secondary", className: "left-[66%] top-[28%]" },
  { name: "Karaganda", tier: "secondary", className: "left-[57%] top-[46%]" },
  { name: "Oral", tier: "secondary", className: "left-[13%] top-[46%]" },
  { name: "Aktobe", tier: "secondary", className: "left-[28%] top-[52%]" },
  { name: "Semey", tier: "secondary", className: "left-[77%] top-[40%]" },
  { name: "Ust-Kamenogorsk", tier: "secondary", className: "left-[84%] top-[50%]" },
];

const regionalNodes = [
  { name: "Uzbekistan", hub: "Tashkent", className: "left-[46%] top-[88%]" },
  { name: "Kyrgyzstan", hub: "Bishkek", className: "left-[73%] top-[87%]" },
];

const internationalCorridors = [
  { name: "Turkey", hub: "Istanbul", className: "left-[5%] top-[68%]" },
  { name: "UAE", hub: "Dubai", className: "left-[26%] top-[91%]" },
  { name: "India", hub: "Delhi", className: "left-[63%] top-[92%]" },
  { name: "China", hub: "Urumqi / Shanghai", className: "left-[93%] top-[48%]" },
];

const marketStats = [
  { value: "+4%", label: "ежегодный рост мирового air cargo рынка" },
  { value: "54%", label: "емкости через belly capacity пассажирских самолетов" },
  { value: "E-commerce", label: "спрос на скорость и прогнозируемость" },
  { value: "Низкая цифровизация", label: "окно для новой инфраструктурной платформы" },
];

const ecosystemNodes = [
  "Airlines",
  "Airports",
  "Couriers",
  "Tracking",
  "Marketplace",
  "API",
  "AI Routing",
  "E-commerce",
];

const operationStatuses = [
  "Заявка создана",
  "Курьер назначен",
  "Емкость подтверждена",
  "Груз принят",
  "Аэропорт синхронизирован",
  "В полете",
];

const airlineTrust = [
  ["Рост доходности", "Новая выручка без новых рейсов"],
  ["Контроль грузопотока", "Структурированный поток малых грузов"],
  ["Прозрачность операций", "Видимый handoff, статусы и ETA"],
  ["Готовность к интеграции", "API и аэропортовые процессы"],
];

const contactCards = [
  ["Авиакомпаниям", "Интеграция свободной емкости рейсов"],
  ["Инвесторам", "Будущее авиационной логистики Центральной Азии"],
  ["Партнерам", "Развитие региональной cargo-сети"],
];

const contactMethods = [
  { label: "WhatsApp", value: "+7 776 111 6454", href: "https://wa.me/77761116454", mark: "WA" },
  { label: "Telegram", value: "Скоро подключим", href: "#contact", mark: "TG" },
  { label: "Email", value: "hello@easy-go.kz", href: "mailto:hello@easy-go.kz", mark: "@" },
];

const roadmap = [
  "MVP",
  "Kazakhstan Network",
  "Central Asia Expansion",
  "Live Capacity Marketplace",
  "Airport Integrations",
  "AI Cargo Infrastructure",
];

function Button({ children, variant = "primary", href = "#contact" }: { children: ReactNode; variant?: "primary" | "secondary"; href?: string }) {
  return (
    <a
      href={href}
      className={
        variant === "primary"
          ? "inline-flex h-12 items-center justify-center rounded-md bg-easyYellow px-6 text-sm font-semibold text-white shadow-[0_0_34px_rgba(139,92,246,.38)] transition hover:bg-violet-400"
          : "inline-flex h-12 items-center justify-center rounded-md border border-violet-300/30 bg-white/[0.08] px-6 text-sm font-semibold text-white backdrop-blur transition hover:border-violet-200/70 hover:bg-white/[0.12]"
      }
    >
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-easyYellow">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-7 text-slate-300 md:text-lg">{text}</p> : null}
    </div>
  );
}

function Card({ title, body, eyebrow }: CardProps) {
  return (
    <div className="glass-panel rounded-lg border p-6 backdrop-blur-xl">
      {eyebrow ? <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-easyYellow">{eyebrow}</p> : null}
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      {body ? <p className="mt-3 text-sm leading-6 text-slate-300">{body}</p> : null}
    </div>
  );
}

function HeroSystem() {
  return (
    <div className="cinematic-panel relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-lg border border-violet-300/20 bg-ink/70 p-5 shadow-glow backdrop-blur-xl md:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,.25),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(245,158,11,.14),transparent_24%),linear-gradient(135deg,rgba(255,255,255,.06),transparent)]" />
      <div className="absolute inset-0 network-grid opacity-50" />
      <div className="ambient-sweep absolute inset-0" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 60" preserveAspectRatio="none">
        <path className="route-animated" d="M12 42 C28 20, 45 18, 58 31 S75 47, 91 22" />
        <path className="route-animated route-delay" d="M10 18 C25 35, 45 42, 60 24 S78 12, 92 35" />
        <path className="route-animated route-soft" d="M18 50 C34 45, 48 34, 66 38 S83 47, 95 50" />
      </svg>
      <div className="relative grid min-h-[410px] gap-4 md:grid-cols-[1fr_380px]">
        <div className="relative overflow-hidden rounded-lg border border-violet-300/20 bg-navy/70 p-5 backdrop-blur">
          <div className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-easyYellow shadow-[0_0_24px_rgba(139,92,246,.95)]" />
          <div className="absolute left-[58%] top-[48%] h-3 w-3 rounded-full bg-white shadow-[0_0_24px_rgba(255,255,255,.8)]" />
          <div className="float-card absolute right-5 top-5 rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-left backdrop-blur">
            <p className="text-xs text-muted">AI routing</p>
            <p className="mt-1 text-sm font-semibold text-white">активен</p>
          </div>
          <div className="float-card absolute bottom-24 left-5 rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-left backdrop-blur" style={{ animationDelay: "0.8s" }}>
            <p className="text-xs text-muted">Live-емкость</p>
            <p className="mt-1 text-sm font-semibold text-white">синхронизирована</p>
          </div>
          <div className="flight-marker absolute left-[37%] top-[34%] flex h-11 w-11 items-center justify-center rounded-full border border-violet-300/40 bg-violet-500/15 text-lg text-white">
            &#9992;
          </div>
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Live operating layer</p>
            <h3 className="mt-3 text-3xl font-semibold text-white">ALA &rarr; NQZ</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {["KC721", "ETA 01:42", "Емкость OK"].map((item) => (
                <span key={item} className="rounded-md border border-white/10 bg-white/[0.07] px-3 py-2 text-sm text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="grid content-center gap-4">
          {[
            ["+128", "доставок сегодня"],
            ["72%", "belly capacity использовано"],
            ["ETA", "оптимизация активна"],
            ["Live", "маршрутизация включена"],
          ].map(([value, label], index) => (
            <div key={label} className="float-card premium-metric-card glass-panel rounded-lg border p-5" style={{ animationDelay: `${index * 0.35}s` }}>
              <p className="text-3xl font-semibold text-white">{value}</p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NetworkMap() {
  const majorRoutes = [
    "M52 34 C58 48, 65 65, 72 76",
    "M52 34 C48 48, 47 64, 48 80",
    "M16 66 C29 50, 42 40, 52 34",
    "M48 80 C55 82, 64 82, 72 76",
  ];
  const secondaryRoutes = [
    "M52 34 C48 28, 43 27, 40 27",
    "M52 34 C52 27, 51 22, 51 18",
    "M52 34 C58 29, 62 28, 66 28",
    "M52 34 C54 38, 56 42, 57 46",
    "M16 66 C18 55, 17 48, 13 46",
    "M16 66 C20 58, 25 54, 28 52",
    "M72 76 C76 62, 78 49, 77 40",
    "M72 76 C81 66, 86 58, 84 50",
    "M57 46 C61 55, 67 68, 72 76",
  ];
  const regionalRoutes = [
    "M72 76 C62 80, 54 84, 46 88",
    "M48 80 C48 83, 47 86, 46 88",
    "M72 76 C73 80, 73 84, 73 87",
    "M52 34 C61 48, 69 68, 73 87",
  ];
  const corridorRoutes = [
    "M16 66 C12 66, 8 67, 5 68",
    "M16 66 C20 78, 24 86, 26 91",
    "M72 76 C73 84, 69 90, 63 92",
    "M72 76 C82 66, 89 56, 93 48",
    "M52 34 C67 26, 84 31, 93 48",
  ];

  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-lg border border-violet-300/20 bg-[linear-gradient(135deg,rgba(139,92,246,.14),rgba(255,255,255,.04))] p-5 shadow-panel md:p-8">
      <div className="absolute inset-0 network-grid opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="relative min-h-[600px] overflow-hidden rounded-lg border border-violet-300/20 bg-[#070716]/74">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_34%,rgba(139,92,246,.24),transparent_24%),radial-gradient(circle_at_72%_76%,rgba(245,158,11,.13),transparent_22%),radial-gradient(circle_at_92%_48%,rgba(103,232,249,.12),transparent_20%),linear-gradient(180deg,transparent,rgba(3,3,12,.58))]" />
        <div className="network-radar absolute left-[52%] top-[34%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/20" />
        <div className="network-radar absolute left-[72%] top-[76%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-orange-300/15" style={{ animationDelay: "1.1s" }} />
        <div className="network-radar absolute left-[16%] top-[66%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/10" style={{ animationDelay: "2s" }} />
        <div className="network-expansion-halo absolute left-[46%] top-[88%] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/15" />
        <div className="network-expansion-halo absolute left-[93%] top-[48%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-200/12" style={{ animationDelay: "1.7s" }} />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            className="kazakhstan-outline"
            d="M10 51 C16 38, 27 30, 39 27 C47 18, 62 17, 73 24 C84 29, 91 41, 88 53 C86 64, 75 71, 68 79 C58 87, 44 84, 34 79 C22 77, 11 68, 10 51 Z"
          />
          {majorRoutes.map((route, index) => (
            <path key={route} className={`route-animated ${index % 2 ? "route-delay" : ""}`} d={route} />
          ))}
          {secondaryRoutes.map((route, index) => (
            <path key={route} className="route-animated route-soft network-secondary-route" d={route} style={{ animationDelay: `${index * -0.55}s` }} />
          ))}
          {regionalRoutes.map((route, index) => (
            <path key={route} className="regional-route" d={route} style={{ animationDelay: `${index * -0.75}s` }} />
          ))}
          {corridorRoutes.map((route, index) => (
            <path key={route} className="international-route" d={route} style={{ animationDelay: `${index * -1.1}s` }} />
          ))}
        </svg>
        {cities.map((city) => {
          const isPrimary = city.tier === "primary";
          return (
            <div key={city.name} className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center ${city.className}`}>
              <span className={isPrimary ? "pulse-node block h-4 w-4 rounded-full bg-easyYellow" : "network-node-soft block h-3 w-3 rounded-full bg-cyan-200/80"} />
              <span className={isPrimary ? "mt-2 block whitespace-nowrap text-sm font-semibold text-white" : "mt-2 block whitespace-nowrap text-xs font-medium text-slate-300"}>
                {city.name}
              </span>
            </div>
          );
        })}
        {regionalNodes.map((node) => (
          <div key={node.name} className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center ${node.className}`}>
            <span className="regional-node block h-3.5 w-3.5 rounded-full bg-cyan-200" />
            <span className="mt-2 block whitespace-nowrap text-xs font-semibold text-cyan-50">{node.name}</span>
            <span className="mt-1 block whitespace-nowrap text-[10px] text-slate-400">{node.hub}</span>
          </div>
        ))}
        {internationalCorridors.map((node) => (
          <div key={node.name} className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center ${node.className}`}>
            <span className="corridor-node block h-3 w-3 rounded-full border border-violet-200/70 bg-violet-500/25" />
            <span className="mt-2 block whitespace-nowrap text-xs font-medium text-slate-300">{node.name}</span>
            <span className="mt-1 block whitespace-nowrap text-[10px] text-slate-500">{node.hub}</span>
          </div>
        ))}
        <div className="absolute right-5 top-5 rounded-lg border border-violet-300/20 bg-black/35 p-4 text-right backdrop-blur">
          <p className="text-xs text-muted">Сила сети</p>
          <p className="mt-1 text-2xl font-semibold text-white">от Казахстана к глобальным коридорам</p>
          <p className="mt-2 text-xs text-slate-400">Центральная Азия + ОАЭ, Турция, Индия, Китай</p>
        </div>
        <div className="absolute left-5 top-5 max-w-[420px] rounded-lg border border-white/10 bg-black/32 p-4 backdrop-blur">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Слои расширения</p>
          <p className="mt-2 text-lg font-semibold text-white">Ядро Казахстана → региональная сеть → глобальные коридоры</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
            <span className="rounded-full border border-easyYellow/30 px-3 py-1">Казахстан</span>
            <span className="rounded-full border border-cyan-200/20 px-3 py-1">Узбекистан / Кыргызстан</span>
            <span className="rounded-full border border-violet-200/20 px-3 py-1">ОАЭ / Турция / Индия / Китай</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackingDashboard() {
  return (
    <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-[1fr_0.8fr]">
      <div className="glass-panel rounded-lg border p-5 md:p-7">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted">Shipment EG-2048</p>
            <h3 className="mt-2 text-3xl font-semibold text-white">ALA &rarr; NQZ</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <span className="rounded-md bg-white/[0.07] px-3 py-2 text-slate-200">KC721</span>
            <span className="rounded-md bg-white/[0.07] px-3 py-2 text-slate-200">ETA 01:42</span>
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-5">
          {statuses.map((status, index) => (
            <div key={status} className="tracking-step relative" style={{ animationDelay: `${index * 0.45}s` }}>
              <div className={index < 4 ? "tracking-link absolute left-10 top-5 hidden h-px w-full md:block" : ""} />
              <div className="relative flex items-center gap-3 md:block">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-easyYellow bg-easyYellow text-sm font-bold text-white">
                  {index + 1}
                </div>
                <p className="mt-0 text-sm font-semibold text-white md:mt-4">{status}</p>
                <p className="mt-1 text-xs text-muted">{["EG-2048", "ALA-03", "ALA cargo", "KC721", "NQZ handoff"][index]}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">
          <div className="progress-glow h-full w-[68%] rounded-full bg-easyYellow" />
        </div>
      </div>
      <div className="glass-panel rounded-lg border p-5">
        {[
          ["Емкость подтверждена", "72%"],
          ["Курьер назначен", "ALA-03"],
          ["Передача в аэропорту", "12:40"],
          ["Прогресс маршрута", "68%"],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between border-b border-white/10 py-4 last:border-none">
            <span className="text-sm text-slate-300">{label}</span>
            <span className="text-sm font-semibold text-white">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BellyCapacity() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="flex flex-col justify-center">
        <SectionHeader
          eyebrow="Belly capacity"
          title="Монетизация свободной емкости пассажирских рейсов."
          text="EasyGo показывает авиакомпаниям, как невидимая емкость превращается в управляемый цифровой грузовой поток."
        />
      </div>
      <div className="glass-panel relative overflow-hidden rounded-lg border p-6">
        <div className="absolute right-8 top-8 h-28 w-28 rounded-full bg-orange-400/10 blur-3xl" />
        <div className="absolute left-10 top-12 h-36 w-36 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="relative mx-auto max-w-xl">
          <div className="relative h-44 rounded-[999px] border border-violet-300/25 bg-[linear-gradient(90deg,rgba(255,255,255,.08),rgba(139,92,246,.12),rgba(255,255,255,.04))]">
            <div className="absolute left-4 top-1/2 h-20 w-20 -translate-y-1/2 rounded-full border border-white/20 bg-white/[0.06]" />
            <div className="absolute right-[-52px] top-1/2 h-1 w-20 -translate-y-1/2 bg-violet-300/40" />
            <div className="absolute bottom-8 left-[28%] right-[14%] grid grid-cols-8 gap-2">
              {[80, 70, 64, 45, 30, 24, 18, 12].map((height, index) => (
                <span
                  key={index}
                  className={index < 5 ? "cargo-segment rounded-sm bg-easyYellow/90" : "rounded-sm border border-violet-300/30 bg-white/[0.06]"}
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <Card eyebrow="Used" title="62%" body="цифровое распределение" />
            <Card eyebrow="Unused" title="38%" body="потенциал монетизации" />
            <Card eyebrow="Flow" title="Live" body="динамическое назначение" />
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <span className="rounded-md border border-violet-300/15 bg-white/[0.06] px-4 py-3 text-sm text-slate-200">
              Revenue from existing flights
            </span>
            <span className="rounded-md border border-violet-300/15 bg-white/[0.06] px-4 py-3 text-sm text-slate-200">
              No passenger experience disruption
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AirlineTrust() {
  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="glass-panel relative min-h-[390px] overflow-hidden rounded-lg border p-6 md:p-8">
        <div className="absolute inset-0 network-grid opacity-25" />
        <div className="absolute right-8 top-8 h-40 w-40 rounded-full bg-easyYellow/10 blur-3xl" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-easyYellow">Слой для авиакомпаний</p>
          <h3 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white">
            EasyGo помогает авиакомпаниям монетизировать уже существующую инфраструктуру.
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Свободная belly capacity становится управляемым цифровым продуктом: с заявками, подтверждением емкости, статусами и прозрачным handoff.
          </p>
        </div>
        <div className="relative mt-9 grid gap-4 md:grid-cols-3">
          {[
            ["Пассажирский рейс", "регулярный"],
            ["Свободная belly", "доступна"],
            ["EasyGo cargo", "монетизирован"],
          ].map(([title, label], index) => (
            <div key={title} className="rounded-lg border border-violet-300/15 bg-black/25 p-4 backdrop-blur">
              <div className="mb-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className={index === 2 ? "progress-glow h-full w-[82%] rounded-full bg-easyYellow" : "h-full w-[55%] rounded-full bg-violet-300/45"} />
              </div>
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="mt-1 text-xs text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        {airlineTrust.map(([title, text], index) => (
          <div key={title} className="glass-panel rounded-lg border p-5">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-easyYellow/35 bg-easyYellow/15 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <div>
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-sm text-slate-300">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AirportFlow() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="glass-panel relative overflow-hidden rounded-lg border p-6 md:p-8">
        <div className="absolute inset-0 network-grid opacity-25" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/12 blur-3xl" />
        <div className="relative mb-7 grid gap-3 md:grid-cols-3">
          {["ALA ops синхронизирован", "KC721 подтвержден", "ETA пересчитывается"].map((item, index) => (
            <div key={item} className="rounded-md border border-violet-300/15 bg-white/[0.06] px-4 py-3 text-sm text-slate-200 backdrop-blur" style={{ animationDelay: `${index * 0.5}s` }}>
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-easyYellow shadow-[0_0_14px_rgba(139,92,246,.85)]" />
              {item}
            </div>
          ))}
        </div>
        <div className="relative grid gap-4 md:grid-cols-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="operation-step relative rounded-lg border border-violet-300/15 bg-navy/70 p-5 text-center"
              style={{ animationDelay: `${index * 1.8}s` }}
            >
              {index < steps.length - 1 ? <div className="flow-link flow-link-animated absolute left-[62%] top-[42%] hidden h-px w-[76%] md:block" /> : null}
              <div
                className="operation-node mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-easyYellow/50 bg-easyYellow/15 text-sm font-semibold text-white"
                style={{ animationDelay: `${index * 1.8}s` }}
              >
                {index + 1}
              </div>
              <p className="mt-4 text-sm font-semibold text-white">{step}</p>
              <p className="operation-status mt-2 text-xs text-slate-400">{operationStatuses[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Ecosystem() {
  const ecosystemLinks = [
    "M50 50 L16 18",
    "M50 50 L50 9",
    "M50 50 L84 18",
    "M50 50 L91 50",
    "M50 50 L82 84",
    "M50 50 L50 92",
    "M50 50 L16 84",
    "M50 50 L9 50",
  ];

  return (
    <div className="mx-auto max-w-6xl">
      <div className="glass-panel relative min-h-[520px] overflow-hidden rounded-lg border p-6 md:p-10">
        <div className="absolute inset-0 network-grid opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {ecosystemLinks.map((link, index) => (
            <path key={link} className="ecosystem-link-line" d={link} style={{ animationDelay: `${index * -0.45}s` }} />
          ))}
        </svg>
        <div className="ecosystem-core absolute left-1/2 top-1/2 z-10 flex h-48 w-48 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet-200/35 bg-[radial-gradient(circle_at_50%_35%,rgba(168,85,247,.42),rgba(7,7,22,.92)_62%)] text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">EasyGo</p>
            <p className="mt-2 text-xl font-semibold text-white">Core Platform</p>
          </div>
        </div>
        {ecosystemNodes.map((node, index) => {
          const positions = [
            "left-[12%] top-[16%]",
            "left-[42%] top-[7%]",
            "right-[12%] top-[16%]",
            "right-[6%] top-[48%]",
            "right-[16%] bottom-[12%]",
            "left-[42%] bottom-[7%]",
            "left-[12%] bottom-[12%]",
            "left-[6%] top-[48%]",
          ];
          return (
            <div
              key={node}
              className={`ecosystem-node absolute ${positions[index]} rounded-lg border border-violet-300/20 bg-white/[0.07] px-4 py-3 text-sm font-semibold text-white backdrop-blur`}
              style={{ animationDelay: `${index * 0.22}s` }}
            >
              {node}
            </div>
          );
        })}
        <div className="absolute bottom-6 left-1/2 max-w-md -translate-x-1/2 rounded-lg border border-white/10 bg-black/30 px-5 py-3 text-center text-sm text-slate-300 backdrop-blur">
          Операционная логика, данные и capacity marketplace соединяются в одном ядре.
        </div>
      </div>
    </div>
  );
}

function AIRouting() {
  const aiHubs = [
    { code: "ALA", city: "Almaty", className: "left-[72%] top-[76%]", primary: true },
    { code: "GUW", city: "Atyrau", className: "left-[16%] top-[64%]", primary: true },
    { code: "NQZ", city: "Astana", className: "left-[52%] top-[34%]", primary: true },
    { code: "CIT", city: "Shymkent", className: "left-[48%] top-[80%]" },
    { code: "SCO", city: "Aktau", className: "left-[14%] top-[82%]" },
    { code: "KGF", city: "Karaganda", className: "left-[58%] top-[48%]" },
    { code: "PWQ", city: "Pavlodar", className: "left-[66%] top-[29%]" },
  ];
  const aiMetrics = [
    ["Емкость подтверждена", "132 кг"],
    ["ETA обновлен", "2ч 14м"],
    ["Активные рейсы", "6"],
    ["Нагрузка аэропорта", "41%"],
  ];

  return (
    <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="glass-panel rounded-lg border p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.26em] text-easyYellow">AI Routing</p>
        <h3 className="mt-4 text-3xl font-semibold text-white">Интеллектуальное распределение грузов по рейсам.</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Алгоритм сопоставляет маршрут, время, доступную емкость, аэропортовые окна и SLA доставки.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {["Оптимизация маршрутов", "Динамический matching", "Прогнозный ETA", "Распределение емкости"].map((item) => (
            <span key={item} className="rounded-md border border-violet-300/15 bg-white/[0.06] px-4 py-3 text-sm text-slate-200">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="ai-orchestration-panel glass-panel relative overflow-hidden rounded-lg border p-4 md:p-5">
        <div className="absolute inset-0 network-grid opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_72%,rgba(245,158,11,.15),transparent_24%),radial-gradient(circle_at_42%_40%,rgba(139,92,246,.26),transparent_34%),linear-gradient(180deg,rgba(3,3,12,.05),rgba(3,3,12,.74))]" />

        <div className="relative grid min-h-[620px] gap-4 md:min-h-[540px] md:grid-cols-[minmax(0,7fr)_minmax(210px,3fr)]">
          <div className="ai-map-stage relative min-h-[410px] overflow-hidden rounded-lg border border-violet-300/15 bg-[#060616]/70">
            <div className="absolute left-5 top-5 z-20 max-w-[300px]">
              <p className="text-xs uppercase tracking-[0.24em] text-easyYellow">AI Air Cargo Intelligence Engine</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Сканирует сеть, емкость, аэропортовую нагрузку, ETA и активные рейсы.</p>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_52%,rgba(103,232,249,.12),transparent_28%),radial-gradient(circle_at_72%_72%,rgba(245,158,11,.08),transparent_24%)]" />
            <div className="ai-scan-beam absolute inset-y-2 w-1/3 rounded-full bg-[linear-gradient(90deg,transparent,rgba(103,232,249,.12),transparent)] blur-sm" />
            <div className="ai-scan-ring absolute left-[72%] top-[76%] h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20" />
            <div className="ai-scan-ring absolute left-[16%] top-[64%] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-easyYellow/20" style={{ animationDelay: "1.4s" }} />

            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path
                className="kazakhstan-outline ai-kz-outline"
                d="M10 51 C16 38, 27 30, 39 27 C47 18, 62 17, 73 24 C84 29, 91 41, 88 53 C86 64, 75 71, 68 79 C58 87, 44 84, 34 79 C22 77, 11 68, 10 51 Z"
              />
              <path className="ai-route-option" d="M72 76 C63 56, 56 42, 52 34" />
              <path className="ai-route-option route-delay" d="M72 76 C55 82, 34 80, 14 82" />
              <path className="ai-route-option" d="M72 76 C60 72, 52 68, 48 80" style={{ animationDelay: "-1.2s" }} />
              <path className="ai-route-option" d="M52 34 C46 42, 32 54, 16 64" style={{ animationDelay: "-2.3s" }} />
              <path className="ai-route-optimal" d="M72 76 C55 62, 38 58, 16 64" />
              <path className="ai-cargo-trace" d="M72 76 C55 62, 38 58, 16 64" />
            </svg>

            {aiHubs.map((hub) => (
              <div key={hub.code} className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center ${hub.className}`}>
                <span className={hub.primary ? "ai-hub ai-hub-primary block h-4 w-4 rounded-full bg-easyYellow" : "ai-hub block h-3 w-3 rounded-full bg-cyan-200"} />
                <span className="mt-2 rounded-full border border-white/10 bg-black/35 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur">
                  {hub.code}
                </span>
                <span className="mt-1 text-[10px] text-slate-400">{hub.city}</span>
              </div>
            ))}

            <div className="ai-core-orb absolute left-[36%] top-[53%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-200/25 text-center">
              <div>
                <p className="text-lg font-semibold text-white">AI</p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-cyan-100">core</p>
              </div>
            </div>
          </div>

          <aside className="ai-control-panel relative flex flex-col rounded-lg border border-violet-300/15 bg-black/28 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs text-muted">AI анализирует сеть</p>
              <span className="ai-status-dot h-2 w-2 rounded-full bg-cyan-200" />
            </div>
            <div className="mt-5 border-y border-white/10 py-5">
              <p className="text-sm font-semibold text-easyYellow">Маршрут найден</p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <div>
                  <p className="text-2xl font-semibold text-white">KC721</p>
                  <p className="mt-1 text-sm text-slate-300">ALA &rarr; GUW</p>
                </div>
                <span className="rounded-full border border-easyYellow/30 bg-easyYellow/10 px-3 py-1 text-xs font-semibold text-white">
                  выбран
                </span>
              </div>
            </div>

            <div className="mt-5 grid gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">ETA</span>
                <span className="font-semibold text-white">2ч 14м</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Емкость</span>
                <span className="font-semibold text-white">132 кг</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Статус</span>
                <span className="font-semibold text-white">Груз подтвержден</span>
              </div>
            </div>

            <div className="mt-auto grid gap-2 pt-6">
              {aiMetrics.map(([label, value]) => (
                <div key={label} className="ai-control-row flex items-center justify-between rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-xs">
                  <span className="text-slate-400">{label}</span>
                  <span className="font-semibold text-white">{value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function MarketScale() {
  return (
    <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-4">
      {marketStats.map((stat, index) => (
        <div key={stat.value} className="market-card glass-panel overflow-hidden rounded-lg border p-6">
          <p className="text-3xl font-semibold text-easyYellow md:text-4xl">{stat.value}</p>
          <p className="mt-4 min-h-[48px] text-sm leading-6 text-slate-300">{stat.label}</p>
          <svg className="mt-5 h-12 w-full opacity-80" viewBox="0 0 160 48" preserveAspectRatio="none">
            <path className="market-curve" d={`M0 ${40 - index * 3} C38 ${34 - index * 2}, 62 ${38 - index * 5}, 88 ${25 - index * 2} S130 ${18 - index * 2}, 160 ${10 + index}`} />
          </svg>
          <div className="mt-6 flex h-20 items-end gap-2">
            {[34, 44, 52, 68, 78].map((height, barIndex) => (
              <span
                key={barIndex}
                className="chart-bar flex-1 rounded-t bg-easyYellow/70"
                style={{ height: `${height + index * 4}px`, animationDelay: `${barIndex * 0.16}s` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function RoadmapMission() {
  return (
    <div className="mx-auto max-w-6xl glass-panel rounded-lg border p-5 md:p-8">
      <div className="grid gap-4 md:grid-cols-6">
        {roadmap.map((item, index) => (
          <div key={item} className="relative rounded-lg border border-violet-300/15 bg-navy/70 p-5">
            {index < roadmap.length - 1 ? <div className="flow-link absolute left-[60%] top-8 hidden h-px w-[85%] md:block" /> : null}
            <p className="text-xs font-semibold text-easyYellow">Stage {index + 1}</p>
            <h3 className="mt-3 text-base font-semibold leading-6 text-white">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

function FutureVision() {
  return (
    <section className="px-5 py-20 md:px-8" id="future">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-lg border border-violet-300/20 p-8 text-center shadow-glow md:p-16">
        <img src="/hero-bg.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.18] saturate-125" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,12,.78),rgba(7,7,22,.97)),radial-gradient(circle_at_50%_18%,rgba(139,92,246,.34),transparent_34%),radial-gradient(circle_at_78%_70%,rgba(245,158,11,.14),transparent_30%)]" />
        <div className="absolute inset-0 network-grid opacity-25" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 60" preserveAspectRatio="none">
          <path className="route-animated route-soft" d="M5 44 C22 20, 42 22, 54 31 S78 42, 95 16" />
          <path className="future-route" d="M10 18 C35 44, 56 10, 91 40" />
        </svg>
        <div className="network-radar absolute left-1/2 top-[44%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-300/20" />
        <div className="relative">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-easyYellow">The Future of Air Cargo</p>
          <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-6xl">
            EasyGo может стать инфраструктурным слоем авиационной логистики региона.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Цифровая сеть для передачи, маршрутизации и управления грузами между городами, аэропортами и авиакомпаниями.
          </p>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {["Smart-аэропорты", "Live-емкость", "AI cargo routing"].map((item) => (
              <span key={item} className="rounded-md border border-violet-300/20 bg-white/[0.07] px-4 py-3 text-sm text-slate-200 backdrop-blur">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button>Связаться с нами</Button>
            <Button variant="secondary">Запросить презентацию</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="px-5 py-20 md:px-8" id="contact">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-lg border border-violet-300/20 bg-[#070716]/72 p-6 shadow-panel backdrop-blur-xl md:p-10">
        <div className="absolute inset-0 network-grid opacity-20" />
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-500/18 blur-3xl" />
        <div className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-easyYellow">Partnership</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-5xl">Готовы обсудить партнерство?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
              EasyGo формирует цифровую инфраструктуру авиационной логистики нового поколения.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {contactCards.map(([title, text], index) => (
              <div key={title} className="glass-panel rounded-lg border p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-easyYellow">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : "_self"}
                rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-lg border border-violet-300/15 bg-white/[0.055] p-4 backdrop-blur transition hover:border-violet-200/35 hover:bg-white/[0.085]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-easyYellow/35 bg-easyYellow/12 text-xs font-semibold text-white shadow-[0_0_24px_rgba(139,92,246,.22)]">
                  {method.mark}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-white">{method.label}</span>
                  <span className="mt-1 block text-sm text-slate-300">{method.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6 md:px-8">
      <div className="mx-auto max-w-6xl border-t border-white/10 pt-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-2xl font-semibold text-white">EasyGo</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
              Цифровая инфраструктура авиационной логистики Центральной Азии.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <a href="https://wa.me/77761116454" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a>
            <a href="#contact" className="hover:text-white">Telegram</a>
            <a href="mailto:hello@easygo.kz" className="hover:text-white">Email</a>
          </div>
        </div>
        <p className="mt-8 text-xs text-slate-500">© 2026 EasyGo. Aviation cargo infrastructure.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-graphite text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(139,92,246,.30),transparent_25%),radial-gradient(circle_at_82%_2%,rgba(244,114,182,.18),transparent_26%),radial-gradient(circle_at_65%_92%,rgba(245,158,11,.10),transparent_28%),linear-gradient(180deg,#070716,#0b0921_42%,#060611)]" />
      <nav className="fixed inset-x-0 top-0 z-30 px-3 py-4 md:px-8 md:py-5">
        <div className="mx-auto flex max-w-7xl justify-center md:justify-end">
          <div className="flex w-full max-w-[29rem] items-center justify-between rounded-full border border-white/[0.08] bg-[#03030c]/18 px-3 py-2.5 text-[11px] text-slate-200 shadow-[0_18px_70px_rgba(3,3,12,.18)] backdrop-blur-md sm:w-auto sm:justify-center sm:gap-6 sm:px-5 sm:text-sm md:gap-8 md:px-6">
            <a href="#network" className="hover:text-white">Сеть</a>
            <a href="#tracking" className="hover:text-white">Трекинг</a>
            <a href="#platform" className="hover:text-white">Платформа</a>
            <a href="#contact" className="hover:text-white">Контакты</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen overflow-hidden px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-screen overflow-hidden">
          <img src="/hero-bg.png" alt="" className="h-full w-full object-cover opacity-[0.94] saturate-125 contrast-105" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,3,10,.34)_0%,rgba(5,7,20,.14)_34%,rgba(7,7,22,.46)_78%,#070716),linear-gradient(90deg,rgba(3,3,12,.24)_0%,rgba(7,7,22,.14)_42%,rgba(7,7,22,.08)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,rgba(139,92,246,.20),transparent_36%),radial-gradient(circle_at_82%_24%,rgba(245,158,11,.08),transparent_30%),radial-gradient(circle_at_50%_52%,rgba(2,3,10,.22),transparent_34%)]" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#02030a]/62 via-[#050511]/22 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-[#03030c]/36 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#03030c]/24 to-transparent" />
          <svg className="hero-route-layer absolute inset-0 h-full w-full" viewBox="0 0 100 60" preserveAspectRatio="none">
            <path className="hero-route-pulse" d="M7 12 C24 2, 42 10, 55 15 S78 14, 94 7" />
            <path className="hero-route-pulse hero-route-delay" d="M18 44 C38 34, 54 39, 68 31 S84 22, 96 35" />
          </svg>
          <span className="hero-air-node absolute left-[37%] top-[17%]" />
          <span className="hero-air-node absolute left-[57%] top-[27%]" style={{ animationDelay: "1.2s" }} />
          <span className="hero-air-node absolute right-[22%] top-[48%]" style={{ animationDelay: "2s" }} />
        </div>
        <div className="absolute left-1/2 top-20 -z-10 h-64 w-[70vw] -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-12rem)] max-w-5xl flex-col items-center justify-center text-center">
          <img
            src="/logo.png"
            alt="EasyGo"
            className="mx-auto mb-8 h-14 w-auto max-w-[230px] object-contain brightness-110 contrast-125 drop-shadow-[0_0_38px_rgba(139,92,246,.52)] sm:h-16 sm:max-w-[280px] md:h-20 md:max-w-[340px]"
          />
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-easyYellow">Aviation cargo infrastructure network</p>
          <h1 className="text-3xl font-semibold leading-tight text-white drop-shadow-[0_2px_28px_rgba(3,3,12,.55)] sm:text-4xl md:text-5xl">
            EasyGo — цифровая инфраструктура авиационных грузов
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-200 drop-shadow-[0_2px_18px_rgba(3,3,12,.72)] md:text-2xl md:leading-8">
            Превращаем свободную емкость пассажирских рейсов в управляемую cargo-сеть.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button>Стать партнером</Button>
            <Button variant="secondary" href="#network">Изучить возможности</Button>
          </div>
        </div>
        <div className="mt-28 md:mt-36">
          <HeroSystem />
        </div>
      </section>

      <section className="px-5 py-20 md:px-8" id="problem">
        <SectionHeader
          eyebrow="Почему сейчас"
          title="Авиационная емкость уже существует. Нужен цифровой слой доступа."
          text="EasyGo соединяет разрозненные операционные точки в единую систему."
        />
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <Card key={problem.title} eyebrow={`0${index + 1}`} title={problem.title} body={problem.body} />
          ))}
        </div>
      </section>

      <section className="px-5 py-20 md:px-8" id="network">
        <SectionHeader
          eyebrow="Live air network"
          title="EasyGo расширяет aviation cargo-сеть от Казахстана к международным коридорам."
          text="Казахстан остается операционным ядром, Центральная Азия формирует региональный слой, а дальние направления показывают масштаб будущей инфраструктуры."
        />
        <NetworkMap />
      </section>

      <section className="px-5 py-20 md:px-8" id="tracking">
        <SectionHeader
          eyebrow="Operating system"
          title="Live tracking dashboard для каждой передачи груза."
          text="Интерфейс показывает маршрут, рейс, ETA, статус курьера и подтверждение емкости."
        />
        <TrackingDashboard />
      </section>

      <section className="px-5 py-20 md:px-8" id="capacity">
        <BellyCapacity />
      </section>

      <section className="px-5 py-20 md:px-8" id="airlines">
        <SectionHeader
          eyebrow="Airline trust"
          title="Новый revenue layer для пассажирских авиакомпаний."
          text="EasyGo превращает свободную емкость регулярных рейсов в прозрачный, управляемый и масштабируемый cargo-поток."
        />
        <AirlineTrust />
      </section>

      <section className="px-5 py-20 md:px-8" id="flow">
        <SectionHeader
          eyebrow="Airport operation flow"
          title="Кинематичная операционная цепочка от клиента до доставки."
          text="EasyGo делает handoff между участниками видимым, измеримым и масштабируемым."
        />
        <AirportFlow />
      </section>

      <section className="px-5 py-20 md:px-8" id="platform">
        <SectionHeader
          eyebrow="Ecosystem architecture"
          title="EasyGo — это инфраструктура, а не просто доставка."
          text="Платформа связывает авиакомпании, аэропорты, курьеров, e-commerce, API, трекинг и AI routing."
        />
        <Ecosystem />
      </section>

      <section className="px-5 py-20 md:px-8" id="ai">
        <AIRouting />
      </section>

      <section className="px-5 py-20 md:px-8" id="market">
        <SectionHeader
          eyebrow="Market scale"
          title="Рынок авиационной логистики переходит в цифровую фазу."
          text="Рост e-commerce, belly capacity и низкая цифровизация создают окно для инфраструктурной платформы."
        />
        <MarketScale />
      </section>

      <section className="px-5 py-20 md:px-8" id="roadmap">
        <SectionHeader
          eyebrow="Mission progression"
          title="От пилотных маршрутов к AI cargo infrastructure."
          text="Roadmap EasyGo выглядит как поэтапное расширение сети, данных и интеграций."
        />
        <RoadmapMission />
      </section>

      <FutureVision />
      <ContactSection />
      <Footer />
    </main>
  );
}

export { App };
