import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SignIn from './Components/Form/SignIn/SignIn';
import Welcome from './Components/Welcome/Welcome';
import SignUp from './Components/Form/SignUp/SignUp';
import ForgotPassword from './Components/Form/Forgot Password/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Welcome/>}/>
        <Route path='/SignIn' element={<SignIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
