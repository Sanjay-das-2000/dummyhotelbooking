import './App.module.css';
import {Routes,Route} from "react-router-dom";
import Home from './bodycontent/Home';
import Login from './bodycontent/Login';
import Signup from './bodycontent/Signup';

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
