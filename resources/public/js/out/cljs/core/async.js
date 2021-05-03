// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__37583 = arguments.length;
switch (G__37583) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37584 = (function (f,blockable,meta37585){
this.f = f;
this.blockable = blockable;
this.meta37585 = meta37585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37586,meta37585__$1){
var self__ = this;
var _37586__$1 = this;
return (new cljs.core.async.t_cljs$core$async37584(self__.f,self__.blockable,meta37585__$1));
});

cljs.core.async.t_cljs$core$async37584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37586){
var self__ = this;
var _37586__$1 = this;
return self__.meta37585;
});

cljs.core.async.t_cljs$core$async37584.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37584.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37585","meta37585",482158046,null)], null);
});

cljs.core.async.t_cljs$core$async37584.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37584";

cljs.core.async.t_cljs$core$async37584.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async37584");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37584.
 */
cljs.core.async.__GT_t_cljs$core$async37584 = (function cljs$core$async$__GT_t_cljs$core$async37584(f__$1,blockable__$1,meta37585){
return (new cljs.core.async.t_cljs$core$async37584(f__$1,blockable__$1,meta37585));
});

}

return (new cljs.core.async.t_cljs$core$async37584(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__37590 = arguments.length;
switch (G__37590) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__37593 = arguments.length;
switch (G__37593) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__37596 = arguments.length;
switch (G__37596) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37598 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37598);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37598,ret){
return (function (){
return fn1.call(null,val_37598);
});})(val_37598,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__37600 = arguments.length;
switch (G__37600) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___37602 = n;
var x_37603 = (0);
while(true){
if((x_37603 < n__4607__auto___37602)){
(a[x_37603] = (0));

var G__37604 = (x_37603 + (1));
x_37603 = G__37604;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37605 = (i + (1));
i = G__37605;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37606 = (function (flag,meta37607){
this.flag = flag;
this.meta37607 = meta37607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37608,meta37607__$1){
var self__ = this;
var _37608__$1 = this;
return (new cljs.core.async.t_cljs$core$async37606(self__.flag,meta37607__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37608){
var self__ = this;
var _37608__$1 = this;
return self__.meta37607;
});})(flag))
;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37606.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37607","meta37607",1776576955,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37606.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37606";

cljs.core.async.t_cljs$core$async37606.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async37606");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37606.
 */
cljs.core.async.__GT_t_cljs$core$async37606 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37606(flag__$1,meta37607){
return (new cljs.core.async.t_cljs$core$async37606(flag__$1,meta37607));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37606(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async37609 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37609 = (function (flag,cb,meta37610){
this.flag = flag;
this.cb = cb;
this.meta37610 = meta37610;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37611,meta37610__$1){
var self__ = this;
var _37611__$1 = this;
return (new cljs.core.async.t_cljs$core$async37609(self__.flag,self__.cb,meta37610__$1));
});

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37611){
var self__ = this;
var _37611__$1 = this;
return self__.meta37610;
});

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37609.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37610","meta37610",-849051336,null)], null);
});

cljs.core.async.t_cljs$core$async37609.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37609.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37609";

cljs.core.async.t_cljs$core$async37609.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async37609");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async37609.
 */
cljs.core.async.__GT_t_cljs$core$async37609 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37609(flag__$1,cb__$1,meta37610){
return (new cljs.core.async.t_cljs$core$async37609(flag__$1,cb__$1,meta37610));
});

}

