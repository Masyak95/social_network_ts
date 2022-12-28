import React from "react";
import s from "../Post/Post.module.css"
import {PostDataType} from "../../../../redux/store";


const Post = (props: PostDataType) => {
    return (
        <div className={s.item}>
            <img src='https://www.play.cz/wp-content/uploads/2019/04/Ava-Max.jpg' alt={"ava"}/>
            {props.message}
            {props.likesCount}
        </div>
    )
}

export default Post;

