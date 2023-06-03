import React from "react";

const Mainbody = (props) => {
    return (
        <>
            <div className="mainbody">
                <div id="leftbody">

                </div>

                <div id="rightbody">
                    <div id="card">
                        <div id="image">
                            <img src={props.img} alt=''></img>
                        </div>
                        <div id="profileImg">
                            <img src={props.profileImg} alt=''></img>
                        </div>
                        <div id="mainHeading">
                            <h1>{props.heading}</h1>
                        </div>
                        <div id="channelName">
                            <h3>{props.channelName}</h3>
                        </div>
                        <div id="channelViews">
                            <h5>{props.channelViews}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mainbody