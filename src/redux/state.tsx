import {v1} from "uuid";
// import {onChange} from "../render";


export type PostDataType = {
    message: string
    id: string
    likesCount:number
}

export type DialogsDataType = {
    id: string
    name: string
}

export type MessageDataType = {
    message: string
    id: string
}

export type ProfilePageType = {
    posts: PostDataType[],
    newPostText: string
}

export type DialogsPageType = {
    dialogsData: DialogsDataType[],
    messagesData: MessageDataType[]
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

let onChange = () => {
    console.log("rendering")
}

export const state: StateType = {
    profilePage: {
        newPostText: "",
        posts: [
            {id: v1(), message: 'Hi, how are you?', likesCount: 12},
            {id: v1(), message: 'It\'s my first post', likesCount: 11},
            {id: v1(), message: 'It\'s my second post', likesCount: 2},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: v1(), name: 'Etienne Mandel Tristan'},
            {id: v1(), name: 'John Barnes'},
            {id: v1(), name: 'Jenelle Lacey Jasmyn'},
            {id: v1(), name: 'Toya Avery Rahel'},
            {id: v1(), name: 'Arnold Fraser'},
            {id: v1(), name: 'Lillian Gibson'}
        ],
        messagesData: [
            {id: v1(), message: 'Keep Your Shirt On'},
            {id: v1(), message: 'How is your it-study?'},
            {id: v1(), message: 'Jaws of Death'},
            {id: v1(), message: 'Hi!'},
            {id: v1(), message: 'Yo'}
        ]
    }
}

export const addPost = (postMessage: string) => {
    const newPost: PostDataType = {
        id:v1(),
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    onChange()
}

export const changeNewText = (newText: string)=> {
    state.profilePage.newPostText=newText
    onChange()
}

export const subscribe = (observer:()=>void) => {
    onChange=observer
}