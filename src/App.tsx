import React, {useReducer} from 'react';
import './App.css';
import useCounter from "./hooks/useCounter";

interface Todo {
    id: number;
    task: string;
    complete: boolean;
}
type Action = { type: 'DO_TODO'; id: number } | { type: 'UNDO_TODO'; id: number };
const initialTodos = [
    {id: 'a', task: 'Learn React', complete: false,},
    {id: 'b', task: 'Learn Firebase', complete: false,},
];
const todoReducer = (state: Todo[], action: Action): Todo[] => {
    switch (action.type) {
        case 'DO_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: true };
                } else {
                    return todo;
                }
            });
        case 'UNDO_TODO':
            return state.map(todo => {
                if (todo.id === action.id) {
                    return { ...todo, complete: false };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

function App() {

    const [todos, dispatch] = React.useReducer<any>(todoReducer, initialTodos);
    // @ts-ignore
    const handleChange = (todo) => {
        // @ts-ignore
        dispatch({
            type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
            id: todo.id,
        });
        console.log(todos);
    };
    // console.log(todos);

    const {count, increment, decrement, reset, setCount} = useCounter(0);
    const duplicate = () => {
        setCount((x : number) => x * 2);
    }
    // @ts-ignore
    return (
        <div className="App">
            <div>{count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            <button onClick={duplicate}>duplicate</button>
            <ul>
                {/*@ts-ignore*/}
                {todos.map(todo => (
                    <li key={todo.id}>
                        <label>
                            <input
                                type="checkbox"
                                checked={todo.complete}
                                onChange={() => handleChange(todo)}
                            />
                            {todo.task}
                        </label>
                    </li>
                ))}
            </ul>

        </div>
    );



}

export default App;
