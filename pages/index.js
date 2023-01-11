import React from 'react'
import Link from 'next/link'
import nextConfig from '../next.config'

const Home = () => {
    console.log(nextConfig.APP_NAME)
    return (
        <div className='d-flex justify-content-center align-items-center'
            style={{ width: "100%", height: "100vh" }}
        >
            <Link href="/shop" id="link">
                Shop Page
                
                {nextConfig.NAME}
            </Link>
        </div>
    )
}

export default Home