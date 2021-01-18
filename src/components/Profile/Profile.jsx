import React from 'react';
import s from './Profile.module.css';
import Myposts from './MyPosts/Myposts'
import ProfileInfo from "./ProfileInfo/Profileinfo";

const Profile = (props) => {

    return <div>
        <ProfileInfo />
        <Myposts profilePage={props.profilePage.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profile;