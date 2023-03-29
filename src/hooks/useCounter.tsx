import {Dispatch, SetStateAction, useState} from "react";


interface UseCounter{
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
    setCount: Dispatch<SetStateAction<number>>;
}

function useCounter(initialValue?: number): UseCounter {

    const [count, setCount] = useState(initialValue || 0);
    const increment = () => setCount(x => x + 1);
    const decrement = () => {
        setCount(prevState => prevState - 1);
    }
    const reset = () => {
        setCount(initialValue || 0);
    }
    return {count,increment,decrement,reset, setCount}
}

export default useCounter;
