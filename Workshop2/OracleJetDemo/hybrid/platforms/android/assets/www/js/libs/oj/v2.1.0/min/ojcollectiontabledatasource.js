/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojdatasource-common","ojs/ojmodel"],function(a,g){a.rd=function(c,b){this.data={};if(!(c instanceof a.l))throw Error(a.aa.nd._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.aa.nd._ERR_DATA_INVALID_TYPE_DETAIL);a.rd.u.constructor.call(this,c,b);this.te=c;this.Ina();this.Init();if(null!=b&&("enabled"==b.startFetch||null==b.startFetch)||null==b)this.qE=!0};o_("CollectionTableDataSource",a.rd,a);a.b.ta(a.rd,a.aa,"oj.CollectionTableDataSource");a.rd.prototype.Rl=null;a.b.g("CollectionTableDataSource.prototype.comparator",
{Rl:a.rd.prototype.Rl});a.rd.prototype.Init=function(){a.rd.u.Init.call(this)};a.b.g("CollectionTableDataSource.prototype.Init",{Init:a.rd.prototype.Init});a.rd.prototype.at=function(c,b){b=b||{};b.deferred=!0;var d=this.te.at(c,b),e=this;e.nD=!0;var f;return new Promise(function(b,g){null!=d?d.then(function(a){e.nD=!1;f={data:a.attributes,index:c,key:a.id};b(f)},function(b){e.nD=!1;a.aa.u.handleEvent.call(e,a.aa.Q.ERROR,b);g(b)}):b(null)})};a.b.g("CollectionTableDataSource.prototype.at",{at:a.rd.prototype.at});
a.rd.prototype.fetch=function(a){a=a||{};return"init"!=a.fetchType||this.qE?this.Bg(a):Promise.resolve()};a.b.g("CollectionTableDataSource.prototype.fetch",{fetch:a.rd.prototype.fetch});a.rd.prototype.get=function(c,b){b=b||{};b.deferred=!0;var d=this.te.get(c,b),e=this,f;return new Promise(function(b,c){null!=d?d.then(function(a){f={data:a.attributes,index:a.index,key:a.id};b(f)},function(b){a.aa.u.handleEvent.call(e,a.aa.Q.ERROR,b);c(b)}):b(null)})};a.b.g("CollectionTableDataSource.prototype.get",
{get:a.rd.prototype.get});a.rd.prototype.sort=function(a){null==a?a=this.sortCriteria:this.sortCriteria=a;var b=this.comparator,d=this;return new Promise(function(e){null==b?(d.te.comparator=a.key,d.te.sortDirection="ascending"==a.direction?1:-1):d.te.comparator=b;d.te.sort(null);e({header:a.key,direction:a.direction})})};a.b.g("CollectionTableDataSource.prototype.sort",{sort:a.rd.prototype.sort});a.rd.prototype.totalSize=function(){var a=0<=this.te.totalResults?this.te.totalResults:-1;if(-1<a){var b=
this.te.size();return b>a?b:a}if(0<this.hS)a=this.hS;else if("atLeast"==this.totalSizeConfidence())return this.te.size();return a};a.b.g("CollectionTableDataSource.prototype.totalSize",{totalSize:a.rd.prototype.totalSize});a.rd.prototype.totalSizeConfidence=function(){return 0<=this.te.totalResults?"actual":this.te.hasMore?"atLeast":"unknown"};a.b.g("CollectionTableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.rd.prototype.totalSizeConfidence});a.rd.prototype.Ina=function(){var c=
this;this.te.on(a.la.Q.SYNC,function(b){if(b instanceof a.l&&!c.nD&&!c.F9){var d=b.offset,e=b.lastFetchCount||b.lastFetchSize;0<e?(c.pa=d,c.Fb=e,c.nD=!0,b.mx(d,d+e).then(function(a){c.nD=!1;var b=[],e=[],g,m;for(g=0;g<a.length;g++)null!=a[g]&&(m=a[g].clone(),b.push(m.attributes),e.push(m.id));c.Um.call(c,{silent:!1},{data:b,keys:e,startIndex:d},null)})):(b=c.Ey(),c.Um.call(c,{silent:!1},b,null))}});this.te.on(a.la.Q.ALLADDED,function(b,d){var e=[],f=[],g=[],k,l;for(k=0;k<d.length;k++)l=d[k].clone(),
e.push(l.attributes),f.push(l.id),g.push(l.index);a.aa.u.handleEvent.call(c,a.aa.Q.ADD,{data:e,keys:f,indexes:g})});this.te.on(a.la.Q.ALLREMOVED,function(b,d){var e=[],f=[],g=[],k,l;for(k=0;k<d.length;k++)l=d[k].clone(),e.push(l.attributes),f.push(l.id),g.push(l.index);a.aa.u.handleEvent.call(c,a.aa.Q.REMOVE,{data:e,keys:f,indexes:g})});this.te.on(a.la.Q.RESET,function(b){a.aa.u.handleEvent.call(c,a.aa.Q.RESET,b)});this.te.on(a.la.Q.SORT,function(b,d){if(null==d||!d.add){var e={};null==b||null==!b.comparator||
g.isFunction(b.comparator)||(e.header=b.comparator,e.direction=1===b.sortDirection?"ascending":"descending");a.aa.u.handleEvent.call(c,a.aa.Q.SORT,e)}});this.te.on(a.la.Q.CHANGE,function(b){a.aa.u.handleEvent.call(c,a.aa.Q.CHANGE,{data:[b.attributes],keys:[b.id],indexes:[b.index]})});this.te.on(a.la.Q.DESTROY,function(b){a.aa.u.handleEvent.call(c,a.aa.Q.DESTROY,b)});this.te.on(a.la.Q.REFRESH,function(b){a.aa.u.handleEvent.call(c,a.aa.Q.REFRESH,b)});this.te.on(a.la.Q.ERROR,function(b,d,e){a.aa.u.handleEvent.call(c,
a.aa.Q.ERROR,b,d,e)})};a.rd.prototype.Bg=function(a){this.pE(a);a=a||{};var b=this;this.P9=0<a.pageSize?!0:!1;this.pa=null==a.startIndex?this.pa:a.startIndex;this.Fb=0<a.pageSize?a.pageSize:-1;a.pageSize=this.Fb;a.startIndex=this.pa;a.refresh=!0;return new Promise(function(d,e){var f=b.Fb;b.P9||(f=25);b.te.$F(b.pa,f).then(function(e){var f;if(b.P9){f=[];var g=[],m,r;for(m=0;m<e.models.length;m++)r=e.models[m].clone(),f[m]=r.attributes,g[m]=r.id;f={data:f,keys:g,startIndex:b.pa};e.models.length<b.Fb?
0>b.totalSize()&&(b.hS=b.pa+e.models.length):b.hS=null}else f=b.Ey();b.Um.call(b,a,f,null);d(f)},function(d){b.Um.call(b,a,null,d);e(d)})})};a.rd.prototype.pE=function(c){this.F9=!0;c.silent||a.aa.u.handleEvent.call(this,a.aa.Q.REQUEST,{startIndex:c.startIndex})};a.rd.prototype.Um=function(c,b,d){this.F9=!1;null!=d?a.aa.u.handleEvent.call(this,a.aa.Q.ERROR,d):c.silent||a.aa.u.handleEvent.call(this,a.aa.Q.SYNC,b)};a.rd.prototype.Ey=function(){var a=this.te.size()-1,b=[],d=[],e,f,g;for(e=0;e<=a;e++)f=
this.te.at(e),g=f.clone(),f=this.Wo(g,g.attributes),b[e]=f,d[e]=g.id;return{data:b,keys:d,startIndex:this.pa}};a.rd.prototype.getCapability=function(){return null};a.b.g("CollectionTableDataSource.prototype.getCapability",{getCapability:a.rd.prototype.getCapability});a.rd.prototype.Wo=function(a,b){var d={},e;for(e in b)b.hasOwnProperty(e)&&function(){var b=e;Object.defineProperty(d,e,{get:function(){return a.get(b)},set:function(d){a.set(b,d,{silent:!0})},enumerable:!0})}();return d}});