import React from 'react';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MypostsContainer";

const Profile = (props) => {

    return <div>
        <ProfileInfo saveProfile={props.saveProfile}
                     savePhoto={props.savePhoto}
                     isOwner={props.isOwner}
                     profile={props.profile}
                     status={props.status}
                     updateStatus={props.updateStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;