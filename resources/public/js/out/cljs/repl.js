// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42740){
var map__42741 = p__42740;
var map__42741__$1 = (((((!((map__42741 == null))))?(((((map__42741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42741):map__42741);
var m = map__42741__$1;
var n = cljs.core.get.call(null,map__42741__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42741__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42743_42775 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42744_42776 = null;
var count__42745_42777 = (0);
var i__42746_42778 = (0);
while(true){
if((i__42746_42778 < count__42745_42777)){
var f_42779 = cljs.core._nth.call(null,chunk__42744_42776,i__42746_42778);
cljs.core.println.call(null,"  ",f_42779);


var G__42780 = seq__42743_42775;
var G__42781 = chunk__42744_42776;
var G__42782 = count__42745_42777;
var G__42783 = (i__42746_42778 + (1));
seq__42743_42775 = G__42780;
chunk__42744_42776 = G__42781;
count__42745_42777 = G__42782;
i__42746_42778 = G__42783;
continue;
} else {
var temp__5735__auto___42784 = cljs.core.seq.call(null,seq__42743_42775);
if(temp__5735__auto___42784){
var seq__42743_42785__$1 = temp__5735__auto___42784;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42743_42785__$1)){
var c__4550__auto___42786 = cljs.core.chunk_first.call(null,seq__42743_42785__$1);
var G__42787 = cljs.core.chunk_rest.call(null,seq__42743_42785__$1);
var G__42788 = c__4550__auto___42786;
var G__42789 = cljs.core.count.call(null,c__4550__auto___42786);
var G__42790 = (0);
seq__42743_42775 = G__42787;
chunk__42744_42776 = G__42788;
count__42745_42777 = G__42789;
i__42746_42778 = G__42790;
continue;
} else {
var f_42791 = cljs.core.first.call(null,seq__42743_42785__$1);
cljs.core.println.call(null,"  ",f_42791);


var G__42792 = cljs.core.next.call(null,seq__42743_42785__$1);
var G__42793 = null;
var G__42794 = (0);
var G__42795 = (0);
seq__42743_42775 = G__42792;
chunk__42744_42776 = G__42793;
count__42745_42777 = G__42794;
i__42746_42778 = G__42795;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42796 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42796);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42796)))?cljs.core.second.call(null,arglists_42796):arglists_42796));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42747_42797 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42748_42798 = null;
var count__42749_42799 = (0);
var i__42750_42800 = (0);
while(true){
if((i__42750_42800 < count__42749_42799)){
var vec__42761_42801 = cljs.core._nth.call(null,chunk__42748_42798,i__42750_42800);
var name_42802 = cljs.core.nth.call(null,vec__42761_42801,(0),null);
var map__42764_42803 = cljs.core.nth.call(null,vec__42761_42801,(1),null);
var map__42764_42804__$1 = (((((!((map__42764_42803 == null))))?(((((map__42764_42803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42764_42803.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42764_42803):map__42764_42803);
var doc_42805 = cljs.core.get.call(null,map__42764_42804__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42806 = cljs.core.get.call(null,map__42764_42804__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42802);

cljs.core.println.call(null," ",arglists_42806);

if(cljs.core.truth_(doc_42805)){
cljs.core.println.call(null," ",doc_42805);
} else {
}


var G__42807 = seq__42747_42797;
var G__42808 = chunk__42748_42798;
var G__42809 = count__42749_42799;
var G__42810 = (i__42750_42800 + (1));
seq__42747_42797 = G__42807;
chunk__42748_42798 = G__42808;
count__42749_42799 = G__42809;
i__42750_42800 = G__42810;
continue;
} else {
var temp__5735__auto___42811 = cljs.core.seq.call(null,seq__42747_42797);
if(temp__5735__auto___42811){
var seq__42747_42812__$1 = temp__5735__auto___42811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42747_42812__$1)){
var c__4550__auto___42813 = cljs.core.chunk_first.call(null,seq__42747_42812__$1);
var G__42814 = cljs.core.chunk_rest.call(null,seq__42747_42812__$1);
var G__42815 = c__4550__auto___42813;
var G__42816 = cljs.core.count.call(null,c__4550__auto___42813);
var G__42817 = (0);
seq__42747_42797 = G__42814;
chunk__42748_42798 = G__42815;
count__42749_42799 = G__42816;
i__42750_42800 = G__42817;
continue;
} else {
var vec__42766_42818 = cljs.core.first.call(null,seq__42747_42812__$1);
var name_42819 = cljs.core.nth.call(null,vec__42766_42818,(0),null);
var map__42769_42820 = cljs.core.nth.call(null,vec__42766_42818,(1),null);
var map__42769_42821__$1 = (((((!((map__42769_42820 == null))))?(((((map__42769_42820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42769_42820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42769_42820):map__42769_42820);
var doc_42822 = cljs.core.get.call(null,map__42769_42821__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42823 = cljs.core.get.call(null,map__42769_42821__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42819);

cljs.core.println.call(null," ",arglists_42823);

if(cljs.core.truth_(doc_42822)){
cljs.core.println.call(null," ",doc_42822);
} else {
}


var G__42824 = cljs.core.next.call(null,seq__42747_42812__$1);
var G__42825 = null;
var G__42826 = (0);
var G__42827 = (0);
seq__42747_42797 = G__42824;
chunk__42748_42798 = G__42825;
count__42749_42799 = G__42826;
i__42750_42800 = G__42827;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__42771 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42772 = null;
var count__42773 = (0);
var i__42774 = (0);
while(true){
if((i__42774 < count__42773)){
var role = cljs.core._nth.call(null,chunk__42772,i__42774);
var temp__5735__auto___42828__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42828__$1)){
var spec_42829 = temp__5735__auto___42828__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42829));
} else {
}


var G__42830 = seq__42771;
var G__42831 = chunk__42772;
var G__42832 = count__42773;
var G__42833 = (i__42774 + (1));
seq__42771 = G__42830;
chunk__42772 = G__42831;
count__42773 = G__42832;
i__42774 = G__42833;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__42771);
if(temp__5735__auto____$1){
var seq__42771__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42771__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__42771__$1);
var G__42834 = cljs.core.chunk_rest.call(null,seq__42771__$1);
var G__42835 = c__4550__auto__;
var G__42836 = cljs.core.count.call(null,c__4550__auto__);
var G__42837 = (0);
seq__42771 = G__42834;
chunk__42772 = G__42835;
count__42773 = G__42836;
i__42774 = G__42837;
continue;
} else {
var role = cljs.core.first.call(null,seq__42771__$1);
var temp__5735__auto___42838__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___42838__$2)){
var spec_42839 = temp__5735__auto___42838__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42839));
} else {
}


var G__42840 = cljs.core.next.call(null,seq__42771__$1);
var G__42841 = null;
var G__42842 = (0);
var G__42843 = (0);
seq__42771 = G__42840;
chunk__42772 = G__42841;
count__42773 = G__42842;
i__42774 = G__42843;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__42844 = cljs.core.conj.call(null,via,t);
var G__42845 = cljs.core.ex_cause.call(null,t);
via = G__42844;
t = G__42845;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__42848 = datafied_throwable;
var map__42848__$1 = (((((!((map__42848 == null))))?(((((map__42848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42848):map__42848);
var via = cljs.core.get.call(null,map__42848__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__42848__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__42848__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__42849 = cljs.core.last.call(null,via);
var map__42849__$1 = (((((!((map__42849 == null))))?(((((map__42849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42849):map__42849);
var type = cljs.core.get.call(null,map__42849__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__42849__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__42849__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__42850 = data;
var map__42850__$1 = (((((!((map__42850 == null))))?(((((map__42850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42850):map__42850);
var problems = cljs.core.get.call(null,map__42850__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__42850__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__42850__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__42851 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__42851__$1 = (((((!((map__42851 == null))))?(((((map__42851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42851):map__42851);
var top_data = map__42851__$1;
var source = cljs.core.get.call(null,map__42851__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__42856 = phase;
var G__42856__$1 = (((G__42856 instanceof cljs.core.Keyword))?G__42856.fqn:null);
switch (G__42856__$1) {
case "read-source":
var map__42857 = data;
var map__42857__$1 = (((((!((map__42857 == null))))?(((((map__42857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42857):map__42857);
var line = cljs.core.get.call(null,map__42857__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__42857__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__42859 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__42859__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__42859,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42859);
var G__42859__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__42859__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42859__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__42859__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42859__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__42860 = top_data;
var G__42860__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__42860,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__42860);
var G__42860__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__42860__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__42860__$1);
var G__42860__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__42860__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42860__$2);
var G__42860__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__42860__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42860__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__42860__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42860__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__42861 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__42861,(0),null);
var method = cljs.core.nth.call(null,vec__42861,(1),null);
var file = cljs.core.nth.call(null,vec__42861,(2),null);
var line = cljs.core.nth.call(null,vec__42861,(3),null);
var G__42864 = top_data;
var G__42864__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__42864,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__42864);
var G__42864__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__42864__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__42864__$1);
var G__42864__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__42864__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__42864__$2);
var G__42864__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__42864__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__42864__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__42864__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__42864__$4;
}

break;
case "execution":
var vec__42865 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__42865,(0),null);
var method = cljs.core.nth.call(null,vec__42865,(1),null);
var file = cljs.core.nth.call(null,vec__42865,(2),null);
var line = cljs.core.nth.call(null,vec__42865,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__42865,source__$1,method,file,line,G__42856,G__42856__$1,map__42848,map__42848__$1,via,trace,phase,map__42849,map__42849__$1,type,message,data,map__42850,map__42850__$1,problems,fn,caller,map__42851,map__42851__$1,top_data,source){
return (function (p1__42847_SHARP_){
var or__4131__auto__ = (p1__42847_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__42847_SHARP_);
}
});})(vec__42865,source__$1,method,file,line,G__42856,G__42856__$1,map__42848,map__42848__$1,via,trace,phase,map__42849,map__42849__$1,type,message,data,map__42850,map__42850__$1,problems,fn,caller,map__42851,map__42851__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__42868 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__42868__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__42868,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__42868);
var G__42868__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__42868__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__42868__$1);
var G__42868__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__42868__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__42868__$2);
var G__42868__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__42868__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__42868__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__42868__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__42868__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42856__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__42872){
var map__42873 = p__42872;
var map__42873__$1 = (((((!((map__42873 == null))))?(((((map__42873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42873):map__42873);
var triage_data = map__42873__$1;
var phase = cljs.core.get.call(null,map__42873__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__42873__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__42873__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__42873__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__42873__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__42873__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__42873__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__42873__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__42875 = phase;
var G__42875__$1 = (((G__42875 instanceof cljs.core.Keyword))?G__42875.fqn:null);
switch (G__42875__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42876_42885 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42877_42886 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42878_42887 = true;
var _STAR_print_fn_STAR__temp_val__42879_42888 = ((function (_STAR_print_newline_STAR__orig_val__42876_42885,_STAR_print_fn_STAR__orig_val__42877_42886,_STAR_print_newline_STAR__temp_val__42878_42887,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__42876_42885,_STAR_print_fn_STAR__orig_val__42877_42886,_STAR_print_newline_STAR__temp_val__42878_42887,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42878_42887;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42879_42888;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__42876_42885,_STAR_print_fn_STAR__orig_val__42877_42886,_STAR_print_newline_STAR__temp_val__42878_42887,_STAR_print_fn_STAR__temp_val__42879_42888,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__42876_42885,_STAR_print_fn_STAR__orig_val__42877_42886,_STAR_print_newline_STAR__temp_val__42878_42887,_STAR_print_fn_STAR__temp_val__42879_42888,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__42870_SHARP_){
return cljs.core.dissoc.call(null,p1__42870_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__42876_42885,_STAR_print_fn_STAR__orig_val__42877_42886,_STAR_print_newline_STAR__temp_val__42878_42887,_STAR_print_fn_STAR__temp_val__42879_42888,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__42876_42885,_STAR_print_fn_STAR__orig_val__42877_42886,_STAR_print_newline_STAR__temp_val__42878_42887,_STAR_print_fn_STAR__temp_val__42879_42888,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42877_42886;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42876_42885;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42880_42889 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42881_42890 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42882_42891 = true;
var _STAR_print_fn_STAR__temp_val__42883_42892 = ((function (_STAR_print_newline_STAR__orig_val__42880_42889,_STAR_print_fn_STAR__orig_val__42881_42890,_STAR_print_newline_STAR__temp_val__42882_42891,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__42880_42889,_STAR_print_fn_STAR__orig_val__42881_42890,_STAR_print_newline_STAR__temp_val__42882_42891,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42882_42891;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42883_42892;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__42880_42889,_STAR_print_fn_STAR__orig_val__42881_42890,_STAR_print_newline_STAR__temp_val__42882_42891,_STAR_print_fn_STAR__temp_val__42883_42892,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__42880_42889,_STAR_print_fn_STAR__orig_val__42881_42890,_STAR_print_newline_STAR__temp_val__42882_42891,_STAR_print_fn_STAR__temp_val__42883_42892,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__42871_SHARP_){
return cljs.core.dissoc.call(null,p1__42871_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__42880_42889,_STAR_print_fn_STAR__orig_val__42881_42890,_STAR_print_newline_STAR__temp_val__42882_42891,_STAR_print_fn_STAR__temp_val__42883_42892,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__42880_42889,_STAR_print_fn_STAR__orig_val__42881_42890,_STAR_print_newline_STAR__temp_val__42882_42891,_STAR_print_fn_STAR__temp_val__42883_42892,sb__4661__auto__,G__42875,G__42875__$1,loc,class_name,simple_class,cause_type,format,map__42873,map__42873__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42881_42890;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42880_42889;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42875__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1620067001287
