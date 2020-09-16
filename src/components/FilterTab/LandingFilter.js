import React from 'react'

function LandingFilter() {
    const buttons=["True","False"];

    const buttonSearch = (e) => {
        e.preventDefault();

    };

    return (
        <div className="">
            <div >Successful Launch</div>
            <hr/>
            {buttons.map((button,index)=><button key={index} onClick={buttonSearch} value={button}>{button}</button>)}
        </div>
    )
}

export default LandingFilter
