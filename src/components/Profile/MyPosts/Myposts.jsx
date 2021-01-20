import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";

const Myposts = (props) => {

    let postElements = props.profilePage.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type:'UPDATE-NEW-POST-TEXT', newText: text});
    }

    return (
        <div className={s.myPostsDesc}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} name="" id="" cols="30" rows="10"/>
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