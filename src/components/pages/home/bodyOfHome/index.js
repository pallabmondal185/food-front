import React from 'react'
import LeftHomeBody from './LeftHomeBody'
import RightHomeBody from './RightHomeBody'

const index = () => {
    return (
        <div>
            <div className="booking">
                <div className="container">
                    <div className="row align-items-center">

                        {/* left part */}
                        <div className="col-lg-7">
                            <LeftHomeBody />
                        </div>

                        {/* right part */}
                        <div className="col-lg-5">
                            <RightHomeBody />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index
