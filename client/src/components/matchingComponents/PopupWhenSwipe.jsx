import React from 'react'

const PopupWhenSwipe = ({close}) => {
  return (
    <div className='bg-[black] flex w-[full] h-[full]'>
      <button className='animate-pulse absolute mt-[30%] font-[700] w-[239px] h-[70px] rounded-md bg-[#FFE1EA] text-[#95002B] text-[20px] z-50'>
      <p>You just swiped!</p>
      </button>
    </div>
  )
}

export default PopupWhenSwipe;