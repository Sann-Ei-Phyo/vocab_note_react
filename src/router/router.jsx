import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../Layout/Layout";
import User from "../pages/User/User";
import Note from "../pages/Note/Note";
import Card from "../pages/Card/Card";
import Register from "../pages/User/Register";
import Login from "../pages/User/Login";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import RevisedWord from "../pages/RevisedWord/RevisedWord";
import Quiz from "../pages/RevisedWord/Quiz";
import Score from "../pages/RevisedWord/Score";
import Home from "../pages/Home";

const Router = () => {
    const config = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: "/vocab",
            element: <Layout />,
            children: [          
            {
                path:"/vocab/note",
                element: <ProtectedRoute><Note/></ProtectedRoute>,
            },
            {
                path:"/vocab/revise",
                element: <ProtectedRoute><RevisedWord/></ProtectedRoute>,
                
            },

            {
                path: "/vocab/revise/quiz",
                element: <ProtectedRoute><Quiz/></ProtectedRoute>
               },

               {
                path: "/vocab/revise/quiz/score",
                element: <ProtectedRoute><Score /></ProtectedRoute>
               }
            ],
        },
        {
            path:"/user",
            element : <User/>

        },

        {
            path:"/register",
            element : <Register/>

        },
        {
            path:"/login",
            element : <Login/>

        },
        {
            path:"*",
            element : <NotFound />

        }
    ]);

    return <RouterProvider router={config} />;
};

export default Router;
