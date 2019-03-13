// @flow
import React from "react";

export default function () {
    return (
        <>
            <h3>表头分组</h3>
            <p>
                您可以在<span className="prop"> Create: Array&lt;Column&gt; </span>API中内嵌
                <span className="prop"> subs </span>属性来创建分组表头。
            </p>
            <iframe width="100%" height="400" src="//jsfiddle.net/MapleStory/zL8cx45p/118/embedded/result,js,html"
                    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h3>动态表格</h3>
            <p>
                因为DataTable将
                <span className="prop"> Create </span>
                API视为模板函数，这意味着每一个表格都是从模板中生成的固定视图，当您需要动态的扩展、缩减或者修改表格时，
            </p>
            <p>
                您可以通过DataTable的实例API
                <span className="prop"> $scaledTable: Array&lt;Column&gt; => void </span>
                来动态的修改表格列。
            </p>
            <p>
                此API接受一个回调函数，并会将一个
                <span className="prop"> Column </span>数组对象作为参数传递过去，
            </p>
            <p>您可以再回调函数中处理这个数组对象来修改表格实例(例如: Columns.push(Column))。</p>
            <iframe width="100%" height="400" src="//jsfiddle.net/MapleStory/zL8cx45p/149/embedded/result,js,html"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>
            <p>
                注意：
                <span className="prop"> $scaledTable: Array&lt;Column&gt; => void </span>
                API仅会修改当前表格实例中列，并不会影响由此表格模板创建的其他实例，也不会影响模板本身。
            </p>
        </>
    );
}