import React from "react";
import s from "./Users.module.css";
import axios from "axios";
import {UsersPropsType} from "./UsersContainer";


export class UsersClass extends React.Component<UsersPropsType, UsersPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.serTotalUsersCount(response.data.totalCount);
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render () {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span
                            className={this.props.currentPage ===  p ? s.selectedPage : ""}
                        onClick={() => {this.onPageChanged(p)}}
                        >{p}</span>
                    })}

                </div>
                {
                    this.props.users.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img
                                className = {s.userPhoto}
                                src={u.photos.small !== null
                                    ? u.photos.small
                                    : "https://lh3.googleusercontent.com/proxy/wjCr3b9Xi4TrEujk3BUF7tGYNtpUF6DsucTWQB-y-XoZqPby9qosDXOlPoqHmAHrsgFuj301vqvqpQrDKuKYmoT9Ah1HRv0gMi9UgOMhzwJbqrmon3K1"}
                            />
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>
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
}