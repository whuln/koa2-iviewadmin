(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2040"],{"0bb3":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Card",{attrs:{title:"导入EXCEL"}},[a("Row",[a("Upload",{attrs:{action:"","before-upload":e.handleBeforeUpload,accept:".xls, .xlsx"}},[a("Button",{attrs:{icon:"ios-cloud-upload-outline",loading:e.uploadLoading},on:{click:e.handleUploadFile}},[e._v("上传文件")])],1)],1),a("Row",[null!==e.file?a("div",{staticClass:"ivu-upload-list-file"},[a("Icon",{attrs:{type:"ios-stats"}}),e._v("\n          "+e._s(e.file.name)+"\n        "),a("Icon",{directives:[{name:"show",rawName:"v-show",value:e.showRemoveFile,expression:"showRemoveFile"}],staticClass:"ivu-upload-list-remove",attrs:{type:"ios-close"},nativeOn:{click:function(t){e.handleRemove()}}})],1):e._e()]),a("Row",[a("transition",{attrs:{name:"fade"}},[e.showProgress?a("Progress",{attrs:{percent:e.progressPercent,"stroke-width":2}},[100==e.progressPercent?a("div",[a("Icon",{attrs:{type:"ios-checkmark-circle"}}),a("span",[e._v("成功")])],1):e._e()]):e._e()],1)],1)],1),a("Row",{staticClass:"margin-top-10"},[a("Table",{attrs:{columns:e.tableTitle,data:e.tableData,loading:e.tableLoading}})],1)],1)},n=[],s=(a("7f7f"),a("28a5"),a("0a21")),i={name:"upload-excel",data:function(){return{uploadLoading:!1,progressPercent:0,showProgress:!1,showRemoveFile:!1,file:null,tableData:[],tableTitle:[],tableLoading:!1}},methods:{initUpload:function(){this.file=null,this.showProgress=!1,this.loadingProgress=0,this.tableData=[],this.tableTitle=[]},handleUploadFile:function(){this.initUpload()},handleRemove:function(){this.initUpload(),this.$Message.info("上传的文件已删除！")},handleBeforeUpload:function(e){var t=e.name.split(".").pop().toLocaleLowerCase();return"xlsx"===t||"xls"===t?(this.readFile(e),this.file=e):this.$Notice.warning({title:"文件类型错误",desc:"文件："+e.name+"不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。"}),!1},readFile:function(e){var t=this,a=new FileReader;a.readAsArrayBuffer(e),a.onloadstart=function(e){t.uploadLoading=!0,t.tableLoading=!0,t.showProgress=!0},a.onprogress=function(e){t.progressPercent=Math.round(e.loaded/e.total*100)},a.onerror=function(e){t.$Message.error("文件读取出错")},a.onload=function(e){t.$Message.info("文件读取成功");var a=e.target.result,o=s["a"].read(a,"array"),n=o.header,i=o.results,l=n.map(function(e){return{title:e,key:e}});t.tableData=i,t.tableTitle=l,t.uploadLoading=!1,t.tableLoading=!1,t.showRemoveFile=!0}}},created:function(){},mounted:function(){}},l=i,r=(a("b841"),a("983a")),d=Object(r["a"])(l,o,n,!1,null,null,null);d.options.__file="upload-excel.vue";t["default"]=d.exports},b841:function(e,t,a){"use strict";var o=a("c630"),n=a.n(o);n.a},c630:function(e,t,a){}}]);