import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {

    let postElements = props.postsData.map(p => <Post message={p.message} like={p.likesCount} />)

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