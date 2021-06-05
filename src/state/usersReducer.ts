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
    id: number
    followed: boolean
    photo: string
    fullName: string
    status: string
    location: {
        city: string,
        country: string
    }
}


const initialState = {
    users: [
        {
            id: 1,
            followed: true,
            photo: "https://pyxis.nymag.com/v1/imgs/a33/af5/8a1621c95815265678e04e5cf92505143a-17-south-park-2204.rsocial.w1200.jpg",
            fullName: "Butters",
            location: {
                city: "Colorado",
                country: "USA"
            }
        },
        {
            id: 2,
            followed: false,
            photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH1HzhTHEF5Ii7SQngUWVqhrm37ptZPlEVbA&usqp=CAU",
            fullName: "Eric",
            location: {
                city: "Colorado",
                country: "USA"
            }
        },
    ] as UsersType[],

}

export type UsersInitialStateType = typeof initialState

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

