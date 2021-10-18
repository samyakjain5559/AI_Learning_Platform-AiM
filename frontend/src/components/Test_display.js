import React, {useEffect, useState} from 'react';
// import {Link} from 'react-router-dom';

function Tweet() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/getsignup');  // /gettweets and /adtweet is running on port of backend
        const items = await data.json();
        setItems(items);
    };

    return(
        // first display this send post request, ie value with name "tweetinput" is published at "/addTweet" URL
        // Then later in backend in handler class we use post methord to get the "req" and value using "tweetInput"
        <section>
            <div> 
                <h1 class="mt-5">Test POST/GET Call</h1>
                <form method="POST" action="/do_sign_up">
                    <div class="input-group justify-content-center">
                        <div class="input-group-prepend">
                            <input type="text" name="tweetInput" class="form-control" />
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
                                        <h6 class="card-title">{item.person_id}</h6>
                                        <p class="card-text">{item.person_name}</p>
                                        <p class="card-text"><i>by {item.person_password}</i></p>
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

export default Tweet;