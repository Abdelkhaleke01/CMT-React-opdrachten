import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Navigation from './pages/Navigation'
import About from './pages/about'
import Contact from './pages/Contact'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
 
 
 
function App() {
 
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NoPage/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}
 
export default App