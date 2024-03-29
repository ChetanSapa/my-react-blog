import React, {ChangeEvent, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import {ContactsType, ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: ProfileType) => {
        // todo: remove then
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }
    let userPhoto = 'https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'
    return <div>
        <div>
            <img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                alt={'Some img'}
            />
        </div>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto} alt=""/><br/>
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} style={{paddingBottom: '20px'}}/>}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

        {editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
            : <ProfileData goToEditMode={() => {
                setEditMode(true)
            }} profile={profile} isOwner={isOwner}/>}
    </div>
}

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

const ProfileData: React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return <div className={s.descr}>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <span><b>Full name</b>: {profile.fullName}</span>
        <div>
            <b>Looking for job</b> : {profile.lookingForAJob ? 'yes' : 'no'}
        </div>
        {profile.lookingForAJob &&
        <div>
            <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
        }
        <div>
            <b>About me</b> : {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b> : {
            Object
                .keys(profile.contacts)
                .map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key as keyof ContactsType]}/>
        })}
        </div>
    </div>
}

type ContactsPropsType = {
    contactTitle: string
    contactValue: string
}

const Contact: React.FC<ContactsPropsType> = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo;