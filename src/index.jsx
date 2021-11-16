import React from 'react';
import ReactDOM from 'react-dom'
import { FavoriteColor } from './Hooks/intro';
import { Counter, Timer, Timer3 } from './Hooks/useEffect';

ReactDOM.render(
    <>
        <FavoriteColor />
        <Timer />
        <Counter />
    </>,    
    document.getElementById("root")
);