import { useEffect, useState } from "react";
import { BsFillCaretDownFill } from "react-icons/bs";

const Question = ({ question, children }) => {
  const baseClasses = "text-gray-700 dark:text-gray-300 flex items-center justify-between px-8 w-[83vw] xl:w-[63rem] min-h-[4rem] font-semibold rounded-full border bg-gray-50 dark:bg-[#1d1d1d] shadow transition duration-200 cursor-pointer";
  const closedClasses = "border-transparent lg:hover:border-gray-500 lg:dark:hover:border-pastel-pink ";
  const openedClasses = "border-gray-500 dark:border-pastel-pink";

  const questionClosedStyle = `${baseClasses} + ${closedClasses}`;
  const questionOpenedStyle = `${baseClasses} + ${openedClasses}`;

  const [questionStyles, setQuestionsStyles] = useState(questionClosedStyle);
  const [questionOpen, setQuestionOpen] = useState(false);
  const [questionIconStyles, setQuestionIconStyles] = useState('');

  const openQuestion = () => {
    if (!questionOpen) {
      setQuestionOpen(true);
      setQuestionIconStyles('transform rotate-180');
    } else {
      setQuestionOpen(false);
      setQuestionIconStyles('');
    }
  };

  useEffect(() => {
    if (questionOpen) {
      setQuestionsStyles(questionOpenedStyle);
    } else {
      setQuestionsStyles(questionClosedStyle);
    }
  }, [questionOpen]);

  return (<div className="question flex flex-col items-center space-y-6">
    {/* question */ }
    <section className={ questionStyles } onClick={ openQuestion }>
      <div className="flex select-none justify-between w-full items-center">
        <h1>
          { question }
        </h1>
        <div className={ questionIconStyles }>
          <BsFillCaretDownFill />
        </div>
      </div>
    </section>

    {/* answer */ }
    <section className="w-[60vw]">
      { questionOpen && children }
    </section>

    {/* DO NOT TOUCH | for searching/filtering */ }
    <section className="hidden">
      { children }
    </section>
  </div>);
};

export default Question;