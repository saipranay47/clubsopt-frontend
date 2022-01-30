import React from 'react'
import "./Events.css";

export default function Profile() {
    return (
    <div class="containers">
        <div class="labels-1">
                <div class="row-1">
                    <div class="text-center">
                        <img src="" class="avatar-1" alt="avatar" id=""/>
                    </div>
                        <div class="personal-1">
                            <h3>Club: </h3>
                            <br/>
                            <h5>Event Name : </h5>
                            <br/>
                            <h5>On :</h5>
                            <br/>
                            <h5>TIME: </h5>
                            <br/>
                            <h5>Venue: </h5>
                            <br/>
                            <h5>Speaker:</h5>
                            <br/>
                            <a className = "but" href="#"><button className="cta">Direct</button></a>  
                        </div>    
                    </div>
                    <div class="col-78" id="about">
                        <h6>About Event</h6>
                        <br />
                        <p>Event Detail</p>
                    </div>
                   
            </div>
        </div>
    )
}
