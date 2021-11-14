import React from "react";
import Users from "./Users";
import {
    FilterType,
    follow, requestUsers, unfollow,
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers, getUsersFilter
} from "../../redux/usersSelectors";
import {UsersType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    currentPage: number
    pageSize: number
    isFetching: boolean
    totalUsersCount: number
    users: Array<UsersType>
    followingInProgress: Array<number>
    filter: FilterType
}

type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number, filter: FilterType) => void
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
    componentDidMount() {
        let {currentPage, pageSize, filter} = this.props
        this.props.getUsers(currentPage, pageSize, filter)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize, filter} = this.props
        this.props.getUsers(pageNumber, pageSize, filter)
    }

    onFilterChange = (filter: FilterType) => {
        let {pageSize} = this.props
        this.props.getUsers(1, pageSize, filter)
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   onFilterChange={this.onFilterChange}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}
let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter: getUsersFilter(state)

    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers: requestUsers})
)(UsersContainer)