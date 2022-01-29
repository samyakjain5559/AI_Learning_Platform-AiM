import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quiz from 'react-quiz-component';
import { quiz2 } from './data';

function quiz() {
    return(
        <Quiz quiz={quiz2}/>
    );
}

export default quiz;