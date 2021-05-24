export type MyPostType = {
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
}

export type DialogsPropsType = {
    dialogs: DialogsDataType[]
    messages: MessagesDataType[]
}

export type RootStateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPropsType
}


export let state: RootStateType = {
    profilePage: {
        myPosts: [
            {message: "Hey, how are you?", likesCount: 15},
            {message: "It's my first post.", likesCount: 10},
        ]
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
    }
}