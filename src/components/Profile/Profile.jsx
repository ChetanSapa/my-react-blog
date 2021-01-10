import React from 'react';
import s from './Profile.module.css';
import Myposts from './MyPosts/Myposts'
import ProfileInfo from "./ProfileInfo/Profileinfo";

const Profile = (props) => {

    return <div>
        <ProfileInfo />
        <Myposts postsData={props.postsData.postData}/>
    </div>
}

export default Profile;