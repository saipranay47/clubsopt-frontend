import React from 'react'
import "./reg.css"
function Registration() {
    return (
        <div>
        <h3 class="boot">Hey,</h3>
        <div class="container">
            <div className="function">
            <div class="title">Registration</div>
                    <div className="content">
                    <form role="form">
                        <ul class="nav_links2">
                            <li class="input-box">
                                <span class="details">Name : </span>
                                <input className="boxes0" type="text" placeholder="Name" required name="Nickname"></input>
                            </li>
                                <li class="input-box">
                                    <span class="details">Id : {}</span>
                                    <input className="boxes1" type="text" placeholder="Id" required name="RegNo"></input>
                                </li>
                        </ul>
                                <div class="button2">
                                    <input type="submit" value="Submit"></input>
                                </div>
                    </form>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default Registration;
