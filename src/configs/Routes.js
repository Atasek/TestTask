import React from "react";
import {MainPage} from "../pages/MainPage/MainPage";
import {Form} from "../pages/Form/Form";

export const ROUTES = [
    {
        path: "/",
        name: "Главная",
        element: <MainPage/>,
    },
    {
        path: "create",
        name: "Форма",
        element: <Form/>
    },
]