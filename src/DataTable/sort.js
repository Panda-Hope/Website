// @flow
import React from "react";

export default function() {
    return (
        <>
            <h3>多选</h3>
            <p>
                表格列属性
                <span className="prop"> type="selection" </span>
                将会创建一个多选列。
            </p>
            <p>
                您可以通过表格列属性函数
                <span className="prop"> checkIfDisabled: (index, val, row) => bool </span>
                来设置多选框是否失效。
            </p>
            <p>此函数接受 index: 索引、val: 当前值、row: 当前行，三个参数，并返回一个boolean值来判断其是否失效。</p>
            <iframe width="100%" height="400" src="//jsfiddle.net/MapleStory/zL8cx45p/158/embedded/result,js,html"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h3>排序</h3>
            <p>
                表格列属性
                <span className="prop"> type="sortable" </span>
                将会创建一个排序列。
            </p>
            <p>
                您可以通过表格列属性
                <span className="prop"> order: "ascending" | "descending" | undefined </span>
                来设置默认排序。
            </p>
            <p>
                也可以通过表格列属性函数
                <span className="prop"> sortMethod: (a, b) => number </span>
                来设置默认排序函数，注意这意味着这会覆盖 order=undefined 时的
            </p>
            <p>默认排序函数，不过 "ascending"、"descending"仍会起作用。</p>
            <iframe width="100%" height="400" src="//jsfiddle.net/MapleStory/zL8cx45p/167/embedded/result,js,html"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>
        </>
    );
}