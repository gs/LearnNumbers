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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31594_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31594_SHARP_));
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
var seq__31595 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31596 = null;
var count__31597 = (0);
var i__31598 = (0);
while(true){
if((i__31598 < count__31597)){
var n = cljs.core._nth.call(null,chunk__31596,i__31598);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31599 = seq__31595;
var G__31600 = chunk__31596;
var G__31601 = count__31597;
var G__31602 = (i__31598 + (1));
seq__31595 = G__31599;
chunk__31596 = G__31600;
count__31597 = G__31601;
i__31598 = G__31602;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31595);
if(temp__5735__auto__){
var seq__31595__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31595__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31595__$1);
var G__31603 = cljs.core.chunk_rest.call(null,seq__31595__$1);
var G__31604 = c__4550__auto__;
var G__31605 = cljs.core.count.call(null,c__4550__auto__);
var G__31606 = (0);
seq__31595 = G__31603;
chunk__31596 = G__31604;
count__31597 = G__31605;
i__31598 = G__31606;
continue;
} else {
var n = cljs.core.first.call(null,seq__31595__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31607 = cljs.core.next.call(null,seq__31595__$1);
var G__31608 = null;
var G__31609 = (0);
var G__31610 = (0);
seq__31595 = G__31607;
chunk__31596 = G__31608;
count__31597 = G__31609;
i__31598 = G__31610;
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
return cljs.core.some.call(null,(function (p__31611){
var vec__31612 = p__31611;
var _ = cljs.core.nth.call(null,vec__31612,(0),null);
var v = cljs.core.nth.call(null,vec__31612,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__31615){
var vec__31616 = p__31615;
var k = cljs.core.nth.call(null,vec__31616,(0),null);
var v = cljs.core.nth.call(null,vec__31616,(1),null);
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

var seq__31628_31636 = cljs.core.seq.call(null,deps);
var chunk__31629_31637 = null;
var count__31630_31638 = (0);
var i__31631_31639 = (0);
while(true){
if((i__31631_31639 < count__31630_31638)){
var dep_31640 = cljs.core._nth.call(null,chunk__31629_31637,i__31631_31639);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31640;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31640));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31640,(depth + (1)),state);
} else {
}


var G__31641 = seq__31628_31636;
var G__31642 = chunk__31629_31637;
var G__31643 = count__31630_31638;
var G__31644 = (i__31631_31639 + (1));
seq__31628_31636 = G__31641;
chunk__31629_31637 = G__31642;
count__31630_31638 = G__31643;
i__31631_31639 = G__31644;
continue;
} else {
var temp__5735__auto___31645 = cljs.core.seq.call(null,seq__31628_31636);
if(temp__5735__auto___31645){
var seq__31628_31646__$1 = temp__5735__auto___31645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31628_31646__$1)){
var c__4550__auto___31647 = cljs.core.chunk_first.call(null,seq__31628_31646__$1);
var G__31648 = cljs.core.chunk_rest.call(null,seq__31628_31646__$1);
var G__31649 = c__4550__auto___31647;
var G__31650 = cljs.core.count.call(null,c__4550__auto___31647);
var G__31651 = (0);
seq__31628_31636 = G__31648;
chunk__31629_31637 = G__31649;
count__31630_31638 = G__31650;
i__31631_31639 = G__31651;
continue;
} else {
var dep_31652 = cljs.core.first.call(null,seq__31628_31646__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31652;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31652));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31652,(depth + (1)),state);
} else {
}


var G__31653 = cljs.core.next.call(null,seq__31628_31646__$1);
var G__31654 = null;
var G__31655 = (0);
var G__31656 = (0);
seq__31628_31636 = G__31653;
chunk__31629_31637 = G__31654;
count__31630_31638 = G__31655;
i__31631_31639 = G__31656;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31632){
var vec__31633 = p__31632;
var seq__31634 = cljs.core.seq.call(null,vec__31633);
var first__31635 = cljs.core.first.call(null,seq__31634);
var seq__31634__$1 = cljs.core.next.call(null,seq__31634);
var x = first__31635;
var xs = seq__31634__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31633,seq__31634,first__31635,seq__31634__$1,x,xs,get_deps__$1){
return (function (p1__31619_SHARP_){
return clojure.set.difference.call(null,p1__31619_SHARP_,x);
});})(vec__31633,seq__31634,first__31635,seq__31634__$1,x,xs,get_deps__$1))
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
var seq__31657 = cljs.core.seq.call(null,provides);
var chunk__31658 = null;
var count__31659 = (0);
var i__31660 = (0);
while(true){
if((i__31660 < count__31659)){
var prov = cljs.core._nth.call(null,chunk__31658,i__31660);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31669_31677 = cljs.core.seq.call(null,requires);
var chunk__31670_31678 = null;
var count__31671_31679 = (0);
var i__31672_31680 = (0);
while(true){
if((i__31672_31680 < count__31671_31679)){
var req_31681 = cljs.core._nth.call(null,chunk__31670_31678,i__31672_31680);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31681,prov);


var G__31682 = seq__31669_31677;
var G__31683 = chunk__31670_31678;
var G__31684 = count__31671_31679;
var G__31685 = (i__31672_31680 + (1));
seq__31669_31677 = G__31682;
chunk__31670_31678 = G__31683;
count__31671_31679 = G__31684;
i__31672_31680 = G__31685;
continue;
} else {
var temp__5735__auto___31686 = cljs.core.seq.call(null,seq__31669_31677);
if(temp__5735__auto___31686){
var seq__31669_31687__$1 = temp__5735__auto___31686;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31669_31687__$1)){
var c__4550__auto___31688 = cljs.core.chunk_first.call(null,seq__31669_31687__$1);
var G__31689 = cljs.core.chunk_rest.call(null,seq__31669_31687__$1);
var G__31690 = c__4550__auto___31688;
var G__31691 = cljs.core.count.call(null,c__4550__auto___31688);
var G__31692 = (0);
seq__31669_31677 = G__31689;
chunk__31670_31678 = G__31690;
count__31671_31679 = G__31691;
i__31672_31680 = G__31692;
continue;
} else {
var req_31693 = cljs.core.first.call(null,seq__31669_31687__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31693,prov);


var G__31694 = cljs.core.next.call(null,seq__31669_31687__$1);
var G__31695 = null;
var G__31696 = (0);
var G__31697 = (0);
seq__31669_31677 = G__31694;
chunk__31670_31678 = G__31695;
count__31671_31679 = G__31696;
i__31672_31680 = G__31697;
continue;
}
} else {
}
}
break;
}


