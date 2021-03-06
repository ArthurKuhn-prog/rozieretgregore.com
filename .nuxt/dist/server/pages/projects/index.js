exports.ids = [5];
exports.modules = {

/***/ 34:
/***/ (function(module) {

module.exports = JSON.parse("[{\"objectID\":1,\"fr\":{\"title\":\"Laissez brûler le parpaing\",\"description\":\"Laisser brûler le parpaing\"},\"en\":{\"title\":\"Let the cinder block burn\",\"description\":\"Let the cinder block burn\"},\"images\":[],\"media\":[\"<iframe width=\\\"560\\\" height=\\\"315\\\" src=\\\"https://www.youtube.com/embed/PJQHRjD8aNc\\\" title=\\\"YouTube video player\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\\" allowfullscreen></iframe>\"]},{\"objectID\":2,\"fr\":{\"title\":\"Kub- Introduction : 1972, de l'attitude du CUBE et sa réception\",\"description\":\"Kub- Introduction : 1972, de l'attitude du CUBE et sa réception, est la première vidéo d'une série. Avec en premier rôle l'objet éponyme dans toute sa frustrante simplicité, Kub- se joue des fantasmes que l'on créé autour de tout ce qui est technologique, et de leur nature inévitablement décevante une fois concrétisés. Dans ce constant mouvement de va-et-vient entre les promesses pompeuses et préparées, et les durs rappels à ce que la \\\"vraie vie\\\" ne sera jamais - ou restera toujours -, avons-nous déjà réussi à créer la moindre véritable singularité qui ait su modifier profondément nos vies ? Ou nous enfermons-nous dans une boucle de fictions autoprophétiques, créant des sauveurs imaginaires sur lesquels nous espérons pouvoir compter avant qu'ils ne viennent s'imposer à nous dans un étrange mélange entre pathétique et menaçant ? Peu importe que ces questions ne puissent jamais trouver une réponse définitive, nous voulons offrir à travers ce projet un exemple de résilience face au trauma technologique. Et si nous avons fait le choix de raconter tout cela à la fois sous la forme d'une conférence techno-utopique et d'un message d'alerte quand à une invasion alien secrète, c'est que nous ne savons toujours pas vraiment de quel côté entre ces possibilités le CUBE finira par tomber.\"},\"en\":{\"title\":\"Kub- Introduction : 1972, regarding the CUBE's behavior and its reception\",\"description\":\"KUB- Intro: 1972, regarding the CUBE's behavior and its reception, is the first and entry in a video serie project. Starring the eponymous object in all its frustrating simplicity, KUB- is a play on all the fantasies we create around everything that seems even remotely technological, their necessarily disappointing nature when made real, and the kind of discourse we weave trying to sell the first and excuse the latter. In this constant back and forth between staged, bombastic promises and harsh reminders of what \\\"real life\\\" will ever - or never - be, have we already truly succeeded in creating a singularity that changed the very nature of what our lives are ? Or are we stucked in a loop of autoprophetic fictions, creating imaginatory saviors that we hope to rely on until they're dumped on our knees and revealed as this strange mixture of pathetic and menacing ? Even though these questions will never accept a definitive answer, we wanted to offer in our project an example of resilience in the face of technological trauma. And if we narrate it as both a techno-utopian keynote and a secret alien invasion, it's because we still haven't been able to figure out exactly on what side of these the CUBE might fall.\"},\"images\":[\"/projects/2/KUB- Intro_screen700.jpg\",\"/projects/2/KUB- Intro_screen600.jpg\",\"/projects/2/KUB- Intro_screen80.jpg\",\"/projects/2/KUB- Intro_screen5.jpg\",\"/projects/2/KUB- Intro_screen2.jpg\",\"/projects/2/KUB- Intro_screen1.jpg\"],\"media\":[\"<iframe src=\\\"https://www.youtube.com/embed/ibMO5_32Kbo\\\" style=\\\"height: 56vw\\\" class=\\\"w-full\\\" title=\\\"YouTube video player\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; \\\" allowfullscreen></iframe>\"]}]");

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/index.vue?vue&type=template&id=7c14d8aa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"project_grid content-part\">","</div>",[_vm._ssrNode(((_vm.lang === 'fr')?("<h2>Projets</h2>"):("<h2>Projects</h2>"))+" "),_vm._l((_vm.projects),function(project,index){return _vm._ssrNode("<h2>","</h2>",[_c('nuxt-link',{attrs:{"to":("/projects/" + (project.objectID))}},[_vm._v(_vm._s(project[_vm.lang].title))])],1)})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/projects/index.vue?vue&type=template&id=7c14d8aa&

// EXTERNAL MODULE: ./data/projets.json
var projets = __webpack_require__(34);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var projectsvue_type_script_lang_js_ = ({
  data() {
    return {
      projects: projets.reverse()
    };
  },

  computed: {
    lang() {
      return this.$store.state.lang;
    }

  }
});
// CONCATENATED MODULE: ./pages/projects/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_projectsvue_type_script_lang_js_ = (projectsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/projects/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_projectsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0c251762"
  
)

/* harmony default export */ var projects = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map