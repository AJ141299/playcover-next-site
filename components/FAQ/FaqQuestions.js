import Keybindings from "./Keybindings/Keybindings";
import Question from "./Question";

const FaqQuestions = () => {
  return (<div className="flex justify-center">
    <div className='w-[60%] flex flex-col space-y-6'>
      <Question question="Question test">
        <Keybindings />
      </Question>

      <Question question="Question test">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto totam quo natus dolore quas ducimus dicta possimus, cumque nisi officiis tempore velit aut nulla in nam, maiores ullam. Ipsam porro eos eligendi eaque quia, ut aliquam perferendis ab nisi tenetur laboriosam quae hic sit, expedita doloribus mollitia saepe voluptate architecto? In, perspiciatis non explicabo alias nostrum saepe officia ab quaerat neque aliquid laboriosam inventore delectus! Facilis, minima commodi laboriosam nobis accusantium consequuntur, reiciendis aliquam error pariatur quam assumenda soluta porro cupiditate accusamus aut dicta. Nihil rerum quisquam nostrum ab veniam obcaecati explicabo itaque blanditiis sequi ullam eaque nemo, earum exercitationem.</p>
      </Question>
    </div>
  </div>);
};

export default FaqQuestions;