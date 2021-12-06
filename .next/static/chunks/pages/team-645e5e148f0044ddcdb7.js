(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[38],{5851:function(e,s,t){"use strict";var a=t(7294),i=t(2318),n=t(9005),r=t(5828),c=t(5005),l=t(7625),m=t(9398),d=t(5893);s.Z=function(e){var s=e.title,t=e.type,x=(0,a.useState)({txtname:"",txtemail:"",txtmobile:"",txtmessage:"",errorshow:!1,successshow:!1,message:""}),o=x[0],h=x[1];return(0,d.jsx)("div",{className:"row",children:(0,d.jsx)("div",{className:"col-12 gedf-main p-2",children:(0,d.jsxs)("div",{className:"card gedf-card bg-light",children:[(0,d.jsx)("h5",{className:"card-header info-color white-text text-center py-4 pscolor",children:(0,d.jsx)("strong",{children:s})}),(0,d.jsxs)("div",{className:"card-body p-4",children:[(0,d.jsx)("div",{className:"border_b"}),(0,d.jsxs)("div",{className:"text-muted",children:[(0,d.jsxs)(i.Z,{className:"mb-3 mt-4",children:[(0,d.jsx)(i.Z.Prepend,{children:(0,d.jsx)(i.Z.Text,{children:(0,d.jsx)(l.G,{icon:m.ILF})})}),(0,d.jsx)(n.Z,{id:"txtname",value:o.txtname,onChange:function(e){return h((function(s){return{txtname:e.target.value,txtemail:s.txtemail,txtmobile:s.txtmobile,txtmessage:s.txtmessage,errorshow:!1,successshow:!1,message:""}}))},placeholder:"\u0928\u093e\u092e","aria-label":"\u0928\u093e\u092e","aria-describedby":"txtname"})]}),(0,d.jsxs)(i.Z,{className:"mb-3 mt-4",children:[(0,d.jsx)(i.Z.Prepend,{children:(0,d.jsx)(i.Z.Text,{children:(0,d.jsx)(l.G,{icon:m.FU$})})}),(0,d.jsx)(n.Z,{id:"txtemail",value:o.txtemail,onChange:function(e){return h((function(s){return{txtname:s.txtname,txtemail:e.target.value,txtmobile:s.txtmobile,txtmessage:s.txtmessage,errorshow:!1,successshow:!1,message:""}}))},placeholder:"\u0908\u092e\u0947\u0932","aria-label":"\u0908\u092e\u0947\u0932","aria-describedby":"txtemail"})]}),(0,d.jsxs)(i.Z,{className:"mb-3 mt-4",children:[(0,d.jsx)(i.Z.Prepend,{children:(0,d.jsx)(i.Z.Text,{children:(0,d.jsx)(l.G,{icon:m.j1w})})}),(0,d.jsx)(n.Z,{id:"txtmobile",value:o.txtmobile,onChange:function(e){return h((function(s){return{txtname:s.txtname,txtemail:s.txtemail,txtmobile:e.target.value,txtmessage:s.txtmessage,errorshow:!1,successshow:!1,message:""}}))},placeholder:"\u092e\u094b\u092c\u093e\u0907\u0932","aria-label":"\u092e\u094b\u092c\u093e\u0907\u0932","aria-describedby":"txtmobile"})]}),(0,d.jsxs)(i.Z,{className:"mb-3 mt-4",children:[(0,d.jsx)(i.Z.Prepend,{children:(0,d.jsx)(i.Z.Text,{children:(0,d.jsx)(l.G,{icon:m.Xcf})})}),(0,d.jsx)(n.Z,{id:"txtmessage",value:o.txtmessage,onChange:function(e){return h((function(s){return{txtname:s.txtname,txtemail:s.txtemail,txtmobile:s.txtmobile,txtmessage:e.target.value,errorshow:!1,successshow:!1,message:""}}))},as:"textarea",placeholder:"\u0938\u0902\u0926\u0947\u0936","aria-label":"\u0938\u0902\u0926\u0947\u0936","aria-describedby":"txtmessage"})]}),o.errorshow?(0,d.jsx)(r.Z,{id:"errormessage",variant:"danger",className:"mt-2 mb-2",children:o.message},"1"):"",o.successshow?(0,d.jsx)(r.Z,{id:"successmessage",variant:"success",className:"mt-2 mb-2",children:"\u0906\u092a\u0915\u093e \u0938\u0902\u0926\u0947\u0936 \u0939\u092e\u0947 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0939\u094b \u0917\u092f\u093e \u0939\u0948\u0964"},"2"):"",(0,d.jsx)(c.Z,{id:"btnsubmit",className:"mt-4 btn-ps",size:"lg",block:!0,onClick:function(){return function(){var e="",s=!0;if(o.txtname.length<3?(e="\u0905\u092a\u0928\u093e \u0938\u0939\u0940 \u0928\u093e\u092e \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902",s=!1):""===o.txtemail?(e="\u0905\u092a\u0928\u093e \u0938\u0939\u0940 \u0908\u092e\u0947\u0932 \u0906\u0907\u0921\u0940 \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902",s=!1):o.txtmobile.length<10?(e="\u0905\u092a\u0928\u093e \u0938\u0939\u0940 \u092e\u094b\u092c\u093e\u0908\u0932 \u0928. \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902",s=!1):o.txtmessage.length<10&&(e="\u0905\u092a\u0928\u093e \u0938\u0939\u0940 \u092e\u0948\u0938\u0947\u091c \u0926\u0930\u094d\u091c \u0915\u0930\u0947\u0902",s=!1),s){var a=o.txtname,i=o.txtemail,n=o.txtmobile,r=o.txtmessage,c=config.application_id,l={name:a,email:i,mobile:n,message:r,contact_type:t,application_id:c,client_ip:"192.168.1.1"};fetchServerData("/",config.CONTACTUS_SUBMIT,l).then((function(e){h("OK"===e?function(e){return{txtname:"",txtemail:"",txtmobile:"",txtmessage:"",errorshow:!1,successshow:!0,message:""}}:function(s){return{txtname:s.txtname,txtemail:s.txtemail,txtmobile:s.txtmobile,txtmessage:s.txtmessage,errorshow:!0,successshow:!1,message:e}})}))}else h((function(s){return{txtname:s.txtname,txtemail:s.txtemail,txtmobile:s.txtmobile,txtmessage:s.txtmessage,errorshow:!0,successshow:!1,message:e}}))}()},children:"Submit"})]})]})]})})})}},5698:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSG:function(){return h},default:function(){return u}});var a=t(9008),i=(t(5675),t(7895)),n=(t(5851),t(1664)),r=t(1785),c=t(8224),l=t(7625),m=t(9398),d=t(653),x=t(3064),o=t(5893),h=!0;function u(e){var s=e.gethometopsection,t=e.getrighdata,h=s.Table,u=t.Table2,j=t.Table;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a.default,{children:[(0,o.jsx)("title",{children:h[0].meta_title}),(0,o.jsx)("meta",{name:"keywords",content:h[0].meta_keywords}),(0,o.jsx)("meta",{name:"description",content:h[0].meta_description}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("link",{rel:"canonical",href:x.SiteUrl})]}),(0,o.jsx)("div",{className:"d-none d-md-block",children:(0,o.jsx)("div",{className:"row mtop-desktop pl-5 pr-5",children:(0,o.jsx)("div",{className:"col-12 gedf-main text-center p-0",children:(0,o.jsx)("div",{className:"gedf-card text-center ad-728-90",children:(0,o.jsx)("div",{className:"ad-728-90",children:(0,o.jsx)("div",{className:"adunitContainer",children:(0,o.jsx)("div",{className:"adBox",id:"adSlot-0","data-google-query-id":"CIe92N_O_PMCFZIItwAdmZoKEQ",children:(0,o.jsx)("div",{id:"google_ads_iframe_21715648431/prabhasakshi_react_website/prabhasakshi_react_website_728_90_0__container__"})})})})})})})}),(0,o.jsx)(i.Z,{}),(0,o.jsx)("div",{className:"container p-0",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)(r.Z,{}),(0,o.jsx)("div",{className:"col-md-6 bg-white mt-3",children:(0,o.jsxs)("div",{className:"container-fluid p-3",children:[(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-12",children:(0,o.jsx)("nav",{"aria-label":"breadcrumb",children:(0,o.jsxs)("ol",{className:"breadcrumb",children:[(0,o.jsx)("li",{className:"breadcrumb-item",children:(0,o.jsx)(l.G,{icon:m.J9Y})}),(0,o.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:h[0].page_name})]})})})}),(0,o.jsx)("div",{className:"row mtop-desktop d-block d-sm-none",children:(0,o.jsx)("div",{className:"col-12 gedf-main text-center p-0",children:(0,o.jsx)("div",{className:"gedf-card text-center ad-300-250",children:(0,o.jsx)("div",{className:"ad-300-250",children:(0,o.jsx)("div",{className:"adunitContainer",children:(0,o.jsx)("div",{className:"adBox",id:"adSlot-5"})})})})})}),(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-12",children:(0,o.jsxs)("div",{className:"row mt-3 mb-3",children:[(0,o.jsx)("div",{className:"col-12",children:(0,o.jsxs)("b",{className:"font24px position-relative",children:[(0,o.jsx)("img",{className:"sun_imgn2",src:"/images/prabhasakshi_sun_logo.webp",alt:"sunimage"}),(0,o.jsx)(n.default,{className:"ml-4",href:"/contactus",children:h[0].page_name})]})}),(0,o.jsx)("div",{className:"col-12",children:(0,o.jsx)("div",{className:"lines"})})]})}),(0,o.jsx)("div",{className:"col-12 p-2",children:(0,d.ZP)(h[0].page_content)})]})]})}),(0,o.jsx)(c.Z,{tendring:j,rightaudio:u})]})})]})}},4320:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return t(5698)}])},247:function(){}},function(e){e.O(0,[774,523,568,653,964,332,888,179],(function(){return s=4320,e(e.s=s);var s}));var s=e.O();_N_E=s}]);