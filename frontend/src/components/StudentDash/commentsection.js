/*
 This Comment section API is modified from  react-comments-section API.
 Source : https://www.npmjs.com/package/react-comments-section
*/
import React, { useEffect, useState } from "react";
import data from "./data.json";
import { Link } from "react-router-dom";
import { CommentSection } from 'react-comments-section'

const Commentsection = () => {
    const [comment, setComment] = useState(data)
    let count = 0
    comment.map(i => {count+=1; i.replies && i.replies.map(i=> count+=1)} )

    return<div className="commentSection">
        <div className="header">{count} Comments</div>

        <CommentSection currentUser={"SamJ" && { userId: "SamJ", avatarUrl: "https://ui-avatars.com/api/name=Riya&background=random", name: "Samyak" }} commentsArray={comment}
        setComment={setComment} signinUrl="./pages/signin" signupUrl="./pages/signin"/>
        </div>
    
}

export default Commentsection;
