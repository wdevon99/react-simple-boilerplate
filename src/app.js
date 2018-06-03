
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch    - NOT NEEDED

import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css'; //to reaset dafualt browser css behaviour
import './styles/style.scss';

ReactDOM.render(<p> Boilerplate </p>, document.getElementById("app"));

