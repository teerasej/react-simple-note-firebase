import logo from './logo.svg';
import './App.css';
import { getAuth } from "firebase/auth";
import firebaseApp from "./firebaseConfig"
import SignInView from './components/SignInView';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import SignOutButton from './components/SignOutButton';


function App() {


  const userSignedIn = useSelector(state => state.userSignedIn)
  const [userFromAuth, setUserFromAuth] = useState(null)
  
  getAuth().onAuthStateChanged(user => {
    console.log('user from auth')
    setUserFromAuth(user)
  })

  return (
    <div>
      {
        userFromAuth ? 
          <div>
            <div>Hello, {userFromAuth.email}</div>
            <SignOutButton/>
          </div>
          : <SignInView/>
      }
    </div>
  );
  
  
}

export default App;
