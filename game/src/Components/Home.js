import React , { useState, useRef  }from 'react'
import { Link as Button, useNavigate } from "react-router-dom";
import Game from "./Game"
export default function Home() {
  const [formValues, setFormValues] = useState({
    player001: "",
    player002: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(true);

  const inputFileRef = useRef();

  const handleChange = (event) => {
      const { name, value } = event.target;
      console.log(name, value);

      setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formValues);
      console.log(inputFileRef?.current?.files);
      setIsFormVisible(false);
  };



  return (
    <div>
        
        <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
         
          {isFormVisible? (
            
            <form onSubmit={handleSubmit}>
            <div>
            <h1>Welcome to the game</h1>
        </div>
              <div className="mb-3">
                <label className="form-label">
                  Player 1
                </label>
                <input
                  placeholder="Enter the name of player 1"
                  name="player001"
                  value={formValues?.player001}
                  onChange={handleChange}

               
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Username" className="form-label">
                 Player 2
                </label>
                <input
                   placeholder="Enter the name of player 1"
                  name="player002"
                  value={formValues?.player002}
                  onChange={handleChange}
              
                />
              </div>
              <button type="submit" className="btn btn-dark mx-2">
                Start
              </button>
            </form>
          ): (
        <Game data={formValues} />
      )}
            
          </div>
        </div>
      </div>
    </div>
  )
}
