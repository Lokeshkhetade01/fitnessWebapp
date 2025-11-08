import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Gallery from './Components/Gallery';
import Service from './Components/Service';
const App=()=>{
  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/service' element = {<Service/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
    </Routes>
    </>
  )
}
export default App;