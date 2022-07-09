import React,{useState} from 'react'
import Review from './Review';
import {review} from './data'
import {HiOutlineChevronRight,HiOutlineChevronLeft} from 'react-icons/hi'

function App() {
  const [index, setIndex] = useState(0)
  // destruction               its get name , img , job and describtion from an array
  const {name,job,img,describtion}=review[index]

  const randomHandeler=()=>{
    const reviewLength=review.length
    const randomNum=Math.floor(Math.random()*(reviewLength-0+1))+0
    console.log(randomNum);
    setIndex(randomNum)
    
  }
  const beforeHandeler=()=>{
    const reviewLength=review.length-1
setIndex(index-1)
console.log(index);
if (index<=0) {
  setIndex(reviewLength)
} 
  }
  const nextHandeler=()=>{
    const reviewLength=review.length-1
setIndex(index+1)
console.log(index);
if (index>=reviewLength) {
  setIndex(0)
} 
  }
  return (
<React.Fragment>
  <div className='flex items-center justify-center h-screen flex-col bg--600'>
    <p className='font-bold text-2xl capitalize mb-2 tracking-wider  '>review of workmates</p>
    <div className='w-80 h-1 bg-rose-600 rounded-md mb-7'></div>
  <div className='w-96 h-96 bg-gray-100 shadow-md shadow-gray-400 rounded p-5'>
<img src={img} className='w-20 h-20 rounded-full mx-auto' alt="" />
<h3 id='name' className='font-semibold capitalize text-center mt-3 text-xl'>{name}</h3>
<p id='job' className='text-center text-md mt-1 capitalize font-medium text-rose-500'>{job}</p>
<p id='text' className='text-justify '>{describtion}</p>
<div className=' flex  ml-auto bg--300 mt-3 select-none'>
<button onClick={randomHandeler} className='capitalize ml-auto mr-12 bg-rose-500 px-3 hover:text-rose-100 active:scale-95 transition-all text-gray-200 py-2 font-semibold text-md rounded-sm'>random</button>
  <button onClick={beforeHandeler} className='border border-rose-400 px-2 mx-1 rounded-sm hover:text-rose-500 '><HiOutlineChevronLeft/></button>
  <button onClick={nextHandeler} className='border border-rose-400 px-2  rounded-sm hover:text-rose-500'><HiOutlineChevronRight/></button>
</div>
  </div>
  </div>
</React.Fragment>
  )
}

export default App