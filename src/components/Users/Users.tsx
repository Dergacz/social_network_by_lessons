import React from "react";
import s from "./Users.module.css";
import {UsersPropsType} from "./UsersContainer";
import user from "../../UserImg/user.png";
import {NavLink} from "react-router-dom";


export const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    const onPageChanged = (pageNumber: number) => {
        props.setCurrentPage(pageNumber);
        props.getUsers(pageNumber, props.pageSize)


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
                                            return id === u.id
                                        })}
                                        onClick={() => {props.unfollowThunk(u.id)}}>
                                        Unfollow
                                    </button>

                                    : <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => {props.followThunk(u.id)}}>
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