import { createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import { Layout } from "./pages/Layout";
import { SettingPage } from "./pages/SettingPage";
import { Languages } from "./components/SettingPage/Languages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement : <ErrorPage />,
        children: [
            {path:'settings' , element: <SettingPage />,
             children:[
                {path: 'language' ,element: <Languages />}
             ]
            }
        ]
    }
]);
export default router;