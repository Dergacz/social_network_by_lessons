const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

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

type SetCurrentPageActionType = {
    type: "SET_CURRENT_PAGE"
    currentPage: number
}

type SetTotalUsersCountActionType = {
    type: "SET_TOTAL_USERS_COUNT"
    totalCount: number
}

type ToggleIsFetchingActionType = {
    type: "TOGGLE_IS_FETCHING"
    isFetching: boolean
}

type ActionsType = FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType

export type UsersType = {
    name: string
    id: number
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}


export type UsersInitialStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
                users: action.users
            }
        }
        case (SET_CURRENT_PAGE): {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case (SET_TOTAL_USERS_COUNT): {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case (TOGGLE_IS_FETCHING): {
            return {
                ...state,
                isFetching: action.isFetching
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

export const setCurrentPageAC = (currentPage: number): SetCurrentPageActionType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

export const setTotalUsersCountAC = (totalCount: number): SetTotalUsersCountActionType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalCount
    }
}

export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetchingActionType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}

