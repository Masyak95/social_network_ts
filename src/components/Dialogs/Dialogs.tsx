import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ActionsTypes, DialogsPageType, newMessageBodyAC, sendMessageAC} from "../../redux/state";


type DialogsPropsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.state.dialogsData
        .map(el => <DialogItem name={el.name} id={el.id}/>)

    let messageElements = props.state.messagesData
        .map(el => <Message message={el.message} id={el.id}/>)

    let newMessageBody = props.state.newMessageBody


    let onSendMessageClick = ()=>{
        props.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.dispatch(newMessageBodyAC(body))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
               <div>{messageElements}</div>
                <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder={"Enter your message"} ></textarea></div>
                <div><button onClick={onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )
}

export default Dialogs;