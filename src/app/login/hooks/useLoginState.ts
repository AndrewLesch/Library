import { useState } from 'react';
import { useRouter } from 'next/navigation';

import login from '@/api/login';
import register from '@/api/register';
import emptyUser from '@/constants/emptyUser';

export function useLoginState(showToastMessage: any) {
  const [user, setUser] = useState(emptyUser);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleUserDataChange = (e: any, field: any) => {
    setUser({ ...user, [field]: e.target.value });
  };

  const toggleForm = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    const result = await login(user);
    if (result.success) {
      router.push('/');
      showToastMessage(result.message, false);
    } else {
      setIsLoading(false);
      showToastMessage(result.message, true);
    }
  };

  const handleRegister = async () => {
    setIsLoading(true);
    const result = await register(user);
    setIsLoading(false);
    if (result?.success) {
      setIsRegistering(false);
      showToastMessage(result.message, false);
    } else {
      setIsRegistering(true);
      showToastMessage(result?.message, true);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (isRegistering) {
      await handleRegister();
    } else {
      await handleLogin();
    }
  };

  return {
    user,
    isRegistering,
    isLoading,
    handleUserDataChange,
    toggleForm,
    handleSubmit,
  };
}
