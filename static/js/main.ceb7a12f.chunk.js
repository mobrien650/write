(this["webpackJsonpwriting-website"]=this["webpackJsonpwriting-website"]||[]).push([[0],{135:function(e,t,a){var n={"./test1.md":136,"./test2.md":137,"./test3.md":138,"./test4.md":139};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=135},136:function(e,t,a){e.exports=a.p+"static/media/test1.f63223c4.md"},137:function(e,t,a){e.exports=a.p+"static/media/test2.b93d4c5b.md"},138:function(e,t,a){e.exports=a.p+"static/media/test3.3ba1718e.md"},139:function(e,t,a){e.exports=a.p+"static/media/test4.58d238dd.md"},140:function(e){e.exports=JSON.parse('{"data":[{"title":"Story 1","date":"08/01/2020","fileName":"test1"},{"title":"Story 2","date":"07/11/2020","fileName":"test2"},{"title":"Story 3","date":"07/10/2020","fileName":"test3"},{"title":"Story 4","date":"07/09/2020","fileName":"test4"}]}')},143:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(38),r=a.n(s),u=(a(49),a(1)),l=a(2),c=a(4),o=a(5),m=a(11),p=a(3),d=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e,n){var i;return Object(u.a)(this,a),(i=t.call(this,e)).update=function(e){i.setState(e)},i.viewModel=new n(e,i.update),i.state=i.viewModel.state,i}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.viewModel.start()}},{key:"render",value:function(){return null}}]),a}(n.Component),v=a(43),f=function(){function e(t,a){Object(u.a)(this,e),this.update=a,this.props=t,this.state=this.defaultState()}return Object(l.a)(e,[{key:"setState",value:function(e){this.state=Object.freeze(e),this.update(this.state)}},{key:"defaultState",value:function(){return{}}},{key:"updateProps",value:function(e){this.props=e,this.onPropChange()}},{key:"onPropChange",value:function(){}},{key:"newState",value:function(e){return Object(v.a)({},this.state,{},e)}},{key:"start",value:function(){}}]),e}(),h=a(12),g=a(39),b="StartStory",y="TIME_ON_PAGE",O="STORY",E="STORY_PROGRESS",j=new(function(){function e(){Object(u.a)(this,e),h.a.initialize("UA-72978549-2",{gaOptions:"".concat(Object(g.v4)(),"-").concat((new Date).getTime())}),h.a.set({dimension1:y}),h.a.set({dimension2:O}),h.a.set({dimension3:E})}return Object(l.a)(e,[{key:"trackPage",value:function(){h.a.pageview(window.location.pathname+window.location.search)}},{key:"sendEvent",value:function(e,t,a,n){h.a.event({category:e,action:t,interaction:!a},n)}}]),e}()),k=function(){function e(){Object(u.a)(this,e)}return Object(l.a)(e,[{key:"visitPage",value:function(){j.trackPage()}},{key:"startStory",value:function(e){j.sendEvent(b,"Started story: ".concat(e),!0)}}]),e}(),S=function e(){Object(u.a)(this,e)},w=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"defaultState",value:function(){return new S}},{key:"start",value:function(){this.tracker=new k,this.tracker.visitPage()}}]),a}(f),q=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e,w)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"ALL ABOUT ME!!"),i.a.createElement("p",null,"I am an amazing writer and will quit my day job to sell books for 99 cents."),i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut neque at nulla commodo consequat ac eu erat. Pellentesque sed sagittis enim, ac egestas felis. Suspendisse accumsan justo magna, nec placerat tortor porta sed. Cras pellentesque, quam ultrices imperdiet facilisis, metus quam tincidunt sapien, eget commodo urna dolor vel urna. Sed turpis ex, egestas et justo at, volutpat consectetur dolor. Nulla non dapibus est, eget luctus dolor. Donec nec dolor varius, lacinia ante ut, cursus turpis. Etiam sit amet vulputate sapien. Duis ultrices pulvinar eros non ultricies. Praesent vestibulum ultricies sem, vel congue nisl lobortis at. Maecenas convallis ligula sodales, pharetra mi ac, ultricies mi. Donec quam tellus, luctus a cursus in, mollis non augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis faucibus id tellus sit amet efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla quis nunc et lorem fringilla molestie."),i.a.createElement("p",null,"Mauris non varius erat, et eleifend sapien. Vivamus id ante vel orci sodales euismod vel sed lectus. Cras ultrices molestie placerat. Integer velit quam, fermentum sit amet neque in, placerat cursus est. Pellentesque non porttitor justo. Vivamus arcu velit, tincidunt et aliquet at, vulputate sed tortor. Morbi a magna non tellus iaculis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida libero venenatis magna tincidunt ultricies. Donec placerat in metus eget blandit. Morbi bibendum facilisis diam, non consectetur urna convallis molestie."),i.a.createElement("p",null,"Nullam hendrerit, metus id pulvinar fermentum, tortor sem placerat nulla, quis eleifend mi massa efficitur sapien. Nulla aliquam ante vel arcu varius, in porttitor odio scelerisque. Suspendisse pharetra mattis diam sed lacinia. Aliquam rutrum, urna dapibus dignissim condimentum, neque orci elementum neque, sit amet interdum nulla nisi ultrices enim. Nulla lorem risus, aliquet non massa eu, iaculis iaculis lorem. Donec scelerisque pellentesque nisl in auctor. Etiam blandit justo nisl, quis molestie leo laoreet ut. Phasellus quis placerat justo. Maecenas in tincidunt sem. Donec vel massa pharetra, convallis urna eu, condimentum eros. Suspendisse gravida dui vitae orci condimentum, id cursus sem venenatis. Fusce aliquet, ipsum ac porta luctus, nibh erat consequat quam, non mattis lacus est at tellus. In et diam ut risus scelerisque iaculis viverra quis magna."),i.a.createElement("p",null,"Mauris at dui non urna fermentum ornare eget a mi. Suspendisse ligula mauris, scelerisque a auctor eu, pharetra et eros. Cras sem elit, feugiat ac volutpat quis, fermentum a arcu. Cras ac dictum neque. Nullam pellentesque vestibulum risus eget pharetra. Nulla eu elementum enim. Ut luctus diam eros, non pretium quam accumsan sit amet. Proin varius pharetra pellentesque. Proin sit amet sollicitudin sem. Cras quis ipsum consectetur, elementum elit nec, egestas tortor."),i.a.createElement("p",null,"Ut vel urna luctus tellus pulvinar gravida. Aenean iaculis facilisis mauris, ut placerat quam gravida pellentesque. Donec ut orci non nunc porttitor hendrerit dapibus vitae dui. Pellentesque at imperdiet sem, non elementum metus. Aenean vestibulum orci vitae metus pharetra, eget iaculis mi mollis. Donec volutpat tincidunt libero at porta. Cras volutpat a metus a lacinia. Duis sollicitudin urna eu lacus porttitor, in ornare justo lobortis. Cras tincidunt congue justo interdum ullamcorper. "))}}]),a}(d),N=a(40),D=a.n(N),L=a(23),P=a.n(L),x=a(41),C=new(function(){function e(){Object(u.a)(this,e),this.stories={},this.storyList=null}return Object(l.a)(e,[{key:"fetchStory",value:function(e){var t=this;return new Promise(function(){var n=Object(x.a)(P.a.mark((function n(i){var s;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.stories[e]&&i(t.stories[e]),s=null,n.prev=2,s=a(135)("./".concat(e,".md")),n.next=9;break;case 6:return n.prev=6,n.t0=n.catch(2),n.abrupt("return",i(null));case 9:return n.abrupt("return",fetch(s).then((function(e){return e.text()})).then((function(a){t.stories[e]=a,i(a)})));case 10:case"end":return n.stop()}}),n,null,[[2,6]])})));return function(e){return n.apply(this,arguments)}}())}},{key:"getStoryList",value:function(){if(null==this.storyList){var e=null;try{e=a(140)}catch(t){e={data:[]}}this.storyList=e.data}return this.storyList}}]),e}()),M=function e(){Object(u.a)(this,e),this.story=null},T=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"defaultState",value:function(){return new M}},{key:"getStoryName",value:function(){return this.props.match.params.name}},{key:"onPropChange",value:function(){this.loadStory()}},{key:"start",value:function(){this.tracker=new k,this.loadStory()}},{key:"loadStory",value:function(){var e=this;this.tracker.visitPage(),this.tracker.startStory(this.getStoryName()),C.fetchStory(this.getStoryName()).then((function(t){var a=e.newState({story:t});e.setState(a)}))}}]),a}(f),A=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e,T)}return Object(l.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.viewModel.updateProps(e)}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(D.a,{source:this.state.story}))}}]),a}(d),I=function e(){Object(u.a)(this,e),this.storyList=[]},B=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"defaultState",value:function(){return new I}},{key:"start",value:function(){var e=this.newState({storyList:C.getStoryList()});this.setState(e)}}]),a}(f),R=!1,F=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={currentIndex:0,class:"",value:R?e.props.title:""},e.finalBlinkCount=0,e.type=function(){e.state.value.length<e.getTitle().length?e.setState({value:e.state.value+e.getTitle().charAt(e.state.currentIndex),currentIndex:e.state.currentIndex+1},(function(){var t=e.state.value.length===e.getSplit()?e.getSplitDelay():e.getLetterDelay();setTimeout(e.type,t)})):setTimeout((function(){e.setState({class:""})}),e.getLetterDelay()*e.getBlinkCount())},e}return Object(l.a)(a,[{key:"getTitle",value:function(){return this.props.title||""}},{key:"getSplit",value:function(){return this.props.split||this.getTitle().length}},{key:"getLetterDelay",value:function(){return this.props.letterDelay||100}},{key:"getSplitDelay",value:function(){return this.props.splitDelay||450}},{key:"getBlinkCount",value:function(){return this.props.blinkCount||3}},{key:"componentDidMount",value:function(){var e=this;0===this.state.value.length&&this.setState({class:"blinking"},(function(){e.type()})),R=!0}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,this.state.value.length<this.getSplit()?this.state.value.substring(0,this.state.value.length):this.state.value.substring(0,this.getSplit())),i.a.createElement("span",{className:this.state.class},this.state.value.length>=this.getSplit()?this.state.value.substring(this.getSplit(),this.state.value.length):""))}}]),a}(n.Component),U=function(e){return i.a.createElement("header",null,i.a.createElement("nav",{className:"main-nav"},i.a.createElement(m.b,{to:"/",className:"logo"},i.a.createElement("div",{className:"logo monospaced"},i.a.createElement(F,{title:"OBwrites",split:2})))),i.a.createElement("nav",{className:"social-nav"},i.a.createElement(m.b,{to:"https://twitter.com/obwrites",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 32 32"},i.a.createElement("title",null,"twitter"),i.a.createElement("path",{d:"M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"})))))},_=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement(m.b,{to:"/story/".concat(e.post.fileName)}," ",e.post.title," ")))},z=function(e){return i.a.createElement("aside",{id:e.id},i.a.createElement("div",null,i.a.createElement(m.b,{to:"/"},"My Bio"),i.a.createElement("ul",null,e.storyList.map((function(e,t){return i.a.createElement(_,{key:"post-list-".concat(t),post:e})})))))};function J(){document.getElementById("stories-list").classList.toggle("expanded")}var G=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(U,null),i.a.createElement("button",{class:"toggle",id:"stories-list-toggle",onClick:J},"Stories"),i.a.createElement(z,{storyList:e.storyList,id:"stories-list"}),i.a.createElement("main",null,i.a.createElement("section",null,e.children),i.a.createElement("footer",null,"\xa9 Copyright 2020 ME OBrien All Rights Reserved")))},V=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){return Object(u.a)(this,a),t.call(this,e,B)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(m.a,null,i.a.createElement("div",{className:"content-wrapper"},i.a.createElement(G,{storyList:this.state.storyList},i.a.createElement(p.c,{basename:""},i.a.createElement(p.a,{path:"/",component:q,exact:!0}),i.a.createElement(p.a,{path:"/story/:name",component:A})))))}}]),a}(d);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(V,null)),document.getElementById("root"))},44:function(e,t,a){e.exports=a(143)},49:function(e,t,a){}},[[44,1,2]]]);
//# sourceMappingURL=main.ceb7a12f.chunk.js.map