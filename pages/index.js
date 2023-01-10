import React from 'react'
import Link from 'next/link'

const Home = () => {
    return (
        <div className='d-flex justify-content-center align-items-center'
            style={{ width: "100%", height: "100vh" }}
        >
            <Link href="/shop" id="link">
                Shop Page
                {/* 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 */}
            </Link>
        </div>
    )
}

export default Home