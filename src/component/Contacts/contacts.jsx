import React, { Fragment } from 'react';
import { SOCIAL } from '../../constants/constants';
import './contacts.css';


const Contacts = () => (
  <Fragment>
    <h3><span>Мы в социальных сетях:</span></h3>
    <ul className="socialList">
      {SOCIAL.map(({
        id, socialLink, imageLink, imgHeight,
      }) => (
        <li key={id} className="socialItem">
          <a className="socialLink" href={socialLink} rel="noopener noreferrer" target="_blank">
            <img src={imageLink} height={imgHeight} alt={id} />
          </a>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default Contacts;