var G__31698 = seq__31657;
var G__31699 = chunk__31658;
var G__31700 = count__31659;
var G__31701 = (i__31660 + (1));
seq__31657 = G__31698;
chunk__31658 = G__31699;
count__31659 = G__31700;
i__31660 = G__31701;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31657);
if(temp__5735__auto__){
var seq__31657__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31657__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31657__$1);
var G__31702 = cljs.core.chunk_rest.call(null,seq__31657__$1);
var G__31703 = c__4550__auto__;
var G__31704 = cljs.core.count.call(null,c__4550__auto__);
var G__31705 = (0);
seq__31657 = G__31702;
chunk__31658 = G__31703;
count__31659 = G__31704;
i__31660 = G__31705;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31657__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31673_31706 = cljs.core.seq.call(null,requires);
var chunk__31674_31707 = null;
var count__31675_31708 = (0);
var i__31676_31709 = (0);
while(true){
if((i__31676_31709 < count__31675_31708)){
var req_31710 = cljs.core._nth.call(null,chunk__31674_31707,i__31676_31709);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31710,prov);


var G__31711 = seq__31673_31706;
var G__31712 = chunk__31674_31707;
var G__31713 = count__31675_31708;
var G__31714 = (i__31676_31709 + (1));
seq__31673_31706 = G__31711;
chunk__31674_31707 = G__31712;
count__31675_31708 = G__31713;
i__31676_31709 = G__31714;
continue;
} else {
var temp__5735__auto___31715__$1 = cljs.core.seq.call(null,seq__31673_31706);
if(temp__5735__auto___31715__$1){
var seq__31673_31716__$1 = temp__5735__auto___31715__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31673_31716__$1)){
var c__4550__auto___31717 = cljs.core.chunk_first.call(null,seq__31673_31716__$1);
var G__31718 = cljs.core.chunk_rest.call(null,seq__31673_31716__$1);
var G__31719 = c__4550__auto___31717;
var G__31720 = cljs.core.count.call(null,c__4550__auto___31717);
var G__31721 = (0);
seq__31673_31706 = G__31718;
chunk__31674_31707 = G__31719;
count__31675_31708 = G__31720;
i__31676_31709 = G__31721;
continue;
} else {
var req_31722 = cljs.core.first.call(null,seq__31673_31716__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31722,prov);


var G__31723 = cljs.core.next.call(null,seq__31673_31716__$1);
var G__31724 = null;
var G__31725 = (0);
var G__31726 = (0);
seq__31673_31706 = G__31723;
chunk__31674_31707 = G__31724;
count__31675_31708 = G__31725;
i__31676_31709 = G__31726;
continue;
}
} else {
}
}
break;
}


