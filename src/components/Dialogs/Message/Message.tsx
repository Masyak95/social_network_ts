import React from 'react';
import { MessageDataType } from '../../../redux/store';
import s from "../Dialogs.module.css";

const Message = (props: MessageDataType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
};

export default Message;
