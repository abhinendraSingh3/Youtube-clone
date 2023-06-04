import React from "react";
import Carddesc from './Carddesc'
import thumbnail from '../images/thumbnail.jpg'
const Mainbody = () => {
    return (
        <>
            <div className="mainbody">
                <div id="leftbody">

                </div>

                <div id="rightbody">
                    <Carddesc
                        img={thumbnail}
                        heading="lelo muh me"
                        channelName='Carry Minati'
                        channelViews="25M"
                    />
                    <Carddesc
                        img={thumbnail}
                        heading="hahha"
                        channelName='elvish'
                        channelViews="25M"
                    />
                      <Carddesc
                        img={thumbnail}
                        heading="lelo muh me"
                        channelName='Carry Minati'
                        channelViews="25M"
                    />
                      <Carddesc
                        img={thumbnail}
                        heading="lelo muh me"
                        channelName='Carry Minati'
                        channelViews="25M"
                    />
                    <Carddesc
                        img={thumbnail}
                        heading="lelo muh me"
                        channelName='Carry Minati'
                        channelViews="25M"
                    />
                    <Carddesc
                        img={thumbnail}
                        heading="lelo muh me"
                        channelName='Carry Minati'
                        channelViews="25M"
                    />

                </div>
            </div>
        
        </>
    )
}

export default Mainbody