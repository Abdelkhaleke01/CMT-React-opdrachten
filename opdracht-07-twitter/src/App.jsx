import './App.css'
import CreateMessage from './components/CreateMessage'
import Messagelist from './components/MessageList'


function App() {

  let name = "test"
  let message = "dit is weer het eerste bericht"
  return (
    <>
      <CreateMessage />
     <Messagelist name="test persoon 1" message="dit is weer het eerste bericht" />
    </>
  )
}

export default App
