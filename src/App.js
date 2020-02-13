import React from 'react';

import Navigation from './component/Navigation/navigation';
import Main from './component/Main/main';
import RegistrationForm from './component/Registration/form'

const App = ({ children }) => [
  <Navigation key="navigation" />,
  <Main key="main">
    {children}
  </Main>,
];

export default App;
