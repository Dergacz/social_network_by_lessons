import React from "react";
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
import user from "../../UserImg/user.png";


export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber);
        props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`)
            .then(response => {
                props.toggleIsFetching(false);
                props.setUsers(response.data.items);
            });
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage ===  p ? s.selectedPage : ""}
                        onClick={() => {onPageChanged(p)}}
                    >{p}</span>
                })}

            </div>
            {
                props.users.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                className = {s.userPhoto}
                                src={u.photos.small !== null
                                    ? u.photos.small
                                    : user}
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