import React from 'react';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor.module.css';

function BurgerConstructor({ data }) {
  const [firstItem, lastItem] = [data[0], data[data.length - 1]];

  return (
    <div className="pt-25 pb-23 pl-4 pr-4">
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
  );
}

export default BurgerConstructor;
