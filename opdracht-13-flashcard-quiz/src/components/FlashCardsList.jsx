import FlashCard from "./FlashCard";

function FlashCardList({ cards }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <FlashCard
          key={index}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </div>
  );
}

export default FlashCardList;
