import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthContext();

  const signup = async (formData) => {
    const url = import.meta.env.VITE_API_URL;
    const success = handleErrors(formData);
    if (!success) return;

    setLoading(true);

    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(url,'/api/auth/signup', formData); // Use HTTP
      const data = res.data;
      console.log(data);
      //local storage
      localStorage.setItem("chat-user",JSON.stringify(data));
      //update the context
      setAuthUser(data);

      toast.success('Signup successful!');
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleErrors = ({ fullName, username, password, confirmPassword, gender }) => {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
      toast.error("Please fill all the fields");
      return false;
    }
    if (confirmPassword !== password) {
      toast.error("Passwords don't match");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  return { loading, signup };
};

export default useSignup;
