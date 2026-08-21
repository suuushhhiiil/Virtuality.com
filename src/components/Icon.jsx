const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.4',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const paths = {
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="2.4" />
      <path d="M4.5 18c.4-3 2.3-4.6 4.5-4.6S13.1 15 13.5 18" />
      <circle cx="16" cy="9" r="2" />
      <path d="M15 13.6c2 .3 3.6 1.7 4 4.4" />
    </>
  ),
  bulb: (
    <>
      <path d="M9 18h6M10 21h4" />
      <path d="M8 14.5c-1.6-1.4-2.5-3.2-2.5-5.1A6.5 6.5 0 0 1 12 3a6.5 6.5 0 0 1 6.5 6.4c0 1.9-.9 3.7-2.5 5.1L15.2 16H8.8z" />
    </>
  ),
  page: (
    <>
      <path d="M7 4.5h7l4 4V19.5H7z" />
      <path d="M14 4.5V9h4.5M9.5 12h6M9.5 15.5h4.5" />
    </>
  ),
  pen: (
    <>
      <path d="M14.5 4.5 19 9l-9.5 9.5H5.5v-4z" />
      <path d="M12.8 6.2 17.3 10.7" />
    </>
  ),
}

export default function Icon({ name, className = 'h-8 w-8' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g {...stroke}>{paths[name]}</g>
    </svg>
  )
}
