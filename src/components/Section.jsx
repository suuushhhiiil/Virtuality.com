export default function Section({
  children,
  className = '',
  innerClass = 'max-w-page',
  as: Tag = 'section',
  id,
}) {
  return (
    <Tag id={id} className={`px-5 sm:px-8 ${className}`}>
      <div className={`mx-auto ${innerClass}`}>{children}</div>
    </Tag>
  )
}
