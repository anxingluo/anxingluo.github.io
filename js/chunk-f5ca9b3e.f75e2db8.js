(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f5ca9b3e"],{aa34:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.casOption?a("el-cascader",{ref:"myCas",attrs:{options:e.casOption,props:e.casDataType,placeholder:e.casDataType.text,"show-all-levels":e.casDataType.show,clearable:""},on:{change:e.handleChange},model:{value:e.addValue,callback:function(t){e.addValue=t},expression:"addValue"}}):e._e()},s=[],n={props:["casOption","casDataType","casValue"],data:function(){return{addValue:[]}},methods:{handleChange:function(e){this.$emit("clickValue",e)}},watch:{casValue:function(e){this.addValue=e}}},o=n,i=a("2877"),l=Object(i["a"])(o,r,s,!1,null,null,null);t["a"]=l.exports},b30f:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"a",(function(){return l}));var r=a("5530"),s=a("b775");function n(e){var t=e.query,a=e.pagenum,r=e.pagesize,n=e.pay_status,o=e.is_send,i=e.order_fapiao_title;return s["a"].get("/orders",{params:{query:t||null,pagenum:a||1,pagesize:r||10,pay_status:n||null,is_send:o,order_fapiao_title:i||null}})}function o(e){return s["a"].put("orders/".concat(e.order_id),Object(r["a"])({},e))}function i(){return s["a"].get("/js/city.json")}function l(e){return s["a"].get("reports/type/".concat(e))}},d27f:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit"},[a("el-dialog",{attrs:{title:"订单信息修改",visible:e.dialogFormVisible,center:!0},on:{"update:visible":function(t){e.dialogFormVisible=t},closed:e.clearfrom}},[""!=e.formData?a("el-form",{ref:"editForm",attrs:{rules:e.rules,model:e.formData,"label-width":"150px","status-icon":""}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id",prop:"order_id"}},[a("el-input",{attrs:{disabled:""},model:{value:e.formData.order_id,callback:function(t){e.$set(e.formData,"order_id",t)},expression:"formData.order_id"}})],1),a("el-form-item",{attrs:{label:"订单价格",prop:"order_price"}},[a("el-input",{model:{value:e.formData.order_price,callback:function(t){e.$set(e.formData,"order_price",t)},expression:"formData.order_price"}})],1),a("el-form-item",{attrs:{label:"支付状态",prop:"pay_status"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.pay_status,callback:function(t){e.$set(e.formData,"pay_status",t)},expression:"formData.pay_status"}},e._l(["0","1"],(function(e){return a("el-option",{key:e,attrs:{label:"0"==e?"未付款":"已付款",value:e}})})),1)],1),a("el-form-item",{attrs:{label:"订单支付方式",prop:"order_pay"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.order_pay,callback:function(t){e.$set(e.formData,"order_pay",t)},expression:"formData.order_pay"}},e._l(["0","1","2","3"],(function(e){return a("el-option",{key:e,attrs:{label:"0"==e?"未支付":"1"==e?"支付宝":"2"==e?"微信":"银行卡",value:e}})})),1)],1),a("el-form-item",{attrs:{label:"订单发货状态",prop:"is_send"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.is_send,callback:function(t){e.$set(e.formData,"is_send",t)},expression:"formData.is_send"}},e._l(["否","是"],(function(e){return a("el-option",{key:e,attrs:{label:"否"==e?"未发货":"已发货",value:e}})})),1)],1)],1):e._e(),e._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.send}},[e._v("确 定")])],1)],1)],1)},s=[],n=(a("96cf"),a("1da1")),o=a("b30f"),i=a("aa34"),l={name:"edit",components:{cascaderCom:i["a"]},data:function(){return{dialogFormVisible:!1,formData:"",options:[],dataType:{expandTrigger:"hover",label:"name",value:"code",text:"请选择地址",show:!0},rules:{order_id:[{required:!0,message:"id不能为空",trigger:"blur"}],order_price:[{required:!0,message:"价格不能为空",trigger:"blur"}],pay_status:[{required:!0,message:"支付状态不能为空",trigger:"chang"}],order_pay:[{required:!0,message:"支付方式不能为空",trigger:"chang"}],is_send:[{required:!0,message:"发货状态不能为空",trigger:"chang"}]}}},methods:{clearfrom:function(){this.formData={},this.$refs.editForm.resetFields(),this.$parent.getOrders()},send:function(){var e=this;this.$refs.editForm.validate(function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(a){var r,s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a){t.next=2;break}return t.abrupt("return");case 2:for(s in r={},e.formData)"is_send"==s?"否"==e.formData[s]?r[s]=0:r[s]=1:r[s]=e.formData[s];return t.next=6,Object(o["c"])(r);case 6:n=t.sent,200===n.data.meta.status||201===n.data.meta.status?(e.$message.success(n.data.meta.msg),e.dialogFormVisible=!1):e.$message.error(n.data.meta.msg);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(o["d"])();case 2:a=t.sent,200==a.status&&(e.options=a.data);case 4:case"end":return t.stop()}}),t)})))()}},c=l,u=a("2877"),d=Object(u["a"])(c,r,s,!1,null,null,null);t["default"]=d.exports}}]);