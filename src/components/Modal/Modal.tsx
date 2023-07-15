import PropTypes from 'prop-types';

import { ModalBackdrop, ModalContent } from 'components/Styled.styled';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot: HTMLElement | null = document.querySelector('#modal-root')!;

interface IModal {
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal = ({ closeModal, children }: IModal) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
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
