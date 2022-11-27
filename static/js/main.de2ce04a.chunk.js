(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},25:function(e,t,a){},26:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(15),r=a.n(c),l=(a(25),a(1)),s=a(2),o=a(4),m=a(3),u=a(10),d=a.n(u),h=(a(26),a(8)),p=a(11),f=a(16),E=a.n(f),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).titles=[],e.state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(h.a)(e)),e}return Object(s.a)(a,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e=document.body,t="dark"===e.getAttribute("data-theme")?"light":"dark";e.setAttribute("data-theme",t)}},{key:"render",value:function(){var e=this;if(this.props.sharedData){var t=this.props.sharedData.name;this.titles=this.props.sharedData.titles.map((function(e){return[e.toUpperCase(),1500]})).flat()}var a=i.a.memo((function(){return i.a.createElement(p.a,{className:"title-styles",steps:e.titles,loop:50})}),(function(e,t){return!0}));return i.a.createElement("header",{id:"home",style:{height:window.innerHeight,display:"block"}},i.a.createElement("div",{className:"row aligner",style:{height:"100%"}},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",null,i.a.createElement("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),i.a.createElement("br",null),i.a.createElement("h1",{className:"mb-0"},i.a.createElement(p.a,{steps:[t],wrapper:"p"})),i.a.createElement("div",{className:"title-container"},i.a.createElement(a,null)),i.a.createElement(E.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:i.a.createElement("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:i.a.createElement("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})))))}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return i.a.createElement("span",{key:e.name,className:"m-4"},i.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:e.class})))}));return i.a.createElement("footer",null,i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"social-links"},e),i.a.createElement("div",{className:"copyright py-4 text-center"},i.a.createElement("div",{className:"container"},i.a.createElement("small",null,"Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???"),i.a.createElement("br",null),i.a.createElement("small",null,"Credit to Dorota1997 for the FOSS template")))))}}]),a}(n.Component),y=a(9),b=a(17),N=a.n(b),k=a(18),x=a.n(k),w=a(19),j=a.n(w),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,n=this.props.resumeBasicInfo.description,c=this.props.resumeBasicInfo.philosophy,r=this.props.resumeBasicInfo.preference;return i.a.createElement("section",{id:"about"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{style:{color:"black"}},i.a.createElement("span",null,t)),i.a.createElement("div",{className:"row center mx-auto mb-5"},i.a.createElement("div",{className:"col-md-4 mb-5 center"},i.a.createElement("div",{className:"polaroid"},i.a.createElement("span",{style:{cursor:"auto"}},i.a.createElement("img",{height:"250px",src:e,alt:"Avatar placeholder"}),i.a.createElement(y.Icon,{icon:N.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),i.a.createElement(y.Icon,{icon:x.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}}),i.a.createElement(y.Icon,{icon:j.a,style:{fontSize:"400%",margin:"9% 5% 0 5%"}})))),i.a.createElement("div",{className:"col-md-8 center"},i.a.createElement("div",{className:"col-md-10"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-header"},i.a.createElement("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",i.a.createElement("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})),i.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},i.a.createElement("br",null),i.a.createElement("span",{className:"wave"},a),i.a.createElement("br",null),i.a.createElement("br",null),n,i.a.createElement("br",null),i.a.createElement("br",null),c,i.a.createElement("br",null),i.a.createElement("br",null),r)))))))}}]),a}(n.Component),S=a(5),A=(a(14),a(6)),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,t=this.props.resumeExperience.map((function(e,t){var a=e.technologies,n=e.mainTech,c=e.responsibilities,r=n.map((function(e,t){return i.a.createElement(A.a,{pill:!0,className:"main-badge mr-2 mb-2",key:t},e)})),l=a.map((function(e,t){return i.a.createElement(A.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:t},e)})),s=c.map((function(e,t){return i.a.createElement("li",null,e)}));return i.a.createElement(S.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fas fa-briefcase experience-icon"}),key:t},i.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},r),i.a.createElement("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.title),i.a.createElement("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),i.a.createElement("p",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left",fontSize:"120%"}},e.description),i.a.createElement("ul",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left",fontSize:"120%"}},s),i.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},l))}));return i.a.createElement("section",{id:"resume",className:"pb-5"},i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(S.VerticalTimeline,null,t,i.a.createElement(S.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),a}(n.Component),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,t=this.props.sharedSkills.icons.map((function(e,t){return i.a.createElement("li",{className:"list-inline-item mx-3",key:t},i.a.createElement("span",null,i.a.createElement("div",{className:"text-center skills-tile"},i.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},i.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return i.a.createElement("section",{id:"skills"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title"},i.a.createElement("span",{className:"text-white"},e))),i.a.createElement("div",{className:"col-md-12 text-center"},i.a.createElement("ul",{className:"list-inline mx-auto skill-icon"},t))))}}]),a}(n.Component),D=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){if(this.props.resumeEducation&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.education,t=this.props.resumeEducation.map((function(e,t){var a=e.technologies,n=e.mainTech.map((function(e,t){return i.a.createElement(A.a,{pill:!0,className:"main-badge mr-2 mb-2",key:t},e)})),c=a.map((function(e,t){return i.a.createElement(A.a,{pill:!0,className:"experience-badge mr-2 mb-2",key:t},e)}));return i.a.createElement(S.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fas fa-graduation-cap experience-icon"}),key:t},i.a.createElement("div",{style:{textAlign:"left",marginBottom:"4px"}},n),i.a.createElement("h3",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"}},e.company),i.a.createElement("h4",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.major),i.a.createElement("h4",{className:"vertical-timeline-element-title",style:{textAlign:"left"}},e.minor),i.a.createElement("p",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left",fontSize:"120%"}},e.description),i.a.createElement("div",{style:{textAlign:"left",marginTop:"15px"}},c))}));return i.a.createElement("section",{id:"resume",className:"pb-5"},i.a.createElement("div",{className:"col-md-12 mx-auto"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement("h1",{className:"section-title",style:{color:"black"}},i.a.createElement("span",{className:"text-black",style:{textAlign:"center"}},e)))),i.a.createElement("div",{className:"col-md-8 mx-auto"},i.a.createElement(S.VerticalTimeline,null,t,i.a.createElement(S.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:i.a.createElement("i",{className:"fas fa-hourglass-start mx-auto experience-icon"})}))))}}]),a}(n.Component),T=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(s.a)(a,[{key:"applyPickedLanguage",value:function(e,t){document.documentElement.lang=e;var a=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(a)}},{key:"componentDidMount",value:function(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)}},{key:"loadResumeFromPath",value:function(e){d.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"loadSharedData",value:function(){d.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g,{sharedData:this.state.sharedData.basic_info}),i.a.createElement("div",{className:"col-md-12 mx-auto text-center language"}),i.a.createElement(I,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),i.a.createElement(D,{resumeEducation:this.state.resumeData.education,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(B,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(O,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),i.a.createElement(v,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),a}(n.Component),C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(33);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",r.a.render(i.a.createElement(T,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");C?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.de2ce04a.chunk.js.map