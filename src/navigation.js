import { createContext, useContext } from 'react'

export const NavigationContext = createContext({
  path: '/',
  navigate: () => {},
})

export function useNavigation() {
  return useContext(NavigationContext)
}
