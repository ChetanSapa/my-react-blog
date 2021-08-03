import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus,}) => {
    if (!profile) {
        return <Preloader/>
    }

    return <div>
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
        </div>
        <div className={s.descr}>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <img src={profile.photos.large} alt=""/><br/>
            <span>Your name is? {profile.fullName}</span><br/>
            <span>Wat you looking for? {profile.lookingForAJobDescription}</span>
        </div>
    </div>
}

export default ProfileInfo;