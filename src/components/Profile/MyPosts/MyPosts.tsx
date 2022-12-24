import React from 'react';
import { PostDataType } from '../../../redux/state';
import s from "../Profile.module.css";
import Post from "./Post/Post";

type MyPostsType = {
    posts: PostDataType[],
    addPost: (postMessage: string)=> void
}

 const MyPosts = (props:MyPostsType) => {

    let posts = props.posts.map(el => <Post message={el.message} key={el.id} likesCount={el.likesCount} id={el.id}/> )

     let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        // props.addPostCallback(newPostElement.current?.value) - null | undefined
        if(newPostElement.current){
            props.addPost(newPostElement.current.value)
        }
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {posts}
            </div>
        </div>
    );
};
export default MyPosts
