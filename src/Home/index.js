// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import CommonHead from "../Head/index";
import QQMusic from "../images/qqmusic.png";
import C from "../images/ea9c52729789b65c929ec6b964d991fa.jpg";
import VueLogo from "../images/favicon.png";

type HomeProps = {};

class Home extends Component<HomeProps> {
    state: Object;

    constructor(props: HomeProps) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <CommonHead></CommonHead>
                <div className={"content-body"}>
                    <div className={"aphorism-left"}></div>
                    <div className={"aphorism-right"}></div>
                    <div className={"project-wrapper"}>
                        <Link to="/datatable/preface">
                            <div className={"project"}>
                                <div className={"cover"}>
                                    <img src={VueLogo} alt="VueDataTable" />
                                </div>
                                <div className={"desc"}>
                                    <span className={"title"}>Vue-DataTable 基于Vue.js，是一款由数据驱动的JSX风格的表格UI组件</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className={"project-wrapper"}>
                        <Link to="/regex">
                            <div className={"project"}>
                                <div className={"cover"}>
                                    <img src={C} alt="正则表达式解析器" />
                                </div>
                                <div className={"desc"}>
                                    <span className={"title"}>基于NFA(不确定有穷自动机)与自底向上语法分析构造的正则表达式解析器</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/*<div className={"project-wrapper"}>*/}
                        {/*<a href="/">*/}
                            {/*<div className={"project"}>*/}
                                {/*<div className={"cover"}>*/}
                                    {/*<img src={QQMusic} alt="Game" />*/}
                                {/*</div>*/}
                                {/*<div className={"desc"}>*/}
                                    {/*<span className={"title"}>Vue全家桶+Mint-Ui打造高仿QQMusic，搭配详细说明</span>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</a>*/}
                    {/*</div>*/}
                    <div className={"project-wrapper"}>
                        <a href="https://github.com/Panda-Hope/vue-qqmusic">
                            <div className={"project"}>
                                <div className={"cover"}>
                                    <img src={QQMusic} alt="Vue全家桶+Mint-Ui打造高仿QQMusic" />
                                </div>
                                <div className={"desc"}>
                                    <span className={"title"}>Vue全家桶+Mint-Ui打造高仿QQMusic，搭配详细说明</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className={"foot"}>
                    <span className={"beian"}>备案：湘ICP备19002864号</span>
                </div>
            </>
        );
    }
}

export default Home;