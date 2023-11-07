import React from 'react';
import Toast from 'react-bootstrap/Toast';

export default function NotificationToast({
  showToast,
  onClose,
  toastIsError,
  toastMessage,
}: any) {
  return (
    <Toast
      show={showToast}
      onClose={onClose}
      bg={toastIsError ? 'danger' : 'success'}
      className="position-absolute top-0 start-50 translate-middle-x mt-2"
      autohide={true}
      delay={5000}
    >
      <Toast.Header
        closeButton={true}
        className={`bg-${toastIsError ? 'danger' : 'success'}`}
      >
        <strong className="me-auto text-light">Уведомление</strong>
      </Toast.Header>
      <Toast.Body className={'text-light'}>{toastMessage}</Toast.Body>
    </Toast>
  );
}
