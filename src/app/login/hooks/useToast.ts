import { useState } from 'react';

export function useToast() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastIsError, setToastIsError] = useState(false);

  const showToastMessage = (message: any, isError: any) => {
    setToastMessage(message);
    setToastIsError(isError);
    setShowToast(true);
  };

  const hideToast = () => {
    setShowToast(false);
  };

  return { showToast, showToastMessage, hideToast, toastMessage, toastIsError };
}
