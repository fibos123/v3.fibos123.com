_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{WTgy:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return $}));var r=n("nKUr"),i=n("o0o1"),s=n.n(i),a=n("HaE+"),c=n("apO0"),u=n("q1tI"),o=n("YFqc"),d=n.n(o),h=n("vDqi"),l=n.n(h),f=n("LvDl"),m=n.n(f),b=n("rOcY"),p=n("cBaE");function $(){var t=Object(u.useState)([{name:"\u751f\u4ea7\u8005",value:""},{name:"\u51fa\u5757\u65f6\u95f4",value:""},{name:"\u6700\u65b0\u533a\u5757",value:""}]),e=t[0],n=t[1],i=Object(u.useState)(),o=i[0],h=i[1];return Object(u.useEffect)((function(){function t(){return e.apply(this,arguments)}function e(){return(e=Object(a.a)(s.a.mark((function t(){var e,r,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.get(b.a.api_bp_status);case 2:e=t.sent,r=m.a.get(e,"data",{}),i=[{name:"\u751f\u4ea7\u8005",value:r.head_block_producer},{name:"\u51fa\u5757\u65f6\u95f4",value:p.a.formatDate(r.head_block_time+"Z")},{name:"\u6700\u65b0\u533a\u5757",value:p.a.formatNumber(r.head_block_num)}],n(i),h(r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}t();var r=setInterval(t,1e3);return function(){return clearInterval(r)}}),[]),Object(r.jsx)(c.a,{title:"\u8282\u70b9\u76d1\u63a7 | FIBOS \u5bfc\u822a",children:Object(r.jsx)("div",{children:Object(r.jsxs)("div",{className:"px-6",children:[Object(r.jsxs)("div",{className:"pb-4",children:[Object(r.jsx)(d.a,{href:"/monitor",children:Object(r.jsx)("a",{href:"/monitor",className:"bg-indigo-500 transition duration-150 ease-in-out text-white py-2 px-4 rounded cursor-default",children:"\u51fa\u5757\u8282\u70b9\u5728\u7ebf\u72b6\u6001"})}),Object(r.jsx)(d.a,{href:"/monitor/pointer",children:Object(r.jsx)("a",{href:"/monitor/pointer",className:"ml-4 text-indigo-500 transition duration-150 ease-in-out bg-white py-2 px-4 rounded hover:bg-indigo-500 hover:text-white",children:"\u63a5\u5165\u70b9\u72b6\u6001\u76d1\u6d4b"})})]}),Object(r.jsx)("div",{className:"text-2xl pb-4",children:"\u51fa\u5757\u8282\u70b9\u5728\u7ebf\u72b6\u6001"}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"flex flex-wrap gap-4 text-center",children:e.map((function(t){return Object(r.jsxs)("div",{className:"flex-1 rounded bg-white p-4",children:[Object(r.jsx)("h2",{className:"text-gray-600",children:t.name}),Object(r.jsx)("div",{className:"text-lg h-6 whitespace-no-wrap",children:t.value})]},t.name)}))})}),Object(r.jsx)("div",{className:"px-4 bg-white mt-4",children:Object(r.jsx)("div",{className:"overflow-x-auto",children:Object(r.jsxs)("table",{className:"w-full my-2",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:"\u8282\u70b9\u540d\u79f0"}),Object(r.jsx)("th",{children:"\u72b6\u6001"}),Object(r.jsx)("th",{children:"\u751f\u4ea7\u533a\u5757"}),Object(r.jsx)("th",{children:"\u6700\u7ec8\u751f\u4ea7\u65f6\u95f4"})]})}),Object(r.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:null===o||void 0===o?void 0:o.rows2.map((function(t,e){return Object(r.jsxs)("tr",{className:t.bpname===o.head_block_producer?"font-bold":"",children:[Object(r.jsx)("td",{className:t.bpname===o.head_block_producer?"text-gray-800":"",children:e+1}),Object(r.jsx)("td",{className:"px-4 py-2 whitespace-no-wrap",children:Object(r.jsx)("div",{className:"flex items-center",children:Object(r.jsx)("div",{className:"ml-2",children:Object(r.jsx)("div",{className:"text-gray-900",children:t.bpname})})})}),Object(r.jsx)("td",{children:{online:Object(r.jsx)("span",{className:"px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800",children:"\u5728\u7ebf"}),offline:Object(r.jsx)("span",{className:"px-2 inline-flex text-xs font-semibold rounded-full bg-red-100 text-red-800",children:"\u79bb\u7ebf"})}[o.head_block_num-t.number<=242?"online":"offline"]}),Object(r.jsx)("td",{className:t.bpname===o.head_block_producer?"text-gray-800":"",children:p.a.formatNumber(t.number)}),Object(r.jsx)("td",{className:t.bpname===o.head_block_producer?"text-gray-800":"",children:p.a.formatDate(t.date+"Z")})]},t.bpname)}))})]})})})]})})})}},Wgwc:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",a="month",c="quarter",u="year",o="date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},m={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+f(r,2,"0")+":"+f(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,a),s=n-i<0,c=e.clone().add(r+(s?-1:1),a);return+(-(r+(n-i)/(s?i-c:c-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(d){return{M:a,y:u,w:s,d:i,D:o,h:r,m:n,s:e,ms:t,Q:c}[d]||String(d||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},b="en",p={};p[b]=l;var $=function(t){return t instanceof g},j=function(t,e,n){var r;if(!t)return b;if("string"==typeof t)p[t]&&(r=t),e&&(p[t]=e,r=t);else{var i=t.name;p[i]=t,r=i}return!n&&r&&(b=r),r||!n&&b},x=function(t,e){if($(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new g(n)},v=m;v.l=j,v.i=$,v.w=function(t,e){return x(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var g=function(){function l(t){this.$L=j(t.locale,null,!0),this.parse(t)}var f=l.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(d);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=x(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return x(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<x(t)},f.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,c){var d=this,h=!!v.u(c)||c,l=v.p(t),f=function(t,e){var n=v.w(d.$u?Date.UTC(d.$y,e,t):new Date(d.$y,e,t),d);return h?n:n.endOf(i)},m=function(t,e){return v.w(d.toDate()[t].apply(d.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),d)},b=this.$W,p=this.$M,$=this.$D,j="set"+(this.$u?"UTC":"");switch(l){case u:return h?f(1,0):f(31,11);case a:return h?f(1,p):f(0,p+1);case s:var x=this.$locale().weekStart||0,g=(b<x?b+7:b)-x;return f(h?$-g:$+(6-g),p);case i:case o:return m(j+"Hours",0);case r:return m(j+"Minutes",1);case n:return m(j+"Seconds",2);case e:return m(j+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(s,c){var d,h=v.p(s),l="set"+(this.$u?"UTC":""),f=(d={},d[i]=l+"Date",d[o]=l+"Date",d[a]=l+"Month",d[u]=l+"FullYear",d[r]=l+"Hours",d[n]=l+"Minutes",d[e]=l+"Seconds",d[t]=l+"Milliseconds",d)[h],m=h===i?this.$D+(c-this.$W):c;if(h===a||h===u){var b=this.clone().set(o,1);b.$d[f](m),b.init(),this.$d=b.set(o,Math.min(this.$D,b.daysInMonth())).$d}else f&&this.$d[f](m);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[v.p(t)]()},f.add=function(t,c){var o,d=this;t=Number(t);var h=v.p(c),l=function(e){var n=x(d);return v.w(n.date(n.date()+Math.round(e*t)),d)};if(h===a)return this.set(a,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===i)return l(1);if(h===s)return l(7);var f=(o={},o[n]=6e4,o[r]=36e5,o[e]=1e3,o)[h]||1,m=this.$d.getTime()+t*f;return v.w(m,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=v.z(this),i=this.$locale(),s=this.$H,a=this.$m,c=this.$M,u=i.weekdays,o=i.months,d=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},l=function(t){return v.s(s%12||12,t,"0")},f=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:c+1,MM:v.s(c+1,2,"0"),MMM:d(i.monthsShort,c,o,3),MMMM:d(o,c),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:d(i.weekdaysMin,this.$W,u,2),ddd:d(i.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(s),HH:v.s(s,2,"0"),h:l(1),hh:l(2),a:f(s,a,!0),A:f(s,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:r};return n.replace(h,(function(t,e){return e||m[t]||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,o,d){var h,l=v.p(o),f=x(t),m=6e4*(f.utcOffset()-this.utcOffset()),b=this-f,p=v.m(this,f);return p=(h={},h[u]=p/12,h[a]=p,h[c]=p/3,h[s]=(b-m)/6048e5,h[i]=(b-m)/864e5,h[r]=b/36e5,h[n]=b/6e4,h[e]=b/1e3,h)[l]||b,d?p:v.a(p)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=j(t,e,!0);return r&&(n.$L=r),n},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},l}(),O=g.prototype;return x.prototype=O,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",a],["$y",u],["$D",o]].forEach((function(t){O[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),x.extend=function(t,e){return t.$i||(t(e,g,x),t.$i=!0),x},x.locale=j,x.isDayjs=$,x.unix=function(t){return x(1e3*t)},x.en=p[b],x.Ls=p,x.p={},x}()},cBaE:function(t,e,n){"use strict";var r=n("Wgwc"),i=n.n(r);e.a={formatNumber:function(t){return t.toLocaleString()},formatPercent:function(t){return t.toFixed(3)},formatDate:function(t){return i()(t).format("YYYY-MM-DD HH:mm:ss")}}},"n9g/":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/monitor",function(){return n("WTgy")}])}},[["n9g/",0,2,4,1,3,5]]]);