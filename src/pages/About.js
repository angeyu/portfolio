import React from 'react'
import me from "../images/itsme.jpg"

function About() {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="row">
                    <div className="col">
                        I'm Ange. I have a BA in Human Computer Interaction from NYU. [add rest of bio here]
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-9">
                                 <img src={me}  alt="hi" className="img-thumbnail float-left p-2"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;