
import './App.css';
import {Routes,Route } from "react-router-dom"
import Logn from './Componets/Logn';
import CarListe from './Componets/Car/CarListe';

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path='/' element={<Logn/>}/>
      <Route path='/car' element={<CarListe/>}/>
      
    </Routes>
      
    </div>
  );
}

export default App;
