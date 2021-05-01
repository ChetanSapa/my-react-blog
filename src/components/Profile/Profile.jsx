import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MypostsContainer";

const Profile = (props) => {

    return <div>
        <ProfileInfo/>
        <MyPostsContainer />
    </div>
}

export default Profile;