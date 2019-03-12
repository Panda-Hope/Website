// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";

type PreafaceProps = {};

class Preaface extends Component<PreafaceProps>{
    constructor(props: PreafaceProps) {
        super(props)
    }

    render() {
        return (
            <>
                <h2>Vue-DatableTable 组件简介 & 概念介绍：</h2>
                <h3>简介：</h3>
                <p>Vue-DataTable(以下简称：DataTable)是一款基于Vue.js开发的，JSX风格的表格UI组件。</p>
                <p>DataTable基于数据映射视图的理念开发而来，不同于一般Vue表格组件由Table、Column等视图组件组装而成。</p>
                <p>DataTable使您可以通过API的形式来创建表格UI组件，从而更好的抽离视图部分，将逻辑更加集中于业务本身，</p>
                <p>也因此DataTable在理念上也更加偏向于React。</p>
                <h3>基本概念：</h3>
                <p>DataTable通过 <Link to="/datatable" className="tag">Create</Link> API来创建一个新的表格类，DataTable将此API视为一个模板函数，</p>
                <p>每一次调用DataTable将会创建出一个新的表格类，这意味着您可以一次调用，多次使用。例如：</p>
                <iframe width="100%" height="370" src="//jsfiddle.net/MapleStory/zL8cx45p/44/embedded/result,js"
                        allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"></iframe>
                <p>
                    DataTable使用
                    <a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx" className="tag"> vue-jsx </a>
                    进行开发，但并不强制要求使用，DataTable提供了三种方式的风格来进行开发，您可以在
                    <Link to="/datatable" className="tag"> 组件风格 </Link>进行查看。
                </p>
                <p>DataTable仍在完善中...，日后会更具完美。</p>
            </>
        );
    }
}

export default Preaface;