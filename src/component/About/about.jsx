import React, { Fragment } from 'react';
import './about.css';


const About = () => (
  <Fragment>
<h1><span className = "about_h">6 причин работать с нами</span></h1>     
<div className = "conteiner">
    <div className="card-conteiner">
        <div className="card">
            <div className="front">
                <p className = "number-card">01</p>
            </div>
            <div className="back">
                <p>СТРОГОЕ СОБЛЮДЕНИЕ СРОКОВ
                   <br></br>работаем 24 часа в сутки 7
                   дней в неделю</p>
            </div>
        </div>
    </div>
    <div className="card-conteiner">
        <div className="card" >
  	        <div className="front">
                <p className = "number-card">02</p>
            </div>
  	        <div className="back">
                <p>РАБОТАЕМ С ЛЮБЫМИ ОБЪЕКТАМИ <br></br> как с частными, так и с коммерческими</p>
            </div>
        </div>
    </div>
    <div className="card-conteiner">
        <div className="card" >
  	        <div className="front">
                <p className = "number-card">03</p>
            </div>
  	        <div className="back">
                <p>РАБОТАЕМ С ЛЮБЫМИ ОБЪЕКТАМИ <br></br> как с частными, так и с коммерческими</p>
            </div>
        </div>
    </div>
</div> 
<div className = "conteiner"> 
    <div className="card-conteiner">
        <div className="card" >
  	        <div className="front">
                <p className = "number-card">04</p>
            </div>
  	        <div className="back">
                <p>РАБОТАЕМ С ЛЮБЫМИ ОБЪЕКТАМИ <br></br> как с частными, так и с коммерческими</p>
            </div>
        </div>
    </div>
    <div className="card-conteiner">
        <div className="card" >
  	        <div className="front">
                <p className = "number-card">05</p>
            </div>
  	        <div className="back">
                <p>РАБОТАЕМ С ЛЮБЫМИ ОБЪЕКТАМИ <br></br> как с частными, так и с коммерческими</p>
            </div>
        </div>
    </div>
    <div className="card-conteiner">
        <div className="card" >
  	        <div className="front">
                <p className = "number-card">06</p>
            </div>
  	        <div className="back">
                <p>РАБОТАЕМ С ЛЮБЫМИ ОБЪЕКТАМИ <br></br> как с частными, так и с коммерческими</p>
            </div>
        </div>
    </div>
</div>  
   </Fragment>
);

export default About;
