import React from "react";
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";


export const UsersFunc = (props: UsersPropsType) => {
    const getUsers = () => {
        if (props.users.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                className = {s.userPhoto}
                                src={u.photos.small !== null
                                ? u.photos.small
                                : "https://lh3.googleusercontent.com/proxy/b-935E3HGIQMqwecA7cZtEnPB2_zDtTScu1fp6ntziPfmaAqf4WHVyrvNyAyo8U4V7RRQwOt_moq19OEVowbKyi47EANYksT9Q7vbcmbbsRMvlEBa7hS"}
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
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/*<div>{u.location.country}</div>*/}
                            {/*<div>{u.location.city}</div>*/}
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}