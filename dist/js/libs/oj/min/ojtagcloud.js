/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojdvt-base","ojs/internal-deps/dvt/DvtTagCloud"],function(a,g,c,b,d){a.hb("oj.ojTagCloud",g.oj.dvtBaseComponent,{widgetEventPrefix:"oj",di:function(a,b,c){return d.TagCloud.newInstance(a,b,c)},Nm:function(a){var b=a.subId;"oj-tagcloud-item"==b?b="item["+a.index+"]":"oj-tagcloud-tooltip"==b&&(b="tooltip");return b},Bj:function(a){var b={};0==a.indexOf("item")?(b.subId="oj-tagcloud-item",b.index=this.Tm(a)):"tooltip"==a&&(b.subId="oj-tagcloud-tooltip");
return b},ah:function(){var a=this._super();a.push("oj-tagcloud");return a},El:function(){var a=this._super();a["oj-tagcloud"]={path:"styleDefaults/style",property:"CSS_TEXT_PROPERTIES"};return a},Sm:function(){return["optionChange"]},Ok:function(){var a=this.options.translations,b=this._super();b["DvtUtilBundle.TAG_CLOUD"]=a.componentName;return b},getItem:function(a){return this.Ka.getAutomation().getItem(a)},getItemCount:function(){return this.Ka.getAutomation().getItemCount()},getContextByNode:function(a){return(a=
this.getSubIdByNode(a))&&"oj-tagcloud-tooltip"!==a.subId?a:null},Rm:function(){return{root:["items"]}}});a.J.Ua("oj-tag-cloud","dvtBaseComponent",{properties:{animationOnDataChange:{type:"string",enumValues:["auto","none"]},animationOnDisplay:{type:"string",enumValues:["auto","none"]},hiddenCategories:{type:"Array\x3cstring\x3e",writeback:!0},highlightedCategories:{type:"Array\x3cstring\x3e",writeback:!0},highlightMatch:{type:"string",enumValues:["any","all"]},hoverBehavior:{type:"string",enumValues:["dim",
"none"]},items:{type:"Array\x3cobject\x3e|Promise"},layout:{type:"string",enumValues:["cloud","rectangular"]},selection:{type:"Array\x3cstring\x3e",writeback:!0},selectionMode:{type:"string",enumValues:["single","multiple","none"]},styleDefaults:{type:"object",properties:{animationDuration:{type:"number"},hoverBehaviorDelay:{type:"number"},svgStyle:{type:"object"}}},tooltip:{type:"object",properties:{renderer:{}}},touchResponse:{type:"string",enumValues:["touchStart","auto"]},translations:{properties:{componentName:{type:"string"}}}},
methods:{getContextByNode:{},getItem:{},getItemCount:{}},extension:{Xa:"ojTagCloud"}});a.J.register("oj-tag-cloud",{metadata:a.J.getMetadata("oj-tag-cloud")})});