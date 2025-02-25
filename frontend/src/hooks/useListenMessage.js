import { useEffect, useContext } from "react";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sound/soundnotification.mp3";
import { SocketContext } from "../context/Socket";

const useListenMessages = () => {
    const { socket } = useContext(SocketContext);
    const { setMessages } = useConversation();

    useEffect(() => {
        if (!socket) return;

        const handleNewMessage = (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        };

        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("newMessage", handleNewMessage);
        };
    }, [socket, setMessages]); // Remove `messages` to prevent re-renders

};

export default useListenMessages;
