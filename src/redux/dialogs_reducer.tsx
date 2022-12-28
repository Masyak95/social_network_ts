import React from 'react';
import {v1} from "uuid";
import {ActionsTypes, DialogsPageType} from "./store";


let initialState = {
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

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.newMessageBody
            return state
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ""
            state.messagesData.push({id: v1(), message: body})
            return state
        default:
            return state
    }
};

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

export default dialogsReducer;