import React from "react";
import styles from "./users.module.css";
import axios from 'axios';
import userPhoto from '../../assets/img/images.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(respose => {
                this.props.setUsers(respose.data.items)
            })
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl != null ? u.photoUrl.small : userPhoto} className={styles.userPhoto}
                             alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.isFollow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{'u.country'}</div>
                            <div>{'u.country'}</div>
                    </span>
                </div>)
            }
        </div>
    }
}

export default Users