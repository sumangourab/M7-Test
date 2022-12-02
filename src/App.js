import './App.css';
import Navbar from './components/Navbar';
import {Router, Route, Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Profile from './components/Profile';
function App() {
  return (
    <div className="bg-black h-screen w-screen  text-slate-200">
      <Navbar />
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
