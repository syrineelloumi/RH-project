
import './App.css';
import './styles/Profilestyle.css' ;


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Profile from './components/Profile';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
        <Route exact path="/profile" element={<Profile/>} />
        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
