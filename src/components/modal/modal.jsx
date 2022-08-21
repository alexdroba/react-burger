import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ModalOverlay from '../modal-overlay/modal-overlay';

import styles from './modal.module.css';

function Modal({ title, onClose, children, isOpen }) {
  const modalRoot = document.getElementById('modal');

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [isOpen]);

  return ReactDOM.createPortal(
    isOpen && (
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
      </>
    ),

    modalRoot,
  );
}

Modal.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
