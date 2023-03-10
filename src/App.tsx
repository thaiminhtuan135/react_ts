import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Asa from "./components/example";
import CustomInput from "./components/CustomInput";
import {json} from "stream/consumers";
import axios from "axios";
// import Content from "./js/Content";
// @ts-ignore
import Content from "./Content";
interface fullName {
    firstName: string;
    lastName: string;
    title: string;
    arr: string[];
    paragraph?: string;
    arrObj: { value: string; label: string; }[];
    status: "waiting" | "success";
    // onClick : () => void
}

function App() {
    const [count, setCount] = useState(0);
    const increase = () => {
        setCount(count + 1);
    }
    const handleIncrease = () => {
        setCount(prevState => prevState + 1);
    }
    return (
        <div className="App">
            {/* khi count thay đổi thì Conent sẽ re-render lại  */}
            <Content onIncrease={handleIncrease}/>
            <h1>{count}</h1>
            <button onClick={increase}>click me</button>
        </div>
    );
}

export default App;
