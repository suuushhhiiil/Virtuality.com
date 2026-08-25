export default function Section({
  children,
  className = '',
  innerClass = 'lg:w-[80vw] w-full',
  as: Tag = 'section',
  id,
  reveal = false,
  stagger = false,
}) {
  return (
    <Tag
      id={id}
      className={`px-8 lg:px-5 ${className}`}
      {...(reveal ? { 'data-reveal': '' } : {})}
      {...(stagger ? { 'data-reveal': '', 'data-reveal-stagger': '' } : {})}
    >
      <div className={`mx-auto ${innerClass}`}>{children}</div>
    </Tag>
  )
}
