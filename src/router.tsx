import { 
    Navigate,
    Route,
    createBrowserRouter, 
    createRoutesFromElements 
} from "react-router-dom";
import { AppRoute } from "./common/enums/enums";
import { Home } from "./pages/home/Home";
import { Layout } from "./layout/Layout";

const router = createBrowserRouter(
    createRoutesFromElements([
        <Route path={AppRoute.ROOT} element={<Layout />} >
            <Route path={AppRoute.ROOT} element={<Home />} ></Route>
        </Route>,
        <Route path={AppRoute.ANY} element={<Navigate to={AppRoute.ROOT} replace={true} />} />
    ])
);

export { router };