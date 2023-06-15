import React from 'react'
import './hero.scss'
import ContactForm from '../Form/ContactForm'
import Speaker from '../../images/speaker.png'
import Gift from '../../images/icons/gift.svg'

const Main = () => {
  return (
    <main className="hero container">
      <div className="hero__info block1">
        <h2 className="hero__badge">Вебинар</h2>

        <h1 className="hero__title">front-end</h1>

        <h2 className="hero__subtitle">
          {' '}
          <span>с нуля</span> легкий старт в IT профессии
        </h2>

        <p className="hero__desc">
          Узнайте какими{' '}
          <strong>
            навыками должен обладать фронтенд разработчик в 2022 году
          </strong>{' '}
          и как начать карьеру в востребованной профессии <br />
          <strong>
            с зарплатой <span>от 1 000$</span>
          </strong>
        </p>
      </div>

      <div className="hero__extra-info">
        <div className="hero__bonus">
          <img src={Gift} alt="gift logo" />

          <div className="hero__bonus-content">
            <h3>Бонус за регистрацию</h3>
            <p>PDF-файл &quot;5 преимуществ профессии веб-дизайнера&quot;</p>
          </div>
        </div>

        <div className="hero__speaker">
          <img src={Speaker} alt="Кирилл КАСАТОНОВ" />

          <div className="hero__speaker-content">
            <h3>
              Кирилл <span>КАСАТОНОВ</span>
            </h3>

            <p>
              6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и
              другими крупными корпорациями
            </p>
          </div>
        </div>
      </div>

      <div className="hero__form">
        <ContactForm />
      </div>
    </main>
  )
}

export default Main
