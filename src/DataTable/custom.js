// @flow
import React from "react";

export default function() {
    return (
        <>
            <h3>自定义表头</h3>
            <p>
                在DataTable，您可以通过表格列属性
                <span className="prop"> headRender: Object | (h, column) => VNode </span>
                来设置自定义表头。
            </p>
            <p>headRender 属性接受一个Vue组件对象或者一个返回VNode节点的函数，如果是Vue组件，那么传给函数的参数将会作为</p>
            <p>Props传递给组件。</p>
            <iframe width="100%" height="400" src="//jsfiddle.net/MapleStory/zL8cx45p/179/embedded/result,js,html"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h3>自定义模板</h3>
            <p>
                表格列属性
                <span className="prop"> render: Object | (h, index, val, row) => VNode </span>
                用来设置自定义模板，
            </p>
            <p>与 headRender 相同，如果render属性是一个Vue组件，那么其参数也将作为Props传递。</p>
            <p>您可以用其来设置自定义模板，例如列索引。</p>
            <iframe width="100%" height="400" src="//jsfiddle.net/MapleStory/zL8cx45p/181/embedded/result,js,html"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h3><a href="#componentstyle">组件风格</a></h3>
            <p>
                在DataTable，当您使用自定义表头或模板时，在DataTable提供了三种风格的组件传递方式。
            </p>

            <h4>JSX风格</h4>
            <iframe width="100%" height="200" src="//jsfiddle.net/MapleStory/zL8cx45p/185/embedded/js/"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h4>Render函数风格</h4>
            <iframe width="100%" height="200" src="//jsfiddle.net/MapleStory/zL8cx45p/190/embedded/js/"
                    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h4>Vue组件风格</h4>
            <iframe width="100%"
                    height="150"
                    src="//jsfiddle.net/MapleStory/zL8cx45p/187/embedded/js/"
                    allowFullScreen="allowfullscreen"
                    allowpaymentrequest
                    frameBorder="0"></iframe>
            <p>
                您也可以直接通过
                <span className="prop"> import VueComponent from ./... </span>
                来引入一个Vue组件
            </p>
        </>
    );
};