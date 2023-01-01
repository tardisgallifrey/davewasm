import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState,useEffect} from 'react'; //You use these to run Rust func
import init, { add } from "davelib";  //This imports Rust func and needed func
import './index.css';

const App = () => {

  //Create state variable for Rust function return
  const [ans, setAns] = useState(0);

      //Use useEffect to call init, return promise and call the function
      useEffect(() => {
        //Call WASM init func, it returns a promise
        init().then(() => {
          setAns(add(1, 1));
        })
        
      }, []);

  return(
    <div>
      <h1>The Dave Basic Tutorial of Rust/Wasm</h1>
      <p> 1 + 1 = {ans} </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

