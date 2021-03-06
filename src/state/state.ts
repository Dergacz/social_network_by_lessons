import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

// type MyPostType = {
//     id: number
//     message: string
//     likesCount: number
// }
//
// type DialogsDataType = {
//     id: number
//     name: string
// }
//
// type MessagesDataType = {
//     id: number
//     message: string
// }
//
// type ProfilePagePropsType = {
//     myPosts: MyPostType[]
//     newPostText: string
// }
//
// type DialogsPropsType = {
//     dialogs: DialogsDataType[]
//     messages: MessagesDataType[]
//     newMessageText: string
// }
//
// type RootStateType = {
//     profilePage: ProfilePagePropsType
//     dialogsPage: DialogsPropsType
// }
//
//
// type AddPostActionType = {
//     type: "ADD_POST"
//     postText: string
// }
//
// type UpdateNewPostTextActionType = {
//     type: "UPDATE_NEW_POST_TEXT"
//     updatePostMessage: string
// }
//
// type AddMessageActionType = {
//     type: "ADD_MESSAGE"
//     messageText: string
// }
//
// type UpdateNewMessageTextActionType = {
//     type: "UPDATE_NEW_MESSAGE_TEXT"
//     updateTextMessage: string
// }
//
// type ActionsType = AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewMessageTextActionType
//
// type StoreType = {
//     _state: RootStateType
//     getState: () => RootStateType
//     _callSubscriber: () => void
//     subscribe: (observer: () => void) => void
//     dispatch: (action: ActionsType) => void
// }

// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             myPosts: [
//                 {id: 1, message: "Hey, how are you?", likesCount: 15},
//                 {id: 2, message: "It's my first post.", likesCount: 10},
//             ],
//             newPostText: ""
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Vasia"},
//                 {id: 2, name: "Sania"},
//                 {id: 3, name: "Kirill"},
//                 {id: 4, name: "Petia"},
//             ],
//
//             messages: [
//                 {id: 1, message: "Hi!"},
//                 {id: 2, message: "How are you?"},
//                 {id: 3, message: "Kak sam?"},
//             ],
//             newMessageText: ""
//         }
//     },
//     getState() {
//         return this._state
//     },
//     _callSubscriber() {
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._callSubscriber();
//
//     }
// }



