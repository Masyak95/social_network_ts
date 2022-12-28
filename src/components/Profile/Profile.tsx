import React from 'react';
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import store from "../../redux/redux-store";

type ProfileType = {
    store: typeof store
}

const Profile = (props: ProfileType) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <MyPostsContainer store={store}
        />
    </div>
}

export default Profile;