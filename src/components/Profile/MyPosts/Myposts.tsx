import React from 'react';
import s from './Myposts.module.css';
import Post from "./Post/Post";
import AddPostForm, {AddPostValuesType} from './AddPostForm/AddPostForm';
import {PostType} from "../../../types/types";

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostBody: string) => void
}

const MyPosts : React.FC<MapPropsType & DispatchPropsType> = (props => {
    console.log('Render')
    let postElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values: AddPostValuesType) => {
        props.addPost(values.newPostBody)
    }

    return (
        <div className={s.myPostsDesc}>
            <h3>My posts</h3>
            <AddPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
});

const MyPostMemo = React.memo(MyPosts)

export default MyPostMemo;
//create Form with redux-form

// const maxLength10 = maxLengthCreator(10)
//
// type PropsType = {}
// type AddPostValuesType = {
//     newPostBody: string
// }
// const AddNewPostForm= (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field
//                     component={Textarea}
//                     name='newPostBody'
//                     placeholder='Enter your message'
//                     validate={[required, maxLength10]}/>
//             </div>
//             <div>
//                 <button>Send message</button>
//             </div>
//         </form>
//     )
// }
//
// const AddPostFormRedux = reduxForm({form: 'AddMessageForm'})(AddNewPostForm)

