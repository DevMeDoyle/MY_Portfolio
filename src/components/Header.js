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

       
        <div>
            
            

  <div className="container-fluid">

    <div class="background">
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
       <div class="cube"></div>
      <div class="cube"></div>
    </div>

   <header>

     <nav>
        <ul>
           <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
         </ul>
       </nav>

      <div class="logo"><span>N</span></div>

      <section className="header-content">
         <h1>Hi !</h1>
         <h1>My Name is Jimmel</h1>
        <p> Welcome to my studio. I'm a full-stack web developer<br/></p>
        <button>Know more</button>
        <button>Meet me</button>
      </section>
  </header>

          {/* <section className="Header_Section">

                <div className="canvas">

                    <p> WAZ D SCN, I'm <span className="myname">Jimmel Doyle.</span>  <br/> I'm a full-stack web developer </p>

                  <div id="button"> <button id="main_button"> View my work <FaForward/>  </button></div> 


                </div>

                

                    <nav className="Nav_Bar">
                        <main class="link_wrap animate__animated animate__flipInX">
                               <div className="links">  <a href="/"> HOME </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="#About"> ABOUT </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="#Portfolio"> PORTFOLIO </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="/"> BLOG </a> </div> &nbsp;&nbsp;&nbsp;
                               <div className="links">  <a href="/"> CONTACT </a> </div>
                            
                               
                        </main>

                    </nav>


            </section>
    */}
            <section id="About">

                <h1 id="About_h" className="animate__animated animate__flipInX" > About </h1>

                    <div className="about_wrap"> 

                        <div><FaStopwatch className="logos"/><h3>Fast</h3><p>Fast load times and lag free <br/> interaction, my highest priority.</p></div>
                        <div><DiResponsive className="logos"/><h3>Responsive</h3><p>My layouts will work on any <br/> device, big or small.</p></div>
                        <div><MdTouchApp className="logos"/><h3>Intuitive</h3><p>Strong preference for easy to <br/> use, intuitive UX/UI.</p></div>
                        <div><GiRocketFlight className="logos"/><h3>Dynamic</h3><p>Websites don't have to be static, I love <br/> making pages come to life.</p></div>
                    
                    </div>

            
            </section>

            <section id="mybio">

                <div> 

                    <img className="me" src={Mybiopic} alt="that is me" width="260" height="200" /> 
                    <h2>Who's this guy</h2>
                    <p class="typewriter">I'm a Jounior Full Stack Web Developer.<br/> I also work as a Analyst for Fujitsu Caribbean Limited
                        I have a serious passion for IT and Software Development. Lets Me !
                    </p>
                
                </div>

                  <div>
                      
                  <h2>My Skills</h2>

                                <p>HTML</p>
                                <div class="container">
                                <div class="skills html">90%</div>
                                </div>

                                <p>CSS</p>
                                <div class="container">
                                <div class="skills css">80%</div>
                                </div>

                                <p>JavaScript</p>
                                <div class="container">
                                <div class="skills js">65%</div>
                                </div>

                                <p>REACT</p>
                                <div class="container">
                                <div class="skills php">60%</div>
                                </div>
                                                    
                                                    
                      
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
                    <strong>Copyright</strong> by <a href="https://jgthms.com">Jimmel Doyle</a>. Powered by the 
                    <a href="http://opensource.org/licenses/mit-license.php">WeekendhackTT</a>. Find me below
                     .
                    </p>

                </div>

                <div className="socials">
                    
               <a href="/">   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg> </a>   &nbsp;&nbsp;&nbsp;


                    <a href="/">  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>      </a>




                    </div>



            </footer>

        </div>

        </div>

        
    )
}

export default Header
