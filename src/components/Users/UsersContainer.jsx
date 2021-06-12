import React from "react";
import Users from "./Users";
import {
    follow, getUsers,
    setCurrentPage,
    setProgress, unfollow,
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
                   setProgress={this.props.setProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         isFollow: (userId) => {
//             dispatch(followAc(userId))
//         },
//         unFollow: (userId) => {
//             dispatch(unFollowAc(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAc(users))
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAc(pageNumber))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAc(totalCount))
//         },
//         setIsFetchingAc: (isFetching) => {
//             dispatch(setIsFetchingAc(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    setProgress,
    getUsers
})(UsersContainer)