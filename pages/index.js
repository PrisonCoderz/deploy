import React from 'react'
import Link from 'next/link'
import nextConfig from '../next.config' 

const Home = () => {
    console.log(process.env.NEXT_PUBLIC_APP_NAME)
    console.log(nextConfig.NAME)
    return (
        <div className='d-flex justify-content-center align-items-center'
            style={{ width: "100%", height: "100vh" }}
        >
            <Link href="/shop" id="link">
                Shop Page
                
            </Link>
        </div>
    )
}

export default Home