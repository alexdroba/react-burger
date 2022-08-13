import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from '../modal-overlay/modal-overlay';

import styles from './modal.module.css';

function Modal({ title, onClose, children }) {
  const modalRoot = document.getElementById('modal');

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  });

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          {title && (
            <div className={styles.modalHeaderTitle}>
              <span className="text text_type_main-large">{title}</span>
            </div>
          )}
          <div className={styles.modalCloseButton} onClick={onClose}>
            <CloseIcon type="primary" />
          </div>
        </div>
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </>,
    modalRoot,
  );
}

export default Modal;
