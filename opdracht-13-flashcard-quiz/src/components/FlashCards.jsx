import { useState } from "react";

function FlashCard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer bg-blue-500 text-white p-6 rounded-xl text-center shadow-lg"
    >
      {flipped ? <p>{answer}</p> : <p>{question}</p>}
    </div>
  );
}

export default FlashCard;
