import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

export const SocketContext = createContext();

export const useSocketContext = ()=>{
  return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
  const url = process.env.VITE_API_URL
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useAuthContext();

  useEffect(() => {
    if (authUser) {
      const newSocket = io(url, {
        query : {
          userId : authUser._id,
        }
      });

      setSocket(newSocket);

      newSocket.on("getOnlineUsers", (users)=>{
        setOnlineUsers(users);
        console.log(users)
      })




      // Cleanup function to close the socket when the component unmounts or dependencies change
      return () => {
        newSocket.close();
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
