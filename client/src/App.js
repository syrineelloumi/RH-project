
import './App.css';
import './styles/Profilestyle.css' ;


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NewUser from './components/NewUser';
import UserList from './components/UserList';
import Profil from './components/Profil';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
        <Route  path="/newUser" element={<NewUser/>} />
        <Route  path="/userList" element={<UserList/>} />
        <Route  path="/profil" element={<Profil/>} />
        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
