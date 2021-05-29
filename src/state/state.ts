export type MyPostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsDataType = {
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    message: string
}

export type ProfilePagePropsType = {
    myPosts: MyPostType[]
    newPostText: string
}

export type DialogsPropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
    newMessageText: string
}

export type RootStateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPropsType
}


type AddPostActionType = {
    type: "ADD_POST"
    postText: string
}

type UpdateNewPostTextActionType = {
    type: "UPDATE_NEW_POST_TEXT"
    updatePostMessage: string
}

type AddMessageActionType = {
    type: "ADD_MESSAGE"
    messageText: string
}

type UpdateNewMessageTextActionType = {
    type: "UPDATE_NEW_MESSAGE_TEXT"
    updateTextMessage: string
}

export type ActionsType = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewMessageTextActionType

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";


export let store: StoreType = {
    _state: {
        profilePage: {
            myPosts: [
                {id: 1, message: "Hey, how are you?", likesCount: 15},
                {id: 2, message: "It's my first post.", likesCount: 10},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Vasia"},
                {id: 2, name: "Sania"},
                {id: 3, name: "Kirill"},
                {id: 4, name: "Petia"},
            ],

            messages: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Kak sam?"},
            ],
            newMessageText: ""
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === "ADD_POST") {
            const newPost: MyPostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            };
            if (this._state.profilePage.newPostText.trim() !== "") {
                this._state.profilePage.myPosts.push(newPost);
            }
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        } else if (action.type === "UPDATE_NEW_POST_TEXT") {
            this._state.profilePage.newPostText = action.updatePostMessage;
            this._callSubscriber();
        }
        else if (action.type === "ADD_MESSAGE") {
            const newMessage: MessagesDataType = {
                id: new Date().getTime(),
                message: this._state.dialogsPage.newMessageText
            };
            if (this._state.dialogsPage.newMessageText.trim() !== "") {
                this._state.dialogsPage.messages.push(newMessage);
            }
            this._state.dialogsPage.newMessageText = "";
            this._callSubscriber();
        }
        else if (action.type === "UPDATE_NEW_MESSAGE_TEXT") {
            this._state.dialogsPage.newMessageText = action.updateTextMessage;
            this._callSubscriber();
        }
    }
}


export const AddPostAC = (postText: string): AddPostActionType => {
    return {
        type: ADD_POST,
        postText
    }
}

export const updateNewPostTextAC = (updatePostMessage: string):UpdateNewPostTextActionType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        updatePostMessage
    }
}

export const addMessageAC = (messageText: string): AddMessageActionType => {
    return {
        type: ADD_MESSAGE,
        messageText
    }
}

export const updateNewMessageTextAC = (updateTextMessage: string): UpdateNewMessageTextActionType => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        updateTextMessage
    }
}
