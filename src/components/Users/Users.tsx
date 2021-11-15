import React, {useEffect} from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserSearchForm} from "./UsersSearchForm";
import {FilterType, requestUsers} from "../../redux/usersReducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersFilter
} from "../../redux/usersSelectors";

type PropsType = {}

export const Users: React.FC<PropsType> = (props) => {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const pageSize = useSelector(getPageSize)
    const currentPage = useSelector(getCurrentPage)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestUsers(currentPage, pageSize, filter))
    },[])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }
    const onFilterChange = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }
    const follow = (userId: number) => {
        dispatch(follow(userId))
    }
    const unFollow = (userId: number) => {
        dispatch(follow(userId))
    }

    return <div>

        <div>
            <UserSearchForm onFilterChange={onFilterChange}/>
        </div>

        <Paginator
            pageSize={pageSize}
            totalItemsCount={totalUsersCount}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
        />
        {users.map(u => <User key={u.id}
                              user={u}
                              followingInProgress={followingInProgress}
                              unfollow={unFollow}
                              follow={follow}
        />)}
    </div>
}