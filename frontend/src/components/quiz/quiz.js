/*/
MIT License

Copyright (c) 2018 Wing Kam Wong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
// React Js Quiz API -- https://www.npmjs.com/package/react-quiz-component
// React Js Image to text API -- https://www.npmjs.com/package/react-image-to-text
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Quizn from 'react-quiz-component';
import { quiz2 } from './data';
import Tesseract from 'tesseract.js';
import { QrReader } from 'react-qr-reader';
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

const Quiz = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const [image, setImage] = useState('');
    const [text, setText] = useState('');
    const [progress, setProgress] = useState(0);
    const [data, setData] = useState('No result');
  
    const handleSubmit = () => {
      setIsLoading(true);
      Tesseract.recognize(image, 'eng', {
        logger: (m) => {
          console.log(m);
          if (m.status === 'recognizing text') {
            setProgress(parseInt(m.progress * 100));
          }
        },
      })
        .catch((err) => {
          console.error(err);
        })
        .then((result) => {
          console.log(result.data);
          setText(result.data.text);
          setIsLoading(false);
        });
    };
    return(
       <div className="container" style={{ height: '100vh' }}>
           <Quizn quiz={quiz2}/>
           <QRCode value="https://wingkwong.github.io/react-quiz-component/" />
       <div className="row h-1">
        <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
          
           <h1 className="text-center py-5 mc-5 justify-content-center">Image To Text</h1>
           
           {!isLoading && !text && (
             <>
               <input
                 type="file"
                 onChange={(e) =>
                   setImage(URL.createObjectURL(e.target.files[0]))
                 }
                 className="form-control mt-5 mb-2"
               />
               <input
                 type="button"
                 onClick={handleSubmit}
                 className="btn btn-primary mt-5"
                 value="Convert"
               />
             </>
           )}
           {!isLoading && text && (
             <>
               <textarea
                 className="form-control w-100 mt-5"
                 rows="30"
                 value={text}
                 onChange={(e) => setText(e.target.value)}
               ></textarea>
             </>
           )}
        </div> 
       </div>
     </div>
    );
}

export default Quiz;