import React from 'react';
import s from './Dialogs.module.css';
import {DialogsDataType, MessageDataType} from "../../index";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


type DialogsPropsType = {
    dialogsData: DialogsDataType[],
    messagesData: MessageDataType[]
}

const Dialogs = (props: DialogsPropsType) => {

    let dialogsElements = props.dialogsData
        .map(el => <DialogItem name={el.name} id={el.id}/>)

    let messageElements = props.messagesData
        .map(el => <Message message={el.message} id={el.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;