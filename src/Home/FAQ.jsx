import { useState } from "react";
import { ArrowRight } from "lucide-react";
import "./FAQ.css";

const faqData = [
  {
    question: "How fast are your professional photo editing services?",
    answer: "We can deliver images between 12–24 hours.",
  },
  {
    question: "What professional photo editing services do you offer?",
    answer: "We offer background removal, color correction, retouching, clipping paths, and more.",
  },
  {
    question: "How much does your image editing service cost?",
    answer: "Our pricing starts as low as $0.10 per image, making it one of the most affordable professional editing services available. Whether you need background removal, retouching, or bulk enhancements, we offer scalable solutions that fit any budget — with no compromise on quality.",
  },
  {
    question: "Can Zynsketch handle the fluctuation of my image volume?",
    answer: "Yes, our workflow easily scales to meet varying demand levels.",
  },
  {
    question: "Can Zynsketch handle my bulk photo editing needs?",
    answer: "Absolutely! We’re designed to handle both small and large volumes efficiently.",
  },
  {
    question: "What level of customer support does Zynsketch offer?",
    answer: "We provide 24/7 customer support via chat and email.",
  },
  {
    question: "Will you retouch my pet, portrait, real estate, or wedding photos?",
    answer: "Yes, we work with a wide variety of photo types including all of the above.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="faq-item">
    <div className="faq-question" onClick={onClick}>
      <h3>{question}</h3>
      <div className={`faq-icon ${isOpen ? "open" : ""}`}>
        <ArrowRight size={16} />
      </div>
    </div>
    {isOpen && <p className="faq-answer">{answer}</p>}
    <hr />
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default first open

  return (
    <div className="faq-container">
      <div className="faq-left">
        <h2>
          You have <span className="highlight">questions</span>,<br /> we have answers
        </h2>
        <p>We answered some of your most asked questions about post–production and image editing at Zynsketch.</p>
      </div>
      <div className="faq-right">
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(index === openIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
