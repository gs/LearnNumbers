(ns learn-numbers.core
    (:require 
              [reagent.core :as reagent :refer [atom]]
              [reagent.dom :as rd]))

(enable-console-print!)

(println "This text is printed from src/learn-numbers/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload


(defonce number (atom (rand-int 100)))

(defn change-me []
  (rand-int 100))

(defn hello-world []
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


(rd/render [hello-world]
           (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
