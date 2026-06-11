"use client";

/*
 * Botanisch-architektonische SVG-Atmosphäre.
 * Reusable Ornament-Teile für Hero, Tafeln & Dividers.
 */

type SVGProps = React.SVGProps<SVGSVGElement> & { className?: string };

export function PaperTexture({ className = "" }: { className?: string }) {
  return <div className={`paper-grain absolute inset-0 ${className}`} aria-hidden />;
}

export function ArchitectGrid({ className = "" }: { className?: string }) {
  return <div className={`architect-grid absolute inset-0 ${className}`} aria-hidden />;
}

/* —— Plate-Label im Stil eines botanischen Lehrbuchs —— */
export function PlateLabel({
  index,
  title,
  className = "",
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <span className="label-mono text-[var(--clay)]">Tafel</span>
      <span className="label-mono text-[var(--clay)]">{index}</span>
      <span className="h-px w-12 bg-[var(--moss)]/40" aria-hidden />
      <span className="label-mono text-[var(--moss)]">{title}</span>
    </div>
  );
}

/* —— Hand-gezeichneter Pfeil mit Annotation —— */
export function FigArrow({
  label,
  className = "",
  flip = false,
  rotate = 0,
}: {
  label: string;
  className?: string;
  flip?: boolean;
  rotate?: number;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {!flip && (
        <span className="font-hand text-[var(--ink-soft)] text-sm md:text-base whitespace-nowrap">
          {label}
        </span>
      )}
      <svg
        width="64"
        height="20"
        viewBox="0 0 64 20"
        className="text-[var(--ink-soft)]"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
        aria-hidden
      >
        <path
          d="M2 10 Q 22 0, 42 12 T 60 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M60 10 L 54 6 M60 10 L 54 14"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      {flip && (
        <span className="font-hand text-[var(--ink-soft)] text-sm md:text-base whitespace-nowrap">
          {label}
        </span>
      )}
    </div>
  );
}

/* —— Botanischer Zweig — Eiche/Olive —— */
export function BotanicalSprig({ className = "", ...rest }: SVGProps) {
  return (
    <svg
      viewBox="0 0 200 320"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...rest}
    >
      {/* Stamm */}
      <path d="M100 310 C 95 240, 110 180, 100 110 C 92 60, 110 30, 100 10" strokeWidth="1.4" />
      {/* Blätter linke Seite */}
      <g>
        <path d="M100 270 C 70 268, 50 250, 45 232 C 60 234, 85 246, 100 264 Z" />
        <path d="M100 240 C 75 240, 55 222, 50 204 C 65 208, 88 220, 100 234 Z" />
        <path d="M100 210 C 78 210, 58 196, 54 178 C 68 184, 88 196, 100 206 Z" />
        <path d="M100 175 C 80 175, 62 162, 58 146 C 72 152, 90 162, 100 172 Z" />
        <path d="M100 138 C 82 138, 66 128, 62 114 C 76 118, 92 128, 100 134 Z" />
        <path d="M100 100 C 85 100, 70 92, 66 80 C 80 84, 94 92, 100 98 Z" />
        <path d="M100 64 C 86 64, 74 56, 70 46 C 84 50, 96 58, 100 62 Z" />
      </g>
      {/* Blätter rechte Seite */}
      <g>
        <path d="M100 285 C 130 283, 150 265, 155 247 C 140 249, 115 261, 100 279 Z" />
        <path d="M100 252 C 125 252, 145 234, 150 216 C 135 220, 112 232, 100 246 Z" />
        <path d="M100 222 C 122 222, 142 208, 146 190 C 132 196, 112 208, 100 218 Z" />
        <path d="M100 188 C 120 188, 138 174, 142 158 C 128 164, 110 174, 100 184 Z" />
        <path d="M100 152 C 118 152, 134 142, 138 128 C 124 132, 108 142, 100 148 Z" />
        <path d="M100 115 C 115 115, 130 107, 134 95 C 120 99, 106 107, 100 113 Z" />
        <path d="M100 78 C 114 78, 126 70, 130 60 C 116 64, 104 72, 100 76 Z" />
      </g>
      {/* Mittelrippen */}
      <g opacity="0.5">
        <path d="M100 268 C 80 262, 65 250, 50 236" />
        <path d="M100 238 C 80 232, 65 220, 55 208" />
        <path d="M100 282 C 122 278, 140 264, 154 250" />
        <path d="M100 250 C 120 246, 138 232, 149 220" />
      </g>
      {/* Beeren */}
      <circle cx="76" cy="56" r="3.2" fill="currentColor" />
      <circle cx="84" cy="68" r="2.6" fill="currentColor" />
      <circle cx="120" cy="58" r="2.8" fill="currentColor" />
    </svg>
  );
}

