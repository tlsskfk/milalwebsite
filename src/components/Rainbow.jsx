const Rainbow = () => {
return (
    <div className='bg-primary absolute min-h-full w-full grid gap-0 grid-cols-10 overflow-hidden'>
        <div className='col-start-2 col-span-2 grid grid-cols-6'>
            <div className='col-span-1'>
                <div className='bg-pRed min-h-[380vh] lg:min-h-[480vh] min-w-[100vw] relative rounded-bl-[60px] '/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pOrange min-h-[380vh] lg:min-h-[480vh] min-w-[100vw] relative rounded-bl-[60px] bottom-[3px]'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pYellow min-h-[380vh] lg:min-h-[480vh] min-w-[100vw] relative left-[-0.5vw] rounded-bl-[60px] bottom-[6px]'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pGreen min-h-[380vh] lg:min-h-[480vh] min-w-[100vw] relative left-[-1.2vw] rounded-bl-[60px] bottom-[10px]'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-pBlue min-h-[380vh] lg:min-h-[480vh] min-w-[100vw] relative left-[-2vw] rounded-bl-[60px] bottom-[15px]'/>
            </div>
            <div className='col-span-1'>
                <div className='bg-primary min-h-[380vh] lg:min-h-[480vh] min-w-[100vw] relative left-[-2vw] rounded-bl-[60px] bottom-[20px]'/>
            </div>
        </div>
    </div>
    )
}


export default Rainbow