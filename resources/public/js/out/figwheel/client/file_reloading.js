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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31739_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31739_SHARP_));
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
var seq__31740 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31741 = null;
var count__31742 = (0);
var i__31743 = (0);
while(true){
if((i__31743 < count__31742)){
var n = cljs.core._nth.call(null,chunk__31741,i__31743);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31744 = seq__31740;
var G__31745 = chunk__31741;
var G__31746 = count__31742;
var G__31747 = (i__31743 + (1));
seq__31740 = G__31744;
chunk__31741 = G__31745;
count__31742 = G__31746;
i__31743 = G__31747;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31740);
if(temp__5735__auto__){
var seq__31740__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31740__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31740__$1);
var G__31748 = cljs.core.chunk_rest.call(null,seq__31740__$1);
var G__31749 = c__4550__auto__;
var G__31750 = cljs.core.count.call(null,c__4550__auto__);
var G__31751 = (0);
seq__31740 = G__31748;
chunk__31741 = G__31749;
count__31742 = G__31750;
i__31743 = G__31751;
continue;
} else {
var n = cljs.core.first.call(null,seq__31740__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31752 = cljs.core.next.call(null,seq__31740__$1);
var G__31753 = null;
var G__31754 = (0);
var G__31755 = (0);
seq__31740 = G__31752;
chunk__31741 = G__31753;
count__31742 = G__31754;
i__31743 = G__31755;
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
return cljs.core.some.call(null,(function (p__31756){
var vec__31757 = p__31756;
var _ = cljs.core.nth.call(null,vec__31757,(0),null);
var v = cljs.core.nth.call(null,vec__31757,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__31760){
var vec__31761 = p__31760;
var k = cljs.core.nth.call(null,vec__31761,(0),null);
var v = cljs.core.nth.call(null,vec__31761,(1),null);
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

var seq__31773_31781 = cljs.core.seq.call(null,deps);
var chunk__31774_31782 = null;
var count__31775_31783 = (0);
var i__31776_31784 = (0);
while(true){
if((i__31776_31784 < count__31775_31783)){
var dep_31785 = cljs.core._nth.call(null,chunk__31774_31782,i__31776_31784);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31785;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31785));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31785,(depth + (1)),state);
} else {
}


var G__31786 = seq__31773_31781;
var G__31787 = chunk__31774_31782;
var G__31788 = count__31775_31783;
var G__31789 = (i__31776_31784 + (1));
seq__31773_31781 = G__31786;
chunk__31774_31782 = G__31787;
count__31775_31783 = G__31788;
i__31776_31784 = G__31789;
continue;
} else {
var temp__5735__auto___31790 = cljs.core.seq.call(null,seq__31773_31781);
if(temp__5735__auto___31790){
var seq__31773_31791__$1 = temp__5735__auto___31790;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31773_31791__$1)){
var c__4550__auto___31792 = cljs.core.chunk_first.call(null,seq__31773_31791__$1);
var G__31793 = cljs.core.chunk_rest.call(null,seq__31773_31791__$1);
var G__31794 = c__4550__auto___31792;
var G__31795 = cljs.core.count.call(null,c__4550__auto___31792);
var G__31796 = (0);
seq__31773_31781 = G__31793;
chunk__31774_31782 = G__31794;
count__31775_31783 = G__31795;
i__31776_31784 = G__31796;
continue;
} else {
var dep_31797 = cljs.core.first.call(null,seq__31773_31791__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31797;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31797));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31797,(depth + (1)),state);
} else {
}


var G__31798 = cljs.core.next.call(null,seq__31773_31791__$1);
var G__31799 = null;
var G__31800 = (0);
var G__31801 = (0);
seq__31773_31781 = G__31798;
chunk__31774_31782 = G__31799;
count__31775_31783 = G__31800;
i__31776_31784 = G__31801;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31777){
var vec__31778 = p__31777;
var seq__31779 = cljs.core.seq.call(null,vec__31778);
var first__31780 = cljs.core.first.call(null,seq__31779);
var seq__31779__$1 = cljs.core.next.call(null,seq__31779);
var x = first__31780;
var xs = seq__31779__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31778,seq__31779,first__31780,seq__31779__$1,x,xs,get_deps__$1){
return (function (p1__31764_SHARP_){
return clojure.set.difference.call(null,p1__31764_SHARP_,x);
});})(vec__31778,seq__31779,first__31780,seq__31779__$1,x,xs,get_deps__$1))
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
var seq__31802 = cljs.core.seq.call(null,provides);
var chunk__31803 = null;
var count__31804 = (0);
var i__31805 = (0);
while(true){
if((i__31805 < count__31804)){
var prov = cljs.core._nth.call(null,chunk__31803,i__31805);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31814_31822 = cljs.core.seq.call(null,requires);
var chunk__31815_31823 = null;
var count__31816_31824 = (0);
var i__31817_31825 = (0);
while(true){
if((i__31817_31825 < count__31816_31824)){
var req_31826 = cljs.core._nth.call(null,chunk__31815_31823,i__31817_31825);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31826,prov);


var G__31827 = seq__31814_31822;
var G__31828 = chunk__31815_31823;
var G__31829 = count__31816_31824;
var G__31830 = (i__31817_31825 + (1));
seq__31814_31822 = G__31827;
chunk__31815_31823 = G__31828;
count__31816_31824 = G__31829;
i__31817_31825 = G__31830;
continue;
} else {
var temp__5735__auto___31831 = cljs.core.seq.call(null,seq__31814_31822);
if(temp__5735__auto___31831){
var seq__31814_31832__$1 = temp__5735__auto___31831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31814_31832__$1)){
var c__4550__auto___31833 = cljs.core.chunk_first.call(null,seq__31814_31832__$1);
var G__31834 = cljs.core.chunk_rest.call(null,seq__31814_31832__$1);
var G__31835 = c__4550__auto___31833;
var G__31836 = cljs.core.count.call(null,c__4550__auto___31833);
var G__31837 = (0);
seq__31814_31822 = G__31834;
chunk__31815_31823 = G__31835;
count__31816_31824 = G__31836;
i__31817_31825 = G__31837;
continue;
} else {
var req_31838 = cljs.core.first.call(null,seq__31814_31832__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31838,prov);


var G__31839 = cljs.core.next.call(null,seq__31814_31832__$1);
var G__31840 = null;
var G__31841 = (0);
var G__31842 = (0);
seq__31814_31822 = G__31839;
chunk__31815_31823 = G__31840;
count__31816_31824 = G__31841;
i__31817_31825 = G__31842;
continue;
}
} else {
}
}
break;
}


