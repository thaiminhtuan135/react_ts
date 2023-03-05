import React, {useEffect, useState} from "react";
import axios from "axios";

const tabs = ['posts','comments','albums']

function Content(){
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [type, setType] = useState('posts');
    const [showGoToTop, setShowGoToTop] = useState(false);
    // console.log(type)
    // useEffect(() => {
    //     return () => {
    //         axios
    //             .get('https://jsonplaceholder.typicode.com/posts')
    //             .then((res) => {
    //                 // console.log(res)
    //                 setPosts(res.data);
    //                 // console.log(posts)
    //             }).catch(() => {
    //         });
    //     };
    // }, []);
    useEffect(() => {
        return () => {
            axios
                .get(`https://jsonplaceholder.typicode.com/${type}`)
                .then((res) => {
                    // console.log(res)
                    setPosts(res.data);
                    // console.log(posts)
                }).catch(() => {
            });
            console.log('heyheyheye')
        };
    }, [type]);

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            // if (window.scrollY > 1000) {
            //     //show
            //     setShowGoToTop(true);
            // } else {
            //     // hide
            //     setShowGoToTop(false);
            // }

            setShowGoToTop(window.scrollY >= 1000)


        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return(
        <div>
            <div>
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setType(tab)}
                        style={type === tab ? { color : '#fff',backgroundColor : '#333'} : {}}
                    >{tab}</button>

                ))}
            </div>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <ul>
                {posts.map((post => (
                    // @ts-ignore
                    <li key={post.id}>{post.id}</li>
                )))}
            </ul>
            <div>tuadsdsdssssdsssdsddsdssdsdsdsdsdsdsdsssddsdsddssddsdsssdd sn</div>
            {showGoToTop && (
                <button style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20,
                }}>
                       go to top
            </button>
            )}
        </div>
    )
}

export default Content
