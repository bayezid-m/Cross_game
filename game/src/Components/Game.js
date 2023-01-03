import React, {useState} from 'react';
import "./Game.css";
import swal from 'sweetalert';


export default function Game() {
    
    const [player01, setPlayer01]=useState(1);
    const [player02, setPlayer02]=useState(1);
   
    if(player01===4){
        console.log("Player 1 wone");
        swal({
            title: 'Wine!',
            text: 'Player 1 wone',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
    }
   
    //for player 1 or player 1
    const[player1, setPlayer1]=useState(true);

    // for choise of each button
    const[choise, setChoise]=useState(true);
    const[choise2, setChoise2]=useState(true);
    const[choise3, setChoise3]=useState(true);
    //for choise inside every button to change the icon
    const[inchoise, setInChoise]=useState(' ');
    const[inchoise2, setInChoise2]=useState(' ');
    const[inchoise3, setInChoise3]=useState(' ');
    const[inchoise4, setInChoise4]=useState(' ');
    const[inchoise5, setInChoise5]=useState(' ');
    const[inchoise6, setInChoise6]=useState(' ');
    const[inchoise7, setInChoise7]=useState(' ');
    const[inchoise8, setInChoise8]=useState(' ');
    const[inchoise9, setInChoise9]=useState(' ');

    const [button01, setButton1]=useState();
    const [button02, setButton2]=useState();
    const [button03, setButton3]=useState();
    const [button04, setButton4]=useState();
    const [button05, setButton5]=useState();
    const [button06, setButton6]=useState();
    const [button07, setButton7]=useState();
    const [button08, setButton8]=useState();
    const [button09, setButton9]=useState();

   
    const button1=()=>{
     
       if(player1===true){
        setInChoise('X');
        setPlayer01(player01+1);
        console.log(player01);
       }
       else if(player1===false){
        setInChoise('O');
        setPlayer02(player02+1);
        console.log(player02);
       }
        
        setPlayer1(!player1);
        
    }
    const button2=()=>{
        //setButton1(button01+1);
       // setChoise2(!choise2);
       // player1? setInChoise(inchoise2): setInChoise(!inchoise2);
       // player1?setInChoise2('X'):setInChoise2('O');
       if(player1===true){
        setInChoise2('X');
        setPlayer01(player01+1);
        console.log(player01);
       }
       else if(player1===false){
        setInChoise2('O');
        setPlayer02(player02+1);
        console.log(player02);
       }
        
        setPlayer1(!player1);
      
    }

    const button3=()=>{
        if(player1===true){
            setInChoise3('X');
            setPlayer01(player01+1);
            console.log(player01);
           }
           else if(player1===false){
            setInChoise3('O');
            setPlayer02(player02+1);
            console.log(player02);
           }
            
        setPlayer1(!player1);
        
    }

    const button4=()=>{
        if(player1===true){
            setInChoise4('X');
            setPlayer01(player01+1);
            console.log(player01);
           }
           else if(player1===false){
            setInChoise4('O');
            setPlayer02(player02+1);
            console.log(player02);
           }
                    setPlayer1(!player1);
    }

    const button5=()=>{
        if(player1===true){
            setInChoise5('X');
            setPlayer01(player01+1);
            console.log(player01);
           }
           else if(player1===false){
            setInChoise5('O');
            setPlayer02(player02+1);
            console.log(player02);
           }
                    setPlayer1(!player1);
    }

    const button6=()=>{
        if(player1===true){
            setInChoise6('X');
            setPlayer01(player01+1);
            console.log(player01);
           }
           else if(player1===false){
            setInChoise6('O');
            setPlayer02(player02+1);
            console.log(player02);
           }
                    setPlayer1(!player1);
    }

    const button7=()=>{
        if(player1===true){
            setInChoise7('X');
            setPlayer01(player01+1);
            console.log(player01);
           }
           else if(player1===false){
            setInChoise7('O');
            setPlayer02(player02+1);
            console.log(player02);
           }
                    setButton1(button01+1);
        setPlayer1(!player1);
    }

    const button8=()=>{
        if(player1===true){
            setInChoise8('X');
            setPlayer01(player01+1);
            console.log(player01);
           }
           else if(player1===false){
            setInChoise8('O');
            setPlayer02(player02+1);
            console.log(player02);
           }
                    setButton1(button01+1);
        setPlayer1(!player1);
    }

    const button9=()=>{
        if(player1===true){
            setInChoise9('X');
            setPlayer01(player01+1);
            console.log(player01);
           }
           else if(player1===false){
            setInChoise9('O');
            setPlayer02(player02+1);
            console.log(player02);
           }
                    setButton1(button01+1);
        setPlayer1(!player1);
    }
    const button10=()=>{
        setButton1(button01+1);
      
    }
 

    // if(button01+button02===2){

    // }


  return (
    <div>  <div>
    <h1>Welcome to the game</h1>
    <div>{player1? "Player 1":"Player 2"}</div>
            </div>
            <div className='body'>
            <div className='items'>

       <div>
            <button type="button" className='btn1' onClick={()=>button1()}>{inchoise}</button>
            <button type="button" className='btn1' onClick={()=>button2()}>{inchoise2}</button>
            <button type="button" className='btn1' onClick={()=>button3()}>{inchoise3}</button>
       </div>
       <div>
            <button type="button" className='btn1' onClick={()=>button4()}>{inchoise4}</button>
            <button type="button" className='btn1' onClick={()=>button5()}>{inchoise5}</button>
            <button type="button" className='btn1' onClick={()=>button6()}>{inchoise6}</button>
       </div>
       <div>
 
            <button type="button" className='btn1' onClick={()=>button7()}>{inchoise7}</button>
            <button type="button" className='btn1' onClick={()=>button8()}>{inchoise8}</button>
            <button type="button" className='btn1' onClick={()=>button9()}>{inchoise9}</button>
       </div>
            
         
            </div>
                 </div>
            <div className='submit'>
            <button type="button" class="btn btn-primary" onClick={()=>button10()}>Primary</button>
            </div>
        </div>
  )
}
