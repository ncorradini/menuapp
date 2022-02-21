import { useRoutes, Navigate } from 'react-router-dom';

// Pages
import Login from '../pages/Login';
import User from '../pages/User';

// Components
import Searcher from '../components/User/Searcher';

const Routing = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/user",
            element: <User />,
            children: [
                { path: "/user/searcher", element: <Searcher /> }
            ]
        },
        { path: "*", element: <Navigate to="/" /> }
    ]);

    return routes;
}

export default Routing;