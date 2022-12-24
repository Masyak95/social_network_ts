import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {changeNewText, ProfilePageType} from "../../redux/state";

type ProfileType = {
   profilePage: ProfilePageType
    addPost: (postMessage: string)=> void
}

const Profile = (props: ProfileType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 addPost={props.addPost}
                 changeNewText={changeNewText}
        />
    </div>
}

export default Profile;