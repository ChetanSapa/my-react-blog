import React from "react";
import Users from "./Users";
import {followAC, setUsersAc, unFollowAc} from "../../redux/usersReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowAc(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)