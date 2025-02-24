import { useState } from "react";
import useConversationStore from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversationStore();

    const sendMessage = async (message) => {
        if (!selectedConversation) {
            toast.error("No conversation selected");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(`/api/v1/messages/send/${selectedConversation._id}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message);
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return { loading, sendMessage };
};

export default useSendMessage;