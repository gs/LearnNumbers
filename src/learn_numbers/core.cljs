(ns learn-numbers.core
  (:require 
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rd]))

(enable-console-print!)

(def by-id goog.dom.getElement)

(defonce number (atom (rand-int 100)))

;(defn app-container []
;  [:h1 {}
;   "Hello World"])

(defn change-me []
  (rand-int 100))

(defn app-container []
  [:div.center
   [:h1 "Nauch sie liczb w roznych jezykach"]
   [:h2 @number]
   [:img {
          :src "flags/pl.png"
          :width "50px"
          :height "50px"
          :on-click #(js/alert @number)}]


   [:img {:src "flags/de.png" :width "50px" :height "50px"}]
   [:img {:src "flags/uk.png" :width "50px" :height "50px"}]
   [:br]
   [:input {:type "button" :value "One more time"
            :on-click #(swap! number change-me)}]])

(rd/render [app-container]
           (. js/document (getElementById "app")))

(defn on-js-reload [])
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)
/

;(r/render-component [app-container] (by-id "app"))
;
;;;; Install the service worker
;(when (exists? js/navigator.serviceWorker)
;  (-> js/navigator
;      .-serviceWorker
;      (.register "/sw.js")
;      (.then #(js/console.log "Server worker registered."))))
