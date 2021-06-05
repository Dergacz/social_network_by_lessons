import React from "react";
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";


export const Users = (props: UsersPropsType) => {
    return (
        <div>
            {
                props.users.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                className = {s.userPhoto}
                                src={u.photo}
                            />
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => props.follow(u.id)}>Follow</button>
                              }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}