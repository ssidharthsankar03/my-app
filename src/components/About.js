import React, { useState } from 'react'

export default function About(props) {
    // const [mystyle, setmystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let mystyle={
        color: props.mode === 'dark'?'white':'grey',
        backgroundColor:props.mode === 'dark'?'grey':'white',
        border: '2px solid',
        borderColor: props.mode === 'dark'?'white':'grey'

    }
    // const [btntext, setbtntext] = useState("Enable light mode")
    // const togglestyle = () => {
    //     if (mystyle.color == 'white') {
    //         setmystyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtntext("Enable Dark mode")
    //     }
    //     else {
    //         setmystyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //         })
    //         setbtntext("Enable Light Mode")
    //     }
    // }
    // const [mystyle2, setmystyle2] = useState({
    //     color: 'green',
    //     backgroundColor: 'green'
    // })
    // const [btntext2, setbtntext2] = useState("Enable light mode")
    // const togglestyle2 = () => {
    //     if (mystyle2.color == 'green') {
    //         setmystyle({
    //             color: 'green',
    //             backgroundColor: 'green'
    //         })
    //         setbtntext2("Enable Green Screen")
    //     }
    //     else {
    //         setmystyle2({
    //             color: 'green',
    //             backgroundColor: 'green'
    //         })
    //         setbtntext2("Enable Light Mode")
    //     }
    // }
    return (
        <div className='container' style={mystyle}>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your TEXT
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, mollitia delectus officia maxime fuga repellat recusandae vitae doloribus quasi esse aperiam iusto modi laboriosam dignissimos blanditiis qui harum est beatae.                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            FREE TO USE
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas possimus labore voluptates laudantium esse alias optio sint debitis, rerum unde animi minus. Sed, nostrum.                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            ENJOY TEXTING
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ducimus voluptatibus impedit saepe recusandae ad id molestias doloribus aliquid, ex enim incidunt tenetur odio ullam expedita nemo facilis laudantium modi quia error? Nam, neque obcaecati quia exercitationem inventore illum enim eaque a explicabo unde dolores.                        </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={togglestyle} type="button" className="btn btn-primary">{btntext}</button> 
        <button onClick={togglestyle2} type='button'></button>  */}
        </div>

    )
}
