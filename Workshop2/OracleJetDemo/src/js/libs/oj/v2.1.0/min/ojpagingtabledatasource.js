/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore","jquery","ojs/ojdatasource-common"],function(a){a.Fa=function(g){if(!(g instanceof a.aa))throw Error(a.aa.nd._ERR_DATA_INVALID_TYPE_SUMMARY+"\n"+a.aa.nd._ERR_DATA_INVALID_TYPE_DETAIL);this.Ld=g;this.pa=0;this.Dk=-1;this.Init()};o_("PagingTableDataSource",a.Fa,a);a.b.ta(a.Fa,a.aa,"oj.PagingTableDataSource");a.Fa.prototype.Init=function(){a.Fa.u.Init.call(this)};a.b.g("PagingTableDataSource.prototype.Init",{Init:a.Fa.prototype.Init});a.Fa.prototype.getWrappedDataSource=function(){return this.Ld};
a.b.g("PagingTableDataSource.prototype.getWrappedDataSource",{getWrappedDataSource:a.Fa.prototype.getWrappedDataSource});a.Fa.prototype.getPage=function(){return"loadMore"==this.DC?0:this.gJ()};a.b.g("PagingTableDataSource.prototype.getPage",{getPage:a.Fa.prototype.getPage});a.Fa.prototype.setPage=function(g,c){c=c||{};g=parseInt(g,10);try{a.Fa.u.handleEvent.call(this,a.ad.Q.BEFOREPAGE,{page:g,previousPage:this.gJ()})}catch(b){return Promise.reject(null)}var d=this.gJ();this.Fb=null!=c.pageSize?c.pageSize:
this.Fb;c.pageSize=this.Fb;c.startIndex=g*this.Fb;this.pa=null==c.startIndex?this.pa:c.startIndex;this.DC="page";var e=this;return new Promise(function(b,g){0<e.Fb?e.Ld.fetch(c).then(function(c){c.startIndex=0;0<c.data.length?e.gw(e.pa+c.data.length-1,!0):e.gw(-1,!0);a.Fa.u.handleEvent.call(e,a.ad.Q.PAGE,{page:e.gJ(),previousPage:d});b(null)},function(){e.pa=d*e.Fb;g(null)}):b(null)})};a.b.g("PagingTableDataSource.prototype.setPage",{setPage:a.Fa.prototype.setPage});a.Fa.prototype.getStartItemIndex=
function(){return"loadMore"==this.DC?0:this.pa};a.b.g("PagingTableDataSource.prototype.getStartItemIndex",{getStartItemIndex:a.Fa.prototype.getStartItemIndex});a.Fa.prototype.getEndItemIndex=function(){return this.Dk};a.b.g("PagingTableDataSource.prototype.getEndItemIndex",{getEndItemIndex:a.Fa.prototype.getEndItemIndex});a.Fa.prototype.getPageCount=function(){var a=this.totalSize();return-1==a?-1:Math.ceil(a/this.Fb)};a.b.g("PagingTableDataSource.prototype.getPageCount",{getPageCount:a.Fa.prototype.getPageCount});
a.Fa.prototype.at=function(a,c){return this.Ld.at(a,c)};a.b.g("PagingTableDataSource.prototype.at",{at:a.Fa.prototype.at});a.Fa.prototype.fetch=function(a){a=a||{};if(null==a.startIndex)return this.setPage(this.getPage());this.DC="loadMore";this.pa=null==a.startIndex?this.pa:a.startIndex;var c=null!=a.pageSize?a.pageSize:this.Fb;a.pageSize=c;a.startIndex=this.pa;var b=this;return new Promise(function(d,e){0<c?b.Ld.fetch(a).then(function(a){0<a.data.length?b.gw(b.pa+a.data.length-1,!0):b.gw(-1,!0);
d(a)},function(a){e(a)}):d(null)})};a.b.g("PagingTableDataSource.prototype.fetch",{fetch:a.Fa.prototype.fetch});a.Fa.prototype.get=function(a,c){return this.Ld.get(a,c)};a.b.g("PagingTableDataSource.prototype.get",{get:a.Fa.prototype.get});a.Fa.prototype.getCapability=function(a){return this.Ld.getCapability(a)};a.b.g("PagingTableDataSource.prototype.getCapability",{getCapability:a.Fa.prototype.getCapability});a.Fa.prototype.on=function(g,c){var b=this,d=this.Ld;if(g==a.aa.Q.SYNC){var e=function(a){b.zwa(a,
c)};d.on(g,e)}else if(g==a.aa.Q.ADD||g==a.aa.Q.REMOVE||g==a.aa.Q.CHANGE)e=function(a){b.mwa(a,c)},d.on(g,e);else if(g==a.aa.Q.REFRESH||g==a.aa.Q.RESET)e=function(a){b.pa=0;c(a)},d.on(g,e);else if(g==a.ad.Q.PAGE||g==a.ad.Q.BEFOREPAGE||g==a.ad.Q.PAGECOUNT)a.Fa.u.on.call(this,g,c);else d.on(g,c)};a.b.g("PagingTableDataSource.prototype.on",{on:a.Fa.prototype.on});a.Fa.prototype.off=function(g,c){g!=a.ad.Q.PAGE&&g!=a.ad.Q.PAGECOUNT||a.Fa.u.off.call(this,g,c);this.Ld.off(g,c)};a.b.g("PagingTableDataSource.prototype.off",
{off:a.Fa.prototype.off});a.Fa.prototype.sort=function(a){null==a?a=this.sortCriteria:this.sortCriteria=a;return this.Ld.sort(a)};a.b.g("PagingTableDataSource.prototype.sort",{sort:a.Fa.prototype.sort});a.Fa.prototype.totalSize=function(){return this.Ld.totalSize()};a.b.g("PagingTableDataSource.prototype.totalSize",{totalSize:a.Fa.prototype.totalSize});a.Fa.prototype.totalSizeConfidence=function(){return this.Ld.totalSizeConfidence()};a.b.g("PagingTableDataSource.prototype.totalSizeConfidence",{totalSizeConfidence:a.Fa.prototype.totalSizeConfidence});
a.Fa.prototype.gJ=function(){return 0<this.Fb?Math.floor(this.pa/this.Fb):0};a.Fa.prototype.mwa=function(a,c){var b=[],d;for(d=0;d<a.indexes.length;d++){var e=a.indexes[d];void 0!==e&&("page"==this.DC&&(e-=this.pa),(0>e||e>=this.pa+this.Fb)&&b.push(d))}if(0<b.length)for(b.sort(function(a,b){return a-b}),d=b.length-1;0<=d;d--)a.data.splice(b[d],1),a.indexes.splice(b[d],1),a.keys.splice(b[d],1);0<a.indexes.length&&this.gw(a.indexes[a.indexes.length-1],!1);a.startIndex=this.pa;c(a)};a.Fa.prototype.zwa=
function(g,c){g.startIndex!=this.pa&&(this.pa=g.startIndex);0<g.data.length?this.gw(g.startIndex+g.data.length-1,!0):this.gw(-1,!0);if("page"==this.DC){var b={};a.Wc.qf(b,g);b.startIndex=0;c(b)}else c(g)};a.Fa.prototype.gw=function(a,c){this.Dk=c?a:a>this.Dk?a:this.Dk;var b=this.totalSize();0<b&&(this.Dk=this.Dk>b-1?b-1:this.Dk)};a.Fa.Q={ADD:"add",REMOVE:"remove",RESET:"reset",SYNC:"sync",REFRESH:"refresh",SORT:"sort"};o_("PagingTableDataSource.EventType",a.Fa.Q,a);a.ad=function(){};o_("PagingModel",
a.ad,a);a.ad.prototype.getPage=function(){};a.b.g("PagingModel.prototype.getPage",{getPage:a.ad.prototype.getPage});a.ad.prototype.setPage=function(){};a.b.g("PagingModel.prototype.setPage",{setPage:a.ad.prototype.setPage});a.ad.prototype.getStartItemIndex=function(){};a.b.g("PagingModel.prototype.getStartItemIndex",{getStartItemIndex:a.ad.prototype.getStartItemIndex});a.ad.prototype.getEndItemIndex=function(){};a.b.g("PagingModel.prototype.getEndItemIndex",{getEndItemIndex:a.ad.prototype.getEndItemIndex});
a.ad.prototype.getPageCount=function(){};a.b.g("PagingModel.prototype.getPageCount",{getPageCount:a.ad.prototype.getPageCount});a.ad.prototype.totalSize=function(){};a.b.g("PagingModel.prototype.totalSize",{totalSize:a.ad.prototype.totalSize});a.ad.prototype.totalSizeConfidence=function(){};a.b.g("PagingModel.prototype.totalSizeConfidence",{totalSizeConfidence:a.ad.prototype.totalSizeConfidence});a.ad.Q={BEFOREPAGE:"beforePage",PAGE:"page",PAGECOUNT:"pageCount"};o_("PagingModel.EventType",a.ad.Q,
a)});