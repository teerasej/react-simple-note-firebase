import logo from './logo.svg';
import './App.css';
import { getAuth } from "firebase/auth";
import firebaseApp from "./firebaseConfig"
import SignInView from './components/SignInView';
import { useSelector } from 'react-redux';


function App() {

  const userSignedIn = useSelector(state => state.userSignedIn)
  const auth = getAuth()
  
  return (
    <div>
      {
        auth.currentUser && userSignedIn ? 
          <div>Hello</div>
          : <SignInView/>
      }
    </div>
  );
}

export default App;
