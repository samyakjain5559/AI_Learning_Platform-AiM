import React from 'react';

import { Speech } from './Speech';
import SentimentChart from './Chart';

function FeedbackAI() {

    return ( <
        div >
        <
        h2 > Quickview: Student < /h2> <
        Speech / >
        <
        h2 > Quickview: Admin < /h2> <
        SentimentChart / >
        <
        /div>
    );
}
export default FeedbackAI;