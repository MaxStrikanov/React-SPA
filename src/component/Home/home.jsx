import React, { Fragment } from 'react';
import { SOCIAL, 
  COMPANY_PROFILE,
         SLIDER 
       } from '../../constants/constants';
import './home.css';


const Home = () => (
  <Fragment>
    <h1 className="title"><span>Услиги в сфере систем безопасности.</span></h1>
  <div className="slider">
  	<div className="item">
    {SLIDER.map(({
        id, imageLink, imgHeight, imgWidth
      }) => (
       <img src={imageLink} height={imgHeight} width={imgWidth} alt={id} />
      ))}
    </div>
  </div>
<br></br>

    <h3><span>Профиль компании:</span></h3>
    <ul className="com-prof">
      {COMPANY_PROFILE.map(({ id, name, link }) => (
        <li className="com-prof-item" key={id}>
          <a className="com-prof-link" href={link} rel="noopener noreferrer" target="_blank">{name}</a>
        </li>
      ))}
    </ul>
    
  </Fragment>
);

export default Home;
