// import React from 'react'
import React, { useState, useEffect } from 'react';

const Navbar = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleAboutClick = () => {
    setShowPopup(true);
  };

  useEffect(() => {
    let timer;
    if (showPopup) {
      // Hide popup after 2.5 seconds
      timer = setTimeout(() => setShowPopup(false), 2500);
    }
    return () => clearTimeout(timer);
  }, [showPopup]);


  return (
    <>
    <nav className='flex justify-between bg-slate-900 text-white py-2 font-poppins font-semibold'>
      <div className="logo flex items-center gap-0">
        <img 
          src="/logo.jpg"
          alt="KARYAM Logo" 
          className="ml-9 h-10 w-10 object-contain rounded-md
             shadow-inner shadow-slate-800 
             ring-1 ring-slate-700 animate-fadeIn"
        />
      <div className="font-bold text-xl mx-4 opacity-0 animate-slideIn [animation-delay:400ms] ">KARYAM</div>
        
      </div>
      <ul className='flex gap-8 mx-9 items-center'>
        <li className='cursor-pointer hover:font-bold transition-all duration-75 font-poppins'>Home</li>
        <li onClick={handleAboutClick} className='cursor-pointer hover:font-bold transition-all duration-75 font-poppins'>About</li>
      </ul>
    </nav>

    
      {showPopup && (
        <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-accentBg text-baseBg px-6 py-3 rounded shadow-lg opacity-0 animate-popup z-50">
          Made by OG
        </div>
      )}

      
      <style>{`
        @keyframes popupFade {
          0% { opacity: 0;  }
          20% { opacity: 1;  }
          80% { opacity: 1; }
          100% { opacity: 0; }
        }

        .animate-popup {
          animation: popupFade 2.5s forwards;
        }
      `}
      </style>
      </>
  )
}

export default Navbar
