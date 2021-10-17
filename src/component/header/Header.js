import React from 'react'
import styles from './Header.module.css'
import Logo from '../../images/Logo.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
          <img className={styles.logo} src={Logo} alt="logo" />
      </div>
    </header>
  )
}

export default Header
