'use client'
import React, { useState, useRef } from 'react'

function Page() {
  const [isLoved, setIsLoved] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);
  
  const handleYesClick = () => {
    setIsLoved(true);
  };
  
  const handleNoHover = () => {
    if (noButtonRef.current) {
      const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
      const randomY = Math.floor(Math.random() * (window.innerHeight - 50));
      
      noButtonRef.current.style.position = 'absolute';
      noButtonRef.current.style.left = `${randomX}px`;
      noButtonRef.current.style.top = `${randomY}px`;
    }
  };
  
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-50 font-['Comic_Sans_MS',_cursive] px-4">
      {isLoved ? (
        <>
          <img 
            src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3RhbzZ2cDBmcW0zb3Q4MXdyeGl4MWlrbDIyaTg4NnNzMTFlMnl5NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v4UdKrxhIiB1QFmO6b/giphy.gif" 
            alt="luv1" 
            className="w-52 sm:w-64 mb-6"
          />
          <h1 className="text-3xl sm:text-4xl text-pink-500 text-center font-bold mb-8">❤️ 我也爱你 ❤️</h1>
        </>
      ) : (
        <>
          <img 
            src="https://media.tenor.com/9Tv5rm2sI8gAAAAj/peach-goma.gif" 
            alt="luv2" 
            className="w-52 sm:w-64 mb-6"
          />
          <h1 className="text-3xl sm:text-4xl text-pink-500 text-center font-bold mb-8">Hay!! Do you love me?</h1>
          <div className="flex gap-5">
            <button 
              className="px-10 py-3 bg-green-500 hover:bg-green-600 text-white text-xl rounded-full hover:scale-110 transition-all duration-300"
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button 
              ref={noButtonRef}
              className="px-10 py-3 bg-red-500 hover:bg-red-600 text-white text-xl rounded-full transition-all duration-300"
              onMouseOver={handleNoHover}
            >
              No
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default Page
