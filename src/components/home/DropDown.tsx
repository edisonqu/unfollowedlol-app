import React, { useState } from 'react';

interface DropDownProps {
    question: string;
    answer: string;
    style?: string;
}

const DropDown = ({ question, answer, style }: DropDownProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

  return (
    <button onClick={toggleExpansion} className={`flex-row min-w-full border-t-[#3F3565] border-t border-b border-b-[#3F3565] px-6 py-8 justify-around ${style}`}>
        <div className={`flex justify-between ${isExpanded ? 'border-transparent' : null}`}>
            <p className="text-white text-2xl">{question}</p>
            <div className='text-white text-2xl'>
            <img src={isExpanded ? 'Minus sign.svg' : 'Plus sign.svg'} alt={isExpanded ? '-' : '+'} />
                
            </div>
        </div>
        <div className={`transition-max-height duration-500 ease-in-out overflow-hidden
            ${isExpanded ? 'max-h-screen py-6' : 'max-h-0'}`}
        >
            <p className="text-white text-xl text-left">{answer}</p>
        </div>
    </button>
  );
};

export default DropDown;
