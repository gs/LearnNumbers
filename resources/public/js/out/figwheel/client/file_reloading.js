// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40428_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40428_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40429 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40430 = null;
var count__40431 = (0);
var i__40432 = (0);
while(true){
if((i__40432 < count__40431)){
var n = cljs.core._nth.call(null,chunk__40430,i__40432);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__40433 = seq__40429;
var G__40434 = chunk__40430;
var G__40435 = count__40431;
var G__40436 = (i__40432 + (1));
seq__40429 = G__40433;
chunk__40430 = G__40434;
count__40431 = G__40435;
i__40432 = G__40436;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40429);
if(temp__5735__auto__){
var seq__40429__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40429__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40429__$1);
var G__40437 = cljs.core.chunk_rest.call(null,seq__40429__$1);
var G__40438 = c__4550__auto__;
var G__40439 = cljs.core.count.call(null,c__4550__auto__);
var G__40440 = (0);
seq__40429 = G__40437;
chunk__40430 = G__40438;
count__40431 = G__40439;
i__40432 = G__40440;
continue;
} else {
var n = cljs.core.first.call(null,seq__40429__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__40441 = cljs.core.next.call(null,seq__40429__$1);
var G__40442 = null;
var G__40443 = (0);
var G__40444 = (0);
seq__40429 = G__40441;
chunk__40430 = G__40442;
count__40431 = G__40443;
i__40432 = G__40444;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__40445){
var vec__40446 = p__40445;
var _ = cljs.core.nth.call(null,vec__40446,(0),null);
var v = cljs.core.nth.call(null,vec__40446,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__40449){
var vec__40450 = p__40449;
var k = cljs.core.nth.call(null,vec__40450,(0),null);
var v = cljs.core.nth.call(null,vec__40450,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40462_40470 = cljs.core.seq.call(null,deps);
var chunk__40463_40471 = null;
var count__40464_40472 = (0);
var i__40465_40473 = (0);
while(true){
if((i__40465_40473 < count__40464_40472)){
var dep_40474 = cljs.core._nth.call(null,chunk__40463_40471,i__40465_40473);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_40474;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40474));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40474,(depth + (1)),state);
} else {
}


var G__40475 = seq__40462_40470;
var G__40476 = chunk__40463_40471;
var G__40477 = count__40464_40472;
var G__40478 = (i__40465_40473 + (1));
seq__40462_40470 = G__40475;
chunk__40463_40471 = G__40476;
count__40464_40472 = G__40477;
i__40465_40473 = G__40478;
continue;
} else {
var temp__5735__auto___40479 = cljs.core.seq.call(null,seq__40462_40470);
if(temp__5735__auto___40479){
var seq__40462_40480__$1 = temp__5735__auto___40479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40462_40480__$1)){
var c__4550__auto___40481 = cljs.core.chunk_first.call(null,seq__40462_40480__$1);
var G__40482 = cljs.core.chunk_rest.call(null,seq__40462_40480__$1);
var G__40483 = c__4550__auto___40481;
var G__40484 = cljs.core.count.call(null,c__4550__auto___40481);
var G__40485 = (0);
seq__40462_40470 = G__40482;
chunk__40463_40471 = G__40483;
count__40464_40472 = G__40484;
i__40465_40473 = G__40485;
continue;
} else {
var dep_40486 = cljs.core.first.call(null,seq__40462_40480__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_40486;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40486));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40486,(depth + (1)),state);
} else {
}


var G__40487 = cljs.core.next.call(null,seq__40462_40480__$1);
var G__40488 = null;
var G__40489 = (0);
var G__40490 = (0);
seq__40462_40470 = G__40487;
chunk__40463_40471 = G__40488;
count__40464_40472 = G__40489;
i__40465_40473 = G__40490;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40466){
var vec__40467 = p__40466;
var seq__40468 = cljs.core.seq.call(null,vec__40467);
var first__40469 = cljs.core.first.call(null,seq__40468);
var seq__40468__$1 = cljs.core.next.call(null,seq__40468);
var x = first__40469;
var xs = seq__40468__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40467,seq__40468,first__40469,seq__40468__$1,x,xs,get_deps__$1){
return (function (p1__40453_SHARP_){
return clojure.set.difference.call(null,p1__40453_SHARP_,x);
});})(vec__40467,seq__40468,first__40469,seq__40468__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40491 = cljs.core.seq.call(null,provides);
var chunk__40492 = null;
var count__40493 = (0);
var i__40494 = (0);
while(true){
if((i__40494 < count__40493)){
var prov = cljs.core._nth.call(null,chunk__40492,i__40494);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40503_40511 = cljs.core.seq.call(null,requires);
var chunk__40504_40512 = null;
var count__40505_40513 = (0);
var i__40506_40514 = (0);
while(true){
if((i__40506_40514 < count__40505_40513)){
var req_40515 = cljs.core._nth.call(null,chunk__40504_40512,i__40506_40514);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40515,prov);


var G__40516 = seq__40503_40511;
var G__40517 = chunk__40504_40512;
var G__40518 = count__40505_40513;
var G__40519 = (i__40506_40514 + (1));
seq__40503_40511 = G__40516;
chunk__40504_40512 = G__40517;
count__40505_40513 = G__40518;
i__40506_40514 = G__40519;
continue;
} else {
var temp__5735__auto___40520 = cljs.core.seq.call(null,seq__40503_40511);
if(temp__5735__auto___40520){
var seq__40503_40521__$1 = temp__5735__auto___40520;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40503_40521__$1)){
var c__4550__auto___40522 = cljs.core.chunk_first.call(null,seq__40503_40521__$1);
var G__40523 = cljs.core.chunk_rest.call(null,seq__40503_40521__$1);
var G__40524 = c__4550__auto___40522;
var G__40525 = cljs.core.count.call(null,c__4550__auto___40522);
var G__40526 = (0);
seq__40503_40511 = G__40523;
chunk__40504_40512 = G__40524;
count__40505_40513 = G__40525;
i__40506_40514 = G__40526;
continue;
} else {
var req_40527 = cljs.core.first.call(null,seq__40503_40521__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40527,prov);


var G__40528 = cljs.core.next.call(null,seq__40503_40521__$1);
var G__40529 = null;
var G__40530 = (0);
var G__40531 = (0);
seq__40503_40511 = G__40528;
chunk__40504_40512 = G__40529;
count__40505_40513 = G__40530;
i__40506_40514 = G__40531;
continue;
}
} else {
}
}
break;
}


