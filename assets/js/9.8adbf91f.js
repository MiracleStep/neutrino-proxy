(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{335:function(a,t,s){"use strict";s.r(t);var e=s(7),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1、-部署服务端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、-部署服务端"}},[a._v("#")]),a._v(" 1、 部署服务端")]),a._v(" "),t("h3",{attrs:{id:"使用默认h2数据库一键部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用默认h2数据库一键部署"}},[a._v("#")]),a._v(" 使用默认h2数据库一键部署")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9000")]),a._v("-9200:9000-9200/tcp "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("8888")]),a._v(":8888 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" neutrino-proxy "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/neutrino-proxy-server/config:/root/neutrino-proxy/config "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/neutrino-proxy-server/data:/root/neutrino-proxy/data "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /root/neutrino-proxy-server/logs:/root/neutrino-proxy/logs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\naoshiguchen/neutrino-proxy-server:latest\n")])])]),t("h3",{attrs:{id:"指定自己的mysql数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指定自己的mysql数据库"}},[a._v("#")]),a._v(" 指定自己的mysql数据库")]),a._v(" "),t("ul",[t("li",[a._v("在服务器上创建目录：/root/neutrino-proxy/config")]),a._v(" "),t("li",[a._v("在该目录下创建"),t("code",[a._v("app.yml")]),a._v("文本文件，并配置如下内容：")])]),a._v(" "),t("div",{staticClass:"language-yml extra-class"},[t("pre",{pre:!0,attrs:{class:"language-yml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("neutrino")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("data")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("db")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" mysql\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 自己的数据库实例，创建一个空的名为'neutrino-proxy'的数据库即可，首次启动服务端会自动初始化")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("url")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" jdbc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("mysql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//xxxx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("3306/neutrino"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("proxy"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("?")]),a._v("useUnicode=true"),t("span",{pre:!0,attrs:{class:"token important"}},[a._v("&characterEncoding=UTF-8&allowMultiQueries=true&useAffectedRows=true&useSSL=false")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("driver-class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" com.mysql.jdbc.Driver\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据库帐号")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("username")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" xxx\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 数据库密码")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("password")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" xxx\n")])])]),t("ul",[t("li",[a._v("然后再执行上面的docker一键部署命令即可")])]),a._v(" "),t("h2",{attrs:{id:"_2、部署客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、部署客户端"}},[a._v("#")]),a._v(" 2、部署客户端")]),a._v(" "),t("ul",[t("li",[a._v("命令中的服务端ip、license请自行补充")]),a._v(" "),t("li",[a._v("若是首次使用，请仔细阅读快速上手，以确定license从哪里取得")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" npclient "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SERVER_IP")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("xxxx "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LICENSE_KEY")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("xxxx "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\naoshiguchen/neutrino-proxy-client:latest\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);