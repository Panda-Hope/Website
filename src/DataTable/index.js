// @flow
import React, { Component } from "react";
import {Link, Route, Switch} from "react-router-dom";
import CommonHead from "../Head/index";
import FixedTable from "./fixed-table";
import Group from "./group";
import Preface from "./preface";
import Start from "./start";
import Sort from './sort';
import Custom from './custom';
import DataMap from './datamap';
import Third from "./third";
import "./index.scss";

type DatabTableProps = {
    location: Object
};
type DatabTableState = {};

class DataTable extends Component<DatabTableProps, DatabTableState> {
    paths: Array<{path: string, component: Object, name: string}>;

    constructor(props: DatabTableProps) {
        super(props);

        this.paths = [
            {
                path: "/datatable/preface",
                component: Preface,
                name: "前言"
            },
            {
                path: "/datatable/start",
                component: Start,
                name: "开始使用"
            },
            {
                path: "/datatable/fixed-table",
                component: FixedTable,
                name: "固定表头 & 固定列"
            },
            {
                path: "/datatable/group",
                component: Group,
                name: "表头分组 & 动态表格"
            },
            {
                path: "/datatable/sort",
                component: Sort,
                name: "多选 & 排序"
            },
            {
                path: "/datatable/custom",
                component: Custom,
                name: "自定义表头 & 模板"
            },
            {
                path: "/datatable/datamap",
                component: DataMap,
                name: "DataMap 数据映射"
            },
            {
                path: "/datatable/third",
                component: Third,
                name: "与第三方UI整合"
            }
        ];
    }

    resetScroll = () => {
        document.documentElement.scrollTop = 0;
    };

    render() {
        return (
            <>
                <CommonHead></CommonHead>
                <div className="doc-wrapper">
                    <div className="directory-wrapper">
                        <ul className="side-bar">
                            <li>
                                {
                                    this.paths.map(
                                        (item, index) =>
                                            <Link key={index}
                                                  to={item.path}
                                                  className={["title", item.path === this.props.location.pathname && "active"].join(" ")}
                                                  onClick={this.resetScroll}>
                                                {item.name}
                                            </Link>
                                    )
                                }
                            </li>
                        </ul>
                    </div>
                    <div className="doc-body">
                        <Switch>
                            {
                                this.paths.map((item, index) => <Route key={index} path={item.path} component={item.component} />)
                            }
                        </Switch>
                    </div>
                    <div className={"beian"}>
                        <span className={"beian"}>备案：湘ICP备19002864号</span>
                    </div>
                </div>
            </>
        );
    }
}

export default DataTable;