return (new cljs.core.async.t_cljs$core$async37609(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37612_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37612_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37613_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37613_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37614 = (i + (1));
i = G__37614;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37620 = arguments.length;
var i__4731__auto___37621 = (0);
while(true){
if((i__4731__auto___37621 < len__4730__auto___37620)){
args__4736__auto__.push((arguments[i__4731__auto___37621]));

var G__37622 = (i__4731__auto___37621 + (1));
i__4731__auto___37621 = G__37622;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37617){
var map__37618 = p__37617;
var map__37618__$1 = (((((!((map__37618 == null))))?(((((map__37618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37618):map__37618);
var opts = map__37618__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37615){
var G__37616 = cljs.core.first.call(null,seq37615);
var seq37615__$1 = cljs.core.next.call(null,seq37615);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37616,seq37615__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__37624 = arguments.length;
switch (G__37624) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37523__auto___37670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___37670){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___37670){
return (function (state_37648){
var state_val_37649 = (state_37648[(1)]);
if((state_val_37649 === (7))){
var inst_37644 = (state_37648[(2)]);
var state_37648__$1 = state_37648;
var statearr_37650_37671 = state_37648__$1;
(statearr_37650_37671[(2)] = inst_37644);

(statearr_37650_37671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37649 === (1))){
var state_37648__$1 = state_37648;
var statearr_37651_37672 = state_37648__$1;
(statearr_37651_37672[(2)] = null);

(statearr_37651_37672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37649 === (4))){
var inst_37627 = (state_37648[(7)]);
var inst_37627__$1 = (state_37648[(2)]);
var inst_37628 = (inst_37627__$1 == null);
var state_37648__$1 = (function (){var statearr_37652 = state_37648;
(statearr_37652[(7)] = inst_37627__$1);

return statearr_37652;
})();
if(cljs.core.truth_(inst_37628)){
var statearr_37653_37673 = state_37648__$1;
(statearr_37653_37673[(1)] = (5));

} else {
var statearr_37654_37674 = state_37648__$1;
(statearr_37654_37674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37649 === (13))){
var state_37648__$1 = state_37648;
var statearr_37655_37675 = state_37648__$1;
(statearr_37655_37675[(2)] = null);

(statearr_37655_37675[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37649 === (6))){
var inst_37627 = (state_37648[(7)]);
var state_37648__$1 = state_37648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37648__$1,(11),to,inst_37627);
} else {
if((state_val_37649 === (3))){
var inst_37646 = (state_37648[(2)]);
var state_37648__$1 = state_37648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37648__$1,inst_37646);
} else {
if((state_val_37649 === (12))){
var state_37648__$1 = state_37648;
var statearr_37656_37676 = state_37648__$1;
(statearr_37656_37676[(2)] = null);

(statearr_37656_37676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37649 === (2))){
var state_37648__$1 = state_37648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37648__$1,(4),from);
} else {
if((state_val_37649 === (11))){
var inst_37637 = (state_37648[(2)]);
var state_37648__$1 = state_37648;
if(cljs.core.truth_(inst_37637)){
var statearr_37657_37677 = state_37648__$1;
(statearr_37657_37677[(1)] = (12));

} else {
var statearr_37658_37678 = state_37648__$1;
(statearr_37658_37678[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37649 === (9))){
var state_37648__$1 = state_37648;
var statearr_37659_37679 = state_37648__$1;
(statearr_37659_37679[(2)] = null);

(statearr_37659_37679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37649 === (5))){
var state_37648__$1 = state_37648;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37660_37680 = state_37648__$1;
(statearr_37660_37680[(1)] = (8));

} else {
var statearr_37661_37681 = state_37648__$1;
(statearr_37661_37681[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37649 === (14))){
var inst_37642 = (state_37648[(2)]);
var state_37648__$1 = state_37648;
var statearr_37662_37682 = state_37648__$1;
(statearr_37662_37682[(2)] = inst_37642);

(statearr_37662_37682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37649 === (10))){
var inst_37634 = (state_37648[(2)]);
var state_37648__$1 = state_37648;
var statearr_37663_37683 = state_37648__$1;
(statearr_37663_37683[(2)] = inst_37634);

(statearr_37663_37683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37649 === (8))){
var inst_37631 = cljs.core.async.close_BANG_.call(null,to);
var state_37648__$1 = state_37648;
var statearr_37664_37684 = state_37648__$1;
(statearr_37664_37684[(2)] = inst_37631);

(statearr_37664_37684[(1)] = (10));


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
});})(c__37523__auto___37670))
;
return ((function (switch__37428__auto__,c__37523__auto___37670){
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_37665 = [null,null,null,null,null,null,null,null];
(statearr_37665[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_37665[(1)] = (1));

return statearr_37665;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_37648){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_37648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e37666){if((e37666 instanceof Object)){
var ex__37432__auto__ = e37666;
var statearr_37667_37685 = state_37648;
(statearr_37667_37685[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37666;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37686 = state_37648;
state_37648 = G__37686;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_37648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_37648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___37670))
})();
var state__37525__auto__ = (function (){var statearr_37668 = f__37524__auto__.call(null);
(statearr_37668[(6)] = c__37523__auto___37670);

return statearr_37668;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___37670))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37687){
var vec__37688 = p__37687;
var v = cljs.core.nth.call(null,vec__37688,(0),null);
var p = cljs.core.nth.call(null,vec__37688,(1),null);
var job = vec__37688;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37523__auto___37859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___37859,res,vec__37688,v,p,job,jobs,results){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___37859,res,vec__37688,v,p,job,jobs,results){
return (function (state_37695){
var state_val_37696 = (state_37695[(1)]);
if((state_val_37696 === (1))){
var state_37695__$1 = state_37695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37695__$1,(2),res,v);
} else {
if((state_val_37696 === (2))){
var inst_37692 = (state_37695[(2)]);
var inst_37693 = cljs.core.async.close_BANG_.call(null,res);
var state_37695__$1 = (function (){var statearr_37697 = state_37695;
(statearr_37697[(7)] = inst_37692);

return statearr_37697;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37695__$1,inst_37693);
} else {
return null;
}
}
});})(c__37523__auto___37859,res,vec__37688,v,p,job,jobs,results))
;
return ((function (switch__37428__auto__,c__37523__auto___37859,res,vec__37688,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_37698 = [null,null,null,null,null,null,null,null];
(statearr_37698[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__);

(statearr_37698[(1)] = (1));

return statearr_37698;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1 = (function (state_37695){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_37695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e37699){if((e37699 instanceof Object)){
var ex__37432__auto__ = e37699;
var statearr_37700_37860 = state_37695;
(statearr_37700_37860[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37861 = state_37695;
state_37695 = G__37861;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = function(state_37695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1.call(this,state_37695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___37859,res,vec__37688,v,p,job,jobs,results))
})();
var state__37525__auto__ = (function (){var statearr_37701 = f__37524__auto__.call(null);
(statearr_37701[(6)] = c__37523__auto___37859);

return statearr_37701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___37859,res,vec__37688,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37702){
var vec__37703 = p__37702;
var v = cljs.core.nth.call(null,vec__37703,(0),null);
var p = cljs.core.nth.call(null,vec__37703,(1),null);
var job = vec__37703;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___37862 = n;
var __37863 = (0);
while(true){
if((__37863 < n__4607__auto___37862)){
var G__37706_37864 = type;
var G__37706_37865__$1 = (((G__37706_37864 instanceof cljs.core.Keyword))?G__37706_37864.fqn:null);
switch (G__37706_37865__$1) {
case "compute":
var c__37523__auto___37867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37863,c__37523__auto___37867,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (__37863,c__37523__auto___37867,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async){
return (function (state_37719){
var state_val_37720 = (state_37719[(1)]);
if((state_val_37720 === (1))){
var state_37719__$1 = state_37719;
var statearr_37721_37868 = state_37719__$1;
(statearr_37721_37868[(2)] = null);

(statearr_37721_37868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (2))){
var state_37719__$1 = state_37719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37719__$1,(4),jobs);
} else {
if((state_val_37720 === (3))){
var inst_37717 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37719__$1,inst_37717);
} else {
if((state_val_37720 === (4))){
var inst_37709 = (state_37719[(2)]);
var inst_37710 = process.call(null,inst_37709);
var state_37719__$1 = state_37719;
if(cljs.core.truth_(inst_37710)){
var statearr_37722_37869 = state_37719__$1;
(statearr_37722_37869[(1)] = (5));

} else {
var statearr_37723_37870 = state_37719__$1;
(statearr_37723_37870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (5))){
var state_37719__$1 = state_37719;
var statearr_37724_37871 = state_37719__$1;
(statearr_37724_37871[(2)] = null);

(statearr_37724_37871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (6))){
var state_37719__$1 = state_37719;
var statearr_37725_37872 = state_37719__$1;
(statearr_37725_37872[(2)] = null);

(statearr_37725_37872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37720 === (7))){
var inst_37715 = (state_37719[(2)]);
var state_37719__$1 = state_37719;
var statearr_37726_37873 = state_37719__$1;
(statearr_37726_37873[(2)] = inst_37715);

(statearr_37726_37873[(1)] = (3));


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
});})(__37863,c__37523__auto___37867,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async))
;
return ((function (__37863,switch__37428__auto__,c__37523__auto___37867,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_37727 = [null,null,null,null,null,null,null];
(statearr_37727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__);

(statearr_37727[(1)] = (1));

return statearr_37727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1 = (function (state_37719){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_37719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e37728){if((e37728 instanceof Object)){
var ex__37432__auto__ = e37728;
var statearr_37729_37874 = state_37719;
(statearr_37729_37874[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37875 = state_37719;
state_37719 = G__37875;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = function(state_37719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1.call(this,state_37719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__;
})()
;})(__37863,switch__37428__auto__,c__37523__auto___37867,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async))
})();
var state__37525__auto__ = (function (){var statearr_37730 = f__37524__auto__.call(null);
(statearr_37730[(6)] = c__37523__auto___37867);

return statearr_37730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(__37863,c__37523__auto___37867,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async))
);


break;
case "async":
var c__37523__auto___37876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37863,c__37523__auto___37876,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (__37863,c__37523__auto___37876,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async){
return (function (state_37743){
var state_val_37744 = (state_37743[(1)]);
if((state_val_37744 === (1))){
var state_37743__$1 = state_37743;
var statearr_37745_37877 = state_37743__$1;
(statearr_37745_37877[(2)] = null);

(statearr_37745_37877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (2))){
var state_37743__$1 = state_37743;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37743__$1,(4),jobs);
} else {
if((state_val_37744 === (3))){
var inst_37741 = (state_37743[(2)]);
var state_37743__$1 = state_37743;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37743__$1,inst_37741);
} else {
if((state_val_37744 === (4))){
var inst_37733 = (state_37743[(2)]);
var inst_37734 = async.call(null,inst_37733);
var state_37743__$1 = state_37743;
if(cljs.core.truth_(inst_37734)){
var statearr_37746_37878 = state_37743__$1;
(statearr_37746_37878[(1)] = (5));

} else {
var statearr_37747_37879 = state_37743__$1;
(statearr_37747_37879[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (5))){
var state_37743__$1 = state_37743;
var statearr_37748_37880 = state_37743__$1;
(statearr_37748_37880[(2)] = null);

(statearr_37748_37880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (6))){
var state_37743__$1 = state_37743;
var statearr_37749_37881 = state_37743__$1;
(statearr_37749_37881[(2)] = null);

(statearr_37749_37881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37744 === (7))){
var inst_37739 = (state_37743[(2)]);
var state_37743__$1 = state_37743;
var statearr_37750_37882 = state_37743__$1;
(statearr_37750_37882[(2)] = inst_37739);

(statearr_37750_37882[(1)] = (3));


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
});})(__37863,c__37523__auto___37876,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async))
;
return ((function (__37863,switch__37428__auto__,c__37523__auto___37876,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_37751 = [null,null,null,null,null,null,null];
(statearr_37751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__);

(statearr_37751[(1)] = (1));

return statearr_37751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1 = (function (state_37743){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_37743);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e37752){if((e37752 instanceof Object)){
var ex__37432__auto__ = e37752;
var statearr_37753_37883 = state_37743;
(statearr_37753_37883[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37743);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37884 = state_37743;
state_37743 = G__37884;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = function(state_37743){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1.call(this,state_37743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__;
})()
;})(__37863,switch__37428__auto__,c__37523__auto___37876,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async))
})();
var state__37525__auto__ = (function (){var statearr_37754 = f__37524__auto__.call(null);
(statearr_37754[(6)] = c__37523__auto___37876);

return statearr_37754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(__37863,c__37523__auto___37876,G__37706_37864,G__37706_37865__$1,n__4607__auto___37862,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37706_37865__$1)].join('')));

}

var G__37885 = (__37863 + (1));
__37863 = G__37885;
continue;
} else {
}
break;
}

var c__37523__auto___37886 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___37886,jobs,results,process,async){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___37886,jobs,results,process,async){
return (function (state_37776){
var state_val_37777 = (state_37776[(1)]);
if((state_val_37777 === (7))){
var inst_37772 = (state_37776[(2)]);
var state_37776__$1 = state_37776;
var statearr_37778_37887 = state_37776__$1;
(statearr_37778_37887[(2)] = inst_37772);

(statearr_37778_37887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37777 === (1))){
var state_37776__$1 = state_37776;
var statearr_37779_37888 = state_37776__$1;
(statearr_37779_37888[(2)] = null);

(statearr_37779_37888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37777 === (4))){
var inst_37757 = (state_37776[(7)]);
var inst_37757__$1 = (state_37776[(2)]);
var inst_37758 = (inst_37757__$1 == null);
var state_37776__$1 = (function (){var statearr_37780 = state_37776;
(statearr_37780[(7)] = inst_37757__$1);

return statearr_37780;
})();
if(cljs.core.truth_(inst_37758)){
var statearr_37781_37889 = state_37776__$1;
(statearr_37781_37889[(1)] = (5));

} else {
var statearr_37782_37890 = state_37776__$1;
(statearr_37782_37890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37777 === (6))){
var inst_37757 = (state_37776[(7)]);
var inst_37762 = (state_37776[(8)]);
var inst_37762__$1 = cljs.core.async.chan.call(null,(1));
var inst_37763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37764 = [inst_37757,inst_37762__$1];
var inst_37765 = (new cljs.core.PersistentVector(null,2,(5),inst_37763,inst_37764,null));
var state_37776__$1 = (function (){var statearr_37783 = state_37776;
(statearr_37783[(8)] = inst_37762__$1);

return statearr_37783;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37776__$1,(8),jobs,inst_37765);
} else {
if((state_val_37777 === (3))){
var inst_37774 = (state_37776[(2)]);
var state_37776__$1 = state_37776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37776__$1,inst_37774);
} else {
if((state_val_37777 === (2))){
var state_37776__$1 = state_37776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37776__$1,(4),from);
} else {
if((state_val_37777 === (9))){
var inst_37769 = (state_37776[(2)]);
var state_37776__$1 = (function (){var statearr_37784 = state_37776;
(statearr_37784[(9)] = inst_37769);

return statearr_37784;
})();
var statearr_37785_37891 = state_37776__$1;
(statearr_37785_37891[(2)] = null);

(statearr_37785_37891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37777 === (5))){
var inst_37760 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37776__$1 = state_37776;
var statearr_37786_37892 = state_37776__$1;
(statearr_37786_37892[(2)] = inst_37760);

(statearr_37786_37892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37777 === (8))){
var inst_37762 = (state_37776[(8)]);
var inst_37767 = (state_37776[(2)]);
var state_37776__$1 = (function (){var statearr_37787 = state_37776;
(statearr_37787[(10)] = inst_37767);

return statearr_37787;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37776__$1,(9),results,inst_37762);
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
});})(c__37523__auto___37886,jobs,results,process,async))
;
return ((function (switch__37428__auto__,c__37523__auto___37886,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_37788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37788[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__);

(statearr_37788[(1)] = (1));

return statearr_37788;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1 = (function (state_37776){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_37776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e37789){if((e37789 instanceof Object)){
var ex__37432__auto__ = e37789;
var statearr_37790_37893 = state_37776;
(statearr_37790_37893[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37894 = state_37776;
state_37776 = G__37894;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = function(state_37776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1.call(this,state_37776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___37886,jobs,results,process,async))
})();
var state__37525__auto__ = (function (){var statearr_37791 = f__37524__auto__.call(null);
(statearr_37791[(6)] = c__37523__auto___37886);

return statearr_37791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___37886,jobs,results,process,async))
);


var c__37523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto__,jobs,results,process,async){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto__,jobs,results,process,async){
return (function (state_37829){
var state_val_37830 = (state_37829[(1)]);
if((state_val_37830 === (7))){
var inst_37825 = (state_37829[(2)]);
var state_37829__$1 = state_37829;
var statearr_37831_37895 = state_37829__$1;
(statearr_37831_37895[(2)] = inst_37825);

(statearr_37831_37895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (20))){
var state_37829__$1 = state_37829;
var statearr_37832_37896 = state_37829__$1;
(statearr_37832_37896[(2)] = null);

(statearr_37832_37896[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (1))){
var state_37829__$1 = state_37829;
var statearr_37833_37897 = state_37829__$1;
(statearr_37833_37897[(2)] = null);

(statearr_37833_37897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (4))){
var inst_37794 = (state_37829[(7)]);
var inst_37794__$1 = (state_37829[(2)]);
var inst_37795 = (inst_37794__$1 == null);
var state_37829__$1 = (function (){var statearr_37834 = state_37829;
(statearr_37834[(7)] = inst_37794__$1);

return statearr_37834;
})();
if(cljs.core.truth_(inst_37795)){
var statearr_37835_37898 = state_37829__$1;
(statearr_37835_37898[(1)] = (5));

} else {
var statearr_37836_37899 = state_37829__$1;
(statearr_37836_37899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (15))){
var inst_37807 = (state_37829[(8)]);
var state_37829__$1 = state_37829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37829__$1,(18),to,inst_37807);
} else {
if((state_val_37830 === (21))){
var inst_37820 = (state_37829[(2)]);
var state_37829__$1 = state_37829;
var statearr_37837_37900 = state_37829__$1;
(statearr_37837_37900[(2)] = inst_37820);

(statearr_37837_37900[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (13))){
var inst_37822 = (state_37829[(2)]);
var state_37829__$1 = (function (){var statearr_37838 = state_37829;
(statearr_37838[(9)] = inst_37822);

return statearr_37838;
})();
var statearr_37839_37901 = state_37829__$1;
(statearr_37839_37901[(2)] = null);

(statearr_37839_37901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (6))){
var inst_37794 = (state_37829[(7)]);
var state_37829__$1 = state_37829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37829__$1,(11),inst_37794);
} else {
if((state_val_37830 === (17))){
var inst_37815 = (state_37829[(2)]);
var state_37829__$1 = state_37829;
if(cljs.core.truth_(inst_37815)){
var statearr_37840_37902 = state_37829__$1;
(statearr_37840_37902[(1)] = (19));

} else {
var statearr_37841_37903 = state_37829__$1;
(statearr_37841_37903[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (3))){
var inst_37827 = (state_37829[(2)]);
var state_37829__$1 = state_37829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37829__$1,inst_37827);
} else {
if((state_val_37830 === (12))){
var inst_37804 = (state_37829[(10)]);
var state_37829__$1 = state_37829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37829__$1,(14),inst_37804);
} else {
if((state_val_37830 === (2))){
var state_37829__$1 = state_37829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37829__$1,(4),results);
} else {
if((state_val_37830 === (19))){
var state_37829__$1 = state_37829;
var statearr_37842_37904 = state_37829__$1;
(statearr_37842_37904[(2)] = null);

(statearr_37842_37904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (11))){
var inst_37804 = (state_37829[(2)]);
var state_37829__$1 = (function (){var statearr_37843 = state_37829;
(statearr_37843[(10)] = inst_37804);

return statearr_37843;
})();
var statearr_37844_37905 = state_37829__$1;
(statearr_37844_37905[(2)] = null);

(statearr_37844_37905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (9))){
var state_37829__$1 = state_37829;
var statearr_37845_37906 = state_37829__$1;
(statearr_37845_37906[(2)] = null);

(statearr_37845_37906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (5))){
var state_37829__$1 = state_37829;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37846_37907 = state_37829__$1;
(statearr_37846_37907[(1)] = (8));

} else {
var statearr_37847_37908 = state_37829__$1;
(statearr_37847_37908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (14))){
var inst_37809 = (state_37829[(11)]);
var inst_37807 = (state_37829[(8)]);
var inst_37807__$1 = (state_37829[(2)]);
var inst_37808 = (inst_37807__$1 == null);
var inst_37809__$1 = cljs.core.not.call(null,inst_37808);
var state_37829__$1 = (function (){var statearr_37848 = state_37829;
(statearr_37848[(11)] = inst_37809__$1);

(statearr_37848[(8)] = inst_37807__$1);

return statearr_37848;
})();
if(inst_37809__$1){
var statearr_37849_37909 = state_37829__$1;
(statearr_37849_37909[(1)] = (15));

} else {
var statearr_37850_37910 = state_37829__$1;
(statearr_37850_37910[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (16))){
var inst_37809 = (state_37829[(11)]);
var state_37829__$1 = state_37829;
var statearr_37851_37911 = state_37829__$1;
(statearr_37851_37911[(2)] = inst_37809);

(statearr_37851_37911[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (10))){
var inst_37801 = (state_37829[(2)]);
var state_37829__$1 = state_37829;
var statearr_37852_37912 = state_37829__$1;
(statearr_37852_37912[(2)] = inst_37801);

(statearr_37852_37912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (18))){
var inst_37812 = (state_37829[(2)]);
var state_37829__$1 = state_37829;
var statearr_37853_37913 = state_37829__$1;
(statearr_37853_37913[(2)] = inst_37812);

(statearr_37853_37913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37830 === (8))){
var inst_37798 = cljs.core.async.close_BANG_.call(null,to);
var state_37829__$1 = state_37829;
var statearr_37854_37914 = state_37829__$1;
(statearr_37854_37914[(2)] = inst_37798);

(statearr_37854_37914[(1)] = (10));


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
});})(c__37523__auto__,jobs,results,process,async))
;
return ((function (switch__37428__auto__,c__37523__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_37855 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__);

(statearr_37855[(1)] = (1));

return statearr_37855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1 = (function (state_37829){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_37829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e37856){if((e37856 instanceof Object)){
var ex__37432__auto__ = e37856;
var statearr_37857_37915 = state_37829;
(statearr_37857_37915[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37916 = state_37829;
state_37829 = G__37916;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__ = function(state_37829){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1.call(this,state_37829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto__,jobs,results,process,async))
})();
var state__37525__auto__ = (function (){var statearr_37858 = f__37524__auto__.call(null);
(statearr_37858[(6)] = c__37523__auto__);

return statearr_37858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto__,jobs,results,process,async))
);

return c__37523__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__37918 = arguments.length;
switch (G__37918) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__37921 = arguments.length;
switch (G__37921) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__37924 = arguments.length;
switch (G__37924) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37523__auto___37973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___37973,tc,fc){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___37973,tc,fc){
return (function (state_37950){
var state_val_37951 = (state_37950[(1)]);
if((state_val_37951 === (7))){
var inst_37946 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
var statearr_37952_37974 = state_37950__$1;
(statearr_37952_37974[(2)] = inst_37946);

(statearr_37952_37974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (1))){
var state_37950__$1 = state_37950;
var statearr_37953_37975 = state_37950__$1;
(statearr_37953_37975[(2)] = null);

(statearr_37953_37975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (4))){
var inst_37927 = (state_37950[(7)]);
var inst_37927__$1 = (state_37950[(2)]);
var inst_37928 = (inst_37927__$1 == null);
var state_37950__$1 = (function (){var statearr_37954 = state_37950;
(statearr_37954[(7)] = inst_37927__$1);

return statearr_37954;
})();
if(cljs.core.truth_(inst_37928)){
var statearr_37955_37976 = state_37950__$1;
(statearr_37955_37976[(1)] = (5));

} else {
var statearr_37956_37977 = state_37950__$1;
(statearr_37956_37977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (13))){
var state_37950__$1 = state_37950;
var statearr_37957_37978 = state_37950__$1;
(statearr_37957_37978[(2)] = null);

(statearr_37957_37978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (6))){
var inst_37927 = (state_37950[(7)]);
var inst_37933 = p.call(null,inst_37927);
var state_37950__$1 = state_37950;
if(cljs.core.truth_(inst_37933)){
var statearr_37958_37979 = state_37950__$1;
(statearr_37958_37979[(1)] = (9));

} else {
var statearr_37959_37980 = state_37950__$1;
(statearr_37959_37980[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (3))){
var inst_37948 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37950__$1,inst_37948);
} else {
if((state_val_37951 === (12))){
var state_37950__$1 = state_37950;
var statearr_37960_37981 = state_37950__$1;
(statearr_37960_37981[(2)] = null);

(statearr_37960_37981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (2))){
var state_37950__$1 = state_37950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37950__$1,(4),ch);
} else {
if((state_val_37951 === (11))){
var inst_37927 = (state_37950[(7)]);
var inst_37937 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37950__$1,(8),inst_37937,inst_37927);
} else {
if((state_val_37951 === (9))){
var state_37950__$1 = state_37950;
var statearr_37961_37982 = state_37950__$1;
(statearr_37961_37982[(2)] = tc);

(statearr_37961_37982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (5))){
var inst_37930 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37931 = cljs.core.async.close_BANG_.call(null,fc);
var state_37950__$1 = (function (){var statearr_37962 = state_37950;
(statearr_37962[(8)] = inst_37930);

return statearr_37962;
})();
var statearr_37963_37983 = state_37950__$1;
(statearr_37963_37983[(2)] = inst_37931);

(statearr_37963_37983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (14))){
var inst_37944 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
var statearr_37964_37984 = state_37950__$1;
(statearr_37964_37984[(2)] = inst_37944);

(statearr_37964_37984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (10))){
var state_37950__$1 = state_37950;
var statearr_37965_37985 = state_37950__$1;
(statearr_37965_37985[(2)] = fc);

(statearr_37965_37985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37951 === (8))){
var inst_37939 = (state_37950[(2)]);
var state_37950__$1 = state_37950;
if(cljs.core.truth_(inst_37939)){
var statearr_37966_37986 = state_37950__$1;
(statearr_37966_37986[(1)] = (12));

} else {
var statearr_37967_37987 = state_37950__$1;
(statearr_37967_37987[(1)] = (13));

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
});})(c__37523__auto___37973,tc,fc))
;
return ((function (switch__37428__auto__,c__37523__auto___37973,tc,fc){
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_37968 = [null,null,null,null,null,null,null,null,null];
(statearr_37968[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_37968[(1)] = (1));

return statearr_37968;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_37950){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_37950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e37969){if((e37969 instanceof Object)){
var ex__37432__auto__ = e37969;
var statearr_37970_37988 = state_37950;
(statearr_37970_37988[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37989 = state_37950;
state_37950 = G__37989;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_37950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_37950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___37973,tc,fc))
})();
var state__37525__auto__ = (function (){var statearr_37971 = f__37524__auto__.call(null);
(statearr_37971[(6)] = c__37523__auto___37973);

return statearr_37971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___37973,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto__){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto__){
return (function (state_38010){
var state_val_38011 = (state_38010[(1)]);
if((state_val_38011 === (7))){
var inst_38006 = (state_38010[(2)]);
var state_38010__$1 = state_38010;
var statearr_38012_38030 = state_38010__$1;
(statearr_38012_38030[(2)] = inst_38006);

(statearr_38012_38030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (1))){
var inst_37990 = init;
var state_38010__$1 = (function (){var statearr_38013 = state_38010;
(statearr_38013[(7)] = inst_37990);

return statearr_38013;
})();
var statearr_38014_38031 = state_38010__$1;
(statearr_38014_38031[(2)] = null);

(statearr_38014_38031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (4))){
var inst_37993 = (state_38010[(8)]);
var inst_37993__$1 = (state_38010[(2)]);
var inst_37994 = (inst_37993__$1 == null);
var state_38010__$1 = (function (){var statearr_38015 = state_38010;
(statearr_38015[(8)] = inst_37993__$1);

return statearr_38015;
})();
if(cljs.core.truth_(inst_37994)){
var statearr_38016_38032 = state_38010__$1;
(statearr_38016_38032[(1)] = (5));

} else {
var statearr_38017_38033 = state_38010__$1;
(statearr_38017_38033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (6))){
var inst_37997 = (state_38010[(9)]);
var inst_37993 = (state_38010[(8)]);
var inst_37990 = (state_38010[(7)]);
var inst_37997__$1 = f.call(null,inst_37990,inst_37993);
var inst_37998 = cljs.core.reduced_QMARK_.call(null,inst_37997__$1);
var state_38010__$1 = (function (){var statearr_38018 = state_38010;
(statearr_38018[(9)] = inst_37997__$1);

return statearr_38018;
})();
if(inst_37998){
var statearr_38019_38034 = state_38010__$1;
(statearr_38019_38034[(1)] = (8));

} else {
var statearr_38020_38035 = state_38010__$1;
(statearr_38020_38035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (3))){
var inst_38008 = (state_38010[(2)]);
var state_38010__$1 = state_38010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38010__$1,inst_38008);
} else {
if((state_val_38011 === (2))){
var state_38010__$1 = state_38010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38010__$1,(4),ch);
} else {
if((state_val_38011 === (9))){
var inst_37997 = (state_38010[(9)]);
var inst_37990 = inst_37997;
var state_38010__$1 = (function (){var statearr_38021 = state_38010;
(statearr_38021[(7)] = inst_37990);

return statearr_38021;
})();
var statearr_38022_38036 = state_38010__$1;
(statearr_38022_38036[(2)] = null);

(statearr_38022_38036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (5))){
var inst_37990 = (state_38010[(7)]);
var state_38010__$1 = state_38010;
var statearr_38023_38037 = state_38010__$1;
(statearr_38023_38037[(2)] = inst_37990);

(statearr_38023_38037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (10))){
var inst_38004 = (state_38010[(2)]);
var state_38010__$1 = state_38010;
var statearr_38024_38038 = state_38010__$1;
(statearr_38024_38038[(2)] = inst_38004);

(statearr_38024_38038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38011 === (8))){
var inst_37997 = (state_38010[(9)]);
var inst_38000 = cljs.core.deref.call(null,inst_37997);
var state_38010__$1 = state_38010;
var statearr_38025_38039 = state_38010__$1;
(statearr_38025_38039[(2)] = inst_38000);

(statearr_38025_38039[(1)] = (10));


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
});})(c__37523__auto__))
;
return ((function (switch__37428__auto__,c__37523__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37429__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37429__auto____0 = (function (){
var statearr_38026 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38026[(0)] = cljs$core$async$reduce_$_state_machine__37429__auto__);

(statearr_38026[(1)] = (1));

return statearr_38026;
});
var cljs$core$async$reduce_$_state_machine__37429__auto____1 = (function (state_38010){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_38010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38027){if((e38027 instanceof Object)){
var ex__37432__auto__ = e38027;
var statearr_38028_38040 = state_38010;
(statearr_38028_38040[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38041 = state_38010;
state_38010 = G__38041;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37429__auto__ = function(state_38010){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37429__auto____1.call(this,state_38010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37429__auto____0;
cljs$core$async$reduce_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37429__auto____1;
return cljs$core$async$reduce_$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto__))
})();
var state__37525__auto__ = (function (){var statearr_38029 = f__37524__auto__.call(null);
(statearr_38029[(6)] = c__37523__auto__);

return statearr_38029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto__))
);

return c__37523__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__37523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto__,f__$1){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto__,f__$1){
return (function (state_38047){
var state_val_38048 = (state_38047[(1)]);
if((state_val_38048 === (1))){
var inst_38042 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_38047__$1 = state_38047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38047__$1,(2),inst_38042);
} else {
if((state_val_38048 === (2))){
var inst_38044 = (state_38047[(2)]);
var inst_38045 = f__$1.call(null,inst_38044);
var state_38047__$1 = state_38047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38047__$1,inst_38045);
} else {
return null;
}
}
});})(c__37523__auto__,f__$1))
;
return ((function (switch__37428__auto__,c__37523__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__37429__auto__ = null;
var cljs$core$async$transduce_$_state_machine__37429__auto____0 = (function (){
var statearr_38049 = [null,null,null,null,null,null,null];
(statearr_38049[(0)] = cljs$core$async$transduce_$_state_machine__37429__auto__);

(statearr_38049[(1)] = (1));

return statearr_38049;
});
var cljs$core$async$transduce_$_state_machine__37429__auto____1 = (function (state_38047){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_38047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38050){if((e38050 instanceof Object)){
var ex__37432__auto__ = e38050;
var statearr_38051_38053 = state_38047;
(statearr_38051_38053[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38054 = state_38047;
state_38047 = G__38054;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__37429__auto__ = function(state_38047){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__37429__auto____1.call(this,state_38047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__37429__auto____0;
cljs$core$async$transduce_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__37429__auto____1;
return cljs$core$async$transduce_$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto__,f__$1))
})();
var state__37525__auto__ = (function (){var statearr_38052 = f__37524__auto__.call(null);
(statearr_38052[(6)] = c__37523__auto__);

return statearr_38052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto__,f__$1))
);

return c__37523__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__38056 = arguments.length;
switch (G__38056) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto__){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto__){
return (function (state_38081){
var state_val_38082 = (state_38081[(1)]);
if((state_val_38082 === (7))){
var inst_38063 = (state_38081[(2)]);
var state_38081__$1 = state_38081;
var statearr_38083_38104 = state_38081__$1;
(statearr_38083_38104[(2)] = inst_38063);

(statearr_38083_38104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38082 === (1))){
var inst_38057 = cljs.core.seq.call(null,coll);
var inst_38058 = inst_38057;
var state_38081__$1 = (function (){var statearr_38084 = state_38081;
(statearr_38084[(7)] = inst_38058);

return statearr_38084;
})();
var statearr_38085_38105 = state_38081__$1;
(statearr_38085_38105[(2)] = null);

(statearr_38085_38105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38082 === (4))){
var inst_38058 = (state_38081[(7)]);
var inst_38061 = cljs.core.first.call(null,inst_38058);
var state_38081__$1 = state_38081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38081__$1,(7),ch,inst_38061);
} else {
if((state_val_38082 === (13))){
var inst_38075 = (state_38081[(2)]);
var state_38081__$1 = state_38081;
var statearr_38086_38106 = state_38081__$1;
(statearr_38086_38106[(2)] = inst_38075);

(statearr_38086_38106[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38082 === (6))){
var inst_38066 = (state_38081[(2)]);
var state_38081__$1 = state_38081;
if(cljs.core.truth_(inst_38066)){
var statearr_38087_38107 = state_38081__$1;
(statearr_38087_38107[(1)] = (8));

} else {
var statearr_38088_38108 = state_38081__$1;
(statearr_38088_38108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38082 === (3))){
var inst_38079 = (state_38081[(2)]);
var state_38081__$1 = state_38081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38081__$1,inst_38079);
} else {
if((state_val_38082 === (12))){
var state_38081__$1 = state_38081;
var statearr_38089_38109 = state_38081__$1;
(statearr_38089_38109[(2)] = null);

(statearr_38089_38109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38082 === (2))){
var inst_38058 = (state_38081[(7)]);
var state_38081__$1 = state_38081;
if(cljs.core.truth_(inst_38058)){
var statearr_38090_38110 = state_38081__$1;
(statearr_38090_38110[(1)] = (4));

} else {
var statearr_38091_38111 = state_38081__$1;
(statearr_38091_38111[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38082 === (11))){
var inst_38072 = cljs.core.async.close_BANG_.call(null,ch);
var state_38081__$1 = state_38081;
var statearr_38092_38112 = state_38081__$1;
(statearr_38092_38112[(2)] = inst_38072);

(statearr_38092_38112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38082 === (9))){
var state_38081__$1 = state_38081;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38093_38113 = state_38081__$1;
(statearr_38093_38113[(1)] = (11));

} else {
var statearr_38094_38114 = state_38081__$1;
(statearr_38094_38114[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38082 === (5))){
var inst_38058 = (state_38081[(7)]);
var state_38081__$1 = state_38081;
var statearr_38095_38115 = state_38081__$1;
(statearr_38095_38115[(2)] = inst_38058);

(statearr_38095_38115[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38082 === (10))){
var inst_38077 = (state_38081[(2)]);
var state_38081__$1 = state_38081;
var statearr_38096_38116 = state_38081__$1;
(statearr_38096_38116[(2)] = inst_38077);

(statearr_38096_38116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38082 === (8))){
var inst_38058 = (state_38081[(7)]);
var inst_38068 = cljs.core.next.call(null,inst_38058);
var inst_38058__$1 = inst_38068;
var state_38081__$1 = (function (){var statearr_38097 = state_38081;
(statearr_38097[(7)] = inst_38058__$1);

return statearr_38097;
})();
var statearr_38098_38117 = state_38081__$1;
(statearr_38098_38117[(2)] = null);

(statearr_38098_38117[(1)] = (2));


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
});})(c__37523__auto__))
;
return ((function (switch__37428__auto__,c__37523__auto__){
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_38099 = [null,null,null,null,null,null,null,null];
(statearr_38099[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_38099[(1)] = (1));

return statearr_38099;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_38081){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_38081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38100){if((e38100 instanceof Object)){
var ex__37432__auto__ = e38100;
var statearr_38101_38118 = state_38081;
(statearr_38101_38118[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38119 = state_38081;
state_38081 = G__38119;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_38081){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_38081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto__))
})();
var state__37525__auto__ = (function (){var statearr_38102 = f__37524__auto__.call(null);
(statearr_38102[(6)] = c__37523__auto__);

return statearr_38102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto__))
);

return c__37523__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38120 = (function (ch,cs,meta38121){
this.ch = ch;
this.cs = cs;
this.meta38121 = meta38121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38122,meta38121__$1){
var self__ = this;
var _38122__$1 = this;
return (new cljs.core.async.t_cljs$core$async38120(self__.ch,self__.cs,meta38121__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38120.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38122){
var self__ = this;
var _38122__$1 = this;
return self__.meta38121;
});})(cs))
;

cljs.core.async.t_cljs$core$async38120.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38120.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38120.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38120.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38120.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38120.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38120.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38121","meta38121",1860114713,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38120.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38120.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38120";

cljs.core.async.t_cljs$core$async38120.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async38120");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38120.
 */
cljs.core.async.__GT_t_cljs$core$async38120 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38120(ch__$1,cs__$1,meta38121){
return (new cljs.core.async.t_cljs$core$async38120(ch__$1,cs__$1,meta38121));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38120(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__37523__auto___38342 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___38342,cs,m,dchan,dctr,done){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___38342,cs,m,dchan,dctr,done){
return (function (state_38257){
var state_val_38258 = (state_38257[(1)]);
if((state_val_38258 === (7))){
var inst_38253 = (state_38257[(2)]);
var state_38257__$1 = state_38257;
var statearr_38259_38343 = state_38257__$1;
(statearr_38259_38343[(2)] = inst_38253);

(statearr_38259_38343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (20))){
var inst_38156 = (state_38257[(7)]);
var inst_38168 = cljs.core.first.call(null,inst_38156);
var inst_38169 = cljs.core.nth.call(null,inst_38168,(0),null);
var inst_38170 = cljs.core.nth.call(null,inst_38168,(1),null);
var state_38257__$1 = (function (){var statearr_38260 = state_38257;
(statearr_38260[(8)] = inst_38169);

return statearr_38260;
})();
if(cljs.core.truth_(inst_38170)){
var statearr_38261_38344 = state_38257__$1;
(statearr_38261_38344[(1)] = (22));

} else {
var statearr_38262_38345 = state_38257__$1;
(statearr_38262_38345[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (27))){
var inst_38198 = (state_38257[(9)]);
var inst_38125 = (state_38257[(10)]);
var inst_38200 = (state_38257[(11)]);
var inst_38205 = (state_38257[(12)]);
var inst_38205__$1 = cljs.core._nth.call(null,inst_38198,inst_38200);
var inst_38206 = cljs.core.async.put_BANG_.call(null,inst_38205__$1,inst_38125,done);
var state_38257__$1 = (function (){var statearr_38263 = state_38257;
(statearr_38263[(12)] = inst_38205__$1);

return statearr_38263;
})();
if(cljs.core.truth_(inst_38206)){
var statearr_38264_38346 = state_38257__$1;
(statearr_38264_38346[(1)] = (30));

} else {
var statearr_38265_38347 = state_38257__$1;
(statearr_38265_38347[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (1))){
var state_38257__$1 = state_38257;
var statearr_38266_38348 = state_38257__$1;
(statearr_38266_38348[(2)] = null);

(statearr_38266_38348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (24))){
var inst_38156 = (state_38257[(7)]);
var inst_38175 = (state_38257[(2)]);
var inst_38176 = cljs.core.next.call(null,inst_38156);
var inst_38134 = inst_38176;
var inst_38135 = null;
var inst_38136 = (0);
var inst_38137 = (0);
var state_38257__$1 = (function (){var statearr_38267 = state_38257;
(statearr_38267[(13)] = inst_38134);

(statearr_38267[(14)] = inst_38135);

(statearr_38267[(15)] = inst_38137);

(statearr_38267[(16)] = inst_38175);

(statearr_38267[(17)] = inst_38136);

return statearr_38267;
})();
var statearr_38268_38349 = state_38257__$1;
(statearr_38268_38349[(2)] = null);

(statearr_38268_38349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (39))){
var state_38257__$1 = state_38257;
var statearr_38272_38350 = state_38257__$1;
(statearr_38272_38350[(2)] = null);

(statearr_38272_38350[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (4))){
var inst_38125 = (state_38257[(10)]);
var inst_38125__$1 = (state_38257[(2)]);
var inst_38126 = (inst_38125__$1 == null);
var state_38257__$1 = (function (){var statearr_38273 = state_38257;
(statearr_38273[(10)] = inst_38125__$1);

return statearr_38273;
})();
if(cljs.core.truth_(inst_38126)){
var statearr_38274_38351 = state_38257__$1;
(statearr_38274_38351[(1)] = (5));

} else {
var statearr_38275_38352 = state_38257__$1;
(statearr_38275_38352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (15))){
var inst_38134 = (state_38257[(13)]);
var inst_38135 = (state_38257[(14)]);
var inst_38137 = (state_38257[(15)]);
var inst_38136 = (state_38257[(17)]);
var inst_38152 = (state_38257[(2)]);
var inst_38153 = (inst_38137 + (1));
var tmp38269 = inst_38134;
var tmp38270 = inst_38135;
var tmp38271 = inst_38136;
var inst_38134__$1 = tmp38269;
var inst_38135__$1 = tmp38270;
var inst_38136__$1 = tmp38271;
var inst_38137__$1 = inst_38153;
var state_38257__$1 = (function (){var statearr_38276 = state_38257;
(statearr_38276[(13)] = inst_38134__$1);

(statearr_38276[(18)] = inst_38152);

(statearr_38276[(14)] = inst_38135__$1);

(statearr_38276[(15)] = inst_38137__$1);

(statearr_38276[(17)] = inst_38136__$1);

return statearr_38276;
})();
var statearr_38277_38353 = state_38257__$1;
(statearr_38277_38353[(2)] = null);

(statearr_38277_38353[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (21))){
var inst_38179 = (state_38257[(2)]);
var state_38257__$1 = state_38257;
var statearr_38281_38354 = state_38257__$1;
(statearr_38281_38354[(2)] = inst_38179);

(statearr_38281_38354[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (31))){
var inst_38205 = (state_38257[(12)]);
var inst_38209 = done.call(null,null);
var inst_38210 = cljs.core.async.untap_STAR_.call(null,m,inst_38205);
var state_38257__$1 = (function (){var statearr_38282 = state_38257;
(statearr_38282[(19)] = inst_38209);

return statearr_38282;
})();
var statearr_38283_38355 = state_38257__$1;
(statearr_38283_38355[(2)] = inst_38210);

(statearr_38283_38355[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (32))){
var inst_38197 = (state_38257[(20)]);
var inst_38198 = (state_38257[(9)]);
var inst_38200 = (state_38257[(11)]);
var inst_38199 = (state_38257[(21)]);
var inst_38212 = (state_38257[(2)]);
var inst_38213 = (inst_38200 + (1));
var tmp38278 = inst_38197;
var tmp38279 = inst_38198;
var tmp38280 = inst_38199;
var inst_38197__$1 = tmp38278;
var inst_38198__$1 = tmp38279;
var inst_38199__$1 = tmp38280;
var inst_38200__$1 = inst_38213;
var state_38257__$1 = (function (){var statearr_38284 = state_38257;
(statearr_38284[(20)] = inst_38197__$1);

(statearr_38284[(9)] = inst_38198__$1);

(statearr_38284[(11)] = inst_38200__$1);

(statearr_38284[(21)] = inst_38199__$1);

(statearr_38284[(22)] = inst_38212);

return statearr_38284;
})();
var statearr_38285_38356 = state_38257__$1;
(statearr_38285_38356[(2)] = null);

(statearr_38285_38356[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (40))){
var inst_38225 = (state_38257[(23)]);
var inst_38229 = done.call(null,null);
var inst_38230 = cljs.core.async.untap_STAR_.call(null,m,inst_38225);
var state_38257__$1 = (function (){var statearr_38286 = state_38257;
(statearr_38286[(24)] = inst_38229);

return statearr_38286;
})();
var statearr_38287_38357 = state_38257__$1;
(statearr_38287_38357[(2)] = inst_38230);

(statearr_38287_38357[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (33))){
var inst_38216 = (state_38257[(25)]);
var inst_38218 = cljs.core.chunked_seq_QMARK_.call(null,inst_38216);
var state_38257__$1 = state_38257;
if(inst_38218){
var statearr_38288_38358 = state_38257__$1;
(statearr_38288_38358[(1)] = (36));

} else {
var statearr_38289_38359 = state_38257__$1;
(statearr_38289_38359[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (13))){
var inst_38146 = (state_38257[(26)]);
var inst_38149 = cljs.core.async.close_BANG_.call(null,inst_38146);
var state_38257__$1 = state_38257;
var statearr_38290_38360 = state_38257__$1;
(statearr_38290_38360[(2)] = inst_38149);

(statearr_38290_38360[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (22))){
var inst_38169 = (state_38257[(8)]);
var inst_38172 = cljs.core.async.close_BANG_.call(null,inst_38169);
var state_38257__$1 = state_38257;
var statearr_38291_38361 = state_38257__$1;
(statearr_38291_38361[(2)] = inst_38172);

(statearr_38291_38361[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (36))){
var inst_38216 = (state_38257[(25)]);
var inst_38220 = cljs.core.chunk_first.call(null,inst_38216);
var inst_38221 = cljs.core.chunk_rest.call(null,inst_38216);
var inst_38222 = cljs.core.count.call(null,inst_38220);
var inst_38197 = inst_38221;
var inst_38198 = inst_38220;
var inst_38199 = inst_38222;
var inst_38200 = (0);
var state_38257__$1 = (function (){var statearr_38292 = state_38257;
(statearr_38292[(20)] = inst_38197);

(statearr_38292[(9)] = inst_38198);

(statearr_38292[(11)] = inst_38200);

(statearr_38292[(21)] = inst_38199);

return statearr_38292;
})();
var statearr_38293_38362 = state_38257__$1;
(statearr_38293_38362[(2)] = null);

(statearr_38293_38362[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (41))){
var inst_38216 = (state_38257[(25)]);
var inst_38232 = (state_38257[(2)]);
var inst_38233 = cljs.core.next.call(null,inst_38216);
var inst_38197 = inst_38233;
var inst_38198 = null;
var inst_38199 = (0);
var inst_38200 = (0);
var state_38257__$1 = (function (){var statearr_38294 = state_38257;
(statearr_38294[(20)] = inst_38197);

(statearr_38294[(9)] = inst_38198);

(statearr_38294[(11)] = inst_38200);

(statearr_38294[(27)] = inst_38232);

(statearr_38294[(21)] = inst_38199);

return statearr_38294;
})();
var statearr_38295_38363 = state_38257__$1;
(statearr_38295_38363[(2)] = null);

(statearr_38295_38363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (43))){
var state_38257__$1 = state_38257;
var statearr_38296_38364 = state_38257__$1;
(statearr_38296_38364[(2)] = null);

(statearr_38296_38364[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (29))){
var inst_38241 = (state_38257[(2)]);
var state_38257__$1 = state_38257;
var statearr_38297_38365 = state_38257__$1;
(statearr_38297_38365[(2)] = inst_38241);

(statearr_38297_38365[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (44))){
var inst_38250 = (state_38257[(2)]);
var state_38257__$1 = (function (){var statearr_38298 = state_38257;
(statearr_38298[(28)] = inst_38250);

return statearr_38298;
})();
var statearr_38299_38366 = state_38257__$1;
(statearr_38299_38366[(2)] = null);

(statearr_38299_38366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (6))){
var inst_38189 = (state_38257[(29)]);
var inst_38188 = cljs.core.deref.call(null,cs);
var inst_38189__$1 = cljs.core.keys.call(null,inst_38188);
var inst_38190 = cljs.core.count.call(null,inst_38189__$1);
var inst_38191 = cljs.core.reset_BANG_.call(null,dctr,inst_38190);
var inst_38196 = cljs.core.seq.call(null,inst_38189__$1);
var inst_38197 = inst_38196;
var inst_38198 = null;
var inst_38199 = (0);
var inst_38200 = (0);
var state_38257__$1 = (function (){var statearr_38300 = state_38257;
(statearr_38300[(20)] = inst_38197);

(statearr_38300[(9)] = inst_38198);

(statearr_38300[(29)] = inst_38189__$1);

(statearr_38300[(30)] = inst_38191);

(statearr_38300[(11)] = inst_38200);

(statearr_38300[(21)] = inst_38199);

return statearr_38300;
})();
var statearr_38301_38367 = state_38257__$1;
(statearr_38301_38367[(2)] = null);

(statearr_38301_38367[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (28))){
var inst_38216 = (state_38257[(25)]);
var inst_38197 = (state_38257[(20)]);
var inst_38216__$1 = cljs.core.seq.call(null,inst_38197);
var state_38257__$1 = (function (){var statearr_38302 = state_38257;
(statearr_38302[(25)] = inst_38216__$1);

return statearr_38302;
})();
if(inst_38216__$1){
var statearr_38303_38368 = state_38257__$1;
(statearr_38303_38368[(1)] = (33));

} else {
var statearr_38304_38369 = state_38257__$1;
(statearr_38304_38369[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (25))){
var inst_38200 = (state_38257[(11)]);
var inst_38199 = (state_38257[(21)]);
var inst_38202 = (inst_38200 < inst_38199);
var inst_38203 = inst_38202;
var state_38257__$1 = state_38257;
if(cljs.core.truth_(inst_38203)){
var statearr_38305_38370 = state_38257__$1;
(statearr_38305_38370[(1)] = (27));

} else {
var statearr_38306_38371 = state_38257__$1;
(statearr_38306_38371[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (34))){
var state_38257__$1 = state_38257;
var statearr_38307_38372 = state_38257__$1;
(statearr_38307_38372[(2)] = null);

(statearr_38307_38372[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (17))){
var state_38257__$1 = state_38257;
var statearr_38308_38373 = state_38257__$1;
(statearr_38308_38373[(2)] = null);

(statearr_38308_38373[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (3))){
var inst_38255 = (state_38257[(2)]);
var state_38257__$1 = state_38257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38257__$1,inst_38255);
} else {
if((state_val_38258 === (12))){
var inst_38184 = (state_38257[(2)]);
var state_38257__$1 = state_38257;
var statearr_38309_38374 = state_38257__$1;
(statearr_38309_38374[(2)] = inst_38184);

(statearr_38309_38374[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (2))){
var state_38257__$1 = state_38257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38257__$1,(4),ch);
} else {
if((state_val_38258 === (23))){
var state_38257__$1 = state_38257;
var statearr_38310_38375 = state_38257__$1;
(statearr_38310_38375[(2)] = null);

(statearr_38310_38375[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (35))){
var inst_38239 = (state_38257[(2)]);
var state_38257__$1 = state_38257;
var statearr_38311_38376 = state_38257__$1;
(statearr_38311_38376[(2)] = inst_38239);

(statearr_38311_38376[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (19))){
var inst_38156 = (state_38257[(7)]);
var inst_38160 = cljs.core.chunk_first.call(null,inst_38156);
var inst_38161 = cljs.core.chunk_rest.call(null,inst_38156);
var inst_38162 = cljs.core.count.call(null,inst_38160);
var inst_38134 = inst_38161;
var inst_38135 = inst_38160;
var inst_38136 = inst_38162;
var inst_38137 = (0);
var state_38257__$1 = (function (){var statearr_38312 = state_38257;
(statearr_38312[(13)] = inst_38134);

(statearr_38312[(14)] = inst_38135);

(statearr_38312[(15)] = inst_38137);

(statearr_38312[(17)] = inst_38136);

return statearr_38312;
})();
var statearr_38313_38377 = state_38257__$1;
(statearr_38313_38377[(2)] = null);

(statearr_38313_38377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (11))){
var inst_38134 = (state_38257[(13)]);
var inst_38156 = (state_38257[(7)]);
var inst_38156__$1 = cljs.core.seq.call(null,inst_38134);
var state_38257__$1 = (function (){var statearr_38314 = state_38257;
(statearr_38314[(7)] = inst_38156__$1);

return statearr_38314;
})();
if(inst_38156__$1){
var statearr_38315_38378 = state_38257__$1;
(statearr_38315_38378[(1)] = (16));

} else {
var statearr_38316_38379 = state_38257__$1;
(statearr_38316_38379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (9))){
var inst_38186 = (state_38257[(2)]);
var state_38257__$1 = state_38257;
var statearr_38317_38380 = state_38257__$1;
(statearr_38317_38380[(2)] = inst_38186);

(statearr_38317_38380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (5))){
var inst_38132 = cljs.core.deref.call(null,cs);
var inst_38133 = cljs.core.seq.call(null,inst_38132);
var inst_38134 = inst_38133;
var inst_38135 = null;
var inst_38136 = (0);
var inst_38137 = (0);
var state_38257__$1 = (function (){var statearr_38318 = state_38257;
(statearr_38318[(13)] = inst_38134);

(statearr_38318[(14)] = inst_38135);

(statearr_38318[(15)] = inst_38137);

(statearr_38318[(17)] = inst_38136);

return statearr_38318;
})();
var statearr_38319_38381 = state_38257__$1;
(statearr_38319_38381[(2)] = null);

(statearr_38319_38381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (14))){
var state_38257__$1 = state_38257;
var statearr_38320_38382 = state_38257__$1;
(statearr_38320_38382[(2)] = null);

(statearr_38320_38382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (45))){
var inst_38247 = (state_38257[(2)]);
var state_38257__$1 = state_38257;
var statearr_38321_38383 = state_38257__$1;
(statearr_38321_38383[(2)] = inst_38247);

(statearr_38321_38383[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (26))){
var inst_38189 = (state_38257[(29)]);
var inst_38243 = (state_38257[(2)]);
var inst_38244 = cljs.core.seq.call(null,inst_38189);
var state_38257__$1 = (function (){var statearr_38322 = state_38257;
(statearr_38322[(31)] = inst_38243);

return statearr_38322;
})();
if(inst_38244){
var statearr_38323_38384 = state_38257__$1;
(statearr_38323_38384[(1)] = (42));

} else {
var statearr_38324_38385 = state_38257__$1;
(statearr_38324_38385[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (16))){
var inst_38156 = (state_38257[(7)]);
var inst_38158 = cljs.core.chunked_seq_QMARK_.call(null,inst_38156);
var state_38257__$1 = state_38257;
if(inst_38158){
var statearr_38325_38386 = state_38257__$1;
(statearr_38325_38386[(1)] = (19));

} else {
var statearr_38326_38387 = state_38257__$1;
(statearr_38326_38387[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (38))){
var inst_38236 = (state_38257[(2)]);
var state_38257__$1 = state_38257;
var statearr_38327_38388 = state_38257__$1;
(statearr_38327_38388[(2)] = inst_38236);

(statearr_38327_38388[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (30))){
var state_38257__$1 = state_38257;
var statearr_38328_38389 = state_38257__$1;
(statearr_38328_38389[(2)] = null);

(statearr_38328_38389[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (10))){
var inst_38135 = (state_38257[(14)]);
var inst_38137 = (state_38257[(15)]);
var inst_38145 = cljs.core._nth.call(null,inst_38135,inst_38137);
var inst_38146 = cljs.core.nth.call(null,inst_38145,(0),null);
var inst_38147 = cljs.core.nth.call(null,inst_38145,(1),null);
var state_38257__$1 = (function (){var statearr_38329 = state_38257;
(statearr_38329[(26)] = inst_38146);

return statearr_38329;
})();
if(cljs.core.truth_(inst_38147)){
var statearr_38330_38390 = state_38257__$1;
(statearr_38330_38390[(1)] = (13));

} else {
var statearr_38331_38391 = state_38257__$1;
(statearr_38331_38391[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (18))){
var inst_38182 = (state_38257[(2)]);
var state_38257__$1 = state_38257;
var statearr_38332_38392 = state_38257__$1;
(statearr_38332_38392[(2)] = inst_38182);

(statearr_38332_38392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (42))){
var state_38257__$1 = state_38257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38257__$1,(45),dchan);
} else {
if((state_val_38258 === (37))){
var inst_38216 = (state_38257[(25)]);
var inst_38225 = (state_38257[(23)]);
var inst_38125 = (state_38257[(10)]);
var inst_38225__$1 = cljs.core.first.call(null,inst_38216);
var inst_38226 = cljs.core.async.put_BANG_.call(null,inst_38225__$1,inst_38125,done);
var state_38257__$1 = (function (){var statearr_38333 = state_38257;
(statearr_38333[(23)] = inst_38225__$1);

return statearr_38333;
})();
if(cljs.core.truth_(inst_38226)){
var statearr_38334_38393 = state_38257__$1;
(statearr_38334_38393[(1)] = (39));

} else {
var statearr_38335_38394 = state_38257__$1;
(statearr_38335_38394[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38258 === (8))){
var inst_38137 = (state_38257[(15)]);
var inst_38136 = (state_38257[(17)]);
var inst_38139 = (inst_38137 < inst_38136);
var inst_38140 = inst_38139;
var state_38257__$1 = state_38257;
if(cljs.core.truth_(inst_38140)){
var statearr_38336_38395 = state_38257__$1;
(statearr_38336_38395[(1)] = (10));

} else {
var statearr_38337_38396 = state_38257__$1;
(statearr_38337_38396[(1)] = (11));

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
});})(c__37523__auto___38342,cs,m,dchan,dctr,done))
;
return ((function (switch__37428__auto__,c__37523__auto___38342,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37429__auto__ = null;
var cljs$core$async$mult_$_state_machine__37429__auto____0 = (function (){
var statearr_38338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38338[(0)] = cljs$core$async$mult_$_state_machine__37429__auto__);

(statearr_38338[(1)] = (1));

return statearr_38338;
});
var cljs$core$async$mult_$_state_machine__37429__auto____1 = (function (state_38257){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_38257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38339){if((e38339 instanceof Object)){
var ex__37432__auto__ = e38339;
var statearr_38340_38397 = state_38257;
(statearr_38340_38397[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38398 = state_38257;
state_38257 = G__38398;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37429__auto__ = function(state_38257){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37429__auto____1.call(this,state_38257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37429__auto____0;
cljs$core$async$mult_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37429__auto____1;
return cljs$core$async$mult_$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___38342,cs,m,dchan,dctr,done))
})();
var state__37525__auto__ = (function (){var statearr_38341 = f__37524__auto__.call(null);
(statearr_38341[(6)] = c__37523__auto___38342);

return statearr_38341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___38342,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__38400 = arguments.length;
switch (G__38400) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___38412 = arguments.length;
var i__4731__auto___38413 = (0);
while(true){
if((i__4731__auto___38413 < len__4730__auto___38412)){
args__4736__auto__.push((arguments[i__4731__auto___38413]));

var G__38414 = (i__4731__auto___38413 + (1));
i__4731__auto___38413 = G__38414;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38406){
var map__38407 = p__38406;
var map__38407__$1 = (((((!((map__38407 == null))))?(((((map__38407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38407):map__38407);
var opts = map__38407__$1;
var statearr_38409_38415 = state;
(statearr_38409_38415[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__38407,map__38407__$1,opts){
return (function (val){
var statearr_38410_38416 = state;
(statearr_38410_38416[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38407,map__38407__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_38411_38417 = state;
(statearr_38411_38417[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38402){
var G__38403 = cljs.core.first.call(null,seq38402);
var seq38402__$1 = cljs.core.next.call(null,seq38402);
var G__38404 = cljs.core.first.call(null,seq38402__$1);
var seq38402__$2 = cljs.core.next.call(null,seq38402__$1);
var G__38405 = cljs.core.first.call(null,seq38402__$2);
var seq38402__$3 = cljs.core.next.call(null,seq38402__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38403,G__38404,G__38405,seq38402__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38418 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38418 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38419){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38419 = meta38419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38420,meta38419__$1){
var self__ = this;
var _38420__$1 = this;
return (new cljs.core.async.t_cljs$core$async38418(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38419__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38420){
var self__ = this;
var _38420__$1 = this;
return self__.meta38419;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38418.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38418.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38418.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38418.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38418.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38418.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38418.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38419","meta38419",346389803,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38418";

cljs.core.async.t_cljs$core$async38418.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async38418");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38418.
 */
cljs.core.async.__GT_t_cljs$core$async38418 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38418(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38419){
return (new cljs.core.async.t_cljs$core$async38418(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38419));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38418(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37523__auto___38582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___38582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___38582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38522){
var state_val_38523 = (state_38522[(1)]);
if((state_val_38523 === (7))){
var inst_38437 = (state_38522[(2)]);
var state_38522__$1 = state_38522;
var statearr_38524_38583 = state_38522__$1;
(statearr_38524_38583[(2)] = inst_38437);

(statearr_38524_38583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (20))){
var inst_38449 = (state_38522[(7)]);
var state_38522__$1 = state_38522;
var statearr_38525_38584 = state_38522__$1;
(statearr_38525_38584[(2)] = inst_38449);

(statearr_38525_38584[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (27))){
var state_38522__$1 = state_38522;
var statearr_38526_38585 = state_38522__$1;
(statearr_38526_38585[(2)] = null);

(statearr_38526_38585[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (1))){
var inst_38424 = (state_38522[(8)]);
var inst_38424__$1 = calc_state.call(null);
var inst_38426 = (inst_38424__$1 == null);
var inst_38427 = cljs.core.not.call(null,inst_38426);
var state_38522__$1 = (function (){var statearr_38527 = state_38522;
(statearr_38527[(8)] = inst_38424__$1);

return statearr_38527;
})();
if(inst_38427){
var statearr_38528_38586 = state_38522__$1;
(statearr_38528_38586[(1)] = (2));

} else {
var statearr_38529_38587 = state_38522__$1;
(statearr_38529_38587[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (24))){
var inst_38482 = (state_38522[(9)]);
var inst_38496 = (state_38522[(10)]);
var inst_38473 = (state_38522[(11)]);
var inst_38496__$1 = inst_38473.call(null,inst_38482);
var state_38522__$1 = (function (){var statearr_38530 = state_38522;
(statearr_38530[(10)] = inst_38496__$1);

return statearr_38530;
})();
if(cljs.core.truth_(inst_38496__$1)){
var statearr_38531_38588 = state_38522__$1;
(statearr_38531_38588[(1)] = (29));

} else {
var statearr_38532_38589 = state_38522__$1;
(statearr_38532_38589[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (4))){
var inst_38440 = (state_38522[(2)]);
var state_38522__$1 = state_38522;
if(cljs.core.truth_(inst_38440)){
var statearr_38533_38590 = state_38522__$1;
(statearr_38533_38590[(1)] = (8));

} else {
var statearr_38534_38591 = state_38522__$1;
(statearr_38534_38591[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (15))){
var inst_38467 = (state_38522[(2)]);
var state_38522__$1 = state_38522;
if(cljs.core.truth_(inst_38467)){
var statearr_38535_38592 = state_38522__$1;
(statearr_38535_38592[(1)] = (19));

} else {
var statearr_38536_38593 = state_38522__$1;
(statearr_38536_38593[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (21))){
var inst_38472 = (state_38522[(12)]);
var inst_38472__$1 = (state_38522[(2)]);
var inst_38473 = cljs.core.get.call(null,inst_38472__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38474 = cljs.core.get.call(null,inst_38472__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38475 = cljs.core.get.call(null,inst_38472__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_38522__$1 = (function (){var statearr_38537 = state_38522;
(statearr_38537[(13)] = inst_38474);

(statearr_38537[(12)] = inst_38472__$1);

(statearr_38537[(11)] = inst_38473);

return statearr_38537;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38522__$1,(22),inst_38475);
} else {
if((state_val_38523 === (31))){
var inst_38504 = (state_38522[(2)]);
var state_38522__$1 = state_38522;
if(cljs.core.truth_(inst_38504)){
var statearr_38538_38594 = state_38522__$1;
(statearr_38538_38594[(1)] = (32));

} else {
var statearr_38539_38595 = state_38522__$1;
(statearr_38539_38595[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (32))){
var inst_38481 = (state_38522[(14)]);
var state_38522__$1 = state_38522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38522__$1,(35),out,inst_38481);
} else {
if((state_val_38523 === (33))){
var inst_38472 = (state_38522[(12)]);
var inst_38449 = inst_38472;
var state_38522__$1 = (function (){var statearr_38540 = state_38522;
(statearr_38540[(7)] = inst_38449);

return statearr_38540;
})();
var statearr_38541_38596 = state_38522__$1;
(statearr_38541_38596[(2)] = null);

(statearr_38541_38596[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (13))){
var inst_38449 = (state_38522[(7)]);
var inst_38456 = inst_38449.cljs$lang$protocol_mask$partition0$;
var inst_38457 = (inst_38456 & (64));
var inst_38458 = inst_38449.cljs$core$ISeq$;
var inst_38459 = (cljs.core.PROTOCOL_SENTINEL === inst_38458);
var inst_38460 = ((inst_38457) || (inst_38459));
var state_38522__$1 = state_38522;
if(cljs.core.truth_(inst_38460)){
var statearr_38542_38597 = state_38522__$1;
(statearr_38542_38597[(1)] = (16));

} else {
var statearr_38543_38598 = state_38522__$1;
(statearr_38543_38598[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (22))){
var inst_38482 = (state_38522[(9)]);
var inst_38481 = (state_38522[(14)]);
var inst_38480 = (state_38522[(2)]);
var inst_38481__$1 = cljs.core.nth.call(null,inst_38480,(0),null);
var inst_38482__$1 = cljs.core.nth.call(null,inst_38480,(1),null);
var inst_38483 = (inst_38481__$1 == null);
var inst_38484 = cljs.core._EQ_.call(null,inst_38482__$1,change);
var inst_38485 = ((inst_38483) || (inst_38484));
var state_38522__$1 = (function (){var statearr_38544 = state_38522;
(statearr_38544[(9)] = inst_38482__$1);

(statearr_38544[(14)] = inst_38481__$1);

return statearr_38544;
})();
if(cljs.core.truth_(inst_38485)){
var statearr_38545_38599 = state_38522__$1;
(statearr_38545_38599[(1)] = (23));

} else {
var statearr_38546_38600 = state_38522__$1;
(statearr_38546_38600[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (36))){
var inst_38472 = (state_38522[(12)]);
var inst_38449 = inst_38472;
var state_38522__$1 = (function (){var statearr_38547 = state_38522;
(statearr_38547[(7)] = inst_38449);

return statearr_38547;
})();
var statearr_38548_38601 = state_38522__$1;
(statearr_38548_38601[(2)] = null);

(statearr_38548_38601[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (29))){
var inst_38496 = (state_38522[(10)]);
var state_38522__$1 = state_38522;
var statearr_38549_38602 = state_38522__$1;
(statearr_38549_38602[(2)] = inst_38496);

(statearr_38549_38602[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (6))){
var state_38522__$1 = state_38522;
var statearr_38550_38603 = state_38522__$1;
(statearr_38550_38603[(2)] = false);

(statearr_38550_38603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (28))){
var inst_38492 = (state_38522[(2)]);
var inst_38493 = calc_state.call(null);
var inst_38449 = inst_38493;
var state_38522__$1 = (function (){var statearr_38551 = state_38522;
(statearr_38551[(15)] = inst_38492);

(statearr_38551[(7)] = inst_38449);

return statearr_38551;
})();
var statearr_38552_38604 = state_38522__$1;
(statearr_38552_38604[(2)] = null);

(statearr_38552_38604[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (25))){
var inst_38518 = (state_38522[(2)]);
var state_38522__$1 = state_38522;
var statearr_38553_38605 = state_38522__$1;
(statearr_38553_38605[(2)] = inst_38518);

(statearr_38553_38605[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (34))){
var inst_38516 = (state_38522[(2)]);
var state_38522__$1 = state_38522;
var statearr_38554_38606 = state_38522__$1;
(statearr_38554_38606[(2)] = inst_38516);

(statearr_38554_38606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (17))){
var state_38522__$1 = state_38522;
var statearr_38555_38607 = state_38522__$1;
(statearr_38555_38607[(2)] = false);

(statearr_38555_38607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (3))){
var state_38522__$1 = state_38522;
var statearr_38556_38608 = state_38522__$1;
(statearr_38556_38608[(2)] = false);

(statearr_38556_38608[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (12))){
var inst_38520 = (state_38522[(2)]);
var state_38522__$1 = state_38522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38522__$1,inst_38520);
} else {
if((state_val_38523 === (2))){
var inst_38424 = (state_38522[(8)]);
var inst_38429 = inst_38424.cljs$lang$protocol_mask$partition0$;
var inst_38430 = (inst_38429 & (64));
var inst_38431 = inst_38424.cljs$core$ISeq$;
var inst_38432 = (cljs.core.PROTOCOL_SENTINEL === inst_38431);
var inst_38433 = ((inst_38430) || (inst_38432));
var state_38522__$1 = state_38522;
if(cljs.core.truth_(inst_38433)){
var statearr_38557_38609 = state_38522__$1;
(statearr_38557_38609[(1)] = (5));

} else {
var statearr_38558_38610 = state_38522__$1;
(statearr_38558_38610[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (23))){
var inst_38481 = (state_38522[(14)]);
var inst_38487 = (inst_38481 == null);
var state_38522__$1 = state_38522;
if(cljs.core.truth_(inst_38487)){
var statearr_38559_38611 = state_38522__$1;
(statearr_38559_38611[(1)] = (26));

} else {
var statearr_38560_38612 = state_38522__$1;
(statearr_38560_38612[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (35))){
var inst_38507 = (state_38522[(2)]);
var state_38522__$1 = state_38522;
if(cljs.core.truth_(inst_38507)){
var statearr_38561_38613 = state_38522__$1;
(statearr_38561_38613[(1)] = (36));

} else {
var statearr_38562_38614 = state_38522__$1;
(statearr_38562_38614[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (19))){
var inst_38449 = (state_38522[(7)]);
var inst_38469 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38449);
var state_38522__$1 = state_38522;
var statearr_38563_38615 = state_38522__$1;
(statearr_38563_38615[(2)] = inst_38469);

(statearr_38563_38615[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (11))){
var inst_38449 = (state_38522[(7)]);
var inst_38453 = (inst_38449 == null);
var inst_38454 = cljs.core.not.call(null,inst_38453);
var state_38522__$1 = state_38522;
if(inst_38454){
var statearr_38564_38616 = state_38522__$1;
(statearr_38564_38616[(1)] = (13));

} else {
var statearr_38565_38617 = state_38522__$1;
(statearr_38565_38617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (9))){
var inst_38424 = (state_38522[(8)]);
var state_38522__$1 = state_38522;
var statearr_38566_38618 = state_38522__$1;
(statearr_38566_38618[(2)] = inst_38424);

(statearr_38566_38618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (5))){
var state_38522__$1 = state_38522;
var statearr_38567_38619 = state_38522__$1;
(statearr_38567_38619[(2)] = true);

(statearr_38567_38619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (14))){
var state_38522__$1 = state_38522;
var statearr_38568_38620 = state_38522__$1;
(statearr_38568_38620[(2)] = false);

(statearr_38568_38620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (26))){
var inst_38482 = (state_38522[(9)]);
var inst_38489 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38482);
var state_38522__$1 = state_38522;
var statearr_38569_38621 = state_38522__$1;
(statearr_38569_38621[(2)] = inst_38489);

(statearr_38569_38621[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (16))){
var state_38522__$1 = state_38522;
var statearr_38570_38622 = state_38522__$1;
(statearr_38570_38622[(2)] = true);

(statearr_38570_38622[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (38))){
var inst_38512 = (state_38522[(2)]);
var state_38522__$1 = state_38522;
var statearr_38571_38623 = state_38522__$1;
(statearr_38571_38623[(2)] = inst_38512);

(statearr_38571_38623[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (30))){
var inst_38474 = (state_38522[(13)]);
var inst_38482 = (state_38522[(9)]);
var inst_38473 = (state_38522[(11)]);
var inst_38499 = cljs.core.empty_QMARK_.call(null,inst_38473);
var inst_38500 = inst_38474.call(null,inst_38482);
var inst_38501 = cljs.core.not.call(null,inst_38500);
var inst_38502 = ((inst_38499) && (inst_38501));
var state_38522__$1 = state_38522;
var statearr_38572_38624 = state_38522__$1;
(statearr_38572_38624[(2)] = inst_38502);

(statearr_38572_38624[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (10))){
var inst_38424 = (state_38522[(8)]);
var inst_38445 = (state_38522[(2)]);
var inst_38446 = cljs.core.get.call(null,inst_38445,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38447 = cljs.core.get.call(null,inst_38445,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38448 = cljs.core.get.call(null,inst_38445,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38449 = inst_38424;
var state_38522__$1 = (function (){var statearr_38573 = state_38522;
(statearr_38573[(16)] = inst_38446);

(statearr_38573[(17)] = inst_38448);

(statearr_38573[(18)] = inst_38447);

(statearr_38573[(7)] = inst_38449);

return statearr_38573;
})();
var statearr_38574_38625 = state_38522__$1;
(statearr_38574_38625[(2)] = null);

(statearr_38574_38625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (18))){
var inst_38464 = (state_38522[(2)]);
var state_38522__$1 = state_38522;
var statearr_38575_38626 = state_38522__$1;
(statearr_38575_38626[(2)] = inst_38464);

(statearr_38575_38626[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (37))){
var state_38522__$1 = state_38522;
var statearr_38576_38627 = state_38522__$1;
(statearr_38576_38627[(2)] = null);

(statearr_38576_38627[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38523 === (8))){
var inst_38424 = (state_38522[(8)]);
var inst_38442 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38424);
var state_38522__$1 = state_38522;
var statearr_38577_38628 = state_38522__$1;
(statearr_38577_38628[(2)] = inst_38442);

(statearr_38577_38628[(1)] = (10));


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
});})(c__37523__auto___38582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37428__auto__,c__37523__auto___38582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37429__auto__ = null;
var cljs$core$async$mix_$_state_machine__37429__auto____0 = (function (){
var statearr_38578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38578[(0)] = cljs$core$async$mix_$_state_machine__37429__auto__);

(statearr_38578[(1)] = (1));

return statearr_38578;
});
var cljs$core$async$mix_$_state_machine__37429__auto____1 = (function (state_38522){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_38522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38579){if((e38579 instanceof Object)){
var ex__37432__auto__ = e38579;
var statearr_38580_38629 = state_38522;
(statearr_38580_38629[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38630 = state_38522;
state_38522 = G__38630;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37429__auto__ = function(state_38522){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37429__auto____1.call(this,state_38522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37429__auto____0;
cljs$core$async$mix_$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37429__auto____1;
return cljs$core$async$mix_$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___38582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37525__auto__ = (function (){var statearr_38581 = f__37524__auto__.call(null);
(statearr_38581[(6)] = c__37523__auto___38582);

return statearr_38581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___38582,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__38632 = arguments.length;
switch (G__38632) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__38636 = arguments.length;
switch (G__38636) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__38634_SHARP_){
if(cljs.core.truth_(p1__38634_SHARP_.call(null,topic))){
return p1__38634_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38634_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async38637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38637 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta38638){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta38638 = meta38638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38639,meta38638__$1){
var self__ = this;
var _38639__$1 = this;
return (new cljs.core.async.t_cljs$core$async38637(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta38638__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38639){
var self__ = this;
var _38639__$1 = this;
return self__.meta38638;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38637.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38637.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38637.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38637.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38637.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38637.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta38638","meta38638",-1685351334,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async38637.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38637";

cljs.core.async.t_cljs$core$async38637.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async38637");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38637.
 */
cljs.core.async.__GT_t_cljs$core$async38637 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async38637(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38638){
return (new cljs.core.async.t_cljs$core$async38637(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta38638));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async38637(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37523__auto___38757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___38757,mults,ensure_mult,p){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___38757,mults,ensure_mult,p){
return (function (state_38711){
var state_val_38712 = (state_38711[(1)]);
if((state_val_38712 === (7))){
var inst_38707 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
var statearr_38713_38758 = state_38711__$1;
(statearr_38713_38758[(2)] = inst_38707);

(statearr_38713_38758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (20))){
var state_38711__$1 = state_38711;
var statearr_38714_38759 = state_38711__$1;
(statearr_38714_38759[(2)] = null);

(statearr_38714_38759[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (1))){
var state_38711__$1 = state_38711;
var statearr_38715_38760 = state_38711__$1;
(statearr_38715_38760[(2)] = null);

(statearr_38715_38760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (24))){
var inst_38690 = (state_38711[(7)]);
var inst_38699 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38690);
var state_38711__$1 = state_38711;
var statearr_38716_38761 = state_38711__$1;
(statearr_38716_38761[(2)] = inst_38699);

(statearr_38716_38761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (4))){
var inst_38642 = (state_38711[(8)]);
var inst_38642__$1 = (state_38711[(2)]);
var inst_38643 = (inst_38642__$1 == null);
var state_38711__$1 = (function (){var statearr_38717 = state_38711;
(statearr_38717[(8)] = inst_38642__$1);

return statearr_38717;
})();
if(cljs.core.truth_(inst_38643)){
var statearr_38718_38762 = state_38711__$1;
(statearr_38718_38762[(1)] = (5));

} else {
var statearr_38719_38763 = state_38711__$1;
(statearr_38719_38763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (15))){
var inst_38684 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
var statearr_38720_38764 = state_38711__$1;
(statearr_38720_38764[(2)] = inst_38684);

(statearr_38720_38764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (21))){
var inst_38704 = (state_38711[(2)]);
var state_38711__$1 = (function (){var statearr_38721 = state_38711;
(statearr_38721[(9)] = inst_38704);

return statearr_38721;
})();
var statearr_38722_38765 = state_38711__$1;
(statearr_38722_38765[(2)] = null);

(statearr_38722_38765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (13))){
var inst_38666 = (state_38711[(10)]);
var inst_38668 = cljs.core.chunked_seq_QMARK_.call(null,inst_38666);
var state_38711__$1 = state_38711;
if(inst_38668){
var statearr_38723_38766 = state_38711__$1;
(statearr_38723_38766[(1)] = (16));

} else {
var statearr_38724_38767 = state_38711__$1;
(statearr_38724_38767[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (22))){
var inst_38696 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
if(cljs.core.truth_(inst_38696)){
var statearr_38725_38768 = state_38711__$1;
(statearr_38725_38768[(1)] = (23));

} else {
var statearr_38726_38769 = state_38711__$1;
(statearr_38726_38769[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (6))){
var inst_38642 = (state_38711[(8)]);
var inst_38692 = (state_38711[(11)]);
var inst_38690 = (state_38711[(7)]);
var inst_38690__$1 = topic_fn.call(null,inst_38642);
var inst_38691 = cljs.core.deref.call(null,mults);
var inst_38692__$1 = cljs.core.get.call(null,inst_38691,inst_38690__$1);
var state_38711__$1 = (function (){var statearr_38727 = state_38711;
(statearr_38727[(11)] = inst_38692__$1);

(statearr_38727[(7)] = inst_38690__$1);

return statearr_38727;
})();
if(cljs.core.truth_(inst_38692__$1)){
var statearr_38728_38770 = state_38711__$1;
(statearr_38728_38770[(1)] = (19));

} else {
var statearr_38729_38771 = state_38711__$1;
(statearr_38729_38771[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (25))){
var inst_38701 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
var statearr_38730_38772 = state_38711__$1;
(statearr_38730_38772[(2)] = inst_38701);

(statearr_38730_38772[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (17))){
var inst_38666 = (state_38711[(10)]);
var inst_38675 = cljs.core.first.call(null,inst_38666);
var inst_38676 = cljs.core.async.muxch_STAR_.call(null,inst_38675);
var inst_38677 = cljs.core.async.close_BANG_.call(null,inst_38676);
var inst_38678 = cljs.core.next.call(null,inst_38666);
var inst_38652 = inst_38678;
var inst_38653 = null;
var inst_38654 = (0);
var inst_38655 = (0);
var state_38711__$1 = (function (){var statearr_38731 = state_38711;
(statearr_38731[(12)] = inst_38653);

(statearr_38731[(13)] = inst_38652);

(statearr_38731[(14)] = inst_38654);

(statearr_38731[(15)] = inst_38677);

(statearr_38731[(16)] = inst_38655);

return statearr_38731;
})();
var statearr_38732_38773 = state_38711__$1;
(statearr_38732_38773[(2)] = null);

(statearr_38732_38773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (3))){
var inst_38709 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38711__$1,inst_38709);
} else {
if((state_val_38712 === (12))){
var inst_38686 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
var statearr_38733_38774 = state_38711__$1;
(statearr_38733_38774[(2)] = inst_38686);

(statearr_38733_38774[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (2))){
var state_38711__$1 = state_38711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38711__$1,(4),ch);
} else {
if((state_val_38712 === (23))){
var state_38711__$1 = state_38711;
var statearr_38734_38775 = state_38711__$1;
(statearr_38734_38775[(2)] = null);

(statearr_38734_38775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (19))){
var inst_38642 = (state_38711[(8)]);
var inst_38692 = (state_38711[(11)]);
var inst_38694 = cljs.core.async.muxch_STAR_.call(null,inst_38692);
var state_38711__$1 = state_38711;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38711__$1,(22),inst_38694,inst_38642);
} else {
if((state_val_38712 === (11))){
var inst_38652 = (state_38711[(13)]);
var inst_38666 = (state_38711[(10)]);
var inst_38666__$1 = cljs.core.seq.call(null,inst_38652);
var state_38711__$1 = (function (){var statearr_38735 = state_38711;
(statearr_38735[(10)] = inst_38666__$1);

return statearr_38735;
})();
if(inst_38666__$1){
var statearr_38736_38776 = state_38711__$1;
(statearr_38736_38776[(1)] = (13));

} else {
var statearr_38737_38777 = state_38711__$1;
(statearr_38737_38777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (9))){
var inst_38688 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
var statearr_38738_38778 = state_38711__$1;
(statearr_38738_38778[(2)] = inst_38688);

(statearr_38738_38778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (5))){
var inst_38649 = cljs.core.deref.call(null,mults);
var inst_38650 = cljs.core.vals.call(null,inst_38649);
var inst_38651 = cljs.core.seq.call(null,inst_38650);
var inst_38652 = inst_38651;
var inst_38653 = null;
var inst_38654 = (0);
var inst_38655 = (0);
var state_38711__$1 = (function (){var statearr_38739 = state_38711;
(statearr_38739[(12)] = inst_38653);

(statearr_38739[(13)] = inst_38652);

(statearr_38739[(14)] = inst_38654);

(statearr_38739[(16)] = inst_38655);

return statearr_38739;
})();
var statearr_38740_38779 = state_38711__$1;
(statearr_38740_38779[(2)] = null);

(statearr_38740_38779[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (14))){
var state_38711__$1 = state_38711;
var statearr_38744_38780 = state_38711__$1;
(statearr_38744_38780[(2)] = null);

(statearr_38744_38780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (16))){
var inst_38666 = (state_38711[(10)]);
var inst_38670 = cljs.core.chunk_first.call(null,inst_38666);
var inst_38671 = cljs.core.chunk_rest.call(null,inst_38666);
var inst_38672 = cljs.core.count.call(null,inst_38670);
var inst_38652 = inst_38671;
var inst_38653 = inst_38670;
var inst_38654 = inst_38672;
var inst_38655 = (0);
var state_38711__$1 = (function (){var statearr_38745 = state_38711;
(statearr_38745[(12)] = inst_38653);

(statearr_38745[(13)] = inst_38652);

(statearr_38745[(14)] = inst_38654);

(statearr_38745[(16)] = inst_38655);

return statearr_38745;
})();
var statearr_38746_38781 = state_38711__$1;
(statearr_38746_38781[(2)] = null);

(statearr_38746_38781[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (10))){
var inst_38653 = (state_38711[(12)]);
var inst_38652 = (state_38711[(13)]);
var inst_38654 = (state_38711[(14)]);
var inst_38655 = (state_38711[(16)]);
var inst_38660 = cljs.core._nth.call(null,inst_38653,inst_38655);
var inst_38661 = cljs.core.async.muxch_STAR_.call(null,inst_38660);
var inst_38662 = cljs.core.async.close_BANG_.call(null,inst_38661);
var inst_38663 = (inst_38655 + (1));
var tmp38741 = inst_38653;
var tmp38742 = inst_38652;
var tmp38743 = inst_38654;
var inst_38652__$1 = tmp38742;
var inst_38653__$1 = tmp38741;
var inst_38654__$1 = tmp38743;
var inst_38655__$1 = inst_38663;
var state_38711__$1 = (function (){var statearr_38747 = state_38711;
(statearr_38747[(17)] = inst_38662);

(statearr_38747[(12)] = inst_38653__$1);

(statearr_38747[(13)] = inst_38652__$1);

(statearr_38747[(14)] = inst_38654__$1);

(statearr_38747[(16)] = inst_38655__$1);

return statearr_38747;
})();
var statearr_38748_38782 = state_38711__$1;
(statearr_38748_38782[(2)] = null);

(statearr_38748_38782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (18))){
var inst_38681 = (state_38711[(2)]);
var state_38711__$1 = state_38711;
var statearr_38749_38783 = state_38711__$1;
(statearr_38749_38783[(2)] = inst_38681);

(statearr_38749_38783[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38712 === (8))){
var inst_38654 = (state_38711[(14)]);
var inst_38655 = (state_38711[(16)]);
var inst_38657 = (inst_38655 < inst_38654);
var inst_38658 = inst_38657;
var state_38711__$1 = state_38711;
if(cljs.core.truth_(inst_38658)){
var statearr_38750_38784 = state_38711__$1;
(statearr_38750_38784[(1)] = (10));

} else {
var statearr_38751_38785 = state_38711__$1;
(statearr_38751_38785[(1)] = (11));

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
});})(c__37523__auto___38757,mults,ensure_mult,p))
;
return ((function (switch__37428__auto__,c__37523__auto___38757,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_38752 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38752[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_38752[(1)] = (1));

return statearr_38752;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_38711){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_38711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38753){if((e38753 instanceof Object)){
var ex__37432__auto__ = e38753;
var statearr_38754_38786 = state_38711;
(statearr_38754_38786[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38753;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38787 = state_38711;
state_38711 = G__38787;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_38711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_38711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___38757,mults,ensure_mult,p))
})();
var state__37525__auto__ = (function (){var statearr_38755 = f__37524__auto__.call(null);
(statearr_38755[(6)] = c__37523__auto___38757);

return statearr_38755;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___38757,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__38789 = arguments.length;
switch (G__38789) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__38792 = arguments.length;
switch (G__38792) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__38795 = arguments.length;
switch (G__38795) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__37523__auto___38862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___38862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___38862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38834){
var state_val_38835 = (state_38834[(1)]);
if((state_val_38835 === (7))){
var state_38834__$1 = state_38834;
var statearr_38836_38863 = state_38834__$1;
(statearr_38836_38863[(2)] = null);

(statearr_38836_38863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (1))){
var state_38834__$1 = state_38834;
var statearr_38837_38864 = state_38834__$1;
(statearr_38837_38864[(2)] = null);

(statearr_38837_38864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (4))){
var inst_38798 = (state_38834[(7)]);
var inst_38800 = (inst_38798 < cnt);
var state_38834__$1 = state_38834;
if(cljs.core.truth_(inst_38800)){
var statearr_38838_38865 = state_38834__$1;
(statearr_38838_38865[(1)] = (6));

} else {
var statearr_38839_38866 = state_38834__$1;
(statearr_38839_38866[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (15))){
var inst_38830 = (state_38834[(2)]);
var state_38834__$1 = state_38834;
var statearr_38840_38867 = state_38834__$1;
(statearr_38840_38867[(2)] = inst_38830);

(statearr_38840_38867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (13))){
var inst_38823 = cljs.core.async.close_BANG_.call(null,out);
var state_38834__$1 = state_38834;
var statearr_38841_38868 = state_38834__$1;
(statearr_38841_38868[(2)] = inst_38823);

(statearr_38841_38868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (6))){
var state_38834__$1 = state_38834;
var statearr_38842_38869 = state_38834__$1;
(statearr_38842_38869[(2)] = null);

(statearr_38842_38869[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (3))){
var inst_38832 = (state_38834[(2)]);
var state_38834__$1 = state_38834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38834__$1,inst_38832);
} else {
if((state_val_38835 === (12))){
var inst_38820 = (state_38834[(8)]);
var inst_38820__$1 = (state_38834[(2)]);
var inst_38821 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38820__$1);
var state_38834__$1 = (function (){var statearr_38843 = state_38834;
(statearr_38843[(8)] = inst_38820__$1);

return statearr_38843;
})();
if(cljs.core.truth_(inst_38821)){
var statearr_38844_38870 = state_38834__$1;
(statearr_38844_38870[(1)] = (13));

} else {
var statearr_38845_38871 = state_38834__$1;
(statearr_38845_38871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (2))){
var inst_38797 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38798 = (0);
var state_38834__$1 = (function (){var statearr_38846 = state_38834;
(statearr_38846[(9)] = inst_38797);

(statearr_38846[(7)] = inst_38798);

return statearr_38846;
})();
var statearr_38847_38872 = state_38834__$1;
(statearr_38847_38872[(2)] = null);

(statearr_38847_38872[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (11))){
var inst_38798 = (state_38834[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38834,(10),Object,null,(9));
var inst_38807 = chs__$1.call(null,inst_38798);
var inst_38808 = done.call(null,inst_38798);
var inst_38809 = cljs.core.async.take_BANG_.call(null,inst_38807,inst_38808);
var state_38834__$1 = state_38834;
var statearr_38848_38873 = state_38834__$1;
(statearr_38848_38873[(2)] = inst_38809);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38834__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (9))){
var inst_38798 = (state_38834[(7)]);
var inst_38811 = (state_38834[(2)]);
var inst_38812 = (inst_38798 + (1));
var inst_38798__$1 = inst_38812;
var state_38834__$1 = (function (){var statearr_38849 = state_38834;
(statearr_38849[(10)] = inst_38811);

(statearr_38849[(7)] = inst_38798__$1);

return statearr_38849;
})();
var statearr_38850_38874 = state_38834__$1;
(statearr_38850_38874[(2)] = null);

(statearr_38850_38874[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (5))){
var inst_38818 = (state_38834[(2)]);
var state_38834__$1 = (function (){var statearr_38851 = state_38834;
(statearr_38851[(11)] = inst_38818);

return statearr_38851;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38834__$1,(12),dchan);
} else {
if((state_val_38835 === (14))){
var inst_38820 = (state_38834[(8)]);
var inst_38825 = cljs.core.apply.call(null,f,inst_38820);
var state_38834__$1 = state_38834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38834__$1,(16),out,inst_38825);
} else {
if((state_val_38835 === (16))){
var inst_38827 = (state_38834[(2)]);
var state_38834__$1 = (function (){var statearr_38852 = state_38834;
(statearr_38852[(12)] = inst_38827);

return statearr_38852;
})();
var statearr_38853_38875 = state_38834__$1;
(statearr_38853_38875[(2)] = null);

(statearr_38853_38875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (10))){
var inst_38802 = (state_38834[(2)]);
var inst_38803 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38834__$1 = (function (){var statearr_38854 = state_38834;
(statearr_38854[(13)] = inst_38802);

return statearr_38854;
})();
var statearr_38855_38876 = state_38834__$1;
(statearr_38855_38876[(2)] = inst_38803);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38834__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38835 === (8))){
var inst_38816 = (state_38834[(2)]);
var state_38834__$1 = state_38834;
var statearr_38856_38877 = state_38834__$1;
(statearr_38856_38877[(2)] = inst_38816);

(statearr_38856_38877[(1)] = (5));


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
});})(c__37523__auto___38862,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37428__auto__,c__37523__auto___38862,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_38857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38857[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_38857[(1)] = (1));

return statearr_38857;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_38834){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_38834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38858){if((e38858 instanceof Object)){
var ex__37432__auto__ = e38858;
var statearr_38859_38878 = state_38834;
(statearr_38859_38878[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38879 = state_38834;
state_38834 = G__38879;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_38834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_38834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___38862,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37525__auto__ = (function (){var statearr_38860 = f__37524__auto__.call(null);
(statearr_38860[(6)] = c__37523__auto___38862);

return statearr_38860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___38862,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__38882 = arguments.length;
switch (G__38882) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37523__auto___38936 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___38936,out){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___38936,out){
return (function (state_38914){
var state_val_38915 = (state_38914[(1)]);
if((state_val_38915 === (7))){
var inst_38894 = (state_38914[(7)]);
var inst_38893 = (state_38914[(8)]);
var inst_38893__$1 = (state_38914[(2)]);
var inst_38894__$1 = cljs.core.nth.call(null,inst_38893__$1,(0),null);
var inst_38895 = cljs.core.nth.call(null,inst_38893__$1,(1),null);
var inst_38896 = (inst_38894__$1 == null);
var state_38914__$1 = (function (){var statearr_38916 = state_38914;
(statearr_38916[(7)] = inst_38894__$1);

(statearr_38916[(8)] = inst_38893__$1);

(statearr_38916[(9)] = inst_38895);

return statearr_38916;
})();
if(cljs.core.truth_(inst_38896)){
var statearr_38917_38937 = state_38914__$1;
(statearr_38917_38937[(1)] = (8));

} else {
var statearr_38918_38938 = state_38914__$1;
(statearr_38918_38938[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38915 === (1))){
var inst_38883 = cljs.core.vec.call(null,chs);
var inst_38884 = inst_38883;
var state_38914__$1 = (function (){var statearr_38919 = state_38914;
(statearr_38919[(10)] = inst_38884);

return statearr_38919;
})();
var statearr_38920_38939 = state_38914__$1;
(statearr_38920_38939[(2)] = null);

(statearr_38920_38939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38915 === (4))){
var inst_38884 = (state_38914[(10)]);
var state_38914__$1 = state_38914;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38914__$1,(7),inst_38884);
} else {
if((state_val_38915 === (6))){
var inst_38910 = (state_38914[(2)]);
var state_38914__$1 = state_38914;
var statearr_38921_38940 = state_38914__$1;
(statearr_38921_38940[(2)] = inst_38910);

(statearr_38921_38940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38915 === (3))){
var inst_38912 = (state_38914[(2)]);
var state_38914__$1 = state_38914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38914__$1,inst_38912);
} else {
if((state_val_38915 === (2))){
var inst_38884 = (state_38914[(10)]);
var inst_38886 = cljs.core.count.call(null,inst_38884);
var inst_38887 = (inst_38886 > (0));
var state_38914__$1 = state_38914;
if(cljs.core.truth_(inst_38887)){
var statearr_38923_38941 = state_38914__$1;
(statearr_38923_38941[(1)] = (4));

} else {
var statearr_38924_38942 = state_38914__$1;
(statearr_38924_38942[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38915 === (11))){
var inst_38884 = (state_38914[(10)]);
var inst_38903 = (state_38914[(2)]);
var tmp38922 = inst_38884;
var inst_38884__$1 = tmp38922;
var state_38914__$1 = (function (){var statearr_38925 = state_38914;
(statearr_38925[(10)] = inst_38884__$1);

(statearr_38925[(11)] = inst_38903);

return statearr_38925;
})();
var statearr_38926_38943 = state_38914__$1;
(statearr_38926_38943[(2)] = null);

(statearr_38926_38943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38915 === (9))){
var inst_38894 = (state_38914[(7)]);
var state_38914__$1 = state_38914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38914__$1,(11),out,inst_38894);
} else {
if((state_val_38915 === (5))){
var inst_38908 = cljs.core.async.close_BANG_.call(null,out);
var state_38914__$1 = state_38914;
var statearr_38927_38944 = state_38914__$1;
(statearr_38927_38944[(2)] = inst_38908);

(statearr_38927_38944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38915 === (10))){
var inst_38906 = (state_38914[(2)]);
var state_38914__$1 = state_38914;
var statearr_38928_38945 = state_38914__$1;
(statearr_38928_38945[(2)] = inst_38906);

(statearr_38928_38945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38915 === (8))){
var inst_38884 = (state_38914[(10)]);
var inst_38894 = (state_38914[(7)]);
var inst_38893 = (state_38914[(8)]);
var inst_38895 = (state_38914[(9)]);
var inst_38898 = (function (){var cs = inst_38884;
var vec__38889 = inst_38893;
var v = inst_38894;
var c = inst_38895;
return ((function (cs,vec__38889,v,c,inst_38884,inst_38894,inst_38893,inst_38895,state_val_38915,c__37523__auto___38936,out){
return (function (p1__38880_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__38880_SHARP_);
});
;})(cs,vec__38889,v,c,inst_38884,inst_38894,inst_38893,inst_38895,state_val_38915,c__37523__auto___38936,out))
})();
var inst_38899 = cljs.core.filterv.call(null,inst_38898,inst_38884);
var inst_38884__$1 = inst_38899;
var state_38914__$1 = (function (){var statearr_38929 = state_38914;
(statearr_38929[(10)] = inst_38884__$1);

return statearr_38929;
})();
var statearr_38930_38946 = state_38914__$1;
(statearr_38930_38946[(2)] = null);

(statearr_38930_38946[(1)] = (2));


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
});})(c__37523__auto___38936,out))
;
return ((function (switch__37428__auto__,c__37523__auto___38936,out){
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_38931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38931[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_38931[(1)] = (1));

return statearr_38931;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_38914){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_38914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38932){if((e38932 instanceof Object)){
var ex__37432__auto__ = e38932;
var statearr_38933_38947 = state_38914;
(statearr_38933_38947[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38948 = state_38914;
state_38914 = G__38948;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_38914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_38914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___38936,out))
})();
var state__37525__auto__ = (function (){var statearr_38934 = f__37524__auto__.call(null);
(statearr_38934[(6)] = c__37523__auto___38936);

return statearr_38934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___38936,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__38950 = arguments.length;
switch (G__38950) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37523__auto___38995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___38995,out){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___38995,out){
return (function (state_38974){
var state_val_38975 = (state_38974[(1)]);
if((state_val_38975 === (7))){
var inst_38956 = (state_38974[(7)]);
var inst_38956__$1 = (state_38974[(2)]);
var inst_38957 = (inst_38956__$1 == null);
var inst_38958 = cljs.core.not.call(null,inst_38957);
var state_38974__$1 = (function (){var statearr_38976 = state_38974;
(statearr_38976[(7)] = inst_38956__$1);

return statearr_38976;
})();
if(inst_38958){
var statearr_38977_38996 = state_38974__$1;
(statearr_38977_38996[(1)] = (8));

} else {
var statearr_38978_38997 = state_38974__$1;
(statearr_38978_38997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (1))){
var inst_38951 = (0);
var state_38974__$1 = (function (){var statearr_38979 = state_38974;
(statearr_38979[(8)] = inst_38951);

return statearr_38979;
})();
var statearr_38980_38998 = state_38974__$1;
(statearr_38980_38998[(2)] = null);

(statearr_38980_38998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (4))){
var state_38974__$1 = state_38974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38974__$1,(7),ch);
} else {
if((state_val_38975 === (6))){
var inst_38969 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
var statearr_38981_38999 = state_38974__$1;
(statearr_38981_38999[(2)] = inst_38969);

(statearr_38981_38999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (3))){
var inst_38971 = (state_38974[(2)]);
var inst_38972 = cljs.core.async.close_BANG_.call(null,out);
var state_38974__$1 = (function (){var statearr_38982 = state_38974;
(statearr_38982[(9)] = inst_38971);

return statearr_38982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38974__$1,inst_38972);
} else {
if((state_val_38975 === (2))){
var inst_38951 = (state_38974[(8)]);
var inst_38953 = (inst_38951 < n);
var state_38974__$1 = state_38974;
if(cljs.core.truth_(inst_38953)){
var statearr_38983_39000 = state_38974__$1;
(statearr_38983_39000[(1)] = (4));

} else {
var statearr_38984_39001 = state_38974__$1;
(statearr_38984_39001[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (11))){
var inst_38951 = (state_38974[(8)]);
var inst_38961 = (state_38974[(2)]);
var inst_38962 = (inst_38951 + (1));
var inst_38951__$1 = inst_38962;
var state_38974__$1 = (function (){var statearr_38985 = state_38974;
(statearr_38985[(8)] = inst_38951__$1);

(statearr_38985[(10)] = inst_38961);

return statearr_38985;
})();
var statearr_38986_39002 = state_38974__$1;
(statearr_38986_39002[(2)] = null);

(statearr_38986_39002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (9))){
var state_38974__$1 = state_38974;
var statearr_38987_39003 = state_38974__$1;
(statearr_38987_39003[(2)] = null);

(statearr_38987_39003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (5))){
var state_38974__$1 = state_38974;
var statearr_38988_39004 = state_38974__$1;
(statearr_38988_39004[(2)] = null);

(statearr_38988_39004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (10))){
var inst_38966 = (state_38974[(2)]);
var state_38974__$1 = state_38974;
var statearr_38989_39005 = state_38974__$1;
(statearr_38989_39005[(2)] = inst_38966);

(statearr_38989_39005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38975 === (8))){
var inst_38956 = (state_38974[(7)]);
var state_38974__$1 = state_38974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38974__$1,(11),out,inst_38956);
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
});})(c__37523__auto___38995,out))
;
return ((function (switch__37428__auto__,c__37523__auto___38995,out){
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_38990 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38990[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_38990[(1)] = (1));

return statearr_38990;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_38974){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_38974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e38991){if((e38991 instanceof Object)){
var ex__37432__auto__ = e38991;
var statearr_38992_39006 = state_38974;
(statearr_38992_39006[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39007 = state_38974;
state_38974 = G__39007;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_38974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_38974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___38995,out))
})();
var state__37525__auto__ = (function (){var statearr_38993 = f__37524__auto__.call(null);
(statearr_38993[(6)] = c__37523__auto___38995);

return statearr_38993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___38995,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39009 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39009 = (function (f,ch,meta39010){
this.f = f;
this.ch = ch;
this.meta39010 = meta39010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39011,meta39010__$1){
var self__ = this;
var _39011__$1 = this;
return (new cljs.core.async.t_cljs$core$async39009(self__.f,self__.ch,meta39010__$1));
});

cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39011){
var self__ = this;
var _39011__$1 = this;
return self__.meta39010;
});

cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39012 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39012 = (function (f,ch,meta39010,_,fn1,meta39013){
this.f = f;
this.ch = ch;
this.meta39010 = meta39010;
this._ = _;
this.fn1 = fn1;
this.meta39013 = meta39013;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39014,meta39013__$1){
var self__ = this;
var _39014__$1 = this;
return (new cljs.core.async.t_cljs$core$async39012(self__.f,self__.ch,self__.meta39010,self__._,self__.fn1,meta39013__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39012.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39014){
var self__ = this;
var _39014__$1 = this;
return self__.meta39013;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39012.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39012.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39008_SHARP_){
return f1.call(null,(((p1__39008_SHARP_ == null))?null:self__.f.call(null,p1__39008_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39012.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39010","meta39010",1843629403,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39009","cljs.core.async/t_cljs$core$async39009",295816633,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39013","meta39013",-1587334334,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39012.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39012.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39012";

cljs.core.async.t_cljs$core$async39012.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async39012");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39012.
 */
cljs.core.async.__GT_t_cljs$core$async39012 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39012(f__$1,ch__$1,meta39010__$1,___$2,fn1__$1,meta39013){
return (new cljs.core.async.t_cljs$core$async39012(f__$1,ch__$1,meta39010__$1,___$2,fn1__$1,meta39013));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39012(self__.f,self__.ch,self__.meta39010,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39010","meta39010",1843629403,null)], null);
});

cljs.core.async.t_cljs$core$async39009.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39009";

cljs.core.async.t_cljs$core$async39009.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async39009");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39009.
 */
cljs.core.async.__GT_t_cljs$core$async39009 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39009(f__$1,ch__$1,meta39010){
return (new cljs.core.async.t_cljs$core$async39009(f__$1,ch__$1,meta39010));
});

}

return (new cljs.core.async.t_cljs$core$async39009(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39015 = (function (f,ch,meta39016){
this.f = f;
this.ch = ch;
this.meta39016 = meta39016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39017,meta39016__$1){
var self__ = this;
var _39017__$1 = this;
return (new cljs.core.async.t_cljs$core$async39015(self__.f,self__.ch,meta39016__$1));
});

cljs.core.async.t_cljs$core$async39015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39017){
var self__ = this;
var _39017__$1 = this;
return self__.meta39016;
});

cljs.core.async.t_cljs$core$async39015.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39015.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39015.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39015.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39015.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39015.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39016","meta39016",-1705726790,null)], null);
});

cljs.core.async.t_cljs$core$async39015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39015";

cljs.core.async.t_cljs$core$async39015.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async39015");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39015.
 */
cljs.core.async.__GT_t_cljs$core$async39015 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39015(f__$1,ch__$1,meta39016){
return (new cljs.core.async.t_cljs$core$async39015(f__$1,ch__$1,meta39016));
});

}

return (new cljs.core.async.t_cljs$core$async39015(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async39018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39018 = (function (p,ch,meta39019){
this.p = p;
this.ch = ch;
this.meta39019 = meta39019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39020,meta39019__$1){
var self__ = this;
var _39020__$1 = this;
return (new cljs.core.async.t_cljs$core$async39018(self__.p,self__.ch,meta39019__$1));
});

cljs.core.async.t_cljs$core$async39018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39020){
var self__ = this;
var _39020__$1 = this;
return self__.meta39019;
});

cljs.core.async.t_cljs$core$async39018.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39018.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39018.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39018.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39018.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39018.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39018.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39019","meta39019",1713217933,null)], null);
});

cljs.core.async.t_cljs$core$async39018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39018";

cljs.core.async.t_cljs$core$async39018.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async39018");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39018.
 */
cljs.core.async.__GT_t_cljs$core$async39018 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39018(p__$1,ch__$1,meta39019){
return (new cljs.core.async.t_cljs$core$async39018(p__$1,ch__$1,meta39019));
});

}

return (new cljs.core.async.t_cljs$core$async39018(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__39022 = arguments.length;
switch (G__39022) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37523__auto___39062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___39062,out){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___39062,out){
return (function (state_39043){
var state_val_39044 = (state_39043[(1)]);
if((state_val_39044 === (7))){
var inst_39039 = (state_39043[(2)]);
var state_39043__$1 = state_39043;
var statearr_39045_39063 = state_39043__$1;
(statearr_39045_39063[(2)] = inst_39039);

(statearr_39045_39063[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (1))){
var state_39043__$1 = state_39043;
var statearr_39046_39064 = state_39043__$1;
(statearr_39046_39064[(2)] = null);

(statearr_39046_39064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (4))){
var inst_39025 = (state_39043[(7)]);
var inst_39025__$1 = (state_39043[(2)]);
var inst_39026 = (inst_39025__$1 == null);
var state_39043__$1 = (function (){var statearr_39047 = state_39043;
(statearr_39047[(7)] = inst_39025__$1);

return statearr_39047;
})();
if(cljs.core.truth_(inst_39026)){
var statearr_39048_39065 = state_39043__$1;
(statearr_39048_39065[(1)] = (5));

} else {
var statearr_39049_39066 = state_39043__$1;
(statearr_39049_39066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (6))){
var inst_39025 = (state_39043[(7)]);
var inst_39030 = p.call(null,inst_39025);
var state_39043__$1 = state_39043;
if(cljs.core.truth_(inst_39030)){
var statearr_39050_39067 = state_39043__$1;
(statearr_39050_39067[(1)] = (8));

} else {
var statearr_39051_39068 = state_39043__$1;
(statearr_39051_39068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (3))){
var inst_39041 = (state_39043[(2)]);
var state_39043__$1 = state_39043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39043__$1,inst_39041);
} else {
if((state_val_39044 === (2))){
var state_39043__$1 = state_39043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39043__$1,(4),ch);
} else {
if((state_val_39044 === (11))){
var inst_39033 = (state_39043[(2)]);
var state_39043__$1 = state_39043;
var statearr_39052_39069 = state_39043__$1;
(statearr_39052_39069[(2)] = inst_39033);

(statearr_39052_39069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (9))){
var state_39043__$1 = state_39043;
var statearr_39053_39070 = state_39043__$1;
(statearr_39053_39070[(2)] = null);

(statearr_39053_39070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (5))){
var inst_39028 = cljs.core.async.close_BANG_.call(null,out);
var state_39043__$1 = state_39043;
var statearr_39054_39071 = state_39043__$1;
(statearr_39054_39071[(2)] = inst_39028);

(statearr_39054_39071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (10))){
var inst_39036 = (state_39043[(2)]);
var state_39043__$1 = (function (){var statearr_39055 = state_39043;
(statearr_39055[(8)] = inst_39036);

return statearr_39055;
})();
var statearr_39056_39072 = state_39043__$1;
(statearr_39056_39072[(2)] = null);

(statearr_39056_39072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39044 === (8))){
var inst_39025 = (state_39043[(7)]);
var state_39043__$1 = state_39043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39043__$1,(11),out,inst_39025);
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
});})(c__37523__auto___39062,out))
;
return ((function (switch__37428__auto__,c__37523__auto___39062,out){
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_39057 = [null,null,null,null,null,null,null,null,null];
(statearr_39057[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_39057[(1)] = (1));

return statearr_39057;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_39043){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_39043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e39058){if((e39058 instanceof Object)){
var ex__37432__auto__ = e39058;
var statearr_39059_39073 = state_39043;
(statearr_39059_39073[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39058;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39074 = state_39043;
state_39043 = G__39074;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_39043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_39043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___39062,out))
})();
var state__37525__auto__ = (function (){var statearr_39060 = f__37524__auto__.call(null);
(statearr_39060[(6)] = c__37523__auto___39062);

return statearr_39060;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___39062,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__39076 = arguments.length;
switch (G__39076) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__37523__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto__){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto__){
return (function (state_39139){
var state_val_39140 = (state_39139[(1)]);
if((state_val_39140 === (7))){
var inst_39135 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
var statearr_39141_39179 = state_39139__$1;
(statearr_39141_39179[(2)] = inst_39135);

(statearr_39141_39179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (20))){
var inst_39105 = (state_39139[(7)]);
var inst_39116 = (state_39139[(2)]);
var inst_39117 = cljs.core.next.call(null,inst_39105);
var inst_39091 = inst_39117;
var inst_39092 = null;
var inst_39093 = (0);
var inst_39094 = (0);
var state_39139__$1 = (function (){var statearr_39142 = state_39139;
(statearr_39142[(8)] = inst_39094);

(statearr_39142[(9)] = inst_39092);

(statearr_39142[(10)] = inst_39116);

(statearr_39142[(11)] = inst_39093);

(statearr_39142[(12)] = inst_39091);

return statearr_39142;
})();
var statearr_39143_39180 = state_39139__$1;
(statearr_39143_39180[(2)] = null);

(statearr_39143_39180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (1))){
var state_39139__$1 = state_39139;
var statearr_39144_39181 = state_39139__$1;
(statearr_39144_39181[(2)] = null);

(statearr_39144_39181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (4))){
var inst_39080 = (state_39139[(13)]);
var inst_39080__$1 = (state_39139[(2)]);
var inst_39081 = (inst_39080__$1 == null);
var state_39139__$1 = (function (){var statearr_39145 = state_39139;
(statearr_39145[(13)] = inst_39080__$1);

return statearr_39145;
})();
if(cljs.core.truth_(inst_39081)){
var statearr_39146_39182 = state_39139__$1;
(statearr_39146_39182[(1)] = (5));

} else {
var statearr_39147_39183 = state_39139__$1;
(statearr_39147_39183[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (15))){
var state_39139__$1 = state_39139;
var statearr_39151_39184 = state_39139__$1;
(statearr_39151_39184[(2)] = null);

(statearr_39151_39184[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (21))){
var state_39139__$1 = state_39139;
var statearr_39152_39185 = state_39139__$1;
(statearr_39152_39185[(2)] = null);

(statearr_39152_39185[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (13))){
var inst_39094 = (state_39139[(8)]);
var inst_39092 = (state_39139[(9)]);
var inst_39093 = (state_39139[(11)]);
var inst_39091 = (state_39139[(12)]);
var inst_39101 = (state_39139[(2)]);
var inst_39102 = (inst_39094 + (1));
var tmp39148 = inst_39092;
var tmp39149 = inst_39093;
var tmp39150 = inst_39091;
var inst_39091__$1 = tmp39150;
var inst_39092__$1 = tmp39148;
var inst_39093__$1 = tmp39149;
var inst_39094__$1 = inst_39102;
var state_39139__$1 = (function (){var statearr_39153 = state_39139;
(statearr_39153[(8)] = inst_39094__$1);

(statearr_39153[(9)] = inst_39092__$1);

(statearr_39153[(14)] = inst_39101);

(statearr_39153[(11)] = inst_39093__$1);

(statearr_39153[(12)] = inst_39091__$1);

return statearr_39153;
})();
var statearr_39154_39186 = state_39139__$1;
(statearr_39154_39186[(2)] = null);

(statearr_39154_39186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (22))){
var state_39139__$1 = state_39139;
var statearr_39155_39187 = state_39139__$1;
(statearr_39155_39187[(2)] = null);

(statearr_39155_39187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (6))){
var inst_39080 = (state_39139[(13)]);
var inst_39089 = f.call(null,inst_39080);
var inst_39090 = cljs.core.seq.call(null,inst_39089);
var inst_39091 = inst_39090;
var inst_39092 = null;
var inst_39093 = (0);
var inst_39094 = (0);
var state_39139__$1 = (function (){var statearr_39156 = state_39139;
(statearr_39156[(8)] = inst_39094);

(statearr_39156[(9)] = inst_39092);

(statearr_39156[(11)] = inst_39093);

(statearr_39156[(12)] = inst_39091);

return statearr_39156;
})();
var statearr_39157_39188 = state_39139__$1;
(statearr_39157_39188[(2)] = null);

(statearr_39157_39188[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (17))){
var inst_39105 = (state_39139[(7)]);
var inst_39109 = cljs.core.chunk_first.call(null,inst_39105);
var inst_39110 = cljs.core.chunk_rest.call(null,inst_39105);
var inst_39111 = cljs.core.count.call(null,inst_39109);
var inst_39091 = inst_39110;
var inst_39092 = inst_39109;
var inst_39093 = inst_39111;
var inst_39094 = (0);
var state_39139__$1 = (function (){var statearr_39158 = state_39139;
(statearr_39158[(8)] = inst_39094);

(statearr_39158[(9)] = inst_39092);

(statearr_39158[(11)] = inst_39093);

(statearr_39158[(12)] = inst_39091);

return statearr_39158;
})();
var statearr_39159_39189 = state_39139__$1;
(statearr_39159_39189[(2)] = null);

(statearr_39159_39189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (3))){
var inst_39137 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39139__$1,inst_39137);
} else {
if((state_val_39140 === (12))){
var inst_39125 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
var statearr_39160_39190 = state_39139__$1;
(statearr_39160_39190[(2)] = inst_39125);

(statearr_39160_39190[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (2))){
var state_39139__$1 = state_39139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39139__$1,(4),in$);
} else {
if((state_val_39140 === (23))){
var inst_39133 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
var statearr_39161_39191 = state_39139__$1;
(statearr_39161_39191[(2)] = inst_39133);

(statearr_39161_39191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (19))){
var inst_39120 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
var statearr_39162_39192 = state_39139__$1;
(statearr_39162_39192[(2)] = inst_39120);

(statearr_39162_39192[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (11))){
var inst_39105 = (state_39139[(7)]);
var inst_39091 = (state_39139[(12)]);
var inst_39105__$1 = cljs.core.seq.call(null,inst_39091);
var state_39139__$1 = (function (){var statearr_39163 = state_39139;
(statearr_39163[(7)] = inst_39105__$1);

return statearr_39163;
})();
if(inst_39105__$1){
var statearr_39164_39193 = state_39139__$1;
(statearr_39164_39193[(1)] = (14));

} else {
var statearr_39165_39194 = state_39139__$1;
(statearr_39165_39194[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (9))){
var inst_39127 = (state_39139[(2)]);
var inst_39128 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39139__$1 = (function (){var statearr_39166 = state_39139;
(statearr_39166[(15)] = inst_39127);

return statearr_39166;
})();
if(cljs.core.truth_(inst_39128)){
var statearr_39167_39195 = state_39139__$1;
(statearr_39167_39195[(1)] = (21));

} else {
var statearr_39168_39196 = state_39139__$1;
(statearr_39168_39196[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (5))){
var inst_39083 = cljs.core.async.close_BANG_.call(null,out);
var state_39139__$1 = state_39139;
var statearr_39169_39197 = state_39139__$1;
(statearr_39169_39197[(2)] = inst_39083);

(statearr_39169_39197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (14))){
var inst_39105 = (state_39139[(7)]);
var inst_39107 = cljs.core.chunked_seq_QMARK_.call(null,inst_39105);
var state_39139__$1 = state_39139;
if(inst_39107){
var statearr_39170_39198 = state_39139__$1;
(statearr_39170_39198[(1)] = (17));

} else {
var statearr_39171_39199 = state_39139__$1;
(statearr_39171_39199[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (16))){
var inst_39123 = (state_39139[(2)]);
var state_39139__$1 = state_39139;
var statearr_39172_39200 = state_39139__$1;
(statearr_39172_39200[(2)] = inst_39123);

(statearr_39172_39200[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39140 === (10))){
var inst_39094 = (state_39139[(8)]);
var inst_39092 = (state_39139[(9)]);
var inst_39099 = cljs.core._nth.call(null,inst_39092,inst_39094);
var state_39139__$1 = state_39139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39139__$1,(13),out,inst_39099);
} else {
if((state_val_39140 === (18))){
var inst_39105 = (state_39139[(7)]);
var inst_39114 = cljs.core.first.call(null,inst_39105);
var state_39139__$1 = state_39139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39139__$1,(20),out,inst_39114);
} else {
if((state_val_39140 === (8))){
var inst_39094 = (state_39139[(8)]);
var inst_39093 = (state_39139[(11)]);
var inst_39096 = (inst_39094 < inst_39093);
var inst_39097 = inst_39096;
var state_39139__$1 = state_39139;
if(cljs.core.truth_(inst_39097)){
var statearr_39173_39201 = state_39139__$1;
(statearr_39173_39201[(1)] = (10));

} else {
var statearr_39174_39202 = state_39139__$1;
(statearr_39174_39202[(1)] = (11));

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
});})(c__37523__auto__))
;
return ((function (switch__37428__auto__,c__37523__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____0 = (function (){
var statearr_39175 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39175[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__);

(statearr_39175[(1)] = (1));

return statearr_39175;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____1 = (function (state_39139){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_39139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e39176){if((e39176 instanceof Object)){
var ex__37432__auto__ = e39176;
var statearr_39177_39203 = state_39139;
(statearr_39177_39203[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39204 = state_39139;
state_39139 = G__39204;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__ = function(state_39139){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____1.call(this,state_39139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37429__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto__))
})();
var state__37525__auto__ = (function (){var statearr_39178 = f__37524__auto__.call(null);
(statearr_39178[(6)] = c__37523__auto__);

return statearr_39178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto__))
);

return c__37523__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__39206 = arguments.length;
switch (G__39206) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__39209 = arguments.length;
switch (G__39209) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__39212 = arguments.length;
switch (G__39212) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37523__auto___39259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___39259,out){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___39259,out){
return (function (state_39236){
var state_val_39237 = (state_39236[(1)]);
if((state_val_39237 === (7))){
var inst_39231 = (state_39236[(2)]);
var state_39236__$1 = state_39236;
var statearr_39238_39260 = state_39236__$1;
(statearr_39238_39260[(2)] = inst_39231);

(statearr_39238_39260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39237 === (1))){
var inst_39213 = null;
var state_39236__$1 = (function (){var statearr_39239 = state_39236;
(statearr_39239[(7)] = inst_39213);

return statearr_39239;
})();
var statearr_39240_39261 = state_39236__$1;
(statearr_39240_39261[(2)] = null);

(statearr_39240_39261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39237 === (4))){
var inst_39216 = (state_39236[(8)]);
var inst_39216__$1 = (state_39236[(2)]);
var inst_39217 = (inst_39216__$1 == null);
var inst_39218 = cljs.core.not.call(null,inst_39217);
var state_39236__$1 = (function (){var statearr_39241 = state_39236;
(statearr_39241[(8)] = inst_39216__$1);

return statearr_39241;
})();
if(inst_39218){
var statearr_39242_39262 = state_39236__$1;
(statearr_39242_39262[(1)] = (5));

} else {
var statearr_39243_39263 = state_39236__$1;
(statearr_39243_39263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39237 === (6))){
var state_39236__$1 = state_39236;
var statearr_39244_39264 = state_39236__$1;
(statearr_39244_39264[(2)] = null);

(statearr_39244_39264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39237 === (3))){
var inst_39233 = (state_39236[(2)]);
var inst_39234 = cljs.core.async.close_BANG_.call(null,out);
var state_39236__$1 = (function (){var statearr_39245 = state_39236;
(statearr_39245[(9)] = inst_39233);

return statearr_39245;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39236__$1,inst_39234);
} else {
if((state_val_39237 === (2))){
var state_39236__$1 = state_39236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39236__$1,(4),ch);
} else {
if((state_val_39237 === (11))){
var inst_39216 = (state_39236[(8)]);
var inst_39225 = (state_39236[(2)]);
var inst_39213 = inst_39216;
var state_39236__$1 = (function (){var statearr_39246 = state_39236;
(statearr_39246[(10)] = inst_39225);

(statearr_39246[(7)] = inst_39213);

return statearr_39246;
})();
var statearr_39247_39265 = state_39236__$1;
(statearr_39247_39265[(2)] = null);

(statearr_39247_39265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39237 === (9))){
var inst_39216 = (state_39236[(8)]);
var state_39236__$1 = state_39236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39236__$1,(11),out,inst_39216);
} else {
if((state_val_39237 === (5))){
var inst_39216 = (state_39236[(8)]);
var inst_39213 = (state_39236[(7)]);
var inst_39220 = cljs.core._EQ_.call(null,inst_39216,inst_39213);
var state_39236__$1 = state_39236;
if(inst_39220){
var statearr_39249_39266 = state_39236__$1;
(statearr_39249_39266[(1)] = (8));

} else {
var statearr_39250_39267 = state_39236__$1;
(statearr_39250_39267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39237 === (10))){
var inst_39228 = (state_39236[(2)]);
var state_39236__$1 = state_39236;
var statearr_39251_39268 = state_39236__$1;
(statearr_39251_39268[(2)] = inst_39228);

(statearr_39251_39268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39237 === (8))){
var inst_39213 = (state_39236[(7)]);
var tmp39248 = inst_39213;
var inst_39213__$1 = tmp39248;
var state_39236__$1 = (function (){var statearr_39252 = state_39236;
(statearr_39252[(7)] = inst_39213__$1);

return statearr_39252;
})();
var statearr_39253_39269 = state_39236__$1;
(statearr_39253_39269[(2)] = null);

(statearr_39253_39269[(1)] = (2));


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
});})(c__37523__auto___39259,out))
;
return ((function (switch__37428__auto__,c__37523__auto___39259,out){
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_39254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39254[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_39254[(1)] = (1));

return statearr_39254;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_39236){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_39236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e39255){if((e39255 instanceof Object)){
var ex__37432__auto__ = e39255;
var statearr_39256_39270 = state_39236;
(statearr_39256_39270[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39271 = state_39236;
state_39236 = G__39271;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_39236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_39236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___39259,out))
})();
var state__37525__auto__ = (function (){var statearr_39257 = f__37524__auto__.call(null);
(statearr_39257[(6)] = c__37523__auto___39259);

return statearr_39257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___39259,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__39273 = arguments.length;
switch (G__39273) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37523__auto___39339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___39339,out){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___39339,out){
return (function (state_39311){
var state_val_39312 = (state_39311[(1)]);
if((state_val_39312 === (7))){
var inst_39307 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
var statearr_39313_39340 = state_39311__$1;
(statearr_39313_39340[(2)] = inst_39307);

(statearr_39313_39340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (1))){
var inst_39274 = (new Array(n));
var inst_39275 = inst_39274;
var inst_39276 = (0);
var state_39311__$1 = (function (){var statearr_39314 = state_39311;
(statearr_39314[(7)] = inst_39276);

(statearr_39314[(8)] = inst_39275);

return statearr_39314;
})();
var statearr_39315_39341 = state_39311__$1;
(statearr_39315_39341[(2)] = null);

(statearr_39315_39341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (4))){
var inst_39279 = (state_39311[(9)]);
var inst_39279__$1 = (state_39311[(2)]);
var inst_39280 = (inst_39279__$1 == null);
var inst_39281 = cljs.core.not.call(null,inst_39280);
var state_39311__$1 = (function (){var statearr_39316 = state_39311;
(statearr_39316[(9)] = inst_39279__$1);

return statearr_39316;
})();
if(inst_39281){
var statearr_39317_39342 = state_39311__$1;
(statearr_39317_39342[(1)] = (5));

} else {
var statearr_39318_39343 = state_39311__$1;
(statearr_39318_39343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (15))){
var inst_39301 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
var statearr_39319_39344 = state_39311__$1;
(statearr_39319_39344[(2)] = inst_39301);

(statearr_39319_39344[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (13))){
var state_39311__$1 = state_39311;
var statearr_39320_39345 = state_39311__$1;
(statearr_39320_39345[(2)] = null);

(statearr_39320_39345[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (6))){
var inst_39276 = (state_39311[(7)]);
var inst_39297 = (inst_39276 > (0));
var state_39311__$1 = state_39311;
if(cljs.core.truth_(inst_39297)){
var statearr_39321_39346 = state_39311__$1;
(statearr_39321_39346[(1)] = (12));

} else {
var statearr_39322_39347 = state_39311__$1;
(statearr_39322_39347[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (3))){
var inst_39309 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39311__$1,inst_39309);
} else {
if((state_val_39312 === (12))){
var inst_39275 = (state_39311[(8)]);
var inst_39299 = cljs.core.vec.call(null,inst_39275);
var state_39311__$1 = state_39311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39311__$1,(15),out,inst_39299);
} else {
if((state_val_39312 === (2))){
var state_39311__$1 = state_39311;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39311__$1,(4),ch);
} else {
if((state_val_39312 === (11))){
var inst_39291 = (state_39311[(2)]);
var inst_39292 = (new Array(n));
var inst_39275 = inst_39292;
var inst_39276 = (0);
var state_39311__$1 = (function (){var statearr_39323 = state_39311;
(statearr_39323[(7)] = inst_39276);

(statearr_39323[(10)] = inst_39291);

(statearr_39323[(8)] = inst_39275);

return statearr_39323;
})();
var statearr_39324_39348 = state_39311__$1;
(statearr_39324_39348[(2)] = null);

(statearr_39324_39348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (9))){
var inst_39275 = (state_39311[(8)]);
var inst_39289 = cljs.core.vec.call(null,inst_39275);
var state_39311__$1 = state_39311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39311__$1,(11),out,inst_39289);
} else {
if((state_val_39312 === (5))){
var inst_39276 = (state_39311[(7)]);
var inst_39279 = (state_39311[(9)]);
var inst_39275 = (state_39311[(8)]);
var inst_39284 = (state_39311[(11)]);
var inst_39283 = (inst_39275[inst_39276] = inst_39279);
var inst_39284__$1 = (inst_39276 + (1));
var inst_39285 = (inst_39284__$1 < n);
var state_39311__$1 = (function (){var statearr_39325 = state_39311;
(statearr_39325[(12)] = inst_39283);

(statearr_39325[(11)] = inst_39284__$1);

return statearr_39325;
})();
if(cljs.core.truth_(inst_39285)){
var statearr_39326_39349 = state_39311__$1;
(statearr_39326_39349[(1)] = (8));

} else {
var statearr_39327_39350 = state_39311__$1;
(statearr_39327_39350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (14))){
var inst_39304 = (state_39311[(2)]);
var inst_39305 = cljs.core.async.close_BANG_.call(null,out);
var state_39311__$1 = (function (){var statearr_39329 = state_39311;
(statearr_39329[(13)] = inst_39304);

return statearr_39329;
})();
var statearr_39330_39351 = state_39311__$1;
(statearr_39330_39351[(2)] = inst_39305);

(statearr_39330_39351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (10))){
var inst_39295 = (state_39311[(2)]);
var state_39311__$1 = state_39311;
var statearr_39331_39352 = state_39311__$1;
(statearr_39331_39352[(2)] = inst_39295);

(statearr_39331_39352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39312 === (8))){
var inst_39275 = (state_39311[(8)]);
var inst_39284 = (state_39311[(11)]);
var tmp39328 = inst_39275;
var inst_39275__$1 = tmp39328;
var inst_39276 = inst_39284;
var state_39311__$1 = (function (){var statearr_39332 = state_39311;
(statearr_39332[(7)] = inst_39276);

(statearr_39332[(8)] = inst_39275__$1);

return statearr_39332;
})();
var statearr_39333_39353 = state_39311__$1;
(statearr_39333_39353[(2)] = null);

(statearr_39333_39353[(1)] = (2));


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
});})(c__37523__auto___39339,out))
;
return ((function (switch__37428__auto__,c__37523__auto___39339,out){
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_39334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39334[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_39334[(1)] = (1));

return statearr_39334;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_39311){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_39311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e39335){if((e39335 instanceof Object)){
var ex__37432__auto__ = e39335;
var statearr_39336_39354 = state_39311;
(statearr_39336_39354[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39355 = state_39311;
state_39311 = G__39355;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_39311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_39311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___39339,out))
})();
var state__37525__auto__ = (function (){var statearr_39337 = f__37524__auto__.call(null);
(statearr_39337[(6)] = c__37523__auto___39339);

return statearr_39337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___39339,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__39357 = arguments.length;
switch (G__39357) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37523__auto___39427 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37523__auto___39427,out){
return (function (){
var f__37524__auto__ = (function (){var switch__37428__auto__ = ((function (c__37523__auto___39427,out){
return (function (state_39399){
var state_val_39400 = (state_39399[(1)]);
if((state_val_39400 === (7))){
var inst_39395 = (state_39399[(2)]);
var state_39399__$1 = state_39399;
var statearr_39401_39428 = state_39399__$1;
(statearr_39401_39428[(2)] = inst_39395);

(statearr_39401_39428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (1))){
var inst_39358 = [];
var inst_39359 = inst_39358;
var inst_39360 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39399__$1 = (function (){var statearr_39402 = state_39399;
(statearr_39402[(7)] = inst_39359);

(statearr_39402[(8)] = inst_39360);

return statearr_39402;
})();
var statearr_39403_39429 = state_39399__$1;
(statearr_39403_39429[(2)] = null);

(statearr_39403_39429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (4))){
var inst_39363 = (state_39399[(9)]);
var inst_39363__$1 = (state_39399[(2)]);
var inst_39364 = (inst_39363__$1 == null);
var inst_39365 = cljs.core.not.call(null,inst_39364);
var state_39399__$1 = (function (){var statearr_39404 = state_39399;
(statearr_39404[(9)] = inst_39363__$1);

return statearr_39404;
})();
if(inst_39365){
var statearr_39405_39430 = state_39399__$1;
(statearr_39405_39430[(1)] = (5));

} else {
var statearr_39406_39431 = state_39399__$1;
(statearr_39406_39431[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (15))){
var inst_39389 = (state_39399[(2)]);
var state_39399__$1 = state_39399;
var statearr_39407_39432 = state_39399__$1;
(statearr_39407_39432[(2)] = inst_39389);

(statearr_39407_39432[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (13))){
var state_39399__$1 = state_39399;
var statearr_39408_39433 = state_39399__$1;
(statearr_39408_39433[(2)] = null);

(statearr_39408_39433[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (6))){
var inst_39359 = (state_39399[(7)]);
var inst_39384 = inst_39359.length;
var inst_39385 = (inst_39384 > (0));
var state_39399__$1 = state_39399;
if(cljs.core.truth_(inst_39385)){
var statearr_39409_39434 = state_39399__$1;
(statearr_39409_39434[(1)] = (12));

} else {
var statearr_39410_39435 = state_39399__$1;
(statearr_39410_39435[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (3))){
var inst_39397 = (state_39399[(2)]);
var state_39399__$1 = state_39399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39399__$1,inst_39397);
} else {
if((state_val_39400 === (12))){
var inst_39359 = (state_39399[(7)]);
var inst_39387 = cljs.core.vec.call(null,inst_39359);
var state_39399__$1 = state_39399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39399__$1,(15),out,inst_39387);
} else {
if((state_val_39400 === (2))){
var state_39399__$1 = state_39399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39399__$1,(4),ch);
} else {
if((state_val_39400 === (11))){
var inst_39367 = (state_39399[(10)]);
var inst_39363 = (state_39399[(9)]);
var inst_39377 = (state_39399[(2)]);
var inst_39378 = [];
var inst_39379 = inst_39378.push(inst_39363);
var inst_39359 = inst_39378;
var inst_39360 = inst_39367;
var state_39399__$1 = (function (){var statearr_39411 = state_39399;
(statearr_39411[(7)] = inst_39359);

(statearr_39411[(8)] = inst_39360);

(statearr_39411[(11)] = inst_39377);

(statearr_39411[(12)] = inst_39379);

return statearr_39411;
})();
var statearr_39412_39436 = state_39399__$1;
(statearr_39412_39436[(2)] = null);

(statearr_39412_39436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (9))){
var inst_39359 = (state_39399[(7)]);
var inst_39375 = cljs.core.vec.call(null,inst_39359);
var state_39399__$1 = state_39399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39399__$1,(11),out,inst_39375);
} else {
if((state_val_39400 === (5))){
var inst_39360 = (state_39399[(8)]);
var inst_39367 = (state_39399[(10)]);
var inst_39363 = (state_39399[(9)]);
var inst_39367__$1 = f.call(null,inst_39363);
var inst_39368 = cljs.core._EQ_.call(null,inst_39367__$1,inst_39360);
var inst_39369 = cljs.core.keyword_identical_QMARK_.call(null,inst_39360,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39370 = ((inst_39368) || (inst_39369));
var state_39399__$1 = (function (){var statearr_39413 = state_39399;
(statearr_39413[(10)] = inst_39367__$1);

return statearr_39413;
})();
if(cljs.core.truth_(inst_39370)){
var statearr_39414_39437 = state_39399__$1;
(statearr_39414_39437[(1)] = (8));

} else {
var statearr_39415_39438 = state_39399__$1;
(statearr_39415_39438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (14))){
var inst_39392 = (state_39399[(2)]);
var inst_39393 = cljs.core.async.close_BANG_.call(null,out);
var state_39399__$1 = (function (){var statearr_39417 = state_39399;
(statearr_39417[(13)] = inst_39392);

return statearr_39417;
})();
var statearr_39418_39439 = state_39399__$1;
(statearr_39418_39439[(2)] = inst_39393);

(statearr_39418_39439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (10))){
var inst_39382 = (state_39399[(2)]);
var state_39399__$1 = state_39399;
var statearr_39419_39440 = state_39399__$1;
(statearr_39419_39440[(2)] = inst_39382);

(statearr_39419_39440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39400 === (8))){
var inst_39359 = (state_39399[(7)]);
var inst_39367 = (state_39399[(10)]);
var inst_39363 = (state_39399[(9)]);
var inst_39372 = inst_39359.push(inst_39363);
var tmp39416 = inst_39359;
var inst_39359__$1 = tmp39416;
var inst_39360 = inst_39367;
var state_39399__$1 = (function (){var statearr_39420 = state_39399;
(statearr_39420[(14)] = inst_39372);

(statearr_39420[(7)] = inst_39359__$1);

(statearr_39420[(8)] = inst_39360);

return statearr_39420;
})();
var statearr_39421_39441 = state_39399__$1;
(statearr_39421_39441[(2)] = null);

(statearr_39421_39441[(1)] = (2));


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
});})(c__37523__auto___39427,out))
;
return ((function (switch__37428__auto__,c__37523__auto___39427,out){
return (function() {
var cljs$core$async$state_machine__37429__auto__ = null;
var cljs$core$async$state_machine__37429__auto____0 = (function (){
var statearr_39422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39422[(0)] = cljs$core$async$state_machine__37429__auto__);

(statearr_39422[(1)] = (1));

return statearr_39422;
});
var cljs$core$async$state_machine__37429__auto____1 = (function (state_39399){
while(true){
var ret_value__37430__auto__ = (function (){try{while(true){
var result__37431__auto__ = switch__37428__auto__.call(null,state_39399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37431__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37431__auto__;
}
break;
}
}catch (e39423){if((e39423 instanceof Object)){
var ex__37432__auto__ = e39423;
var statearr_39424_39442 = state_39399;
(statearr_39424_39442[(5)] = ex__37432__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37430__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39443 = state_39399;
state_39399 = G__39443;
continue;
} else {
return ret_value__37430__auto__;
}
break;
}
});
cljs$core$async$state_machine__37429__auto__ = function(state_39399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37429__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37429__auto____1.call(this,state_39399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37429__auto____0;
cljs$core$async$state_machine__37429__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37429__auto____1;
return cljs$core$async$state_machine__37429__auto__;
})()
;})(switch__37428__auto__,c__37523__auto___39427,out))
})();
var state__37525__auto__ = (function (){var statearr_39425 = f__37524__auto__.call(null);
(statearr_39425[(6)] = c__37523__auto___39427);

return statearr_39425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37525__auto__);
});})(c__37523__auto___39427,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1620066999939
