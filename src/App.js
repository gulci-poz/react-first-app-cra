import React from 'react';
import * as helpers from './helpers';
import foods from './foods';

function App() {
    const foods_orig = foods.slice();
    const chosen = helpers.choice(foods);
    const removed = helpers.remove(foods, chosen);

    return (
        <div>
            <p>Available fruit:</p>
            <ul style={{listStyle: "none", margin: 0}}>
                {foods_orig.map((e, i) => <li style={{display: "inline", marginRight: "20px"}}
                                              key={i + '_' + e}>{e}</li>)}
            </ul>
            <p>I'd like: {chosen}</p>
            <p>You choose: {removed}</p>
            <p>Now available:</p>
            <ul style={{listStyle: "none", margin: 0}}>
                {foods.map((e, i) => <li style={{display: "inline", marginRight: "20px"}} key={i + '_' + e}>{e}</li>)}
            </ul>
        </div>
    );
}

export default App;
