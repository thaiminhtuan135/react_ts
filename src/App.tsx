import React, {useState, useEffect, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';

// @ts-ignore
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENTED_AGE' : {
            return { ...state , age : state.age + 1}
        }
        case 'DECREMENTED_AGE' : {
            return { ...state , age : state.age - 1}
        }
        case 'CHANGE_NAME':
            return {
                ...state , name: action.nextName
            }
    }
    throw Error('Unknown action: ' + action.type);
}


function App() {
    const [state, dispatch] = useReducer(reducer, {name: 'Taylor' , age : 42});
    function handleButtonClick() {
        dispatch({ type: 'INCREMENTED_AGE' });
    }

    function handleInputChange(e : any) {
        dispatch({
            type: 'CHANGE_NAME',
            nextName: e.target.value
        });
    }

    return (
        <div className="App">
            <button onClick={() => {
                dispatch({type: 'INCREMENTED_AGE'})
            }}>
                Increment age
            </button>
            <button onClick={() => {
                dispatch({type: 'DECREMENTED_AGE'})
            }}>
                Decrement age
            </button>
            <input type="text" value={state.name} onChange={handleInputChange}/>
            <p>Hello! You are {state.age}.</p>
            <p>Hello! You are {state.name}.</p>

        </div>
    );
}

export default App;
