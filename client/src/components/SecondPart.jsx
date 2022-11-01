import React from 'react'

function SecondPart() {
  return (
    <div>
      <div className='w-[100%] bg-[#160404]  h-[533px] flex justify-center items-center space-x-9 '>

        <div className='Why-MM w-[549px] h-[325px] flex flex-col justify-center '>
          <h1 className='text-[#DF89C6] text-[46px]'>Why Merry Match?</h1>
          <br />
          <p className='text-[white] text-[20px]'>
            Merry Match is a new generation of online dating website for everyone
          </p><br />
          <p className='text-[white] text-[16px]'>
            Whether you’re committed to dating, meeting new people, expanding your social network, meeting locals while traveling, or even just making a small chat with strangers.
          </p><br />
          <p className='text-[white] text-[16px]'>
            This site allows you to make your own dating profile, discover new people, save favorite profiles, and let them know that you’re interested
          </p>
        </div>

        <div className='Picture w-[549px] h-[325px]'>
           <img src='../../public/asset/SecondPart/vector.png'></img>
        </div>

      </div>
    </div>
  )
}

export default SecondPart