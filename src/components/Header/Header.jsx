import React from 'react'
import Logo from '../../images/icons/logo.svg'
import './header.scss'

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt="LOGO" />
      </div>

      <div className="header__date">28 декабря</div>

      <div className="header__duration">3,5 часа</div>
    </header>
  )
}

export default Header
