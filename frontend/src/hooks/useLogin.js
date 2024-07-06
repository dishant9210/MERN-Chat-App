import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const url = import.meta.env.VITE_API_URL;

  const login = async (formData) => {
    setLoading(true);
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post("/api/auth/login", formData);
      const data = res.data;

      if (data.error) {
        throw new Error(data.error);
      }

      console.log(data);
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Login successful");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
