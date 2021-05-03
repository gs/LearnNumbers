// Compiled by ClojureScript 1.10.520 {}
goog.provide('learn_numbers.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
cljs.core.enable_console_print_BANG_.call(null);
if((typeof learn_numbers !== 'undefined') && (typeof learn_numbers.core !== 'undefined') && (typeof learn_numbers.core.number !== 'undefined')){
} else {
learn_numbers.core.number = reagent.core.atom.call(null,cljs.core.rand_int.call(null,(100)));
}
/**
 * Call the google translate with language and value of the atom
 */
learn_numbers.core.speak_it = (function learn_numbers$core$speak_it(lang){
var speech_syn = window.speechSynthesis;
learn_numbers.core.msg = (new SpeechSynthesisUtterance(cljs.core.deref.call(null,learn_numbers.core.number)));

(learn_numbers.core.msg["lang"] = lang);

return speech_syn.speak(learn_numbers.core.msg);
});
learn_numbers.core.change_me = (function learn_numbers$core$change_me(){
return cljs.core.rand_int.call(null,(100));
});
/**
 * render the flag element
 */
learn_numbers.core.flag_element = (function learn_numbers$core$flag_element(lang){
learn_numbers.core.filename = ["flags/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),".png"].join('');

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 10px 10px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),learn_numbers.core.filename,new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return learn_numbers.core.speak_it.call(null,lang);
})], null)], null)], null);
});
learn_numbers.core.app_container = (function learn_numbers$core$app_container(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center","div.center",1338956224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Nauka liczb w roznych jezykach"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),cljs.core.deref.call(null,learn_numbers.core.number)], null),learn_numbers.core.flag_element.call(null,"pl-PL"),learn_numbers.core.flag_element.call(null,"de-DE"),learn_numbers.core.flag_element.call(null,"en-US"),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"audio1",new cljs.core.Keyword(null,"src","src",-1651076051),""], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"One more time",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,learn_numbers.core.number,learn_numbers.core.change_me);
})], null)], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learn_numbers.core.app_container], null),document.getElementById("app"));
learn_numbers.core.on_js_reload = (function learn_numbers$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1620075740254
