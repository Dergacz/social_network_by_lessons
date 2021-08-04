import {addPostAC, MyPostType, profileReducer, ProfileType, setStatus} from "./profileReducer";


test("Add post", () => {
    const startState = {
        myPosts: [
            {id: 1, message: "Hey, how are you?", likesCount: 15},
            {id: 2, message: "It's my first post.", likesCount: 10},
        ] as MyPostType[],
        newPostText: "",
        profile: null as ProfileType | null,
        status: ""
    }

    const action = addPostAC("New post");

    const endState = profileReducer(startState, action);

    expect(endState["myPosts"].length).toBe(3);
    expect(endState["myPosts"][2].likesCount).toBe(0);
})

test("Set status", () => {
    const startState = {
        myPosts: [
            {id: 1, message: "Hey, how are you?", likesCount: 15},
            {id: 2, message: "It's my first post.", likesCount: 10},
        ] as MyPostType[],
        newPostText: "",
        profile: null as ProfileType | null,
        status: ""
    }

    const action = setStatus("New status");

    const endState = profileReducer(startState, action);

    expect(endState.status.length).toBe(10);
    expect(endState.status).toBe("New status");
})


