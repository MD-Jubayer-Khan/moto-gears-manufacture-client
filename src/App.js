import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Purchase from './Pages/Purchase/Purchase';
import Header from './Shared/Header';
import NotFound from './Shared/NotFound';
import Login from './UserAuth/Login';
import RequireAuth from './UserAuth/RequireAuth';
import SignUp from './UserAuth/SignUp';
import MyProfile from './Pages/Dashboard/MyProfile'
import AddProduct from './Pages/Dashboard/AddProduct';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AllUser from './Pages/Dashboard/AllUser';
import ManageOrder from './Pages/Dashboard/ManageOrder';
import MyOrder from './Pages/Dashboard/MyOrder';
import AddReview from './Pages/Dashboard/AddReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path='/purchase' element={<Home></Home> }></Route>
          <Route path='/purchase/:_id' element={
            <RequireAuth>
              <Purchase></Purchase>
            </RequireAuth>
          }></Route>
          <Route path='/dashboard' element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
             }>
              <Route index element={<MyProfile></MyProfile>}></Route>
              <Route path='addProduct' element={<AddProduct></AddProduct>}></Route>
              <Route path='manageProduct' element={<ManageProducts></ManageProducts>}></Route>
              <Route path='allUser' element={<AllUser></AllUser>}></Route>
              <Route path='manageOrder' element={<ManageOrder></ManageOrder>}></Route>
              <Route path='myOrder' element={<MyOrder></MyOrder>}></Route>
              <Route path='addReview' element={<AddReview></AddReview>}></Route>
             </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
