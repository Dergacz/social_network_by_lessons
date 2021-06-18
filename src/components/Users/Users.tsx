import React from "react";
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import user from "../../UserImg/user.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../Api/api";


export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber);
        props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, props.pageSize)
            .then(data => {
                props.toggleIsFetching(false);
                props.setUsers(data.items);
            });
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p ? s.selectedPage : ""}
                        onClick={() => {
                            onPageChanged(p)
                        }}
                    >{p}</span>
                })}

            </div>
            {
                props.users.users.map(u =>  {
                    return <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                              <img
                                  className={s.userPhoto}
                                  src={u.photos.small !== null
                                      ? u.photos.small
                                      : user}
                              />
                            </NavLink>

                        </div>
                        <div>
                            {
                                u.followed

                                    ? <button
                                        disabled={props.followingInProgress.some(id => {
                                            debugger
                                            return id === u.id
                                        })}
                                        onClick={() => {
                                            props.toggleIsFollowingProgress(u.id, true);

                                            usersAPI.unFollow(u.id).then(data => {
                                                debugger
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id);
                                                }
                                                props.toggleIsFollowingProgress(u.id, false)
                                            })

                                        }}>
                                        Unfollow
                                    </button>

                                    : <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {
                                            props.toggleIsFollowingProgress(u.id, true);

                                            usersAPI.follow(u.id)
                                                .then(data => {
                                                    if (data.resultCode === 0) {
                                                        props.follow(u.id);
                                                    }
                                                    props.toggleIsFollowingProgress(u.id, false);
                                                })

                                        }}>
                                        Follow
                                    </button>
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
                    </div>
                    }


                )
            }
        </div>
    )
}