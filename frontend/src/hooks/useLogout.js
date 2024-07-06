import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
  const { setAuthUser } = useAuthContext(); // Correct the typo
  const [loading, setLoading] = useState(false);
  const url = import.meta.env.VITE_API_URL;
  const logout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/auth/logout");
      localStorage.removeItem("chat-user"); // Consistent localStorage key
      setAuthUser(null);
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
