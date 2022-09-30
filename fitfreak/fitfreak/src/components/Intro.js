import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import background from './img/background.jpg';
import team from './img/team.jpeg';
import './Intro.css';

export default function Intro() {
  return (
    <div>
      <div className = "imgs">
        <img className="center-fit" src = {team}/> //put this into container with text so minimizing browser doesn't mess with text
        <div className="centered">FITFREAK</div>
        <div className="centered">MOVE. IMPROVE. REPEAT.</div>
        <img className="center-fit" src = {background}/>
        <div className="centered2">Address: 1 Corwen St, Claremont, Cape Town, 7708, South Africa</div>
        <div className="centered-bottom2">Hours: 6:00 AM - 7:00 PM</div>
      </div>
        <p>
        FITFREAK (use logo)

MOVE. IMPROVE. REPEAT.

At FitFreak we train smart.

We are more than just a place to break sweat – we’re an incubator for achieving the best version of yourself. 

This is the basis of the FitFreak philosophy. 

------------

Whether you’re a novice or a competing athlete, a well-rounded training program is essential to your overall wellbeing. 

Movement and technique form the basis of our fitness regimens, with rehabilitation and injury prevention our specialised fundamental focus areas. 

Through benchmarked movement assessments, we coach you to strengthen your body movement patterns, prevent injury, and educate you to become more self-aware. 

The success of this unconventional training approach is proven by the results our clientele boast. Not only are they surpassing their personal fitness goals— be it weight loss, or increased performance — they are doing it in a safe environment under the FitFreak team’s eagle eyes. 

------------


Accountability. Community. Prehab. Strength Training. Positive Energy. 

These are the by 5 pillars by which we are driven — and the same pillars we use to guide you on your fitness and wellness journey. 


Personal Training:
A great way to start your journey. With a designated PT by your side, you’re guaranteed an even closer alignment with your personal goals.
We offer sessions focused on, but not limited to: 
•	Rehab: making sure you come back stronger post injury, or
•	Prehab: ensuring that your body is at optimal performance to support you.

Group Training:
We work as a team to create regimens that are safe, dynamic, and ultimately remain challenging. 

Our team will be there to support you during these sessions.

Run Crew:
This is a social affair. We come together to run together, safely. 

Begin your running journey or improve your running performance by joining this group of like-minded individuals. 

*Join the FitFreak tribe* 

Our trainers are friendly and lead by example. They are paramount in building the FitFreak community. Through their expert support, you’ll exceed your own expectations and achieve success beyond what you ever thought possible. 

        </p>
    </div>
  )
  }



