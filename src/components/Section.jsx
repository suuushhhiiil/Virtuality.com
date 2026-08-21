export default function Section({
  children,
  className = '',
  innerClass = 'max-w-page',
  as: Tag = 'section',
  id,
  reveal = false,
  stagger = false,
}) {
  return (
    <Tag
      id={id}
      className={`px-5 sm:px-8 ${className}`}
      {...(reveal ? { 'data-reveal': '' } : {})}
      {...(stagger ? { 'data-reveal': '', 'data-reveal-stagger': '' } : {})}
    >
      <div className={`mx-auto ${innerClass}`}>{children}</div>
    </Tag>
  )
}
