(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["clipboard"],{"71a5":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var n=a("2b0e"),c=a("b311"),i=a.n(c),r=function(){return n["default"].prototype.$message({message:"Copy successfully",type:"success",duration:1500})},o=function(){return n["default"].prototype.$message({message:"Copy failed",type:"error"})},s=function(e,t){var a=new i.a(t.target,{text:function(){return e}});a.on("success",(function(){r(),a.destroy()})),a.on("error",(function(){o(),a.destroy()})),a.onClick(t)}},f744:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"use clipboard directly",name:"directly"}},[a("el-input",{staticStyle:{width:"400px","max-width":"100%"},attrs:{placeholder:"Please input"},model:{value:e.inputData,callback:function(t){e.inputData=t},expression:"inputData"}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-document"},on:{click:function(t){return e.handleClipboard(e.inputData,t)}}},[e._v(" copy ")])],1),a("el-tab-pane",{attrs:{label:"use clipboard by v-directive",name:"v-directive"}},[a("el-input",{staticStyle:{width:"400px","max-width":"100%"},attrs:{placeholder:"Please input"},model:{value:e.inputData,callback:function(t){e.inputData=t},expression:"inputData"}}),a("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.inputData,expression:"inputData",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.clipboardSuccess,expression:"clipboardSuccess",arg:"success"}],attrs:{type:"primary",icon:"el-icon-document"}},[e._v(" copy ")])],1)],1)],1)},c=[],i=a("d4ec"),r=a("99de"),o=a("7e84"),s=a("262e"),u=a("9ab4"),l=a("60a3"),p=a("71a5"),d=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(r["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.activeName="directly",e.inputData="https://github.com/Armour/vue-typescript-admin-template",e.clipboardSuccess=p["a"],e.handleClipboard=p["b"],e}return Object(s["a"])(t,e),t}(l["c"]);d=Object(u["a"])([Object(l["a"])({name:"Clipboard"})],d);var b=d,m=b,v=a("2877"),y=Object(v["a"])(m,n,c,!1,null,null,null);t["default"]=y.exports}}]);