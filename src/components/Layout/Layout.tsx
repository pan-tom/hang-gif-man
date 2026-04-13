import type { ReactNode } from 'react'
import styles from './Layout.module.scss'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <main className={styles.container}>{children}</main>
}

export default Layout
