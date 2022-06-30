import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import TEST from './components/TEST';

import { useState, useEffect } from 'react';
import {auth} from './services/firebase';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    })

    //old
    // firebase.auth().onAuthStateChanged(user => {
    //   setUser(user);
    // })
  }, [])

  console.log(user);


  return (
 <div>
  {user ? <TEST user={user} /> : <Login />}
{/* <Header />
<Home /> */}
    </div>
  );
}

export default App;
