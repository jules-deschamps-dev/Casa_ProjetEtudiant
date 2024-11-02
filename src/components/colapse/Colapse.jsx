import React, { useState } from "react";
import "./colapse.scss";

const Colapse = ({ title, content, type }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleCollapse = () => setIsActive(!isActive);

  const renderContent = () => {
    switch (type) {
      case "text":
        return <p>{content}</p>;
      case "list":
        return content.map((item, index) => (
          <div key={index}>
            {item} <br />
          </div>
        ));
      default:
        return null;
    }
  };

  return (
    <div className={`colapse ${isActive ? "active" : ""}`}>
      <div className="colapse-head">
        <span>{title}</span>
        <img src="../../../public/arrow.svg" alt="arrow" onClick={toggleCollapse} className={isActive ? "active" : ""}
        />
      </div>

      <div className="colapse-content">{isActive && renderContent()}</div>
    </div>
  );
};

export default Colapse;
