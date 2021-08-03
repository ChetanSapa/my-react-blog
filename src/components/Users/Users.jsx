import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({pageSize, totalUsersCount, onPageChanged, currentPage, users, ...props}) => {
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
    </div>
}
export default Users