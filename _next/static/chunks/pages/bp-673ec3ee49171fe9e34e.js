_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/dST":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bp",function(){return r("mrCa")}])},mrCa:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return _}));var a=r("o0o1"),n=r.n(a);function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,o=void 0;try{for(var s,c=e[Symbol.iterator]();!(a=(s=c.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(i){n=!0,o=i}finally{try{a||null==c.return||c.return()}finally{if(n)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=r("HaE+"),i=r("q1tI"),l=r.n(i),u=r("apO0");function p(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=r("vDqi"),f=r.n(g),x=r("LvDl"),m=r.n(x),y=r("rOcY"),v=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,r,a;return t=e,a=[{key:"generateBpList",value:function(e,t,r){var a=this,n=[];return e.forEach((function(e){n.push({owner:e.owner,candidate_name:"",logo:"",staked:0,claim_rewards_total:0,claim_rewards_unreceived:0,weight_percent:0,urlFull:"",urlSimple:"",json:void 0,producer:e})})),n.map((function(e,n){e.staked=a.votesToStaked(parseInt(e.producer.total_votes));var o=a.getClaimRewards(e.producer,r,n+1);e.claim_rewards_total=o.total,e.claim_rewards_unreceived=o.unreceived,e.weight_percent=parseFloat((parseInt(e.producer.total_votes)/parseInt(r.total_producer_vote_weight)*100).toFixed(3)),e.urlFull="",e.urlSimple="";try{var s=new URL(e.producer.url).origin;s&&(e.urlFull=e.producer.url,e.urlSimple=s)}catch(u){console.info(u)}e.json=void 0;var c=t.find((function(t){return t.owner===e.owner}));if(c)try{var i=JSON.parse(c.json);e.candidate_name=m.a.get(i,"org.candidate_name","");var l=m.a.get(i,"org.branding.logo_256");l&&"https://"===l.substring(0,8)&&(e.logo=l),e.json=i}catch(u){console.info(u)}return e})),n}}],(r=null)&&p(t.prototype,r),a&&p(t,a),e}();d(v,"votesToStaked",(function(e){if(0===e)return 0;var t=Date.now()/1e3-946684800,r=Math.floor(t/604800)/52,a=e/Math.pow(2,r)/1e4;return Math.round(a)})),d(v,"getClaimRewards",(function(e,t,r){if(!t.perblock_bucket)return{total:0,unreceived:0};var a=t.perblock_bucket*e.unpaid_blocks/t.total_unpaid_blocks/1e4,n=t.pervote_bucket*parseInt(e.total_votes)/parseInt(t.total_producer_vote_weight)/1e4,o=r<=21?320:a,s=o+n>=100?o+n:0,c=1*e.last_claim_time/1e3+864e5>Date.now()?0:s;return{total:Math.round(s),unreceived:Math.round(c)}})),d(v,"getInfo",Object(c.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(y.a.rpc_get_info);case 2:return t=e.sent,r=m.a.get(t,"data",{}),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))),d(v,"getGlobal",Object(c.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(y.a.rpc_get_table_rows,JSON.stringify({code:"eosio",json:!0,limit:1,scope:"eosio",table:"global"}));case 2:return t=e.sent,r=m.a.get(t,"data.rows[0]",{}),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))),d(v,"getProducers",Object(c.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(y.a.rpc_get_table_rows,JSON.stringify({scope:"eosio",code:"eosio",table:"producers",json:!0,limit:100,key_type:"float64",index_position:2}));case 2:return t=e.sent,r=m.a.get(t,"data.rows",[]),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))),d(v,"getProducerJson",Object(c.a)(n.a.mark((function e(){var t,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(y.a.rpc_get_table_rows,JSON.stringify({json:!0,code:"producerjson",scope:"producerjson",table:"producerjson",limit:1e3}));case 2:return t=e.sent,r=m.a.get(t,"data.rows",[]),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))),d(v,"getAccount",function(){var e=Object(c.a)(n.a.mark((function e(t){var r,a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(y.a.rpc_get_account,JSON.stringify({account_name:t}));case 2:return r=e.sent,a=m.a.get(r,"data",{}),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var b=v,w=l.a.createElement;function _(){var e=Object(i.useState)([]),t=e[0],r=e[1];return Object(i.useEffect)((function(){function e(){return(e=Object(c.a)(n.a.mark((function e(){var t,a,o,c,i,l;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([b.getProducers(),b.getProducerJson(),b.getGlobal()]);case 2:t=e.sent,a=s(t,3),o=a[0],c=a[1],i=a[2],l=b.generateBpList(o,c,i),r(l);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),w(u.a,{title:"\u8282\u70b9\u5217\u8868 | FIBOS \u5bfc\u822a"},w("div",null,w("div",{className:"px-6"},w("div",{className:"text-2xl pb-4"},"\u8282\u70b9\u5217\u8868"),w("div",{className:"flex flex-wrap gap-4 text-center"},[].map((function(e){return w("div",{key:e.name,className:"flex-1 rounded bg-white p-4"},w("h2",{className:"text-gray-600"},e.name),w("div",{className:"text-lg h-6 whitespace-no-wrap"},e.value))})))),w("div",{className:"px-6 bg-white mt-6"},w("div",{className:"overflow-x-auto"},w("table",{className:"w-full my-2"},w("thead",null,w("tr",null,w("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider"},"#"),w("th",{className:"py-3 bg-gray-50 text-center text-xs text-gray-500 tracking-wider"},"\u8282\u70b9\u6807\u8bc6"),w("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider"},"\u8282\u70b9\u540d\u79f0"),w("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider"},"\u72b6\u6001"),w("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider"},"\u5f97\u7968\u7387"),w("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider"},"\u6bcf\u65e5\u6536\u76ca"),w("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider"},"\u672a\u9886\u53d6\u6536\u76ca"),w("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider"},"\u7f51\u5740"),w("th",{className:"px-6 py-3 bg-gray-50 text-left text-xs text-gray-500 tracking-wider"},"\u64cd\u4f5c"))),w("tbody",{className:"bg-white divide-y divide-gray-200"},t.map((function(e,t){return w("tr",{key:t,className:"hover:bg-gray-200"},w("td",{className:"px-6 py-4 text-gray-500"},t+1),w("td",{className:"px-2 py-2 text-center"},e.logo&&w("span",{className:"h-12 w-12 block bg-cover mx-auto",style:{backgroundImage:"url("+e.logo+")"}})),w("td",{className:"px-6 py-4"},w("div",{className:"text-gray-900"},e.candidate_name),w("div",{className:"text-gray-500"},e.owner)),w("td",{className:"px-6 py-4"},{active:w("span",{className:"px-2 inline-flex text-xs font-semibold rounded-full bg-green-100 text-green-800"},"\u5f53\u9009\u8282\u70b9"),waiting:w("span",{className:"px-2 inline-flex text-xs font-semibold rounded-full bg-gray-100 text-gray-800"},"\u5f85\u673a\u8282\u70b9")}[t+1<=21?"active":"waiting"]),w("td",{className:"px-6 py-4"},w("div",{className:"text-gray-900"},e.weight_percent," %"),w("div",{className:"text-gray-500 text-sm"},e.staked," FO")),w("td",{className:"px-6 py-4 text-gray-500"},e.claim_rewards_total," FO"),w("td",{className:"px-6 py-4 "+(e.claim_rewards_unreceived?"text-green-500 font-bold":"text-gray-500")},e.claim_rewards_unreceived," FO"),w("td",{className:"px-6 py-4 text-gray-500"},w("a",{href:e.urlFull,target:"_blank",className:"text-indigo-500 hover:text-indigo-800 transition duration-150 ease-in-out"},e.urlSimple)),w("td",{className:"px-6 py-4"},w("a",{href:"/bp/"+e.owner,className:"text-indigo-500 hover:text-indigo-800 transition duration-150 ease-in-out"},"\u8be6\u60c5")))}))))))))}}},[["/dST",0,2,4,1,3,5]]]);