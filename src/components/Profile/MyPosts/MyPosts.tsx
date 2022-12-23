import React from 'react';
import { PostDataType } from '../../../redux/state';
import s from "../Profile.module.css";
import Post from "./Post/Post";

type MyPostsType = {
    posts: PostDataType[]
}

 const MyPosts = (props:MyPostsType) => {

    let posts = props.posts.map(el => <Post message={el.message} key ={el.id} likesCount={el.likesCount} id={el.id}/> )
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};
export default MyPosts
