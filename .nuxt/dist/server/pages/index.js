exports.ids = [3];
exports.modules = {

/***/ 33:
/***/ (function(module) {

module.exports = JSON.parse("[{\"actuID\":1,\"fr\":{\"title\":\"Laissez brûler le parpaing - captation\",\"description\":\"Kub- Introduction... blablabla\"},\"en\":{\"title\":\"Let te cinder block burn - recording\",\"description\":\"Kub- Introduction... blablabla\"},\"images\":[],\"media\":[]},{\"actuID\":2,\"fr\":{\"title\":\"Sortie de Kub- Introduction\",\"description\":\"Kub- Introduction... blablabla\"},\"en\":{\"title\":\"Releasing Kub- intro\",\"description\":\"Kub- Introduction... blablabla\"},\"images\":[],\"media\":[]}]");

/***/ }),

/***/ 34:
/***/ (function(module) {

module.exports = JSON.parse("[{\"objectID\":1,\"fr\":{\"title\":\"Laissez brûler le parpaing\",\"description\":\"Laisser brûler le parpaing\"},\"en\":{\"title\":\"Let the cinder block burn\",\"description\":\"Let the cinder block burn\"},\"images\":[],\"media\":[\"<iframe width=\\\"560\\\" height=\\\"315\\\" src=\\\"https://www.youtube.com/embed/PJQHRjD8aNc\\\" title=\\\"YouTube video player\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\\" allowfullscreen></iframe>\"]},{\"objectID\":2,\"fr\":{\"title\":\"Kub- Introduction : 1972, de l'attitude du CUBE et sa réception\",\"description\":\"Kub- Introduction : 1972, de l'attitude du CUBE et sa réception, est la première vidéo d'une série. Avec en premier rôle l'objet éponyme dans toute sa frustrante simplicité, Kub- se joue des fantasmes que l'on créé autour de tout ce qui est technologique, et de leur nature inévitablement décevante une fois concrétisés. Dans ce constant mouvement de va-et-vient entre les promesses pompeuses et préparées, et les durs rappels à ce que la \\\"vraie vie\\\" ne sera jamais - ou restera toujours -, avons-nous déjà réussi à créer la moindre véritable singularité qui ait su modifier profondément nos vies ? Ou nous enfermons-nous dans une boucle de fictions autoprophétiques, créant des sauveurs imaginaires sur lesquels nous espérons pouvoir compter avant qu'ils ne viennent s'imposer à nous dans un étrange mélange entre pathétique et menaçant ? Peu importe que ces questions ne puissent jamais trouver une réponse définitive, nous voulons offrir à travers ce projet un exemple de résilience face au trauma technologique. Et si nous avons fait le choix de raconter tout cela à la fois sous la forme d'une conférence techno-utopique et d'un message d'alerte quand à une invasion alien secrète, c'est que nous ne savons toujours pas vraiment de quel côté entre ces possibilités le CUBE finira par tomber.\"},\"en\":{\"title\":\"Kub- Introduction : 1972, regarding the CUBE's behavior and its reception\",\"description\":\"KUB- Intro: 1972, regarding the CUBE's behavior and its reception, is the first and entry in a video serie project. Starring the eponymous object in all its frustrating simplicity, KUB- is a play on all the fantasies we create around everything that seems even remotely technological, their necessarily disappointing nature when made real, and the kind of discourse we weave trying to sell the first and excuse the latter. In this constant back and forth between staged, bombastic promises and harsh reminders of what \\\"real life\\\" will ever - or never - be, have we already truly succeeded in creating a singularity that changed the very nature of what our lives are ? Or are we stucked in a loop of autoprophetic fictions, creating imaginatory saviors that we hope to rely on until they're dumped on our knees and revealed as this strange mixture of pathetic and menacing ? Even though these questions will never accept a definitive answer, we wanted to offer in our project an example of resilience in the face of technological trauma. And if we narrate it as both a techno-utopian keynote and a secret alien invasion, it's because we still haven't been able to figure out exactly on what side of these the CUBE might fall.\"},\"images\":[\"/projects/2/KUB- Intro_screen700.jpg\",\"/projects/2/KUB- Intro_screen600.jpg\",\"/projects/2/KUB- Intro_screen80.jpg\",\"/projects/2/KUB- Intro_screen5.jpg\",\"/projects/2/KUB- Intro_screen2.jpg\",\"/projects/2/KUB- Intro_screen1.jpg\"],\"media\":[\"<iframe src=\\\"https://www.youtube.com/embed/ibMO5_32Kbo\\\" style=\\\"height: 56vw\\\" class=\\\"w-full\\\" title=\\\"YouTube video player\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; \\\" allowfullscreen></iframe>\"]}]");

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=147ef09b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_vm._ssrNode("<div class=\"header flex content-part w-full h-screen justify-center items-center\"></div> <div class=\"bg-black\"><div class=\"latest w-full h-max p-5 pb-8\">"+((_vm.latest.media.length > 0)?("<div>"+(_vm._s(_vm.latest.media[0]))+"</div>"):"<!---->")+" <div class=\"p-8\"><h2 class=\"text-8xl leading-normal lg:text-4xl\">"+_vm._ssrEscape(_vm._s(_vm.latest[_vm.lang].title))+"</h2> <p class=\"text-5xl leading-relaxed lg:text-xl\">"+_vm._ssrEscape(_vm._s(_vm.latest[_vm.lang].description))+"</p></div></div> <div class=\" w-full h-max p-5 pb-8 text-center text-8xl lg:text-4xl\">"+((_vm.lang==='fr')?("<p>\n                Ce site est encore en construction.<br>\n                Retrouvez-y bientôt d'autres projets et actualités.\n            </p>"):("<p>\n                This website is still under construction.<br>\n                Come back soon for more projects and news.\n            </p>"))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=147ef09b&

// EXTERNAL MODULE: ./data/projets.json
var projets = __webpack_require__(34);

// EXTERNAL MODULE: ./data/actus.json
var actus = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Home'
    };
  },

  data() {
    return {
      //lang: this.$store.state.lang,
      actus: actus.reverse(actus.slice(0, 3))
    };
  },

  computed: {
    lang() {
      return this.$store.state.lang;
    },

    latest() {
      const latest = projets[1];
      return latest;
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "761533f0"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map