var G__40532 = seq__40491;
var G__40533 = chunk__40492;
var G__40534 = count__40493;
var G__40535 = (i__40494 + (1));
seq__40491 = G__40532;
chunk__40492 = G__40533;
count__40493 = G__40534;
i__40494 = G__40535;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__40491);
if(temp__5735__auto__){
var seq__40491__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40491__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__40491__$1);
var G__40536 = cljs.core.chunk_rest.call(null,seq__40491__$1);
var G__40537 = c__4550__auto__;
var G__40538 = cljs.core.count.call(null,c__4550__auto__);
var G__40539 = (0);
seq__40491 = G__40536;
chunk__40492 = G__40537;
count__40493 = G__40538;
i__40494 = G__40539;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40491__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40507_40540 = cljs.core.seq.call(null,requires);
var chunk__40508_40541 = null;
var count__40509_40542 = (0);
var i__40510_40543 = (0);
while(true){
if((i__40510_40543 < count__40509_40542)){
var req_40544 = cljs.core._nth.call(null,chunk__40508_40541,i__40510_40543);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40544,prov);


var G__40545 = seq__40507_40540;
var G__40546 = chunk__40508_40541;
var G__40547 = count__40509_40542;
var G__40548 = (i__40510_40543 + (1));
seq__40507_40540 = G__40545;
chunk__40508_40541 = G__40546;
count__40509_40542 = G__40547;
i__40510_40543 = G__40548;
continue;
} else {
var temp__5735__auto___40549__$1 = cljs.core.seq.call(null,seq__40507_40540);
if(temp__5735__auto___40549__$1){
var seq__40507_40550__$1 = temp__5735__auto___40549__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40507_40550__$1)){
var c__4550__auto___40551 = cljs.core.chunk_first.call(null,seq__40507_40550__$1);
var G__40552 = cljs.core.chunk_rest.call(null,seq__40507_40550__$1);
var G__40553 = c__4550__auto___40551;
var G__40554 = cljs.core.count.call(null,c__4550__auto___40551);
var G__40555 = (0);
seq__40507_40540 = G__40552;
chunk__40508_40541 = G__40553;
count__40509_40542 = G__40554;
i__40510_40543 = G__40555;
continue;
} else {
var req_40556 = cljs.core.first.call(null,seq__40507_40550__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40556,prov);


var G__40557 = cljs.core.next.call(null,seq__40507_40550__$1);
var G__40558 = null;
var G__40559 = (0);
var G__40560 = (0);
seq__40507_40540 = G__40557;
chunk__40508_40541 = G__40558;
count__40509_40542 = G__40559;
i__40510_40543 = G__40560;
continue;
}
} else {
}
}
break;
}


