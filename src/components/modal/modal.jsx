import React from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.module.css';

function Modal(props) {
  const modalRoot = document.getElementById('modal');

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className="close">X</div>
      {props.title && <h1>modal</h1>}
    </div>,
    modalRoot,
  );
}

export default Modal;
