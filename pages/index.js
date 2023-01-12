import React from 'react'
import Link from 'next/link'
// import { PASSWORD } from '../config'
import getConfig from 'next/config'
const Home = () => {
    const { publicRuntimeConfig } = getConfig()
    console.log(process.env.NEXT_PUBLIC_APP_NAME)
    // console.log(PASSWORD)
    console.log(publicRuntimeConfig)
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