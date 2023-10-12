import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function Faq() {
  const faqData = [
    {
      question: "What is this FAQ about?",
      answer:
        "This FAQ is about creating an accordion FAQ page with React and react-icons.",
    },
    {
      question: "How do I use the accordion?",
      answer:
        "You can click on the '+' button to expand a question and click on the '-' button to collapse it.",
    },
    {
      question: "Can I add more questions and answers?",
      answer:
        "Yes, you can easily add more questions and answers to the faqData array in the component.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleAccordion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1); // Collapse if it's already expanded
    } else {
      setExpandedIndex(index); // Expand the clicked question
    }
  };

  return (
    <div className="faq bg-salem/10 rounded-xl py-10 px-6 mt-24">
      <h1 className="text-xl md:text-3xl font-bold text-center mb-6 text-shark">
        Frequently Asked Questions
      </h1>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item border-b  border-gray-300 mb-4">
          <button
            className="faq-question flex justify-between w-full items-center text-shark md:text-xl font-semibold py-2"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            {expandedIndex === index ? (
              <FaMinus className="faq-icon text-salem" />
            ) : (
              <FaPlus className="faq-icon text-salem" />
            )}
          </button>
          {expandedIndex === index && (
            <div className="faq-answer  text-shark p-4 py-10">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Faq;
