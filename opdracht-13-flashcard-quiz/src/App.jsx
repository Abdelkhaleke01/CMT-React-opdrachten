import FlashCardList from "./components/FlashCardList";
import flashcards from "./data";

function App() {
  return (
    <div className="min-h-screen bg-blue-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Hoofdsteden Flashcard Quiz
      </h1>

      <FlashCardList cards={flashcards} />
    </div>
  );
}

export default App;
