import React from 'react';
import abhishek from './Abhishek.jpeg'
import "./Resume.css";
function Resume(){
    return(
        <>
        <div className="Resume">
            <div className="header">
                <div className ="about">
                    ABHISHEK SHARMA
                    <div className="name">Programmer/User Interface Developer</div><br/>
                </div>
                <img src={abhishek} alt="profile img" className="profile"/>

            </div>
            <div className="info">
                <div className="contactprofile">
                <div className="Contact">
                    <div className="heading">Contact</div>
                    <hr width="100%"/>
                        
                            <div><i class="fab fa-linkedin"></i>  Abhishek Sharma</div>
                            <span><i class="fas fa-envelope"></i> 19bcs1821@gmail.com</span>
                            <div><i class="fas fa-phone"></i>  9882641949</div>
                            <div><i class="fas fa-home"></i>  Talai, HP, 174030 </div>
                </div>
                <div className="Profiles">
                    <div className="heading">Profile</div>
                    <hr width="100%" align right/>
                        <p>An ambitious individual who is looking to broaden my career path. My background lays mostly in Front End Development, currently trying to perfect MERN Stack. I've done a 45 days internship in React at Solitaire Infosys, Mohali. I am an an enthusiastic learner always experimenting as much as i can. I dont learn to succeed, but learm as much as i can until i'm a prodigy in whatever topic im trying to learn. I give my 100% in any field i go and create a motivating vibe all around me. I can easily take up leadership jobs and lead a team with patience and efficiency. 
                        </p>
                    </div>
                </div>
                <div className="ees">
                    <div className="Education">
                        <div className="heading">Education</div>   
                        <hr width="135%"/>
                        <h4>B.E. Computer Science</h4>
                        <h5>Chandigarh University<br/>2019-2023</h5>
                    </div>
                    <div className="Expe">
                        <div className="heading">Expertise</div> 
                        <hr width="135%"/>
                        Web Development<br/>
                        Creative Thinking<br/>
                        User Interface Designing
                    </div>
                    <div className="Language">
                        <div className="heading">Languages</div> 
                        <hr width="135%"/>
                        React.js, Html, Css<br/>
                        My Sql<br/>
                        C/C++
                    </div>
                </div>
                {/* <div className="heading">Professional Experience</div> 
                <hr width="100%"/>

                <div className="Proexper">

                    <div className="expyears">
                        2015-Present
                    </div>
                    <div ClassName="company">
                        <p><h3>Enter Job Title Here /</h3><h5>Enter Company Here</h5></p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim placeat consequuntur iusto perspiciatis quibusdam, quod iste velit eos laudantium itaque libero unde molestiae sunt, commodi modi veniam tempore, expedita facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, possimus earum. Unde quos aut quis laboriosam nam, culpa voluptatum alias ea corrupti, architecto impedit veritatis minima dolore, earum mollitia delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veritatis, sit tempore mollitia iure ex maxime soluta quas eius. Tenetur excepturi nobis commodi praesentium facere qui consequatur quia eveniet dolores?</p>
                    </div>
                     
                </div>
                <div className="Proexper">

                    <div className="expyears">
                         2012 -2015
                    </div>
                    <div ClassName="company">
                        <p><h3>Enter Job Title Here /</h3><h5>Enter Company Here</h5></p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim placeat consequuntur iusto perspiciatis quibusdam, quod iste velit eos laudantium itaque libero unde molestiae sunt, commodi modi veniam tempore, expedita facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, possimus earum. Unde quos aut quis laboriosam nam, culpa voluptatum alias ea corrupti, architecto impedit veritatis minima dolore, earum mollitia delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum veritatis, sit tempore mollitia iure ex maxime soluta quas eius. Tenetur excepturi nobis commodi praesentium facere qui consequatur quia eveniet dolores?</p>
                    </div>
                     
                </div> */}
            </div>
        </div>
        </>

    );

}


export default Resume;