import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../featuers/home/HomePage";
import Catalog from "../../featuers/catalog/Catalog";
import ProductDetails from "../../featuers/catalog/ProductDetails";
import AboutPage from "../../featuers/about/AboutPage";
import ContacPage from "../../featuers/contact/ContacPage";
import ServerError from "../error/ServerError";
import NotFound from "../error/notFound";
import BasketPage from "../../featuers/basket/basketPage";
import CheckoutPage from "../../featuers/checkout/checkoutPage";
import LoginForm from "../../featuers/account/LoginForm";
import RegisterForm from "../../featuers/account/RegisterForm";
import RequireAuth from "./RequireAuth";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {element: <RequireAuth/>, children: [
                    { path: 'checkout', element: <CheckoutPage /> }
                ]},
            {path: '', element: <HomePage /> },
             {path: 'catalog', element: <Catalog /> },
            {path: 'catalog/:id', element: <ProductDetails /> },
            {path: 'about', element: <AboutPage /> },
            {path: 'contact', element: <ContacPage /> },
             {path: 'basket', element: <BasketPage /> },
             {path: 'checkout', element: <CheckoutPage/> },
            {path: 'server-error', element: <ServerError />},
            {path: 'login', element: <LoginForm />},
            {path: 'register', element: <RegisterForm />},
             {path: 'not-found', element: <NotFound />},
             {path: '*', element: <Navigate replace to='/not found' />}

            ]
        },
])