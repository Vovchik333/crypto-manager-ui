import { 
    Navigate,
    Route,
    createBrowserRouter, 
    createRoutesFromElements 
} from "react-router-dom";
import { AppRoute } from "../../../common/enums/enums";
import { Home } from "../../home/Home";
import { Layout } from "../layout/Layout";
import { SignUp } from "../../auth/SignUp";
import { SignIn } from "../../auth/SignIn";
import { PublicRoute } from "../../../components/public-route/PublicRoute";
import { Portfolios } from "../../portfolios/Portfolios";
import { PrivateRoute } from "../../../components/private-route/PrivateRoute";

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path={AppRoute.ROOT} element={<Layout />} >
            <Route 
                path={AppRoute.ROOT} 
                element={<PublicRoute><Home /></PublicRoute>} 
            ></Route>
            <Route 
                path={AppRoute.SIGN_IN} 
                element={<PublicRoute><SignIn /></PublicRoute>} 
            ></Route>
            <Route 
                path={AppRoute.SIGN_UP} 
                element={<PublicRoute><SignUp /></PublicRoute>} 
            ></Route>
            <Route 
                path={AppRoute.PORTFOLIOS} 
                element={<PrivateRoute><Portfolios /></PrivateRoute>} 
            ></Route>
        </Route>,
        <Route path={AppRoute.ANY} element={<Navigate to={AppRoute.ROOT} replace={true} />} />
    ])
);

export { router };