/* —— Botanische Farn-Wedel —— */
export function FernFrond({ className = "", ...rest }: SVGProps) {
  return (
    <svg
      viewBox="0 0 160 300"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...rest}
    >
      <path d="M80 295 C 78 230, 80 165, 80 100 C 80 60, 80 30, 80 10" strokeWidth="1.2" />
      {Array.from({ length: 14 }).map((_, i) => {
        const y = 20 + i * 19;
        const len = 60 - i * 3;
        return (
          <g key={i}>
            <path d={`M80 ${y} Q ${80 - len * 0.6} ${y + 6}, ${80 - len} ${y - 4}`} />
            <path d={`M80 ${y} Q ${80 + len * 0.6} ${y + 6}, ${80 + len} ${y - 4}`} />
            {/* Feder-Fiedern */}
            {Array.from({ length: 4 }).map((_, j) => {
              const t = (j + 1) / 5;
              const cx = 80 - len * t;
              const cy = y - 2 + t * 2;
              return (
                <g key={j} opacity="0.7">
                  <path d={`M${cx} ${cy} l -4 -3`} />
                  <path d={`M${cx} ${cy} l -3 3`} />
                </g>
              );
            })}
            {Array.from({ length: 4 }).map((_, j) => {
              const t = (j + 1) / 5;
              const cx = 80 + len * t;
              const cy = y - 2 + t * 2;
              return (
                <g key={`r-${j}`} opacity="0.7">
                  <path d={`M${cx} ${cy} l 4 -3`} />
                  <path d={`M${cx} ${cy} l 3 3`} />
                </g>
              );
            })}
          </g>
        );
      })}
    </svg>
  );
}

/* —— Wurzel/Topografie-Konturlinien —— */
export function ContourLines({ className = "", ...rest }: SVGProps) {
  return (
    <svg
      viewBox="0 0 600 400"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      aria-hidden
      preserveAspectRatio="none"
      {...rest}
    >
      {Array.from({ length: 12 }).map((_, i) => {
        const offset = i * 18;
        return (
          <path
            key={i}
            d={`M -20 ${100 + offset}
                C 100 ${80 + offset}, 200 ${140 + offset}, 320 ${110 + offset}
                S 480 ${70 + offset}, 620 ${130 + offset}`}
            opacity={1 - i * 0.06}
          />
        );
      })}
    </svg>
  );
}

/* —— Botanisches Siegel —— */
export function BotanicalSeal({
  className = "",
  label = "Galabau Eifler · Saarbrücken · Anno MMXIV",
}: {
  className?: string;
  label?: string;
}) {
  const id = "circle-path-seal";
  return (
    <svg viewBox="0 0 220 220" className={className} aria-hidden>
      <defs>
        <path id={id} d="M 110, 110 m -88, 0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0" />
      </defs>
      {/* Außenring */}
      <circle cx="110" cy="110" r="104" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="110" cy="110" r="98" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      {/* Innenring */}
      <circle cx="110" cy="110" r="68" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6" />
      {/* Text auf Pfad */}
      <text
        fontFamily="var(--font-mono), monospace"
        fontSize="9"
        letterSpacing="3"
        fill="currentColor"
      >
        <textPath href={`#${id}`} startOffset="0">
          {label.toUpperCase()} ·&nbsp;
        </textPath>
      </text>
      {/* Mitte: Monogramm-Botanik */}
      <g transform="translate(110 110)">
        <path
          d="M 0 -38 C -10 -26, -10 -12, 0 0 C 10 -12, 10 -26, 0 -38 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M -28 -10 C -18 -4, -8 -2, 0 0 C -2 -10, -10 -20, -28 -10 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path
          d="M 28 -10 C 18 -4, 8 -2, 0 0 C 2 -10, 10 -20, 28 -10 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <path d="M 0 0 L 0 30" stroke="currentColor" strokeWidth="0.8" />
        <text
          y="22"
          textAnchor="middle"
          fontFamily="var(--font-display), serif"
          fontStyle="italic"
          fontSize="20"
          fontWeight="500"
          fill="currentColor"
        >
          GE
        </text>
      </g>
      {/* Stern-Marker auf 12-Uhr */}
      <g transform="translate(110 14)">
        <path d="M 0 -4 L 1 -1 L 4 0 L 1 1 L 0 4 L -1 1 L -4 0 L -1 -1 Z" fill="currentColor" />
      </g>
    </svg>
  );
}

/* —— Vine-Divider zwischen Sektionen —— */
export function VineDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden>
      <div className="h-px flex-1 bg-[var(--moss)]/30" />
      <svg width="160" height="40" viewBox="0 0 160 40" className="text-[var(--moss)]">
        <path
          d="M 4 20 C 30 6, 50 34, 80 20 C 110 6, 130 34, 156 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
        {[20, 50, 80, 110, 140].map((cx, i) => (
          <g key={i}>
            <ellipse cx={cx} cy={i % 2 ? 28 : 12} rx="6" ry="3" fill="none" stroke="currentColor" strokeWidth="0.7" />
          </g>
        ))}
        <circle cx="80" cy="20" r="2" fill="currentColor" />
      </svg>
      <div className="h-px flex-1 bg-[var(--moss)]/30" />
    </div>
  );
}

/* —— Section-Wrapper mit Tafel-Anmutung —— */
export function PlateFrame({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      <PaperTexture />
      {children}
    </section>
  );
}
