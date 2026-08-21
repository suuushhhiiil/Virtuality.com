import { useNavigation } from '../navigation.js'
import { withBase } from '../paths.js'

export default function Link({ to, children, className, onClick }) {
  const { navigate } = useNavigation()

  return (
    <a
      href={withBase(to)}
      className={className}
      onClick={(event) => {
        if (
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        ) {
          return
        }
        event.preventDefault()
        onClick?.()
        navigate(to)
      }}
    >
      {children}
    </a>
  )
}
