
import './App.css';
import React from 'react';
import './index.css';
import { useRoutes } from 'react-router-dom';
import FullNav from './FinalTask/Components/FullNav';
import About from './FinalTask/Components/About';
import Contact from './FinalTask/Components/Contact'
import UserProfile from './FinalTask/UserProfile/UserProfile';
import UserDetails from './FinalTask/Components/UserDetails'
import ShowData from './FinalTask/CRUD/ShowData'
import InsertData from './FinalTask/CRUD/InsertData'
import UpdateData from './FinalTask/CRUD/UpdateData'
import DeleteData from './FinalTask/CRUD/DeleteData'
import EditInsert from './FinalTask/CRUD/EditInsert'
import RotateBubble from './FinalTask/MovingObjects/RotateBubble'
import CurveAnimation from './FinalTask/MovingObjects/CurveAnimation'
import Products from './FinalTask/Products/Products'
import Discount from './FinalTask/Products/Discount'
import SignUp from './FinalTask/SignUpAndSignIn/SignUp'
import SignIn from './FinalTask/SignUpAndSignIn/SignIn'
import EditUser from './FinalTask/SignUpAndSignIn/EditUser'
import View from './FinalTask/CRUD/View';


function App() {

  let route = useRoutes([
    { path : '/', element : <SignUp/>},
    { path : '/edit-user/:id', element : <EditUser/>},
    { path : '/full-nav', element : <FullNav/>,
  children :[
    { path : 'about', element : <About/>},
    { path : 'contact', element : <Contact/>},
    {path : "user-profile", element : <UserProfile/>},
    { path : 'user-details', element : <UserDetails/>},
     { path : 'show-data', element : <ShowData/>},
    { path : 'insert', element : <InsertData/>},
    { path : 'update-data', element : <UpdateData/>},
    { path : 'delete-data', element : <DeleteData/>},
    { path : 'rotate-bubble', element : <RotateBubble/>},
    { path : 'curve-motion', element : <CurveAnimation/>},
    { path : 'products', element : <Products/>},
    { path : 'discount', element : <Discount/>},
    { path : 'view/:id', element : <View/>},
  ]
  },
    
    {path : "sign-up", element : <SignUp/>},
    {path : "sign-in", element : <SignIn/>},
    {path : "/edit-insert/:id", element : <EditInsert/>},
]);

  return (
  <>  
    { route }  
  </>
   
  );
}

export default App;

