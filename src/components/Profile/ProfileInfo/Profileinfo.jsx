import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = (props) => {

    if(!props.profile){
        return <Preloader />
    }

    return <div>
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
        </div>
        <div className={s.descr}>
            <img src={props.profile.photos.large} alt=""/><br/>
            <span>Your name is? {props.profile.fullName}</span><br/>
            <span>Wat you looking for? {props.profile.lookingForAJobDescription}</span>
        </div>
    </div>
}

export default ProfileInfo;