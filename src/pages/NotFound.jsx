import React from 'react'
import Button from '../components/Others/Button'

const NotFound = () => {
    return (
        <div className='text-center flex items-center justify-center h-screen flex-col gap-5'>
            <p className='text-[75px] font-semibold'>404</p>
            <p className='text-3xl font-semibold'>Don't worry - the stock market hasn't crashed.</p>
            <p className='text-3xl font-semibold'>Page isn't found</p>
            <Button text={"Back to Home page"} />
        </div>
    )
}

export default NotFound