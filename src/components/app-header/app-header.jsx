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
      <div className={styles.container}>
        <nav className={styles.navLeftBar}>
          <div className={styles.buttonIcon}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default ml-2">Конструктор</span>
          </div>
          <div className={styles.buttonIcon}>
            <ListIcon type="secondary" />
            <span className="text text_type_main-default text_color_inactive ml-2">
              Лента заказов
            </span>
          </div>
        </nav>
        <Logo />
        <nav className={styles.navRightBar}>
          <div className={styles.buttonIcon}>
            <ProfileIcon type="secondary" />
            <span className="text text_type_main-default text_color_inactive ml-2">
              Личный кабинет
            </span>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;
