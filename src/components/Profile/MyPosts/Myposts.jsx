import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validation/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const MyPosts = React.memo(props => {
    console.log('Render')
    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.myPostsDesc}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
});

//create Form with redux-form

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    name='newPostBody'
                    placeholder='Enter your message'
                    validate={[required, maxLength10]}/>
            </div>
            <div><button>Send message</button></div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'AddMessageForm'})(AddPostForm)

export default MyPosts;