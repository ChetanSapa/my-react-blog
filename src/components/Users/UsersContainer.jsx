import React from "react";
import Users from "./Users";
import {followAc, setUsersAc, unFollowAc} from "../../redux/usersReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        isFollow: (userId) => {
            dispatch(followAc(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowAc(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)