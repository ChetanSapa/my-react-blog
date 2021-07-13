import profileReducer, {addPostActionCreator, deletePostActionCreator} from "./profileReducer";




it('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator('Hey')
    let initialState = {
        posts: [
            {id: 1, message: "Hi! How are you?", likesCount: "like 10"},
            {id: 2, message: "It's my first post", likesCount: "like 25"},
        ],
    }
    // 2. action
let newState = profileReducer(initialState, action)

    // 3. expectation
    expect(newState.posts.length).toBe(3)
})

it('message of next post should be added', () => {
    // 1. test data
    let action = addPostActionCreator('Hey')
    let initialState = {
        posts: [
            {id: 1, message: "Hi! How are you?", likesCount: "like 10"},
            {id: 2, message: "It's my first post", likesCount: "like 25"},
        ],
    }
    // 2. action
let newState = profileReducer(initialState, action)

    // 3. expectation
    expect(newState.posts[2].message).toBe('Hey')
})
it('after deleting length of post array should be decrement', () => {
    // 1. test data
    let action = deletePostActionCreator(1)
    let initialState = {
        posts: [
            {id: 1, message: "Hi! How are you?", likesCount: "like 10"},
            {id: 2, message: "It's my first post", likesCount: "like 25"},
        ],
    }
    // 2. action
let newState = profileReducer(initialState, action)

    // 3. expectation
    expect(newState.posts.length).toBe(1)
})