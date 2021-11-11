import usersReducer, {actions, InitialStateType} from "./usersReducer";

let initialState: InitialStateType

beforeEach(() => {
    initialState = {
        users: [
            {
                name: "Schubert",
                id: 0,
                photos: {
                    small: null,
                    large: null
                },
                status: "string",
                followed: false
            },
            {
                name: "Hacker",
                id: 1,
                photos: {
                    small: null,
                    large: null
                },
                status: "null",
                followed: false
            },
            {
                name: "notSchubert",
                id: 2,
                photos: {
                    small: null,
                    large: null
                },
                status: "string",
                followed: true
            },
            {
                name: "notHacker",
                id: 3,
                photos: {
                    small: null,
                    large: null
                },
                status: "null",
                followed: true
            }
        ],
        pageSize: 10,
        totalUsersCount: 0,
        currentPage: 1,
        isFetching: false,
        followingInProgress: [],
    }
})

test('follow success', () => {
//  test consist of three parts!
//   1. state. or we can use one common state(as we do) wen we create several tests in one module or file

//   2. action
    const newState = usersReducer(initialState, actions.followSuccess(1))
//   3. expect
    expect(newState.users[0].followed).toBeFalsy()
    expect(newState.users[1].followed).toBeTruthy()
})

test('unfollow success', () => {
//  test consist of three parts!
//   1. state. or we can use one common state(as we do) wen we create several tests in one module or file

//   2. action
    const newState = usersReducer(initialState, actions.unFollowSuccess(3))
//   3. expect
    expect(newState.users[2].followed).toBeTruthy()
    expect(newState.users[3].followed).toBeFalsy()
})