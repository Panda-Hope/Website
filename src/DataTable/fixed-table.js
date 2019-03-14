// @flow
import React from "react";

export default function () {
    return (
        <>
            <h3>固定表头</h3>
            <p>表格属性<span className="prop"> scroll-height: number </span>用于设置表格内容的流体高度，当表格内容高度超过此值时表格便会垂直滚动。</p>
            <p>注意：此高度仅为表格内容高度，不包括头部高度。</p>
            <iframe width="100%" height="400" src="//jsfiddle.net/MapleStory/zL8cx45p/76/embedded/result,html/"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h3>固定列</h3>
            <p>表格属性<span className="prop"> scroll-width: number </span>用于设置表格滚动宽度，当表格实际宽度小于此值时表格便会水平滚动。</p>
            <p>列属性<span className="prop"> fixed: "left" | "right" | undefined </span>用于设置表格列是否固定。</p>

            <iframe width="100%" height="300" src="//jsfiddle.net/MapleStory/zL8cx45p/228/embedded/result,html,js"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h3>固定表头 & 固定列</h3>
            <p>固定表头可以与固定列同时使用，只需同时在表格实例上添加这两个属性即可。</p>
            <iframe width="100%" height="400" src="//jsfiddle.net/MapleStory/zL8cx45p/234/embedded/result,html,js"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h3>DataTable 表格布局</h3>
            <p>
                与其他表格UI组件相同，DataTable同样采用了<span className="prop"> table-layout: fixed </span>布局，但与
                <a href="http://element.eleme.io/#/zh-CN/component/table" className="tag">element-ui</a>
                不同的是，您需要为表格列指定列属性
                <span className="prop"> width: number </span>，
            </p>
            <p>来设置列的宽度大小，否则表格有可能出现列没有对齐的现象。这是在权衡之下做出的选择，并不是BUG。</p>
            <p>当然当表格实际宽度大于所指定的大小时，其会自动扩展宽度，您也可以保留一行列不设置，以使这一列随表格宽度自动扩展。</p>

            <h3>DataTable 表格结构</h3>
            <p>DataTable 采用了视图映射DOM结构的概念，对于不同的表格DataTable会采用不同的DOM结构。</p>
            <p>如果您看了前面的表格DOM结构，便会发现DataTable仅在需要固定表格时才会渲染额外的DOM结构，以减轻不必要的DOM渲染。</p>
        </>
    );
};