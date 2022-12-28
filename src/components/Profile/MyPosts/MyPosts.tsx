import React from 'react';
import { PostDataType} from '../../../redux/store';
import s from "../Profile.module.css";
import Post from "./Post/Post";

type MyPostsType = {
    newPostText: string,
    posts: PostDataType[],
    updateNewPostText: (text: string) => void
    addPost: ()=>void
}

const MyPosts = (props: MyPostsType) => {

    const posts = props.posts.map(el => <Post message={el.message} key={el.id} likesCount={el.likesCount} id={el.id}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost()
    }

    const onPostChange=()=>{
        let text = newPostElement.current?.value
        if (text) {
            props.updateNewPostText(text)
        }

    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
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
