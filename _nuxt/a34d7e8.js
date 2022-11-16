(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{328:function(e,t,n){n(5);var r=n(341),o=n(336);e.exports={buildCardsData:function(e,t,n,r,o){var data=[];for(var l in r){if("Translated"===t){if(r[l]===o[l])continue}else if("To be translated"===t&&r[l]!==o[l])continue;var c={page:n,language:e,strKey:l,originalStr:r[l],translatedStr:o[l],cardColor:r[l]===o[l]?"border-left: 4px solid green;":"border: none"};data.push(c)}return data},buildEditedTranslatedFile:function(e,t){for(var n in t)e[n]=t[n];return e},getLanguages:function(e){return e.languages.filter((function(e){return"en"!==e}))},downloadFileJSON:function(e,t){var n=o.unflatten(t,{delimiter:"/"}),r=JSON.stringify(n,null,2),l=new Blob([r],{type:"application/json"}),a=document.createElement("a");a.download="reference_"+e,a.href=URL.createObjectURL(l),a.dataset.downloadurl=["application/json",a.download,a.href].join(":"),document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout((function(){URL.revokeObjectURL(a.href)}),1500)},downloadFileYAML:function(e,t){var n=o.unflatten(t,{delimiter:"/"}),l=r.safeDump(n),c=new Blob([l],{type:"application/x-yaml"}),a=document.createElement("a");a.download="website_"+e,a.href=URL.createObjectURL(c),a.dataset.downloadurl=["application/x-yaml",a.download,a.href].join(":"),document.body.appendChild(a),a.click(),document.body.removeChild(a),setTimeout((function(){URL.revokeObjectURL(a.href)}),1500)}}},332:function(e,t,n){"use strict";n.r(t);var r=n(207),o=n(417),l=n(152),c=n(416),d=n(419),f=n(418),m=n(14),h=(n(50),n(328)),w=n.n(h),v={props:{page:{type:String,default:function(){return""}}},fetch:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://raw.githubusercontent.com/processing/p5.js-website/main/package.json",t.next=3,e.$http.$get("https://raw.githubusercontent.com/processing/p5.js-website/main/package.json");case 3:n=t.sent,e.languages=w.a.getLanguages(n);case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{languages:[],language:"",originalFileSHA:"",translatedFileSHA:"",filterOption:"",filterOptions:["All","Translated","To be translated"]}},methods:{emitLang:function(e){this.$emit("setLang",this.language)},emitFilter:function(e){this.$emit("setFilter",this.filterOption)},downloadFile:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n,r,o,l,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="p5js-website-translator.files.".concat(e.page,".").concat(e.language),t.next=3,e.$localForage.getItem(n);case 3:return r=t.sent,o="p5js-website-translator.changes.".concat(e.page,".").concat(e.language),t.next=7,e.$localForage.getItem(o);case 7:l=t.sent,c=w.a.buildEditedTranslatedFile(r.file,l),"reference"===e.page?w.a.downloadFileJSON(e.language,c):w.a.downloadFileYAML(e.language,c);case 10:case"end":return t.stop()}}),t)})))()},restoreFile:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="p5js-website-translator.changes.".concat(e.page,".").concat(e.language),t.next=3,e.$localForage.setItem(n,{});case 3:e.$nuxt.refresh();case 4:case"end":return t.stop()}}),t)})))()},getCommitSHAs:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n,r,o,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="p5js-website-translator.files.".concat(e.page,".").concat(e.language),t.next=3,e.$localForage.getItem(n);case 3:return r=t.sent,o="p5js-website-translator.files.".concat(e.page,".").concat(e.language),t.next=7,e.$localForage.getItem(o);case 7:l=t.sent,e.originalFileSHA=r.commitSHA,e.translatedFileSHA=l.commitSHA;case 10:case"end":return t.stop()}}),t)})))()},isLanguageSet:function(e){return 0===e.length}},fetchOnServer:!1},j=n(77),component=Object(j.a)(v,(function(){var e=this,t=e._self._c;return t(c.a,{staticClass:"d-flex justify-space-between"},[t(o.a,{attrs:{cols:"6",md:"4"}},[t(d.a,{attrs:{label:"Language",outlined:"",dense:"",items:e.languages},on:{change:e.emitLang},model:{value:e.language,callback:function(t){e.language=t},expression:"language"}})],1),e._v(" "),t(f.a),e._v(" "),t(o.a,{attrs:{cols:"6",md:"4"}},[t(d.a,{attrs:{label:"Filter",outlined:"",dense:"",items:e.filterOptions,disabled:e.isLanguageSet(e.language)},on:{change:e.emitFilter},model:{value:e.filterOption,callback:function(t){e.filterOption=t},expression:"filterOption"}})],1),e._v(" "),t(o.a,{attrs:{cols:"6",md:"2"}},[t(r.a,{attrs:{justified:"","min-height":"40",disabled:e.isLanguageSet(e.language)},on:{click:function(t){return e.restoreFile()}}},[e._v("\n      RESTORE\n    ")])],1),e._v(" "),t(o.a,{attrs:{cols:"6",md:"2"}},[t(r.a,{staticClass:"white--text",attrs:{color:"green lighten-1","min-height":"40",download:"",disabled:e.isLanguageSet(e.language)},on:{click:function(t){return e.downloadFile()}}},[e._v("\n      DOWNLOAD\n      "),t(l.a,{attrs:{right:""}},[e._v("mdi-download")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);