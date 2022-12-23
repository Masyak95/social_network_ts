

export type PostDataType = {
    message: string
    id: number
    likesCount:number
}

export type DialogsDataType = {
    id: number
    name: string
}

export type MessageDataType = {
    message: string
    id: number
}

export type ProfilePageType = {
    posts: PostDataType[]
}

export type DialogsPageType = {
    dialogsData: DialogsDataType[],
    messagesData: MessageDataType[]
}

export type StateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 2, message: 'It\'s my second post', likesCount: 2},
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Etienne Mandel Tristan'},
            {id: 2, name: 'John Barnes'},
            {id: 3, name: 'Jenelle Lacey Jasmyn'},
            {id: 4, name: 'Toya Avery Rahel'},
            {id: 5, name: 'Arnold Fraser'},
            {id: 6, name: 'Lillian Gilson'}
        ],
        messagesData: [
            {id: 1, message: 'Keep Your Shirt On'},
            {id: 2, message: 'How is your it-study?'},
            {id: 3, message: 'Jaws of Death'},
            {id: 4, message: 'Hi!'},
            {id: 5, message: 'Yo'}
        ]
    }
}
