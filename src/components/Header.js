import React from 'react'
import {FaForward} from 'react-icons/fa';
import { FaStopwatch} from 'react-icons/fa';
import { MdTouchApp } from 'react-icons/md';
import { DiResponsive } from 'react-icons/di';
import { GiRocketFlight} from 'react-icons/gi';
import Mybiopic from "../assets/img/mybiopic.jpg"
import Hotelsite from "../assets/img/Hotelsite.PNG"
import Irving from "../assets/img/irvinggympic.PNG"
import "animate.css"

const Header = () => {
    return (

        <>
        <div>
            
            <section className="Header_Section">

                <div className="canvas">

                    <p> WAZ D SCN, I'm <span className="myname">Jimmel Doyle.</span>  <br/> I'm a full-stack web developer </p>

                  <div id="button"> <button id="main_button"> View my work <FaForward/>  </button></div> 


                </div>

                

                    <nav class="Nav_Bar">
                        <main class="link_wrap">
                               <div className="links">  <a href="/"> HOME </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="#About"> ABOUT </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="#Portfolio"> PORTFOLIO </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="/"> BLOG </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="/"> CONTACT </a> </div>
                            
                               
                        </main>

                    </nav>


            </section>

            <section id="About">

                <h1 id="About_h" className="animate__animated animate__flipInX" > About </h1>

                    <div className="about_wrap"> 

                        <div><FaStopwatch className="logo"/><h3>Fast</h3><p>Fast load times and lag free <br/> interaction, my highest priority.</p></div>
                        <div><DiResponsive className="logo"/><h3>Responsive</h3><p>My layouts will work on any <br/> device, big or small.</p></div>
                        <div><MdTouchApp
                        
                        className="logo"/><h3>Intuitive</h3><p>Strong preference for easy to <br/> use, intuitive UX/UI.</p></div>
                        <div><GiRocketFlight className="logo"/><h3>Dynamic</h3><p>Websites don't have to be static, I love <br/> making pages come to life.</p></div>
                    
                    </div>

            
            </section>

            <section id="mybio">

                <div> 

                    <img className="me" src={Mybiopic} alt="that is me" width="260" height="200" /> 
                    <h2>Who's this guy</h2>
                    <p class="typewriter">I'm a Jounior Full Stack Web Developer. I also work as a Analyst for Fujitsu Caribbean Limited
                        I have a serious passion for IT and Software Development. Lets Me !
                    </p>
                
                </div>


            </section>

            <section className="Projects" id="Portfolio"> 

            <h1>Projects</h1>

            <div className="filters">
                


                    <div><h3>HTML/CSS</h3> </div>
                    <div><h3>JAVASCRIPT</h3></div>
                    <div> <h3>REACT-JS</h3></div>
                   
            
            </div>
            
            <div className="Web_Sites"> 

                <div><img src={Hotelsite} className="webpics" alt="that is me" /> </div>
                <div><img src={Irving } className="webpics" alt="that is me" /> </div>
                <div><img src={Mybiopic} className="webpics" alt="that is me" /> </div>

            </div>
            
            </section>

            <section className="Contact">

                <h1 className="animate__animated animate__bounce"> Contact</h1>

                <p>Have a question or want to work together ?</p>

                
                    <form className="forms">
                        <input className="Box1" placeholder="Name" type="text" name="name" required /><br/>
                        <input className="Box1" placeholder="Enter Email" type="email" name="email" required /><br/>
                        <textarea ClassName="Box2" class="textarea is-danger" placeholder="Your Message"/>
                        <input className="button" type="submit" id="submit" value="SUBMIT"/>
                    </form>
                   


            </section>

            <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                    <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                    <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                    is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                    </p>
                </div>
</footer>

        </div>
        </>
    )
}

export default Header
