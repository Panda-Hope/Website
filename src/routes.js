// @flow
import Home from "./Home/index";
import Regex from "./Regex/index";
import DataTable from "./DataTable/index";
import Preface from "./DataTable/preface";

export default [
    {
        path: "/",
        component: Home
    },
    {
        path: "/regex",
        component: Regex
    },
    {
        path: "/datatable",
        component: DataTable,
        routes: {
            path: "/datatable/preface",
            component: Preface
        }
    },
    {
        path: "*",
        component: Home
    }
];