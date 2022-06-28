import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import logo from '../../../assets/svg/logo.svg'
import usa_img from '../../../assets/svg/usa.svg'
import triangle_btn from '../../../assets/svg/triangle_btn.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.header__logo}>
        <img src={logo} alt='logo' />
        <p className={styles.header__logo_text}>cloudbudget</p>
      </Link>
      <nav>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <Link to='/' className={styles.header__link}>
              Overview
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link to='/' className={styles.header__link}>
              Features
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link to='/' className={styles.header__link}>
              Technology
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link to='/' className={styles.header__link}>
              Contact
            </Link>
          </li>
          <li className={styles.header__item}>
            <Link to='/' className={styles.header__link}>
              Sign up
            </Link>
          </li>
        </ul>
      </nav>

      <button className={styles.header__language_btn}>
        <img src={usa_img} alt='Flag' />
        <p className={styles.header__language}>EN</p>
        <img src={triangle_btn} alt='Flag' />
      </button>
      <button className={styles.header__btn}>Login</button>
    </header>
  )
}

export default Header
