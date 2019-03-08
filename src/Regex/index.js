// @flow
import React, { Component } from "react";
import CommonHead from "../Head/index";
import "./index.scss";

type RegexProps = {};
type RegexState = {};

class Regex extends Component<RegexProps, RegexState> {
    constructor(props: RegexProps) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <>
                <CommonHead></CommonHead>
                <div className="regex-wrapper">
                    <div className="regex-content">
                        <h2>正则表达式语法：</h2>
                        <dl className="regex-syntax">
                            <dt><h4>数据类型:</h4></dt>
                            <dd>
                                <ul>
                                    <li>. : 匹配任意一个非换行符符号</li>
                                    <li>\d: 匹配0~9的数字</li>
                                    <li>\t: 匹配制表符</li>
                                    <li>\s: 匹配一个空白字符，包括空格、制表符、换页符和换行符</li>
                                    <li>\w: 匹配一个单字字符（字母、数字或者下划线）等价于[A-Za-z0-9_]</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl className="regex-syntax">
                            <dt><h4>运算类型:</h4></dt>
                            <dd>
                                <ul>
                                    <li>(a): 创建一个子正则表达式a</li>
                                    <li>a* : 匹配多次或零次</li>
                                    <li>a|b: 匹配a或者b</li>
                                </ul>
                            </dd>
                        </dl>
                        <dl className="regex-syntax">
                            <dt><h4>例子:</h4></dt>
                            <dd>
                                <ul>
                                    <li>(a): 创建一个子正则表达式a</li>
                                    <li>a* : 匹配多次或零次</li>
                                    <li>a|b: 匹配a或者b</li>
                                </ul>
                            </dd>
                        </dl>
                        <div className="online-test">
                            <div className="input-wrapper">
                                <span className="desc">正则表达式：</span>
                                <input type="input" name="regex" placeholder="" />
                                <span className="desc top">测试字符串：</span>
                                <input type="input" name="string" />
                            </div>
                            <button className="play" title="测验" onMouseEnter={e => e.target.classList.add("active")} onMouseLeave={e => e.target.classList.remove("active")}></button>
                            <span className="result">true</span>
                        </div>
                        <div className="tail-intro">
                            <span>关于正则表达式的更多设计原理，详情请查看 </span>
                            <a href="https://github.com/Panda-Hope/Regex-Resolver">Regex-Resolver</a>
                            <span>。</span>
                        </div>
                    </div>
                    <div className={"foot"}>
                        <span className={"beian"}>备案：湘ICP备19002864号</span>
                    </div>
                </div>
            </>
        );
    }
}

export default Regex;