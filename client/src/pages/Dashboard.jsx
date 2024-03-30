import { useState } from "react";

function Dashboard() {
  const [history, setHistory] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");

  const handleInputChange = (e) => {
    setCurrentQuery(e.target.value);
  };

  const handleSubmit = () => {
    if (currentQuery.trim() !== "") {
      // Add the current query to the history
      setHistory([...history, currentQuery]);

      // Clear the current query
      setCurrentQuery("");
    }
    if (!currentQuery) {
      alert("Please type a message!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // Maximum number of queries to keep in history
  const maxHistoryLength = 10;

  return (
    <div className="chat-container" style={{ backgroundColor: "#202021" }}>
      <div
        className="side-panel"
        style={{
          color: "white",
          backgroundColor: "#171717",
          fontFamily: "DM Sans",
        }}
      >
        <h1 style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>Lawsift</h1>
        <h2
          className="color"
          style={{ fontSize: "1rem", fontWeight: "700", color: "gray" }}
        >
          History
        </h2>
        <ul>
          {history.slice(-maxHistoryLength).map((query, index) => (
            <li key={index}>{query}</li>
          ))}
        </ul>
      </div>
      <div className="chat-window" style={{ backgroundColor: "black" }}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={currentQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <div>
            <ion-icon name="send-outline"></ion-icon>
          </div>
          <button onClick={handleSubmit}>
            <ion-icon
              className="icon"
              style={{
                display: "block",
                color: "white",
                fontSize: "24px",
                position: "relative",
                right: "4vw",
              }}
              name="send-outline"
            ></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
