import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Header from './Shared/Header';
import NotFound from './Shared/NotFound';
import Login from './UserAuth/Login';
import RequireAuth from './UserAuth/RequireAuth';
import SignUp from './UserAuth/SignUp';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/purchase/:_id' element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
    </div>
  );
}

export default App;
