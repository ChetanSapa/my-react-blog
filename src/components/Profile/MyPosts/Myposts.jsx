import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)

    }

    return (
        <div className={s.myPostsDesc}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} name="" id="" cols="30" rows="3"/>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                { postElements }
            </div>
        </div>
    )
}

export default MyPosts;