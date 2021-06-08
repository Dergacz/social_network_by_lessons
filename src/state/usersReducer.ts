const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

type FollowActionType = {
    type: "FOLLOW"
    userId: number
}

type UnfollowActionType = {
    type: "UNFOLLOW"
    userId: number
}

type SetUsersActionType = {
    type: "SET_USERS"
    users: UsersType[]
}

type ActionsType = FollowActionType | UnfollowActionType | SetUsersActionType;

export type UsersType = {
    name: string
    id: number
    photos:{
       small: string
       large: string
    }
    status: string
    followed: boolean
}


export type UsersInitialStateType = {
    users: UsersType[]
}

const initialState: UsersInitialStateType = {
    users: []
}

export const usersReducer = (state: UsersInitialStateType = initialState, action: ActionsType): UsersInitialStateType => {
    switch (action.type) {
        case (FOLLOW): {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case (UNFOLLOW): {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        }
        case (SET_USERS): {
            return {
             ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId: number): FollowActionType => {
    return {
        type: FOLLOW,
        userId
    }
}

export const unfollowAC = (userId: number): UnfollowActionType => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users: UsersType[]): SetUsersActionType => {
    return {
        type: SET_USERS,
        users
    }
}

