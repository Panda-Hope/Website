// @flow
import React, { Component } from "react";
import CommonHead from "../Head/index";
import axios from "axios";
import "./index.scss";
type RegexProps = {};
type RegexState = {
    result: string
};

class Regex extends Component<RegexProps, RegexState> {
    regexInput: Object;
    testInput: Object;

    constructor(props: RegexProps) {
        super(props);

        this.state = {
            result: "true"
        };
        this.regexInput = React.createRef();
        this.testInput = React.createRef();
    }

    regexCheck = () => {
        if (!this.regexInput.current.value) return;

        axios.get("http://api.liangljuan.com/", {
            params: {
                regex: this.regexInput.current.value,
                test: this.testInput.current.value
            }
        }).then(res => {
            this.setState({
                result: res.data.result
            });
        });
    };

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
                                    <li>\ : 字符转意符</li>
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
                                    <li>正则表达式：(a|b)*c <span style={{marginLeft: "15px"}}>测试字符串："aabbbc"</span></li>
                                    <li>正则表达式：\d+|\s <span style={{marginLeft: "22px"}}>测试字符串："9 "</span></li>
                                </ul>
                            </dd>
                        </dl>
                        <div className="online-test">
                            <div className="input-wrapper">
                                <span className="desc">正则表达式：</span>
                                <input onInput={this.regexCheck} ref={this.regexInput} type="input" name="regex" placeholder="例如：(a|b)\d*" />
                                <span className="desc top">测试字符串：</span>
                                <input onInput={this.regexCheck} ref={this.testInput} type="input" name="string" placeholder="例如：a1234" />
                            </div>
                            <button onClick={this.regexCheck} className="play" title="测验" onMouseEnter={e => e.target.classList.add("active")} onMouseLeave={e => e.target.classList.remove("active")}></button>
                            <span className="result">{this.state.result}</span>
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