import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UsersType} from "../../types/types";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UsersType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

const Users: React.FC<PropsType> = ({
                                        pageSize,
                                        totalUsersCount,
                                        onPageChanged,
                                        currentPage,
                                        users, ...props
                                    }) => {
    console.log(users)
    return <div>
        <Paginator
            pageSize={pageSize}
            totalItemsCount={totalUsersCount}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
        />
        {
            users.map(u => <User key={u.id}
                                 user={u}
                                 followingInProgress={props.followingInProgress}
                                 unfollow={props.unfollow}
                                 follow={props.follow}
                />

            )

        }
        {
            console.log(users, '+')
        }
    </div>
}
export default Users