import AboutPage from "../pages/about/AboutPage";
import {RootLayout} from "../layouts";
import {createBrowserRouter} from "react-router-dom";
import {AdPage, ContactPage, HomePage, NotFoundPage, PrivacyPolicyPage, SearchPage} from "../pages";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "ads/:adId",
                element: <AdPage/>
            },
            {
                path: "search",
                element: <SearchPage/>
            },
            {
                path: "contact",
                element: <ContactPage/>
            },
            {
                path: "about",
                element: <AboutPage/>
            },
            {
                path: "privacy-policy",
                element: <PrivacyPolicyPage/>
            }
        ],
    },
    {
        path: "*",
        element: <NotFoundPage/>
    }
])