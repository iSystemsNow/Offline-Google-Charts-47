gvjs_5R.prototype.po=gvjs_B(77,function(a,b){return b-a});gvjs_6R.prototype.po=gvjs_B(76,function(a,b){return this.lK.po(a,b)});gvjs_$R.prototype.po=gvjs_B(75,function(a,b){return this.ue.qo(a,b)});gvjs_eS.prototype.po=gvjs_B(74,function(a,b){return this.UG.qo(a,b)});gvjs_5R.prototype.qo=gvjs_B(73,function(a,b){return this.po(this.scale(a),this.scale(b))});gvjs_6R.prototype.qo=gvjs_B(72,function(a,b){return this.hy.po(a,b)});gvjs_$R.prototype.qo=gvjs_B(71,function(a,b){return this.ue.po(a,b)});
gvjs_eS.prototype.qo=gvjs_B(70,function(a,b){return this.mT.qo(a,b)});function gvjs_zX(a){this.m=a.options;this.SW=a.bn;this.Bh=a.EJ;this.CN=a.axes.domain;this.u3=a.axes.target;this.Y9=null!=a.X9?a.X9:1;this.Hoa=null!=a.Goa?a.Goa:gvjs_U;this.Sv=this.layout()}gvjs_zX.prototype.xy=function(){var a=[];gvjs_o(this.Sv,function(b){gvjs__h(a,b.F.list)});gvjs_2h(a,function(b,c){return b.stack===c.stack?-gvjs_1h(b.ho,c.ho):gvjs_1h(b.stack,c.stack)});return a};
gvjs_zX.prototype.FH=function(){var a=[];gvjs_o(this.Sv,function(b){gvjs_m(b.groups,function(c,d){null!=c&&gvjs_m(c.Un,function(e,f){gvjs__h(a,gvjs_n(e.Lb.gk,function(g,h){var k=g.shape.data();return g.shape.clone().data({value:k,id:gvjs_SK(gvjs_SK(gvjs_SK(gvjs_SK(gvjs_NR(g.definition.sourceColumn,g.definition.EE),gvjs__Q,g.definition.aj),gvjs_ls,d),gvjs_0u,f),gvjs_0Q,h+1)})}));gvjs__h(a,gvjs_n(e.Lb.lz,function(g,h){var k=g.shape.data();return g.shape.clone().data({value:k,id:gvjs_SK(gvjs_SK(gvjs_SK(gvjs_SK(gvjs_NR(g.definition.sourceColumn,
g.definition.EE),gvjs__Q,g.definition.aj),gvjs_ls,d),gvjs_0u,f),gvjs_0Q,-h-1)})}))},this)},this)},this);return a};function gvjs_Wka(a,b){if(1>=a)return[b];var c=0*(b.end-b.start),d=c/(a-1);c=(b.end-b.start-c)/a;var e=[];b=b.start;for(var f=0;f<a;f++)e.push(new gvjs_F(b,b+c)),b+=c+d;return e}
function gvjs_Xka(a,b,c,d){var e={range:b,definition:c,Un:[]},f=gvjs_Wka(c.Un.length,b);gvjs_m(c.Un,function(g,h){var k={definition:g,range:f[h],height:{gk:0,lz:0},Lb:{gk:[],lz:[]}};e.Un.push(k);gvjs_m(g.Lb,function(l,m){l.sourceColumn in d.index?d.list[d.index[l.sourceColumn]].Lb.push(l):(d.index[l.sourceColumn]=d.list.length,d.list.push({color:null,column:l.sourceColumn,stack:h,ho:m,Lb:[l]}),d.e3=Math.max(d.e3,h+1),d.aV=Math.max(d.aV,m+1));m=this.u3[l.SK];var n=m.scale,p=n.scale(n.YB());n=k.range.start;
var q=k.height.gk+p,r=k.range.end-k.range.start,t=l.value;if(isNaN(t)||null==t)m=null;else{t-=p;var u=t+k.height.gk;0<=t?k.height.gk+=t:(q=-k.height.lz+p,u=-k.height.lz+t+p,k.height.lz-=t);l.Ut=r/2+k.range.start;l.XCa=u;gvjs_SK(gvjs_NR(l.sourceColumn,l.EE),gvjs__Q,l.aj);p=new gvjs_2(q,n+r,q+t,n);p.top>p.bottom&&(u=p.top,p.top=p.bottom,p.bottom=u);null===m.range?m.range=new gvjs_F(p.top,p.bottom):(gvjs_lR(m.range,p.top),gvjs_lR(m.range,p.bottom));m=(new gvjs_kR(n,q,r,t)).setData(l)}m&&(0<=gvjs_t(gvjs_IA(m),
gvjs_Va)?k.Lb.gk:k.Lb.lz).push({definition:l,shape:m})},this)},a);return e}
function gvjs_Yka(a,b){var c={};if(gvjs_Gb(a,function(q){return 0===q.groups.length}))return{};gvjs_m(a,function(q,r){gvjs_m(q.groups,function(t){c[t.aj]=r})});var d={},e={},f;for(f in b){var g=b[f],h=g.scale;g=gvjs_n(g.columns,function(q){return a[c[q]]});var k={fCa:h.zi(),type:g[0].type,scale:h,Xf:{},groups:[]};e[f]=k;k.type in d||(d[k.type]=f);if(h.zi())for(var l=0;;l++){var m={Un:[]},n=gvjs_n(g,function(q){return q.groups[l]});if(!gvjs_Fb(n,function(q){return null!=q}))break;gvjs_m(n,function(q){q.Og&&
null==m.Og&&(m.Og=q.Og);gvjs__h(m.Un,q.Un)});k.groups.push(m)}else{var p=[];gvjs_m(g,function(q){gvjs_m(q.groups,function(r){var t=gvjs_bx(p,r,function(u,v){return h.qo(u.Og,v.Og)});0>t?gvjs_aw(p,{Og:r.Og,Xf:gvjs_p(r.Xf),Un:gvjs_Ib(r.Un)},-(t+1)):gvjs__h(p[t].Un,r.Un)})});k.groups=p}}return e}
function gvjs_Zka(a,b,c,d){var e=a.CN[c],f=e.scale;f.zi()||gvjs_2h(b.groups,function(r,t){r=r.ia?r.Og:f.scale(r.Og);t=t.ia?t.Og:f.scale(t.Og);return gvjs_1h(r,t)});var g=Infinity,h=null;gvjs_m(b.groups,function(r){f.zi()&&(r.Og=f.add(r.Og),r.ia=!0);r=r.ia?r.Og:f.scale(r.Og);if(null!=r){if(null!==h){var t=r-h;0<t&&t<g&&(g=t)}h=r}});isFinite(g)||(g=1);var k={list:[],index:{},e3:0,aV:0};c=gvjs_n(b.groups,function(r){var t=r.ia?r.Og:f.scale(r.Og);if(null!=t){var u=g,v=t;t+=u;switch(this.Hoa){case gvjs_U:v-=
u/2,t-=u/2}u=(t-v)/2;v+=(1-this.Y9)*u;t-=(1-this.Y9)*u;v=new gvjs_F(v,t);null===e.range?e.range=v.clone():(u=e.range,u.start=Math.min(u.start,v.start),u.end=Math.max(u.end,v.end));return gvjs_Xka(this,v,r,k)}},a);for(var l=0,m=k.e3;l<m;l++)for(var n=0,p=k.aV;n<p;n++)a.Bh.wu(String(l),String(n));var q=a.Bh.qd();gvjs_m(k.list,function(r,t){var u=gvjs_Gd(gvjs_r(this.m,gvjs_Iu+(t+d)+".color",q.Dq(r.stack,r.ho))).hex;r.color=u;gvjs_m(r.Lb,function(v){v.color=u})},a);return{definition:b,F:k,groups:c}}
gvjs_zX.prototype.layout=function(){var a=gvjs_Yka(this.SW,this.CN),b=0;return gvjs_gx(a,function(c,d){c=gvjs_Zka(this,c,d,b);b+=c.F.list.length;return c},this)};function gvjs_AX(a,b,c,d){gvjs_WS.call(this,a,b,c,d)}gvjs_l(gvjs_AX,gvjs_WS);gvjs_AX.prototype.vi=function(){return gvjs_r(this.options,gvjs_0p,gvjs__,gvjs_VS)===gvjs_X?gvjs__:gvjs_X};
gvjs_AX.prototype.kma=function(a,b,c,d){function e(n,p){return f?p:n}var f=gvjs_s(this.options,"stacked",!1),g=this.Kb,h=a[String(c.aj)],k=g.getValue(d,c.aj);this.vi();var l=e([0],c.F);a=e(c.F,[0]);var m=[];gvjs_m(a,function(n){var p=[],q={};gvjs_m(l,function(r){r=(f?r:n).Ds;var t=g.getValue(d,r),u=b[r],v=u.scale,w=u.name;w in q||(p.push({Lb:[]}),q[w]=p.length-1);w=p[q[w]].Lb;v.zi()&&null!=t&&(0===gvjs_9R(v).length&&v.add("",!0),v.add(t,!0));w.push({aj:c.aj,sourceColumn:r,EE:d,DN:h.name,SK:u.name,
Og:k,fDa:t,color:null,value:u.scale.scale(t),ia:!0})});gvjs_m(p,function(r){m.push(r)})});return{aj:c.aj,Og:k,Xf:c.Xf,Un:m}};gvjs_AX.prototype.jma=function(a,b,c){return{type:this.Kb.Y(c.aj),Xf:c.Xf,groups:gvjs_n(gvjs_dx(this.Kb.ca()),gvjs_k(this.kma,this,a,b,c))}};
gvjs_AX.prototype.VX=function(a,b,c){gvjs_o(a,function(m){m.expand=!1});gvjs_o(b,function(m){m.expand=!0});var d=this.vi()===gvjs__,e=d&&gvjs_Fb(gvjs_Ah(b),function(m){return b[m].uk===gvjs_Av}),f=d&&gvjs_Fb(gvjs_Ah(b),function(m){return b[m].uk===gvjs_bq}),g={},h;for(h in b)gvjs_m(b[h].columns,function(m){g[m]={name:h,scale:b[h].scale}});var k={};for(h in a)gvjs_m(a[h].columns,function(m){k[m]={name:h,scale:a[h].scale}});var l=gvjs_n(this.mN.bn,gvjs_k(this.jma,this,k,g));return new gvjs_zX({options:this.options,
bn:l,axes:{domain:a,target:b},EJ:c,X9:gvjs_Lw(this.options,"groupSize"),zCa:!d||e,ACa:!d||f})};function gvjs_BX(a,b){gvjs_ZS.call(this,a,b)}gvjs_l(gvjs_BX,gvjs_ZS);gvjs_=gvjs_BX.prototype;gvjs_.Mp=function(a){a.style(gvjs_Lu,0).style(gvjs_Mu,1).style(gvjs_Ju,.4).style(gvjs_Ku,2);return a};gvjs_.jr=function(a){a.style(gvjs_Lu,null).style(gvjs_Mu,null).style(gvjs_Ju,null).style(gvjs_Ku,null);return a};gvjs_.IS=function(a){var b=a.data().value.color;this.Mp(a).style(gvjs_Ir,b)};gvjs_.zS=function(a){var b=a.data().value.color;this.Mp(a).style(gvjs_Ir,gvjs__S(b,this.mP,this.eB))};
gvjs_.vS=function(a){var b=a.data().value.color;this.jr(a).style(gvjs_Ir,gvjs_0S(b,this.Aea,this.eB))};gvjs_.FS=function(a){var b=a.data().value.color;this.jr(a).style(gvjs_Ir,b)};function gvjs_CX(a){gvjs_1K.call(this,a)}gvjs_l(gvjs_CX,gvjs_1K);gvjs_=gvjs_CX.prototype;gvjs_.yq=function(){return null};gvjs_.Kf=function(){return gvjs_YS};gvjs_.bq=function(a,b,c,d){a=new gvjs_RR(this,a,b,c,d);a.cu([gvjs_Wp,gvjs_ds,gvjs_tu,gvjs_dR,gvjs_7Q,gvjs_hp,gvjs_gp,gvjs_$g]);return a};gvjs_.to=function(a,b){return new gvjs_BX(a,b)};gvjs_.Tm=function(a,b,c,d){return new gvjs_AX(a,b,c,d)};
gvjs_.zs=function(a){return[new gvjs_ZR([new gvjs_QK(gvjs_Do)]),new gvjs_0R([new gvjs_QK(gvjs_YQ),new gvjs_QK(gvjs_ZQ)],gvjs_r(a,gvjs_Cu)===gvjs_Tu),new gvjs__R([new gvjs_QK(gvjs_Do),new gvjs_QK(gvjs_YQ),new gvjs_QK(gvjs_ZQ),new gvjs_QK(gvjs_3Q)]),new gvjs_2R([new gvjs_QK(gvjs_YQ)])]};gvjs_.DG=function(a,b){null==this.Pg?this.Pg=new gvjs_ER(this.container,a,b,[gvjs_3o,gvjs_1Q]):this.Pg.update(a,b)};gvjs_g(gvjs_If,gvjs_CX,void 0);gvjs_CX.convertOptions=function(a){var b=new gvjs__d([a]);a=gvjs_hT(a);b=b.ob(gvjs_Pt);null!=b&&(a.bars=b===gvjs__?gvjs_X:gvjs__);return a};gvjs_CX.prototype.draw=gvjs_CX.prototype.draw;gvjs_CX.prototype.clearChart=gvjs_CX.prototype.Qb;gvjs_CX.prototype.getSelection=gvjs_CX.prototype.getSelection;gvjs_CX.prototype.setSelection=gvjs_CX.prototype.setSelection;