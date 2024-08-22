import { useEffect, useState } from "react";

function Posts(){

    let [posts,setPosts]=useState([]);

    useEffect(()=>{
        console.log("hello");
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json()).then((data)=>{
            setPosts(data);
            console.log(data);
        }).catch((err)=>{
            console.log(err);
        })
    })

    return (
        <div className="products">
            {
                posts.map((post)=>{
                    return (<div className="product">
                        <h3>{post.title}</h3>
                        <h5>{post.body}</h5>
                    </div>)
                })
            }
        </div>
    )
}
export default Posts;