import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {

    let postElements = props.postsData.map(p => <Post message={p.message} like={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = ' ';
    }

    return (
        <div className={s.mypostsDescr}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default Myposts;