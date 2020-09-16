import React from 'react'

function LaunchFilter() {
    const buttons=["True","False"];

    const buttonSearch = (e) => {
        e.preventDefault();

    };

    return (
        <div>
            <div >Successful Launch</div>
            <hr/>
            {buttons.map((button,index)=><button key={index} onClick={buttonSearch} value={button}>{button}</button>)}
        </div>
    )
}

export default LaunchFilter;
