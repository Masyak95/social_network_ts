import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostDataType} from '../../../redux/state';
import s from "../Profile.module.css";
import Post from "./Post/Post";

type MyPostsType = {
    newPostText: string,
    posts: PostDataType[],
    dispatch: (action: ActionsTypes)=>void
}

const MyPosts = (props: MyPostsType) => {

    const posts = props.posts.map(el => <Post message={el.message} key={el.id} likesCount={el.likesCount} id={el.id}/>)

    const addPost = () => {
        // props.addPost(props.newPostText)
        props.dispatch({ type: "ADD-POST", postMessage: props.newPostText})
    }

    // const newTextChangeHandler = () => {
    //     props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: props.newPostText })
    // }

    const updateNewPostTextAC=(event:ChangeEvent<HTMLTextAreaElement>)=>{
        const text=event.currentTarget.value
        return{
            type:'UPDATE-NEW-POST-TEXT',
            newText: text
        } as const
    }

    const onChangeHandler=(newText:ChangeEvent<HTMLTextAreaElement>)=>{
        props.dispatch(updateNewPostTextAC(newText))
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={onChangeHandler}
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
