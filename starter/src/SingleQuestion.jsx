import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>{title}
        <button type="button"className="question-btn"  onClick={()=> setShowInfo(!showInfo)}>
            {showInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
        </button>
      </header>

      {showInfo && <p>{info}</p>}
    </article>
  );
};

export default SingleQuestion;
