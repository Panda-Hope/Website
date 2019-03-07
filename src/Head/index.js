// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import title from "../images/1551872178_821284.png";
import avatar from "../images/UNADJUSTEDNONRAW_thumb_7f.jpg";
import github from "../images/GitHub-brave-hed.jpg";
import "./index.scss";

type CommonHeadProps = {};
type CommonHeadState = {
    img: string,
    imgAnimate: ?string
};

class CommonHead extends Component<CommonHeadProps, CommonHeadState> {
    timer: ?TimeoutID;

    constructor(props: CommonHeadProps) {
        super(props);

        this.state = {
            img: avatar,
            imgAnimate: undefined
        };
        this.toggleImg = this.toggleImg.bind(this);
    }

    toggleImg = (type: string) => {
        if (type === "enter") {
            this.setState({img: github, imgAnimate: "fadeIn"});
            clearTimeout(this.timer);
        }else {
            this.timer = setTimeout(() => {
                this.setState({img: avatar, imgAnimate: undefined});
            }, 3000);
        }
    };

    render() {
        return (
            <div className={"common-head"}>
                <div className={"content"}>
                    <div className={"title"}>
                        <img src={title} />
                        <div className={"avatar"}>
                            <a className={["link", this.state.imgAnimate].join(" ")}
                               href={"https://github.com/Panda-Hope"}
                               title="我的github"
                               onMouseEnter={() => this.toggleImg("enter")}
                               onMouseLeave={() => this.toggleImg("leave")}>
                                <img src={this.state.img} />
                            </a>
                        </div>
                    </div>

                    <div className={"head-menu"}>
                        <div className={"item"}>
                            <Link to={"/"}>
                                <span className={"icon home"}></span>
                                <span className={"name"}>首页</span>
                            </Link>
                        </div>
                        <div className={"item"}>
                            <Link to={"/myfoot"}>
                                <span className={"icon foot"}></span>
                                <span className={"name"}>我的足迹</span>
                            </Link>
                        </div>
                        <div className={"item"}>
                            <Link to={"/music"}>
                                <span className={"icon music"}></span>
                                <span className={"name"}>音乐</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommonHead;