import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AddProducts from './components/AddProducts';
import GetProducts from './components/GetProducts';
import Mpesa from './components/Mpesa';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
    
    <div className="App">
      <header className="App-header" >
       <h1 className='text-dark' >Sokogarden buy and sell goods online</h1>
      </header>
   
       <nav className='text-white'>
      <Link to='/'className='btn btn-dark text-white m-3 btn-outline-info' >GetProducts</Link>
      <Link to='/addproducts'className='btn btn-dark text-white m-3 btn-outline-info'>AddProducts</Link>
      
      <Link to='/signup'className='btn btn-dark text-white m-3 btn-outline-info'>SignUP</Link>
      <Link to='/signin'className='btn btn-dark text-white m-3 btn-outline-info'>SignIn</Link>

       </nav>

   <Routes>
    <Route path='/' element={<GetProducts/>}/>
    <Route path='/addproducts' element={<AddProducts/>}/>
    
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/signIn' element={<SignIn/>}/>






    </Routes>
    </div>
    </Router>
  );
}

export default App;
