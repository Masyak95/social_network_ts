import React from 'react';
import s from "../Dialogs.module.css";
import {MessageDataType} from "../../../index";


const Message = (props: MessageDataType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    );
};

export default Message;
