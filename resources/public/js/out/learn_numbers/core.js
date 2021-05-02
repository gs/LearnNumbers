// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('learn_numbers.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_();
learn_numbers.core.by_id = goog.dom.getElement;
if((typeof learn_numbers !== 'undefined') && (typeof learn_numbers.core !== 'undefined') && (typeof learn_numbers.core.number !== 'undefined')){
} else {
learn_numbers.core.number = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_int((100)));
}
learn_numbers.core.change_me = (function learn_numbers$core$change_me(){
return cljs.core.rand_int((100));
});
learn_numbers.core.app_container = (function learn_numbers$core$app_container(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$center,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Nauch sie liczb w roznych jezykach"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,cljs.core.deref(learn_numbers.core.number)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$src,"flags/pl.png",cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$height,"50px",cljs.core.cst$kw$on_DASH_click,(function (){
return alert(cljs.core.deref(learn_numbers.core.number));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"flags/de.png",cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$height,"50px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"flags/uk.png",cljs.core.cst$kw$width,"50px",cljs.core.cst$kw$height,"50px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"button",cljs.core.cst$kw$value,"One more time",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(learn_numbers.core.number,learn_numbers.core.change_me);
})], null)], null)], null);
});
reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learn_numbers.core.app_container], null),document.getElementById("app"));
learn_numbers.core.on_js_reload = (function learn_numbers$core$on_js_reload(){
return null;
});
