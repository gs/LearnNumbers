(ns learn-numbers.core
  (:require 
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rd]))

(enable-console-print!)

(defonce number (atom (rand-int 100)))

(defn speak-it
  "Call the google translate with language and value of the atom"
  [lang]
  (let [speech-syn (.-speechSynthesis js/window)]
    (def msg (js/SpeechSynthesisUtterance. @number))
    (aset msg "lang" lang)
    (.speak speech-syn msg)))


(defn change-me []
  (rand-int 100))

(defn flag-element
  "render the flag element"
  [lang]
  (def filename (str "flags/" lang ".png"))
  [:span {:padding "10px 10px 10px 10px"}
   [:img {
          :src filename 
          :width "50px"
          :height "50px"
          :on-click #(speak-it lang)}]]

  )

(defn app-container []
  [:div.center
   [:h1 "Nauka liczb w roznych jezykach"]
   [:h2 @number]
   (flag-element "pl-PL")
   (flag-element "de-DE")
   (flag-element "en-US")
   [:br]
   [:audio {:id "audio1" :src ""}]
   [:input {:type "button" :value "One more time"
            :on-click #(swap! number change-me)}]])

(rd/render [app-container]
           (. js/document (getElementById "app")))

(defn on-js-reload [])
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)