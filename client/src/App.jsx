import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from "./components/Header";


export default function App() {
  return ( <Router>  
    <Header />
    <div className="App">  
     <ul className="App-header">  
       <li>  
         <Link to="/"></Link>  
       </li>  
       <li>  
         <Link to="/about"></Link>  
       </li>  
       <li>  
         <Link to="/profile"></Link>  
       </li> 
       <li>  
         <Link to="/signup"></Link>  
       </li>  
       <li>  
         <Link to="/signin"></Link>  
       </li>  
     </ul>  
    <Routes>  
          <Route exact path='/' element={< Home />}></Route>  
          <Route exact path='/about' element={< About />}></Route>  
          <Route exact path='/profile' element={< Profile />}></Route>  
          <Route exact path='/signin' element={< SignIn />}></Route>  
          <Route exact path='/signup' element={< SignUp />}></Route>  
   </Routes>  
   </div>  
</Router>  
    )
}