var G__31843 = seq__31802;
var G__31844 = chunk__31803;
var G__31845 = count__31804;
var G__31846 = (i__31805 + (1));
seq__31802 = G__31843;
chunk__31803 = G__31844;
count__31804 = G__31845;
i__31805 = G__31846;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31802);
if(temp__5735__auto__){
var seq__31802__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31802__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31802__$1);
var G__31847 = cljs.core.chunk_rest.call(null,seq__31802__$1);
var G__31848 = c__4550__auto__;
var G__31849 = cljs.core.count.call(null,c__4550__auto__);
var G__31850 = (0);
seq__31802 = G__31847;
chunk__31803 = G__31848;
count__31804 = G__31849;
i__31805 = G__31850;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31802__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31818_31851 = cljs.core.seq.call(null,requires);
var chunk__31819_31852 = null;
var count__31820_31853 = (0);
var i__31821_31854 = (0);
while(true){
if((i__31821_31854 < count__31820_31853)){
var req_31855 = cljs.core._nth.call(null,chunk__31819_31852,i__31821_31854);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31855,prov);


var G__31856 = seq__31818_31851;
var G__31857 = chunk__31819_31852;
var G__31858 = count__31820_31853;
var G__31859 = (i__31821_31854 + (1));
seq__31818_31851 = G__31856;
chunk__31819_31852 = G__31857;
count__31820_31853 = G__31858;
i__31821_31854 = G__31859;
continue;
} else {
var temp__5735__auto___31860__$1 = cljs.core.seq.call(null,seq__31818_31851);
if(temp__5735__auto___31860__$1){
var seq__31818_31861__$1 = temp__5735__auto___31860__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31818_31861__$1)){
var c__4550__auto___31862 = cljs.core.chunk_first.call(null,seq__31818_31861__$1);
var G__31863 = cljs.core.chunk_rest.call(null,seq__31818_31861__$1);
var G__31864 = c__4550__auto___31862;
var G__31865 = cljs.core.count.call(null,c__4550__auto___31862);
var G__31866 = (0);
seq__31818_31851 = G__31863;
chunk__31819_31852 = G__31864;
count__31820_31853 = G__31865;
i__31821_31854 = G__31866;
continue;
} else {
var req_31867 = cljs.core.first.call(null,seq__31818_31861__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31867,prov);


var G__31868 = cljs.core.next.call(null,seq__31818_31861__$1);
var G__31869 = null;
var G__31870 = (0);
var G__31871 = (0);
seq__31818_31851 = G__31868;
chunk__31819_31852 = G__31869;
count__31820_31853 = G__31870;
i__31821_31854 = G__31871;
continue;
}
} else {
}
}
break;
}


