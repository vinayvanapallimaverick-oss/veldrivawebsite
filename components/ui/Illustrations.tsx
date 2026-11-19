import { Cloud, Database, BrainCircuit, Blocks, ShieldCheck, Layers, Server, MonitorSmartphone, Inbox, ScanText, UserCheck } from "lucide-react";

type IconType = React.ComponentType<{ className?: string; strokeWidth?: number; "aria-hidden"?: boolean }>;

function Node({ style, icon: Icon, label, delay = "0s" }: { style: React.CSSProperties; icon: IconType; label: string; delay?: string }) {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2" style={style}>
      <div
        className="float-slow flex items-center gap-2.5 rounded-[12px] border border-line bg-white px-3.5 py-2.5 shadow-card"
        style={{ animationDelay: delay }}
      >
        <Icon aria-hidden className="size-[18px] text-brand" strokeWidth={1.6} />
        <span className="whitespace-nowrap text-[13px] font-medium text-navy">{label}</span>
      </div>
    </div>
  );
}

/** Restrained connected-enterprise illustration for the hero. */
export function HeroIllustration() {
  const pts: [number, number][] = [[22, 17], [80, 20], [18, 80], [80, 80], [50, 94]];
  return (
    <div
      role="img"
      aria-label="Illustration of cloud, data, AI and enterprise application systems connected around a central platform"
      className="relative mx-auto aspect-square w-full max-w-[540px]"
    >
      <div aria-hidden className="absolute inset-[5%] rounded-full bg-soft" />
      <svg aria-hidden viewBox="0 0 100 100" className="absolute inset-0 size-full">
        <circle cx="50" cy="50" r="42" fill="none" stroke="#96777B" strokeOpacity="0.35" strokeWidth="0.25" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#96777B" strokeOpacity="0.4" strokeWidth="0.25" />
        <circle cx="50" cy="50" r="18" fill="none" stroke="#96777B" strokeOpacity="0.45" strokeWidth="0.25" />
        {pts.map(([x, y], i) => (
          <line key={i} x1="50" y1="50" x2={x} y2={y} stroke="#96777B" strokeOpacity="0.8" strokeWidth="0.3" className="flow-line" />
        ))}
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="0.9" fill="#512C38" />
        ))}
        {pts.map(([x, y], i) => (
          <circle key={`p${i}`} r="1.1" fill="#512C38" className="motion-reduce:hidden">
            <animateMotion dur={`${3.2 + i * 0.5}s`} begin={`${i * 0.6}s`} repeatCount="indefinite" path={`M50 50 L${x} ${y}`} />
            <animate attributeName="opacity" values="0;1;1;0" dur={`${3.2 + i * 0.5}s`} begin={`${i * 0.6}s`} repeatCount="indefinite" />
          </circle>
        ))}
        <circle cx="50" cy="50" r="11" fill="none" stroke="#96777B" strokeWidth="0.3" className="ring-pulse" />
      </svg>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex size-28 items-center justify-center rounded-[18px] border border-line bg-white shadow-lift sm:size-32">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-mark.png" alt="" className="h-12 w-auto sm:h-14" />
        </div>
      </div>
      <Node style={{ left: "22%", top: "17%" }} icon={Cloud} label="Cloud" />
      <Node style={{ left: "80%", top: "20%" }} icon={BrainCircuit} label="AI & Automation" delay="1s" />
      <Node style={{ left: "18%", top: "80%" }} icon={Database} label="Data Intelligence" delay="2s" />
      <Node style={{ left: "80%", top: "80%" }} icon={Blocks} label="Enterprise Apps" delay="3s" />
      <Node style={{ left: "50%", top: "94%" }} icon={ShieldCheck} label="Secure by Design" delay="1.5s" />
    </div>
  );
}

