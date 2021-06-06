import React from "react";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unFollow
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import axios from "axios";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(respose => {
                this.props.setIsFetching(false)
                this.props.setUsers(respose.data.items)
                this.props.setTotalUsersCount(respose.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(respose => {
                this.props.setIsFetching(false)
                this.props.setUsers(respose.data.items)
            })
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   isFollow={this.props.isFollow}
                   unFollow={this.props.unFollow}
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
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UsersContainer)