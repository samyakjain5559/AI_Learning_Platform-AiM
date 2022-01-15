import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = props => {
    const user = null;

    if (!user) {
       return <Redirect to="/signin" />
    } else {
        return <Route {...props} />
    }
}