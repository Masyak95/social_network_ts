import React from 'react';
import MyPosts from "./MyPosts";
import store from "../../../redux/redux-store";
import {addPostAC, changeNewTextAC} from "../../../redux/profile_reducer";


type MyPostsContainerType = {
    store: typeof store
}

export const MyPostsContainer = (props: MyPostsContainerType) => {
    let state = props.store.getState()

    let addPost = () => {
        store.dispatch(addPostAC(""))
    }

    let onPostChange = (text: string) => {
        if (text) {
            store.dispatch(changeNewTextAC(text))
        }
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    );
};
