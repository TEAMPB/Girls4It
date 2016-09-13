/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['./DvtToolkit'], function(dvt) {
  // Internal use only.  All APIs and functionality are subject to change at any time.

var q;function ba(a,b){0==a.indexOf("dvt.")&&(a=a.substring(4));var c=a.split("."),d=eval("dvt");c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}Math.floor(2147483648*Math.random()).toString(36);
(function(a){function b(){}function c(a,b){this.Init(a,b)}function d(){this.Init({alta:d.lh})}function e(a){this.Init(a)}a.Vb=function(a,b,c){this.Init(a,b,c)};a.v.F(a.Vb,a.Je);a.Vb.p7="vertical";a.Vb.vn=function(){return a.B.Va()};a.Vb.ef=function(a,b,c,d){c=(c-a)*d;a=b-a;return 0==c||0==a?0:c/a};a.Vb.Pi=function(a,b,c,d){b=c*(b-a);return 0==b||0==d?a:b/d+a};a.Vb.newInstance=function(b,c,d){return new a.Vb(b,c,d)};a.Vb.bla="seconds minutes hours days weeks months quarters years".split(" ");a.Vb.prototype.Init=
function(b,c,f){a.Vb.C.Init.call(this,b,c,f);this.ima=new e;this.Qk=h.vza;this.UX(!1,!1,!1,!1);this.rB=b.N3().dateToIsoConverter;this.lz={PRa:[a.H.va(a.H.Ia,"DAY_SHORT_SUNDAY",null),a.H.va(a.H.Ia,"DAY_SHORT_MONDAY",null),a.H.va(a.H.Ia,"DAY_SHORT_TUESDAY",null),a.H.va(a.H.Ia,"DAY_SHORT_WEDNESDAY",null),a.H.va(a.H.Ia,"DAY_SHORT_THURSDAY",null),a.H.va(a.H.Ia,"DAY_SHORT_FRIDAY",null),a.H.va(a.H.Ia,"DAY_SHORT_SATURDAY",null),a.H.va(a.H.Ia,"DAY_SUNDAY",null),a.H.va(a.H.Ia,"DAY_MONDAY",null),a.H.va(a.H.Ia,
"DAY_TUESDAY",null),a.H.va(a.H.Ia,"DAY_WEDNESDAY",null),a.H.va(a.H.Ia,"DAY_THURSDAY",null),a.H.va(a.H.Ia,"DAY_FRIDAY",null),a.H.va(a.H.Ia,"DAY_SATURDAY",null)],hfa:[a.H.va(a.H.Ia,"MONTH_SHORT_JANUARY",null),a.H.va(a.H.Ia,"MONTH_SHORT_FEBRUARY",null),a.H.va(a.H.Ia,"MONTH_SHORT_MARCH",null),a.H.va(a.H.Ia,"MONTH_SHORT_APRIL",null),a.H.va(a.H.Ia,"MONTH_SHORT_MAY",null),a.H.va(a.H.Ia,"MONTH_SHORT_JUNE",null),a.H.va(a.H.Ia,"MONTH_SHORT_JULY",null),a.H.va(a.H.Ia,"MONTH_SHORT_AUGUST",null),a.H.va(a.H.Ia,
"MONTH_SHORT_SEPTEMBER",null),a.H.va(a.H.Ia,"MONTH_SHORT_OCTOBER",null),a.H.va(a.H.Ia,"MONTH_SHORT_NOVEMBER",null),a.H.va(a.H.Ia,"MONTH_SHORT_DECEMBER",null),a.H.va(a.H.Ia,"MONTH_JANUARY",null),a.H.va(a.H.Ia,"MONTH_FEBRUARY",null),a.H.va(a.H.Ia,"MONTH_MARCH",null),a.H.va(a.H.Ia,"MONTH_APRIL",null),a.H.va(a.H.Ia,"MONTH_MAY",null),a.H.va(a.H.Ia,"MONTH_JUNE",null),a.H.va(a.H.Ia,"MONTH_JULY",null),a.H.va(a.H.Ia,"MONTH_AUGUST",null),a.H.va(a.H.Ia,"MONTH_SEPTEMBER",null),a.H.va(a.H.Ia,"MONTH_OCTOBER",null),
a.H.va(a.H.Ia,"MONTH_NOVEMBER",null),a.H.va(a.H.Ia,"MONTH_DECEMBER",null)]};this.Xg=new d};a.Vb.prototype.xf=function(a){this.W=this.Xg.fn(a)};a.Vb.prototype.jD=function(a){this.fw=new b;return this.fw.parse(a)};a.Vb.prototype.Cv=function(b){var c=b.orientation;this.de=c&&c==a.Vb.p7?!0:!1;this.WWa(this.de);this.uu=b.fya;this.ZH=b.LXa?b.LXa.reverse():[b.scale];this.FQ=b.hya;this.xo=b.Z2;this.PG=b.Y2;this.Zb=b.start;this.Ic=b.end;this.bL=b.wX;this.qf=b.scale;this.Qp=b.uRa;this.LE()};a.Vb.prototype.tF=
function(a,b){if("undefined"===typeof b||null===b)b=this.jg;this.je=b<a?a:b};a.Vb.prototype.Mo=function(){return a.B.da(this.u())};a.Vb.prototype.Sb=function(){return this.de};a.Vb.prototype.ta=function(a,b,c){a&&!this.W&&(this.xb=b,this.Kb=c,this.aOa(),this.pea(a,this.jg));this.eH(b,c)};a.Vb.prototype.pea=function(a,b){this.xf(a);this.yl=this.W._resources;null==this.yl&&(this.yl=[]);var c=this.yl.firstDayOfWeek;null==c&&(c=0);this.ima.gsb(c);this.rB||(this.rB=this.u().N3().dateToIsoConverter);c=
this.jD(this.W);this.Cv(c);this.qf&&this.dqb(this.Zb,this.Ic,b);return this.je};a.Vb.prototype.Tu=function(){var b=this.qf&&-1!=a.na.kb(a.Vb.bla,this.qf),c=this.qf&&this.xo&&this.xo[this.qf],d=this.Zb&&this.Ic&&this.Ic>this.Zb;return(b||c)&&d};a.Vb.prototype.em=function(){return this.uu?this.uu:a.H.va(a.H.Ia,"TIMEAXIS")};a.Vb.prototype.LE=function(){this.e9=new a.j(h.wkb(this.W));this.e9.ij(this.bL);var b=this.e9.Pg();this.e9.ij("border:"+2*b+"px;");this.IWa(b)};a.Vb.prototype.aOa=function(){this.de?
(this.jg=this.Kb,this.aj=this.xb):(this.jg=this.xb,this.aj=this.Kb)};a.Vb.prototype.lgb=function(){null!==this.aj&&this.Jxa(this.aj-this.fva());this.nK=this.je+this.fva()-h.kZa};a.Vb.prototype.bhb=function(a,b){this.xb=a;this.Kb=b;this.aOa();this.tF(this.jg);this.lgb()};a.Vb.prototype.eH=function(a,b){this.bhb(a,b);f.Yqb(this)};a.Vb.prototype.dqb=function(a,b,c){this.LWa(this.Qp);this.bo("short",this.lz);this.AIa=[];this.Rn=[];this.vW=[];this.de?this.Ofa(this.yl.converterVert):this.Ofa(this.yl.converter);
this.FQ&&this.jXa(this.FQ);for(var d=this.qf,e=0;e<this.ZH.length;e++){var f=this.ZH[e],h=this.peb(f,d,a,b);this.qeb(e,f,a,b,h,c)}this.Et(d)};a.Vb.prototype.peb=function(b,c,d,e){this.Et(b);var f=Infinity,p=0,w;if(this.xo&&this.xo[b])w=this.xo[b],b=w.times,w=w.labels;else if(this.PG&&this.PG[b])w=this.PG[b],b=w.times,w=w.labels;else for(b=[],w=[],d=this.BW(d).getTime(),b.push(d);d<e;)w.push(this.Ata(new Date(d))),d=this.hX(d).getTime(),b.push(d);e=[];for(var x=0;x<w.length;x++){d=b[x];var v=new a.ca(this.u(),
w[x],0,0,"s_label"+d);v.Bb(h.ukb(this.W));v.time=d;var z=b[x+1];this.A(v);var u=v.aa();this.removeChild(v);if(this.de)var D=u.b,u=u.a,C=h.xza;else D=u.a,u=u.b,C=h.zza;d=(z-d)/Math.max(C,D+2*h.yza);d<f&&(f=d);u>p&&(p=u);e.push(v)}this.Jxa(p+2*h.yza);this.AIa.push(b);this.Rn.push(e);this.Et(c);return f};a.Vb.prototype.qeb=function(a,b,c,d,e,f){c=null!==this.aj?f:(d-c)/e;this.vW.push(c);b==this.qf&&(this.np=a,this.tF(c,f));0==a&&(this.$0=this.Rn[this.Rn.length-1].length*f)};a.Vb.prototype.Et=function(a){this.qf=
a};a.Vb.prototype.jXa=function(a){this.FQ=a};a.Vb.prototype.cwa=function(){for(var a=0;a<this.ZH.length-1;a++)if(this.ZH[a]==this.qf){this.qf=this.ZH[a+1];break}};a.Vb.prototype.ota=function(){for(var a=1;a<this.ZH.length;a++)if(this.ZH[a]==this.qf){this.qf=this.ZH[a-1];break}};a.Vb.prototype.LWa=function(a){this.Qp=a};a.Vb.prototype.Ofa=function(a){this.gna=a};a.Vb.prototype.Jxa=function(a){a>this.Lv&&(this.Lv=a)};a.Vb.prototype.wR=function(){null==this.E2&&(this.E2=30);return this.E2};a.Vb.prototype.IWa=
function(a){this.Qk=a};a.Vb.prototype.UX=function(a,b,c,d){this.pHa=(a|0)*this.Qk;this.u8a=(b|0)*this.Qk;this.mHa=(c|0)*this.Qk;this.t8a=(d|0)*this.Qk};a.Vb.prototype.wib=function(){for(var a=this.de?{top:this.pe(),right:this.nK,bottom:this.pe(),left:this.nK}:{top:this.nK,right:this.pe(),bottom:this.nK,left:this.pe()},b=[],c=0,d=1,e=["top","right","bottom","left"],f=0;f<e.length;f++)0<this.Pg(e[f])==d?c+=a[e[f]]:(b.push(c),c=a[e[f]],d=Math.abs(d-1));b.push(c);return b.toString()};a.Vb.prototype.fva=
function(){return this.pHa+this.mHa};a.Vb.prototype.Pg=function(a){switch(a){case "top":return this.pHa;case "right":return this.u8a;case "bottom":return this.mHa;case "left":return this.t8a;default:return this.Qk}};a.Vb.prototype.pe=function(){return this.Lv+this.fva()};a.Vb.prototype.bo=function(a,b){this.P$a=new c("short"==a?c.SHORT:c.q0a,b)};a.Vb.prototype.BW=function(a){return this.ima.BW(new Date(a),this.qf)};a.Vb.prototype.hX=function(a){return this.ima.hX(a,this.qf)};a.Vb.prototype.Ata=function(a){if(this.Qp){var b;
b=this.Qp[this.qf]?this.Qp[this.qf]:this.Qp["default"]?this.Qp["default"]:this.Qp;if(b.format)return b.format(this.rB?this.rB(a):a);if(b.getAsString)return b.getAsString(a)}if(this.gna&&this.gna[this.qf]){b=this.gna[this.qf];if(b.format)return b.format(this.rB?this.rB(a):a);if(b.getAsString)return b.getAsString(a)}return this.P$a.format(a,this.qf,this.FQ)};a.Vb.prototype.WWa=function(a){this.Lv=a?h.zza:h.xza};a.Vb.prototype.Hxa=function(){this.aj=null};a.Vb.prototype.iS=function(a){this.np=a};a.v.F(e,
a.v);e.prototype.Init=function(){this.Y9a=864E5;this.oJa=0};e.prototype.gsb=function(a){this.oJa=a};e.prototype.BW=function(a,b){var c=new Date(a.getTime());if("weeks"==b){c.setHours(0,0,0);var d=(a.getDay()-this.oJa+7)%7;0<d&&c.setTime(c.getTime()-d*this.Y9a)}else"months"==b?c.setDate(1):"days"==b?c.setHours(0,0,0):"hours"==b?c.setMinutes(0,0,0):"minutes"==b?c.setSeconds(0,0):"seconds"==b?c.setMilliseconds(0):"quarters"==b?(c.setDate(1),d=2-(a.getMonth()+11)%3,0<d&&c.setMonth(c.getMonth()+d)):"halfyears"==
b?(c.setDate(1),d=5-(a.getMonth()+11)%6,0<d&&c.setMonth(c.getMonth()+d)):"years"==b?(c.setMonth(0),c.setDate(1)):"twoyears"==b&&(c.setMonth(0),c.setDate(1));return c};e.prototype.hX=function(a,b){if("seconds"==b)return new Date(a+1E3);if("minutes"==b)return new Date(a+6E4);if("hours"==b)return new Date(a+36E5);var c=new Date(a);"days"==b?c.setDate(c.getDate()+1):"weeks"==b?c.setDate(c.getDate()+7):"months"==b?c.setMonth(c.getMonth()+1):"quarters"==b?c.setMonth(c.getMonth()+3):"halfyears"==b?c.setMonth(c.getMonth()+
6):"years"==b?c.setFullYear(c.getFullYear()+1):"twoyears"==b?c.setFullYear(c.getFullYear()+2):c.setYear(c.getYear()+1);return c};a.v.F(d,a.eb,"DvtTimeAxisDefaults");d.lh={backgroundColor:"rgba(255,255,255,0)",borderColor:"#d9dfe3",separatorColor:"#bcc7d2",labelStyle:new a.j("font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 12px; color: #333333;")};a.v.F(c,a.v);c.q0a=0;c.SHORT=1;c.prototype.Init=function(a,b){this.Zk=a;this.lz=b;this.Ym=[];this.Ym[0]={};this.Ym[0].seconds="HH:MM:ss";
this.Ym[0].minutes="HH:MM";this.Ym[0].hours="HH:MM";this.Ym[0].days="dddd";this.Ym[0].weeks="m/dd";this.Ym[0].months="mmmm";this.Ym[0].quarters="mmmm";this.Ym[0].halfyears="yyyy";this.Ym[0].years="yyyy";this.Ym[0].twoyears="yyyy";this.Ym[1]={};this.Ym[1].seconds="HH:MM:ss";this.Ym[1].minutes="HH:MM";this.Ym[1].hours="HH:MM";this.Ym[1].days="m/dd";this.Ym[1].weeks="m/dd";this.Ym[1].months="mmm";this.Ym[1].quarters="mmm";this.Ym[1].halfyears="yy";this.Ym[1].years="yy";this.Ym[1].twoyears="yy"};c.prototype.format=
function(a,b,c){b=this.Ym[this.Zk][b];if(null!=b){var d=!1;if(c){a=a.getTime();for(var d=Object.keys(c),e=0,f=0;f<d.length;f++)a>=parseInt(d[f],10)&&(e=c[d[f]]);a=new Date(a+e);d=!0}if(-1!=b.indexOf(":"))var h=":";else-1!=b.indexOf("/")&&(h="/");if(h){b=b.split(h);c=this.aua(a,b[0],d);for(f=1;f<b.length;f++)c+=h+this.aua(a,b[f],d);return c}return this.aua(a,b,d)}return a.toLocaleString()};c.prototype.aua=function(a,b,c){if(c)switch(b){case "ss":return a=a.getUTCSeconds(),10>a?"0"+a:a;case "HH":return a=
a.getUTCHours(),10>a?"0"+a:a;case "MM":return a=a.getUTCMinutes(),10>a?"0"+a:a;case "dd":return a=a.getUTCDate(),10>a?"0"+a:a;case "dddd":return this.lz.PRa[a.getUTCDay()+7];case "m":return a.getUTCMonth()+1;case "mmm":return this.lz.hfa[a.getUTCMonth()];case "mmmm":return this.lz.hfa[a.getUTCMonth()+12];case "yy":return a.getUTCFullYear().toString().substring(2,4);default:return a.getUTCFullYear()}else switch(b){case "ss":return a=a.getSeconds(),10>a?"0"+a:a;case "HH":return a=a.getHours(),10>a?
"0"+a:a;case "MM":return a=a.getMinutes(),10>a?"0"+a:a;case "dd":return a=a.getDate(),10>a?"0"+a:a;case "dddd":return this.lz.PRa[a.getDay()+7];case "m":return a.getMonth()+1;case "mmm":return this.lz.hfa[a.getMonth()];case "mmmm":return this.lz.hfa[a.getMonth()+12];case "yy":return a.getFullYear().toString().substring(2,4);default:return a.getFullYear()}};a.v.F(b,a.v,"DvtTimeAxisParser");b.prototype.parse=function(a){this.SL=new Date(a.start);this.MK=new Date(a.end);var b=this.DZ();b.wX=a.style;
b.id=a.id;b.fya=a.shortDesc;b.hya=a._tzo;b.vVa=a._ip;b.Z2=a._cts;b.Y2=a._cfs;b.scale=a.scale;b.uRa=a.converter;b.LXa=a.zoomOrder?a.zoomOrder:null;b.orientation=a.orientation?a.orientation:"horizontal";return b};b.prototype.DZ=function(){var a={};a.start=this.SL.getTime();a.end=this.MK.getTime();return a};var f={};a.v.F(f,a.v,"DvtTimeAxisRenderer");f.Yqb=function(a){if(a.Tu()){var b=a.pe();f.Ueb(a,b,h.rSa(a.W))}};f.Ueb=function(b,c,d){var e=0,r=b.u();if(null==b.yg){var p=new a.Cd;b.Sb()?(b.yg=new a.Rect(r,
e,-b.Pg("top"),c,b.nK,"axis"),p.Qe(e,0,c,b.je)):(b.yg=new a.Rect(r,-b.Pg("left"),e,b.nK,c,"axis"),p.Qe(0,e,b.je,c));b.yg.Bb(b.e9);b.yg.md();b.yg.te(p);b.A(b.yg);(c=h.skb(b.W))&&b.yg.cA().Wa().setAttribute("class",c)}else b.yg.te(null),p=new a.Cd,b.Sb()?(b.yg.Fa(e),b.yg.jb(-b.Pg("top")),b.yg.Xa(c),b.yg.qb(b.nK),p.Qe(e,0,c,b.je)):(b.yg.Fa(-b.Pg("left")),b.yg.jb(e),b.yg.Xa(b.nK),b.yg.qb(c),p.Qe(0,e,b.je,c)),b.yg.te(p);b.yg.Fl();b.yg.cA().Wa().setAttribute("stroke-dasharray",b.wib());d=new a.j(d);b.VV=
new a.xa(d.M(a.j.mc));c=b.Lv;e=e+b.Sb()?b.Pg("left"):b.Pg("top");f.Veb(b,b.aj,b.yg,b.je,e+c,e,e)};f.Veb=function(b,c,d,e,r,p,w){var x=b.u(),v=a.B.da(x),z=new a.ma(x,"block_0_"+c);z.jN=0;z.fI=c;d.A(z);c=h.tkb(b.W);d=h.vkb(b.W);for(var u=b.AIa[b.np],D=b.Rn[b.np],C=0;C<u.length-1;C++){var B=u[C],A=u[C+1],F=a.Vb.ef(b.Zb,b.Ic,B,e),A=a.Vb.ef(b.Zb,b.Ic,A,e),y=A-F;0!=F&&((b.Sb()?f.ula(x,z,r,p,F,F,b.VV,"s_tick"+B,d):v?f.ula(x,z,e-F,e-F,r,p,b.VV,"s_tick"+B,d):f.ula(x,z,F,F,r,p,b.VV,"s_tick"+B,d)).time=B);b.Sb()?
f.qla(z,D[C],w+(r-w)/2,F+(A-F)/2,r-w,c):v?f.qla(z,D[C],e-(F+(A-F)/2),w+(r-w)/2,y,c):f.qla(z,D[C],F+(A-F)/2,w+(r-w)/2,y,c)}};f.qla=function(b,c,d,e,f,h){c.Fa(d);c.jb(e);c.ao()&&c.xg(c.Yq());a.Ca.kd(c,f,Infinity,b);c.Xf();a.Ca.EW(c,e);h&&c.cA().Wa().setAttribute("class",h)};f.ula=function(b,c,d,e,f,h,w,x,v){b=new a.Gc(b,d,f,e,h,x);b.Ga(w);b.md();c.A(b);v&&b.cA().Wa().setAttribute("class",v);return b};var h={};a.v.F(h,a.v,"DvtTimeAxisStyleUtils");h.vza=1;h.kZa=1;h.zza=50;h.xza=21;h.yza=2;h.wkb=function(a){var b=
"",c=h.xkb(a);c&&(b=b+"background-color:"+c+";");(c=h.Xn(a))&&(b=b+"border-color:"+c+";");(c=h.Pg())&&(b=b+"border-width:"+c+";");return b};h.xkb=function(a){return a.backgroundColor};h.Xn=function(a){return a.borderColor};h.Pg=function(){return h.vza};h.ukb=function(a){return a.labelStyle};h.dva=function(a){return a.separatorColor};h.rSa=function(a){var b="";(a=h.dva(a))&&(b=b+"color:"+a+";");return b};h.skb=function(a){return a._resources?a._resources.axisClass:void 0};h.cwb=function(a){return a._resources?
a._resources.axisBorderClass:void 0};h.tkb=function(a){return a._resources?a._resources.axisLabelClass:void 0};h.vkb=function(a){return a._resources?a._resources.axisSeparatorClass:void 0};h.wwb=function(a){return a._resources?a._resources.borderTopVisible:!1};h.vwb=function(a){return a._resources?a._resources.borderRightVisible:!1};h.twb=function(a){return a._resources?a._resources.borderBottomVisible:!1};h.uwb=function(a){return a._resources?a._resources.borderLeftVisible:!1};a.Ha(a,"TimeAxis",
a.Vb);a.Ha(a.Vb,"newInstance",a.Vb.newInstance);a.Ha(a.Vb.prototype,"render",a.Vb.prototype.ta)})(dvt);
  return dvt;
});
