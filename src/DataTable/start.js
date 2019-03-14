// @flow
import React from "react";

export default function () {
    return (
        <>
            <h3>NPM 安装</h3>
            <code className="js-code">
                npm i vuejs2-datatable -S
            </code>
            <h3>CDN</h3>
            <code className="js-code">
                <p>&lt;!-- 引入样式 --&gt;</p>
                <span>&lt;link rel=&quot;stylesheet&quot; href=&quot;https://unpkg.com/vuejs2-datatable/dist/index.css&quot; type=&quot;text/css&quot;&gt;</span>
                <p>&lt;!-- 引入JS --&gt;</p>
                <span>&lt;script src=&quot;https://unpkg.com/vuejs2-datatable/dist/vue-datatable.js&quot;&gt;&lt;/script&gt;</span>
            </code>

            <h3>基本示例</h3>
            <iframe width="100%" height="360" src="//jsfiddle.net/MapleStory/zL8cx45p/57/embedded/result,js/"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h3>带边框表格</h3>
            <p>为实例的表格添加<span className="prop"> border </span>属性即可</p>
            <iframe width="100%" height="360" src="//jsfiddle.net/MapleStory/zL8cx45p/61/embedded/result,html/"
    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"/>

            <h3>表格行 Class</h3>
            <iframe width="100%" height="400" src="//jsfiddle.net/MapleStory/zL8cx45p/225/embedded/result,html,css"
                    allowFullScreen="allowfullscreen" allowpaymentrequest frameBorder="0"></iframe>
        </>
    );
}

