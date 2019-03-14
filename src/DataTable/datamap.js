// @flow
import React from "react";
import DataImg from "../images/datamap.png";

export default function () {
    return (
        <>
            <h3>数据映射</h3>
            <p>如果您查看过排序与多选组件的源码，就会发现其本质上其实只是一种特殊的自定义表头与模板而已。</p>
            <p>这意味着您同样也可以自身添加自己的方法，在DataTable中，这被称之为<span className="tag">数据映射(DataMap)</span>的一种。</p>
            <p>
                <span className="tag">数据映射(DataMap)</span>
                在DataTable中的关系如下图所示：
            </p>
            <p>
                <img className="data-map-img" src={DataImg} />
            </p>
            <p>
                在DataTable中数据均可以可选的先经过
                <span className="tag">DataMap</span>
                然后在渲染到视图中。
            </p>
            <p>您可以通过<span className="prop"> addDataMap </span>API来注册您自己的DataMap，例如：</p>

            <h3 style={{marginTop: "60px"}}>添加索引类型 <span className="tag"> type="index" </span>:</h3>
            <iframe width="100%" height="400" src="//jsfiddle.net/MapleStory/zL8cx45p/194/embedded/result,js"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h3>添加日期格式化类型 <span className="tag"> type="date" </span>:</h3>
            <iframe width="100%" height="400" src="//jsfiddle.net/MapleStory/zL8cx45p/200/embedded/result,js"
                    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"></iframe>

            <p>
                您可以通过<span className="tag"> DataMap </span>来实现许多数据对视图的映射，例如：自定义模板、组件、全局数据格式化、过滤等等。
            </p>
            <p><span className="tag">DataMap </span>作为DataTable的核心理念，目前仍处于扩展之中，未来将会支持更多的视图映射方式。</p>
            <p>关于更多的关于<span className="tag"> DataMap </span>的使用，您可以查看DataTable的<a className="tag" href="https://github.com/Panda-Hope/Vue-DataTable/tree/master/src/data-map">内置数据映射</a></p>
        </>
    );
}