var G__40561 = cljs.core.next.call(null,seq__40491__$1);
var G__40562 = null;
var G__40563 = (0);
var G__40564 = (0);
seq__40491 = G__40561;
chunk__40492 = G__40562;
count__40493 = G__40563;
i__40494 = G__40564;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40565_40569 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40566_40570 = null;
var count__40567_40571 = (0);
var i__40568_40572 = (0);
while(true){
if((i__40568_40572 < count__40567_40571)){
var ns_40573 = cljs.core._nth.call(null,chunk__40566_40570,i__40568_40572);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40573);


var G__40574 = seq__40565_40569;
var G__40575 = chunk__40566_40570;
var G__40576 = count__40567_40571;
var G__40577 = (i__40568_40572 + (1));
seq__40565_40569 = G__40574;
chunk__40566_40570 = G__40575;
count__40567_40571 = G__40576;
i__40568_40572 = G__40577;
continue;
} else {
var temp__5735__auto___40578 = cljs.core.seq.call(null,seq__40565_40569);
if(temp__5735__auto___40578){
var seq__40565_40579__$1 = temp__5735__auto___40578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40565_40579__$1)){
var c__4550__auto___40580 = cljs.core.chunk_first.call(null,seq__40565_40579__$1);
var G__40581 = cljs.core.chunk_rest.call(null,seq__40565_40579__$1);
var G__40582 = c__4550__auto___40580;
var G__40583 = cljs.core.count.call(null,c__4550__auto___40580);
var G__40584 = (0);
seq__40565_40569 = G__40581;
chunk__40566_40570 = G__40582;
count__40567_40571 = G__40583;
i__40568_40572 = G__40584;
continue;
} else {
var ns_40585 = cljs.core.first.call(null,seq__40565_40579__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40585);


var G__40586 = cljs.core.next.call(null,seq__40565_40579__$1);
var G__40587 = null;
var G__40588 = (0);
var G__40589 = (0);
seq__40565_40569 = G__40586;
chunk__40566_40570 = G__40587;
count__40567_40571 = G__40588;
i__40568_40572 = G__40589;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__40590__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40590 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40591__i = 0, G__40591__a = new Array(arguments.length -  0);
while (G__40591__i < G__40591__a.length) {G__40591__a[G__40591__i] = arguments[G__40591__i + 0]; ++G__40591__i;}
  args = new cljs.core.IndexedSeq(G__40591__a,0,null);
} 
return G__40590__delegate.call(this,args);};
G__40590.cljs$lang$maxFixedArity = 0;
G__40590.cljs$lang$applyTo = (function (arglist__40592){
var args = cljs.core.seq(arglist__40592);
return G__40590__delegate(args);
});
G__40590.cljs$core$IFn$_invoke$arity$variadic = G__40590__delegate;
return G__40590;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__40593_SHARP_,p2__40594_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40593_SHARP_)),p2__40594_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__40595_SHARP_,p2__40596_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40595_SHARP_),p2__40596_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__40597 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__40597.addCallback(((function (G__40597){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__40597))
);

G__40597.addErrback(((function (G__40597){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__40597))
);

return G__40597;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e40598){if((e40598 instanceof Error)){
var e = e40598;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40598;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40599){if((e40599 instanceof Error)){
var e = e40599;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40599;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40600 = cljs.core._EQ_;
var expr__40601 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40600.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40601))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__40600.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40601))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__40600.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__40601))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__40600,expr__40601){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40600,expr__40601))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40603,callback){
var map__40604 = p__40603;
var map__40604__$1 = (((((!((map__40604 == null))))?(((((map__40604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40604):map__40604);
var file_msg = map__40604__$1;
var request_url = cljs.core.get.call(null,map__40604__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__40604,map__40604__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40604,map__40604__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__37523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto__){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto__){
return (function (state_40642){
var state_val_40643 = (state_40642[(1)]);
if((state_val_40643 === (7))){
var inst_40638 = (state_40642[(2)]);
var state_40642__$1 = state_40642;
var statearr_40644_40670 = state_40642__$1;
(statearr_40644_40670[(2)] = inst_40638);

(statearr_40644_40670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (1))){
var state_40642__$1 = state_40642;
var statearr_40645_40671 = state_40642__$1;
(statearr_40645_40671[(2)] = null);

(statearr_40645_40671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (4))){
var inst_40608 = (state_40642[(7)]);
var inst_40608__$1 = (state_40642[(2)]);
var state_40642__$1 = (function (){var statearr_40646 = state_40642;
(statearr_40646[(7)] = inst_40608__$1);

return statearr_40646;
})();
if(cljs.core.truth_(inst_40608__$1)){
var statearr_40647_40672 = state_40642__$1;
(statearr_40647_40672[(1)] = (5));

} else {
var statearr_40648_40673 = state_40642__$1;
(statearr_40648_40673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (15))){
var inst_40621 = (state_40642[(8)]);
var inst_40623 = (state_40642[(9)]);
var inst_40625 = inst_40623.call(null,inst_40621);
var state_40642__$1 = state_40642;
var statearr_40649_40674 = state_40642__$1;
(statearr_40649_40674[(2)] = inst_40625);

(statearr_40649_40674[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (13))){
var inst_40632 = (state_40642[(2)]);
var state_40642__$1 = state_40642;
var statearr_40650_40675 = state_40642__$1;
(statearr_40650_40675[(2)] = inst_40632);

(statearr_40650_40675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (6))){
var state_40642__$1 = state_40642;
var statearr_40651_40676 = state_40642__$1;
(statearr_40651_40676[(2)] = null);

(statearr_40651_40676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (17))){
var inst_40629 = (state_40642[(2)]);
var state_40642__$1 = state_40642;
var statearr_40652_40677 = state_40642__$1;
(statearr_40652_40677[(2)] = inst_40629);

(statearr_40652_40677[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (3))){
var inst_40640 = (state_40642[(2)]);
var state_40642__$1 = state_40642;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40642__$1,inst_40640);
} else {
if((state_val_40643 === (12))){
var state_40642__$1 = state_40642;
var statearr_40653_40678 = state_40642__$1;
(statearr_40653_40678[(2)] = null);

(statearr_40653_40678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (2))){
var state_40642__$1 = state_40642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40642__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40643 === (11))){
var inst_40613 = (state_40642[(10)]);
var inst_40619 = figwheel.client.file_reloading.blocking_load.call(null,inst_40613);
var state_40642__$1 = state_40642;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40642__$1,(14),inst_40619);
} else {
if((state_val_40643 === (9))){
var inst_40613 = (state_40642[(10)]);
var state_40642__$1 = state_40642;
if(cljs.core.truth_(inst_40613)){
var statearr_40654_40679 = state_40642__$1;
(statearr_40654_40679[(1)] = (11));

} else {
var statearr_40655_40680 = state_40642__$1;
(statearr_40655_40680[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (5))){
var inst_40614 = (state_40642[(11)]);
var inst_40608 = (state_40642[(7)]);
var inst_40613 = cljs.core.nth.call(null,inst_40608,(0),null);
var inst_40614__$1 = cljs.core.nth.call(null,inst_40608,(1),null);
var state_40642__$1 = (function (){var statearr_40656 = state_40642;
(statearr_40656[(10)] = inst_40613);

(statearr_40656[(11)] = inst_40614__$1);

return statearr_40656;
})();
if(cljs.core.truth_(inst_40614__$1)){
var statearr_40657_40681 = state_40642__$1;
(statearr_40657_40681[(1)] = (8));

} else {
var statearr_40658_40682 = state_40642__$1;
(statearr_40658_40682[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (14))){
var inst_40613 = (state_40642[(10)]);
var inst_40623 = (state_40642[(9)]);
var inst_40621 = (state_40642[(2)]);
var inst_40622 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40623__$1 = cljs.core.get.call(null,inst_40622,inst_40613);
var state_40642__$1 = (function (){var statearr_40659 = state_40642;
(statearr_40659[(8)] = inst_40621);

(statearr_40659[(9)] = inst_40623__$1);

return statearr_40659;
})();
if(cljs.core.truth_(inst_40623__$1)){
var statearr_40660_40683 = state_40642__$1;
(statearr_40660_40683[(1)] = (15));

} else {
var statearr_40661_40684 = state_40642__$1;
(statearr_40661_40684[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (16))){
var inst_40621 = (state_40642[(8)]);
var inst_40627 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40621);
var state_40642__$1 = state_40642;
var statearr_40662_40685 = state_40642__$1;
(statearr_40662_40685[(2)] = inst_40627);

(statearr_40662_40685[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (10))){
var inst_40634 = (state_40642[(2)]);
var state_40642__$1 = (function (){var statearr_40663 = state_40642;
(statearr_40663[(12)] = inst_40634);

return statearr_40663;
})();
var statearr_40664_40686 = state_40642__$1;
(statearr_40664_40686[(2)] = null);

(statearr_40664_40686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40643 === (8))){
var inst_40614 = (state_40642[(11)]);
var inst_40616 = eval(inst_40614);
var state_40642__$1 = state_40642;
var statearr_40665_40687 = state_40642__$1;
(statearr_40665_40687[(2)] = inst_40616);

(statearr_40665_40687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37523__auto__))
;
return ((function (switch__37428__auto__,c__37523__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37429__auto__ = null;
var figwheel$client$file_reloading$state_machine__37429__auto____0 = (function (){
var statearr_40666 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40666[(0)] = figwheel$client$file_reloading$state_machine__37429__auto__);

(statearr_40666[(1)] = (1));

return statearr_40666;
});
var figwheel$client$file_reloading$state_machine__37429__auto____1 = (function (state_40642){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_40642);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e40667){if((e40667 instanceof Object)){
var ex__37432__auto__ = e40667;
var statearr_40668_40688 = state_40642;
(statearr_40668_40688[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40689 = state_40642;
state_40642 = G__40689;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37429__auto__ = function(state_40642){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37429__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37429__auto____1.call(this,state_40642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37429__auto____0;
figwheel$client$file_reloading$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37429__auto____1;
return figwheel$client$file_reloading$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto__))
})();
var state__37525__auto__ = (function (){var statearr_40669 = f__37524__auto__.call(null);
(statearr_40669[(6)] = c__37523__auto__);

return statearr_40669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto__))
);

return c__37523__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__40691 = arguments.length;
switch (G__40691) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40693,callback){
var map__40694 = p__40693;
var map__40694__$1 = (((((!((map__40694 == null))))?(((((map__40694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40694):map__40694);
var file_msg = map__40694__$1;
var namespace = cljs.core.get.call(null,map__40694__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40694,map__40694__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40694,map__40694__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__40696){
var map__40697 = p__40696;
var map__40697__$1 = (((((!((map__40697 == null))))?(((((map__40697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40697.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40697):map__40697);
var file_msg = map__40697__$1;
var namespace = cljs.core.get.call(null,map__40697__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40699){
var map__40700 = p__40699;
var map__40700__$1 = (((((!((map__40700 == null))))?(((((map__40700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40700):map__40700);
var file_msg = map__40700__$1;
var namespace = cljs.core.get.call(null,map__40700__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40702,callback){
var map__40703 = p__40702;
var map__40703__$1 = (((((!((map__40703 == null))))?(((((map__40703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40703):map__40703);
var file_msg = map__40703__$1;
var request_url = cljs.core.get.call(null,map__40703__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40703__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__37523__auto___40753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___40753,out){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___40753,out){
return (function (state_40738){
var state_val_40739 = (state_40738[(1)]);
if((state_val_40739 === (1))){
var inst_40712 = cljs.core.seq.call(null,files);
var inst_40713 = cljs.core.first.call(null,inst_40712);
var inst_40714 = cljs.core.next.call(null,inst_40712);
var inst_40715 = files;
var state_40738__$1 = (function (){var statearr_40740 = state_40738;
(statearr_40740[(7)] = inst_40713);

(statearr_40740[(8)] = inst_40714);

(statearr_40740[(9)] = inst_40715);

return statearr_40740;
})();
var statearr_40741_40754 = state_40738__$1;
(statearr_40741_40754[(2)] = null);

(statearr_40741_40754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40739 === (2))){
var inst_40715 = (state_40738[(9)]);
var inst_40721 = (state_40738[(10)]);
var inst_40720 = cljs.core.seq.call(null,inst_40715);
var inst_40721__$1 = cljs.core.first.call(null,inst_40720);
var inst_40722 = cljs.core.next.call(null,inst_40720);
var inst_40723 = (inst_40721__$1 == null);
var inst_40724 = cljs.core.not.call(null,inst_40723);
var state_40738__$1 = (function (){var statearr_40742 = state_40738;
(statearr_40742[(11)] = inst_40722);

(statearr_40742[(10)] = inst_40721__$1);

return statearr_40742;
})();
if(inst_40724){
var statearr_40743_40755 = state_40738__$1;
(statearr_40743_40755[(1)] = (4));

} else {
var statearr_40744_40756 = state_40738__$1;
(statearr_40744_40756[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40739 === (3))){
var inst_40736 = (state_40738[(2)]);
var state_40738__$1 = state_40738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40738__$1,inst_40736);
} else {
if((state_val_40739 === (4))){
var inst_40721 = (state_40738[(10)]);
var inst_40726 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40721);
var state_40738__$1 = state_40738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40738__$1,(7),inst_40726);
} else {
if((state_val_40739 === (5))){
var inst_40732 = cljs.core.async.close_BANG_.call(null,out);
var state_40738__$1 = state_40738;
var statearr_40745_40757 = state_40738__$1;
(statearr_40745_40757[(2)] = inst_40732);

(statearr_40745_40757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40739 === (6))){
var inst_40734 = (state_40738[(2)]);
var state_40738__$1 = state_40738;
var statearr_40746_40758 = state_40738__$1;
(statearr_40746_40758[(2)] = inst_40734);

(statearr_40746_40758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40739 === (7))){
var inst_40722 = (state_40738[(11)]);
var inst_40728 = (state_40738[(2)]);
var inst_40729 = cljs.core.async.put_BANG_.call(null,out,inst_40728);
var inst_40715 = inst_40722;
var state_40738__$1 = (function (){var statearr_40747 = state_40738;
(statearr_40747[(12)] = inst_40729);

(statearr_40747[(9)] = inst_40715);

return statearr_40747;
})();
var statearr_40748_40759 = state_40738__$1;
(statearr_40748_40759[(2)] = null);

(statearr_40748_40759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__37523__auto___40753,out))
;
return ((function (switch__37428__auto__,c__37523__auto___40753,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto____0 = (function (){
var statearr_40749 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40749[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto__);

(statearr_40749[(1)] = (1));

return statearr_40749;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto____1 = (function (state_40738){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_40738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e40750){if((e40750 instanceof Object)){
var ex__37432__auto__ = e40750;
var statearr_40751_40760 = state_40738;
(statearr_40751_40760[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40761 = state_40738;
state_40738 = G__40761;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto__ = function(state_40738){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto____1.call(this,state_40738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___40753,out))
})();
var state__37525__auto__ = (function (){var statearr_40752 = f__37524__auto__.call(null);
(statearr_40752[(6)] = c__37523__auto___40753);

return statearr_40752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___40753,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40762,opts){
var map__40763 = p__40762;
var map__40763__$1 = (((((!((map__40763 == null))))?(((((map__40763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40763):map__40763);
var eval_body = cljs.core.get.call(null,map__40763__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40763__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40765){var e = e40765;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40766_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40766_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40767){
var vec__40768 = p__40767;
var k = cljs.core.nth.call(null,vec__40768,(0),null);
var v = cljs.core.nth.call(null,vec__40768,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40771){
var vec__40772 = p__40771;
var k = cljs.core.nth.call(null,vec__40772,(0),null);
var v = cljs.core.nth.call(null,vec__40772,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40778,p__40779){
var map__40780 = p__40778;
var map__40780__$1 = (((((!((map__40780 == null))))?(((((map__40780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40780):map__40780);
var opts = map__40780__$1;
var before_jsload = cljs.core.get.call(null,map__40780__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40780__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40780__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40781 = p__40779;
var map__40781__$1 = (((((!((map__40781 == null))))?(((((map__40781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40781):map__40781);
var msg = map__40781__$1;
var files = cljs.core.get.call(null,map__40781__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40781__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40781__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40935){
var state_val_40936 = (state_40935[(1)]);
if((state_val_40936 === (7))){
var inst_40795 = (state_40935[(7)]);
var inst_40797 = (state_40935[(8)]);
var inst_40796 = (state_40935[(9)]);
var inst_40798 = (state_40935[(10)]);
var inst_40803 = cljs.core._nth.call(null,inst_40796,inst_40798);
var inst_40804 = figwheel.client.file_reloading.eval_body.call(null,inst_40803,opts);
var inst_40805 = (inst_40798 + (1));
var tmp40937 = inst_40795;
var tmp40938 = inst_40797;
var tmp40939 = inst_40796;
var inst_40795__$1 = tmp40937;
var inst_40796__$1 = tmp40939;
var inst_40797__$1 = tmp40938;
var inst_40798__$1 = inst_40805;
var state_40935__$1 = (function (){var statearr_40940 = state_40935;
(statearr_40940[(7)] = inst_40795__$1);

(statearr_40940[(8)] = inst_40797__$1);

(statearr_40940[(9)] = inst_40796__$1);

(statearr_40940[(11)] = inst_40804);

(statearr_40940[(10)] = inst_40798__$1);

return statearr_40940;
})();
var statearr_40941_41024 = state_40935__$1;
(statearr_40941_41024[(2)] = null);

(statearr_40941_41024[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (20))){
var inst_40838 = (state_40935[(12)]);
var inst_40846 = figwheel.client.file_reloading.sort_files.call(null,inst_40838);
var state_40935__$1 = state_40935;
var statearr_40942_41025 = state_40935__$1;
(statearr_40942_41025[(2)] = inst_40846);

(statearr_40942_41025[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (27))){
var state_40935__$1 = state_40935;
var statearr_40943_41026 = state_40935__$1;
(statearr_40943_41026[(2)] = null);

(statearr_40943_41026[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (1))){
var inst_40787 = (state_40935[(13)]);
var inst_40784 = before_jsload.call(null,files);
var inst_40785 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40786 = (function (){return ((function (inst_40787,inst_40784,inst_40785,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40775_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40775_SHARP_);
});
;})(inst_40787,inst_40784,inst_40785,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40787__$1 = cljs.core.filter.call(null,inst_40786,files);
var inst_40788 = cljs.core.not_empty.call(null,inst_40787__$1);
var state_40935__$1 = (function (){var statearr_40944 = state_40935;
(statearr_40944[(14)] = inst_40785);

(statearr_40944[(13)] = inst_40787__$1);

(statearr_40944[(15)] = inst_40784);

return statearr_40944;
})();
if(cljs.core.truth_(inst_40788)){
var statearr_40945_41027 = state_40935__$1;
(statearr_40945_41027[(1)] = (2));

} else {
var statearr_40946_41028 = state_40935__$1;
(statearr_40946_41028[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (24))){
var state_40935__$1 = state_40935;
var statearr_40947_41029 = state_40935__$1;
(statearr_40947_41029[(2)] = null);

(statearr_40947_41029[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (39))){
var inst_40888 = (state_40935[(16)]);
var state_40935__$1 = state_40935;
var statearr_40948_41030 = state_40935__$1;
(statearr_40948_41030[(2)] = inst_40888);

(statearr_40948_41030[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (46))){
var inst_40930 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_40949_41031 = state_40935__$1;
(statearr_40949_41031[(2)] = inst_40930);

(statearr_40949_41031[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (4))){
var inst_40832 = (state_40935[(2)]);
var inst_40833 = cljs.core.List.EMPTY;
var inst_40834 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40833);
var inst_40835 = (function (){return ((function (inst_40832,inst_40833,inst_40834,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40776_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40776_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40776_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__40776_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_40832,inst_40833,inst_40834,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40836 = cljs.core.filter.call(null,inst_40835,files);
var inst_40837 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40838 = cljs.core.concat.call(null,inst_40836,inst_40837);
var state_40935__$1 = (function (){var statearr_40950 = state_40935;
(statearr_40950[(17)] = inst_40834);

(statearr_40950[(12)] = inst_40838);

(statearr_40950[(18)] = inst_40832);

return statearr_40950;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40951_41032 = state_40935__$1;
(statearr_40951_41032[(1)] = (16));

} else {
var statearr_40952_41033 = state_40935__$1;
(statearr_40952_41033[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (15))){
var inst_40822 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_40953_41034 = state_40935__$1;
(statearr_40953_41034[(2)] = inst_40822);

(statearr_40953_41034[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (21))){
var inst_40848 = (state_40935[(19)]);
var inst_40848__$1 = (state_40935[(2)]);
var inst_40849 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40848__$1);
var state_40935__$1 = (function (){var statearr_40954 = state_40935;
(statearr_40954[(19)] = inst_40848__$1);

return statearr_40954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40935__$1,(22),inst_40849);
} else {
if((state_val_40936 === (31))){
var inst_40933 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40935__$1,inst_40933);
} else {
if((state_val_40936 === (32))){
var inst_40888 = (state_40935[(16)]);
var inst_40893 = inst_40888.cljs$lang$protocol_mask$partition0$;
var inst_40894 = (inst_40893 & (64));
var inst_40895 = inst_40888.cljs$core$ISeq$;
var inst_40896 = (cljs.core.PROTOCOL_SENTINEL === inst_40895);
var inst_40897 = ((inst_40894) || (inst_40896));
var state_40935__$1 = state_40935;
if(cljs.core.truth_(inst_40897)){
var statearr_40955_41035 = state_40935__$1;
(statearr_40955_41035[(1)] = (35));

} else {
var statearr_40956_41036 = state_40935__$1;
(statearr_40956_41036[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (40))){
var inst_40910 = (state_40935[(20)]);
var inst_40909 = (state_40935[(2)]);
var inst_40910__$1 = cljs.core.get.call(null,inst_40909,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40911 = cljs.core.get.call(null,inst_40909,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40912 = cljs.core.not_empty.call(null,inst_40910__$1);
var state_40935__$1 = (function (){var statearr_40957 = state_40935;
(statearr_40957[(20)] = inst_40910__$1);

(statearr_40957[(21)] = inst_40911);

return statearr_40957;
})();
if(cljs.core.truth_(inst_40912)){
var statearr_40958_41037 = state_40935__$1;
(statearr_40958_41037[(1)] = (41));

} else {
var statearr_40959_41038 = state_40935__$1;
(statearr_40959_41038[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (33))){
var state_40935__$1 = state_40935;
var statearr_40960_41039 = state_40935__$1;
(statearr_40960_41039[(2)] = false);

(statearr_40960_41039[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (13))){
var inst_40808 = (state_40935[(22)]);
var inst_40812 = cljs.core.chunk_first.call(null,inst_40808);
var inst_40813 = cljs.core.chunk_rest.call(null,inst_40808);
var inst_40814 = cljs.core.count.call(null,inst_40812);
var inst_40795 = inst_40813;
var inst_40796 = inst_40812;
var inst_40797 = inst_40814;
var inst_40798 = (0);
var state_40935__$1 = (function (){var statearr_40961 = state_40935;
(statearr_40961[(7)] = inst_40795);

(statearr_40961[(8)] = inst_40797);

(statearr_40961[(9)] = inst_40796);

(statearr_40961[(10)] = inst_40798);

return statearr_40961;
})();
var statearr_40962_41040 = state_40935__$1;
(statearr_40962_41040[(2)] = null);

(statearr_40962_41040[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (22))){
var inst_40852 = (state_40935[(23)]);
var inst_40848 = (state_40935[(19)]);
var inst_40851 = (state_40935[(24)]);
var inst_40856 = (state_40935[(25)]);
var inst_40851__$1 = (state_40935[(2)]);
var inst_40852__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40851__$1);
var inst_40853 = (function (){var all_files = inst_40848;
var res_SINGLEQUOTE_ = inst_40851__$1;
var res = inst_40852__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40852,inst_40848,inst_40851,inst_40856,inst_40851__$1,inst_40852__$1,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40777_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40777_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40852,inst_40848,inst_40851,inst_40856,inst_40851__$1,inst_40852__$1,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40854 = cljs.core.filter.call(null,inst_40853,inst_40851__$1);
var inst_40855 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40856__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40855);
var inst_40857 = cljs.core.not_empty.call(null,inst_40856__$1);
var state_40935__$1 = (function (){var statearr_40963 = state_40935;
(statearr_40963[(23)] = inst_40852__$1);

(statearr_40963[(24)] = inst_40851__$1);

(statearr_40963[(26)] = inst_40854);

(statearr_40963[(25)] = inst_40856__$1);

return statearr_40963;
})();
if(cljs.core.truth_(inst_40857)){
var statearr_40964_41041 = state_40935__$1;
(statearr_40964_41041[(1)] = (23));

} else {
var statearr_40965_41042 = state_40935__$1;
(statearr_40965_41042[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (36))){
var state_40935__$1 = state_40935;
var statearr_40966_41043 = state_40935__$1;
(statearr_40966_41043[(2)] = false);

(statearr_40966_41043[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (41))){
var inst_40910 = (state_40935[(20)]);
var inst_40914 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40915 = cljs.core.map.call(null,inst_40914,inst_40910);
var inst_40916 = cljs.core.pr_str.call(null,inst_40915);
var inst_40917 = ["figwheel-no-load meta-data: ",inst_40916].join('');
var inst_40918 = figwheel.client.utils.log.call(null,inst_40917);
var state_40935__$1 = state_40935;
var statearr_40967_41044 = state_40935__$1;
(statearr_40967_41044[(2)] = inst_40918);

(statearr_40967_41044[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (43))){
var inst_40911 = (state_40935[(21)]);
var inst_40921 = (state_40935[(2)]);
var inst_40922 = cljs.core.not_empty.call(null,inst_40911);
var state_40935__$1 = (function (){var statearr_40968 = state_40935;
(statearr_40968[(27)] = inst_40921);

return statearr_40968;
})();
if(cljs.core.truth_(inst_40922)){
var statearr_40969_41045 = state_40935__$1;
(statearr_40969_41045[(1)] = (44));

} else {
var statearr_40970_41046 = state_40935__$1;
(statearr_40970_41046[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (29))){
var inst_40852 = (state_40935[(23)]);
var inst_40888 = (state_40935[(16)]);
var inst_40848 = (state_40935[(19)]);
var inst_40851 = (state_40935[(24)]);
var inst_40854 = (state_40935[(26)]);
var inst_40856 = (state_40935[(25)]);
var inst_40884 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40887 = (function (){var all_files = inst_40848;
var res_SINGLEQUOTE_ = inst_40851;
var res = inst_40852;
var files_not_loaded = inst_40854;
var dependencies_that_loaded = inst_40856;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40888,inst_40848,inst_40851,inst_40854,inst_40856,inst_40884,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40886){
var map__40971 = p__40886;
var map__40971__$1 = (((((!((map__40971 == null))))?(((((map__40971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40971):map__40971);
var namespace = cljs.core.get.call(null,map__40971__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40888,inst_40848,inst_40851,inst_40854,inst_40856,inst_40884,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40888__$1 = cljs.core.group_by.call(null,inst_40887,inst_40854);
var inst_40890 = (inst_40888__$1 == null);
var inst_40891 = cljs.core.not.call(null,inst_40890);
var state_40935__$1 = (function (){var statearr_40973 = state_40935;
(statearr_40973[(16)] = inst_40888__$1);

(statearr_40973[(28)] = inst_40884);

return statearr_40973;
})();
if(inst_40891){
var statearr_40974_41047 = state_40935__$1;
(statearr_40974_41047[(1)] = (32));

} else {
var statearr_40975_41048 = state_40935__$1;
(statearr_40975_41048[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (44))){
var inst_40911 = (state_40935[(21)]);
var inst_40924 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40911);
var inst_40925 = cljs.core.pr_str.call(null,inst_40924);
var inst_40926 = ["not required: ",inst_40925].join('');
var inst_40927 = figwheel.client.utils.log.call(null,inst_40926);
var state_40935__$1 = state_40935;
var statearr_40976_41049 = state_40935__$1;
(statearr_40976_41049[(2)] = inst_40927);

(statearr_40976_41049[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (6))){
var inst_40829 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_40977_41050 = state_40935__$1;
(statearr_40977_41050[(2)] = inst_40829);

(statearr_40977_41050[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (28))){
var inst_40854 = (state_40935[(26)]);
var inst_40881 = (state_40935[(2)]);
var inst_40882 = cljs.core.not_empty.call(null,inst_40854);
var state_40935__$1 = (function (){var statearr_40978 = state_40935;
(statearr_40978[(29)] = inst_40881);

return statearr_40978;
})();
if(cljs.core.truth_(inst_40882)){
var statearr_40979_41051 = state_40935__$1;
(statearr_40979_41051[(1)] = (29));

} else {
var statearr_40980_41052 = state_40935__$1;
(statearr_40980_41052[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (25))){
var inst_40852 = (state_40935[(23)]);
var inst_40868 = (state_40935[(2)]);
var inst_40869 = cljs.core.not_empty.call(null,inst_40852);
var state_40935__$1 = (function (){var statearr_40981 = state_40935;
(statearr_40981[(30)] = inst_40868);

return statearr_40981;
})();
if(cljs.core.truth_(inst_40869)){
var statearr_40982_41053 = state_40935__$1;
(statearr_40982_41053[(1)] = (26));

} else {
var statearr_40983_41054 = state_40935__$1;
(statearr_40983_41054[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (34))){
var inst_40904 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
if(cljs.core.truth_(inst_40904)){
var statearr_40984_41055 = state_40935__$1;
(statearr_40984_41055[(1)] = (38));

} else {
var statearr_40985_41056 = state_40935__$1;
(statearr_40985_41056[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (17))){
var state_40935__$1 = state_40935;
var statearr_40986_41057 = state_40935__$1;
(statearr_40986_41057[(2)] = recompile_dependents);

(statearr_40986_41057[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (3))){
var state_40935__$1 = state_40935;
var statearr_40987_41058 = state_40935__$1;
(statearr_40987_41058[(2)] = null);

(statearr_40987_41058[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (12))){
var inst_40825 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_40988_41059 = state_40935__$1;
(statearr_40988_41059[(2)] = inst_40825);

(statearr_40988_41059[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (2))){
var inst_40787 = (state_40935[(13)]);
var inst_40794 = cljs.core.seq.call(null,inst_40787);
var inst_40795 = inst_40794;
var inst_40796 = null;
var inst_40797 = (0);
var inst_40798 = (0);
var state_40935__$1 = (function (){var statearr_40989 = state_40935;
(statearr_40989[(7)] = inst_40795);

(statearr_40989[(8)] = inst_40797);

(statearr_40989[(9)] = inst_40796);

(statearr_40989[(10)] = inst_40798);

return statearr_40989;
})();
var statearr_40990_41060 = state_40935__$1;
(statearr_40990_41060[(2)] = null);

(statearr_40990_41060[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (23))){
var inst_40852 = (state_40935[(23)]);
var inst_40848 = (state_40935[(19)]);
var inst_40851 = (state_40935[(24)]);
var inst_40854 = (state_40935[(26)]);
var inst_40856 = (state_40935[(25)]);
var inst_40859 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40861 = (function (){var all_files = inst_40848;
var res_SINGLEQUOTE_ = inst_40851;
var res = inst_40852;
var files_not_loaded = inst_40854;
var dependencies_that_loaded = inst_40856;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40848,inst_40851,inst_40854,inst_40856,inst_40859,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40860){
var map__40991 = p__40860;
var map__40991__$1 = (((((!((map__40991 == null))))?(((((map__40991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40991):map__40991);
var request_url = cljs.core.get.call(null,map__40991__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40848,inst_40851,inst_40854,inst_40856,inst_40859,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40862 = cljs.core.reverse.call(null,inst_40856);
var inst_40863 = cljs.core.map.call(null,inst_40861,inst_40862);
var inst_40864 = cljs.core.pr_str.call(null,inst_40863);
var inst_40865 = figwheel.client.utils.log.call(null,inst_40864);
var state_40935__$1 = (function (){var statearr_40993 = state_40935;
(statearr_40993[(31)] = inst_40859);

return statearr_40993;
})();
var statearr_40994_41061 = state_40935__$1;
(statearr_40994_41061[(2)] = inst_40865);

(statearr_40994_41061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (35))){
var state_40935__$1 = state_40935;
var statearr_40995_41062 = state_40935__$1;
(statearr_40995_41062[(2)] = true);

(statearr_40995_41062[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (19))){
var inst_40838 = (state_40935[(12)]);
var inst_40844 = figwheel.client.file_reloading.expand_files.call(null,inst_40838);
var state_40935__$1 = state_40935;
var statearr_40996_41063 = state_40935__$1;
(statearr_40996_41063[(2)] = inst_40844);

(statearr_40996_41063[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (11))){
var state_40935__$1 = state_40935;
var statearr_40997_41064 = state_40935__$1;
(statearr_40997_41064[(2)] = null);

(statearr_40997_41064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (9))){
var inst_40827 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_40998_41065 = state_40935__$1;
(statearr_40998_41065[(2)] = inst_40827);

(statearr_40998_41065[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (5))){
var inst_40797 = (state_40935[(8)]);
var inst_40798 = (state_40935[(10)]);
var inst_40800 = (inst_40798 < inst_40797);
var inst_40801 = inst_40800;
var state_40935__$1 = state_40935;
if(cljs.core.truth_(inst_40801)){
var statearr_40999_41066 = state_40935__$1;
(statearr_40999_41066[(1)] = (7));

} else {
var statearr_41000_41067 = state_40935__$1;
(statearr_41000_41067[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (14))){
var inst_40808 = (state_40935[(22)]);
var inst_40817 = cljs.core.first.call(null,inst_40808);
var inst_40818 = figwheel.client.file_reloading.eval_body.call(null,inst_40817,opts);
var inst_40819 = cljs.core.next.call(null,inst_40808);
var inst_40795 = inst_40819;
var inst_40796 = null;
var inst_40797 = (0);
var inst_40798 = (0);
var state_40935__$1 = (function (){var statearr_41001 = state_40935;
(statearr_41001[(7)] = inst_40795);

(statearr_41001[(8)] = inst_40797);

(statearr_41001[(9)] = inst_40796);

(statearr_41001[(32)] = inst_40818);

(statearr_41001[(10)] = inst_40798);

return statearr_41001;
})();
var statearr_41002_41068 = state_40935__$1;
(statearr_41002_41068[(2)] = null);

(statearr_41002_41068[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (45))){
var state_40935__$1 = state_40935;
var statearr_41003_41069 = state_40935__$1;
(statearr_41003_41069[(2)] = null);

(statearr_41003_41069[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (26))){
var inst_40852 = (state_40935[(23)]);
var inst_40848 = (state_40935[(19)]);
var inst_40851 = (state_40935[(24)]);
var inst_40854 = (state_40935[(26)]);
var inst_40856 = (state_40935[(25)]);
var inst_40871 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40873 = (function (){var all_files = inst_40848;
var res_SINGLEQUOTE_ = inst_40851;
var res = inst_40852;
var files_not_loaded = inst_40854;
var dependencies_that_loaded = inst_40856;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40848,inst_40851,inst_40854,inst_40856,inst_40871,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40872){
var map__41004 = p__40872;
var map__41004__$1 = (((((!((map__41004 == null))))?(((((map__41004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41004):map__41004);
var namespace = cljs.core.get.call(null,map__41004__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40848,inst_40851,inst_40854,inst_40856,inst_40871,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40874 = cljs.core.map.call(null,inst_40873,inst_40852);
var inst_40875 = cljs.core.pr_str.call(null,inst_40874);
var inst_40876 = figwheel.client.utils.log.call(null,inst_40875);
var inst_40877 = (function (){var all_files = inst_40848;
var res_SINGLEQUOTE_ = inst_40851;
var res = inst_40852;
var files_not_loaded = inst_40854;
var dependencies_that_loaded = inst_40856;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40848,inst_40851,inst_40854,inst_40856,inst_40871,inst_40873,inst_40874,inst_40875,inst_40876,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40852,inst_40848,inst_40851,inst_40854,inst_40856,inst_40871,inst_40873,inst_40874,inst_40875,inst_40876,state_val_40936,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40878 = setTimeout(inst_40877,(10));
var state_40935__$1 = (function (){var statearr_41006 = state_40935;
(statearr_41006[(33)] = inst_40876);

(statearr_41006[(34)] = inst_40871);

return statearr_41006;
})();
var statearr_41007_41070 = state_40935__$1;
(statearr_41007_41070[(2)] = inst_40878);

(statearr_41007_41070[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (16))){
var state_40935__$1 = state_40935;
var statearr_41008_41071 = state_40935__$1;
(statearr_41008_41071[(2)] = reload_dependents);

(statearr_41008_41071[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (38))){
var inst_40888 = (state_40935[(16)]);
var inst_40906 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40888);
var state_40935__$1 = state_40935;
var statearr_41009_41072 = state_40935__$1;
(statearr_41009_41072[(2)] = inst_40906);

(statearr_41009_41072[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (30))){
var state_40935__$1 = state_40935;
var statearr_41010_41073 = state_40935__$1;
(statearr_41010_41073[(2)] = null);

(statearr_41010_41073[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (10))){
var inst_40808 = (state_40935[(22)]);
var inst_40810 = cljs.core.chunked_seq_QMARK_.call(null,inst_40808);
var state_40935__$1 = state_40935;
if(inst_40810){
var statearr_41011_41074 = state_40935__$1;
(statearr_41011_41074[(1)] = (13));

} else {
var statearr_41012_41075 = state_40935__$1;
(statearr_41012_41075[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (18))){
var inst_40842 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
if(cljs.core.truth_(inst_40842)){
var statearr_41013_41076 = state_40935__$1;
(statearr_41013_41076[(1)] = (19));

} else {
var statearr_41014_41077 = state_40935__$1;
(statearr_41014_41077[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (42))){
var state_40935__$1 = state_40935;
var statearr_41015_41078 = state_40935__$1;
(statearr_41015_41078[(2)] = null);

(statearr_41015_41078[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (37))){
var inst_40901 = (state_40935[(2)]);
var state_40935__$1 = state_40935;
var statearr_41016_41079 = state_40935__$1;
(statearr_41016_41079[(2)] = inst_40901);

(statearr_41016_41079[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40936 === (8))){
var inst_40795 = (state_40935[(7)]);
var inst_40808 = (state_40935[(22)]);
var inst_40808__$1 = cljs.core.seq.call(null,inst_40795);
var state_40935__$1 = (function (){var statearr_41017 = state_40935;
(statearr_41017[(22)] = inst_40808__$1);

return statearr_41017;
})();
if(inst_40808__$1){
var statearr_41018_41080 = state_40935__$1;
(statearr_41018_41080[(1)] = (10));

} else {
var statearr_41019_41081 = state_40935__$1;
(statearr_41019_41081[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37428__auto__,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto____0 = (function (){
var statearr_41020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41020[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto__);

(statearr_41020[(1)] = (1));

return statearr_41020;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto____1 = (function (state_40935){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_40935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e41021){if((e41021 instanceof Object)){
var ex__37432__auto__ = e41021;
var statearr_41022_41082 = state_40935;
(statearr_41022_41082[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41083 = state_40935;
state_40935 = G__41083;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto__ = function(state_40935){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto____1.call(this,state_40935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37525__auto__ = (function (){var statearr_41023 = f__37524__auto__.call(null);
(statearr_41023[(6)] = c__37523__auto__);

return statearr_41023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto__,map__40780,map__40780__$1,opts,before_jsload,on_jsload,reload_dependents,map__40781,map__40781__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37523__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41086,link){
var map__41087 = p__41086;
var map__41087__$1 = (((((!((map__41087 == null))))?(((((map__41087.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41087.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41087):map__41087);
var file = cljs.core.get.call(null,map__41087__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__41087,map__41087__$1,file){
return (function (p1__41084_SHARP_,p2__41085_SHARP_){
if(cljs.core._EQ_.call(null,p1__41084_SHARP_,p2__41085_SHARP_)){
return p1__41084_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__41087,map__41087__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41090){
var map__41091 = p__41090;
var map__41091__$1 = (((((!((map__41091 == null))))?(((((map__41091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41091):map__41091);
var match_length = cljs.core.get.call(null,map__41091__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41091__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41089_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41089_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41093_SHARP_,p2__41094_SHARP_){
return cljs.core.assoc.call(null,p1__41093_SHARP_,cljs.core.get.call(null,p2__41094_SHARP_,key),p2__41094_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_41095 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41095);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41095);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41096,p__41097){
var map__41098 = p__41096;
var map__41098__$1 = (((((!((map__41098 == null))))?(((((map__41098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41098):map__41098);
var on_cssload = cljs.core.get.call(null,map__41098__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41099 = p__41097;
var map__41099__$1 = (((((!((map__41099 == null))))?(((((map__41099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41099):map__41099);
var files_msg = map__41099__$1;
var files = cljs.core.get.call(null,map__41099__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1620067000391
