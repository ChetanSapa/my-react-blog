import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = () => {
    return (
        <div>
            My posts
            <div className={s.posts}>
                <Post message="Hi! How are you?" like="like 15" />
                <Post message="It's my first props" like="Like 20" />
            </div>
        </div>
    )
}

export default Myposts;