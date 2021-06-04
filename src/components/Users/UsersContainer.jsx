import React from "react";
import Users from "./Users";
import {followAc, setCurrentPageAc, setTotalUsersCountAc, setUsersAc, unFollowAc} from "../../redux/usersReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAc(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAc(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Users)