export default function Sidebar(){
    return (
        <>
        <div className=" sidebar  designs ">
            {/* First sidebar starts */}
            <h5 className=" w-100  text-start  ">Design Skills</h5>
            <div className="myborder skills w-100 fs-6 ">
              <ul className="my-3 ">
                <li className=" text-start mx-3  my-4">
                  User Experience Design
                </li>
                <li className=" text-start mx-3 my-4">
                  User Interface Design
                </li>
                <li className=" text-start mx-3 my-4">
                  Saas Apps Design
                </li>
                <li className=" text-start mx-3 my-4">
                  Web Design
                </li>
                <li className=" text-start mx-3 my-4">
                  Design System
                </li>
                <li className=" text-start mx-3 my-4">
                  Project Management
                </li>
                
              </ul>
            </div>
            {/* First sidebar ends */}

            {/* second sidebar starts */}
            <h5 className=" w-100  text-start my-2">Working Tools</h5>


             <div className="myborder skills w-100 fs-6 ">
                

                {/* first tools starts */}
              <div className=" d-flex justify-content-between my-2">
                <div className=" tool1">
                <img className="tools " src="/images/vs.jpeg"></img>
                <p className="">Vs Code</p>
                </div>
                <div className="tool1 ">
                <img className="tools " src="/images/Adobe.png"></img>
                <p>Adobe</p>
                </div>
                <div className="tool1 ">
                <img className="tools " src="/images/Sketch.png"></img>
                <p>Sketch</p>
                </div>
              </div>
                {/* first tools ends */}
                {/* Second tools starts */}
              <div className=" d-flex justify-content-between my-2">
                <div className=" tool1">
                <img className="tools " src="/images/invision.png"></img>
                <p className="">Invision</p>
                </div>
                <div className="tool1 ">
                <img className="tools " src="/images/xmind.jpeg"></img>
                <p>Xmind</p>
                </div>
                <div className="tool1 ">
                <img className="tools " src="/images/trello.png"></img>
                <p>Trello</p>
                </div>
              </div>
                {/* second tools ends */}
                {/* Third tools starts */}
              <div className=" d-flex justify-content-between my-2">
                <div className=" tool1">
                <img className="tools " src="/images/zeplin.png"></img>
                <p className="">Zeplin</p>
                </div>
                <div className="tool1 ">
                <img className="tools " src="/images/slack.webp"></img>
                <p>Slack</p>
                </div>
                <div className="tool1 ">
                <img className="tools " src="/images/boot.jpeg"></img>
                <p>Bootstrap</p>
                </div>
              </div>
                {/* Third tools ends */}
                {/* Last tools starts */}
              <div className=" d-flex justify-content-between my-2">
                <div className=" tool1">
                <img className="tools " src="/images/principal.jpeg"></img>
                <p className="">Principal</p>
                </div>
                <div className="tool1 ">
                <img className="tools " src="/images/ps.png"></img>
                <p>PhotoShop</p>
                </div>
                <div className="tool1 ">
                <img className="tools " src="/images/git.webp"></img>
                <p>GitHub</p>
                </div>
              </div>
                {/* Last tools ends */}
              
            </div>
            {/* second sidebar ends */}

            {/* Third Sidebar begins */}
            <h5 className=" w-100  text-start  my-3">Language Skills</h5>

            <div className="myborder skills w-100 fs-6 ">
                {/* first language */}
                <div className="d-flex my-3">
                <div className="tool1 ">
                     <img className="tools " src="/images/ger.png"></img>
                </div>
                <p className="text-start w-25" >German</p>
                </div>
                {/* first language ends  */}
                {/* second language */}
                <div className="d-flex my-3">
                <div className="tool1 ">
                     <img className="tools " src="/images/english.png"></img>
                </div>
                <p className="text-start w-25" >English</p>
                </div>
                {/* second language ends  */}

            </div>

            {/* Third Sidebar ends */}

          </div>

          

        </>
    )
}