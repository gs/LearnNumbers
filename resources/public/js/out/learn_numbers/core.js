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
learn_numbers.core.lang_to_country = new cljs.core.PersistentArrayMap(null, 5, ["en-US","Ameryka / America","pl-PL","Polska / Poland","de-DE","Niemcy / Germany","it-IT","W\u0142ochy / Italy","es-ES","Kostarica / Costa Rica"], null);
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
return cljs.core.rand_int.call(null,(101));
});
/**
 * render the flag element
 */
learn_numbers.core.flag_element = (function learn_numbers$core$flag_element(lang){
learn_numbers.core.filename = ["flags/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lang),".png"].join('');

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.has-text-white.has-background-primary-dark","span.has-text-white.has-background-primary-dark",-2127354695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 10px 10px"], null),learn_numbers.core.lang_to_country.call(null,lang),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),learn_numbers.core.filename,new cljs.core.Keyword(null,"width","width",-384071477),"250px",new cljs.core.Keyword(null,"height","height",1025178622),"250px",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return learn_numbers.core.speak_it.call(null,lang);
}),new cljs.core.Keyword(null,"alt","alt",-3214426),lang], null)], null)], null);
});
learn_numbers.core.app_container = (function learn_numbers$core$app_container(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.section","div.section",-982365435),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.has-text-centered","div.column.has-text-centered",2111281694),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),"Naucz sie cyfrow"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.has-background-danger-dark.has-text-centered","div.column.has-background-danger-dark.has-text-centered",182466095),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.has-text-white","h1.has-text-white",-151375034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14rem"], null)], null),cljs.core.deref.call(null,learn_numbers.core.number)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.buttons","div.buttons",-536342249),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),"button is-success",new cljs.core.Keyword(null,"value","value",305978217),"Inna cyfra",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,learn_numbers.core.number,learn_numbers.core.change_me);
})], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),learn_numbers.core.flag_element.call(null,"pl-PL")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),learn_numbers.core.flag_element.call(null,"de-DE")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),learn_numbers.core.flag_element.call(null,"en-US")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),learn_numbers.core.flag_element.call(null,"it-IT")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),learn_numbers.core.flag_element.call(null,"es-ES")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"audio1",new cljs.core.Keyword(null,"src","src",-1651076051),""], null)], null)], null)], null);
});
reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [learn_numbers.core.app_container], null),document.getElementById("app"));
learn_numbers.core.on_js_reload = (function learn_numbers$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1620918658702
