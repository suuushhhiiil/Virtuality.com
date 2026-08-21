import { useEffect } from 'react'

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title
      ? `${title} — Write From Left`
      : 'Write From Left — Khushboo Sangwan'
  }, [title])
}
