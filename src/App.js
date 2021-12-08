import logo from './logo.svg';
import './App.css';
import { getAuth } from "firebase/auth";
import firebaseApp from "./firebaseConfig"
import SignInView from './components/SignInView';


function App() {

  const auth = getAuth()
  
  return (
    <div>
      {
        auth.currentUser ? 
          <div>Hello</div>
          : <SignInView/>
      }
    </div>
  );
}

export default App;
