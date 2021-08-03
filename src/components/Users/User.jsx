import React from "react";
import styles from "./users.module.css";
import userPhoto from '../../assets/img/images.jpg'
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
    return <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img src={user.photoUrl != null ? user.photoUrl.small : userPhoto} className={styles.userPhoto}
                             alt=""/>
                    </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          unfollow(user.id)
                                      }}>Unfollow</button>
                            : <button disabled={followingInProgress.some(id => id === user.id)}
                                      onClick={() => {
                                          follow(user.id)
                                      }}>Follow</button>}
                    </div>
                </span>
        <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
        <span>
                         <div>{'u.country'}</div>
                            <div>{'u.country'}</div>
                    </span>
    </div>

}


export default User