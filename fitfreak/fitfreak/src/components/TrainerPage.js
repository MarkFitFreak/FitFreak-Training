import React from 'react';
import './TrainerPage.css'; 
import mark from './img/mark.jpeg';
import chad from './img/chad.jpeg';
import linda from './img/linda.jpeg';
import jay from './img/jay.jpeg';
import zak from './img/zak.jpeg';
import ken from './img/ken.jpeg';
import jeff from './img/jeff.jpeg';

//missing jeff

export default function TrainerPage() {
    return (
        <div className='container-fluid card bg-black'>
            <h1 className='text-center display-1 text-white'>Our Team</h1>
            <div className='card-body bg-secondary'>
                <div className='row'>
                <div className='col-sm-4 wrap'>
                    <img class="card-img-top" src={mark} alt="Card image cap"/>
                    <div className='text display-6 text-center'>Mark<br></br><br></br>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</div>
                </div>
                <div className='col-sm-4 wrap'>
                    <img class="card-img-top" src={chad} alt="Card image cap"/>
                    <div className='text display-6 text-center'>Chad<br></br><br></br>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</div>
                </div>
                <div className='col-sm-4 wrap'>
                    <img class="card-img-top" src={jay} alt="Card image cap"/>
                    <div className='text display-6 text-center'>Jay<br></br><br></br>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</div>
                </div>
                </div>

                <div className='row mt-3'>
                    <div className='col-sm-3 wrap'>
                    <img class="card-img-top" src={zak} alt="Card image cap"/>
                <div className='text display-6 text-center'>Zak<br></br><br></br>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</div>
                    </div>
                <div className='col-sm-3 wrap'>
                    <img class="card-img-top" src={ken} alt="Card image cap"/>
                    <div className='text display-6 text-center'>Ken<br></br><br></br>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</div>
                </div>
                <div className='col-sm-3 wrap'>
                    <img class="card-img-top" src={linda} alt="Card image cap"/>
                    <div className='text display-6 text-center'>Linda<br></br><br></br>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</div>
                </div>
                <div className='col-sm-3 wrap'>
                    <img class="card-img-top" src={jeff} alt="Card image cap"/>
                    <div className='text display-6 text-center'>Jeff<br></br><br></br>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</div>
                </div>
                </div>
            </div>
        </div>
)
}
