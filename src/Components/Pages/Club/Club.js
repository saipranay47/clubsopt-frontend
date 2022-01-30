import React from 'react';
import "./Clubs.css";
import Axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
Axios.defaults.baseURL = "http://localhost:8000/";
function Club() {
    const [clubs,setClubs] = useState([])
    const fetchClubs = async()=>{
      try{
        const request = await Axios.get("/clubs/clubs",{
          headers : {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json;charset=UTF-8"
          }
        })
      if(request.status === 200){
        const response = request.data
        console.log(response)
      }
      }catch(err){
        console.log(err)
      }
    }
    useEffect(() => {
      fetchClubs();
    }, []);
  return (
      <div className='parent'>
            <div class="parent-parallel">
                <div class="parallel-1">
                  <h2 className='des'>Technical clubs</h2>   
                    <div class="columns">
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    </div>
                </div>
                <div class="parallel-2">
                  <h2 className='des'>Non-technical clubs 1</h2>
                    <div class="columns">
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                    <a href ='#'>
                      <div className="club-box">
                          <img src="https://images.unsplash.com/photo-1638317004711-62044568893a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80" alt="club-logo"></img>
                        <h3 id="">Club name</h3>
                      </div>
                      </a>
                </div>
                </div>
            </div>
            </div>
       
        
        
    )   
}
export default Club;