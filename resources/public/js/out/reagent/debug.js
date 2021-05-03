// Compiled by ClojureScript 1.10.520 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__29074__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29075__i = 0, G__29075__a = new Array(arguments.length -  0);
while (G__29075__i < G__29075__a.length) {G__29075__a[G__29075__i] = arguments[G__29075__i + 0]; ++G__29075__i;}
  args = new cljs.core.IndexedSeq(G__29075__a,0,null);
} 
return G__29074__delegate.call(this,args);};
G__29074.cljs$lang$maxFixedArity = 0;
G__29074.cljs$lang$applyTo = (function (arglist__29076){
var args = cljs.core.seq(arglist__29076);
return G__29074__delegate(args);
});
G__29074.cljs$core$IFn$_invoke$arity$variadic = G__29074__delegate;
return G__29074;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29077__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29077 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29078__i = 0, G__29078__a = new Array(arguments.length -  0);
while (G__29078__i < G__29078__a.length) {G__29078__a[G__29078__i] = arguments[G__29078__i + 0]; ++G__29078__i;}
  args = new cljs.core.IndexedSeq(G__29078__a,0,null);
} 
return G__29077__delegate.call(this,args);};
G__29077.cljs$lang$maxFixedArity = 0;
G__29077.cljs$lang$applyTo = (function (arglist__29079){
var args = cljs.core.seq(arglist__29079);
return G__29077__delegate(args);
});
G__29077.cljs$core$IFn$_invoke$arity$variadic = G__29077__delegate;
return G__29077;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1620066994826
