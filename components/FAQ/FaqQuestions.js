import { useEffect, useState } from "react";
import Keybindings from "./Keybindings/Keybindings";
import Question from "./Question";
import SearchBar from "./SearchBar";

const FaqQuestions = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // filter questions
  useEffect(() => {
    const questionsList = document.querySelectorAll('.question');
    Array.from(questionsList)
      .filter((question) => {
        return !question.textContent.toLowerCase().includes(searchTerm);
      })
      .forEach((question) => {
        question.classList.add('hidden');
      });

    Array.from(questionsList)
      .filter((question) => {
        const checkQuestion = question.textContent.toLowerCase().includes(searchTerm);
        return checkQuestion;
      })
      .forEach((question) => {
        question.classList.remove('hidden');
      });

    console.log(questionsList);

  }, [searchTerm]);

  return (
    <div className="flex justify-center">

      <div className="flex flex-col space-y-12">
        <div className="animate-fadeInRightFaster">
          <SearchBar setSearchTerm={ setSearchTerm } />
        </div>

        {/* questions list */ }
        <section className="flex flex-col space-y-5 animate-fadeInLeftFaster">
          <Question question="Question test">
            <Keybindings />
          </Question>

          <Question question="Question test 2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam quo natus dolore quas ducimus dicta possimus, cumque nisi officiis tempore velit aut nulla in nam, maiores ullam. Ipsam porro eos eligendi eaque quia, ut aliquam perferendis ab nisi tenetur laboriosam quae hic sit, expedita doloribus mollitia saepe voluptate architecto? In, perspiciatis non explicabo alias nostrum saepe officia ab quaerat neque aliquid laboriosam inventore delectus! Facilis, minima commodi laboriosam nobis accusantium consequuntur, reiciendis aliquam error pariatur quam assumenda soluta porro cupiditate accusamus aut dicta. Nihil rerum quisquam nostrum ab veniam obcaecati explicabo itaque blanditiis sequi ullam eaque nemo, earum exercitationem.</p>
          </Question>
        </section>
      </div>
    </div>

  );
};

export default FaqQuestions;