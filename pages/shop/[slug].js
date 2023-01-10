import React from 'react'
import {withRouter} from 'next/router'

const SinglePage = ({router}) => {
    const {slug,img} = router.query;
    const redirect=()=>{
        router.push({
            pathname:"/shop",
            query:{message:"redirect-from-single-page"}
        })
    }
  return (
    <div className='container-fluid p-4'>
        <div className="d-flex align-items-center justify-content-center">
            <img src={img} className="img-fluid"
            style={{height:"500px",cursor:"pointer"}}
            onClick={redirect}
            />
            <span className='ms-2'>{slug}</span>
        </div>
        </div>
  )
}

export default withRouter(SinglePage)