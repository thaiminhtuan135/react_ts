import React, {useState, useEffect} from 'react';
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

interface postItem {
    title: string;
    image: string;
    description: string;
    call: () => void;

}

interface button {
    title: string,
    href? : string,
    onClick? : () => void

}

interface input {
    label: string;
    type: string;
    placeholder: string;
    // arr : {type : string , placeholder: string}
}
function Header(props: fullName) {
    return (
        <div className="header">
            new header
            <div>{props.firstName}</div>
            <div>{props.lastName}</div>
            <div>{props.title}</div>
            <div>{props.arr.map((item, index) =>
                <p key={index}>{item}</p>
            )}</div>
            <div>{props.arrObj.map((item, index) =>
                <p key={index}>
                    {item.value} - {item.label}
                </p>
            )}</div>
            <div>{props.status}</div>
            <div></div>
        </div>
    )
}

// class Content extends React.Component<any, any> {
//     render() {
//         return (
//             <div className="content">
//                 Contant
//             </div>
//         )
//     }
// }

function PostItem(props: postItem) {
    // props.call(Math.random());

    return (
        <div className="post-item">

            <img src={props.image} alt=""/>
            <h2 className="post-title" onClick={props.call}>{props.title}</h2>
            <p className="post-desc">{props.description}</p>
            <p className="post-public">Mat ngay truoc 5 phut b oi</p>
        </div>
    )
}

function Button(props:button) {
    return(
        <div>
            <button onClick={props.onClick}>
                <a href={props.href} className="none-decorate-text">props.title</a>
            </button>
        </div>
    );
}


function App() {
    const name = 'tuan';
    const age = 12;
    const submit = () => {
        // console.log('tuan')
    }
    const test   = (id = 1) => {
        console.log(id);
    }
    const recourse = [
        {
            value: "html,css", label: "asdsd",
        },
        {
            value: "responsive", label: "dasd",
        },
        {
            value: "Reactjs", label: "adsda"
        }
    ];
    const arr = ["dasd", 'tuan', 'dsad', 'dasd', 'asdas'];
    const status = "waiting";
    const obj = {value: "deptrai", label: "ds"};
    const [old, setOld] = useState(0);
    const [todos, setTodos] = useState([{text: 'Learn Hooks'}]);

    // useEffect(() => {
    //     return () => {
    //         document.title = `You click ${old} time`;
    //     };
    // }, [old]);
    // useEffect(() => {
    //     document.title = `(${old}) lần click`
    // })
    const handle = () => {
        setOld(old + 1);
        document.title = `You click ${old + 1} time`;
    }
    const course = [
        {
            "id": 2,
            "title": "khoa hoc reacjs",
            "description": "khoa nay ho tro cho cac ban tts",
            "content": "hoc trong vong 6 yhang",
        },
        {
            "id": 3,
            "title": "khoa hoc vuejs",
            "description": "khoa nay ho tro cho cac ban tts",
            "content": "hoc trong vong 6 yhang",
        },
        {
            "id" : 4,
            "title": "khoa hoc angularjs",
            "description": "khoa nay ho tro cho cac ban tts",
            "content": "hoc trong vong 6 yhang",
        }

    ];

    const handleClick = (x : {title:string}) => console.log(x.title)
    const Form = {
        Input(props:input){  // ...inputProps
            return (
                <div>
                    <label htmlFor="">{props.label}</label>
                    <input type={props.type} placeholder={props.placeholder}/>
                    {/*<input {...inputProps}/>*/}

                </div>
            )
        },
        CheckBox() {
            return <input type="checkbox"/>
        },
    }

    // const type = 'CheckBox';
    const Component = Form['CheckBox'];
    const Input = Form['Input'];
    const orders = [100, 200, 300];
    const total = orders.reduce((total, cur) => total + cur);
    const [count, setCount] = useState(() => total);
    const handldeIncrease = () => {
        setCount(count => count+1);
        setCount(count => count+1);
        setCount(count => count+1);
    }

    const courses = [
        {
            id: 1,
            name : "HTML ,CSS"
        },
        {
            id: 2,
            name : "reactjs"
        },
        {
            id: 3,
            name : "javascript"
        },
    ];
    const handleSubmit = () => {

    }

    const [checked, setChecked] = useState([]);
    const handleCheck = (id : number) => {


        // @ts-ignore
        setChecked(prevState => {
            // @ts-ignore
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter(item => item != id);
            }else {
                return [...prevState, id];
            }

        });
    }


    // console.log(storageJobs)
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        // @ts-ignore
        const storageJobs = JSON.parse(localStorage.getItem('jobs'));
        return storageJobs ?? [];
    });
    const handleSubmitTodoList = () => {
        if (job != '') {
            // @ts-ignore
            setJobs(prevState => {
                const newJobs = [...prevState, job];
                const jsonJob = JSON.stringify(newJobs);
                localStorage.setItem('jobs',jsonJob);
                return newJobs;
            });
            setJob('');
        }
        else {
            alert('nhập việc làm')
        }
    }

    // const [title, setTitle] = useState('');
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     return () => {
    //         axios
    //             .get('https://jsonplaceholder.typicode.com/posts')
    //             .then((res) => {
    //                 // console.log(res)
    //                 setPosts(res.data);
    //             }).catch(() => {
    //         });
    //     };
    // },[]);
    const [showComponent, setShowComponent] = useState(false);
    // @ts-ignore
    return (
        <div className="App">
            <Asa name={name} age={age} submit={submit}/>
            {/*<Header title={"tuandeptraiu"} firstName={"firstName"} lastName={"lastName"} arr={arr} arrObj={recourse}*/}
            {/*        status={status}*/}
            {/*/>*/}
            <div>you press button for the {old} time</div>
            <button onClick={() => setOld(old + 1)}>Press button</button>
            {/* Todo Post Item*/}
                {/*    <div>*/}
                {/*        {*/}
                {/*            course.map(course => (*/}
                {/*                <PostItem key={course.id} title={course.title} image={course.content}*/}
                {/*                          description={course.description}*/}
                {/*                          call={() => handleClick(course)}/>*/}
                {/*            ))*/}
                {/*        }*/}
                {/*    </div>*/}
            {/*Todo Post Item*/}
            <Component/>
            <Button title={"Click me"} onClick={() => console.log(Math.random())} href={"https://coccoc.com/search?query=typescript+href+in+button"}/>
            {/*<Input label={"Name"} type={"type"} placeholder={"Enter Name..."} />*/}
            <CustomInput onFocusCapture={() => console.log(Math.random())} type={"text"} placeholder={"Enter name..."} label={"Name"}/>

            {courses.map((a) => (
                <div key={a.id}>
                    <input
                        type="checkbox"
                        // @ts-ignore
                        checked={checked.includes(a.id)}
                        onChange={() =>  handleCheck(a.id)}
                    />
                    {a.name}
                </div>
            ))}

             {/*Todo List*/}
                <input type="text" value={job} onChange={(e) => setJob(e.target.value)}/>
                <button onClick={handleSubmitTodoList}>Submit</button>
                <ul>
                    {/*// @ts-ignore*/}
                    {jobs.map((job,index) => (
                        <li key={index}>
                            {job}
                        </li>
                    ))}
                </ul>
            {/*Todo List*/}

            <button onClick={() => setShowComponent(!showComponent)}>toggle</button>
            <div>{ showComponent && <Content /> }</div>
        </div>
    );
}

export default App;
