import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {

    let postsData = [
        {id: 1, message: "Hi! How are you?", likesCount: "like 10"},
        {id: 2, message: "It's my first post", likesCount: "like 25"},
    ];

    let postElements = postsData.map(p => <Post message={p.message} like={p.likesCount} />)

    return (
        <div className={s.mypostsDescr}>
            My posts
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default Myposts;