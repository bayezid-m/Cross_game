import React, {useState} from 'react';
import "./Game.css";
import swal from 'sweetalert';
import { Link, useNavigate } from "react-router-dom";

export default function Game({data}) {
    let navigate = useNavigate();
  
    const[player1, setPlayer1]=useState(true);

    // for choise of each button
 
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

    //for player 1 part count
    const [button01x, setButton1x]=useState(0);
    const [button02x, setButton2x]=useState(0);
    const [button03x, setButton3x]=useState(0);
    const [button04x, setButton4x]=useState(0);
    const [button05x, setButton5x]=useState(0);
    const [button06x, setButton6x]=useState(0);
    const [button07x, setButton7x]=useState(0);
    const [button08x, setButton8x]=useState(0);
    const [button09x, setButton9x]=useState(0);

   //for plauer 2 part count
   const [button01, setButton1]=useState(0);
   const [button02, setButton2]=useState(0);
   const [button03, setButton3]=useState(0);
   const [button04, setButton4]=useState(0);
   const [button05, setButton5]=useState(0);
   const [button06, setButton6]=useState(0);
   const [button07, setButton7]=useState(0);
   const [button08, setButton8]=useState(0);
   const [button09, setButton9]=useState(0);

    //player 1 wine conditions
    if(button01x===1&&button02x===1&&button03x===1){
        swal({
            title: 'Wine!',
            text: 'Player 1 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button04x===1&&button05x===1&&button06x===1){
        swal({
            title: 'Wine!',
            text: 'Player 1 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button07x===1&&button08x===1&&button09x===1){
        swal({
            title: 'Wine!',
            text: 'Player 1 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button01x===1&&button04x===1&&button07x===1){
        swal({
            title: 'Wine!',
            text: 'Player 1 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button02x===1&&button05x===1&&button08x===1){
        swal({
            title: 'Wine!',
            text: 'Player 1 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button03x===1&&button06x===1&&button09x===1){
        swal({
            title: 'Wine!',
            text: 'Player 1 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button01x===1&&button05x===1&&button09x===1){
        swal({
            title: 'Wine!',
            text: 'Player 1 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button03x===1&&button05x===1&&button07x===1){
        swal({
            title: 'Wine!',
            text: 'Player 1 wone',
            confirmButtonText: 'Cool'
          });
    }
    //player 2 wine conditions
    if(button01===1&&button02===1&&button01===1){
        swal({
            title: 'Wine!',
            text: 'Player 2 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button04===1&&button05===1&&button06===1){
        swal({
            title: 'Wine!',
            text: 'Player 2 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button07===1&&button08===1&&button09===1){
        swal({
            title: 'Wine!',
            text: 'Player 2 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button01===1&&button04===1&&button07===1){
        swal({
            title: 'Wine!',
            text: 'Player 2 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button02===1&&button05===1&&button08===1){
        swal({
            title: 'Wine!',
            text: 'Player 2 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button03===1&&button06===1&&button09===1){
        swal({
            title: 'Wine!',
            text: 'Player 2 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button01===1&&button05===1&&button09===1){
        swal({
            title: 'Wine!',
            text: 'Player 2 wone',
            confirmButtonText: 'Cool'
          });
    }
    else if(button03===1&&button05===1&&button07===1){
        swal({
            title: 'Wine!',
            text: 'Player 2 wone',
            confirmButtonText: 'Cool'
          });
    }
    const button1=()=>{
     
       if(player1===true){
        setInChoise('X');
        setButton1x(button01x+1);
       }
       else if(player1===false){
        setInChoise('O');
        setButton1(button01+1);
       }
        
        setPlayer1(!player1);
        
    }
    const button2=()=>{
       if(player1===true){
        setInChoise2('X');
        setButton2x(button02x+1);
        console.log(button02x);
       }
       else if(player1===false){
        setInChoise2('O');
        setButton2(button02+1);
           }
        
        setPlayer1(!player1);
      
    }

    const button3=()=>{
        if(player1===true){
            setInChoise3('X');
            setButton3x(button03x+1);
            console.log(button03x);
           }
           else if(player1===false){
            setInChoise3('O');
            setButton3(button03+1);
            //console.log(player02);
           }
            
        setPlayer1(!player1);
        
    }

    const button4=()=>{
        if(player1===true){
            setInChoise4('X');
            setButton4x(button04x+1);
           // console.log(player01);
           }
           else if(player1===false){
            setInChoise4('O');
            setButton4(button04+1);
            //console.log(player02);
           }
                    setPlayer1(!player1);
    }

    const button5=()=>{
        if(player1===true){
            setInChoise5('X');
            setButton5x(button05x+1);
            //console.log(player01);
           }
           else if(player1===false){
            setInChoise5('O');
            setButton5(button05+1);
            // console.log(player02);
           }
                    setPlayer1(!player1);
    }

    const button6=()=>{
        if(player1===true){
            setInChoise6('X');
            setButton6x(button06x+1);
            // console.log(player01);
           }
           else if(player1===false){
            setInChoise6('O');
            setButton6(button06+1);
            //console.log(player02);
           }
                    setPlayer1(!player1);
    }

    const button7=()=>{
        if(player1===true){
            setInChoise7('X');
            setButton7x(button07x+1);
            // console.log(player01);
           }
           else if(player1===false){
            setInChoise7('O');
            setButton7(button07+1);
            //console.log(player02);
           }
                   
        setPlayer1(!player1);
    }

    const button8=()=>{
        if(player1===true){
            setInChoise8('X');
            setButton8x(button08x+1);
            //console.log(player01);
           }
           else if(player1===false){
            setInChoise8('O');
            setButton8(button08+1);
            // console.log(player02);
           }
        setPlayer1(!player1);
    }

    const button9=()=>{
        if(player1===true){
            setInChoise9('X');
            setButton9x(button09x+1);
            // console.log(player01);
           }
           else if(player1===false){
            setInChoise9('O');
            setButton9(button09+1);
            //console.log(player02);
           }
                 
        setPlayer1(!player1);
    }
    const button10=()=>{
        setInChoise(' ');
        setInChoise2(' ');
        setInChoise3(' ');
        setInChoise4(' ');
        setInChoise5(' ');
        setInChoise6(' ');
        setInChoise7(' ');
        setInChoise8(' ');
        setInChoise9(' ');
      
        setButton1x(0);
        setButton2x(0);
        setButton3x(0);
        setButton4x(0);
        setButton5x(0);
        setButton6x(0);
        setButton7x(0);
        setButton8x(0);
        setButton9x(0);

        setButton1(0);
        setButton2(0);
        setButton3(0);
        setButton4(0);
        setButton5(0);
        setButton6(0);
        setButton7(0);
        setButton8(0);
        setButton9(0);
    }
 
  return (
    <div>  <div>
    <h1>Play the game now</h1>
    
    <div className='players'>
      <h5>Player1: {data?.player001}</h5>
      <h5>player2: {data?.player002}</h5>
    </div>
    <div>{player1? "Player 1":"Player 2"}</div>
            </div>
          

       <div className='body'>
            <button type="button" className='btn1' onClick={()=>button1()}>{inchoise}</button>
            <button type="button" className='btn1' onClick={()=>button2()}>{inchoise2}</button>
            <button type="button" className='btn1' onClick={()=>button3()}>{inchoise3}</button>
       </div>
       <div className='body'>
            <button type="button" className='btn1' onClick={()=>button4()}>{inchoise4}</button>
            <button type="button" className='btn1' onClick={()=>button5()}>{inchoise5}</button>
            <button type="button" className='btn1' onClick={()=>button6()}>{inchoise6}</button>
       </div>
       <div className='body'>
 
            <button type="button" className='btn1' onClick={()=>button7()}>{inchoise7}</button>
            <button type="button" className='btn1' onClick={()=>button8()}>{inchoise8}</button>
            <button type="button" className='btn1' onClick={()=>button9()}>{inchoise9}</button>
       </div>
            
            <div className='submit'>
            <button type="button" class="btn btn-primary" onClick={()=>button10()}>Reset</button>
          
            </div>
        </div>
  )
}
