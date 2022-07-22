import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Header from './Shared/Header';
import Login from './UserAuth/Login';
import RequireAuth from './UserAuth/RequireAuth';
import SignUp from './UserAuth/SignUp';

function App() {
  return (
    <div>
     <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/purchase' element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>
     </Routes>
    </div>
  );
}

export default App;
