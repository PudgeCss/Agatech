import React from 'react';
import './header.css';
import { NavLink } from 'react-router-dom';

export function Header(props) {
    return (
        <header>
            <div className="header container">
                <NavLink exact to='/'><img className="Logo" alt="logo" src='assets/img/header/logo.png' /></NavLink>
                <nav className="mobile-menu container">
                    <input type="checkbox" id="checkbox" className="mobile-menu__checkbox" />
                    <label for="checkbox" className="mobile-menu__btn"><div className="mobile-menu__icon"></div></label>
                    <div className="mobile-menu__container">
                        <ul className="mobile-menu__list">
                            <NavLink className="mobile-menu__item" to='/about'>Об Автошколе</NavLink >
                            <NavLink className="mobile-menu__item" to='/services'>Услуги</NavLink >
                            <NavLink className="mobile-menu__item" to='/addServices'>Доп. услуги</NavLink >
                            <NavLink className="mobile-menu__item" to='/costs'>Цены</NavLink >
                            <NavLink className="mobile-menu__item" to='/filials'>Филиалы</NavLink >
                        </ul>
                    </div>
                </nav>
                <nav>
                    <NavLink to='/'>Подключить</NavLink>
                    <NavLink to='/'>О нас</NavLink>
                    <NavLink to='/'>Кейсы</NavLink>
                    <NavLink to='/'>Документы</NavLink>
                    <NavLink to='/'>Контакты</NavLink>
                </nav>
                <div className='contacts'>
                    <div className='contact'>
                        <img alt='mail' src='assets/img/mail.png' />
                        <a href='mailto:support@agatech.ru'> support@agatech.ru</a></div>
                    <div className='contact'>
                        <img alt='tel' src='assets/img/tel.png' />
                        <a href='tel:79272705330'> +7 927 270 53 30</a></div>
                </div>
            </div>
        </header>
    )
}