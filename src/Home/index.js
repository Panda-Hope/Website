// @flow
import React, { Component } from "react";
import "./index.scss";
import CommonHead from "../Head/index";
import QQMusic from "../images/qqmusic.png";
import C from "../images/ea9c52729789b65c929ec6b964d991fa.jpg";

type HomeProps = {};

class Home extends Component<HomeProps> {
    state: Object;

    constructor(props: HomeProps) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={"App"}>
                <CommonHead></CommonHead>
                <div className={"content-body"}>
                    <div className={"aphorism-left"}></div>
                    <div className={"aphorism-right"}></div>
                    <div className={"project-wrapper"}>
                        <a href="">
                            <div className={"project"}>
                                <div className={"cover"}>
                                    <img src={QQMusic} alt="VueDataTable" />
                                </div>
                                <div className={"desc"}>
                                    <span className={"title"}>Vue全家桶+Mint-Ui打造高仿QQMusic，搭配详细说明</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={"project-wrapper"}>
                        <a href="">
                            <div className={"project"}>
                                <div className={"cover"}>
                                    <img src={C} alt="正则表达式解析器" />
                                </div>
                                <div className={"desc"}>
                                    <span className={"title"}>基于NFA(不确定有穷自动机)与自底向上语法分析构造的正则表达式解析器</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className={"project-wrapper"}>
                        <a href="">
                            <div className={"project"}>
                                <div className={"cover"}>
                                    <img src={QQMusic} alt="Game" />
                                </div>
                                <div className={"desc"}>
                                    <span className={"title"}>Vue全家桶+Mint-Ui打造高仿QQMusic，搭配详细说明</span>
                                </div>
                            </div>
                        </a>
                    </div>
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
            </div>
        );
    }
}

export default Home;