import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
if(props.users.length === 0) {
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://static8.depositphotos.com/1311503/875/i/600/depositphotos_8758702-stock-photo-insant-camera-kid.jpg',
            followed: false,
            fullName: "Fedor",
            status: "Boss",
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://static8.depositphotos.com/1311503/875/i/600/depositphotos_8758702-stock-photo-insant-camera-kid.jpg',
            followed: true,
            fullName: "Igor",
            status: "Rab",
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ])
}
    props.setUsers([
        {
            id: 1,
            photoUrl: 'https://static8.depositphotos.com/1311503/875/i/600/depositphotos_8758702-stock-photo-insant-camera-kid.jpg',
            followed: false,
            fullName: "Fedor",
            status: "Boss",
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://static8.depositphotos.com/1311503/875/i/600/depositphotos_8758702-stock-photo-insant-camera-kid.jpg',
            followed: true,
            fullName: "Igor",
            status: "Rab",
            location: {city: 'Kiev', country: 'Ukraine'}
        },
    ])

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto} alt=""/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                            : <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                         <div>{u.location.city}</div>
                        <div>{u.location.country}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users