/** Layered architecture visual for the introduction section. */
export function ArchitectureVisual() {
  const layers = [
    { icon: MonitorSmartphone, title: "Experience", text: "Web, mobile and employee applications" },
    { icon: Layers, title: "Integration & Intelligence", text: "APIs, workflows, analytics and AI" },
    { icon: Server, title: "Cloud & Infrastructure", text: "Secure, automated, observable platforms" },
  ];
  return (
    <div
      role="img"
      aria-label="Layered architecture: experience layer above integration and intelligence, above cloud and infrastructure"
      className="relative mx-auto w-full max-w-[520px] rounded-[18px] border border-line bg-ice p-6 sm:p-8"
    >
      <div className="space-y-0">
        {layers.map((l, i) => (
          <div key={l.title}>
            <div className="flex items-center gap-4 rounded-[14px] border border-line bg-white p-4 shadow-card sm:p-5">
              <l.icon aria-hidden className="size-7 shrink-0 text-brand" strokeWidth={1.5} />
              <div>
                <p className="font-heading text-base font-semibold text-navy">{l.title}</p>
                <p className="text-sm text-body">{l.text}</p>
              </div>
            </div>
            {i < layers.length - 1 && <div aria-hidden className="mx-auto h-5 w-px bg-muted/60" />}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Minimal monochrome editorial header for article cards (no stock imagery). */
export function ArticleVisual({ seed, category }: { seed: number; category: string }) {
  const v = seed % 3;
  return (
    <div role="img" aria-label={`${category} illustration`} className="relative aspect-[16/7] overflow-hidden border-b border-line bg-soft">
      <svg aria-hidden viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" fill="none" stroke="#96777B" strokeWidth="1">
        {v === 0 && (
          <>
            <path d="M-10 110 C60 110 70 40 140 60 S240 20 330 30" stroke="#512C38" strokeWidth="1.5" />
            {[40, 90, 150, 210, 270].map((x, i) => <circle key={x} cx={x} cy={[108, 78, 62, 40, 28][i]} r="4" fill="#FAF8F6" stroke="#512C38" />)}
            <path d="M0 125H320M0 95H320M0 65H320M0 35H320" strokeOpacity="0.35" />
          </>
        )}
        {v === 1 && (
          <>
            <path d="M160 24 260 58 160 92 60 58Z" fill="#FAF8F6" stroke="#512C38" strokeWidth="1.5" />
            <path d="M60 74 160 108 260 74" strokeOpacity="0.8" />
            <path d="M60 90 160 124 260 90" strokeOpacity="0.5" />
            <circle cx="160" cy="58" r="3" fill="#512C38" stroke="none" />
          </>
        )}
        {v === 2 && (
          <>
            {[[60, 40], [140, 90], [220, 36], [270, 96], [100, 108]].map(([x, y], i, a) => (
              <g key={i}>
                {i > 0 && <path d={`M${a[i - 1][0]} ${a[i - 1][1]} L${x} ${y}`} />}
                <circle cx={x} cy={y} r={i % 2 ? 5 : 8} fill="#FAF8F6" stroke="#512C38" strokeWidth="1.5" />
              </g>
            ))}
            <path d="M60 40 L220 36" strokeOpacity="0.5" />
          </>
        )}
      </svg>
    </div>
  );
}

/** Illustrative human-in-the-loop automation workflow (not a client project). */
export function WorkflowAutomationVisual() {
  const steps: { icon: IconType; title: string; note: string; tag: "Automated" | "Human review" }[] = [
    { icon: Inbox, title: "Document received", note: "Email, portal or API intake", tag: "Automated" },
    { icon: ScanText, title: "Data extracted", note: "Intelligent document processing", tag: "Automated" },
    { icon: ShieldCheck, title: "Rules validated", note: "Checks against business policies", tag: "Automated" },
    { icon: UserCheck, title: "Exceptions reviewed", note: "People approve edge cases", tag: "Human review" },
    { icon: Database, title: "Systems updated", note: "ERP and CRM records synced", tag: "Automated" },
  ];
  return (
    <figure className="mx-auto w-full max-w-[520px] rounded-[18px] border border-line bg-white p-5 shadow-card sm:p-7">
      <figcaption className="mb-5 flex items-center justify-between border-b border-line pb-4">
        <span className="font-heading text-sm font-semibold text-navy">Illustrative workflow: document intake</span>
        <span className="rounded-md bg-soft px-2.5 py-1 text-xs font-medium text-brand">Example</span>
      </figcaption>
      <ol className="relative">
        <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-px bg-muted/40" />
        <svg aria-hidden className="absolute bottom-6 left-[19px] top-6 h-[calc(100%-3rem)] w-px overflow-visible">
          <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="#512C38" strokeWidth="1" className="flow-line" />
        </svg>
        {steps.map((s) => (
          <li key={s.title} className="relative flex items-center gap-4 py-2.5">
            <span className="step-glow relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-white text-brand" style={{ animationDelay: `${steps.indexOf(s) * 2}s` }}>
              <s.icon aria-hidden className="size-[18px]" strokeWidth={1.6} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold text-navy">{s.title}</span>
              <span className="block text-[13px] text-body">{s.note}</span>
            </span>
            <span
              className={`shrink-0 rounded-md px-2 py-1 text-[11px] font-medium ${
                s.tag === "Human review" ? "border border-muted bg-white text-brand" : "bg-soft text-brand"
              }`}
            >
              {s.tag}
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

const S = { fill: "none", stroke: "#512C38", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const M = { fill: "none", stroke: "#96777B", strokeWidth: 1, strokeLinecap: "round", strokeLinejoin: "round" } as const;

const scenes: Record<string, React.ReactNode> = {
  "digital-transformation": (
    <>
      <path {...M} d="M30 250H370" />
      <rect {...S} x="60" y="190" width="70" height="60" rx="4" />
      <rect {...S} x="165" y="140" width="70" height="110" rx="4" />
      <rect {...S} x="270" y="80" width="70" height="170" rx="4" />
      <path {...M} d="M60 170 L165 120 L270 62" strokeDasharray="3 4" className="flow-line" />
      <circle cx="270" cy="62" r="6" fill="#FAF8F6" stroke="#512C38" strokeWidth="1.5" />
      <path {...M} d="M80 210h30M185 165h30M290 110h30M290 130h30" />
    </>
  ),
  "cloud-services": (
    <>
      <path {...S} d="M110 130a40 40 0 0 1 78-12 34 34 0 0 1 62 14 28 28 0 0 1-8 55H125a30 30 0 0 1-15-57Z" />
      {[90, 170, 250].map((x) => (
        <g key={x}>
          <rect {...S} x={x} y="220" width="60" height="30" rx="4" />
          <path {...M} d={`M${x + 30} 220V190`} />
          <path {...M} d={`M${x + 12} 235h8M${x + 12} 242h20`} />
        </g>
      ))}
    </>
  ),
  "ai-automation": (
    <>
      {[[70, 70], [70, 150], [70, 230], [330, 100], [330, 200]].map(([x, y], i) => (
        <path key={i} {...M} d={`M${x} ${y} L200 150`} className={i % 2 ? "flow-line" : undefined} />
      ))}
      {[[70, 70], [70, 150], [70, 230], [330, 100], [330, 200]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="9" fill="#FAF8F6" stroke="#512C38" strokeWidth="1.5" />
      ))}
      <circle cx="200" cy="150" r="34" fill="#fff" stroke="#512C38" strokeWidth="1.5" />
      <circle cx="200" cy="150" r="48" fill="none" stroke="#96777B" strokeWidth="1" strokeDasharray="2 4" />
      <path {...S} d="M186 150h28M200 136v28" />
    </>
  ),
  "data-analytics": (
    <>
      <path {...M} d="M40 250H360M40 200H360M40 150H360M40 100H360" />
      {[[70, 60], [120, 90], [170, 70], [220, 120], [270, 100]].map(([x, h], i) => (
        <rect key={i} {...S} x={x} y={250 - h * 1.4} width="32" height={h * 1.4} rx="3" fill="#FAF8F6" />
      ))}
      <path {...S} d="M70 190 L136 150 L186 160 L236 100 L286 90 L340 50" />
      <ellipse {...S} cx="340" cy="50" rx="0" ry="0" />
      <circle cx="340" cy="50" r="5" fill="#FAF8F6" stroke="#512C38" strokeWidth="1.5" />
    </>
  ),
  "software-development": (
    <>
      <rect {...S} x="50" y="50" width="300" height="200" rx="10" />
      <path {...M} d="M50 82H350" />
      {[70, 86, 102].map((x) => <circle key={x} cx={x} cy="66" r="3" fill="#96777B" />)}
      <path {...S} d="M100 130 70 155l30 25M300 130l30 25-30 25M185 195l30-70" />
      <path {...M} d="M120 215h60M220 215h70M120 232h40" />
    </>
  ),
  "enterprise-applications": (
    <>
      {[[100, 80], [300, 80], [100, 220], [300, 220]].map(([x, y], i) => (
        <g key={i}>
          <path {...M} d={`M${x} ${y} L200 150`} className="flow-line" />
          <rect {...S} x={x - 36} y={y - 26} width="72" height="52" rx="6" fill="#fff" />
          <path {...M} d={`M${x - 22} ${y - 8}h44M${x - 22} ${y + 6}h28`} />
        </g>
      ))}
      <rect {...S} x="166" y="116" width="68" height="68" rx="8" fill="#FAF8F6" />
      <circle {...S} cx="200" cy="150" r="14" />
    </>
  ),
  cybersecurity: (
    <>
      <circle cx="200" cy="150" r="110" fill="none" stroke="#96777B" strokeWidth="1" strokeDasharray="2 5" />
      <circle cx="200" cy="150" r="82" fill="none" stroke="#96777B" strokeWidth="1" />
      <path {...S} d="M200 70 268 96v52c0 40-28 68-68 84-40-16-68-44-68-84V96Z" fill="#fff" />
      <path {...S} d="m172 150 20 20 38-42" />
    </>
  ),
  devops: (
    <>
      <path {...S} d="M200 150C170 100 110 100 110 150s60 50 90 0 90-50 90 0-60 50-90 0Z" />
      {[[110, 150], [290, 150], [200, 150]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="7" fill="#FAF8F6" stroke="#512C38" strokeWidth="1.5" />)}
      {["Build", "Test", "Deploy", "Observe"].map((t, i) => (
        <g key={t}>
          <rect {...M} x={50 + i * 75} y="230" width="64" height="26" rx="5" fill="#fff" />
          <text x={82 + i * 75} y="247" textAnchor="middle" fontSize="11" fill="#512C38" fontFamily="Inter, sans-serif">{t}</text>
        </g>
      ))}
    </>
  ),
};

/** Monochrome line illustration per service (decorative). */
export function ServiceVisual({ slug }: { slug: string }) {
  return (
    <div aria-hidden className="mx-auto w-full max-w-[460px] rounded-[18px] border border-line bg-white p-4 shadow-card">
      <svg viewBox="0 0 400 300" className="h-auto w-full rounded-[12px] bg-ice">
        {scenes[slug] ?? null}
      </svg>
    </div>
  );
}