var G__31872 = cljs.core.next.call(null,seq__31802__$1);
var G__31873 = null;
var G__31874 = (0);
var G__31875 = (0);
seq__31802 = G__31872;
chunk__31803 = G__31873;
count__31804 = G__31874;
i__31805 = G__31875;
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
var seq__31876_31880 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31877_31881 = null;
var count__31878_31882 = (0);
var i__31879_31883 = (0);
while(true){
if((i__31879_31883 < count__31878_31882)){
var ns_31884 = cljs.core._nth.call(null,chunk__31877_31881,i__31879_31883);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31884);


var G__31885 = seq__31876_31880;
var G__31886 = chunk__31877_31881;
var G__31887 = count__31878_31882;
var G__31888 = (i__31879_31883 + (1));
seq__31876_31880 = G__31885;
chunk__31877_31881 = G__31886;
count__31878_31882 = G__31887;
i__31879_31883 = G__31888;
continue;
} else {
var temp__5735__auto___31889 = cljs.core.seq.call(null,seq__31876_31880);
if(temp__5735__auto___31889){
var seq__31876_31890__$1 = temp__5735__auto___31889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31876_31890__$1)){
var c__4550__auto___31891 = cljs.core.chunk_first.call(null,seq__31876_31890__$1);
var G__31892 = cljs.core.chunk_rest.call(null,seq__31876_31890__$1);
var G__31893 = c__4550__auto___31891;
var G__31894 = cljs.core.count.call(null,c__4550__auto___31891);
var G__31895 = (0);
seq__31876_31880 = G__31892;
chunk__31877_31881 = G__31893;
count__31878_31882 = G__31894;
i__31879_31883 = G__31895;
continue;
} else {
var ns_31896 = cljs.core.first.call(null,seq__31876_31890__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31896);


var G__31897 = cljs.core.next.call(null,seq__31876_31890__$1);
var G__31898 = null;
var G__31899 = (0);
var G__31900 = (0);
seq__31876_31880 = G__31897;
chunk__31877_31881 = G__31898;
count__31878_31882 = G__31899;
i__31879_31883 = G__31900;
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
var G__31901__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31901 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31902__i = 0, G__31902__a = new Array(arguments.length -  0);
while (G__31902__i < G__31902__a.length) {G__31902__a[G__31902__i] = arguments[G__31902__i + 0]; ++G__31902__i;}
  args = new cljs.core.IndexedSeq(G__31902__a,0,null);
} 
return G__31901__delegate.call(this,args);};
G__31901.cljs$lang$maxFixedArity = 0;
G__31901.cljs$lang$applyTo = (function (arglist__31903){
var args = cljs.core.seq(arglist__31903);
return G__31901__delegate(args);
});
G__31901.cljs$core$IFn$_invoke$arity$variadic = G__31901__delegate;
return G__31901;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31904_SHARP_,p2__31905_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31904_SHARP_)),p2__31905_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31906_SHARP_,p2__31907_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31906_SHARP_),p2__31907_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31908 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31908.addCallback(((function (G__31908){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__31908))
);

G__31908.addErrback(((function (G__31908){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__31908))
);

return G__31908;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31909){if((e31909 instanceof Error)){
var e = e31909;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31909;

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
}catch (e31910){if((e31910 instanceof Error)){
var e = e31910;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31910;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31911 = cljs.core._EQ_;
var expr__31912 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31911.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31912))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31911.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31912))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31911.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31912))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__31911,expr__31912){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31911,expr__31912))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31914,callback){
var map__31915 = p__31914;
var map__31915__$1 = (((((!((map__31915 == null))))?(((((map__31915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31915):map__31915);
var file_msg = map__31915__$1;
var request_url = cljs.core.get.call(null,map__31915__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__31915,map__31915__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31915,map__31915__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30981__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30981__auto__){
return (function (){
var f__30982__auto__ = (function (){var switch__30958__auto__ = ((function (c__30981__auto__){
return (function (state_31953){
var state_val_31954 = (state_31953[(1)]);
if((state_val_31954 === (7))){
var inst_31949 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31955_31981 = state_31953__$1;
(statearr_31955_31981[(2)] = inst_31949);

(statearr_31955_31981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (1))){
var state_31953__$1 = state_31953;
var statearr_31956_31982 = state_31953__$1;
(statearr_31956_31982[(2)] = null);

(statearr_31956_31982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (4))){
var inst_31919 = (state_31953[(7)]);
var inst_31919__$1 = (state_31953[(2)]);
var state_31953__$1 = (function (){var statearr_31957 = state_31953;
(statearr_31957[(7)] = inst_31919__$1);

return statearr_31957;
})();
if(cljs.core.truth_(inst_31919__$1)){
var statearr_31958_31983 = state_31953__$1;
(statearr_31958_31983[(1)] = (5));

} else {
var statearr_31959_31984 = state_31953__$1;
(statearr_31959_31984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (15))){
var inst_31934 = (state_31953[(8)]);
var inst_31932 = (state_31953[(9)]);
var inst_31936 = inst_31934.call(null,inst_31932);
var state_31953__$1 = state_31953;
var statearr_31960_31985 = state_31953__$1;
(statearr_31960_31985[(2)] = inst_31936);

(statearr_31960_31985[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (13))){
var inst_31943 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31961_31986 = state_31953__$1;
(statearr_31961_31986[(2)] = inst_31943);

(statearr_31961_31986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (6))){
var state_31953__$1 = state_31953;
var statearr_31962_31987 = state_31953__$1;
(statearr_31962_31987[(2)] = null);

(statearr_31962_31987[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (17))){
var inst_31940 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31963_31988 = state_31953__$1;
(statearr_31963_31988[(2)] = inst_31940);

(statearr_31963_31988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (3))){
var inst_31951 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31953__$1,inst_31951);
} else {
if((state_val_31954 === (12))){
var state_31953__$1 = state_31953;
var statearr_31964_31989 = state_31953__$1;
(statearr_31964_31989[(2)] = null);

(statearr_31964_31989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (2))){
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31953__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31954 === (11))){
var inst_31924 = (state_31953[(10)]);
var inst_31930 = figwheel.client.file_reloading.blocking_load.call(null,inst_31924);
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31953__$1,(14),inst_31930);
} else {
if((state_val_31954 === (9))){
var inst_31924 = (state_31953[(10)]);
var state_31953__$1 = state_31953;
if(cljs.core.truth_(inst_31924)){
var statearr_31965_31990 = state_31953__$1;
(statearr_31965_31990[(1)] = (11));

} else {
var statearr_31966_31991 = state_31953__$1;
(statearr_31966_31991[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (5))){
var inst_31925 = (state_31953[(11)]);
var inst_31919 = (state_31953[(7)]);
var inst_31924 = cljs.core.nth.call(null,inst_31919,(0),null);
var inst_31925__$1 = cljs.core.nth.call(null,inst_31919,(1),null);
var state_31953__$1 = (function (){var statearr_31967 = state_31953;
(statearr_31967[(10)] = inst_31924);

(statearr_31967[(11)] = inst_31925__$1);

return statearr_31967;
})();
if(cljs.core.truth_(inst_31925__$1)){
var statearr_31968_31992 = state_31953__$1;
(statearr_31968_31992[(1)] = (8));

} else {
var statearr_31969_31993 = state_31953__$1;
(statearr_31969_31993[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (14))){
var inst_31934 = (state_31953[(8)]);
var inst_31924 = (state_31953[(10)]);
var inst_31932 = (state_31953[(2)]);
var inst_31933 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31934__$1 = cljs.core.get.call(null,inst_31933,inst_31924);
var state_31953__$1 = (function (){var statearr_31970 = state_31953;
(statearr_31970[(8)] = inst_31934__$1);

(statearr_31970[(9)] = inst_31932);

return statearr_31970;
})();
if(cljs.core.truth_(inst_31934__$1)){
var statearr_31971_31994 = state_31953__$1;
(statearr_31971_31994[(1)] = (15));

} else {
var statearr_31972_31995 = state_31953__$1;
(statearr_31972_31995[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (16))){
var inst_31932 = (state_31953[(9)]);
var inst_31938 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31932);
var state_31953__$1 = state_31953;
var statearr_31973_31996 = state_31953__$1;
(statearr_31973_31996[(2)] = inst_31938);

(statearr_31973_31996[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (10))){
var inst_31945 = (state_31953[(2)]);
var state_31953__$1 = (function (){var statearr_31974 = state_31953;
(statearr_31974[(12)] = inst_31945);

return statearr_31974;
})();
var statearr_31975_31997 = state_31953__$1;
(statearr_31975_31997[(2)] = null);

(statearr_31975_31997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (8))){
var inst_31925 = (state_31953[(11)]);
var inst_31927 = eval(inst_31925);
var state_31953__$1 = state_31953;
var statearr_31976_31998 = state_31953__$1;
(statearr_31976_31998[(2)] = inst_31927);

(statearr_31976_31998[(1)] = (10));


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
});})(c__30981__auto__))
;
return ((function (switch__30958__auto__,c__30981__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30959__auto__ = null;
var figwheel$client$file_reloading$state_machine__30959__auto____0 = (function (){
var statearr_31977 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31977[(0)] = figwheel$client$file_reloading$state_machine__30959__auto__);

(statearr_31977[(1)] = (1));

return statearr_31977;
});
var figwheel$client$file_reloading$state_machine__30959__auto____1 = (function (state_31953){
while(true){
var ret_value__30960__auto__ = (function (){try{while(true){
var result__30961__auto__ = switch__30958__auto__.call(null,state_31953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30961__auto__;
}
break;
}
}catch (e31978){if((e31978 instanceof Object)){
var ex__30962__auto__ = e31978;
var statearr_31979_31999 = state_31953;
(statearr_31979_31999[(5)] = ex__30962__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32000 = state_31953;
state_31953 = G__32000;
continue;
} else {
return ret_value__30960__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30959__auto__ = function(state_31953){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30959__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30959__auto____1.call(this,state_31953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30959__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30959__auto____0;
figwheel$client$file_reloading$state_machine__30959__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30959__auto____1;
return figwheel$client$file_reloading$state_machine__30959__auto__;
})()
;})(switch__30958__auto__,c__30981__auto__))
})();
var state__30983__auto__ = (function (){var statearr_31980 = f__30982__auto__.call(null);
(statearr_31980[(6)] = c__30981__auto__);

return statearr_31980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30983__auto__);
});})(c__30981__auto__))
);

return c__30981__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32002 = arguments.length;
switch (G__32002) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32004,callback){
var map__32005 = p__32004;
var map__32005__$1 = (((((!((map__32005 == null))))?(((((map__32005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32005):map__32005);
var file_msg = map__32005__$1;
var namespace = cljs.core.get.call(null,map__32005__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32005,map__32005__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32005,map__32005__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32007){
var map__32008 = p__32007;
var map__32008__$1 = (((((!((map__32008 == null))))?(((((map__32008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32008):map__32008);
var file_msg = map__32008__$1;
var namespace = cljs.core.get.call(null,map__32008__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32010){
var map__32011 = p__32010;
var map__32011__$1 = (((((!((map__32011 == null))))?(((((map__32011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32011):map__32011);
var file_msg = map__32011__$1;
var namespace = cljs.core.get.call(null,map__32011__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32013,callback){
var map__32014 = p__32013;
var map__32014__$1 = (((((!((map__32014 == null))))?(((((map__32014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32014):map__32014);
var file_msg = map__32014__$1;
var request_url = cljs.core.get.call(null,map__32014__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32014__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30981__auto___32064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30981__auto___32064,out){
return (function (){
var f__30982__auto__ = (function (){var switch__30958__auto__ = ((function (c__30981__auto___32064,out){
return (function (state_32049){
var state_val_32050 = (state_32049[(1)]);
if((state_val_32050 === (1))){
var inst_32023 = cljs.core.seq.call(null,files);
var inst_32024 = cljs.core.first.call(null,inst_32023);
var inst_32025 = cljs.core.next.call(null,inst_32023);
var inst_32026 = files;
var state_32049__$1 = (function (){var statearr_32051 = state_32049;
(statearr_32051[(7)] = inst_32024);

(statearr_32051[(8)] = inst_32025);

(statearr_32051[(9)] = inst_32026);

return statearr_32051;
})();
var statearr_32052_32065 = state_32049__$1;
(statearr_32052_32065[(2)] = null);

(statearr_32052_32065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (2))){
var inst_32032 = (state_32049[(10)]);
var inst_32026 = (state_32049[(9)]);
var inst_32031 = cljs.core.seq.call(null,inst_32026);
var inst_32032__$1 = cljs.core.first.call(null,inst_32031);
var inst_32033 = cljs.core.next.call(null,inst_32031);
var inst_32034 = (inst_32032__$1 == null);
var inst_32035 = cljs.core.not.call(null,inst_32034);
var state_32049__$1 = (function (){var statearr_32053 = state_32049;
(statearr_32053[(10)] = inst_32032__$1);

(statearr_32053[(11)] = inst_32033);

return statearr_32053;
})();
if(inst_32035){
var statearr_32054_32066 = state_32049__$1;
(statearr_32054_32066[(1)] = (4));

} else {
var statearr_32055_32067 = state_32049__$1;
(statearr_32055_32067[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (3))){
var inst_32047 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32049__$1,inst_32047);
} else {
if((state_val_32050 === (4))){
var inst_32032 = (state_32049[(10)]);
var inst_32037 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32032);
var state_32049__$1 = state_32049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32049__$1,(7),inst_32037);
} else {
if((state_val_32050 === (5))){
var inst_32043 = cljs.core.async.close_BANG_.call(null,out);
var state_32049__$1 = state_32049;
var statearr_32056_32068 = state_32049__$1;
(statearr_32056_32068[(2)] = inst_32043);

(statearr_32056_32068[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (6))){
var inst_32045 = (state_32049[(2)]);
var state_32049__$1 = state_32049;
var statearr_32057_32069 = state_32049__$1;
(statearr_32057_32069[(2)] = inst_32045);

(statearr_32057_32069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32050 === (7))){
var inst_32033 = (state_32049[(11)]);
var inst_32039 = (state_32049[(2)]);
var inst_32040 = cljs.core.async.put_BANG_.call(null,out,inst_32039);
var inst_32026 = inst_32033;
var state_32049__$1 = (function (){var statearr_32058 = state_32049;
(statearr_32058[(9)] = inst_32026);

(statearr_32058[(12)] = inst_32040);

return statearr_32058;
})();
var statearr_32059_32070 = state_32049__$1;
(statearr_32059_32070[(2)] = null);

(statearr_32059_32070[(1)] = (2));


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
});})(c__30981__auto___32064,out))
;
return ((function (switch__30958__auto__,c__30981__auto___32064,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto____0 = (function (){
var statearr_32060 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32060[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto__);

(statearr_32060[(1)] = (1));

return statearr_32060;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto____1 = (function (state_32049){
while(true){
var ret_value__30960__auto__ = (function (){try{while(true){
var result__30961__auto__ = switch__30958__auto__.call(null,state_32049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30961__auto__;
}
break;
}
}catch (e32061){if((e32061 instanceof Object)){
var ex__30962__auto__ = e32061;
var statearr_32062_32071 = state_32049;
(statearr_32062_32071[(5)] = ex__30962__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32072 = state_32049;
state_32049 = G__32072;
continue;
} else {
return ret_value__30960__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto__ = function(state_32049){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto____1.call(this,state_32049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30959__auto__;
})()
;})(switch__30958__auto__,c__30981__auto___32064,out))
})();
var state__30983__auto__ = (function (){var statearr_32063 = f__30982__auto__.call(null);
(statearr_32063[(6)] = c__30981__auto___32064);

return statearr_32063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30983__auto__);
});})(c__30981__auto___32064,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32073,opts){
var map__32074 = p__32073;
var map__32074__$1 = (((((!((map__32074 == null))))?(((((map__32074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32074):map__32074);
var eval_body = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32074__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e32076){var e = e32076;
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
return (function (p1__32077_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32077_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__32078){
var vec__32079 = p__32078;
var k = cljs.core.nth.call(null,vec__32079,(0),null);
var v = cljs.core.nth.call(null,vec__32079,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32082){
var vec__32083 = p__32082;
var k = cljs.core.nth.call(null,vec__32083,(0),null);
var v = cljs.core.nth.call(null,vec__32083,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32089,p__32090){
var map__32091 = p__32089;
var map__32091__$1 = (((((!((map__32091 == null))))?(((((map__32091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32091):map__32091);
var opts = map__32091__$1;
var before_jsload = cljs.core.get.call(null,map__32091__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32091__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32091__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32092 = p__32090;
var map__32092__$1 = (((((!((map__32092 == null))))?(((((map__32092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32092):map__32092);
var msg = map__32092__$1;
var files = cljs.core.get.call(null,map__32092__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32092__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32092__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30981__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30982__auto__ = (function (){var switch__30958__auto__ = ((function (c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32246){
var state_val_32247 = (state_32246[(1)]);
if((state_val_32247 === (7))){
var inst_32106 = (state_32246[(7)]);
var inst_32108 = (state_32246[(8)]);
var inst_32109 = (state_32246[(9)]);
var inst_32107 = (state_32246[(10)]);
var inst_32114 = cljs.core._nth.call(null,inst_32107,inst_32109);
var inst_32115 = figwheel.client.file_reloading.eval_body.call(null,inst_32114,opts);
var inst_32116 = (inst_32109 + (1));
var tmp32248 = inst_32106;
var tmp32249 = inst_32108;
var tmp32250 = inst_32107;
var inst_32106__$1 = tmp32248;
var inst_32107__$1 = tmp32250;
var inst_32108__$1 = tmp32249;
var inst_32109__$1 = inst_32116;
var state_32246__$1 = (function (){var statearr_32251 = state_32246;
(statearr_32251[(7)] = inst_32106__$1);

(statearr_32251[(8)] = inst_32108__$1);

(statearr_32251[(9)] = inst_32109__$1);

(statearr_32251[(10)] = inst_32107__$1);

(statearr_32251[(11)] = inst_32115);

return statearr_32251;
})();
var statearr_32252_32335 = state_32246__$1;
(statearr_32252_32335[(2)] = null);

(statearr_32252_32335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (20))){
var inst_32149 = (state_32246[(12)]);
var inst_32157 = figwheel.client.file_reloading.sort_files.call(null,inst_32149);
var state_32246__$1 = state_32246;
var statearr_32253_32336 = state_32246__$1;
(statearr_32253_32336[(2)] = inst_32157);

(statearr_32253_32336[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (27))){
var state_32246__$1 = state_32246;
var statearr_32254_32337 = state_32246__$1;
(statearr_32254_32337[(2)] = null);

(statearr_32254_32337[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (1))){
var inst_32098 = (state_32246[(13)]);
var inst_32095 = before_jsload.call(null,files);
var inst_32096 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32097 = (function (){return ((function (inst_32098,inst_32095,inst_32096,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32086_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32086_SHARP_);
});
;})(inst_32098,inst_32095,inst_32096,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32098__$1 = cljs.core.filter.call(null,inst_32097,files);
var inst_32099 = cljs.core.not_empty.call(null,inst_32098__$1);
var state_32246__$1 = (function (){var statearr_32255 = state_32246;
(statearr_32255[(13)] = inst_32098__$1);

(statearr_32255[(14)] = inst_32096);

(statearr_32255[(15)] = inst_32095);

return statearr_32255;
})();
if(cljs.core.truth_(inst_32099)){
var statearr_32256_32338 = state_32246__$1;
(statearr_32256_32338[(1)] = (2));

} else {
var statearr_32257_32339 = state_32246__$1;
(statearr_32257_32339[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (24))){
var state_32246__$1 = state_32246;
var statearr_32258_32340 = state_32246__$1;
(statearr_32258_32340[(2)] = null);

(statearr_32258_32340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (39))){
var inst_32199 = (state_32246[(16)]);
var state_32246__$1 = state_32246;
var statearr_32259_32341 = state_32246__$1;
(statearr_32259_32341[(2)] = inst_32199);

(statearr_32259_32341[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (46))){
var inst_32241 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32260_32342 = state_32246__$1;
(statearr_32260_32342[(2)] = inst_32241);

(statearr_32260_32342[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (4))){
var inst_32143 = (state_32246[(2)]);
var inst_32144 = cljs.core.List.EMPTY;
var inst_32145 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32144);
var inst_32146 = (function (){return ((function (inst_32143,inst_32144,inst_32145,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32087_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32087_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32087_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32087_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_32143,inst_32144,inst_32145,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32147 = cljs.core.filter.call(null,inst_32146,files);
var inst_32148 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32149 = cljs.core.concat.call(null,inst_32147,inst_32148);
var state_32246__$1 = (function (){var statearr_32261 = state_32246;
(statearr_32261[(12)] = inst_32149);

(statearr_32261[(17)] = inst_32143);

(statearr_32261[(18)] = inst_32145);

return statearr_32261;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32262_32343 = state_32246__$1;
(statearr_32262_32343[(1)] = (16));

} else {
var statearr_32263_32344 = state_32246__$1;
(statearr_32263_32344[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (15))){
var inst_32133 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32264_32345 = state_32246__$1;
(statearr_32264_32345[(2)] = inst_32133);

(statearr_32264_32345[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (21))){
var inst_32159 = (state_32246[(19)]);
var inst_32159__$1 = (state_32246[(2)]);
var inst_32160 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32159__$1);
var state_32246__$1 = (function (){var statearr_32265 = state_32246;
(statearr_32265[(19)] = inst_32159__$1);

return statearr_32265;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32246__$1,(22),inst_32160);
} else {
if((state_val_32247 === (31))){
var inst_32244 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32246__$1,inst_32244);
} else {
if((state_val_32247 === (32))){
var inst_32199 = (state_32246[(16)]);
var inst_32204 = inst_32199.cljs$lang$protocol_mask$partition0$;
var inst_32205 = (inst_32204 & (64));
var inst_32206 = inst_32199.cljs$core$ISeq$;
var inst_32207 = (cljs.core.PROTOCOL_SENTINEL === inst_32206);
var inst_32208 = ((inst_32205) || (inst_32207));
var state_32246__$1 = state_32246;
if(cljs.core.truth_(inst_32208)){
var statearr_32266_32346 = state_32246__$1;
(statearr_32266_32346[(1)] = (35));

} else {
var statearr_32267_32347 = state_32246__$1;
(statearr_32267_32347[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (40))){
var inst_32221 = (state_32246[(20)]);
var inst_32220 = (state_32246[(2)]);
var inst_32221__$1 = cljs.core.get.call(null,inst_32220,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32222 = cljs.core.get.call(null,inst_32220,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32223 = cljs.core.not_empty.call(null,inst_32221__$1);
var state_32246__$1 = (function (){var statearr_32268 = state_32246;
(statearr_32268[(20)] = inst_32221__$1);

(statearr_32268[(21)] = inst_32222);

return statearr_32268;
})();
if(cljs.core.truth_(inst_32223)){
var statearr_32269_32348 = state_32246__$1;
(statearr_32269_32348[(1)] = (41));

} else {
var statearr_32270_32349 = state_32246__$1;
(statearr_32270_32349[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (33))){
var state_32246__$1 = state_32246;
var statearr_32271_32350 = state_32246__$1;
(statearr_32271_32350[(2)] = false);

(statearr_32271_32350[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (13))){
var inst_32119 = (state_32246[(22)]);
var inst_32123 = cljs.core.chunk_first.call(null,inst_32119);
var inst_32124 = cljs.core.chunk_rest.call(null,inst_32119);
var inst_32125 = cljs.core.count.call(null,inst_32123);
var inst_32106 = inst_32124;
var inst_32107 = inst_32123;
var inst_32108 = inst_32125;
var inst_32109 = (0);
var state_32246__$1 = (function (){var statearr_32272 = state_32246;
(statearr_32272[(7)] = inst_32106);

(statearr_32272[(8)] = inst_32108);

(statearr_32272[(9)] = inst_32109);

(statearr_32272[(10)] = inst_32107);

return statearr_32272;
})();
var statearr_32273_32351 = state_32246__$1;
(statearr_32273_32351[(2)] = null);

(statearr_32273_32351[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (22))){
var inst_32162 = (state_32246[(23)]);
var inst_32163 = (state_32246[(24)]);
var inst_32159 = (state_32246[(19)]);
var inst_32167 = (state_32246[(25)]);
var inst_32162__$1 = (state_32246[(2)]);
var inst_32163__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32162__$1);
var inst_32164 = (function (){var all_files = inst_32159;
var res_SINGLEQUOTE_ = inst_32162__$1;
var res = inst_32163__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32162,inst_32163,inst_32159,inst_32167,inst_32162__$1,inst_32163__$1,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32088_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32088_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32162,inst_32163,inst_32159,inst_32167,inst_32162__$1,inst_32163__$1,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32165 = cljs.core.filter.call(null,inst_32164,inst_32162__$1);
var inst_32166 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32167__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32166);
var inst_32168 = cljs.core.not_empty.call(null,inst_32167__$1);
var state_32246__$1 = (function (){var statearr_32274 = state_32246;
(statearr_32274[(23)] = inst_32162__$1);

(statearr_32274[(24)] = inst_32163__$1);

(statearr_32274[(25)] = inst_32167__$1);

(statearr_32274[(26)] = inst_32165);

return statearr_32274;
})();
if(cljs.core.truth_(inst_32168)){
var statearr_32275_32352 = state_32246__$1;
(statearr_32275_32352[(1)] = (23));

} else {
var statearr_32276_32353 = state_32246__$1;
(statearr_32276_32353[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (36))){
var state_32246__$1 = state_32246;
var statearr_32277_32354 = state_32246__$1;
(statearr_32277_32354[(2)] = false);

(statearr_32277_32354[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (41))){
var inst_32221 = (state_32246[(20)]);
var inst_32225 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32226 = cljs.core.map.call(null,inst_32225,inst_32221);
var inst_32227 = cljs.core.pr_str.call(null,inst_32226);
var inst_32228 = ["figwheel-no-load meta-data: ",inst_32227].join('');
var inst_32229 = figwheel.client.utils.log.call(null,inst_32228);
var state_32246__$1 = state_32246;
var statearr_32278_32355 = state_32246__$1;
(statearr_32278_32355[(2)] = inst_32229);

(statearr_32278_32355[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (43))){
var inst_32222 = (state_32246[(21)]);
var inst_32232 = (state_32246[(2)]);
var inst_32233 = cljs.core.not_empty.call(null,inst_32222);
var state_32246__$1 = (function (){var statearr_32279 = state_32246;
(statearr_32279[(27)] = inst_32232);

return statearr_32279;
})();
if(cljs.core.truth_(inst_32233)){
var statearr_32280_32356 = state_32246__$1;
(statearr_32280_32356[(1)] = (44));

} else {
var statearr_32281_32357 = state_32246__$1;
(statearr_32281_32357[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (29))){
var inst_32199 = (state_32246[(16)]);
var inst_32162 = (state_32246[(23)]);
var inst_32163 = (state_32246[(24)]);
var inst_32159 = (state_32246[(19)]);
var inst_32167 = (state_32246[(25)]);
var inst_32165 = (state_32246[(26)]);
var inst_32195 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32198 = (function (){var all_files = inst_32159;
var res_SINGLEQUOTE_ = inst_32162;
var res = inst_32163;
var files_not_loaded = inst_32165;
var dependencies_that_loaded = inst_32167;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32199,inst_32162,inst_32163,inst_32159,inst_32167,inst_32165,inst_32195,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32197){
var map__32282 = p__32197;
var map__32282__$1 = (((((!((map__32282 == null))))?(((((map__32282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32282):map__32282);
var namespace = cljs.core.get.call(null,map__32282__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32199,inst_32162,inst_32163,inst_32159,inst_32167,inst_32165,inst_32195,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32199__$1 = cljs.core.group_by.call(null,inst_32198,inst_32165);
var inst_32201 = (inst_32199__$1 == null);
var inst_32202 = cljs.core.not.call(null,inst_32201);
var state_32246__$1 = (function (){var statearr_32284 = state_32246;
(statearr_32284[(16)] = inst_32199__$1);

(statearr_32284[(28)] = inst_32195);

return statearr_32284;
})();
if(inst_32202){
var statearr_32285_32358 = state_32246__$1;
(statearr_32285_32358[(1)] = (32));

} else {
var statearr_32286_32359 = state_32246__$1;
(statearr_32286_32359[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (44))){
var inst_32222 = (state_32246[(21)]);
var inst_32235 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32222);
var inst_32236 = cljs.core.pr_str.call(null,inst_32235);
var inst_32237 = ["not required: ",inst_32236].join('');
var inst_32238 = figwheel.client.utils.log.call(null,inst_32237);
var state_32246__$1 = state_32246;
var statearr_32287_32360 = state_32246__$1;
(statearr_32287_32360[(2)] = inst_32238);

(statearr_32287_32360[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (6))){
var inst_32140 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32288_32361 = state_32246__$1;
(statearr_32288_32361[(2)] = inst_32140);

(statearr_32288_32361[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (28))){
var inst_32165 = (state_32246[(26)]);
var inst_32192 = (state_32246[(2)]);
var inst_32193 = cljs.core.not_empty.call(null,inst_32165);
var state_32246__$1 = (function (){var statearr_32289 = state_32246;
(statearr_32289[(29)] = inst_32192);

return statearr_32289;
})();
if(cljs.core.truth_(inst_32193)){
var statearr_32290_32362 = state_32246__$1;
(statearr_32290_32362[(1)] = (29));

} else {
var statearr_32291_32363 = state_32246__$1;
(statearr_32291_32363[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (25))){
var inst_32163 = (state_32246[(24)]);
var inst_32179 = (state_32246[(2)]);
var inst_32180 = cljs.core.not_empty.call(null,inst_32163);
var state_32246__$1 = (function (){var statearr_32292 = state_32246;
(statearr_32292[(30)] = inst_32179);

return statearr_32292;
})();
if(cljs.core.truth_(inst_32180)){
var statearr_32293_32364 = state_32246__$1;
(statearr_32293_32364[(1)] = (26));

} else {
var statearr_32294_32365 = state_32246__$1;
(statearr_32294_32365[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (34))){
var inst_32215 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
if(cljs.core.truth_(inst_32215)){
var statearr_32295_32366 = state_32246__$1;
(statearr_32295_32366[(1)] = (38));

} else {
var statearr_32296_32367 = state_32246__$1;
(statearr_32296_32367[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (17))){
var state_32246__$1 = state_32246;
var statearr_32297_32368 = state_32246__$1;
(statearr_32297_32368[(2)] = recompile_dependents);

(statearr_32297_32368[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (3))){
var state_32246__$1 = state_32246;
var statearr_32298_32369 = state_32246__$1;
(statearr_32298_32369[(2)] = null);

(statearr_32298_32369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (12))){
var inst_32136 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32299_32370 = state_32246__$1;
(statearr_32299_32370[(2)] = inst_32136);

(statearr_32299_32370[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (2))){
var inst_32098 = (state_32246[(13)]);
var inst_32105 = cljs.core.seq.call(null,inst_32098);
var inst_32106 = inst_32105;
var inst_32107 = null;
var inst_32108 = (0);
var inst_32109 = (0);
var state_32246__$1 = (function (){var statearr_32300 = state_32246;
(statearr_32300[(7)] = inst_32106);

(statearr_32300[(8)] = inst_32108);

(statearr_32300[(9)] = inst_32109);

(statearr_32300[(10)] = inst_32107);

return statearr_32300;
})();
var statearr_32301_32371 = state_32246__$1;
(statearr_32301_32371[(2)] = null);

(statearr_32301_32371[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (23))){
var inst_32162 = (state_32246[(23)]);
var inst_32163 = (state_32246[(24)]);
var inst_32159 = (state_32246[(19)]);
var inst_32167 = (state_32246[(25)]);
var inst_32165 = (state_32246[(26)]);
var inst_32170 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32172 = (function (){var all_files = inst_32159;
var res_SINGLEQUOTE_ = inst_32162;
var res = inst_32163;
var files_not_loaded = inst_32165;
var dependencies_that_loaded = inst_32167;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32162,inst_32163,inst_32159,inst_32167,inst_32165,inst_32170,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32171){
var map__32302 = p__32171;
var map__32302__$1 = (((((!((map__32302 == null))))?(((((map__32302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32302):map__32302);
var request_url = cljs.core.get.call(null,map__32302__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32162,inst_32163,inst_32159,inst_32167,inst_32165,inst_32170,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32173 = cljs.core.reverse.call(null,inst_32167);
var inst_32174 = cljs.core.map.call(null,inst_32172,inst_32173);
var inst_32175 = cljs.core.pr_str.call(null,inst_32174);
var inst_32176 = figwheel.client.utils.log.call(null,inst_32175);
var state_32246__$1 = (function (){var statearr_32304 = state_32246;
(statearr_32304[(31)] = inst_32170);

return statearr_32304;
})();
var statearr_32305_32372 = state_32246__$1;
(statearr_32305_32372[(2)] = inst_32176);

(statearr_32305_32372[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (35))){
var state_32246__$1 = state_32246;
var statearr_32306_32373 = state_32246__$1;
(statearr_32306_32373[(2)] = true);

(statearr_32306_32373[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (19))){
var inst_32149 = (state_32246[(12)]);
var inst_32155 = figwheel.client.file_reloading.expand_files.call(null,inst_32149);
var state_32246__$1 = state_32246;
var statearr_32307_32374 = state_32246__$1;
(statearr_32307_32374[(2)] = inst_32155);

(statearr_32307_32374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (11))){
var state_32246__$1 = state_32246;
var statearr_32308_32375 = state_32246__$1;
(statearr_32308_32375[(2)] = null);

(statearr_32308_32375[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (9))){
var inst_32138 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32309_32376 = state_32246__$1;
(statearr_32309_32376[(2)] = inst_32138);

(statearr_32309_32376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (5))){
var inst_32108 = (state_32246[(8)]);
var inst_32109 = (state_32246[(9)]);
var inst_32111 = (inst_32109 < inst_32108);
var inst_32112 = inst_32111;
var state_32246__$1 = state_32246;
if(cljs.core.truth_(inst_32112)){
var statearr_32310_32377 = state_32246__$1;
(statearr_32310_32377[(1)] = (7));

} else {
var statearr_32311_32378 = state_32246__$1;
(statearr_32311_32378[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (14))){
var inst_32119 = (state_32246[(22)]);
var inst_32128 = cljs.core.first.call(null,inst_32119);
var inst_32129 = figwheel.client.file_reloading.eval_body.call(null,inst_32128,opts);
var inst_32130 = cljs.core.next.call(null,inst_32119);
var inst_32106 = inst_32130;
var inst_32107 = null;
var inst_32108 = (0);
var inst_32109 = (0);
var state_32246__$1 = (function (){var statearr_32312 = state_32246;
(statearr_32312[(7)] = inst_32106);

(statearr_32312[(32)] = inst_32129);

(statearr_32312[(8)] = inst_32108);

(statearr_32312[(9)] = inst_32109);

(statearr_32312[(10)] = inst_32107);

return statearr_32312;
})();
var statearr_32313_32379 = state_32246__$1;
(statearr_32313_32379[(2)] = null);

(statearr_32313_32379[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (45))){
var state_32246__$1 = state_32246;
var statearr_32314_32380 = state_32246__$1;
(statearr_32314_32380[(2)] = null);

(statearr_32314_32380[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (26))){
var inst_32162 = (state_32246[(23)]);
var inst_32163 = (state_32246[(24)]);
var inst_32159 = (state_32246[(19)]);
var inst_32167 = (state_32246[(25)]);
var inst_32165 = (state_32246[(26)]);
var inst_32182 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32184 = (function (){var all_files = inst_32159;
var res_SINGLEQUOTE_ = inst_32162;
var res = inst_32163;
var files_not_loaded = inst_32165;
var dependencies_that_loaded = inst_32167;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32162,inst_32163,inst_32159,inst_32167,inst_32165,inst_32182,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32183){
var map__32315 = p__32183;
var map__32315__$1 = (((((!((map__32315 == null))))?(((((map__32315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32315):map__32315);
var namespace = cljs.core.get.call(null,map__32315__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32315__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32162,inst_32163,inst_32159,inst_32167,inst_32165,inst_32182,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32185 = cljs.core.map.call(null,inst_32184,inst_32163);
var inst_32186 = cljs.core.pr_str.call(null,inst_32185);
var inst_32187 = figwheel.client.utils.log.call(null,inst_32186);
var inst_32188 = (function (){var all_files = inst_32159;
var res_SINGLEQUOTE_ = inst_32162;
var res = inst_32163;
var files_not_loaded = inst_32165;
var dependencies_that_loaded = inst_32167;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32162,inst_32163,inst_32159,inst_32167,inst_32165,inst_32182,inst_32184,inst_32185,inst_32186,inst_32187,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32162,inst_32163,inst_32159,inst_32167,inst_32165,inst_32182,inst_32184,inst_32185,inst_32186,inst_32187,state_val_32247,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32189 = setTimeout(inst_32188,(10));
var state_32246__$1 = (function (){var statearr_32317 = state_32246;
(statearr_32317[(33)] = inst_32187);

(statearr_32317[(34)] = inst_32182);

return statearr_32317;
})();
var statearr_32318_32381 = state_32246__$1;
(statearr_32318_32381[(2)] = inst_32189);

(statearr_32318_32381[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (16))){
var state_32246__$1 = state_32246;
var statearr_32319_32382 = state_32246__$1;
(statearr_32319_32382[(2)] = reload_dependents);

(statearr_32319_32382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (38))){
var inst_32199 = (state_32246[(16)]);
var inst_32217 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32199);
var state_32246__$1 = state_32246;
var statearr_32320_32383 = state_32246__$1;
(statearr_32320_32383[(2)] = inst_32217);

(statearr_32320_32383[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (30))){
var state_32246__$1 = state_32246;
var statearr_32321_32384 = state_32246__$1;
(statearr_32321_32384[(2)] = null);

(statearr_32321_32384[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (10))){
var inst_32119 = (state_32246[(22)]);
var inst_32121 = cljs.core.chunked_seq_QMARK_.call(null,inst_32119);
var state_32246__$1 = state_32246;
if(inst_32121){
var statearr_32322_32385 = state_32246__$1;
(statearr_32322_32385[(1)] = (13));

} else {
var statearr_32323_32386 = state_32246__$1;
(statearr_32323_32386[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (18))){
var inst_32153 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
if(cljs.core.truth_(inst_32153)){
var statearr_32324_32387 = state_32246__$1;
(statearr_32324_32387[(1)] = (19));

} else {
var statearr_32325_32388 = state_32246__$1;
(statearr_32325_32388[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (42))){
var state_32246__$1 = state_32246;
var statearr_32326_32389 = state_32246__$1;
(statearr_32326_32389[(2)] = null);

(statearr_32326_32389[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (37))){
var inst_32212 = (state_32246[(2)]);
var state_32246__$1 = state_32246;
var statearr_32327_32390 = state_32246__$1;
(statearr_32327_32390[(2)] = inst_32212);

(statearr_32327_32390[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32247 === (8))){
var inst_32106 = (state_32246[(7)]);
var inst_32119 = (state_32246[(22)]);
var inst_32119__$1 = cljs.core.seq.call(null,inst_32106);
var state_32246__$1 = (function (){var statearr_32328 = state_32246;
(statearr_32328[(22)] = inst_32119__$1);

return statearr_32328;
})();
if(inst_32119__$1){
var statearr_32329_32391 = state_32246__$1;
(statearr_32329_32391[(1)] = (10));

} else {
var statearr_32330_32392 = state_32246__$1;
(statearr_32330_32392[(1)] = (11));

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
});})(c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30958__auto__,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto____0 = (function (){
var statearr_32331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32331[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto__);

(statearr_32331[(1)] = (1));

return statearr_32331;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto____1 = (function (state_32246){
while(true){
var ret_value__30960__auto__ = (function (){try{while(true){
var result__30961__auto__ = switch__30958__auto__.call(null,state_32246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30961__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30961__auto__;
}
break;
}
}catch (e32332){if((e32332 instanceof Object)){
var ex__30962__auto__ = e32332;
var statearr_32333_32393 = state_32246;
(statearr_32333_32393[(5)] = ex__30962__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30960__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32394 = state_32246;
state_32246 = G__32394;
continue;
} else {
return ret_value__30960__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto__ = function(state_32246){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto____1.call(this,state_32246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30959__auto__;
})()
;})(switch__30958__auto__,c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30983__auto__ = (function (){var statearr_32334 = f__30982__auto__.call(null);
(statearr_32334[(6)] = c__30981__auto__);

return statearr_32334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30983__auto__);
});})(c__30981__auto__,map__32091,map__32091__$1,opts,before_jsload,on_jsload,reload_dependents,map__32092,map__32092__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30981__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32397,link){
var map__32398 = p__32397;
var map__32398__$1 = (((((!((map__32398 == null))))?(((((map__32398.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32398.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32398):map__32398);
var file = cljs.core.get.call(null,map__32398__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__32398,map__32398__$1,file){
return (function (p1__32395_SHARP_,p2__32396_SHARP_){
if(cljs.core._EQ_.call(null,p1__32395_SHARP_,p2__32396_SHARP_)){
return p1__32395_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__32398,map__32398__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32401){
var map__32402 = p__32401;
var map__32402__$1 = (((((!((map__32402 == null))))?(((((map__32402.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32402.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32402):map__32402);
var match_length = cljs.core.get.call(null,map__32402__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32402__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32400_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32400_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32404_SHARP_,p2__32405_SHARP_){
return cljs.core.assoc.call(null,p1__32404_SHARP_,cljs.core.get.call(null,p2__32405_SHARP_,key),p2__32405_SHARP_);
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
var loaded_f_datas_32406 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32406);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32406);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32407,p__32408){
var map__32409 = p__32407;
var map__32409__$1 = (((((!((map__32409 == null))))?(((((map__32409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32409):map__32409);
var on_cssload = cljs.core.get.call(null,map__32409__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32410 = p__32408;
var map__32410__$1 = (((((!((map__32410 == null))))?(((((map__32410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32410):map__32410);
var files_msg = map__32410__$1;
var files = cljs.core.get.call(null,map__32410__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1620918627954
