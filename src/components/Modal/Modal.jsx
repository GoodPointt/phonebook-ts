import PropTypes from 'prop-types';

import { ModalBackdrop, ModalContent } from 'components/Styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    e.currentTarget === e.target && closeModal();
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
