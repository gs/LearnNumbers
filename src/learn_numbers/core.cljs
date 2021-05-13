(ns learn-numbers.core
  (:require 
   [reagent.core :as reagent :refer [atom]]
   [reagent.dom :as rd]))

(enable-console-print!)

(defonce number (atom (rand-int 100)))

(def lang-to-country
  {"en-US" "Ameryka / America",
   "pl-PL" "Polska / Poland",
   "de-DE" "Niemcy / Germany",
   "it-IT" "Włochy / Italy",
   "es-ES" "Kostarica / Costa Rica"})

(defn speak-it
  "Call the google translate with language and value of the atom"
  [lang]
  (let [speech-syn (.-speechSynthesis js/window)]
    (def msg (js/SpeechSynthesisUtterance. @number))
    (aset msg "lang" lang)
    (.speak speech-syn msg)))

(defn change-me []
  (rand-int 101))

(defn flag-element
  "render the flag element"
  [lang]
  (def filename (str "flags/" lang ".png"))
  [:span.has-text-white.has-background-primary-dark {:padding "10px 10px 10px 10px"} (lang-to-country lang)
   [:img {
          :src filename
          :width "250px"
          :height "250px"
          :on-click #(speak-it lang)
          :alt lang}]])

  

(defn app-container []
  [:div.section
   [:div.container
    [:div.columns
      [:div.column.has-text-centered
       [:h1.title "Naucz sie cyfrow"]]]]
   [:div.columns
    [:div.column.has-background-danger-dark.has-text-centered
     [:h1.has-text-white {:style {:font-size "14rem"}} @number]]
    [:div.column
     [:div.buttons
      [:input {:type "button" :class "button is-success" :value "Inna cyfra"
               :on-click #(swap! number change-me)}]]]]
   [:div.columns
     [:div.column
      (flag-element "pl-PL")]
    [:div.column
     (flag-element "de-DE")]
    [:div.column
     (flag-element "en-US")]
    [:div.column
     (flag-element "it-IT")]
    [:div.column
     (flag-element "es-ES")]
    [:audio {:id "audio1" :src ""}]]])

(rd/render [app-container]
           (. js/document (getElementById "app")))

(defn on-js-reload [])
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)
