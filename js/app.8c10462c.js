(function(t){function e(e){for(var s,o,n=e[0],l=e[1],c=e[2],m=0,f=[];m<n.length;m++)o=n[m],i[o]&&f.push(i[o][0]),i[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,n=1;n<a.length;n++){var l=a[n];0!==i[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0762":function(t,e,a){},"0af1":function(t,e,a){},"171c":function(t,e,a){"use strict";var s=a("1d86"),i=a.n(s);i.a},"18c2":function(t,e,a){},"191d":function(t,e,a){},1927:function(t,e,a){},"1d86":function(t,e,a){},"2e60":function(t,e,a){"use strict";var s=a("e829"),i=a.n(s);i.a},"31d5":function(t,e,a){},"3a86":function(t,e,a){"use strict";var s=a("18c2"),i=a.n(s);i.a},"41dd":function(t,e,a){"use strict";var s=a("91f3"),i=a.n(s);i.a},"505b":function(t,e,a){"use strict";var s=a("0762"),i=a.n(s);i.a},"560f":function(t,e,a){"use strict";var s=a("c08c"),i=a.n(s);i.a},"56d7":function(t,e,a){"use strict";a.r(e);var s={};a.r(s),a.d(s,"fields",function(){return D});a("cadf"),a("551c"),a("097d");var i=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("el-container",{attrs:{direction:"vertical"}},[a("v-header",{attrs:{page:t.page}}),a("el-main",[a("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[a("router-view",{staticClass:"child-view"})],1)],1),a("v-footer",{attrs:{page:t.page}})],1)],1)},o=[],n=(a("28a5"),a("7f7f"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{class:t.page},[t._m(0),a("div",{staticClass:"nav"},[a("div",{staticClass:"container"},[a("div",{staticClass:"left"},[a("router-link",{staticClass:"noline logo",attrs:{to:{name:"Home"}}},[a("img",{attrs:{src:"/images/logo_400x90.png",alt:"时光·印象",title:"返回首页"}})]),a("a",{staticClass:"noline",attrs:{href:"#"}},[t._v("分类")])],1),a("div",{staticClass:"right"},[t.token?t._e():a("router-link",{staticClass:"noline",attrs:{to:{name:"AuthRegister"}}},[t._v("注册")]),t.token?t._e():a("router-link",{staticClass:"noline",attrs:{to:{name:"AuthLogin"}}},[t._v("登录")]),t.token?a("a",{staticClass:"noline",attrs:{href:"javascript:;"},on:{click:t.onLogout}},[t._v("注销")]):t._e(),t.token?a("router-link",{staticClass:"noline danger",attrs:{to:{name:"ImageCreate"}}},[t._v("贴图")]):t._e()],1)])])])}),l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topic"},[a("div",{staticClass:"blur"})])}],c=a("c93e"),u=a("2f62"),m={name:"Header",props:{page:{type:String,default:""}},computed:Object(c["a"])({},Object(u["b"])(["token"])),methods:{onLogout:function(){var t=this;this.$confirm("确认要退出登录吗 😒","退出登录").then(function(){t.$store.dispatch("Logout"),t.$message.success({message:"😒 注销成功 哼!",iconClass:"none",customClass:"el-message--success"})})}}},f=m,d=(a("746e"),a("2877")),p=Object(d["a"])(f,n,l,!1,null,"5f7415a0",null);p.options.__file="Header.vue";var g=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"dark",class:t.page},[a("div",{staticClass:"container"},[t._m(0),a("ul",{staticClass:"copyright"},[a("li",[t._v("一个普通的图片分享平台")]),a("li",[a("a",{attrs:{href:"javascript:;"},on:{click:t.onMoreClick}},[t._v("About")]),t._m(1)])])])])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{staticClass:"logo",attrs:{src:"/images/logo_white.png"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[t._v("Hosted by "),a("a",{attrs:{href:"https://coding.net/v2/pages/",target:"_blank"}},[t._v("Coding Pages")])])}],b='\n<ul>\n  <li>Coding by <a href="http://blog.mutoe.com/" target="_blank">mutoe</a>.</li>\n  <li>The source code is hosted on <a href="https://github.com/mutoe/pic" target="_blank">Github</a> under MIT license.</li>\n  <li>Cloud computing service provided by <a href="https://www.aliyun.com/" target="_blank">Aliyun</a>.</li>\n  <li><a href="mailto:mutoe@foxmail.com?body=From http://pic.mutoe.com/ footer">Send Email to me</a>.</li>\n</ul>\n',_={name:"Footer",props:{page:{type:String,default:""}},methods:{onMoreClick:function(){this.$msgbox({title:"About",message:b,dangerouslyUseHTMLString:!0,customClass:"info-dialog dark",showConfirmButton:!1,closeOnClickModal:!0,closeOnPressEscape:!0})}}},y=_,C=(a("560f"),a("2e60"),Object(d["a"])(y,h,v,!1,null,"77275008",null));C.options.__file="Footer.vue";var w=C.exports,$={name:"App",components:{VHeader:g,VFooter:w},data:function(){return{transitionName:"fade"}},computed:{page:function(){return this.$route.name.toLowerCase()}},watch:{$route:function(t,e){var a=t.path.split("/").length,s=e.path.split("/").length,i=a-s;0===i&&(this.transitionName="fade"),i<0&&(this.transitionName="slide-right"),i>0&&(this.transitionName="slide-left")}}},k=$,x=(a("7faf"),Object(d["a"])(k,r,o,!1,null,null,null));x.options.__file="App.vue";var E=x.exports,L=a("bc3a"),S=a.n(L),j=a("8afe"),O=a("8c4f"),R=a("a78e"),A=a.n(R),T="JWToken";function P(){return A.a.get(T)}function z(t){return A.a.set(T,t)}function I(){return A.a.remove(T)}i["default"].use(u["a"]);var M=new u["a"].Store({getters:{token:function(t){return t.user.token}},state:{user:{token:P()},oss:{uri:"https://timeimage.oss-cn-shenzhen.aliyuncs.com/uploads/",host:"https://timeimage.oss-cn-shenzhen.aliyuncs.com/",path:"uploads/"}},mutations:{SET_TOKEN:function(t,e){t.user.token=e}},actions:{Login:function(t,e){var a=t.commit;a("SET_TOKEN",e.token),i["default"].prototype.$http.defaults.headers.common["Authorization"]="Bearer ".concat(e.token),z(e.token)},Logout:function(t){var e=t.commit;e("SET_TOKEN",""),i["default"].prototype.$http.defaults.headers.common["Authorization"]=null,I()}}}),U=M,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("el-row",{staticClass:"container"},t._l(t.list,function(e,s){return a("el-col",{key:s,attrs:{md:6,sm:12,xs:24}},[a("div",{staticStyle:{padding:"15px"}},[a("el-card",{staticClass:"card",attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",attrs:{src:t.$store.state.oss.uri+e.list[0].filename+"?x-oss-process=style/thumb"},on:{click:function(a){t.gotoDetail(e._id)}}}),a("div",{staticStyle:{padding:"14px"}},[a("span",[t._v(t._s(e.title))])])])],1)])}))],1)},F=[],H={name:"Home",data:function(){return{list:[]}},created:function(){this.fetchList()},methods:{fetchList:function(){var t=this;this.$http.get("/api/image").then(function(e){t.list=e.data.images}).catch(function(t){console.warn(t)})},gotoDetail:function(t){this.$router.push({name:"ImageRead",params:{id:t}})}}},B=H,V=(a("171c"),a("e043"),Object(d["a"])(B,N,F,!1,null,"153875f4",null));V.options.__file="Home.vue";var q=V.exports,G=[{path:"/",name:"Home",component:q}],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"container"},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("h1",[t._v("用户登陆")])]),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{lg:12,md:16,sm:18,xs:24}},[a("el-form",{ref:"formLogin",attrs:{model:t.formLogin,rules:t.rules}},[a("el-form-item",{attrs:{prop:"email"}},[a("el-input",{attrs:{type:"email",placeholder:"Email",clearable:""},model:{value:t.formLogin.email,callback:function(e){t.$set(t.formLogin,"email",e)},expression:"formLogin.email"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"密码",clearable:""},model:{value:t.formLogin.password,callback:function(e){t.$set(t.formLogin,"password",e)},expression:"formLogin.password"}})],1),a("el-form-item",[a("el-checkbox",{model:{value:t.formLogin.remember,callback:function(e){t.$set(t.formLogin,"remember",e)},expression:"formLogin.remember"}},[t._v("记住我 "),a("small",[t._v("请不要再公用电脑勾选此选项")])])],1),a("el-form-item",{staticClass:"buttons"},[a("el-button",{staticClass:"btn-login",attrs:{type:"primary",loading:t.btnLoading},on:{click:t.onSubmit}},[t._v("登 陆")]),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.$router.push({name:"Register"})}}},[t._v("去注册")])],1)],1)],1)],1)],1)])},K=[],D=(a("a481"),a("f751"),a("4917"),{email:[{required:!0,message:"请输入 Email 地址",trigger:"blur"},{type:"email",message:"这不是一个有效的 Email 地址",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"},{pattern:/^[0-9a-z_-]+$/i,message:'用户名只允许含有 数字、字母、"-" 和 "_"'},{min:5,max:16,message:"用户名长度需要在 5 到 16 个字符"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"密码长度需要在 6-16 字符"},{validator:function(t,e,a){e.match(/^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/)?a():a(new Error("密码中有非法字符"))}}],agreement:[{required:!0,type:"boolean",message:"请同意"},{validator:function(t,e,a){!0===e?a():a(new Error("请勾选我同意"))}}]}),W=s.fields,Z=W.email,Q=W.password,X={data:function(){return{formLogin:{email:"testuser@mutoe.com",password:"123456",remember:!1},rules:{email:Z,password:Q},btnLoading:!1}},methods:{onSubmit:function(){var t=this;this.$refs["formLogin"].validate(function(e){if(e){var a=Object.assign({},t.formLogin);t.postForm(a)}})},postForm:function(t){var e=this;this.btnLoading=!0,this.$http.post("/api/auth/login",t).then(this.onSuccess).catch(this.onError).finally(function(){e.btnLoading=!1})},onSuccess:function(t){var e=t.data,a=e.email,s=e.token;this.$store.dispatch("Login",{email:a,token:s}),this.$http.defaults.headers.common["Authorization"]="Bearer "+s,this.$router.replace("/"),this.$message.success({message:"😙 登陆成功",iconClass:"none",customClass:"el-message--success"})},onError:function(t){console.warn(t.response);var e=t.response,a=e.status,s=e.data,i="";switch(a){case 500:i="服务器出错啦";break;case 400:i=s.message;break}this.$message.error({message:"🙄 ".concat(i),iconClass:"none",customClass:"el-message--error"})}}},Y=X,tt=(a("7c35"),Object(d["a"])(Y,J,K,!1,null,"065d581a",null));tt.options.__file="Login.vue";var et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page"},[a("div",{staticClass:"container"},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("h1",[t._v("用户注册")])]),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{lg:12,md:16,sm:18,xs:24}},[a("el-alert",{attrs:{title:"请注意, 在测试期间您的数据可能会出现错乱甚至丢失的情况. 如果您在测试期间遇到了任何问题, 可以在页面底部找到我的联系方式.",type:"warning"}})],1)],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{lg:12,md:16,sm:18,xs:24}},[a("el-form",{ref:"formRegister",attrs:{model:t.formRegister,rules:t.rules}},[a("el-form-item",{attrs:{prop:"email",error:t.fieldErr.email}},[a("el-input",{attrs:{type:"email",placeholder:"Email",autofocus:!0,clearable:""},model:{value:t.formRegister.email,callback:function(e){t.$set(t.formRegister,"email",e)},expression:"formRegister.email"}})],1),a("el-form-item",{attrs:{prop:"username",error:t.fieldErr.username}},[a("el-input",{attrs:{placeholder:"用户名",clearable:""},model:{value:t.formRegister.username,callback:function(e){t.$set(t.formRegister,"username",e)},expression:"formRegister.username"}})],1),a("el-form-item",{attrs:{prop:"password"}},[a("el-input",{attrs:{type:"password",placeholder:"密码",clearable:""},model:{value:t.formRegister.password,callback:function(e){t.$set(t.formRegister,"password",e)},expression:"formRegister.password"}})],1),a("el-form-item",{attrs:{prop:"agreement"}},[a("el-checkbox",{model:{value:t.formRegister.agreement,callback:function(e){t.$set(t.formRegister,"agreement",e)},expression:"formRegister.agreement"}},[t._v("我同意")])],1),a("el-form-item",{staticClass:"buttons"},[a("el-button",{staticClass:"btn-register",attrs:{type:"primary",loading:t.btnLoading},on:{click:t.onSubmit}},[t._v("注册")]),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.$router.push({name:"Login"})}}},[t._v("已有账号, 去登陆")])],1)],1)],1)],1)],1)])},st=[],it=s.fields,rt=it.email,ot=it.username,nt=it.password,lt=it.agreement,ct={data:function(){return{formRegister:{email:"testuser@mutoe.com",username:"testuser",password:"123456",agreement:!0},rules:{email:rt,username:ot,password:nt,agreement:lt},fieldErr:{},btnLoading:!1}},methods:{onSubmit:function(){var t=this;this.$refs["formRegister"].validate(function(e){if(e){var a=Object.assign({},t.formRegister);t.postForm(a)}})},postForm:function(t){var e=this;this.btnLoading=!0,this.fieldErr={},this.$http.post("/api/auth/register",t).then(this.onSuccess).catch(this.onError).finally(function(){e.btnLoading=!1})},onSuccess:function(t){var e=t.data.token;this.$message.success("注册成功"),this.$store.dispatch("Login",{email:rt,token:e}),this.$http.defaults.headers.common["Authorization"]="Bearer "+e,this.$router.replace("/")},onError:function(t){console.warn(t.response);var e=t.response,a=e.status,s=e.data,i="";switch(a){case 500:i="服务器出错啦";break;case 400:"field_exist"===s.type&&(this.fieldErr[s.field]=s.message),i=s.message;break}this.$message.error({message:"🙄 ".concat(i),iconClass:"none",customClass:"el-message--error"})}}},ut=ct,mt=(a("41dd"),Object(d["a"])(ut,at,st,!1,null,"6bcf1434",null));mt.options.__file="Register.vue";var ft=mt.exports,dt=[{path:"/auth/login",alias:"/login",name:"AuthLogin",component:et},{path:"/auth/register",alias:"/register",name:"AuthRegister",component:ft}],pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page image create"},[a("section",{staticClass:"upload-wrap dark"},[a("el-upload",{staticClass:"upload",attrs:{drag:"",multiple:"",accept:"image/*",action:t.oss.host,data:t.oss,limit:t.upload.limit,"list-type":t.upload.listType,"file-list":t.upload.list,"before-upload":t.beforeUpload,"on-change":t.onUploadChange,"on-preview":t.handlePictureCardPreview,"on-success":t.onUploadSuccess,"on-error":t.onUploadError}},[a("i",{staticClass:"el-icon-upload"})]),a("div",{staticClass:"el-upload__text"},[t._v("将文件拖到方框内，或点击方框上传 "),a("br"),t._v("\n每张图片最大 8M，支持 JPEG GIF PNG "),a("br"),t._v("\n每次最多上传 "+t._s(t.upload.limit)+" 张, 共 30M 以下 "),a("br")])],1),a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"form-wrap",attrs:{xl:8,lg:10,md:16}},[a("el-form",{ref:"form",attrs:{model:t.form}},[a("el-form-item",{attrs:{label:"标题"}},[a("el-input",{model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),a("el-form-item",{attrs:{label:"配文"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4}},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),a("el-form-item",{attrs:{label:"公开范围"}},[a("el-radio-group",{attrs:{size:"small"},model:{value:t.form.scope,callback:function(e){t.$set(t.form,"scope",e)},expression:"form.scope"}},[a("el-radio-button",{attrs:{label:"all"}},[t._v("公开")]),a("el-radio-button",{attrs:{label:"friends",disabled:""}},[t._v("仅好友(尚未开放好友功能)")])],1)],1),a("el-form-item",{staticClass:"declare"},[t._v("以下作品禁止投稿。请在投稿之前进行确认"),a("ul",[a("li",[t._v("含有法律规定禁止公开传播的内容.")]),a("li",[t._v("含有露骨、诱惑、教唆等内容的图片或文字.")]),a("li",[t._v("散布谣言、广告、诽谤等内容的图片或文字.")])]),t._v("违反作品投稿利用规则的用户，将会被停止投稿作品公开，停止账号使用。 "),a("br")]),a("el-form-item",{staticStyle:{"text-align":"center"},attrs:{size:"large"}},[a("el-button",{staticClass:"submit",attrs:{type:"primary"},on:{click:t.submit}},[t._v("投 稿")])],1)],1)],1)],1),a("el-dialog",{attrs:{visible:t.dialog.visible},on:{"update:visible":function(e){t.$set(t.dialog,"visible",e)}}},[a("template",{slot:"title"},[t._v(t._s(t.dialog.title))]),a("img",{attrs:{alt:t.dialog.title,src:t.dialog.imageUrl}})],2)],1)},gt=[],ht=(a("6b54"),{data:function(){return{oss:{key:"",dirPath:"",OSSAccessKeyId:"",policy:"",Signature:"",host:"",success_action_status:200,callback:""},upload:{accept:"",limit:100,list:[],listType:"picture-card"},dialog:{imageUrl:"",title:"",visible:!1},form:{title:"",description:"",scope:"all"}}},mounted:function(){this.ossSign()},methods:{ossSign:function(){var t=this;this.$http.get("/api/auth/ossSign").then(function(e){return Object.assign(t.oss,e.data)}).catch(this.onError)},beforeUpload:function(t){if("image"!==t.type.split("/")[0])return this.$message.error("文件类型错误"),!1;if(t.size>8388608)return this.$message.error("单个文件超过 8 M"),!1;var e=t.name.split(".").pop(),a=((new Date).getTime()+Math.random()).toString(36).replace(/\./,"");return this.oss.key=this.oss.dirPath+a+"."+e,!0},onUploadSuccess:function(t,e,a){var s=t.result.filename;e.path=s,e.filename=s.split("/").pop()},onUploadError:function(t,e,a){console.warn(t),this.$message.error("出错了")},onUploadChange:function(t,e){this.upload.list=e},handlePictureCardPreview:function(t){this.dialog.imageUrl=this.oss.host+t.path,this.dialog.title=t.name,this.dialog.visible=!0},submit:function(){if(0===this.upload.list.length)return this.$message.error("请至少上传一张图片");var t=Object.assign({},this.form,{list:this.upload.list});this.$http.post("/api/image",t).then(this.onSubmitSuccess).catch(this.onError)},onSubmitSuccess:function(t){var e=this,a=t.data.image;this.$message.success("创建成功, 即将跳转..."),setTimeout(function(){e.$router.push({name:"ImageRead",params:{id:a._id}})},1200)},onError:function(t){console.warn(t)}}}),vt=ht,bt=(a("ff4e"),a("ab88"),Object(d["a"])(vt,pt,gt,!1,null,"61661a97",null));bt.options.__file="Create.vue";var _t=bt.exports,yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page image read"},[a("el-row",{staticClass:"container",attrs:{type:"flex",justify:"center"}},[a("el-col",{staticClass:"detail",attrs:{md:24,lg:18}},[a("h1",{staticClass:"title"},[t._v(t._s(t.detail.title)),a("small",{staticClass:"info-id hidden-sm-and-down"},[t._v("#"+t._s(t.imageId))])]),t.detail.list.length?a("div",{staticClass:"image-wrap",on:{click:function(e){t.lightboxVisible=!0}}},[a("div",{staticClass:"image-card",class:{multi:t.detail.list.length>1}},[a("div",{staticClass:"image",style:{backgroundImage:"url("+t.$store.state.oss.uri+t.detail.list[0].filename+")"}})]),a("img",{staticClass:"placeholder",attrs:{src:t.$store.state.oss.uri+t.detail.list[0].filename}})]):a("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticClass:"loading"}),a("div",{staticClass:"description"},[t._v(t._s(t.detail.description))])])],1),a("el-dialog",{staticClass:"lightbox",attrs:{visible:t.lightboxVisible,fullscreen:!0,center:"",title:t.detail.title},on:{"update:visible":function(e){t.lightboxVisible=e}}},[a("el-carousel",{attrs:{"indicator-position":"outsize",autoplay:!1,arrow:"always"}},t._l(t.detail.list,function(e,s){return a("el-carousel-item",{key:s},[a("div",{staticClass:"image-wrap"},[a("img",{attrs:{src:t.$store.state.oss.uri+e.filename}})])])}))],1)],1)},Ct=[],wt={data:function(){return{imageId:this.$route.params.id,detail:{title:"",description:"",list:[]},lightboxVisible:!1}},created:function(){this.fetchInfo()},methods:{fetchInfo:function(){var t=this;this.$http.get("/api/image/".concat(this.imageId)).then(function(e){Object.assign(t.detail,e.data.image)}).catch(function(t){return console.warn(t)})}}},$t=wt,kt=(a("3a86"),a("505b"),Object(d["a"])($t,yt,Ct,!1,null,"5fbdc2f2",null));kt.options.__file="Read.vue";var xt=kt.exports,Et=[{path:"/image/create",name:"ImageCreate",component:_t,meta:{retuireAuth:!0}},{path:"/image/:id",name:"ImageRead",component:xt}];i["default"].use(O["a"]);var Lt=new O["a"]({mode:"history",routes:Object(j["a"])(G).concat(Object(j["a"])(dt),Object(j["a"])(Et),[{path:"*",redirect:"/"}]),scrollBehavior:function(t,e,a){return a||{x:0,y:0}}});Lt.beforeEach(function(t,e,a){var s=U.getters.token;s&&"null"!==s&&(i["default"].prototype.$http.defaults.headers.common["Authorization"]="Bearer ".concat(s)),t.meta.requireAuth&&(s&&"null"!==s||(i["default"].prototype.$message.warn("需要先登录哦~"),a("/auth/login"))),a()});var St=Lt,jt=a("5c96"),Ot=a.n(jt);a("0fae"),a("1927");i["default"].use(Ot.a),i["default"].prototype.$http=S.a,i["default"].config.productionTip=!1,new i["default"]({router:St,store:U,render:function(t){return t(E)}}).$mount("#app")},"746e":function(t,e,a){"use strict";var s=a("ae79"),i=a.n(s);i.a},"7c35":function(t,e,a){"use strict";var s=a("94f9"),i=a.n(s);i.a},"7faf":function(t,e,a){"use strict";var s=a("0af1"),i=a.n(s);i.a},8819:function(t,e,a){},"91f3":function(t,e,a){},"94f9":function(t,e,a){},ab88:function(t,e,a){"use strict";var s=a("31d5"),i=a.n(s);i.a},ae79:function(t,e,a){},c08c:function(t,e,a){},e043:function(t,e,a){"use strict";var s=a("8819"),i=a.n(s);i.a},e829:function(t,e,a){},ff4e:function(t,e,a){"use strict";var s=a("191d"),i=a.n(s);i.a}});
//# sourceMappingURL=app.8c10462c.js.map