import {v1} from "uuid";


export type PostDataType = {
    message: string
    id: string
    likesCount: number
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
    messagesData: MessageDataType[],
    newMessageBody: string
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export type StoreType = {
    _state: StateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}


let store: StoreType = {
    _state: {
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
            ],
            newMessageBody: ""
        }
    },
    _onChange() {
        console.log("state changed")
    },
    subscribe(observer) {
        this._onChange = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: PostDataType = {
                id: v1(),
                message: action.postMessage,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._onChange()
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._onChange()
        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogsPage.newMessageBody = action.newMessageBody
            this._onChange()
        } else if (action.type === "SEND-MESSAGE") {
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ""
            this._state.dialogsPage.messagesData.push({id: v1(), message: body})
            this._onChange()
        }
    }
}


export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postMessage: postText
    } as const
}

export const changeNewTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export const newMessageBodyAC = (newMessageBody: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        newMessageBody: newMessageBody
    } as const
}

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}
export default store








