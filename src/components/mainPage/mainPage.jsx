import React from 'react';
import './mainPage.css';

export function MainPage(props) {
    return (
        <main className='mainPage'>
            <div className='block container'>
                <h1>Мы предлагаем</h1>
                <div className='flex-baseline we_offer'>
                    <div><img alt='we offer' src='assets/img/mainPage/1.png' /><p>Быстрая покупка товаров с мобильных устройств</p></div>
                    <div><img alt='we offer' src='assets/img/mainPage/2.png' /><p>Всегда свежая информация</p></div>
                    <div><img alt='we offer' src='assets/img/mainPage/3.png' /><p>Последние новости вашей компании</p></div>
                    <div><img alt='we offer' src='assets/img/mainPage/4.png' /><p>Контент, который реально продает</p></div>
                    <div><img alt='we offer' src='assets/img/mainPage/5.png' /><p>Работающие формы и элементы лидогенерации</p></div>
                    <div><img alt='we offer' src='assets/img/mainPage/6.png' /><p>Бесперебойная работа и защита от вирусных атак</p></div>
                </div>
            </div>
        </main>)
}