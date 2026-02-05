import React from 'react'

import styles from './Layout.module.scss'

export default ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
