import Dialogs from "./Dialogs";
import store from "../../redux/redux-store";
import {newMessageBodyAC, sendMessageAC} from "../../redux/dialogs_reducer";

type DialogsContainerType = {
    store: typeof store
}


export const DialogsContainer = (props: DialogsContainerType) => {

    let state = props.store.getState().dialogPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body: string) => {
        props.store.dispatch(newMessageBodyAC(body))
    }


    return (
        <Dialogs dialogPage={state}
                 upDateNewMessagesBody={onNewMessageChange}
                 sendMessage={onSendMessageClick}

        />
    );
};