import React, {useState, useEffect, useMemo, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Asa from "./components/example";
import CustomInput from "./components/CustomInput";
import {json} from "stream/consumers";
import axios from "axios";
interface product {
    name: string;
    price : number;
}


function App() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [product, setProduct] = useState<product>();
    const [arrProduct, setArrProduct] = useState<product[]>([]);

    const nameRef = useRef<HTMLInputElement>();

    const handleSubmit = () => {

        // setProduct({name, price})

        setArrProduct((prevState : any ) => {
            return [...prevState , {name : name , price: price}]
        })
        setName('');
        setPrice('');
        // @ts-ignore
        nameRef.current.focus();
    }
    const total = useMemo(() => {
        const result =  arrProduct.reduce( (result, prod) => {
            console.log('tinh toan lai')
            return result + parseInt(String(prod.price));
            },0)
        return result;
    },[arrProduct]);
    // useMemo(() => function, input);

    // @ts-ignore
    return (
        <>
            <div className="App">
                {/*@ts-ignore*/}
                <input ref={nameRef} type="text" value={name} placeholder={"Enter name ...."} onChange={(e) => setName(e.target.value)}/>
                <br/>
                <input type="number" value={price} placeholder={"Enter price ...."} onChange={(e) => setPrice(e.target.value)}/>
                <button onClick={handleSubmit}>Add</button>
                <div>Tolal: {total}</div>
                <ul>
                    {arrProduct.map((product,index) => (
                        <li key={index}>{product.name}-{product.price}</li>
                    ))}
                </ul>

            </div>
        </>

);
}

export default App;
