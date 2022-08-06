import React from 'react';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav>
        <div className="header__btn btn-builder btn-icon">
          <BurgerIcon type="primary" />
          <span className="text text_type_main-default">Конструктор</span>
        </div>
        <div className="header__btn btn-order btn-icon">
          <ListIcon type="secondary" />
          <span className="text text_type_main-default text_color_inactive">Лента заказов</span>
        </div>
      </nav>
      <Logo />
      <nav>
        <div className="header__btn btn-account btn-icon">
          <ProfileIcon type="primary" />
          <span className="text text_type_main-default text_color_inactive">Личный кабинет</span>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
