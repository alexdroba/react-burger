import React from 'react';

import {
  ConstructorElement,
  DragIcon,
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';

function BurgerConstructor({ data }) {
  const [firstItem, lastItem] = [data[0], data[data.length - 1]];

  return (
    <div className={styles.constructorWrapper}>
      <div className="mb-10">
        <div className="ml-8 mb-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={firstItem.name}
            price={firstItem.price}
            thumbnail={firstItem.image}
          />
        </div>
        <ul className={styles.constructor}>
          {data.map((item, index) => (
            <li className={styles.constructorItem} key={item._id}>
              <DragIcon type="primary" />
              <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
            </li>
          ))}
        </ul>
        <div className="ml-8">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={lastItem.name}
            price={lastItem.price}
            thumbnail={lastItem.image}
          />
        </div>
      </div>
      <div className={styles.constructorTotal}>
        <p className="text text_type_digits-medium">610</p>
        <CurrencyIcon type="primary" />
        <Button type="primary" size="large">
          Нажми на меня
        </Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
