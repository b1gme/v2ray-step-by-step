(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{357:function(e,t,s){"use strict";s.r(t);var o=s(29),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"before-deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#before-deployment"}},[e._v("#")]),e._v(" Before Deployment")]),e._v(" "),s("p",[e._v("In this section, we will explain some of the details you need to be aware of when deploying V2Ray. Some of them may seem insignificant, while some can cause deployment failures. Therefore please read this section carefully. If you encounter problems during the deployment process, please check if you missed any instructions.")]),e._v(" "),s("h2",{attrs:{id:"are-the-server-and-client-time-synchronised"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#are-the-server-and-client-time-synchronised"}},[e._v("#")]),e._v(" Are the server and client time synchronised?")]),e._v(" "),s("p",[e._v("V2Ray has stricter requirements on system clock, and the absolute time difference between server and client must not exceed 2 minutes to get it connected. So make sure time on every device is accurate aligned. However, V2Ray does not require a consistent time zone. For example, the time on my computer is Beijing time (UTC+8 CST) 2017-07-31 12:08:31, but the time zone on the VPS is UTC+9, so the time on the VPS should be 2017-07-31 13 :06:31 to 2017-07-31 13:10:31 to use V2Ray properly. Of course, you can change to any time zone you want.")]),e._v(" "),s("h2",{attrs:{id:"issues-with-different-linux-distributions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issues-with-different-linux-distributions"}},[e._v("#")]),e._v(" Issues with different Linux distributions")]),e._v(" "),s("p",[e._v("Thanks to the features provided by the Go programming language and the original author's carefully design, V2Ray can run without dependency software (libraries) and provides cross-platform support (such as Windows, Linux, macOS, BSD, etc.). However, beginners may still encounter various problems during learning and deploying, and stucked on it. As a result, we recommend you use a popular distribution: Debian 9.x, Debian 10 or above or Ubuntu 18.04 or above Linux distributions on VPS. Please don't be superstitious about some \"most stable\" Linux distribution(s).")]),e._v(" "),s("h2",{attrs:{id:"firewall"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#firewall"}},[e._v("#")]),e._v(" Firewall")]),e._v(" "),s("p",[e._v("Some Linux distributions, VPS service providers, and some cloud computing platforms provide features such as firewall/security groups by default, so V2Ray disconnected after proper deployment of V2Ray due to incorrect firewall/security group settings. At this moment, you have to check if it is a firewall problem. For details, you can ask for customer service or Google.")]),e._v(" "),s("h2",{attrs:{id:"issues-with-starting-the-v2ray-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issues-with-starting-the-v2ray-service"}},[e._v("#")]),e._v(" Issues with starting the V2ray service")]),e._v(" "),s("p",[e._v("After installing V2Ray with a script, it will not run automatically. Instead, you have to run it yourself. Besides, if the configuration file is modified, the new configuration of V2Ray will not be applied by current running process, but until the V2Ray service restarted.")]),e._v(" "),s("h2",{attrs:{id:"issues-with-configuration-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issues-with-configuration-file"}},[e._v("#")]),e._v(" Issues with configuration file")]),e._v(" "),s("p",[e._v("Because V2Ray has a long configuration file which contains many levels, it is easy to make mistakes when editing, and it is difficult to check. If you use the online JSON tool (and of course offline available), you can check if the file format is correct. There are many online JSON checking tools, you can Google for it.")]),e._v(" "),s("h2",{attrs:{id:"issues-with-proxy-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#issues-with-proxy-configuration"}},[e._v("#")]),e._v(" Issues with proxy configuration")]),e._v(" "),s("p",[e._v("In the FireFox browser used in the guide, it supports Socks5 proxy. But for other browsers, as they may not support Socks5, one can use the client's inbound is the HTTP protocol and set the proxy in the Internet Explorer properties. Alternatively, you can use a browser extension such as SwitchyOmega.")]),e._v(" "),s("h3",{attrs:{id:"command-during-deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-during-deployment"}},[e._v("#")]),e._v(" Command during deployment")]),e._v(" "),s("p",[e._v("In this tutorial, all commands are starting with "),s("code",[e._v("$")]),e._v(", those without "),s("code",[e._v("$")]),e._v(" are representing output, and don't put "),s("code",[e._v("$")]),e._v(" in when entering commands.")]),e._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[e._v("Notice")]),e._v(" "),s("p",[e._v("In addition, all commands with "),s("code",[e._v("sudo")]),e._v(" in this guide require superuser permission. If you don't understand the meaning of this sentence, you can use the root account directly, you do not need to enter the characters "),s("code",[e._v("sudo")]),e._v(" when you enter the command.")])]),e._v(" "),s("h2",{attrs:{id:"reading-instructions-carefully"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reading-instructions-carefully"}},[e._v("#")]),e._v(" Reading Instructions Carefully")]),e._v(" "),s("p",[e._v("Whether on the Internet or in real life, I found that many people like to skip reading articles/books/tutorials. I do think it is enough to look at only the key things. It seems that this is very efficient. In fact, most of this will take more time to achieve the same effect. So if you are new to V2Ray and you are not likely to use it, it is recommended to follow the instructions in this guide.")]),e._v(" "),s("h2",{attrs:{id:"the-ways-of-finally-solving-your-problem-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-ways-of-finally-solving-your-problem-s"}},[e._v("#")]),e._v(" The ways of finally solving your problem(s)")]),e._v(" "),s("p",[e._v("Unfortunately, we cannot predict all possible problems. However, most of the issues you met may have already encountered by other people. The corresponding solutions have been given (unless your network environment is really special, you need to let the experts help you solve them). So if you encounter issues, you may solve them through Google. Asking questions in the community is the last resort. In the process of deploying V2Ray, more than 90% of the issues encountered can be solved by Google and reading the related tutorials/documents from searching results. The problems need to answer by the community should be a small amount, about less than 5%. If you found it false, that indicates your ability of such Linux, network, or general problem-solving skills need to be improved. Of course, that's not meaning that we are not welcome you ask our communities.  But we don't want to answer the same questions every day as a repeater. If you have a question(s), before you asking, it is strongly recommended to read "),s("a",{attrs:{href:"http://www.catb.org/~esr/faqs/smart-questions.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("How To Ask Questions The Smart Way"),s("OutboundLink")],1),e._v(" by E.S Raymond first.\n")]),e._v(" "),s("h4",{attrs:{id:"updates"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updates"}},[e._v("#")]),e._v(" Updates")]),e._v(" "),s("ul",[s("li",[e._v("2019-07-11 Modify the typesetting, revision descriptions, and follow up on the version description after the Linux release update.")]),e._v(" "),s("li",[e._v("2019-09-07 typo fix")])])])}),[],!1,null,null,null);t.default=i.exports}}]);