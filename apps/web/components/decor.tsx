// Hand-drawn doodles (light strokes, for dark backgrounds) and the ambient
// background glow shared across the landing, auth, and dashboard pages.

export function AmbientGlow({ className }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 -z-20 ${className ?? ""}`}>
      <div className="animate-drift-a absolute -top-24 left-[20%] size-[420px] rounded-full bg-[color-mix(in_oklch,var(--color-warm)_16%,transparent)] blur-3xl" />
      <div className="animate-drift-b absolute top-32 right-[15%] size-[380px] rounded-full bg-[color-mix(in_oklch,var(--foreground)_5%,transparent)] blur-3xl" />
    </div>
  )
}

export function DashMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden>
      <path d="M6 26 Q16 18 26 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 24" fill="none" preserveAspectRatio="none" className={className} aria-hidden>
      <path
        d="M4 15 Q20 3 36 15 T68 15 T100 15 T132 15 T164 15 T196 15"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function BubbleLines({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 70" fill="none" className={className} aria-hidden>
      <path
        d="M10 12 Q8 8 14 7 L74 5 Q82 5 82 14 L83 40 Q83 48 75 48 L34 49 L18 62 L21 49 L16 49 Q9 49 9 41 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 20 H68" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22 30 H60" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M22 40 H50" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export function FaceDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" className={className} aria-hidden>
      <path
        d="M40 8 Q64 8 66 34 Q68 60 52 74 Q40 84 28 74 Q12 60 14 34 Q16 8 40 8 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="38" r="2.4" fill="currentColor" />
      <circle cx="52" cy="38" r="2.4" fill="currentColor" />
      <path d="M28 58 Q40 50 54 58" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M18 20 Q22 10 30 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M50 8 Q60 10 64 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export function SmileyDoodle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 90" fill="none" className={className} aria-hidden>
      <path
        d="M40 8 Q64 8 66 34 Q68 60 52 74 Q40 84 28 74 Q12 60 14 34 Q16 8 40 8 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="38" r="2.4" fill="currentColor" />
      <circle cx="52" cy="38" r="2.4" fill="currentColor" />
      <path d="M27 54 Q40 68 55 54" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

export function YesBubble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 80" fill="none" className={className} aria-hidden>
      <path
        d="M10 10 Q8 6 14 5 L94 8 Q102 9 101 18 L99 44 Q98 52 90 51 L40 49 L22 66 L26 50 L18 50 Q10 49 10 41 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <text
        x="26"
        y="35"
        fontSize="22"
        fontStyle="italic"
        fontFamily="Georgia, serif"
        fill="currentColor"
        transform="rotate(-4 30 34)"
      >
        yes!
      </text>
    </svg>
  )
}

export function DollarBubble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 70 60" fill="none" className={className} aria-hidden>
      <path
        d="M8 8 Q6 5 11 4 L58 6 Q64 7 63 14 L62 32 Q61 38 55 38 L26 37 L14 48 L17 37 L13 37 Q7 36 7 30 Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <text x="25" y="27" fontSize="16" fontFamily="Georgia, serif" fill="currentColor">
        $
      </text>
    </svg>
  )
}

export function StarBubble({ className }: { className?: string }) {
  const star = "M0 -8 L2.2 -2.6 L8 -2.2 L3.4 1.6 L5 7.6 L0 4.2 L-5 7.6 L-3.4 1.6 L-8 -2.2 L-2.2 -2.6 Z"
  return (
    <svg viewBox="0 0 110 70" fill="none" className={className} aria-hidden>
      <path
        d="M8 10 Q6 6 12 5 L98 7 Q104 8 103 16 L102 40 Q101 47 94 46 L28 45 L14 60 L18 45 L12 45 Q6 44 6 37 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <g fill="currentColor" transform="translate(32,25)">
        <path d={star} />
      </g>
      <g fill="currentColor" transform="translate(54,25)">
        <path d={star} />
      </g>
      <g fill="currentColor" transform="translate(76,25)">
        <path d={star} />
      </g>
    </svg>
  )
}

export function CheckBubble({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 70" fill="none" className={className} aria-hidden>
      <path
        d="M8 10 Q6 6 12 5 L78 7 Q86 8 85 16 L84 38 Q83 45 76 44 L34 43 L18 58 L22 43 L14 43 Q7 42 7 35 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <path d="M28 24 L38 34 L58 16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
