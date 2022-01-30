import React from 'react'
import "./Homepage.css"
import club from "./club-pic.jpg"
function Homepage() {
    return (
        <div>
                <div class="front-col-1">
                <img src={club} className='pic'/>
                    <div className="style-1">
                    <p className='intro'>An event management platform for college. This websites will help you to join various club events without any hassle.
                    </p>
                    </div>
                </div>
                <section class="event-slider">
                <div class="slider-heading">
                    <h3 class="top">
                    LIVE EVENTS</h3>
                </div>
                <div className="event-box">
                <a href ='#'>
                  <strong>Heading</strong>  
                  <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"></img>
                  <p>About the event</p>
                  </a>
                </div>
                </section>
                <section class="event-slider">
                <div class="slider-heading">
                    <h3 class="top">
                    REGISTRATION OPEN</h3>
                </div>
                <div className="event-box">
                <a href ='#'>
                  <strong>Heading</strong>  
                  <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"></img>
                  <p>About the event</p>
                  </a>
                </div>
                </section>
                
            </div>         
    )
}

export default Homepage;
