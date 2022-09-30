import React from 'react';
import './TrainerPage.css'; 
import mark from './img/mark.jpeg';
import chad from './img/chad.jpeg';
import andile from './img/andile.jpeg';
import stephen from './img/stephen.jpeg';
import jarrod from './img/jarrod.jpeg';
import miguel from './img/miguel.jpeg';
import dorian from './img/dorian.jpeg';

//missing jeff

export default function TrainerPage() {
    return (
        <div className='container-fluid card bg-black'>
            <h1 className='text-center display-1 text-white'>Our Team</h1>
            <div className='card-body bg-secondary'>
                <div className='row'>
                <div className='col-sm-4 wrap'>
                    <img class="card-img-top" src={mark} alt="" />
                    <div className='text display-6 text-center'>Mark<br></br><br></br>"Your path is more difficult because your calling is higher"</div>
                </div>
                <div className='col-sm-4 wrap'>
                    <img class="card-img-top" src={chad} alt=""/>
                    <div className='text display-6 text-center'>Chad<br></br><br></br>"One foot forward, one day at a time"</div>
                </div>
                <div className='col-sm-4 wrap'>
                    <img class="card-img-top" src={dorian} alt=""/>
                    <div className='text display-6 text-center'>Dorian<br></br><br></br>"The greatest wealth is health, we take it for granted and only realize how important it is when we lose it"</div>
                </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-sm-3 wrap'>
                    <img class="card-img-top" src={jarrod} alt=""/>
                <div className='text display-6 text-center'>Jarrod<br></br><br></br>"Success is not final, failure is not fatal, it is the courage to continue that counts"</div>
                    </div>
                <div className='col-sm-3 wrap'>
                    <img class="card-img-top" src={miguel} alt=""/>
                    <div className='text display-6 text-center'>Miguel<br></br><br></br>"Do today what others won’t, so tomorrow you can do what others can’t"</div>
                </div>
                <div className='col-sm-3 wrap'>
                    <img class="card-img-top" src={andile} alt=""/>
                    <div className='text display-6 text-center'>Andile<br></br><br></br>"You have to put the work in for it to work out"</div>
                </div>
                <div className='col-sm-3 wrap'>
                    <img class="card-img-top" src={stephen} alt=""/>
                    <div className='text display-6 text-center'>Stephen<br></br><br></br>"Do what you hate to do but do it like you love it"</div>
                </div>
                </div>
            </div>
        </div>
)
}
