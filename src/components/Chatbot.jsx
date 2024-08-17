import React, { useState } from "react";
import styles from "./Chatbot.module.css";
import { Tooltip } from "@mui/material";

const predefinedQuestions = [
  "What programs do you offer?",
  "Can you tell me about the admission process?",
  "What is your institute's mission and vision?",
  "Do you provide scholarships?",
  "What are the campus facilities like?",
  "How can I contact the admissions office?",
  "What extracurricular activities are available?",
  "What are the student support services?",
  "How experienced are the faculty members?",
  "What are your institute's values and culture?",
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: input, type: "user" }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages([
        ...messages,
        { text: input, type: "user" },
        { text: botResponse, type: "bot" },
      ]);
    }, 1000);
  };

  const handlePredefinedQuestion = (question) => {
    setInput(question);
    handleSendMessage();
  };

  const getBotResponse = (userInput) => {
    // Simple bot response logic
    if (userInput.toLowerCase().includes("programs"))
      return "We offer a wide range of programs including undergraduate, postgraduate, and professional courses in various fields such as Science, Arts, Engineering, and Management.";
    if (userInput.toLowerCase().includes("admission"))
      return "Our admission process involves submitting an online application, followed by an entrance exam and an interview for shortlisted candidates.";
    if (userInput.toLowerCase().includes("mission"))
      return "Our mission is to provide quality education that empowers students to achieve academic and professional excellence. Our vision is to be a leader in educational innovation and community impact.";
    if (userInput.toLowerCase().includes("scholarships"))
      return "Yes, we offer a variety of scholarships based on merit, financial need, and special categories. Please check our scholarships page for more details.";
    if (userInput.toLowerCase().includes("facilities"))
      return "Our campus offers state-of-the-art facilities including modern classrooms, well-equipped laboratories, a comprehensive library, sports complexes, and comfortable accommodation.";
    if (userInput.toLowerCase().includes("contact"))
      return "You can contact the admissions office via email at admissions@institute.edu or call us at (123) 456-7890.";
    if (userInput.toLowerCase().includes("extracurricular"))
      return "We offer a wide range of extracurricular activities including sports, arts, cultural clubs, and leadership programs to enhance students' overall development.";
    if (userInput.toLowerCase().includes("support"))
      return "We provide various student support services including academic counseling, career guidance, mental health services, and peer mentoring.";
    if (userInput.toLowerCase().includes("faculty"))
      return "Our faculty members are highly qualified and experienced, with many holding advanced degrees from prestigious institutions and having extensive industry experience.";
    if (userInput.toLowerCase().includes("values"))
      return "Our institute values integrity, excellence, inclusivity, and innovation. We are committed to creating a positive and supportive learning environment for all students.";
    return "Sorry, I don't understand. Can you please rephrase your question?";
  };

  const toggleChatbox = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className={styles.chatbot}>
      {isChatOpen ? (
        <div className={styles.chatbox}>
          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.type === "bot" ? styles.bot : styles.user
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.predefinedQuestions}>
            {predefinedQuestions.map((question, index) => (
              <button
                key={index}
                className={styles.predefinedButton}
                onClick={() => handlePredefinedQuestion(question)}
              >
                {question}
              </button>
            ))}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
          <button className={styles.closeButton} onClick={toggleChatbox}>
            &times;
          </button>
        </div>
      ) : (
        <Tooltip title="Talk to Us">
          <div className={styles.avatar} onClick={toggleChatbox}>
            <img src="avatar.jpg" alt="Chatbot Avatar" />
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default Chatbot;
