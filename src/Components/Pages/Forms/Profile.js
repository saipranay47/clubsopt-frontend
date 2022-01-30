import React from 'react'
import "./pro.css";
export default function Profile() {
    return (
    <div class="container">
        <div class="label">
            <h1 class="head">User Profile</h1>
                <div class="row">
                    <div class="text-center">
                        <img src="" class="avatar" alt="avatar"/>
                        <input type="file" class="form"></input>
                    </div>
                    <div class="personal">
                        <h3>Info</h3>
                                <form class="form" role="form">
                                    <div class="forms">
                                        <span class="details">Name : </span>
                                            <div class="inputs">
                                                <input
                                                class="form-control"
                                                type="text"
                                                value=""
                                                readonly
                                                />
                                            </div>
                                        </div>
                                    <div class="forms">
                                        <span class="details">Email : </span>
                                            <div class="inputs">
                                                <input
                                                class="form-control"
                                                type="text"
                                                value=""
                                                readonly
                                                />
                                            </div>
                                        </div>
                                    <div class="forms">
                                        <span class="details">ID : </span>
                                            <div class="inputs">
                                                <input
                                                class="form-control"
                                                type="text"
                                                value=""
                                                readonly
                                                />
                                            </div>
                                        </div>
                                    </form>
                        </div>
                    </div>
                </div>
            </div>
        )
}
