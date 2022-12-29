import React, {ChangeEvent, useState} from 'react';
import { PostDataType} from '../../../redux/store';
import s from "../Profile.module.css";
import Post from "./Post/Post";

type MyPostsType = {
    newPostText: string,
    posts: PostDataType[],
    updateNewPostText: (text: string) => void
    addPost: (text:string)=>void
}

const MyPosts = (props: MyPostsType) => {

    const posts = props.posts.map(el => <Post message={el.message} key={el.id} likesCount={el.likesCount} id={el.id}/>)
    const [text,setText] = useState('');

    const addPost = () => {
        props.addPost(text)
        setText('');
    }

    const onPostChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setText(e.currentTarget.value)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={text}
                              onChange={onPostChange}
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
