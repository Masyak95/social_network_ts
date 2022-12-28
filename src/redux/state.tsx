import {v1} from "uuid";
import profileReducer, {addPostAC, changeNewTextAC} from "./profile_reducer";
import dialogsReducer, {newMessageBodyAC, sendMessageAC} from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";


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
    dialogsPage: DialogsPageType,
    sidebar: {}
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
        },
        sidebar:{}
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._onChange()
    }
}

export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof newMessageBodyAC>
    | ReturnType<typeof sendMessageAC>


export default store








