
import './App.css';
import axios from 'axios'
import {useRef,useState} from "react"
import  default_image from "./default_image.svg"
function App() {
  const inputRef=useRef(null);
  const [picture,setPicture]=useState(default_image)
  // const handleSubmit=async()=>{
  //   try{
  //    const res= await axios.get("https://api.openai.com/v1/images/generations",{
  //      headers: {
  //     'Content-Type': 'application/json',
  //     'Authorization': `Bearer ${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}`,
  //      },
  //     })
  //     setPicture(res)
  //   }
  //   catch(error){
  //     console.log(error)
  //   }
  // }
  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center">
      <div className='h-[80%] w-[30%]  '>
         <div className='h-[20%] w-[100%]  flex justify-center items-center font-bold text-5xl space-x-3 text-green-900'><span className="text-white">AI Image</span> <span className="text-pink-600">Generator</span></div>
         
       
          <div className="h-[60%] w-[100%]  bg-pink-800 rounded-2xl shadow-lg shadow-white">
            <img src={picture} className='h-[100%] w-[100%]' alt='mypic'/>
          </div>
          
         <div className='h-[20%] w-[100%]   flex justify-center items-center space-x-1'>
          <div className="h-[60%] w-[80%]  flex justify-center items-center"><input  ref={inputRef} type='text' className='bg-gray-400 font-bold pl-[1rem] text-white h-[90%] w-[99%] rounded-xl '/></div>
          <div className="h-[60%] w-[20%]  flex justify-center items-center"><button className='bg-pink-600 h-[90%] w-[90%] rounded-xl font-bold text-white' >Generate</button></div>
         </div>

      </div>
      
    </div>
  );
}

export default App;
