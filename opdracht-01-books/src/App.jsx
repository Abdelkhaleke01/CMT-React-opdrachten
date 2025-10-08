app.jsx:
import Books from '../components/books'
import './App.css'
 
function App() {
  return (
    <>
     <Books title="Ulysses by James Joycen" desc="Set in Dublin, the novel follows a day in the life of Leopold Bloom, an advertising salesman, as he navigates the city. The narrative, heavily influenced by Homer's Odyssey, explores themes of identity, heroism, and the complexities of everyday life. It is renowned for its stream-of-consciousness style and complex structure, making it a challenging but rewarding read." img="img/book1.png"/>
     <Books title="In Search of Lost Time by Marcel Proust" desc="This renowned novel is a sweeping exploration of memory, love, art, and the passage of time, told through the narrator's recollections of his childhood and experiences into adulthood in the late 19th and early 20th century aristocratic France. The narrative is notable for its lengthy and intricate involuntary memory episodes, the most famous being the madeleine episode. It explores the themes of time, space and memory, but also raises questions about the nature of art and literature, and the complex relationships between love, sexuality, and possession." img="img/book2.png"/>
     <Books title="The Great Gatsby by F. Scott Fitzgerald" desc="Set in the summer of 1922, the novel follows the life of a young and mysterious millionaire, his extravagant lifestyle in Long Island, and his obsessive love for a beautiful former debutante. As the story unfolds, the millionaire's dark secrets and the corrupt reality of the American dream during the Jazz Age are revealed. The narrative is a critique of the hedonistic excess and moral decay of the era, ultimately leading to tragic consequences." img="img/book3.png"/>
   
    </>
  )
}