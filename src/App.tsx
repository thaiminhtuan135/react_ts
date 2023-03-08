import React, {useState, useEffect , useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Asa from "./components/example";
import CustomInput from "./components/CustomInput";
import {json} from "stream/consumers";
import axios from "axios";
import Content from "./js/Content";

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
    const [count, setCount] = useState(60);
    // @ts-ignore
    const timerId = useRef();
    const preCount = useRef();
    const h1Ref = useRef();

    useEffect(() => {
            // @ts-ignore
            preCount.current = count;
    }, [count]);

    useEffect(() => {
        console.log(h1Ref.current);
        // @ts-ignore
        console.log(h1Ref.current.getBoundingClientRect()); // lấy tọa độ của element
    });


    const handleStart = () => {
        // @ts-ignore
        timerId.current = setInterval(() => {
            setCount(prevState => prevState - 1 )
        },1000);
        console.log('Start -> ',timerId)
    }
    const handleStop = () => {
        clearInterval(timerId.current);
    }
    console.log(count , preCount.current)
    // @ts-ignore
    return (
        <div className="App">
            <div style={{padding : 20}}>
                 {/*@ts-ignore*/}
                <h1 ref={h1Ref}>{count}</h1>    {/* =getElementById*/}
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    );
}

export default App;