var G__31727 = cljs.core.next.call(null,seq__31657__$1);
var G__31728 = null;
var G__31729 = (0);
var G__31730 = (0);
seq__31657 = G__31727;
chunk__31658 = G__31728;
count__31659 = G__31729;
i__31660 = G__31730;
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
var seq__31731_31735 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31732_31736 = null;
var count__31733_31737 = (0);
var i__31734_31738 = (0);
while(true){
if((i__31734_31738 < count__31733_31737)){
var ns_31739 = cljs.core._nth.call(null,chunk__31732_31736,i__31734_31738);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31739);


var G__31740 = seq__31731_31735;
var G__31741 = chunk__31732_31736;
var G__31742 = count__31733_31737;
var G__31743 = (i__31734_31738 + (1));
seq__31731_31735 = G__31740;
chunk__31732_31736 = G__31741;
count__31733_31737 = G__31742;
i__31734_31738 = G__31743;
continue;
} else {
var temp__5735__auto___31744 = cljs.core.seq.call(null,seq__31731_31735);
if(temp__5735__auto___31744){
var seq__31731_31745__$1 = temp__5735__auto___31744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31731_31745__$1)){
var c__4550__auto___31746 = cljs.core.chunk_first.call(null,seq__31731_31745__$1);
var G__31747 = cljs.core.chunk_rest.call(null,seq__31731_31745__$1);
var G__31748 = c__4550__auto___31746;
var G__31749 = cljs.core.count.call(null,c__4550__auto___31746);
var G__31750 = (0);
seq__31731_31735 = G__31747;
chunk__31732_31736 = G__31748;
count__31733_31737 = G__31749;
i__31734_31738 = G__31750;
continue;
} else {
var ns_31751 = cljs.core.first.call(null,seq__31731_31745__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31751);


var G__31752 = cljs.core.next.call(null,seq__31731_31745__$1);
var G__31753 = null;
var G__31754 = (0);
var G__31755 = (0);
seq__31731_31735 = G__31752;
chunk__31732_31736 = G__31753;
count__31733_31737 = G__31754;
i__31734_31738 = G__31755;
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
var G__31756__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__31756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31757__i = 0, G__31757__a = new Array(arguments.length -  0);
while (G__31757__i < G__31757__a.length) {G__31757__a[G__31757__i] = arguments[G__31757__i + 0]; ++G__31757__i;}
  args = new cljs.core.IndexedSeq(G__31757__a,0,null);
} 
return G__31756__delegate.call(this,args);};
G__31756.cljs$lang$maxFixedArity = 0;
G__31756.cljs$lang$applyTo = (function (arglist__31758){
var args = cljs.core.seq(arglist__31758);
return G__31756__delegate(args);
});
G__31756.cljs$core$IFn$_invoke$arity$variadic = G__31756__delegate;
return G__31756;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__31759_SHARP_,p2__31760_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31759_SHARP_)),p2__31760_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__31761_SHARP_,p2__31762_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__31761_SHARP_),p2__31762_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__31763 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__31763.addCallback(((function (G__31763){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__31763))
);

G__31763.addErrback(((function (G__31763){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__31763))
);

return G__31763;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e31764){if((e31764 instanceof Error)){
var e = e31764;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31764;

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
}catch (e31765){if((e31765 instanceof Error)){
var e = e31765;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31765;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__31766 = cljs.core._EQ_;
var expr__31767 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__31766.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__31767))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__31766.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__31767))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__31766.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__31767))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__31766,expr__31767){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__31766,expr__31767))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31769,callback){
var map__31770 = p__31769;
var map__31770__$1 = (((((!((map__31770 == null))))?(((((map__31770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31770):map__31770);
var file_msg = map__31770__$1;
var request_url = cljs.core.get.call(null,map__31770__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__31770,map__31770__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31770,map__31770__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30836__auto__){
return (function (){
var f__30837__auto__ = (function (){var switch__30813__auto__ = ((function (c__30836__auto__){
return (function (state_31808){
var state_val_31809 = (state_31808[(1)]);
if((state_val_31809 === (7))){
var inst_31804 = (state_31808[(2)]);
var state_31808__$1 = state_31808;
var statearr_31810_31836 = state_31808__$1;
(statearr_31810_31836[(2)] = inst_31804);

(statearr_31810_31836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (1))){
var state_31808__$1 = state_31808;
var statearr_31811_31837 = state_31808__$1;
(statearr_31811_31837[(2)] = null);

(statearr_31811_31837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (4))){
var inst_31774 = (state_31808[(7)]);
var inst_31774__$1 = (state_31808[(2)]);
var state_31808__$1 = (function (){var statearr_31812 = state_31808;
(statearr_31812[(7)] = inst_31774__$1);

return statearr_31812;
})();
if(cljs.core.truth_(inst_31774__$1)){
var statearr_31813_31838 = state_31808__$1;
(statearr_31813_31838[(1)] = (5));

} else {
var statearr_31814_31839 = state_31808__$1;
(statearr_31814_31839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (15))){
var inst_31789 = (state_31808[(8)]);
var inst_31787 = (state_31808[(9)]);
var inst_31791 = inst_31789.call(null,inst_31787);
var state_31808__$1 = state_31808;
var statearr_31815_31840 = state_31808__$1;
(statearr_31815_31840[(2)] = inst_31791);

(statearr_31815_31840[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (13))){
var inst_31798 = (state_31808[(2)]);
var state_31808__$1 = state_31808;
var statearr_31816_31841 = state_31808__$1;
(statearr_31816_31841[(2)] = inst_31798);

(statearr_31816_31841[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (6))){
var state_31808__$1 = state_31808;
var statearr_31817_31842 = state_31808__$1;
(statearr_31817_31842[(2)] = null);

(statearr_31817_31842[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (17))){
var inst_31795 = (state_31808[(2)]);
var state_31808__$1 = state_31808;
var statearr_31818_31843 = state_31808__$1;
(statearr_31818_31843[(2)] = inst_31795);

(statearr_31818_31843[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (3))){
var inst_31806 = (state_31808[(2)]);
var state_31808__$1 = state_31808;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31808__$1,inst_31806);
} else {
if((state_val_31809 === (12))){
var state_31808__$1 = state_31808;
var statearr_31819_31844 = state_31808__$1;
(statearr_31819_31844[(2)] = null);

(statearr_31819_31844[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (2))){
var state_31808__$1 = state_31808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31808__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_31809 === (11))){
var inst_31779 = (state_31808[(10)]);
var inst_31785 = figwheel.client.file_reloading.blocking_load.call(null,inst_31779);
var state_31808__$1 = state_31808;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31808__$1,(14),inst_31785);
} else {
if((state_val_31809 === (9))){
var inst_31779 = (state_31808[(10)]);
var state_31808__$1 = state_31808;
if(cljs.core.truth_(inst_31779)){
var statearr_31820_31845 = state_31808__$1;
(statearr_31820_31845[(1)] = (11));

} else {
var statearr_31821_31846 = state_31808__$1;
(statearr_31821_31846[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (5))){
var inst_31774 = (state_31808[(7)]);
var inst_31780 = (state_31808[(11)]);
var inst_31779 = cljs.core.nth.call(null,inst_31774,(0),null);
var inst_31780__$1 = cljs.core.nth.call(null,inst_31774,(1),null);
var state_31808__$1 = (function (){var statearr_31822 = state_31808;
(statearr_31822[(10)] = inst_31779);

(statearr_31822[(11)] = inst_31780__$1);

return statearr_31822;
})();
if(cljs.core.truth_(inst_31780__$1)){
var statearr_31823_31847 = state_31808__$1;
(statearr_31823_31847[(1)] = (8));

} else {
var statearr_31824_31848 = state_31808__$1;
(statearr_31824_31848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (14))){
var inst_31779 = (state_31808[(10)]);
var inst_31789 = (state_31808[(8)]);
var inst_31787 = (state_31808[(2)]);
var inst_31788 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_31789__$1 = cljs.core.get.call(null,inst_31788,inst_31779);
var state_31808__$1 = (function (){var statearr_31825 = state_31808;
(statearr_31825[(8)] = inst_31789__$1);

(statearr_31825[(9)] = inst_31787);

return statearr_31825;
})();
if(cljs.core.truth_(inst_31789__$1)){
var statearr_31826_31849 = state_31808__$1;
(statearr_31826_31849[(1)] = (15));

} else {
var statearr_31827_31850 = state_31808__$1;
(statearr_31827_31850[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (16))){
var inst_31787 = (state_31808[(9)]);
var inst_31793 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_31787);
var state_31808__$1 = state_31808;
var statearr_31828_31851 = state_31808__$1;
(statearr_31828_31851[(2)] = inst_31793);

(statearr_31828_31851[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (10))){
var inst_31800 = (state_31808[(2)]);
var state_31808__$1 = (function (){var statearr_31829 = state_31808;
(statearr_31829[(12)] = inst_31800);

return statearr_31829;
})();
var statearr_31830_31852 = state_31808__$1;
(statearr_31830_31852[(2)] = null);

(statearr_31830_31852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31809 === (8))){
var inst_31780 = (state_31808[(11)]);
var inst_31782 = eval(inst_31780);
var state_31808__$1 = state_31808;
var statearr_31831_31853 = state_31808__$1;
(statearr_31831_31853[(2)] = inst_31782);

(statearr_31831_31853[(1)] = (10));


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
});})(c__30836__auto__))
;
return ((function (switch__30813__auto__,c__30836__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30814__auto__ = null;
var figwheel$client$file_reloading$state_machine__30814__auto____0 = (function (){
var statearr_31832 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31832[(0)] = figwheel$client$file_reloading$state_machine__30814__auto__);

(statearr_31832[(1)] = (1));

return statearr_31832;
});
var figwheel$client$file_reloading$state_machine__30814__auto____1 = (function (state_31808){
while(true){
var ret_value__30815__auto__ = (function (){try{while(true){
var result__30816__auto__ = switch__30813__auto__.call(null,state_31808);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30816__auto__;
}
break;
}
}catch (e31833){if((e31833 instanceof Object)){
var ex__30817__auto__ = e31833;
var statearr_31834_31854 = state_31808;
(statearr_31834_31854[(5)] = ex__30817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31808);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31855 = state_31808;
state_31808 = G__31855;
continue;
} else {
return ret_value__30815__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30814__auto__ = function(state_31808){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30814__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30814__auto____1.call(this,state_31808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30814__auto____0;
figwheel$client$file_reloading$state_machine__30814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30814__auto____1;
return figwheel$client$file_reloading$state_machine__30814__auto__;
})()
;})(switch__30813__auto__,c__30836__auto__))
})();
var state__30838__auto__ = (function (){var statearr_31835 = f__30837__auto__.call(null);
(statearr_31835[(6)] = c__30836__auto__);

return statearr_31835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30838__auto__);
});})(c__30836__auto__))
);

return c__30836__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__31857 = arguments.length;
switch (G__31857) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__31859,callback){
var map__31860 = p__31859;
var map__31860__$1 = (((((!((map__31860 == null))))?(((((map__31860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31860):map__31860);
var file_msg = map__31860__$1;
var namespace = cljs.core.get.call(null,map__31860__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__31860,map__31860__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__31860,map__31860__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__31862){
var map__31863 = p__31862;
var map__31863__$1 = (((((!((map__31863 == null))))?(((((map__31863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31863):map__31863);
var file_msg = map__31863__$1;
var namespace = cljs.core.get.call(null,map__31863__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31865){
var map__31866 = p__31865;
var map__31866__$1 = (((((!((map__31866 == null))))?(((((map__31866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31866):map__31866);
var file_msg = map__31866__$1;
var namespace = cljs.core.get.call(null,map__31866__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31868,callback){
var map__31869 = p__31868;
var map__31869__$1 = (((((!((map__31869 == null))))?(((((map__31869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31869):map__31869);
var file_msg = map__31869__$1;
var request_url = cljs.core.get.call(null,map__31869__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31869__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30836__auto___31919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30836__auto___31919,out){
return (function (){
var f__30837__auto__ = (function (){var switch__30813__auto__ = ((function (c__30836__auto___31919,out){
return (function (state_31904){
var state_val_31905 = (state_31904[(1)]);
if((state_val_31905 === (1))){
var inst_31878 = cljs.core.seq.call(null,files);
var inst_31879 = cljs.core.first.call(null,inst_31878);
var inst_31880 = cljs.core.next.call(null,inst_31878);
var inst_31881 = files;
var state_31904__$1 = (function (){var statearr_31906 = state_31904;
(statearr_31906[(7)] = inst_31879);

(statearr_31906[(8)] = inst_31880);

(statearr_31906[(9)] = inst_31881);

return statearr_31906;
})();
var statearr_31907_31920 = state_31904__$1;
(statearr_31907_31920[(2)] = null);

(statearr_31907_31920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (2))){
var inst_31881 = (state_31904[(9)]);
var inst_31887 = (state_31904[(10)]);
var inst_31886 = cljs.core.seq.call(null,inst_31881);
var inst_31887__$1 = cljs.core.first.call(null,inst_31886);
var inst_31888 = cljs.core.next.call(null,inst_31886);
var inst_31889 = (inst_31887__$1 == null);
var inst_31890 = cljs.core.not.call(null,inst_31889);
var state_31904__$1 = (function (){var statearr_31908 = state_31904;
(statearr_31908[(11)] = inst_31888);

(statearr_31908[(10)] = inst_31887__$1);

return statearr_31908;
})();
if(inst_31890){
var statearr_31909_31921 = state_31904__$1;
(statearr_31909_31921[(1)] = (4));

} else {
var statearr_31910_31922 = state_31904__$1;
(statearr_31910_31922[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (3))){
var inst_31902 = (state_31904[(2)]);
var state_31904__$1 = state_31904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31904__$1,inst_31902);
} else {
if((state_val_31905 === (4))){
var inst_31887 = (state_31904[(10)]);
var inst_31892 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31887);
var state_31904__$1 = state_31904;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31904__$1,(7),inst_31892);
} else {
if((state_val_31905 === (5))){
var inst_31898 = cljs.core.async.close_BANG_.call(null,out);
var state_31904__$1 = state_31904;
var statearr_31911_31923 = state_31904__$1;
(statearr_31911_31923[(2)] = inst_31898);

(statearr_31911_31923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (6))){
var inst_31900 = (state_31904[(2)]);
var state_31904__$1 = state_31904;
var statearr_31912_31924 = state_31904__$1;
(statearr_31912_31924[(2)] = inst_31900);

(statearr_31912_31924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31905 === (7))){
var inst_31888 = (state_31904[(11)]);
var inst_31894 = (state_31904[(2)]);
var inst_31895 = cljs.core.async.put_BANG_.call(null,out,inst_31894);
var inst_31881 = inst_31888;
var state_31904__$1 = (function (){var statearr_31913 = state_31904;
(statearr_31913[(9)] = inst_31881);

(statearr_31913[(12)] = inst_31895);

return statearr_31913;
})();
var statearr_31914_31925 = state_31904__$1;
(statearr_31914_31925[(2)] = null);

(statearr_31914_31925[(1)] = (2));


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
});})(c__30836__auto___31919,out))
;
return ((function (switch__30813__auto__,c__30836__auto___31919,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto____0 = (function (){
var statearr_31915 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31915[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto__);

(statearr_31915[(1)] = (1));

return statearr_31915;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto____1 = (function (state_31904){
while(true){
var ret_value__30815__auto__ = (function (){try{while(true){
var result__30816__auto__ = switch__30813__auto__.call(null,state_31904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30816__auto__;
}
break;
}
}catch (e31916){if((e31916 instanceof Object)){
var ex__30817__auto__ = e31916;
var statearr_31917_31926 = state_31904;
(statearr_31917_31926[(5)] = ex__30817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31927 = state_31904;
state_31904 = G__31927;
continue;
} else {
return ret_value__30815__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto__ = function(state_31904){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto____1.call(this,state_31904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30814__auto__;
})()
;})(switch__30813__auto__,c__30836__auto___31919,out))
})();
var state__30838__auto__ = (function (){var statearr_31918 = f__30837__auto__.call(null);
(statearr_31918[(6)] = c__30836__auto___31919);

return statearr_31918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30838__auto__);
});})(c__30836__auto___31919,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31928,opts){
var map__31929 = p__31928;
var map__31929__$1 = (((((!((map__31929 == null))))?(((((map__31929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31929):map__31929);
var eval_body = cljs.core.get.call(null,map__31929__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31929__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e31931){var e = e31931;
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
return (function (p1__31932_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31932_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__31933){
var vec__31934 = p__31933;
var k = cljs.core.nth.call(null,vec__31934,(0),null);
var v = cljs.core.nth.call(null,vec__31934,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__31937){
var vec__31938 = p__31937;
var k = cljs.core.nth.call(null,vec__31938,(0),null);
var v = cljs.core.nth.call(null,vec__31938,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31944,p__31945){
var map__31946 = p__31944;
var map__31946__$1 = (((((!((map__31946 == null))))?(((((map__31946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31946):map__31946);
var opts = map__31946__$1;
var before_jsload = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31947 = p__31945;
var map__31947__$1 = (((((!((map__31947 == null))))?(((((map__31947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31947):map__31947);
var msg = map__31947__$1;
var files = cljs.core.get.call(null,map__31947__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31947__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31947__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30836__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30837__auto__ = (function (){var switch__30813__auto__ = ((function (c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32101){
var state_val_32102 = (state_32101[(1)]);
if((state_val_32102 === (7))){
var inst_31963 = (state_32101[(7)]);
var inst_31962 = (state_32101[(8)]);
var inst_31964 = (state_32101[(9)]);
var inst_31961 = (state_32101[(10)]);
var inst_31969 = cljs.core._nth.call(null,inst_31962,inst_31964);
var inst_31970 = figwheel.client.file_reloading.eval_body.call(null,inst_31969,opts);
var inst_31971 = (inst_31964 + (1));
var tmp32103 = inst_31963;
var tmp32104 = inst_31962;
var tmp32105 = inst_31961;
var inst_31961__$1 = tmp32105;
var inst_31962__$1 = tmp32104;
var inst_31963__$1 = tmp32103;
var inst_31964__$1 = inst_31971;
var state_32101__$1 = (function (){var statearr_32106 = state_32101;
(statearr_32106[(7)] = inst_31963__$1);

(statearr_32106[(8)] = inst_31962__$1);

(statearr_32106[(9)] = inst_31964__$1);

(statearr_32106[(11)] = inst_31970);

(statearr_32106[(10)] = inst_31961__$1);

return statearr_32106;
})();
var statearr_32107_32190 = state_32101__$1;
(statearr_32107_32190[(2)] = null);

(statearr_32107_32190[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (20))){
var inst_32004 = (state_32101[(12)]);
var inst_32012 = figwheel.client.file_reloading.sort_files.call(null,inst_32004);
var state_32101__$1 = state_32101;
var statearr_32108_32191 = state_32101__$1;
(statearr_32108_32191[(2)] = inst_32012);

(statearr_32108_32191[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (27))){
var state_32101__$1 = state_32101;
var statearr_32109_32192 = state_32101__$1;
(statearr_32109_32192[(2)] = null);

(statearr_32109_32192[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (1))){
var inst_31953 = (state_32101[(13)]);
var inst_31950 = before_jsload.call(null,files);
var inst_31951 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31952 = (function (){return ((function (inst_31953,inst_31950,inst_31951,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31941_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31941_SHARP_);
});
;})(inst_31953,inst_31950,inst_31951,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31953__$1 = cljs.core.filter.call(null,inst_31952,files);
var inst_31954 = cljs.core.not_empty.call(null,inst_31953__$1);
var state_32101__$1 = (function (){var statearr_32110 = state_32101;
(statearr_32110[(13)] = inst_31953__$1);

(statearr_32110[(14)] = inst_31950);

(statearr_32110[(15)] = inst_31951);

return statearr_32110;
})();
if(cljs.core.truth_(inst_31954)){
var statearr_32111_32193 = state_32101__$1;
(statearr_32111_32193[(1)] = (2));

} else {
var statearr_32112_32194 = state_32101__$1;
(statearr_32112_32194[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (24))){
var state_32101__$1 = state_32101;
var statearr_32113_32195 = state_32101__$1;
(statearr_32113_32195[(2)] = null);

(statearr_32113_32195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (39))){
var inst_32054 = (state_32101[(16)]);
var state_32101__$1 = state_32101;
var statearr_32114_32196 = state_32101__$1;
(statearr_32114_32196[(2)] = inst_32054);

(statearr_32114_32196[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (46))){
var inst_32096 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32115_32197 = state_32101__$1;
(statearr_32115_32197[(2)] = inst_32096);

(statearr_32115_32197[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (4))){
var inst_31998 = (state_32101[(2)]);
var inst_31999 = cljs.core.List.EMPTY;
var inst_32000 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31999);
var inst_32001 = (function (){return ((function (inst_31998,inst_31999,inst_32000,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31942_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31942_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31942_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__31942_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_31998,inst_31999,inst_32000,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32002 = cljs.core.filter.call(null,inst_32001,files);
var inst_32003 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32004 = cljs.core.concat.call(null,inst_32002,inst_32003);
var state_32101__$1 = (function (){var statearr_32116 = state_32101;
(statearr_32116[(17)] = inst_32000);

(statearr_32116[(12)] = inst_32004);

(statearr_32116[(18)] = inst_31998);

return statearr_32116;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32117_32198 = state_32101__$1;
(statearr_32117_32198[(1)] = (16));

} else {
var statearr_32118_32199 = state_32101__$1;
(statearr_32118_32199[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (15))){
var inst_31988 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32119_32200 = state_32101__$1;
(statearr_32119_32200[(2)] = inst_31988);

(statearr_32119_32200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (21))){
var inst_32014 = (state_32101[(19)]);
var inst_32014__$1 = (state_32101[(2)]);
var inst_32015 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32014__$1);
var state_32101__$1 = (function (){var statearr_32120 = state_32101;
(statearr_32120[(19)] = inst_32014__$1);

return statearr_32120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32101__$1,(22),inst_32015);
} else {
if((state_val_32102 === (31))){
var inst_32099 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32101__$1,inst_32099);
} else {
if((state_val_32102 === (32))){
var inst_32054 = (state_32101[(16)]);
var inst_32059 = inst_32054.cljs$lang$protocol_mask$partition0$;
var inst_32060 = (inst_32059 & (64));
var inst_32061 = inst_32054.cljs$core$ISeq$;
var inst_32062 = (cljs.core.PROTOCOL_SENTINEL === inst_32061);
var inst_32063 = ((inst_32060) || (inst_32062));
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32063)){
var statearr_32121_32201 = state_32101__$1;
(statearr_32121_32201[(1)] = (35));

} else {
var statearr_32122_32202 = state_32101__$1;
(statearr_32122_32202[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (40))){
var inst_32076 = (state_32101[(20)]);
var inst_32075 = (state_32101[(2)]);
var inst_32076__$1 = cljs.core.get.call(null,inst_32075,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32077 = cljs.core.get.call(null,inst_32075,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32078 = cljs.core.not_empty.call(null,inst_32076__$1);
var state_32101__$1 = (function (){var statearr_32123 = state_32101;
(statearr_32123[(20)] = inst_32076__$1);

(statearr_32123[(21)] = inst_32077);

return statearr_32123;
})();
if(cljs.core.truth_(inst_32078)){
var statearr_32124_32203 = state_32101__$1;
(statearr_32124_32203[(1)] = (41));

} else {
var statearr_32125_32204 = state_32101__$1;
(statearr_32125_32204[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (33))){
var state_32101__$1 = state_32101;
var statearr_32126_32205 = state_32101__$1;
(statearr_32126_32205[(2)] = false);

(statearr_32126_32205[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (13))){
var inst_31974 = (state_32101[(22)]);
var inst_31978 = cljs.core.chunk_first.call(null,inst_31974);
var inst_31979 = cljs.core.chunk_rest.call(null,inst_31974);
var inst_31980 = cljs.core.count.call(null,inst_31978);
var inst_31961 = inst_31979;
var inst_31962 = inst_31978;
var inst_31963 = inst_31980;
var inst_31964 = (0);
var state_32101__$1 = (function (){var statearr_32127 = state_32101;
(statearr_32127[(7)] = inst_31963);

(statearr_32127[(8)] = inst_31962);

(statearr_32127[(9)] = inst_31964);

(statearr_32127[(10)] = inst_31961);

return statearr_32127;
})();
var statearr_32128_32206 = state_32101__$1;
(statearr_32128_32206[(2)] = null);

(statearr_32128_32206[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (22))){
var inst_32014 = (state_32101[(19)]);
var inst_32018 = (state_32101[(23)]);
var inst_32022 = (state_32101[(24)]);
var inst_32017 = (state_32101[(25)]);
var inst_32017__$1 = (state_32101[(2)]);
var inst_32018__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32017__$1);
var inst_32019 = (function (){var all_files = inst_32014;
var res_SINGLEQUOTE_ = inst_32017__$1;
var res = inst_32018__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32014,inst_32018,inst_32022,inst_32017,inst_32017__$1,inst_32018__$1,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__31943_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31943_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32014,inst_32018,inst_32022,inst_32017,inst_32017__$1,inst_32018__$1,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32020 = cljs.core.filter.call(null,inst_32019,inst_32017__$1);
var inst_32021 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32022__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32021);
var inst_32023 = cljs.core.not_empty.call(null,inst_32022__$1);
var state_32101__$1 = (function (){var statearr_32129 = state_32101;
(statearr_32129[(23)] = inst_32018__$1);

(statearr_32129[(26)] = inst_32020);

(statearr_32129[(24)] = inst_32022__$1);

(statearr_32129[(25)] = inst_32017__$1);

return statearr_32129;
})();
if(cljs.core.truth_(inst_32023)){
var statearr_32130_32207 = state_32101__$1;
(statearr_32130_32207[(1)] = (23));

} else {
var statearr_32131_32208 = state_32101__$1;
(statearr_32131_32208[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (36))){
var state_32101__$1 = state_32101;
var statearr_32132_32209 = state_32101__$1;
(statearr_32132_32209[(2)] = false);

(statearr_32132_32209[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (41))){
var inst_32076 = (state_32101[(20)]);
var inst_32080 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32081 = cljs.core.map.call(null,inst_32080,inst_32076);
var inst_32082 = cljs.core.pr_str.call(null,inst_32081);
var inst_32083 = ["figwheel-no-load meta-data: ",inst_32082].join('');
var inst_32084 = figwheel.client.utils.log.call(null,inst_32083);
var state_32101__$1 = state_32101;
var statearr_32133_32210 = state_32101__$1;
(statearr_32133_32210[(2)] = inst_32084);

(statearr_32133_32210[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (43))){
var inst_32077 = (state_32101[(21)]);
var inst_32087 = (state_32101[(2)]);
var inst_32088 = cljs.core.not_empty.call(null,inst_32077);
var state_32101__$1 = (function (){var statearr_32134 = state_32101;
(statearr_32134[(27)] = inst_32087);

return statearr_32134;
})();
if(cljs.core.truth_(inst_32088)){
var statearr_32135_32211 = state_32101__$1;
(statearr_32135_32211[(1)] = (44));

} else {
var statearr_32136_32212 = state_32101__$1;
(statearr_32136_32212[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (29))){
var inst_32014 = (state_32101[(19)]);
var inst_32018 = (state_32101[(23)]);
var inst_32020 = (state_32101[(26)]);
var inst_32022 = (state_32101[(24)]);
var inst_32054 = (state_32101[(16)]);
var inst_32017 = (state_32101[(25)]);
var inst_32050 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32053 = (function (){var all_files = inst_32014;
var res_SINGLEQUOTE_ = inst_32017;
var res = inst_32018;
var files_not_loaded = inst_32020;
var dependencies_that_loaded = inst_32022;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32020,inst_32022,inst_32054,inst_32017,inst_32050,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32052){
var map__32137 = p__32052;
var map__32137__$1 = (((((!((map__32137 == null))))?(((((map__32137.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32137.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32137):map__32137);
var namespace = cljs.core.get.call(null,map__32137__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32020,inst_32022,inst_32054,inst_32017,inst_32050,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32054__$1 = cljs.core.group_by.call(null,inst_32053,inst_32020);
var inst_32056 = (inst_32054__$1 == null);
var inst_32057 = cljs.core.not.call(null,inst_32056);
var state_32101__$1 = (function (){var statearr_32139 = state_32101;
(statearr_32139[(28)] = inst_32050);

(statearr_32139[(16)] = inst_32054__$1);

return statearr_32139;
})();
if(inst_32057){
var statearr_32140_32213 = state_32101__$1;
(statearr_32140_32213[(1)] = (32));

} else {
var statearr_32141_32214 = state_32101__$1;
(statearr_32141_32214[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (44))){
var inst_32077 = (state_32101[(21)]);
var inst_32090 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32077);
var inst_32091 = cljs.core.pr_str.call(null,inst_32090);
var inst_32092 = ["not required: ",inst_32091].join('');
var inst_32093 = figwheel.client.utils.log.call(null,inst_32092);
var state_32101__$1 = state_32101;
var statearr_32142_32215 = state_32101__$1;
(statearr_32142_32215[(2)] = inst_32093);

(statearr_32142_32215[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (6))){
var inst_31995 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32143_32216 = state_32101__$1;
(statearr_32143_32216[(2)] = inst_31995);

(statearr_32143_32216[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (28))){
var inst_32020 = (state_32101[(26)]);
var inst_32047 = (state_32101[(2)]);
var inst_32048 = cljs.core.not_empty.call(null,inst_32020);
var state_32101__$1 = (function (){var statearr_32144 = state_32101;
(statearr_32144[(29)] = inst_32047);

return statearr_32144;
})();
if(cljs.core.truth_(inst_32048)){
var statearr_32145_32217 = state_32101__$1;
(statearr_32145_32217[(1)] = (29));

} else {
var statearr_32146_32218 = state_32101__$1;
(statearr_32146_32218[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (25))){
var inst_32018 = (state_32101[(23)]);
var inst_32034 = (state_32101[(2)]);
var inst_32035 = cljs.core.not_empty.call(null,inst_32018);
var state_32101__$1 = (function (){var statearr_32147 = state_32101;
(statearr_32147[(30)] = inst_32034);

return statearr_32147;
})();
if(cljs.core.truth_(inst_32035)){
var statearr_32148_32219 = state_32101__$1;
(statearr_32148_32219[(1)] = (26));

} else {
var statearr_32149_32220 = state_32101__$1;
(statearr_32149_32220[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (34))){
var inst_32070 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32070)){
var statearr_32150_32221 = state_32101__$1;
(statearr_32150_32221[(1)] = (38));

} else {
var statearr_32151_32222 = state_32101__$1;
(statearr_32151_32222[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (17))){
var state_32101__$1 = state_32101;
var statearr_32152_32223 = state_32101__$1;
(statearr_32152_32223[(2)] = recompile_dependents);

(statearr_32152_32223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (3))){
var state_32101__$1 = state_32101;
var statearr_32153_32224 = state_32101__$1;
(statearr_32153_32224[(2)] = null);

(statearr_32153_32224[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (12))){
var inst_31991 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32154_32225 = state_32101__$1;
(statearr_32154_32225[(2)] = inst_31991);

(statearr_32154_32225[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (2))){
var inst_31953 = (state_32101[(13)]);
var inst_31960 = cljs.core.seq.call(null,inst_31953);
var inst_31961 = inst_31960;
var inst_31962 = null;
var inst_31963 = (0);
var inst_31964 = (0);
var state_32101__$1 = (function (){var statearr_32155 = state_32101;
(statearr_32155[(7)] = inst_31963);

(statearr_32155[(8)] = inst_31962);

(statearr_32155[(9)] = inst_31964);

(statearr_32155[(10)] = inst_31961);

return statearr_32155;
})();
var statearr_32156_32226 = state_32101__$1;
(statearr_32156_32226[(2)] = null);

(statearr_32156_32226[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (23))){
var inst_32014 = (state_32101[(19)]);
var inst_32018 = (state_32101[(23)]);
var inst_32020 = (state_32101[(26)]);
var inst_32022 = (state_32101[(24)]);
var inst_32017 = (state_32101[(25)]);
var inst_32025 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32027 = (function (){var all_files = inst_32014;
var res_SINGLEQUOTE_ = inst_32017;
var res = inst_32018;
var files_not_loaded = inst_32020;
var dependencies_that_loaded = inst_32022;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32020,inst_32022,inst_32017,inst_32025,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32026){
var map__32157 = p__32026;
var map__32157__$1 = (((((!((map__32157 == null))))?(((((map__32157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32157):map__32157);
var request_url = cljs.core.get.call(null,map__32157__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32020,inst_32022,inst_32017,inst_32025,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32028 = cljs.core.reverse.call(null,inst_32022);
var inst_32029 = cljs.core.map.call(null,inst_32027,inst_32028);
var inst_32030 = cljs.core.pr_str.call(null,inst_32029);
var inst_32031 = figwheel.client.utils.log.call(null,inst_32030);
var state_32101__$1 = (function (){var statearr_32159 = state_32101;
(statearr_32159[(31)] = inst_32025);

return statearr_32159;
})();
var statearr_32160_32227 = state_32101__$1;
(statearr_32160_32227[(2)] = inst_32031);

(statearr_32160_32227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (35))){
var state_32101__$1 = state_32101;
var statearr_32161_32228 = state_32101__$1;
(statearr_32161_32228[(2)] = true);

(statearr_32161_32228[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (19))){
var inst_32004 = (state_32101[(12)]);
var inst_32010 = figwheel.client.file_reloading.expand_files.call(null,inst_32004);
var state_32101__$1 = state_32101;
var statearr_32162_32229 = state_32101__$1;
(statearr_32162_32229[(2)] = inst_32010);

(statearr_32162_32229[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (11))){
var state_32101__$1 = state_32101;
var statearr_32163_32230 = state_32101__$1;
(statearr_32163_32230[(2)] = null);

(statearr_32163_32230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (9))){
var inst_31993 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32164_32231 = state_32101__$1;
(statearr_32164_32231[(2)] = inst_31993);

(statearr_32164_32231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (5))){
var inst_31963 = (state_32101[(7)]);
var inst_31964 = (state_32101[(9)]);
var inst_31966 = (inst_31964 < inst_31963);
var inst_31967 = inst_31966;
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_31967)){
var statearr_32165_32232 = state_32101__$1;
(statearr_32165_32232[(1)] = (7));

} else {
var statearr_32166_32233 = state_32101__$1;
(statearr_32166_32233[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (14))){
var inst_31974 = (state_32101[(22)]);
var inst_31983 = cljs.core.first.call(null,inst_31974);
var inst_31984 = figwheel.client.file_reloading.eval_body.call(null,inst_31983,opts);
var inst_31985 = cljs.core.next.call(null,inst_31974);
var inst_31961 = inst_31985;
var inst_31962 = null;
var inst_31963 = (0);
var inst_31964 = (0);
var state_32101__$1 = (function (){var statearr_32167 = state_32101;
(statearr_32167[(7)] = inst_31963);

(statearr_32167[(8)] = inst_31962);

(statearr_32167[(9)] = inst_31964);

(statearr_32167[(32)] = inst_31984);

(statearr_32167[(10)] = inst_31961);

return statearr_32167;
})();
var statearr_32168_32234 = state_32101__$1;
(statearr_32168_32234[(2)] = null);

(statearr_32168_32234[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (45))){
var state_32101__$1 = state_32101;
var statearr_32169_32235 = state_32101__$1;
(statearr_32169_32235[(2)] = null);

(statearr_32169_32235[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (26))){
var inst_32014 = (state_32101[(19)]);
var inst_32018 = (state_32101[(23)]);
var inst_32020 = (state_32101[(26)]);
var inst_32022 = (state_32101[(24)]);
var inst_32017 = (state_32101[(25)]);
var inst_32037 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32039 = (function (){var all_files = inst_32014;
var res_SINGLEQUOTE_ = inst_32017;
var res = inst_32018;
var files_not_loaded = inst_32020;
var dependencies_that_loaded = inst_32022;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32020,inst_32022,inst_32017,inst_32037,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32038){
var map__32170 = p__32038;
var map__32170__$1 = (((((!((map__32170 == null))))?(((((map__32170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32170):map__32170);
var namespace = cljs.core.get.call(null,map__32170__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32170__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32020,inst_32022,inst_32017,inst_32037,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32040 = cljs.core.map.call(null,inst_32039,inst_32018);
var inst_32041 = cljs.core.pr_str.call(null,inst_32040);
var inst_32042 = figwheel.client.utils.log.call(null,inst_32041);
var inst_32043 = (function (){var all_files = inst_32014;
var res_SINGLEQUOTE_ = inst_32017;
var res = inst_32018;
var files_not_loaded = inst_32020;
var dependencies_that_loaded = inst_32022;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32020,inst_32022,inst_32017,inst_32037,inst_32039,inst_32040,inst_32041,inst_32042,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32014,inst_32018,inst_32020,inst_32022,inst_32017,inst_32037,inst_32039,inst_32040,inst_32041,inst_32042,state_val_32102,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32044 = setTimeout(inst_32043,(10));
var state_32101__$1 = (function (){var statearr_32172 = state_32101;
(statearr_32172[(33)] = inst_32042);

(statearr_32172[(34)] = inst_32037);

return statearr_32172;
})();
var statearr_32173_32236 = state_32101__$1;
(statearr_32173_32236[(2)] = inst_32044);

(statearr_32173_32236[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (16))){
var state_32101__$1 = state_32101;
var statearr_32174_32237 = state_32101__$1;
(statearr_32174_32237[(2)] = reload_dependents);

(statearr_32174_32237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (38))){
var inst_32054 = (state_32101[(16)]);
var inst_32072 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32054);
var state_32101__$1 = state_32101;
var statearr_32175_32238 = state_32101__$1;
(statearr_32175_32238[(2)] = inst_32072);

(statearr_32175_32238[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (30))){
var state_32101__$1 = state_32101;
var statearr_32176_32239 = state_32101__$1;
(statearr_32176_32239[(2)] = null);

(statearr_32176_32239[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (10))){
var inst_31974 = (state_32101[(22)]);
var inst_31976 = cljs.core.chunked_seq_QMARK_.call(null,inst_31974);
var state_32101__$1 = state_32101;
if(inst_31976){
var statearr_32177_32240 = state_32101__$1;
(statearr_32177_32240[(1)] = (13));

} else {
var statearr_32178_32241 = state_32101__$1;
(statearr_32178_32241[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (18))){
var inst_32008 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
if(cljs.core.truth_(inst_32008)){
var statearr_32179_32242 = state_32101__$1;
(statearr_32179_32242[(1)] = (19));

} else {
var statearr_32180_32243 = state_32101__$1;
(statearr_32180_32243[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (42))){
var state_32101__$1 = state_32101;
var statearr_32181_32244 = state_32101__$1;
(statearr_32181_32244[(2)] = null);

(statearr_32181_32244[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (37))){
var inst_32067 = (state_32101[(2)]);
var state_32101__$1 = state_32101;
var statearr_32182_32245 = state_32101__$1;
(statearr_32182_32245[(2)] = inst_32067);

(statearr_32182_32245[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32102 === (8))){
var inst_31974 = (state_32101[(22)]);
var inst_31961 = (state_32101[(10)]);
var inst_31974__$1 = cljs.core.seq.call(null,inst_31961);
var state_32101__$1 = (function (){var statearr_32183 = state_32101;
(statearr_32183[(22)] = inst_31974__$1);

return statearr_32183;
})();
if(inst_31974__$1){
var statearr_32184_32246 = state_32101__$1;
(statearr_32184_32246[(1)] = (10));

} else {
var statearr_32185_32247 = state_32101__$1;
(statearr_32185_32247[(1)] = (11));

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
});})(c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30813__auto__,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto____0 = (function (){
var statearr_32186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32186[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto__);

(statearr_32186[(1)] = (1));

return statearr_32186;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto____1 = (function (state_32101){
while(true){
var ret_value__30815__auto__ = (function (){try{while(true){
var result__30816__auto__ = switch__30813__auto__.call(null,state_32101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30816__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30816__auto__;
}
break;
}
}catch (e32187){if((e32187 instanceof Object)){
var ex__30817__auto__ = e32187;
var statearr_32188_32248 = state_32101;
(statearr_32188_32248[(5)] = ex__30817__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32187;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32249 = state_32101;
state_32101 = G__32249;
continue;
} else {
return ret_value__30815__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto__ = function(state_32101){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto____1.call(this,state_32101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30814__auto__;
})()
;})(switch__30813__auto__,c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30838__auto__ = (function (){var statearr_32189 = f__30837__auto__.call(null);
(statearr_32189[(6)] = c__30836__auto__);

return statearr_32189;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30838__auto__);
});})(c__30836__auto__,map__31946,map__31946__$1,opts,before_jsload,on_jsload,reload_dependents,map__31947,map__31947__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30836__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32252,link){
var map__32253 = p__32252;
var map__32253__$1 = (((((!((map__32253 == null))))?(((((map__32253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32253):map__32253);
var file = cljs.core.get.call(null,map__32253__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__32253,map__32253__$1,file){
return (function (p1__32250_SHARP_,p2__32251_SHARP_){
if(cljs.core._EQ_.call(null,p1__32250_SHARP_,p2__32251_SHARP_)){
return p1__32250_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__32253,map__32253__$1,file))
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
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32256){
var map__32257 = p__32256;
var map__32257__$1 = (((((!((map__32257 == null))))?(((((map__32257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32257):map__32257);
var match_length = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32257__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32255_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32255_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32259_SHARP_,p2__32260_SHARP_){
return cljs.core.assoc.call(null,p1__32259_SHARP_,cljs.core.get.call(null,p2__32260_SHARP_,key),p2__32260_SHARP_);
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
var loaded_f_datas_32261 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32261);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32261);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32262,p__32263){
var map__32264 = p__32262;
var map__32264__$1 = (((((!((map__32264 == null))))?(((((map__32264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32264.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32264):map__32264);
var on_cssload = cljs.core.get.call(null,map__32264__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32265 = p__32263;
var map__32265__$1 = (((((!((map__32265 == null))))?(((((map__32265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32265):map__32265);
var files_msg = map__32265__$1;
var files = cljs.core.get.call(null,map__32265__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1620507841478
