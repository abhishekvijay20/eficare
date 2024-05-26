import React, { useState } from "react";
import { motion } from "framer-motion";

const CareerAdvice = () => {
  const careerTips = [
    {
      question: "How to handle interviews?",
      answer: "Preparing for an interview is akin to laying the groundwork for a successful performance. Begin by researching the company's mission, values, and recent achievements. This not only demonstrates your interest but also equips you with valuable insights to align your responses during the interview. Practice is pivotal. Anticipate common questions and formulate concise yet impactful responses. Consider your professional journey, accomplishments, and how they resonate with the role you're pursuing. Remember, confidence stems from preparedness. Appearance and punctuality should not be underestimated. Dress appropriately, reflecting the company's culture, and aim to arrive a few minutes early to alleviate any unforeseen delays.",
    },
    {
      question: "How to write resumes?",
      answer: "Answer to how to write resumes...",
    },
    {
      question: "How to perform well on the job?",
      answer: "Answer to how to perform well on the job...",
    },
    // Add more questions and answers as needed
  ];

  const [currentTipIndex, setCurrentTipIndex] = useState(0);

  const handlePrevTip = () => {
    setCurrentTipIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextTip = () => {
    setCurrentTipIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div className="self-stretch bg-whitesmoke overflow-hidden py-8 px-6">
      <div className="flex flex-col items-center justify-start">
        <div className="flex items-center justify-between mt-6 w-full">
          <motion.button
            className="focus:outline-none"
            onClick={handlePrevTip}
            disabled={currentTipIndex === 0}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M11.293 3.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1 0 1.414l7 7a1 1 0 1 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 0-1.414z"
              />
            </svg>
          </motion.button>
          <motion.button
            className="focus:outline-none"
            onClick={handleNextTip}
            disabled={currentTipIndex === careerTips.length - 1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.707 16.707a1 1 0 0 1-1.414-1.414L12.586 11H5a1 1 0 0 1 0-2h7.586l-5.293-5.293a1 1 0 0 1 1.414-1.414l7 7a1 1 0 0 1 0 1.414l-7 7z"
              />
            </svg>
          </motion.button>
        </div>
        <div className="flex items-center justify-center mt-6">
          {careerTips.map((tip, index) => (
            <CareerTip
              key={index}
              question={tip.question}
              answer={tip.answer}
              index={index}
              currentIndex={currentTipIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const CareerTip = ({ question, answer, index, currentIndex }) => {
  const isVisible = index === currentIndex;

  return (
    <motion.div
      className={`${
        isVisible ? "block" : "hidden"
      } flex flex-col items-start justify-start w-full h-full bg-white p-4 rounded shadow-lg`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <p className="font-bold text-lg">{question}</p>
      <p className="font-normal">{answer}</p>
    </motion.div>
  );
};

export default CareerAdvice;
