import React from "react";
import styles from "./users.module.css";
import axios from 'axios';
import userPhoto from '../../assets/img/images.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(respose => {
                this.props.setUsers(respose.data.items)
                this.props.setTotalUsersCount(respose.data.totalCount)
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(respose => {
                this.props.setUsers(respose.data.items)
            })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && styles.selectedPage}
                    onClick={() => {this.onPageChanged(p)}}>{p}</span>
                })}
            </div>
            <div style={{width: '600px'}}>
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
        </div>
    }
}

export default Users