import React, {ChangeEvent} from 'react';
import {PostDataType} from '../../../redux/state';
import s from "../Profile.module.css";
import Post from "./Post/Post";

type MyPostsType = {
    newPostText: string,
    posts: PostDataType[],
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let posts = props.posts.map(el => <Post message={el.message} key={el.id} likesCount={el.likesCount} id={el.id}/>)

    // let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        props.addPost(props.newPostText)
    }

    const newTextChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={newTextChangeHandler}
                    />
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
