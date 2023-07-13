
import './App.css';
import {Routes,Route } from "react-router-dom"
import Logn from './Componets/Logn';
import CarListe from './Componets/Car/CarListe';
import Resevationlist from './Componets/Reservation/Resevationlist';
import UserListe from './Componets/User/UserListe';

function App() {
 
  return (
    <div className="App">
    
    <Routes>
      <Route path='/' element={<Logn/>}/>
      <Route path='/car' element={<CarListe/>}/>
      <Route path='/userProfil' element={<UserListe/>}/>
      <Route path='/listereservation' element={<Resevationlist/>}/>
      
    </Routes>
      
    </div>
  );
}

export default App;
