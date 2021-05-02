// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9566__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9566 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9567__i = 0, G__9567__a = new Array(arguments.length -  0);
while (G__9567__i < G__9567__a.length) {G__9567__a[G__9567__i] = arguments[G__9567__i + 0]; ++G__9567__i;}
  args = new cljs.core.IndexedSeq(G__9567__a,0,null);
} 
return G__9566__delegate.call(this,args);};
G__9566.cljs$lang$maxFixedArity = 0;
G__9566.cljs$lang$applyTo = (function (arglist__9568){
var args = cljs.core.seq(arglist__9568);
return G__9566__delegate(args);
});
G__9566.cljs$core$IFn$_invoke$arity$variadic = G__9566__delegate;
return G__9566;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9569__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__9569 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9570__i = 0, G__9570__a = new Array(arguments.length -  0);
while (G__9570__i < G__9570__a.length) {G__9570__a[G__9570__i] = arguments[G__9570__i + 0]; ++G__9570__i;}
  args = new cljs.core.IndexedSeq(G__9570__a,0,null);
} 
return G__9569__delegate.call(this,args);};
G__9569.cljs$lang$maxFixedArity = 0;
G__9569.cljs$lang$applyTo = (function (arglist__9571){
var args = cljs.core.seq(arglist__9571);
return G__9569__delegate(args);
});
G__9569.cljs$core$IFn$_invoke$arity$variadic = G__9569__delegate;
return G__9569;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
