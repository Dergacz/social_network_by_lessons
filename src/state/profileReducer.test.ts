import {addPostAC, MyPostType, profileReducer, ProfileType, updateNewPostTextAC} from "./profileReducer";


test("add post", () => {
    const startState = {
        myPosts: [
            {id: 1, message: "Hey, how are you?", likesCount: 15},
            {id: 2, message: "It's my first post.", likesCount: 10},
        ] as MyPostType[],
        newPostText: "",
        profile: null as ProfileType | null
    }

    const action = addPostAC("New post");

    const endState = profileReducer(startState, action);

    expect(endState["myPosts"].length).toBe(3);
    expect(endState["myPosts"][2].likesCount).toBe(0);
})

test("Update new post text", () => {
    const startState = {
        myPosts: [
            {id: 1, message: "Hey, how are you?", likesCount: 15},
            {id: 2, message: "It's my first post.", likesCount: 10},
        ] as MyPostType[],
        newPostText: "",
        profile: null as ProfileType | null
    }

    const action = updateNewPostTextAC("New post text");

    const endState = profileReducer(startState, action);

    expect(endState.myPosts.length).toBe(2);
    expect(endState.newPostText).toBe("New post text");
});

