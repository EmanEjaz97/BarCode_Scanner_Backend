(this["webpackJsonpbarcode-scan"]=this["webpackJsonpbarcode-scan"]||[]).push([[6],{104:function(e,t,n){"use strict";var a=n(160),c=n(161),o=n(162),r=n.n(o),u=function(){function e(){Object(a.a)(this,e),this.url="https://scancbarcode.herokuapp.com/api"}return Object(c.a)(e,[{key:"sendToken",value:function(e){var t=this;return new Promise((function(n,a){r.a.post("".concat(t.url,"/scan"),null,{params:{code:e}}).then((function(e){n(e)})).catch((function(e){console.log(e.message),a(e)}))}))}},{key:"addProduct",value:function(e){var t=this;return new Promise((function(n,a){r.a.post("".concat(t.url,"/add"),e,{headers:{"content-type":"application/json"}}).then((function(e){n(e)})).catch((function(e){a(e)}))}))}}]),e}();t.a=new u},290:function(e){e.exports=JSON.parse('{"inputStream":{"type":"LiveStream","constraints":{"facingMode":"environment","aspectRatio":{"min":1,"max":1}}},"locator":{"patchSize":"medium","halfSample":true},"numOfWorkers":2,"frequency":10,"decoder":{"readers":["ean_reader"]},"locate":true}')},292:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(172),c=n(0),o=n.n(c),r=n(290),u=n(291),l=n.n(u),i=function(e){var t=e.onDetected;Object(c.useEffect)((function(){l.a.init(r,(function(e){return e&&console.log(e,"error msg"),l.a.start(),function(){l.a.stop()}})),l.a.onProcessed((function(e){var t=l.a.canvas.ctx.overlay,n=l.a.canvas.dom.overlay;e&&(e.boxes&&(t.clearRect(0,0,Number(n.getAttribute("width")),Number(n.getAttribute("height"))),e.boxes.filter((function(t){return t!==e.box})).forEach((function(e){l.a.ImageDebug.drawPath(e,{x:0,y:1},t,{color:"green",lineWidth:2})}))),e.box&&l.a.ImageDebug.drawPath(e.box,{x:0,y:1},t,{color:"#00F",lineWidth:2}),e.codeResult&&e.codeResult.code&&l.a.ImageDebug.drawPath(e.line,{x:"x",y:"y"},t,{color:"red",lineWidth:3}))})),l.a.onDetected(n)}));var n=function(e){t(e.codeResult.code)};return o.a.createElement("div",{id:"interactive",className:"viewport"})},s=(n(292),n(356)),d=n(355),f=n(5),m=n(104);function b(){var e=Object(f.f)(),t=Object(c.useState)(!0),n=Object(a.a)(t,2),r=n[0],u=n[1],l=Object(c.useState)(5707119032506),b=Object(a.a)(l,2),h=b[0],v=b[1],p=Object(c.useState)("Hello World"),g=Object(a.a)(p,2),E=g[0],y=g[1],O=Object(c.useState)(!1),S=Object(a.a)(O,2),j=S[0],k=S[1],w=Object(c.useState)(!1),x=Object(a.a)(w,2),P=x[0],D=x[1];return j?P?o.a.createElement(s.a,null,o.a.createElement("h2",null," ",E),o.a.createElement("div",{className:"button-button"},o.a.createElement(d.a,{onClick:function(){k(!1),D(!1),u(!r),y("")},inverted:!0,color:"green"}," Scan Another"),o.a.createElement(d.a,{onClick:function(){return e.push("/add")},inverted:!0,color:"yellow"}," Add Product"))):o.a.createElement(s.a,null,o.a.createElement("h2",null,"  ",E," ")):o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,null,o.a.createElement("div",{className:"container"},r&&o.a.createElement(i,{onDetected:function(e){v(e)}})),o.a.createElement("h3",null," Scanned Code : ",o.a.createElement("span",{style:{color:"green"}}," ",h," ")),o.a.createElement(d.a,{inverted:!0,color:"blue",onClick:function(){return m.a.sendToken(h).then((function(e){y("Sucessfully Saved to Database"),D(!0)})).catch((function(e){y(e.response.data),D(!0)})),k(!0),u(!r),void y("Saving data to the database...")}},"Save"),o.a.createElement(d.a,{onClick:function(){return e.push("/add")},inverted:!0,color:"yellow"}," Add Manually")))}}}]);
//# sourceMappingURL=6.18e417ec.chunk.js.map