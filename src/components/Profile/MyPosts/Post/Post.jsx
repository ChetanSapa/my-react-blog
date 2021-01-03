import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg' alt=""/>
            <div>{props.message}</div>
            <span>{props.like}</span>
        </div>
    )
}

export default Post;