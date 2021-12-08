import logo from './logo.svg';
import './App.css';
import { getAuth } from "firebase/auth";
import firebaseApp from "./firebaseConfig"


function App() {

  const auth = getAuth()
  
  return (
    <div>
      {
        auth.currentUser ? 
          <div>Hello</div>
          : <div>Please sign in</div>
      }
    </div>
  );
}

export default App;
