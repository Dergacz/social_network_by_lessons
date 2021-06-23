import {follow, setUsers, unfollow, UsersInitialStateType, usersReducer, UsersType} from "./usersReducer";

test("Follow", () => {

    const startState = {
   users: [{
        name: "Vasia",
        id: 1,
        photos: {
            small: "",
            large: "",
        },
        status: "norm",
        followed: false
    }] as UsersType[],
        pageSize: 1,
        totalUsersCount: 1,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [1],
    }

    const action = follow(1);

    const endState = (usersReducer(startState, action))

    expect(endState.users[0].followed).toBe(true);
});


test("Unfollow", () => {

    const startState = {
        users: [{
            name: "Vasia",
            id: 1,
            photos: {
                small: "",
                large: "",
            },
            status: "norm",
            followed: true
        }] as UsersType[],
        pageSize: 1,
        totalUsersCount: 1,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [1],
    }

    const action = unfollow(1);

    const endState = (usersReducer(startState, action))

    expect(endState.users[0].followed).toBe(false);
});

test("Set users", () => {

    const startState = {
        users: [{
            name: "Vasia",
            id: 1,
            photos: {
                small: "",
                large: "",
            },
            status: "norm",
            followed: false
        }] as UsersType[],
        pageSize: 1,
        totalUsersCount: 1,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    }

    const action = setUsers([{
        name: "Petia",
        id: 2,
        photos: {
            small: "",
            large: "",
        },
        status: "ne norm",
        followed: false
    }]);

    const endState = (usersReducer(startState, action))

    expect(endState.users[0].name).toBe("Petia");
    expect(endState.users[0].id).toBe(2);
    expect(endState.users[0].status).toBe("ne norm");
});