/*The MIT License (MIT)

Copyright (c) 2011-2018 Twitter, Inc.
Copyright (c) 2011-2018 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.*/
import React, {useEffect, useState} from 'react';

function Course_Lessons_add() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/getlessons');  // /gettweets and /adtweet is running on port of backend
        const items = await data.json();
        setItems(items);
    };

    return(
        // first display this send post request, ie value with name "tweetinput" is published at "/addTweet" URL
        // Then later in backend in handler class we use post methord to get the "req" and value using "tweetInput"

        // Need to implement this search from DB and display matched lessons 
        <section>
            <div> 
                <h1 class="mt-5">Please Enter lessons</h1>
                <form method="POST" action="/do_add_lessons">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="added_lesson" class="form-control" />
                            <input type="submit" value="Send" class="btn btn-primary mb-2" />
                        </div>
                    </div>
                </form>
                {
                    items.map(item => (
                        <div class="container-fluid p-3 w-50">
                            <div class="card-deck">
                                <div class="card">
                                    <div class="card-body p-1">
                                        <p class="card-text"><i>lesson added -- {item.lessons}</i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}
export default Course_Lessons_add;