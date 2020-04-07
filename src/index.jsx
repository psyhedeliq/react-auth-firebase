import React from 'react';
import { render } from 'react-dom';
import { App } from './component/app';

const renderHere = document.querySelector('#renderHere');

render(<App />, renderHere);
