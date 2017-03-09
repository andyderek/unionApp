import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import JobInput from './jobInput/jobInput';
import HoursInput from './hoursInput/hoursInput';

ReactDOM.render(<JobInput/>, document.getElementById('app'));