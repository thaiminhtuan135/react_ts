import React from "react";

interface States {
    name: string,
    age: number,
    submit: React.MouseEventHandler<HTMLButtonElement>,
    // sum: (a: number, b: number) => number,
    // submit(id? : number) : any,
    // test(id? : number): any,
}
interface ButtonProps {
    sum: (a: number, b: number) => number;
    address: string,
}

function Container({sum , address} : ButtonProps) {

    console.log(sum(5, 5));
    return <div>Hello world {address} </div>
}
const Asa: React.FC<States> = (props) =>  {
    // const [user, setUser] = useState<States>({name: 'Van', age: 23});
    const test = props.name;
    const sum = (a : number , b : number) => {
        return a + b;
    }
    console.log(test);
    const address = 'bac ninh';

    const check = () => {
        console.log('hello');
    }
    return (
        <div className="App">
            <header className="">
                <h2>Hello {props.name}!</h2>
                <button onClick={props.submit}>dd </button>
                {/*<Container sum={sum} address={address}/>*/}
            </header>
        </div>
    );
};
export default Asa;
