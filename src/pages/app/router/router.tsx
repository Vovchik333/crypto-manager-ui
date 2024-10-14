import { 
    Navigate,
    Route,
    createBrowserRouter, 
    createRoutesFromElements 
} from "react-router-dom";
import { AppRoute } from "@/common/enums";
import { Home } from "@/pages/home/Home";
import { Layout } from "@/pages/layout/Layout";
import { SignUp } from "@/pages/auth/SignUp";
import { SignIn } from "@/pages/auth/SignIn";
import { PublicRoute } from "@/lib/components/route/public-route/PublicRoute";
import { Portfolios } from "@/pages/portfolios/Portfolios";
import { PrivateRoute } from "@/lib/components/route/private-route/PrivateRoute";

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