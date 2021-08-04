import {appReducer, initializedSuccess} from "./appReducer";


test("Test initialized", () => {
    const startState = {
        initialized: false
    }

    const action = initializedSuccess();

    const endState = appReducer(startState, action);

    expect(endState.initialized).toBe(true);
});
