/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","knockout","promise"],function(a,g){a.nx={};a.nx.Zc={viewPath:"text!views/",viewSuffix:".html",modelPath:"viewModels/",initializeMethod:"initialize",disposeMethod:"dispose",activatedHandler:"handleActivated",attachedHandler:"handleAttached",detachedHandler:"handleDetached",bindingsAppliedHandler:"handleBindingsApplied",deactivatedHandler:"handleDeactivated",transitionCompletedHandler:"handleTransitionCompleted"};o_("ModuleBinding.defaults",a.nx.Zc,a);(function(){function c(b,
c,e,f,h,k,l){var n=c.canAnimate;if(null==n||n.call(c,b)){var r,s;if(n=c.prepareAnimation.call(c,b))r=n.newViewParent,s=n.oldViewParent;var t=r||e;s&&s!==e?d(f,s):t===e&&k(null);t!==e&&g.virtualElements.setDomNodeChildren(t,[]);h(t);var J=Array.prototype.slice.call(t.childNodes),E=!1,G=function(){E||(E=!0,e!==t&&m(e,J))},A=k.bind(null,s);b.newViewParent=r;b.oldViewParent=s;b.oldViewNodes=f;b.removeOldView=A;b.insertNewView=G;var H=function(){A();G();l()};return c.animate.call(c,b).then(H,function(){H();
a.r.error("ojModule animation promise was rejected")})}}function b(a,b,c){b=b||a;var d=[];c&&a===b&&(c.parentNode.removeChild(c),d.push(c));g.virtualElements.setDomNodeChildren(b,d)}function d(a,b){a.forEach(function(a){b.appendChild(a)})}function e(a,b,c){if(a&&a[b]){var d={element:c[0],valueAccessor:c[1]};2<c.length&&(d.viewModel=c[2],3<c.length&&(d["boolean"===typeof c[3]?"fromCache":"cachedNodes"]=c[3]));return g.ignoreDependencies(a[b],a,[d])}}function f(b,c,d){if(null!=b&&(c=a.nx.Zc[c],null!=
c&&b&&(c=b[c],"function"===typeof c))){var e=void 0;d&&(e={element:d[0],valueAccessor:d[1]},2<d.length&&(e["boolean"===typeof d[2]?"fromCache":"cachedNodes"]=d[2]));return g.ignoreDependencies(c,b,[e])}}function h(a,b,c){var d=[];for(a=g.virtualElements.firstChild(a);null!=a&&a!=c;a=a.nextSibling)a!=b&&d.push(a);return d}function k(a,b){var c=[],d=g.virtualElements.firstChild(a);l(d,b,function(a){c.push(a)});return c}function l(a,b,c){for(;null!=a;){var d=g.virtualElements.nextSibling(a),e=a.nodeType;
a===b||1!==e&&8!==e||c(a);a=d}}function m(a,b){for(var c=b.length-1;0<=c;c--)g.virtualElements.prepend(a,b[c])}function r(b,c){if(null!=a.Components)for(var d=0;d<b.length;d++)c?a.Components.wr(b[d]):a.Components.Xt(b[d])}function t(a){if("string"===typeof a)a=g.utils.parseHtmlFragment(a);else if(window.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType)a=g.utils.arrayPushAll([],a.childNodes);else if(Array.isArray(a))a=g.utils.arrayPushAll([],a);else throw"The View ("+a+") has an unsupported type";
return a}function s(b){return new Promise(function(c,d){require([b],function(a){c(a)},function(c){a.r.error("ojModule failed to load "+b);d(c)})})}function n(a){return a?new Promise(function(b){a.then(b,b)}):a}g.bindingHandlers.ojModule={init:function(p,q,u,w,v){function y(a){if(a!=J)throw A;}function x(a){f(a,"disposeMethod",[p,q])}var z,D,I={},B,J=-1,E,G;g.utils.domNodeDisposal.addDisposeCallback(p,function(){x(z);for(var a=Object.keys(I),b=0;b<a.length;b++)x(I[a[b]].Nt)});var A=Error("Promise cancelled because ojModule is fetching new View and ViewModel");
8===p.nodeType&&(g.virtualElements.setDomNodeChildren(p,[]),G=p.nextSibling);g.computed(function(){J++;var u=0===J,w=g.utils.unwrapObservable,K=w(q()),C,L,N,M,Q,O,S,W;"string"===typeof K?C=K:(C=w(K.name),L=w(K.viewName),N=w(K.params),M=w(K.viewModelFactory),Q=w(K.createViewFunction),O=w(K.cacheKey),S=w(K.lifecycleListener),W=w(K.animation));var w=e(S,"activated",[p,q]),V,X,Y=null==O?null:I[O];if(null!=Y)delete I[O],V=Promise.resolve(Y.view),X=Promise.resolve(Y.Nt);else if(null!=M&&(X=g.ignoreDependencies(M.createViewModel,
M,[N,q])),null==X&&null!=C&&(X=s(a.nx.Zc.modelPath+C)),null!=X&&(X=X.then(function(a,b){y(a);return b="function"===typeof b?new b(N):f(b,"initializeMethod",[p,q])||b}.bind(null,J)),null!=Q&&(V=X.then(function(a,b){y(a);if(null==b)throw"createViewFunction option cannot be used when the ViewModel is null";var c=b[Q];if(null==c)throw"function specified by the createViewFunction option was not found on the ViewModel";return c.call(b)}.bind(null,J)))),null==V)if(L=null==L?C:L,null!=L)V=s(a.nx.Zc.viewPath+
L+a.nx.Zc.viewSuffix);else throw Error("View name must be specified");if(null==V)throw Error("ojModule is missing a View");var R;null!=X&&(R=X.then(function(a,b){y(a);return f(b,"activatedHandler",[p,q])}.bind(null,J)));Promise.all([V,X,w,R,D]).then(function(a,w){if(a==J){var s=w[0];if(null==s)throw"The module's View was resolved to null";var y=t(s),A=w[1],F=!1,C,K=h(p,E,G),L=k(p,E);null!=B&&(F=!0,C=K,E||(E=document.createElement("div"),E.className="oj-helper-module-cache",g.virtualElements.prepend(p,
E)));var M=!1,s=function(a){M||(M=!0,F?d(K,E):L.forEach(function(a){g.cleanNode(a)}),b(p,a||p,E),u||(e(S,"detached",[p,q,z,C]),f(z,"detachedHandler",[p,q,C]),e(S,"deactivated",[p,q,z]),f(z,"deactivatedHandler",[p,q])),F?(r(C,!1),I[B]={Nt:z,view:C}):x(z),z=A,B=O)},ba=function(a){a=a||p;m(a,y);var b=null!=Y;b&&r(y,!0);e(S,"attached",[a,q,A,b]);f(A,"attachedHandler",[a,q,b]);if(!b){var c=v.createChildContext(A,void 0,function(a){a.$module=A;a.$params=N});l(y[0],E,function(a){g.applyBindings(c,a)});e(S,
"bindingsApplied",[a,q,A]);f(A,"bindingsAppliedHandler",[a,q])}},ma=function(){e(S,"transitionCompleted",[p,q,A]);f(A,"transitionCompletedHandler",[p,q])};if(null!=W){var ka=c({node:p,valueAccessor:q,isInitial:u,oldViewModel:z,newViewModel:A},W,p,K,ba,s,ma);D=n(ka)}else D=void 0;D||(s(null),ba(null),ma())}}.bind(null,J),function(b,c){c!==A&&null!=c&&a.r.error(c)}.bind(null,J))},null,{disposeWhenNodeIsRemoved:p});return{controlsDescendantBindings:!0}}};g.virtualElements.allowedBindings.ojModule=!0})()});