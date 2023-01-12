const NavRainbow = () => (
    <div className="xl:hidden absolute left-0 h-full w-full grid gap-0 grid-cols-10 overflow-hidden left-0">
        <div className='col-start-2 col-span-2 grid grid-cols-6 overflow-hidden'>
            <div className='col-span-1'>
                <div className='bg-pRed h-full w-full relative z-[2]'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pOrange h-full w-full relative z-[2]'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pYellow h-full w-full relative z-[2] left-[-0.5vw]'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pGreen h-full w-full relative z-[2] left-[-1.2vw]'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pBlue h-full w-full relative z-[2] left-[-2vw]'/>
            </div>
            <div className='col-span-1'>
                <div className='h-full w-full relative left-[-2.5vw]'/>
            </div>
          </div>
      </div>
  )

  export default NavRainbow