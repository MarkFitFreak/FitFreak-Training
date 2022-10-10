import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import background from './img/background.jpg';
import team from './img/team.jpeg';
import './Intro.css';

export default function Intro() {
  return (
    <div className = "dark font2">
      <div className = "center-fit imgs">
        <img className="center-fit" src = {team}/>
        <div className = "centered">
          <div className = "text-center">
            <b className = "fontUp font2">FITFREAK</b>
            <br></br>
            <b className = "fontUp1 font2">MOVE. IMPROVE. REPEAT.</b>
          </div>

        </div>
      </div>
      <div>
          <img className="center-fit" src = {background}/>
          <div className = "text-center imgs">
            <br></br>
            <b></b>
          </div>
      </div>
      <p className="experience container font2">
        We are the more than just a place to break sweat – we’re an incubator for achieving the best version of yourself. 
        <br></br>
        <br></br>
        This is the basis of the <b>FitFreak</b> philosophy.
        <br></br>
        <br></br>
      </p>
      <p className='container experience1 font2'>
        Whether you’re a novice or a competing athlete, a well-rounded training program is essential to your overall wellbeing. 

        Movement and technique form the basis of our fitness regimens, with rehabilitation and injury prevention our specialised fundamental focus areas. 

        Through benchmarked movement assessments, we coach you to strengthen your body movement patterns, prevent injury, and educate you to become more self-aware. 

        The success of this unconventional training approach is proven by the results our clientele boast. Not only are they surpassing their personal fitness goals— be it weight loss, or increased performance — they are doing it in a safe environment under the FitFreak team’s eagle eyes.
        <br></br>
        <br></br>
      </p>
      <p className='container experience'>
        <br></br>
        <b className='red fontInc font2'>Accountability. Community. Prehab. Strength Training. Positive Energy.</b>
        <br></br>
        <br></br>
      </p>
      <p className='container experience1'>
        <br></br>
        These are the by <b>5 pillars</b> by which we are driven — and the same pillars we use to guide you on your fitness and wellness journey. 
        <br></br>
        <br></br>
      </p>
      <p className = "container experience1">
        <br></br>
        <b>Personal Training:</b> A great way to start your journey. With a designated PT by your side, you’re guaranteed an even closer alignment with your personal goals.
        We offer sessions focused on, but not limited to:
        <br></br>
        •	Rehab: making sure you come back stronger post injury, or
        <br></br>
        •	Prehab: ensuring that your body is at optimal performance to support you.
        <br></br>
        <br></br>
        <b>Group Training:</b> We work as a team to create regimens that are safe, dynamic, and ultimately remain challenging. 

        Our team will be there to support you during these sessions.

        <br></br>
        <br></br>

        <b>Run Crew:</b> This is a social affair. We come together to run together, safely. 

        Begin your running journey or improve your running performance by joining this group of like-minded individuals.

        <br></br> 
        <br></br>
        </p>
      <p className='container experience red fontInc'>
        <b>*Join the FitFreak tribe*</b>
      </p>
      <p className='container experience1'>
        <br></br>
        <br></br> 

        Our trainers are friendly and lead by example. They are paramount in building the FitFreak community. Through their expert support, you’ll exceed your own expectations and achieve success beyond what you ever thought possible. 
        <br></br>
        <br></br>
      </p>
    </div>
  )
  }



