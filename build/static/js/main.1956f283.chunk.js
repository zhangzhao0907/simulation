(this.webpackJsonpsimulation=this.webpackJsonpsimulation||[]).push([[0],{243:function(e,t,n){},244:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){},384:function(e,t,n){},417:function(e,t,n){},439:function(e,t,n){"use strict";n.r(t);for(var a=n(1),s=n(0),i=n.n(s),c=n(33),r=n.n(c),l=(n(243),n(72)),o=n(440),j=(n(451),n(457),n(458),n(459),n(244),l.a.SubMenu,o.a.Header,o.a.Content,o.a.Sider,n(14)),d=n(16),h=n(17),b=n(20),m=(n(272),n(449)),x=n(482),u=n(483),p=n(484),O=n(485),y=n(486),f=n(487),g=n(488),v=n(489),k=n(88),_=n(42),w=n(4),I=n(6),T=(n(273),n(445)),S=n(441),N=n(454),D=n(150),C=n(452),L=n(443),A=n(48),R=n(201),P=n.n(R),W={labelCol:{span:10},wrapperCol:{span:14}},F=function(){var e,t=Object(_.f)();return Object(a.jsxs)(T.a,Object(w.a)(Object(w.a)({name:"initiation"},W),{},{onFinish:function(){P.a.get("https://www.fitzcat.com:3000/findUser/oQ9bs4laMqVRFqcKhHpA1VM-IiYY",{firstName:"test",lastName:"test"}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),t.push("/success")},initialValues:(e={},Object(I.a)(e,"age",25),Object(I.a)(e,"bmi",18.5),Object(I.a)(e,"weight",60),e),children:[Object(a.jsx)("p",{className:"banner",children:"Initiate a Simulation"}),Object(a.jsx)(S.a,{style:{margin:"0 0 50px"}}),Object(a.jsx)(T.a.Item,{name:"age",label:"Age \u5e74\u9f84\uff1a",children:Object(a.jsx)(N.a,{min:1,max:100})}),Object(a.jsx)(T.a.Item,{name:"gender",label:"Gender \u6027\u522b\uff1a",children:Object(a.jsxs)(D.a.Group,{children:[Object(a.jsx)(D.a,{value:"\u7537",children:"\u7537"}),Object(a.jsx)(D.a,{value:"\u5973",children:"\u5973"})]})}),Object(a.jsx)(T.a.Item,{name:"wound_location",label:"Wound Location \u4f24\u75a4\u4f4d\u7f6e\uff1a",children:Object(a.jsx)(C.a,{placeholder:"please enter your wound location",style:{width:"400px"}})}),Object(a.jsxs)(T.a.Item,{name:"bmi",label:"BMI\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:300}),Object(a.jsx)("span",{className:"span-text",children:"(BMI index)"})]}),Object(a.jsxs)(T.a.Item,{name:"weight",label:"Weight \u4f53\u91cd\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(kg)"})]}),Object(a.jsxs)(T.a.Item,{name:"wound_width",label:"Wound Width \u4f24\u75a4\u5bbd\u5ea6\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(mm)"})]}),Object(a.jsxs)(T.a.Item,{name:"wound_depth",label:"Wound Depth \u4f24\u75a4\u6df1\u5ea6\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(mm)"})]}),Object(a.jsxs)(T.a.Item,{name:"skin_tension",label:"Skin Tension \u76ae\u80a4\u5f20\u529b\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"tgf",label:"TGF-\u03b2 Concentraion\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"tnf",label:"TNF-\u0251 Concentraion\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"inflammatory_cytokine",label:"Inflammatory Cytokine Concentraion\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"inflammatory_cell",label:"Inflammatory Cell Concentraion\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"macrophages_concentraion",label:"Macrophages Concentraion\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"wound_healing_time",label:"Wound Healing Time \u6cbb\u7597\u65f6\u95f4\uff1a",children:[Object(a.jsx)(L.a,{}),Object(a.jsx)("span",{className:"span-text",children:"(Please select a date)"})]}),Object(a.jsx)(T.a.Item,{name:"wound_infected",label:"Wound Infected \u4f24\u53e3\u611f\u67d3\uff1a",children:Object(a.jsxs)(D.a.Group,{children:[Object(a.jsx)(D.a,{value:"\u662f",children:"\u662f"}),Object(a.jsx)(D.a,{value:"\u5426",children:"\u5426"})]})}),Object(a.jsxs)(T.a.Item,{name:"epidermal_laser_density",label:"Epidermal Laser Density\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"dermal_laser_density",label:"Dermal Laser Density\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"laser_diameter",label:"Laser Diameter\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(mm)"})]}),Object(a.jsxs)(T.a.Item,{name:"laser_cross",label:"Laser Cross Section Shape\uff1a",children:[Object(a.jsx)(C.a,{placeholder:"please describe your Laser Cross Section Shape"}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"laser_inclination_angle",label:"Laser Inclination Angle\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"duration_laser",label:"Duration Between Laser Treatment\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"betamethason_dosage",label:"Betamethason Dosage\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"pressure",label:"Pressure\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"tension_reduction",label:"Tension Reduction\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"botulinum_toxin",label:"Botulinum Toxin Type A Dosage\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"tgf_antibody",label:"TGF-\u03b21 Antibody Dosage\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"avastin_dosage",label:"Avastin Dosage\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsxs)(T.a.Item,{name:"inhibitor_dosage",label:"Inhibitor Dosage\uff1a",children:[Object(a.jsx)(N.a,{min:1,max:150}),Object(a.jsx)("span",{className:"span-text",children:"(the discription of the parameter)"})]}),Object(a.jsx)(T.a.Item,{wrapperCol:{span:12,offset:10},children:Object(a.jsx)(A.a,{type:"primary",htmlType:"submit",children:"Simulation"})})]}))},G=(n(384),n(68)),M=n(446),q=n(107),B=n(442),H=[{title:"Age",key:"age",chn:"\u5e74\u9f84"},{title:"Gender",key:"gender",chn:"\u6027\u522b"},{title:"Wound Location",key:"wound_location",chn:"\u4f24\u75a4\u4f4d\u7f6e"},{title:"BMI",key:"bmi",chn:" "},{title:"Weight",key:"weight",chn:"\u4f53\u91cd"},{title:"Wound Width",key:"wound_width",chn:"\u4f24\u75a4\u5bbd\u5ea6"},{title:"Wound Depth",key:"wound_depth",chn:"\u4f24\u75a4\u6df1\u5ea6"},{title:"Skin Tension",key:"skin_tension",chn:"\u76ae\u80a4\u5f20\u529b"},{title:"TGF-\u03b2 Concentration",key:"tgf_b",chn:""},{title:"TNF-\u0251 Concentration",key:"tnf_a",chn:""},{title:"Inflammatory Cytokine",key:"inflammatory_cytokine",chn:""},{title:"Inflammatory Cell",key:"inflammatory_cell",chn:""},{title:"Macrophages",key:"macrophages_concentraion",chn:""},{title:"Wound Healing Time",key:"wound_healing_time",chn:"\u6cbb\u7597\u65f6\u95f4"},{title:"Wound Infected",key:"wound_infected",chn:"\u4f24\u53e3\u611f\u67d3"},{title:"Epidermal Laser Density",key:"epidermal_laser_density",chn:""},{title:"Dermal Laser Density",key:"dermal_laser_density",chn:""},{title:"Laser Diameter",key:"laser_diameter",chn:""},{title:"Laser Cross Section Shape",key:"",chn:"laser_cross"},{title:"Laser Inclination Angle",key:"laser_inclination_angle",chn:""},{title:"Duration Between Laser Treatment",key:"duration",chn:""},{title:"Betamethason Dosage",key:"betamethason_dosage",chn:""},{title:"Pressure",key:"pressure",chn:""},{title:"Tension Reduction",key:"tension_reduction",chn:""},{title:"Botulinum Toxin Type A Dosage",key:"botulinum_toxin",chn:""},{title:"TGF-\u03b21 Antibody Dosage",key:"tgf_b1_antibody",chn:""},{title:"Avastin Dosage",key:"avastin_dosage",chn:""},{title:"Inhibitor Dosage",key:"inhibitor_dosage",chn:""}],E=[{title:"Epidermal Thickness",key:"epidermal_thickness",chn:""},{title:"Scar Thickness",key:"scar_thickness",chn:""},{title:"Scar Width",key:"scar_width",chn:""},{title:"Vessel Density",key:"vessel_density",chn:""},{title:"Type III Collagen Density",key:"type3_collagen_density",chn:""},{title:"Type I Collagen Density",key:"type1_collagen_density",chn:""},{title:"Color",key:"color",chn:""},{title:"Smoothness",key:"smoothness",chn:""},{title:"Tenderness",key:"tenderness",chn:""},{title:"Itchy Intensity",key:"itchy_intensity",chn:""},{title:"Painness",key:"painness",chn:""},{title:"Nerve Ending Density",key:"nerve_ending_density",chn:""},{title:"TGF-\u03b2 Concentration",key:"tgf_b_concentration",chn:""},{title:"TNF-\u0251 Concentration",key:"tnf_a_concentration",chn:""},{title:"Inflammatory Cytokine",key:"inflammatory_cytokine",chn:""},{title:"Inflamatory Cell Concentration",key:"inflamatory_cell",chn:""},{title:"Macrophages Concentraion",key:"macrophages_concentraion",chn:""}],J=n(460),z=n(461),V=n(462),U=n(463),Y=n(464),K=n(465),Q=n(466),X=n(467),Z=n(468),$=n(469),ee=n(470),te=n(471),ne=n(472),ae=[],se=0;se<28;se++)ae.push({key:se,title:H[se].title,value:32});var ie=[{title:"Input Parameter Name",dataIndex:"title",key:"title",width:"240px"},{title:"Value",dataIndex:"value",key:"value"}],ce=[Object(a.jsx)(J.a,{}),Object(a.jsx)(z.a,{}),Object(a.jsx)(V.a,{}),Object(a.jsx)(U.a,{}),Object(a.jsx)(U.a,{}),Object(a.jsx)(U.a,{}),Object(a.jsx)(Y.a,{}),Object(a.jsx)(K.a,{spin:!0,style:{color:"#1890ff"}}),Object(a.jsx)(K.a,{spin:!0,style:{color:"#1890ff"}}),Object(a.jsx)(Q.a,{style:{color:"#1890ff"}}),Object(a.jsx)(X.a,{style:{color:"#1890ff"}}),Object(a.jsx)(Z.a,{style:{color:"#1890ff"}}),Object(a.jsx)($.a,{style:{color:"#1890ff"}}),Object(a.jsx)($.a,{style:{color:"#1890ff"}}),Object(a.jsx)(ee.a,{style:{color:"#1890ff"}}),Object(a.jsx)(te.a,{style:{color:"#1890ff"}}),Object(a.jsx)(ne.a,{style:{color:"#1890ff"}})];function re(){for(var e=[],t=0;t<=16;t++)e.push(Object(a.jsx)(G.a,{span:4,children:Object(a.jsx)(M.a,{title:E[t].title,value:11.24+.4*t,precision:2,prefix:ce[t],valueStyle:{color:"#002766",fontFamily:"Times New Roman",fontWeight:"bold",fontSize:"16pt"}})}));return e}var le=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"site-statistic-demo-card",children:[Object(a.jsxs)(q.a,{gutter:[8,16],children:[Object(a.jsxs)(G.a,{span:16,children:[Object(a.jsx)("p",{className:"banner",children:"Simulation Result"}),Object(a.jsx)(m.a,{height:500,src:"WebGL.jpg"})]}),Object(a.jsx)(G.a,{span:8,children:Object(a.jsx)(B.a,{dataSource:ae,columns:ie,bordered:!0,size:"small",pagination:!1,rowClassName:"ant-table-tbodys",scroll:{y:500}})})]}),Object(a.jsx)(q.a,{gutter:[16,16],className:"output-row",children:Object(a.jsx)(re,{})})]})}}]),n}(i.a.Component),oe=n(30),je=n(50),de=n(235),he=n(448),be=n(456),me=n(450),xe=n(444),ue=n(473),pe=n(474),Oe=n(475),ye=n(476),fe=n(477),ge=n(478),ve=n(479),ke=n(480),_e=n(481),we=(n(417),n(119)),Ie=n(455),Te=L.a.RangePicker,Se=we.a.Option,Ne={rules:[{type:"array",message:"Please select time!"}]},De=function(){return Object(a.jsxs)(T.a,{onFinish:function(e){},size:"small",children:[Object(a.jsxs)(q.a,{gutter:[16,0],children:[Object(a.jsx)(G.a,{span:4,children:Object(a.jsx)(T.a.Item,{name:"id",label:"Search By Id",children:Object(a.jsx)(C.a,{placeholder:"please enter the simulation id"})})}),Object(a.jsx)(G.a,{span:4,children:Object(a.jsx)(T.a.Item,{children:Object(a.jsx)(A.a,{type:"primary",children:"Search"})})})]}),Object(a.jsxs)(q.a,{gutter:[16,0],style:{marginTop:"-10px"},children:[Object(a.jsx)(G.a,{span:6,children:Object(a.jsx)(T.a.Item,Object(w.a)(Object(w.a)({name:"Date",label:"Date"},Ne),{},{children:Object(a.jsx)(Te,{})}))}),Object(a.jsx)(G.a,{span:4,children:Object(a.jsx)(T.a.Item,{name:"gender",label:"Gender",children:Object(a.jsxs)(D.a.Group,{children:[Object(a.jsx)(D.a.Button,{value:"male",children:"Male"}),Object(a.jsx)(D.a.Button,{value:"female",children:"Female"})]})})}),Object(a.jsx)(G.a,{span:3,children:Object(a.jsx)(T.a.Item,{name:"render",label:"Render",valuePropName:"checked",children:Object(a.jsx)(Ie.a,{})})}),Object(a.jsx)(G.a,{span:4,children:Object(a.jsx)(T.a.Item,{name:"location",label:"Location",children:Object(a.jsxs)(we.a,{defaultValue:"1",style:{width:100},children:[Object(a.jsx)(Se,{value:"1",children:"All"}),Object(a.jsx)(Se,{value:"2",children:"Head"}),Object(a.jsx)(Se,{value:"3",children:"Face"}),Object(a.jsx)(Se,{value:"4",children:"Body"}),Object(a.jsx)(Se,{value:"5",children:"Hand"}),Object(a.jsx)(Se,{value:"6",children:"Foot"})]})})}),Object(a.jsx)(G.a,{span:3,children:Object(a.jsx)(T.a.Item,{children:Object(a.jsx)(A.a,{type:"primary",htmlType:"submit",children:"Search"})})})]})]})},Ce=function(e){var t=e.title,n=e.content;return Object(a.jsxs)("div",{className:"discription-wrapper",children:[Object(a.jsxs)("p",{className:"discription-wrapper-p",children:[t,":"]}),n]})};function Le(e){for(var t=[],n=e.from;n<=e.to;n++)t.push(Object(a.jsx)(Ce,{title:H[n].title,content:e.dataNow[H[n].key]}));return t}for(var Ae=[{title:"Id",dataIndex:"id",key:"id"},{title:"Age",dataIndex:"age",key:"age"},{title:"Gender",dataIndex:"gender",key:"gender",render:function(e){var t="male"==e?"blue":"red";return Object(a.jsx)(de.a,{color:t,children:e},e)}},{title:"Location",dataIndex:"wound_location",key:"location"},{title:"Render",dataIndex:"render",key:"render",render:function(e){var t="true"==e?"blue":"red";return Object(a.jsx)(de.a,{color:t,children:e},e)}},{title:"Time",dataIndex:"time",key:"time"},{title:"Action",dataIndex:"index"}],Re=[],Pe=0;Pe<100;Pe++){var We;Re.push((We={index:Pe,id:Pe,render:Pe%2==0?"true":"false",time:"2020-11-11",age:32,gender:Pe%2==1?"male":"female",wound_location:"face",bmi:3.5*Pe,weight:67,wound_width:34,wound_depth:3*Pe,skin_tension:98,tgf_b:29,tnf_a:22.5,inflammatory_cytokine:12.4,inflammatory_cell:22.1,macrophages_concentraion:22.7,wound_healing_time:"2020-10-11",wound_infected:!1,epidermal_laser_density:32.3,dermal_laser_density:32.3,laser_diameter:22.2,laser_cross:14.3,laser_inclination_angle:80,duration_laser:2.3,betamethason_dosage:11,pressure:99,tension_reduction:80.3,botulinum_toxin:22.1,tgf_antibody:12.2,avastin_dosage:32.2,inhibitor_dosage:22.7,epidermal_thickness:97.3,scar_thickness:66.4,scar_width:10,vessel_density:89.5,type3_collagen_density:12.5,Type1_collagen_density:90.3,color:23,smoothness:21,tenderness:34,itchy_intensity:12,painness:90,nerve_ending_density:14.4,tgf_concentration:15.3,tnf_concentration:19.3},Object(I.a)(We,"inflammatory_cytokine",90.3),Object(I.a)(We,"inflamatory_cell_concentration",90.3),Object(I.a)(We,"macrophages_concentraion",89.3),We))}var Fe=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var s;return Object(j.a)(this,n),(s=t.call(this,e)).showDrawer=function(e){e<0||e>=Re.length?he.a.warning({title:"System Tips",content:"No More Item..."}):s.setState({visible:!0,i:e})},s.jump=function(){var e=Object(je.b)();e.push({pathname:"/result"}),e.go()},s.onClose=function(){s.setState({visible:!1})},Ae[6].render=function(e){return Object(a.jsxs)(be.b,{size:"middle",children:[Object(a.jsx)(A.a,{type:"primary",shape:"circle",icon:Object(a.jsx)(ue.a,{}),onClick:function(){return s.showDrawer(e)}}),Object(a.jsx)(A.a,{type:"primary",danger:!0,shape:"circle",icon:Object(a.jsx)(pe.a,{})})]})},s.state={visible:!1,i:0},s.showDrawer=s.showDrawer.bind(Object(oe.a)(s)),s}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=Re[this.state.i];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(De,{}),Object(a.jsx)(B.a,{columns:Ae,dataSource:Re}),Object(a.jsxs)(me.a,{width:900,closable:!1,onClose:this.onClose,visible:this.state.visible,drawerStyle:{background:"#011528"},children:[Object(a.jsx)(q.a,{children:Object(a.jsx)(G.a,{span:12,children:Object(a.jsxs)("h1",{style:{color:"white",marginTop:"-10px"},children:[Object(a.jsx)(Oe.a,{style:{marginRight:"8px",color:"#1890ff"}}),Object(a.jsx)("strong",{children:"Simulation Result Preview"})]})})}),Object(a.jsxs)(q.a,{children:[Object(a.jsx)(G.a,{span:5,offset:1,children:Object(a.jsxs)("h3",{className:"discription-h3",children:[Object(a.jsx)(ye.a,{style:{color:"#eb2f96",marginRight:"4px"}}),"ID:",Object(a.jsx)("strong",{style:{marginLeft:"6px"},children:t.id})]})}),Object(a.jsx)(G.a,{span:6,children:Object(a.jsxs)("h3",{className:"discription-h3",children:[Object(a.jsx)(fe.a,{style:{color:"#eb2f96",marginRight:"4px"}}),"Gender:",Object(a.jsx)("strong",{style:{marginLeft:"6px"},children:t.gender})]})}),Object(a.jsx)(G.a,{span:6,children:Object(a.jsxs)("h3",{className:"discription-h3",children:[Object(a.jsx)(ge.a,{style:{color:"#eb2f96",marginRight:"4px"}}),"Age:",Object(a.jsx)("strong",{style:{marginLeft:"6px"},children:t.age})]})}),Object(a.jsx)(G.a,{span:6,children:Object(a.jsxs)("h3",{className:"discription-h3",children:[Object(a.jsx)(ve.a,{style:{color:"#eb2f96",marginRight:"4px"}}),"Date:",Object(a.jsx)("strong",{style:{marginLeft:"6px"},children:t.time})]})})]}),Object(a.jsxs)("h3",{className:"sub-title",children:[Object(a.jsx)(ke.a,{style:{marginRight:"4px",color:"#1890ff"}}),"Input Parameters"]}),Object(a.jsx)(xe.a,{style:{background:"#d9d9d9",marginTop:"-10px"},children:Object(a.jsxs)(q.a,{children:[Object(a.jsx)(G.a,{span:8,children:Object(a.jsx)(Le,{dataNow:t,from:2,to:10})}),Object(a.jsx)(G.a,{span:8,children:Object(a.jsx)(Le,{dataNow:t,from:11,to:19})}),Object(a.jsx)(G.a,{span:8,children:Object(a.jsx)(Le,{dataNow:t,from:20,to:27})})]})}),Object(a.jsxs)("h3",{className:"sub-title",children:[Object(a.jsx)(_e.a,{style:{marginRight:"4px",color:"#1890ff"}}),"Simulation Resualt"]}),Object(a.jsx)(xe.a,{style:{background:"#d9d9d9",marginTop:"-10px"},children:Object(a.jsxs)(q.a,{children:[Object(a.jsxs)(G.a,{span:9,children:[Object(a.jsx)(Ce,{title:E[0].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[1].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[2].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[3].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[4].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[5].title,content:"12.5"})]}),Object(a.jsxs)(G.a,{span:7,children:[Object(a.jsx)(Ce,{title:E[6].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[7].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[8].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[9].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[10].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[11].title,content:"12.5"})]}),Object(a.jsxs)(G.a,{span:8,children:[Object(a.jsx)(Ce,{title:E[12].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[13].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[14].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[15].title,content:"12.5"}),Object(a.jsx)(Ce,{title:E[16].title,content:"12.5"})]})]})}),Object(a.jsxs)(q.a,{style:{marginTop:"20px"},children:[Object(a.jsx)(G.a,{span:8,style:{textAlign:"center"},children:Object(a.jsx)(A.a,{type:"primary",onClick:function(){return e.showDrawer(e.state.i-1)},children:"Previous"})}),Object(a.jsx)(G.a,{span:8,style:{textAlign:"center"},children:Object(a.jsx)(A.a,{type:"primary",style:{width:"200px"},onClick:function(){return e.jump()},children:"3D Rendering"})}),Object(a.jsx)(G.a,{span:8,style:{textAlign:"center"},children:Object(a.jsx)(A.a,{type:"primary",onClick:function(){return e.showDrawer(e.state.i+1)},children:"Next"})})]})]})]})}}]),n}(i.a.Component),Ge=n(447),Me=Ge.a.Title,qe=Ge.a.Paragraph,Be=Ge.a.Text,He=Ge.a.Link,Ee=function(){return Object(a.jsxs)(Ge.a,{style:{margin:"30px"},children:[Object(a.jsx)(Me,{children:"Introduction"}),Object(a.jsx)(qe,{children:"The purpose of this project is to implement a web-based user interface as the frontend for a Scar Treatment Simulation System. The core functionalities include simulation parameter input interface, simulation result display interface and three-dimensional rendering of scar model.."}),Object(a.jsx)(Me,{level:2,children:"System Description"}),Object(a.jsxs)(qe,{children:["The Scar Treatment Simulation System will be mainly used by medical researchers around the world to test various scar treatment combinations. A user might specify many parameters as input and the frontend should send a request to the simulation server. The user will be able to retrieve the simulation result once it is finished. To enhance the interpretabitliy of results, the frontend wil also render realistic scar models using data returned by the simulation server.",Object(a.jsx)(Be,{strong:!0,children:"Since one simulation could be very expensive, a user should not expect instantaneous results to be generated. We have a database system to store previous simulation results and a user can retrieve it as many times as he or she may want."}),"."]}),Object(a.jsx)(Me,{level:2,children:"How to use the system"}),Object(a.jsxs)(qe,{children:[Object(a.jsx)("p",{style:{marginTop:"10px"},children:"click the left arrow to collopse the menu."}),Object(a.jsx)(m.a,{src:"tutorial/1.png"}),Object(a.jsx)("p",{style:{marginTop:"10px"},children:"it should be like this."}),Object(a.jsx)(m.a,{src:"tutorial/2.png"}),Object(a.jsx)("p",{style:{marginTop:"10px"},children:"click the Simulation item in the menu to initiate a simulation."}),Object(a.jsx)("p",{style:{marginTop:"10px"},children:"When you have finished entering parameters. click the simulation button. In the development version, you can click the button directly without input any parameter."}),Object(a.jsx)(m.a,{src:"tutorial/3.png"}),Object(a.jsx)("p",{style:{marginTop:"10px"},children:"Wait a moment. the page will jump in several seconds."}),Object(a.jsx)(m.a,{src:"tutorial/4.png"}),Object(a.jsx)("p",{style:{marginTop:"10px"},children:"Now. you can see the simulation result. Including the 3D graph(replaced by a picture), the parameters your have input and the output index."}),Object(a.jsx)(m.a,{src:"tutorial/5.png"}),Object(a.jsx)("p",{style:{marginTop:"10px"},children:'you can click the simulation list item to see the simulation list page. In the top of the page, there are some filters. Behind it is the table. you can see the basic information of every simulation. There are two buttons in the right collum of the table. the right one is "delete", the left one is "more".'}),Object(a.jsx)(m.a,{src:"tutorial/6.png"}),Object(a.jsx)("p",{style:{marginTop:"10px"},children:'A drawer page will pop up after you click the "more" button. It should looked like this.'}),Object(a.jsx)(m.a,{src:"tutorial/7.png"}),Object(a.jsx)("p",{style:{marginTop:"10px"},children:"You can navigate to other simulations by the previous button and the next button. If you want to see more information such as the 3D graph, you can click the 3D Rendering button."})]}),Object(a.jsx)(Me,{level:2,children:"Frontend Specification"}),Object(a.jsx)(Me,{level:3,children:"1.Simulation Task Initiation"}),Object(a.jsx)(qe,{children:"A simulation task can be initiated by sending a POST request with parameters in request body. Parameters should be sent to the server in JSON form."}),Object(a.jsx)(Me,{level:3,children:"2.Simulation Listing"}),Object(a.jsx)(qe,{children:"A simulation task can be initiated by sending a POST request with parameters in request body. Parameters should be sent to the server in JSON form."}),Object(a.jsx)(Me,{level:3,children:"3.Simulation Result Retrieval"}),Object(a.jsx)(qe,{children:"Simulation result can be retrieved by sending a GET request with task id. All results will be returned back in JSON form."}),Object(a.jsx)(Me,{level:2,children:"3D renderingn"}),Object(a.jsx)(qe,{children:"The ultimate geometry of a scar can also be retrieved from the server. It is represented in a mesh where points and normals are specified. Material parameters will also be embedded in the return result. Rendering can be achieved by using WebGL."}),Object(a.jsx)(qe,{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(He,{href:"",children:"How to use the system"})}),Object(a.jsx)("li",{children:Object(a.jsx)(He,{href:"",children:"the parameters interprete"})}),Object(a.jsx)("li",{children:Object(a.jsx)(He,{href:"",children:"contact us"})})]})}),Object(a.jsxs)(qe,{children:["Press ",Object(a.jsx)(Be,{keyboard:!0,children:"Esc"})," to exit..."]})]})},Je=Ge.a.Title,ze=Ge.a.Paragraph,Ve=Ge.a.Text,Ue=Ge.a.Link,Ye=function(){return Object(a.jsxs)(Ge.a,{style:{margin:"30px"},children:[Object(a.jsx)(Je,{children:"Tutorial"}),Object(a.jsx)(ze,{children:Object(a.jsxs)("ul",{children:[Object(a.jsx)("li",{children:Object(a.jsx)(Ue,{href:"",children:"Quick Start"})}),Object(a.jsx)("li",{children:Object(a.jsx)(Ue,{href:"",children:"How to use the system"})}),Object(a.jsx)("li",{children:Object(a.jsx)(Ue,{href:"",children:"The parameters interpretation"})}),Object(a.jsx)("li",{children:Object(a.jsx)(Ue,{href:"",children:"The result interpretation"})}),Object(a.jsx)("li",{children:Object(a.jsx)(Ue,{href:"",children:"3D Rendering introduction"})}),Object(a.jsx)("li",{children:Object(a.jsx)(Ue,{href:"",children:"Contact us"})})]})}),Object(a.jsx)(ze,{children:"The purpose of this project is to implement a web-based user interface as the frontend for a Scar Treatment Simulation System. The core functionalities include simulation parameter input interface, simulation result display interface and three-dimensional rendering of scar model.."}),Object(a.jsx)(Je,{level:2,children:"System Description"}),Object(a.jsxs)(ze,{children:["The Scar Treatment Simulation System will be mainly used by medical researchers around the world to test various scar treatment combinations. A user might specify many parameters as input and the frontend should send a request to the simulation server. The user will be able to retrieve the simulation result once it is finished. To enhance the interpretabitliy of results, the frontend wil also render realistic scar models using data returned by the simulation server.",Object(a.jsx)(Ve,{strong:!0,children:"Since one simulation could be very expensive, a user should not expect instantaneous results to be generated. We have a database system to store previous simulation results and a user can retrieve it as many times as he or she may want."}),"."]}),Object(a.jsx)(Je,{level:2,children:"Frontend Specification"}),Object(a.jsx)(Je,{level:3,children:"1.Simulation Task Initiation"}),Object(a.jsx)(ze,{children:"A simulation task can be initiated by sending a POST request with parameters in request body. Parameters should be sent to the server in JSON form."}),Object(a.jsx)(Je,{level:3,children:"2.Simulation Listing"}),Object(a.jsx)(ze,{children:"A simulation task can be initiated by sending a POST request with parameters in request body. Parameters should be sent to the server in JSON form."}),Object(a.jsx)(Je,{level:3,children:"3.Simulation Result Retrieval"}),Object(a.jsx)(ze,{children:"Simulation result can be retrieved by sending a GET request with task id. All results will be returned back in JSON form."}),Object(a.jsx)(Je,{level:2,children:"3D renderingn"}),Object(a.jsx)(ze,{children:"The ultimate geometry of a scar can also be retrieved from the server. It is represented in a mesh where points and normals are specified. Material parameters will also be embedded in the return result. Rendering can be achieved by using WebGL."}),Object(a.jsxs)(ze,{children:["Press ",Object(a.jsx)(Ve,{keyboard:!0,children:"Esc"})," to exit..."]})]})},Ke=n(453),Qe=n(222),Xe=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.jump()}),3e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"jump",value:function(){var e=Object(je.b)();e.push({pathname:"/result"}),e.go()}},{key:"render",value:function(){return Object(a.jsx)(Ke.a,{status:"success",title:"Successfully Post Your Parameters!",subTitle:"Please wait a moment for the result page to jump.",extra:[Object(a.jsx)(Qe.a,{size:"large"})]})}}]),n}(i.a.Component),Ze=Ge.a.Title,$e=Ge.a.Paragraph,et=Ge.a.Text,tt=(Ge.a.Link,function(){return Object(a.jsxs)(Ge.a,{style:{margin:"30px"},children:[Object(a.jsx)(Ze,{children:"About Us"}),Object(a.jsx)($e,{children:"The purpose of this project is to implement a web-based user interface as the frontend for a Scar Treatment Simulation System. The core functionalities include simulation parameter input interface, simulation result display interface and three-dimensional rendering of scar model.."}),Object(a.jsx)(Ze,{level:2,children:"Contact Us"}),Object(a.jsxs)($e,{children:["The Scar Treatment Simulation System will be mainly used by medical researchers around the world to test various scar treatment combinations. A user might specify many parameters as input and the frontend should send a request to the simulation server. The user will be able to retrieve the simulation result once it is finished. To enhance the interpretabitliy of results, the frontend wil also render realistic scar models using data returned by the simulation server.",Object(a.jsx)(et,{strong:!0,children:"Since one simulation could be very expensive, a user should not expect instantaneous results to be generated. We have a database system to store previous simulation results and a user can retrieve it as many times as he or she may want."}),"."]})]})}),nt=o.a.Header,at=o.a.Content,st=o.a.Footer,it=o.a.Sider,ct=l.a.SubMenu,rt=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={collapsed:!1},e.onCollapse=function(t){console.log(t),e.setState({collapsed:t})},e.toggle=function(){e.setState({collapsed:!e.state.collapsed})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.collapsed,t=e?{marginLeft:"80px"}:{marginLeft:"200px"},n=e?{left:"80px"}:{left:"200px"},s=e?{marginRight:"8px",marginLeft:"6px"}:{marginRight:"8px"};return Object(a.jsx)(o.a,{style:{minHeight:"100vh"},children:Object(a.jsxs)(k.a,{children:[Object(a.jsxs)(it,{className:"side",collapsed:e,children:[Object(a.jsxs)("div",{className:"logo",children:[Object(a.jsx)(m.a,{width:45,height:45,src:"logo.png",style:s}),Object(a.jsx)("strong",{children:"Simulation"})]}),Object(a.jsxs)(l.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",children:[Object(a.jsx)(l.a.Item,{icon:Object(a.jsx)(x.a,{}),children:Object(a.jsx)(k.b,{to:"/initiation",children:"Simulation"})},"1"),Object(a.jsx)(l.a.Item,{icon:Object(a.jsx)(u.a,{}),children:Object(a.jsx)(k.b,{to:"/simulations",children:"Simulation List"})},"2"),Object(a.jsxs)(ct,{icon:Object(a.jsx)(p.a,{}),title:"Document",children:[Object(a.jsx)(l.a.Item,{icon:Object(a.jsx)(O.a,{}),children:Object(a.jsx)(k.b,{to:"/introduction",children:"Introduction"})},"3"),Object(a.jsx)(l.a.Item,{icon:Object(a.jsx)(y.a,{}),children:Object(a.jsx)(k.b,{to:"/tutorial",children:"Tutorial"})},"4")]},"sub4"),Object(a.jsx)(l.a.Item,{icon:Object(a.jsx)(f.a,{}),children:Object(a.jsx)(k.b,{to:"/contact",children:"Contact Us"})},"5")]})]}),Object(a.jsxs)(o.a,{className:"site-layout",style:t,children:[Object(a.jsxs)(nt,{className:"header-style",style:n,children:[i.a.createElement(this.state.collapsed?g.a:v.a,{className:"trigger",onClick:this.toggle}),Object(a.jsx)("h1",{children:"Scar TreatMent Simulation System"})]}),Object(a.jsx)(at,{style:{margin:"68px 15px 15px 15px"},children:Object(a.jsx)("div",{className:"site-layout-background",style:{padding:20,minHeight:600},children:Object(a.jsxs)(_.c,{children:[Object(a.jsx)(_.a,{exact:!0,path:"/",children:Object(a.jsx)(Ee,{})}),Object(a.jsx)(_.a,{path:"/initiation",children:Object(a.jsx)(F,{})}),Object(a.jsx)(_.a,{path:"/simulations",children:Object(a.jsx)(Fe,{})}),Object(a.jsx)(_.a,{path:"/result",children:Object(a.jsx)(le,{})}),Object(a.jsx)(_.a,{path:"/introduction",children:Object(a.jsx)(Ee,{})}),Object(a.jsx)(_.a,{path:"/tutorial",children:Object(a.jsx)(Ye,{})}),Object(a.jsx)(_.a,{path:"/success",children:Object(a.jsx)(Xe,{})}),Object(a.jsx)(_.a,{path:"/contact",children:Object(a.jsx)(tt,{})})]})})}),Object(a.jsx)(st,{className:"footer-style",children:"Scar Treatment Simulation System@xinhua hospital"})]})]})})}}]),n}(i.a.Component);r.a.render(Object(a.jsx)(rt,{}),document.getElementById("root"))}},[[439,1,2]]]);
//# sourceMappingURL=main.1956f283.chunk.js.map