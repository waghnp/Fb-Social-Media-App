import React from 'react';
import Header from './Components/Header'
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import './App.css';
import Widget from './Components/Widget';
import Login from './Components/Login';
import {useStateValue} from './ContextAPI/StateProvider';

function App() {
 const [{user},dispatch]=useStateValue();  

  return (
    <div className="App">
         {!user?(<Login/>):(
          <>
            <Header/>
            <div className="app__body">
                <Sidebar/>
                <Feed/>
                <Widget/>
            </div>
          </>
      )}
         
    </div>
  );
}

export default App;


// apiKey: "AIzaSyA7MmhOe253uwJe5Gkx0SXi3pGaGS6srNU",
// authDomain: "fb-mern-57262.firebaseapp.com",
// databaseURL: "https://fb-mern-57262.firebaseio.com",
// projectId: "fb-mern-57262",
// storageBucket: "fb-mern-57262.appspot.com",
// messagingSenderId: "399743217200",
// appId: "1:399743217200:web:9d9ba9d10d915d132f47f5"