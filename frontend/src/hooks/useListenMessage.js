import { useEffect, useContext } from "react";
import useConversation from "../zustand/useConversation";
import notificationSound from "../assets/sound/soundnotification.mp3"
import { SocketContext } from "../context/Socket";

const useListenMessages = () => {
    const { socket } = useContext(SocketContext); // Use useContext to access the socket
    const { messages, setMessages } = useConversation();

    useEffect(() => {
        if (!socket) return; // Ensure socket is defined

        // Listen for new messages
        socket.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage]);
        });

        // Cleanup: Remove the event listener when the component unmounts
        return () => {
            socket.off("newMessage");
        };
    }, [socket, messages, setMessages]); // Add dependencies to avoid stale closures
};

export default useListenMessages;