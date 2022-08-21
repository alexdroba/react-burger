import React from 'react';
import PropTypes from 'prop-types';

import orderIcon from '../../images/order-icon.svg';

import styles from './order-details.module.css';

function OrderDetails({ orderNumber }) {
  return (
    <div className={styles.order}>
      <div className={styles.orderNumber}>
        <span className="text text_type_digits-large">{orderNumber}</span>
      </div>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img src={orderIcon} alt="Зеленая галочка - Ваш заказ начали готовить" />
      <p className="text text_type_main-default pt-15 pb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive pb-20">
        Дождитесь готовности на орбитальной станции
      </p>
    </div>
  );
}

OrderDetails.propTypes = {
  orderNumber: PropTypes.number.isRequired,
};

export default OrderDetails;
