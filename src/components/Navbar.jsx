import React from 'react'
import { Button } from './ui/button'
import { UserButton } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='p-3 px-10 flex justify-between shadow-md items-center'>
            <Link to={'/'}>
                <img src="/logo.png" width={150} height={150} className='ml-10'/>
            </Link>
            <div className='flex gap-5 items-center'>
                <Link to={'/about'}>
                    <Button variant="outline">
                        About
                    </Button>
                </Link>
                <Link to={'/'}>
                    <Button variant="outline">
                        Home
                    </Button>
                </Link>

                <Link to={'/dashboard'}>
                    <Button variant="outline">
                        Dashboard
                    </Button>
                </Link>

                <UserButton />
            </div>
        </div>
    )
}

export default Navbar