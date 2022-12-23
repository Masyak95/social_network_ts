import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostDataType = {
    message: string
    id: number
    likesCount:number
}

let posts: PostDataType[] = [
    {id: 1, message: 'Hi, how are you? ', likesCount: 12},
    {id: 2, message: 'It\'s my first post ', likesCount: 11},
    {id: 2, message: 'It\'s my second post ', likesCount: 2},
]

export type DialogsDataType = {
    id: number
    name: string
}

export type MessageDataType = {
    message: string
    id: number
}

let dialogsData: DialogsDataType[] = [
    {id: 1, name: 'Etienne Mandel Tristan'},
    {id: 2, name: 'John Barnes'},
    {id: 3, name: 'Jenelle Lacey Jasmyn'},
    {id: 4, name: 'Toya Avery Rahel'},
    {id: 5, name: 'Arnold Fraser'},
    {id: 6, name: 'Lillian Gilson'}
]

let messagesData: MessageDataType[] = [
    {id: 1, message: 'Keep Your Shirt On'},
    {id: 2, message: 'How is your it-study?'},
    {id: 3, message: 'Jaws of Death'},
    {id: 4, message: 'Hi!'},
    {id: 5, message: 'Yo'}
]


ReactDOM.render(
    <App posts={posts} dialogs={dialogsData} messages={messagesData}/>,
  document.getElementById('root')
);