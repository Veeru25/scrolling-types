"use client";

import styles from "./page.module.css";

const Scroll1 = () => {
    const chatData = [
        { sender: "User", message: "Hi!" },
        { sender: "Bot", message: "Hello! How can I help you today?" },
        { sender: "User", message: "Tell me a joke." },
        { sender: "Bot", message: "Why don’t skeletons fight each other? They don’t have the guts!" },
        { sender: "User", message: "Haha, good one!" },
        { sender: "Bot", message: "Glad you liked it!" },
        { sender: "User", message: "What's your name?" },
        { sender: "Bot", message: "I'm your friendly chatbot." },
        { sender: "User", message: "What's the weather like?" },
        { sender: "Bot", message: "It's sunny and 25°C outside!" },
        { sender: "User", message: "Should I carry an umbrella?" },
        { sender: "Bot", message: "No need! It’s a clear day." },
        { sender: "User", message: "Thanks for the info!" },
        { sender: "Bot", message: "You're welcome!" },
        { sender: "User", message: "Can you recommend a movie?" },
        { sender: "Bot", message: "Sure! You should watch 'Inception.'" },
        { sender: "User", message: "Sounds great, thanks!" },
        { sender: "Bot", message: "Anytime! Let me know if you need more recommendations." },
        { sender: "User", message: "Can you recommend a book too?" },
        { sender: "Bot", message: "Certainly! '1984' by George Orwell is a classic." },
        { sender: "User", message: "Hi!" },
        { sender: "Bot", message: "Hello! How can I help you today?" },
        { sender: "User", message: "Tell me a joke." },
        { sender: "Bot", message: "Why don’t skeletons fight each other? They don’t have the guts!" },
        { sender: "User", message: "Haha, good one!" },
        { sender: "Bot", message: "Glad you liked it!" },
        { sender: "User", message: "What's your name?" },
        { sender: "Bot", message: "I'm your friendly chatbot." },
        { sender: "User", message: "What's the weather like?" },
        { sender: "Bot", message: "It's sunny and 25°C outside!" },
        { sender: "User", message: "Should I carry an umbrella?" },
        { sender: "Bot", message: "No need! It’s a clear day." },
        { sender: "User", message: "Thanks for the info!" },
        { sender: "Bot", message: "You're welcome!" },
        { sender: "User", message: "Can you recommend a movie?" },
        { sender: "Bot", message: "Sure! You should watch 'Inception.'" },
        { sender: "User", message: "Sounds great, thanks!" },
        { sender: "Bot", message: "Anytime! Let me know if you need more recommendations." },
        { sender: "User", message: "Can you recommend a book too?" },
        { sender: "Bot", message: "Certainly! '1984' by George Orwell is a classic." },
    ];


    const renderChat = (chatData: any) => {
        return chatData.map((chat: any, index: any) => (
            <div
                key={index}
                className={`${styles.message} ${chat.sender === "User" ? styles.userMessage : styles.botMessage}`}
            >
                {chat.message}
            </div>
        ));
    };

    return (
        <>
            <header className={styles.header}>
                <input
                    type="search"
                    className={styles.input}
                    placeholder="search here..."
                />
            </header>
            <div className={styles.container}>
                <div className={styles.chatBox}>{renderChat(chatData)}</div>
                <div className={`${styles.chatBox} ${styles.removePadding}`}>
                    <div className={styles.copilotHeading}>
                        <p>COPILOT</p>
                    </div>
                    {renderChat(chatData)}
                </div>
                {/* <div className={styles.chatContainer}>
                    <p className={styles.copilotHeading}>copilot</p>
                    <div className={styles.chatBox}>{renderChat(chatData)}</div>
                </div> */}
                <div className={`${styles.chatBox} ${styles.removeBorder}`}>{renderChat(chatData)}</div>
            </div>
        </>
    );
};

export default Scroll1;
