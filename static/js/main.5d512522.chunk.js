(window.webpackJsonpreact_sdelka=window.webpackJsonpreact_sdelka||[]).push([[0],{174:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(34),s=n.n(o),i=(n(48),n(16)),l=n(14),u=n(6),c=n(7),d=n(9),p=n(8),f=n(10),v=n(22),h=n(37),m=h.create({baseURL:"http://sdelka/php/"}),b=function(e,t){return m.get("user_connect.php?userlogin="+e+"&userpassword="+t)},w=function(e){return m.get("user_role.php?userid="+e)};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k={userLogin:"",userPassword:"",userName:"",userId:0,userAccess:0,userRoles:null,selectMainMenu:[]},_=function(e,t){return function(n){b(e,t).then((function(a){if(1===a.data.resultCode)alert(a.data.value);else{var r=a.data.value[0].id,o=a.data.value[0].name_user;w(r).then((function(a){n(function(e,t,n,a,r){return{type:"login",logname:e,password:t,userid:n,name:a,roles:r}}(e,t,r,o,a.data))}))}}))}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":return window.sessionStorage.setItem("login",t.logname),window.sessionStorage.setItem("password",t.password),y({},e,{userLogin:t.logname,userPassword:t.password,userId:t.userid,userName:t.name},e.selectMainMenu,{selectMainMenu:t.roles});case"logout":return y({},e,{userPassword:"",userId:0});case"set_menu":return y({},e,{userSelectMenu:t.comp});default:return e}},O=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={login:n.props.userLogin,password:n.props.userPassword},n.onLoginChange=function(e){n.setState({login:e.currentTarget.value})},n.onPasswordChange=function(e){n.setState({password:e.currentTarget.value})},n.connectedUser=function(){n.props.setConnect(n.state.login,n.state.password)},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.userPassword!==this.props.userPassword&&this.setState({password:this.props.userPassword})}},{key:"render",value:function(){return 0===this.props.userId?r.a.createElement("div",{className:"sdelkamain"},r.a.createElement("input",{type:"text",placeholder:"Enter your login",value:this.state.login,onChange:this.onLoginChange}),r.a.createElement("input",{type:"text",placeholder:"Enter your password",value:this.state.password,onChange:this.onPasswordChange}),r.a.createElement("button",{onClick:this.connectedUser},"\u0412\u0445\u0456\u0434")):null}}]),t}(r.a.Component),D=Object(l.b)((function(e){return{userLogin:e.loguser.userLogin,userPassword:e.loguser.userPassword,userId:e.loguser.userId}}),{setConnect:_})(O),j=n(19),C=function(e){var t=e.userId,n=e.selectMainMenu,a=e.DisconectingUser,o=n.map((function(e){return r.a.createElement(i.b,{key:e.code_dov,className:"dovbutton",to:"/"+e.component,onClick:function(){return window.sessionStorage.setItem("maincomp","/"+e.component)}},r.a.createElement("span",null,e.name_dovid))}));return 0===t?null:r.a.createElement("div",{className:"wraper"},r.a.createElement("div",{className:"navdiv"},r.a.createElement("div",{className:"ribbon"},o,r.a.createElement(i.b,{className:"dovbutton",to:"/",onClick:function(){window.sessionStorage.removeItem("password"),a()}},r.a.createElement("span",null," \u0412\u0438\u0445\u0456\u0434 ")))))},S=n(5),M=n.n(S),x=n(20),I=h.create({baseURL:"http://sdelka/php/"}),P=function(e){return I.get("dovidnuku.php?userid="+e)},R=function(e,t){return I.get("dovidnuk_user_select.php?userid="+t+"&dovid="+e)},H=function(e){return I.get("dovidnuk_button.php?dovid="+e)},N=function(e,t){return I.get("dovidnuk_table.php?dovid="+e+"&butid="+t)},F=function(e,t){return I.get("dovidnuk_data.php?dovid="+e+"&id="+t)},T=function(e,t,n){JSON.stringify(t);return I.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",I.post("dovidnuk_ins_upd.php",{userroles:e,datafields:t,id:n})},V=function(e,t){return I.get("dovidnuk_del.php?dovid="+e+"&id="+t)},B=function(e,t){return I.get("dovidnuk_select_button.php?id_dov="+e+"&id_but="+t)},A=function(e,t,n,a){return console.log(e+"?data_dov="+t+"&data_but="+n+"&data_id="+a),I.get(e+"?data_dov="+t+"&data_but="+n+"&data_id="+a)};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function U(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J="set_selected_dovidnuk",W="get_selection_condition",X="get_dovidnuk_buttons",q="user_sected_selection_condition",z="set_user_select_row",G="set_user_edit_row",K="set_data_selected_button",Q={selectDov:0,selectDovRow:-1,is_view_table:1,dataDovidnuk:[],dataSelectionConditions:[],selectedDataSelectionConditions:[],dovButtons:[],tableHeader:[],tableData:[],refId:0,refCode:-1,refType:"",refFileResult:"",refHeader:[],refData:[],isModal:0},Y=function(e,t){return{type:q,dataindex:e,data:t}},Z=function(e){return{type:"get_table_header",tableheader:e}},$=function(e){return{type:"get_table_data",tabledatas:e}},ee=function(e,t,n,a,r,o,s){return{type:K,ref_code:e,ref_type:t,ref_header:n,ref_data:a,ref_id:r,is_modal:o,ref_result:s}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return U({},e,{selectDov:t.id_dov});case"set_all_dovidnuku":return U({},e,{dataDovidnuk:t.arrdov});case W:return U({},e,{dataSelectionConditions:t.selcondarr,selectedDataSelectionConditions:t.selcondarr.map((function(e){return-1}))});case X:return U({},e,{dovButtons:t.butt});case q:return U({},e,{selectedDataSelectionConditions:e.selectedDataSelectionConditions.map((function(e,n){t.dataindex?t.data:e}))});case"get_table_header":return U({},e,{tableHeader:t.tableheader});case"get_table_data":return U({},e,{tableData:t.tabledatas});case z:return U({},e,{selectDovRow:t.row});case G:return U({},e,{tableData:e.tableData.map((function(e,n){return n===t.indexrow?t.datarow:e}))});case K:return U({},e,{refId:t.ref_id,refCode:t.ref_code,refType:t.ref_type,refHeader:t.ref_header,refData:t.ref_data,isModal:t.is_modal,refFileResult:t.ref_result});case"close_modal_form":return U({},e,{isModal:0});default:return e}},ne=function(e){var t=e.userId,n=e.DataDovidnuk,a=e.selectDovidnuk,o=n.map((function(e){return r.a.createElement(i.b,{key:e.code_dovid,className:"dovbutton",to:"/Dovidnuk",onClick:function(){a(e.code_dovid,t),window.sessionStorage.setItem("dovcode",e.code_dovid)}},r.a.createElement("span",null,e.name_dovid))}));return r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement("div",{className:"wraper"},r.a.createElement("div",{className:"navdiv"},r.a.createElement("div",{className:"ribbon"},o))),r.a.createElement("hr",null))},ae=function(e){var t=e.dataSelectionConditions,n=e.selectedData,a=e.selectdov,o=e.selectSelectionConditions,s=t.map((function(e,t){return r.a.createElement("div",{key:"dovselect"},r.a.createElement("label",null," ",e.field_caption," "),r.a.createElement("select",{key:t,"data-key":t,className:"users_select",id:e.table_user_select,value:n[t],onChange:function(e){o(e.target.getAttribute("data-key"),e.target.value,a)}},r.a.createElement("option",{key:"-1",value:"-1"}),e.data_select.map((function(e,t){return r.a.createElement("option",{key:t,value:e.field_user_id},e.field_user_view)}))))}));return t.length>0?r.a.createElement("div",null," ",s," "):null},re=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={selectRow:0,datarow:{}},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"setSelectRow",value:function(){this.setState({selectRow:1})}},{key:"setEditValue",value:function(e,t){var n=this.state.datarow;n[e]=t,this.setState({datarow:n})}},{key:"saveEditValue",value:function(){for(var e={},t=0;t<this.props.tableHeader.length;t++)e[t]=[],e[t][0]=this.props.tableHeader[t].name_table,e[t][1]=this.props.tablerow[this.props.tableHeader[t].name_table],e[t][2]=this.state.datarow[this.props.tableHeader[t].name_table];this.props.setEditRow(this.props.index,this.state.datarow,this.state.datarow[0],this.props.selectDov,e),this.setState({selectRow:0})}},{key:"unsaveEditValue",value:function(){var e=[];e[0]=this.props.tablerow[0];for(var t=0;t<this.props.tableHeader.length;t++)e[this.props.tableHeader[t].name_table]=this.props.tablerow[this.props.tableHeader[t].name_table];this.setState({datarow:e,selectRow:0})}},{key:"deleteEditValue",value:function(){this.props.deleteValue(this.props.selectDov,this.props.tablerow[0]),this.setState({selectRow:0})}},{key:"clickButton",value:function(e){this.props.clickButton(this.props.selectDov,e,this.props.tablerow[0])}},{key:"componentDidMount",value:function(){this.unsaveEditValue()}},{key:"componentDidUpdate",value:function(e,t){if(e.tablerow!==this.props.tablerow){for(var n=[],a=0;a<this.props.tableHeader.length;a++)n[this.props.tableHeader[a].name_table]=this.props.tablerow[this.props.tableHeader[a].name_table];this.setState({datarow:n})}}},{key:"render",value:function(){for(var e=this,t=[],n=[],a=0;a<this.props.tableHeader.length;a++)1===this.state.selectRow?t[a]=r.a.createElement("td",{key:a},r.a.createElement("input",{className:"dovinputtable",type:"text",value:this.state.datarow[this.props.tableHeader[a].name_table],"data-key":this.props.tableHeader[a].name_table,onChange:function(t){e.setEditValue(t.target.getAttribute("data-key"),t.target.value)}})):t[a]=r.a.createElement("td",{key:this.props.tableHeader[a].name_table},this.state.datarow[this.props.tableHeader[a].name_table]);for(a=0;a<this.props.dovbutton.length;a++)1===this.props.dovbutton[a].in_row&&(n[a]=r.a.createElement("td",{key:this.props.dovbutton[a].id_button},r.a.createElement("button",{value:this.props.dovbutton[a].name_button,"data-key":this.props.dovbutton[a].id_button,"data-id":this.props.index,onClick:function(t){return e.clickButton(t.target.getAttribute("data-key"),t.target.getAttribute("data-id"))}},this.props.dovbutton[a].name_button)," "));var o=[];return o[0]=r.a.createElement("tr",{key:this.props.index,"data-key":this.props.index,onDoubleClick:function(){e.setSelectRow()}},t,n),1===this.state.selectRow&&(o[1]=r.a.createElement("tr",null,r.a.createElement("td",{colSpan:this.props.tableHeader.length},r.a.createElement("button",{onClick:function(){e.saveEditValue()}},"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043c\u0456\u043d\u0438"),r.a.createElement("button",{onClick:function(){e.unsaveEditValue()}},"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438 \u0437\u043c\u0456\u043d\u0438"),r.a.createElement("button",{onClick:function(){e.deleteEditValue()}},"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438")))),r.a.createElement(r.a.Fragment,null," ",o," ")}}]),t}(r.a.Component);function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var se=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={values:{}},n}return Object(f.a)(t,e),Object(c.a)(t,[{key:"setValues",value:function(e,t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(n,!0).forEach((function(t){Object(v.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.state.values);n[e]=t,this.setState({values:n})}},{key:"closeModal",value:function(){this.props.closeModalForms()}},{key:"saveValue",value:function(){console.log("save value"),console.log(this.state.values)}},{key:"componentDidMount",value:function(){0===this.props.refCode&&this.setState({values:this.props.refData})}},{key:"render",value:function(){var e=this,t={},n={},a=[],o=0;if(0===this.props.refCode){for(var s in console.log("set type = password"),t={width:"300px",height:"100px",top:window.innerHeight/2-50,left:window.innerWidth/2-150},n={overflow:"visible"},this.setState({styletype:"password"}),this.state.values)a[o]=r.a.createElement("p",null,r.a.createElement("label",null," ",this.props.refHeader[s]," "),r.a.createElement("input",{type:"password","data-key":s,value:this.state.values[s],onChange:function(t){e.setValues(t.target.getAttribute("data-key"),t.target.value)}})),o++;a[o]=r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){e.saveValue()}},"\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438"),r.a.createElement("button",{onClick:function(){e.closeModal()}},"\u0412\u0456\u0434\u043c\u0456\u043d\u0438\u0442\u0438"))}else if(2===this.props.refCode){console.log("modal form data"),console.log(this.props.refHeader),console.log(this.props.refData);var i,l=this.props.refHeader.map((function(e,t){return r.a.createElement("th",{key:t},e.name_col)})),u=null;u=this.props.refData[0].checkes?r.a.createElement("tr",null," ",r.a.createElement("th",{key:-1})," ",l," "):r.a.createElement("tr",null," ",l," "),i=this.props.refData.map((function(e,t){console.log(e);var n=0,a=[];for(var o in e)a[n]=r.a.createElement("td",{key:n},"  ",e[o],"  "),n++;return r.a.createElement("tr",{key:t}," ",a," ")})),a=r.a.createElement("table",{className:"TableDespatch"},u,i)}return this.setStyle(),r.a.createElement(r.a.Fragment,null," ",r.a.createElement("div",{id:"modal_form",style:t},r.a.createElement("div",{style:n},r.a.createElement("span",{id:"modal_close",onClick:function(){e.closeModal()}},"X")),r.a.createElement("div",{className:"container"},a)),r.a.createElement("div",{id:"overlay"}))}}]),t}(r.a.Component),ie=function(e){var t=e.tableHeader,n=e.tableData,a=e.dovbutton,o=e.selectdov,s=e.selectdovrow,i=e.dovButtons,l=e.selectRow,u=e.setEditRow,c=e.clickButton,d=e.deleteRow,p=e.isModal,f=e.refId,v=e.refCode,h=e.refType,m=e.refFileResult,b=e.refHeader,w=e.refData,g=e.closeModalForms,y=a.map((function(e,t){if(e.in_row)return r.a.createElement("th",{key:"b"+t})})),k=t.map((function(e,t){return r.a.createElement("th",{key:t},e.name_col)})),_=n.map((function(e,n){return r.a.createElement(re,{tableHeader:t,dovbutton:a,tablerow:e,index:n,selectdovrow:s,selectRow:l,selectDov:o,setEditRow:u,clickButton:c,deleteValue:d,isModal:p,refId:f,refCode:v,refType:h,refFileResult:m,refHeader:b,refData:w})})),E=t.map((function(e,t){return r.a.createElement("td",{key:t},r.a.createElement("input",{type:"text",className:"dovinputtable"}))})),O=a.map((function(e,t){if(1===e.in_row)return r.a.createElement("td",{key:"b"+t})})),D=i.map((function(e,t){return e.in_row?null:r.a.createElement("button",{key:t,value:e.id_dovidnuk},e.name_button)}));return r.a.createElement("div",null,D,t.length>0?r.a.createElement("table",{className:"TableDespatch"},r.a.createElement("tbody",null,r.a.createElement("tr",{key:"-2"},k,y),r.a.createElement("tr",{key:"-1"},E,O),_)):"",function(){if(1===p)return r.a.createElement(se,{refId:f,refCode:v,refType:h,refFileResult:m,refHeader:b,refData:w,closeModalForms:g})}())},le=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.getDovidnuku(this.props.userId);var e=window.sessionStorage.getItem("dovcode");e&&this.props.selectDovidnuk(e,this.props.userId)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ne,{userId:this.props.userId,DataDovidnuk:this.props.dovidnuk.dataDovidnuk,selectDovidnuk:this.props.selectDovidnuk}),r.a.createElement(ae,{dataSelectionConditions:this.props.dovidnuk.dataSelectionConditions,selectedData:this.props.dovidnuk.selectedDataSelectionConditions,selectdov:this.props.dovidnuk.selectDov,selectSelectionConditions:this.props.selectSelectionConditions}),r.a.createElement(ie,{tableHeader:this.props.dovidnuk.tableHeader,tableData:this.props.dovidnuk.tableData,selectedData:this.props.dovidnuk.selectedDataSelectionConditions,selectdov:this.props.dovidnuk.selectDov,selectdovrow:this.props.dovidnuk.selectDovRow,dovButtons:this.props.dovidnuk.dovButtons,setTable:this.props.setTable,selectRow:this.props.selectRow,dovbutton:this.props.dovidnuk.dovButtons,setEditRow:this.props.setEditRow,clickButton:this.props.buttonClick,deleteRow:this.props.deleteRow,isModal:this.props.dovidnuk.isModal,refId:this.props.dovidnuk.refId,refCode:this.props.dovidnuk.refCode,refType:this.props.dovidnuk.refType,refFileResult:this.props.dovidnuk.refFileResult,refHeader:this.props.dovidnuk.refHeader,refData:this.props.dovidnuk.refData,closeModalForms:this.props.closeModalForms}))}}]),t}(r.a.Component),ue=Object(l.b)((function(e){return{dovidnuk:e.dovidnuk,userId:e.loguser.userId}}),{buttonClick:function(e,t,n){return function(){var a=Object(x.a)(M.a.mark((function a(r){var o,s,i;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,B(e,t);case 2:if(!(o=a.sent)){a.next=23;break}if(console.log(o),0!==o.data[0]){a.next=10;break}r(ee(o.data[0],o.data.typedata,o.data.fields,o.data.fieldsdata,n,1,o.data.textresult)),console.log("Password"),a.next=23;break;case 10:if(1!==o.data[0]){a.next=15;break}r(ee(o.data[0],o.data.typedata,[],[],n,0,"")),console.log("Exit"),a.next=23;break;case 15:return a.next=17,N(e,t);case 17:return s=a.sent,a.next=20,A(o.data.text,e,t,n);case 20:i=a.sent,console.log("response1"),200==i.status&&200==s.status&&(console.log(i),console.log(s),r(ee(o.data[0],o.data.typedata,s.data,i.data,n,1,"")));case 23:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},selectDovidnuk:function(e,t){return function(){var n=Object(x.a)(M.a.mark((function n(a){var r,o;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:J,id_dov:e}),R(e,t).then((function(e){var t;a((t=e.data,{type:W,selcondarr:t}))})),H(e).then((function(e){var t;a((t=e.data,{type:X,butt:t}))})),n.next=5,N(e,"");case 5:return(r=n.sent)&&a(Z(r.data)),n.next=9,F(e,-9);case 9:(o=n.sent)&&a($(o.data));case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},getDovidnuku:function(e){return function(t){P(e).then((function(e){t({type:"set_all_dovidnuku",arrdov:e.data})}))}},selectSelectionConditions:function(e,t,n){return function(){var a=Object(x.a)(M.a.mark((function a(r){var o;return M.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r(Y(e,t)),a.next=3,F(n,t);case 3:(o=a.sent)&&r($(o.data));case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},setTable:function(e,t){return function(){var n=Object(x.a)(M.a.mark((function n(a){var r,o;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N(t,"");case 2:return(r=n.sent)&&a(Z(r.data)),n.next=6,F(t,e);case 6:(o=n.sent)&&a($(o.data));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},selectRow:function(e){return function(t){t({type:z,row:e})}},setEditRow:function(e,t,n,a,r){return function(){var o=Object(x.a)(M.a.mark((function o(s){return M.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,T(a,r,n);case 2:o.sent&&s({type:G,indexrow:e,datarow:t});case 4:case"end":return o.stop()}}),o)})));return function(e){return o.apply(this,arguments)}}()},deleteRow:function(e,t){return function(){var n=Object(x.a)(M.a.mark((function n(a){var r;return M.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V(e,t);case 2:if(!n.sent){n.next=8;break}return n.next=6,F(e,-9);case 6:(r=n.sent)&&a($(r.data));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},closeModalForms:function(){return function(e){e({type:"close_modal_form"})}}})(le),ce=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return 0===this.props.userId?null:r.a.createElement(i.a,null,r.a.createElement(C,{userId:this.props.userId,selectMainMenu:this.props.selectMainMenu,DisconectingUser:this.props.setDisconect}),r.a.createElement(j.a,{exact:!0,path:"/"}),r.a.createElement(j.a,{path:"/Dovidnuk",render:function(){return r.a.createElement(ue,e.props)}}))}}]),t}(r.a.Component),de=Object(l.b)((function(e){return{userId:e.loguser.userId,selectMainMenu:e.loguser.selectMainMenu,userSelectMenu:e.loguser.userSelectMenu}}),{setDisconect:function(){return function(e){e({type:"logout"})}}})(ce),pe=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=window.sessionStorage.getItem("login"),t=window.sessionStorage.getItem("password");console.log("AppMain DidMount user = "+e+"  "+t),console.log("AppMain DidMount main menu  = "+window.sessionStorage.getItem("maincomp")),console.log("AppMain DidMount dov menu  = "+window.sessionStorage.getItem("dovcode")),e&&t&&this.props.setConnect(e,t)}},{key:"render",value:function(){return 0===this.props.userId?r.a.createElement("div",null,r.a.createElement(D,null)):r.a.createElement("div",null,r.a.createElement(de,null))}}]),t}(r.a.Component),fe=Object(l.b)((function(e){return{userId:e.loguser.userId}}),{setConnect:_})(pe),ve=n(23),he={SelectMainMenu:[{name_dovid:"\u0410\u0434\u043c\u0456\u043d\u0456\u0441\u0442\u0440\u0443\u0432\u0430\u043d\u043d\u044f",code_dov:"1"},{name_dovid:"\u0422\u0430\u0431\u0435\u043b\u044e\u0432\u0430\u043d\u043d\u044f",code_dov:"2"},{name_dovid:"\u0414\u043e\u0432\u0456\u0434\u043d\u0438\u043a",code_dov:"3"}]},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"login":return e.userLogin=t.logname,e.userPassword=t.password,e.paths="/main",e;case"logout":return e.userLogin="",e.userPassword="",e.paths="/",e;default:return e}},be=n(69),we=n(176),ge=Object(ve.c)({loguser:E,main:me,dovidnuk:te,form:we.a}),ye=Object(ve.d)(ge,Object(ve.a)(be.a)),ke=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{store:ye},r.a.createElement(fe,null)))};s.a.render(r.a.createElement(ke,null),document.getElementById("root"))},48:function(e,t,n){},72:function(e,t,n){e.exports=n(174)}},[[72,1,2]]]);
//# sourceMappingURL=main.5d512522.chunk.js.map