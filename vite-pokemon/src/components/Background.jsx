import React from 'react';

const Background = ({ children }) => {
  return (
    <div className='bg-dark-cyan min-h-screen relative overflow-hidden'>
      <img
        src="/src/assets/images/bg-pattern-bottom.svg" 
        alt="Background Pattern Bottom"
        className="absolute bottom-0 right-0 w-full max-w-[500px]"
              style={{
                  bottom: '-150px',
                  right: "-150px"
              }} 
      />
      <img
        src="/src/assets/images/bg-pattern-top.svg" 
        alt="Background Pattern Top"
        className="absolute top-0 left-0 w-full max-w-[500px]"
              style={{
                  top: '-150px',
                  left: "-150px"
              }}
      />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Background;

