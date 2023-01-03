import React , { useState }from 'react'
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  return (
    <div>
        <div>
            <h1>Welcome to the game</h1>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
         
  
            <form >
              <div className="mb-3">
                <label className="form-label">
                  Player 1
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter name of the player 1"
                  name="player 1"
               
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                 Player 2
                </label>
                <input
                  type={"text"}
                  className="form-control"
                  placeholder="Enter name of the player 2"
                  name="player 2"
              
                />
              </div>
              <Link className="btn btn-dark mx-2" to="/game">
                Start
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
