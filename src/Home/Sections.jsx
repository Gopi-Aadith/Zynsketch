// Sections.jsx
import { useState } from "react";
import { CheckCircle, ArrowRight, RotateCcw } from "lucide-react";
import "./Sections.css";
import { image } from "framer-motion/client";

const sectionsData = [
  {
    key: "ecommerce",
    title: "E-commerce",
    image: "src/assets/After1.jpg",
    items: [
      "Background Removal",
      "Color Correction",
      "Clipping Path",
      "Retouching",
      "Ghost Mannequin",
    ],
  },
  {
    key: "editorial",
    title: "Editorial",
    image: "src/assets/After2.jpg",
    items: [
      "Clipping Path",
      "Clean Up",
      "Subjective Edits",
      "Retouching",
    ],
  },
  
];

const SectionBlock = ({ title, items, isActive, onClick }) => {
  return (
    <div className="section">
      <div className="section-header" onClick={onClick}>
        <span>{title}</span>
        <div className={`icon-button ${isActive ? "active" : ""}`}>
          <ArrowRight size={16} />
        </div>
      </div>
      {isActive && (
        <ul className="section-list">
          {items.map((item) => (
            <li key={item} className="section-item">
              <CheckCircle size={16} color="#8edf5f"/> {item}
            </li>
          ))}
        </ul>
      )}
      <hr className="section-divider" />
    </div>
  );
};

const Sections = () => {
  const [activeSection, setActiveSection] = useState("ecommerce");

  return (
    <div className="section-container">

      <h1><span><span className="highlight">All</span> your e-commerce</span> <span>assets in one place</span></h1>

        <div className="section-content">

          <div className="sections-wrapper">

            {sectionsData.map(({ key, title, items }) => (
              <SectionBlock
                key={key}
                title={title}
                items={items}
                isActive={activeSection === key}
                onClick={() => setActiveSection(key)}
              />
            ))}
          </div>

          <div className="section-image">
            <img
                src={
                  sectionsData.find((section) => section.key === activeSection)?.image
                }
                alt="section-visual"
            />
          </div>

        </div>

    </div>
  );
};

export default Sections;
