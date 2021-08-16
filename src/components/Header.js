import React from 'react'
import {FaForward} from 'react-icons/fa';
import { FaStopwatch} from 'react-icons/fa';
import { MdTouchApp } from 'react-icons/md';
import { DiResponsive } from 'react-icons/di';
import { GiRocketFlight} from 'react-icons/gi';

const Header = () => {
    return (
        <div>
            
            <section className="Header_Section">

                <div className="canvas">

                    <p> WAZ D SCN, I'm <span className="myname">Jimmel Doyle.</span>  <br/> I'm a full-stack web developer </p>

                  <div id="button"> <button id="main_button"> View my work <FaForward/>  </button></div> 


                </div>

                

                    <nav class="Nav_Bar">
                        <div class="link_wrap">
                               <div className="links">  <a href="/"> HOME </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="/"> ABOUT </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="/"> PORTFOLIO </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="/"> BLOG </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="/"> CONTACT </a> </div>
                            
                               
                        </div>

                    </nav>


            </section>

            <section id="About">

                <h1 className="About_h1"> About </h1>

                {/*<div className="about_wrap"> */}

                    <div><FaStopwatch/><h3>Fast</h3><p>Fast load times and lag free interaction, my highest priority.</p></div>
                    <div><MdTouchApp/><h3>Responsive</h3><p>My layouts will work on any device, big or small.</p></div>
                    <div><DiResponsive/><h3>Intuitive</h3><p>Strong preference for easy to use, intuitive UX/UI.</p></div>
                    <div><GiRocketFlight/><h3>Dynamic</h3><p>Websites don't have to be static, I love making pages come to life.</p></div>
                    

                {/*</section></div>*/}



            </section>

        </div>
    )
}

export default Header
