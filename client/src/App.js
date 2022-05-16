
import './App.css';
import './styles/Profilestyle.css' ;


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NewUser from './components/NewUser';
import UserList from './components/UserList';

import Login from './components/Login';
import EditUser from './components/EditUser';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Photo from './components/Photo';
import Calendar from './components/Calendar';
import Calendrier from './components/Calendrier';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
        <Route  path="/newUser" element={<NewUser/>} />
        <Route  path="/userList" element={<UserList/>} />
        <Route  path="/" element={<Login/>} />
        <Route  path="/editUser/:id" element={<EditUser/>} />
        <Route  path="/profile" element={<Profile/>} />
        <Route  path="/navbar" element={<NavBar/>} />
        <Route  path="/photo" element={<Photo/>} />
        <Route  path="/calendar" element={<Calendar/>} />
        <Route  path="/cal" element={<Calendrier/>} />
        
        
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
