import React, {useReducer} from 'react';
import './App.css';
import useCounter from "./hooks/useCounter";

// @ts-ignore
const countReducer = (state, action) => {
    switch (action) {
        case 'INCREMENT' : {
            return {...state , count: state.count + 1}
        }
        case "DECREMENT" : {
            return {...state , count: state.count - 1}
        }
        default :
            return state;
    }
};


function App() {
    const [state, dispatch] = React.useReducer(countReducer,{count : 0});

    const increment = () => {
        dispatch('INCREMENT')
        console.log(state)
    }
    const decrement = () => {
        dispatch('DECREMENT')
        console.log(state);
    }

    return (
        <div className="App">

            <button onClick={increment}>increament</button>
            <button onClick={decrement}>decreament</button>

        </div>
    );



}

export default App;
