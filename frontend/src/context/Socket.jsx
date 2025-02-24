import React, { createContext, useEffect, useState } from 'react';
import { useAuthContext } from './AuthContext';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        if (authUser?.user?._id) { 
            const newSocket = io("http://localhost:3000/", {
                query: { userId: authUser.user._id },
            });
            setSocket(newSocket);
    
            newSocket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });
    
            return () => newSocket.close();
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