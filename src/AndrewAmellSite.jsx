import "./App.css";
import StinkVanDerBug from "./assets/StinkVanDerBug.jpg";
import Githublogo from "./assets/Githublogo.svg"
import Linkedinlogo from "./assets/LinkedIn_icon.svg"
import Resume from "./assets/Andrew Amell Resume.docx (4).pdf"
//functions here

//main function

function App() {
    return (<body>
        <div1>
            <h1 style={{marginRight: 30}}>Andrew Amell</h1>
            <small-grey-text>North Dakota State University - Class of 2024 | Software Developer</small-grey-text>
        </div1>
        <contain-horizontal>
            <contain-vertical >
                <div1 style={{height: 'stretch'}}>
                    <contain-vertical><h2>About Me</h2>

                        {/* Figure out an actual bio to write out here I can't be bothered rn*/}

                        <p>Stuff about me goes here and lots of it just a ton of stuff just so much stuff in here like
                            its crazy holy -ifuhdsfyisgefohwoeugufheosg
                             fsdkfbodcnpiuedaboeobgakbfhjejhbc
                            nfjbsdkjasdhhkvejbkhav esdkhbk</p>
                    </contain-vertical>

                </div1>


            </contain-vertical>
            <contain-vertical>
                <div1> {/* Eventual goal is to get this to be like a scrolling picture wheel thing*/}
                    <img src={StinkVanDerBug} alt="stinkbug the cat wearing a cowboy hat and an evil fucking mustache"
                         width={200}
                         height={200}/>
                </div1>


                <div1>
                    <contain-vertical>
                        <h2>My Links</h2>
                        <contain-horizontal style={{justifyContent: 'left', marginBottom: 20}}>
                            <img src={Linkedinlogo} alt="LinkedIn logo"
                                 width={20}
                                 height={20}
                                 style={{marginRight: 15}}/>
                            <a href="https://www.linkedin.com/in/andrew-amell-2267b9421/" target="_blank">
                                Follow me on LinkedIn
                            </a></contain-horizontal>
                        <contain-horizontal style={{justifyContent: 'left', marginBottom: 20}}>
                            <img src={Githublogo} alt="Github logo"
                                 width={20}
                                 height={20}
                                 style={{marginRight: 15}}/>
                            <a href="https://github.com/amellandrew48" target={"_blank"}>
                                Follow me on Github
                            </a>
                        </contain-horizontal>
                        <contain-horizontal style={{justifyContent: 'left', marginLeft: 35, marginBottom: 20}}>
                            <a href={Resume} target="_blank"> {/* Figure out an icon to put here maybe just like the default document icon*/}
                                My Resume
                            </a>
                        </contain-horizontal>
                        <h2>Contact Me:</h2>
                        <text style={{marginBottom:20, marginLeft:35}}>Phone: 612-578-0748</text>
                        <text style={{marginLeft:35}}>Email: amellandrew48@gmail.com</text>

                    </contain-vertical>
                </div1>
            </contain-vertical>

        </contain-horizontal>

        </body>

    )
}

export default App;