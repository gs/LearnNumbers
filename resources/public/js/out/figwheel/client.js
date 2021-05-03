// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e43750){if((e43750 instanceof Error)){
var e = e43750;
return "Error: Unable to stringify";
} else {
throw e43750;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__43753 = arguments.length;
switch (G__43753) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__43751_SHARP_){
if(typeof p1__43751_SHARP_ === 'string'){
return p1__43751_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__43751_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43756 = arguments.length;
var i__4731__auto___43757 = (0);
while(true){
if((i__4731__auto___43757 < len__4730__auto___43756)){
args__4736__auto__.push((arguments[i__4731__auto___43757]));

var G__43758 = (i__4731__auto___43757 + (1));
i__4731__auto___43757 = G__43758;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43755){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43755));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43760 = arguments.length;
var i__4731__auto___43761 = (0);
while(true){
if((i__4731__auto___43761 < len__4730__auto___43760)){
args__4736__auto__.push((arguments[i__4731__auto___43761]));

var G__43762 = (i__4731__auto___43761 + (1));
i__4731__auto___43761 = G__43762;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43759){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43759));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43763){
var map__43764 = p__43763;
var map__43764__$1 = (((((!((map__43764 == null))))?(((((map__43764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43764.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43764):map__43764);
var message = cljs.core.get.call(null,map__43764__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43764__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__37523__auto___43843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___43843,ch){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___43843,ch){
return (function (state_43815){
var state_val_43816 = (state_43815[(1)]);
if((state_val_43816 === (7))){
var inst_43811 = (state_43815[(2)]);
var state_43815__$1 = state_43815;
var statearr_43817_43844 = state_43815__$1;
(statearr_43817_43844[(2)] = inst_43811);

(statearr_43817_43844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (1))){
var state_43815__$1 = state_43815;
var statearr_43818_43845 = state_43815__$1;
(statearr_43818_43845[(2)] = null);

(statearr_43818_43845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (4))){
var inst_43768 = (state_43815[(7)]);
var inst_43768__$1 = (state_43815[(2)]);
var state_43815__$1 = (function (){var statearr_43819 = state_43815;
(statearr_43819[(7)] = inst_43768__$1);

return statearr_43819;
})();
if(cljs.core.truth_(inst_43768__$1)){
var statearr_43820_43846 = state_43815__$1;
(statearr_43820_43846[(1)] = (5));

} else {
var statearr_43821_43847 = state_43815__$1;
(statearr_43821_43847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (15))){
var inst_43775 = (state_43815[(8)]);
var inst_43790 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43775);
var inst_43791 = cljs.core.first.call(null,inst_43790);
var inst_43792 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43791);
var inst_43793 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43792)].join('');
var inst_43794 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43793);
var state_43815__$1 = state_43815;
var statearr_43822_43848 = state_43815__$1;
(statearr_43822_43848[(2)] = inst_43794);

(statearr_43822_43848[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (13))){
var inst_43799 = (state_43815[(2)]);
var state_43815__$1 = state_43815;
var statearr_43823_43849 = state_43815__$1;
(statearr_43823_43849[(2)] = inst_43799);

(statearr_43823_43849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (6))){
var state_43815__$1 = state_43815;
var statearr_43824_43850 = state_43815__$1;
(statearr_43824_43850[(2)] = null);

(statearr_43824_43850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (17))){
var inst_43797 = (state_43815[(2)]);
var state_43815__$1 = state_43815;
var statearr_43825_43851 = state_43815__$1;
(statearr_43825_43851[(2)] = inst_43797);

(statearr_43825_43851[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (3))){
var inst_43813 = (state_43815[(2)]);
var state_43815__$1 = state_43815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43815__$1,inst_43813);
} else {
if((state_val_43816 === (12))){
var inst_43774 = (state_43815[(9)]);
var inst_43788 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43774,opts);
var state_43815__$1 = state_43815;
if(inst_43788){
var statearr_43826_43852 = state_43815__$1;
(statearr_43826_43852[(1)] = (15));

} else {
var statearr_43827_43853 = state_43815__$1;
(statearr_43827_43853[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (2))){
var state_43815__$1 = state_43815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43815__$1,(4),ch);
} else {
if((state_val_43816 === (11))){
var inst_43775 = (state_43815[(8)]);
var inst_43780 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43781 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43775);
var inst_43782 = cljs.core.async.timeout.call(null,(1000));
var inst_43783 = [inst_43781,inst_43782];
var inst_43784 = (new cljs.core.PersistentVector(null,2,(5),inst_43780,inst_43783,null));
var state_43815__$1 = state_43815;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43815__$1,(14),inst_43784);
} else {
if((state_val_43816 === (9))){
var inst_43775 = (state_43815[(8)]);
var inst_43801 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43802 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43775);
var inst_43803 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43802);
var inst_43804 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43803)].join('');
var inst_43805 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43804);
var state_43815__$1 = (function (){var statearr_43828 = state_43815;
(statearr_43828[(10)] = inst_43801);

return statearr_43828;
})();
var statearr_43829_43854 = state_43815__$1;
(statearr_43829_43854[(2)] = inst_43805);

(statearr_43829_43854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (5))){
var inst_43768 = (state_43815[(7)]);
var inst_43770 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43771 = (new cljs.core.PersistentArrayMap(null,2,inst_43770,null));
var inst_43772 = (new cljs.core.PersistentHashSet(null,inst_43771,null));
var inst_43773 = figwheel.client.focus_msgs.call(null,inst_43772,inst_43768);
var inst_43774 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43773);
var inst_43775 = cljs.core.first.call(null,inst_43773);
var inst_43776 = figwheel.client.autoload_QMARK_.call(null);
var state_43815__$1 = (function (){var statearr_43830 = state_43815;
(statearr_43830[(9)] = inst_43774);

(statearr_43830[(8)] = inst_43775);

return statearr_43830;
})();
if(cljs.core.truth_(inst_43776)){
var statearr_43831_43855 = state_43815__$1;
(statearr_43831_43855[(1)] = (8));

} else {
var statearr_43832_43856 = state_43815__$1;
(statearr_43832_43856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (14))){
var inst_43786 = (state_43815[(2)]);
var state_43815__$1 = state_43815;
var statearr_43833_43857 = state_43815__$1;
(statearr_43833_43857[(2)] = inst_43786);

(statearr_43833_43857[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (16))){
var state_43815__$1 = state_43815;
var statearr_43834_43858 = state_43815__$1;
(statearr_43834_43858[(2)] = null);

(statearr_43834_43858[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (10))){
var inst_43807 = (state_43815[(2)]);
var state_43815__$1 = (function (){var statearr_43835 = state_43815;
(statearr_43835[(11)] = inst_43807);

return statearr_43835;
})();
var statearr_43836_43859 = state_43815__$1;
(statearr_43836_43859[(2)] = null);

(statearr_43836_43859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43816 === (8))){
var inst_43774 = (state_43815[(9)]);
var inst_43778 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43774,opts);
var state_43815__$1 = state_43815;
if(cljs.core.truth_(inst_43778)){
var statearr_43837_43860 = state_43815__$1;
(statearr_43837_43860[(1)] = (11));

} else {
var statearr_43838_43861 = state_43815__$1;
(statearr_43838_43861[(1)] = (12));

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
});})(c__37523__auto___43843,ch))
;
return ((function (switch__37428__auto__,c__37523__auto___43843,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37429__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37429__auto____0 = (function (){
var statearr_43839 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43839[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37429__auto__);

(statearr_43839[(1)] = (1));

return statearr_43839;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37429__auto____1 = (function (state_43815){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_43815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e43840){if((e43840 instanceof Object)){
var ex__37432__auto__ = e43840;
var statearr_43841_43862 = state_43815;
(statearr_43841_43862[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43863 = state_43815;
state_43815 = G__43863;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37429__auto__ = function(state_43815){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37429__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37429__auto____1.call(this,state_43815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37429__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37429__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___43843,ch))
})();
var state__37525__auto__ = (function (){var statearr_43842 = f__37524__auto__.call(null);
(statearr_43842[(6)] = c__37523__auto___43843);

return statearr_43842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___43843,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43864_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43864_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_43870 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43870){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43866 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43867 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43868 = true;
var _STAR_print_fn_STAR__temp_val__43869 = ((function (_STAR_print_newline_STAR__orig_val__43866,_STAR_print_fn_STAR__orig_val__43867,_STAR_print_newline_STAR__temp_val__43868,sb,base_path_43870){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__43866,_STAR_print_fn_STAR__orig_val__43867,_STAR_print_newline_STAR__temp_val__43868,sb,base_path_43870))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43868;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43869;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43867;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43866;
}}catch (e43865){if((e43865 instanceof Error)){
var e = e43865;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43870], null));
} else {
var e = e43865;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43870))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43871){
var map__43872 = p__43871;
var map__43872__$1 = (((((!((map__43872 == null))))?(((((map__43872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43872):map__43872);
var opts = map__43872__$1;
var build_id = cljs.core.get.call(null,map__43872__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43872,map__43872__$1,opts,build_id){
return (function (p__43874){
var vec__43875 = p__43874;
var seq__43876 = cljs.core.seq.call(null,vec__43875);
var first__43877 = cljs.core.first.call(null,seq__43876);
var seq__43876__$1 = cljs.core.next.call(null,seq__43876);
var map__43878 = first__43877;
var map__43878__$1 = (((((!((map__43878 == null))))?(((((map__43878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43878):map__43878);
var msg = map__43878__$1;
var msg_name = cljs.core.get.call(null,map__43878__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43876__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43875,seq__43876,first__43877,seq__43876__$1,map__43878,map__43878__$1,msg,msg_name,_,map__43872,map__43872__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43875,seq__43876,first__43877,seq__43876__$1,map__43878,map__43878__$1,msg,msg_name,_,map__43872,map__43872__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43872,map__43872__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43880){
var vec__43881 = p__43880;
var seq__43882 = cljs.core.seq.call(null,vec__43881);
var first__43883 = cljs.core.first.call(null,seq__43882);
var seq__43882__$1 = cljs.core.next.call(null,seq__43882);
var map__43884 = first__43883;
var map__43884__$1 = (((((!((map__43884 == null))))?(((((map__43884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43884):map__43884);
var msg = map__43884__$1;
var msg_name = cljs.core.get.call(null,map__43884__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43882__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43886){
var map__43887 = p__43886;
var map__43887__$1 = (((((!((map__43887 == null))))?(((((map__43887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43887):map__43887);
var on_compile_warning = cljs.core.get.call(null,map__43887__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43887__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43887,map__43887__$1,on_compile_warning,on_compile_fail){
return (function (p__43889){
var vec__43890 = p__43889;
var seq__43891 = cljs.core.seq.call(null,vec__43890);
var first__43892 = cljs.core.first.call(null,seq__43891);
var seq__43891__$1 = cljs.core.next.call(null,seq__43891);
var map__43893 = first__43892;
var map__43893__$1 = (((((!((map__43893 == null))))?(((((map__43893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43893):map__43893);
var msg = map__43893__$1;
var msg_name = cljs.core.get.call(null,map__43893__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43891__$1;
var pred__43895 = cljs.core._EQ_;
var expr__43896 = msg_name;
if(cljs.core.truth_(pred__43895.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43896))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43895.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43896))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43887,map__43887__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto__,msg_hist,msg_names,msg){
return (function (state_43985){
var state_val_43986 = (state_43985[(1)]);
if((state_val_43986 === (7))){
var inst_43905 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
if(cljs.core.truth_(inst_43905)){
var statearr_43987_44034 = state_43985__$1;
(statearr_43987_44034[(1)] = (8));

} else {
var statearr_43988_44035 = state_43985__$1;
(statearr_43988_44035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (20))){
var inst_43979 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_43989_44036 = state_43985__$1;
(statearr_43989_44036[(2)] = inst_43979);

(statearr_43989_44036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (27))){
var inst_43975 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_43990_44037 = state_43985__$1;
(statearr_43990_44037[(2)] = inst_43975);

(statearr_43990_44037[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (1))){
var inst_43898 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43985__$1 = state_43985;
if(cljs.core.truth_(inst_43898)){
var statearr_43991_44038 = state_43985__$1;
(statearr_43991_44038[(1)] = (2));

} else {
var statearr_43992_44039 = state_43985__$1;
(statearr_43992_44039[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (24))){
var inst_43977 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_43993_44040 = state_43985__$1;
(statearr_43993_44040[(2)] = inst_43977);

(statearr_43993_44040[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (4))){
var inst_43983 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43985__$1,inst_43983);
} else {
if((state_val_43986 === (15))){
var inst_43981 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_43994_44041 = state_43985__$1;
(statearr_43994_44041[(2)] = inst_43981);

(statearr_43994_44041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (21))){
var inst_43934 = (state_43985[(2)]);
var inst_43935 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43936 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43935);
var state_43985__$1 = (function (){var statearr_43995 = state_43985;
(statearr_43995[(7)] = inst_43934);

return statearr_43995;
})();
var statearr_43996_44042 = state_43985__$1;
(statearr_43996_44042[(2)] = inst_43936);

(statearr_43996_44042[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (31))){
var inst_43964 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43985__$1 = state_43985;
if(inst_43964){
var statearr_43997_44043 = state_43985__$1;
(statearr_43997_44043[(1)] = (34));

} else {
var statearr_43998_44044 = state_43985__$1;
(statearr_43998_44044[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (32))){
var inst_43973 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_43999_44045 = state_43985__$1;
(statearr_43999_44045[(2)] = inst_43973);

(statearr_43999_44045[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (33))){
var inst_43960 = (state_43985[(2)]);
var inst_43961 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43962 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43961);
var state_43985__$1 = (function (){var statearr_44000 = state_43985;
(statearr_44000[(8)] = inst_43960);

return statearr_44000;
})();
var statearr_44001_44046 = state_43985__$1;
(statearr_44001_44046[(2)] = inst_43962);

(statearr_44001_44046[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (13))){
var inst_43919 = figwheel.client.heads_up.clear.call(null);
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43985__$1,(16),inst_43919);
} else {
if((state_val_43986 === (22))){
var inst_43940 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43941 = figwheel.client.heads_up.append_warning_message.call(null,inst_43940);
var state_43985__$1 = state_43985;
var statearr_44002_44047 = state_43985__$1;
(statearr_44002_44047[(2)] = inst_43941);

(statearr_44002_44047[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (36))){
var inst_43971 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_44003_44048 = state_43985__$1;
(statearr_44003_44048[(2)] = inst_43971);

(statearr_44003_44048[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (29))){
var inst_43951 = (state_43985[(2)]);
var inst_43952 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43953 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43952);
var state_43985__$1 = (function (){var statearr_44004 = state_43985;
(statearr_44004[(9)] = inst_43951);

return statearr_44004;
})();
var statearr_44005_44049 = state_43985__$1;
(statearr_44005_44049[(2)] = inst_43953);

(statearr_44005_44049[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (6))){
var inst_43900 = (state_43985[(10)]);
var state_43985__$1 = state_43985;
var statearr_44006_44050 = state_43985__$1;
(statearr_44006_44050[(2)] = inst_43900);

(statearr_44006_44050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (28))){
var inst_43947 = (state_43985[(2)]);
var inst_43948 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43949 = figwheel.client.heads_up.display_warning.call(null,inst_43948);
var state_43985__$1 = (function (){var statearr_44007 = state_43985;
(statearr_44007[(11)] = inst_43947);

return statearr_44007;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43985__$1,(29),inst_43949);
} else {
if((state_val_43986 === (25))){
var inst_43945 = figwheel.client.heads_up.clear.call(null);
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43985__$1,(28),inst_43945);
} else {
if((state_val_43986 === (34))){
var inst_43966 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43985__$1,(37),inst_43966);
} else {
if((state_val_43986 === (17))){
var inst_43925 = (state_43985[(2)]);
var inst_43926 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43927 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43926);
var state_43985__$1 = (function (){var statearr_44008 = state_43985;
(statearr_44008[(12)] = inst_43925);

return statearr_44008;
})();
var statearr_44009_44051 = state_43985__$1;
(statearr_44009_44051[(2)] = inst_43927);

(statearr_44009_44051[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (3))){
var inst_43917 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43985__$1 = state_43985;
if(inst_43917){
var statearr_44010_44052 = state_43985__$1;
(statearr_44010_44052[(1)] = (13));

} else {
var statearr_44011_44053 = state_43985__$1;
(statearr_44011_44053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (12))){
var inst_43913 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_44012_44054 = state_43985__$1;
(statearr_44012_44054[(2)] = inst_43913);

(statearr_44012_44054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (2))){
var inst_43900 = (state_43985[(10)]);
var inst_43900__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43985__$1 = (function (){var statearr_44013 = state_43985;
(statearr_44013[(10)] = inst_43900__$1);

return statearr_44013;
})();
if(cljs.core.truth_(inst_43900__$1)){
var statearr_44014_44055 = state_43985__$1;
(statearr_44014_44055[(1)] = (5));

} else {
var statearr_44015_44056 = state_43985__$1;
(statearr_44015_44056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (23))){
var inst_43943 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43985__$1 = state_43985;
if(inst_43943){
var statearr_44016_44057 = state_43985__$1;
(statearr_44016_44057[(1)] = (25));

} else {
var statearr_44017_44058 = state_43985__$1;
(statearr_44017_44058[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (35))){
var state_43985__$1 = state_43985;
var statearr_44018_44059 = state_43985__$1;
(statearr_44018_44059[(2)] = null);

(statearr_44018_44059[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (19))){
var inst_43938 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43985__$1 = state_43985;
if(inst_43938){
var statearr_44019_44060 = state_43985__$1;
(statearr_44019_44060[(1)] = (22));

} else {
var statearr_44020_44061 = state_43985__$1;
(statearr_44020_44061[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (11))){
var inst_43909 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_44021_44062 = state_43985__$1;
(statearr_44021_44062[(2)] = inst_43909);

(statearr_44021_44062[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (9))){
var inst_43911 = figwheel.client.heads_up.clear.call(null);
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43985__$1,(12),inst_43911);
} else {
if((state_val_43986 === (5))){
var inst_43902 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43985__$1 = state_43985;
var statearr_44022_44063 = state_43985__$1;
(statearr_44022_44063[(2)] = inst_43902);

(statearr_44022_44063[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (14))){
var inst_43929 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43985__$1 = state_43985;
if(inst_43929){
var statearr_44023_44064 = state_43985__$1;
(statearr_44023_44064[(1)] = (18));

} else {
var statearr_44024_44065 = state_43985__$1;
(statearr_44024_44065[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (26))){
var inst_43955 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43985__$1 = state_43985;
if(inst_43955){
var statearr_44025_44066 = state_43985__$1;
(statearr_44025_44066[(1)] = (30));

} else {
var statearr_44026_44067 = state_43985__$1;
(statearr_44026_44067[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (16))){
var inst_43921 = (state_43985[(2)]);
var inst_43922 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43923 = figwheel.client.heads_up.display_exception.call(null,inst_43922);
var state_43985__$1 = (function (){var statearr_44027 = state_43985;
(statearr_44027[(13)] = inst_43921);

return statearr_44027;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43985__$1,(17),inst_43923);
} else {
if((state_val_43986 === (30))){
var inst_43957 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43958 = figwheel.client.heads_up.display_warning.call(null,inst_43957);
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43985__$1,(33),inst_43958);
} else {
if((state_val_43986 === (10))){
var inst_43915 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_44028_44068 = state_43985__$1;
(statearr_44028_44068[(2)] = inst_43915);

(statearr_44028_44068[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (18))){
var inst_43931 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43932 = figwheel.client.heads_up.display_exception.call(null,inst_43931);
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43985__$1,(21),inst_43932);
} else {
if((state_val_43986 === (37))){
var inst_43968 = (state_43985[(2)]);
var state_43985__$1 = state_43985;
var statearr_44029_44069 = state_43985__$1;
(statearr_44029_44069[(2)] = inst_43968);

(statearr_44029_44069[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43986 === (8))){
var inst_43907 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43985__$1 = state_43985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43985__$1,(11),inst_43907);
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
});})(c__37523__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37428__auto__,c__37523__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto____0 = (function (){
var statearr_44030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44030[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto__);

(statearr_44030[(1)] = (1));

return statearr_44030;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto____1 = (function (state_43985){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_43985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e44031){if((e44031 instanceof Object)){
var ex__37432__auto__ = e44031;
var statearr_44032_44070 = state_43985;
(statearr_44032_44070[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44071 = state_43985;
state_43985 = G__44071;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto__ = function(state_43985){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto____1.call(this,state_43985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto__,msg_hist,msg_names,msg))
})();
var state__37525__auto__ = (function (){var statearr_44033 = f__37524__auto__.call(null);
(statearr_44033[(6)] = c__37523__auto__);

return statearr_44033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto__,msg_hist,msg_names,msg))
);

return c__37523__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37523__auto___44100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___44100,ch){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___44100,ch){
return (function (state_44086){
var state_val_44087 = (state_44086[(1)]);
if((state_val_44087 === (1))){
var state_44086__$1 = state_44086;
var statearr_44088_44101 = state_44086__$1;
(statearr_44088_44101[(2)] = null);

(statearr_44088_44101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44087 === (2))){
var state_44086__$1 = state_44086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44086__$1,(4),ch);
} else {
if((state_val_44087 === (3))){
var inst_44084 = (state_44086[(2)]);
var state_44086__$1 = state_44086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44086__$1,inst_44084);
} else {
if((state_val_44087 === (4))){
var inst_44074 = (state_44086[(7)]);
var inst_44074__$1 = (state_44086[(2)]);
var state_44086__$1 = (function (){var statearr_44089 = state_44086;
(statearr_44089[(7)] = inst_44074__$1);

return statearr_44089;
})();
if(cljs.core.truth_(inst_44074__$1)){
var statearr_44090_44102 = state_44086__$1;
(statearr_44090_44102[(1)] = (5));

} else {
var statearr_44091_44103 = state_44086__$1;
(statearr_44091_44103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44087 === (5))){
var inst_44074 = (state_44086[(7)]);
var inst_44076 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44074);
var state_44086__$1 = state_44086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44086__$1,(8),inst_44076);
} else {
if((state_val_44087 === (6))){
var state_44086__$1 = state_44086;
var statearr_44092_44104 = state_44086__$1;
(statearr_44092_44104[(2)] = null);

(statearr_44092_44104[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44087 === (7))){
var inst_44082 = (state_44086[(2)]);
var state_44086__$1 = state_44086;
var statearr_44093_44105 = state_44086__$1;
(statearr_44093_44105[(2)] = inst_44082);

(statearr_44093_44105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44087 === (8))){
var inst_44078 = (state_44086[(2)]);
var state_44086__$1 = (function (){var statearr_44094 = state_44086;
(statearr_44094[(8)] = inst_44078);

return statearr_44094;
})();
var statearr_44095_44106 = state_44086__$1;
(statearr_44095_44106[(2)] = null);

(statearr_44095_44106[(1)] = (2));


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
});})(c__37523__auto___44100,ch))
;
return ((function (switch__37428__auto__,c__37523__auto___44100,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37429__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37429__auto____0 = (function (){
var statearr_44096 = [null,null,null,null,null,null,null,null,null];
(statearr_44096[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37429__auto__);

(statearr_44096[(1)] = (1));

return statearr_44096;
});
var figwheel$client$heads_up_plugin_$_state_machine__37429__auto____1 = (function (state_44086){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_44086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e44097){if((e44097 instanceof Object)){
var ex__37432__auto__ = e44097;
var statearr_44098_44107 = state_44086;
(statearr_44098_44107[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44108 = state_44086;
state_44086 = G__44108;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37429__auto__ = function(state_44086){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37429__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37429__auto____1.call(this,state_44086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37429__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37429__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___44100,ch))
})();
var state__37525__auto__ = (function (){var statearr_44099 = f__37524__auto__.call(null);
(statearr_44099[(6)] = c__37523__auto___44100);

return statearr_44099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___44100,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto__){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto__){
return (function (state_44114){
var state_val_44115 = (state_44114[(1)]);
if((state_val_44115 === (1))){
var inst_44109 = cljs.core.async.timeout.call(null,(3000));
var state_44114__$1 = state_44114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44114__$1,(2),inst_44109);
} else {
if((state_val_44115 === (2))){
var inst_44111 = (state_44114[(2)]);
var inst_44112 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44114__$1 = (function (){var statearr_44116 = state_44114;
(statearr_44116[(7)] = inst_44111);

return statearr_44116;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44114__$1,inst_44112);
} else {
return null;
}
}
});})(c__37523__auto__))
;
return ((function (switch__37428__auto__,c__37523__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37429__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37429__auto____0 = (function (){
var statearr_44117 = [null,null,null,null,null,null,null,null];
(statearr_44117[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37429__auto__);

(statearr_44117[(1)] = (1));

return statearr_44117;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37429__auto____1 = (function (state_44114){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_44114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e44118){if((e44118 instanceof Object)){
var ex__37432__auto__ = e44118;
var statearr_44119_44121 = state_44114;
(statearr_44119_44121[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44118;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44122 = state_44114;
state_44114 = G__44122;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37429__auto__ = function(state_44114){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37429__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37429__auto____1.call(this,state_44114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37429__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37429__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto__))
})();
var state__37525__auto__ = (function (){var statearr_44120 = f__37524__auto__.call(null);
(statearr_44120[(6)] = c__37523__auto__);

return statearr_44120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto__))
);

return c__37523__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__37523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto__,figwheel_version,temp__5735__auto__){
return (function (state_44129){
var state_val_44130 = (state_44129[(1)]);
if((state_val_44130 === (1))){
var inst_44123 = cljs.core.async.timeout.call(null,(2000));
var state_44129__$1 = state_44129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44129__$1,(2),inst_44123);
} else {
if((state_val_44130 === (2))){
var inst_44125 = (state_44129[(2)]);
var inst_44126 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_44127 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44126);
var state_44129__$1 = (function (){var statearr_44131 = state_44129;
(statearr_44131[(7)] = inst_44125);

return statearr_44131;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44129__$1,inst_44127);
} else {
return null;
}
}
});})(c__37523__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__37428__auto__,c__37523__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto____0 = (function (){
var statearr_44132 = [null,null,null,null,null,null,null,null];
(statearr_44132[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto__);

(statearr_44132[(1)] = (1));

return statearr_44132;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto____1 = (function (state_44129){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_44129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e44133){if((e44133 instanceof Object)){
var ex__37432__auto__ = e44133;
var statearr_44134_44136 = state_44129;
(statearr_44134_44136[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44137 = state_44129;
state_44129 = G__44137;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto__ = function(state_44129){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto____1.call(this,state_44129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto__,figwheel_version,temp__5735__auto__))
})();
var state__37525__auto__ = (function (){var statearr_44135 = f__37524__auto__.call(null);
(statearr_44135[(6)] = c__37523__auto__);

return statearr_44135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto__,figwheel_version,temp__5735__auto__))
);

return c__37523__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44138){
var map__44139 = p__44138;
var map__44139__$1 = (((((!((map__44139 == null))))?(((((map__44139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44139):map__44139);
var file = cljs.core.get.call(null,map__44139__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44139__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44139__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44141 = "";
var G__44141__$1 = (cljs.core.truth_(file)?[G__44141,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__44141);
var G__44141__$2 = (cljs.core.truth_(line)?[G__44141__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44141__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__44141__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__44141__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44142){
var map__44143 = p__44142;
var map__44143__$1 = (((((!((map__44143 == null))))?(((((map__44143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44143):map__44143);
var ed = map__44143__$1;
var exception_data = cljs.core.get.call(null,map__44143__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44143__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_44146 = (function (){var G__44145 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44145)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__44145;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_44146);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44147){
var map__44148 = p__44147;
var map__44148__$1 = (((((!((map__44148 == null))))?(((((map__44148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44148):map__44148);
var w = map__44148__$1;
var message = cljs.core.get.call(null,map__44148__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44150 = cljs.core.seq.call(null,plugins);
var chunk__44151 = null;
var count__44152 = (0);
var i__44153 = (0);
while(true){
if((i__44153 < count__44152)){
var vec__44160 = cljs.core._nth.call(null,chunk__44151,i__44153);
var k = cljs.core.nth.call(null,vec__44160,(0),null);
var plugin = cljs.core.nth.call(null,vec__44160,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44166 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44150,chunk__44151,count__44152,i__44153,pl_44166,vec__44160,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44166.call(null,msg_hist);
});})(seq__44150,chunk__44151,count__44152,i__44153,pl_44166,vec__44160,k,plugin))
);
} else {
}


var G__44167 = seq__44150;
var G__44168 = chunk__44151;
var G__44169 = count__44152;
var G__44170 = (i__44153 + (1));
seq__44150 = G__44167;
chunk__44151 = G__44168;
count__44152 = G__44169;
i__44153 = G__44170;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__44150);
if(temp__5735__auto__){
var seq__44150__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44150__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__44150__$1);
var G__44171 = cljs.core.chunk_rest.call(null,seq__44150__$1);
var G__44172 = c__4550__auto__;
var G__44173 = cljs.core.count.call(null,c__4550__auto__);
var G__44174 = (0);
seq__44150 = G__44171;
chunk__44151 = G__44172;
count__44152 = G__44173;
i__44153 = G__44174;
continue;
} else {
var vec__44163 = cljs.core.first.call(null,seq__44150__$1);
var k = cljs.core.nth.call(null,vec__44163,(0),null);
var plugin = cljs.core.nth.call(null,vec__44163,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44175 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44150,chunk__44151,count__44152,i__44153,pl_44175,vec__44163,k,plugin,seq__44150__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44175.call(null,msg_hist);
});})(seq__44150,chunk__44151,count__44152,i__44153,pl_44175,vec__44163,k,plugin,seq__44150__$1,temp__5735__auto__))
);
} else {
}


var G__44176 = cljs.core.next.call(null,seq__44150__$1);
var G__44177 = null;
var G__44178 = (0);
var G__44179 = (0);
seq__44150 = G__44176;
chunk__44151 = G__44177;
count__44152 = G__44178;
i__44153 = G__44179;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__44181 = arguments.length;
switch (G__44181) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__44182_44187 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44183_44188 = null;
var count__44184_44189 = (0);
var i__44185_44190 = (0);
while(true){
if((i__44185_44190 < count__44184_44189)){
var msg_44191 = cljs.core._nth.call(null,chunk__44183_44188,i__44185_44190);
figwheel.client.socket.handle_incoming_message.call(null,msg_44191);


var G__44192 = seq__44182_44187;
var G__44193 = chunk__44183_44188;
var G__44194 = count__44184_44189;
var G__44195 = (i__44185_44190 + (1));
seq__44182_44187 = G__44192;
chunk__44183_44188 = G__44193;
count__44184_44189 = G__44194;
i__44185_44190 = G__44195;
continue;
} else {
var temp__5735__auto___44196 = cljs.core.seq.call(null,seq__44182_44187);
if(temp__5735__auto___44196){
var seq__44182_44197__$1 = temp__5735__auto___44196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44182_44197__$1)){
var c__4550__auto___44198 = cljs.core.chunk_first.call(null,seq__44182_44197__$1);
var G__44199 = cljs.core.chunk_rest.call(null,seq__44182_44197__$1);
var G__44200 = c__4550__auto___44198;
var G__44201 = cljs.core.count.call(null,c__4550__auto___44198);
var G__44202 = (0);
seq__44182_44187 = G__44199;
chunk__44183_44188 = G__44200;
count__44184_44189 = G__44201;
i__44185_44190 = G__44202;
continue;
} else {
var msg_44203 = cljs.core.first.call(null,seq__44182_44197__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44203);


var G__44204 = cljs.core.next.call(null,seq__44182_44197__$1);
var G__44205 = null;
var G__44206 = (0);
var G__44207 = (0);
seq__44182_44187 = G__44204;
chunk__44183_44188 = G__44205;
count__44184_44189 = G__44206;
i__44185_44190 = G__44207;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44212 = arguments.length;
var i__4731__auto___44213 = (0);
while(true){
if((i__4731__auto___44213 < len__4730__auto___44212)){
args__4736__auto__.push((arguments[i__4731__auto___44213]));

var G__44214 = (i__4731__auto___44213 + (1));
i__4731__auto___44213 = G__44214;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44209){
var map__44210 = p__44209;
var map__44210__$1 = (((((!((map__44210 == null))))?(((((map__44210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44210):map__44210);
var opts = map__44210__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44208){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44208));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44215){if((e44215 instanceof Error)){
var e = e44215;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44215;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__44216){
var map__44217 = p__44216;
var map__44217__$1 = (((((!((map__44217 == null))))?(((((map__44217.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44217.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44217):map__44217);
var msg_name = cljs.core.get.call(null,map__44217__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1620067001640
