(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./article/article.module": [
		"./src/app/article/article.module.ts",
		"article-article-module"
	],
	"./editor/editor.module": [
		"./src/app/editor/editor.module.ts",
		"editor-editor-module"
	],
	"./profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"profile-profile-module"
	],
	"./settings/settings.module": [
		"./src/app/settings/settings.module.ts",
		"settings-settings-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    },
    {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
    },
    {
        path: 'editor',
        loadChildren: './editor/editor.module#EditorModule'
    },
    {
        path: 'article',
        loadChildren: './article/article.module#ArticleModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                    // preload all modules; optionally we could
                    // implement a custom preloading strategy for just some
                    // of the modules (PRs welcome 😉)
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-layout-header *ngIf=\"showHead\"></app-layout-header>\n\n<router-outlet></router-outlet>\n\n<app-layout-footer *ngIf=\"showFoot\"></app-layout-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "./src/app/core/index.ts");
/* harmony import */ var _opentok_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opentok.service */ "./src/app/opentok.service.ts");
/* harmony import */ var _core_services_hashURl_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/services/hashURl.service */ "./src/app/core/services/hashURl.service.ts");






var AppComponent = /** @class */ (function () {
    function AppComponent(ref, opentokService, userService, router, hashUrl) {
        var _this = this;
        this.ref = ref;
        this.opentokService = opentokService;
        this.userService = userService;
        this.router = router;
        this.hashUrl = hashUrl;
        this.streams = [];
        this.showHead = false;
        this.showFoot = false;
        this.changeDetectorRef = ref;
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (event["url"] == "/login") {
                    _this.showHead = false;
                    _this.showFoot = false;
                }
                else {
                    _this.showHead = true;
                    _this.showFoot = true;
                }
                if (event["url"] == "/editor#" + _this.hashUrl.hash) {
                    _this.showHead = true;
                    _this.showFoot = false;
                }
                else {
                    _this.showHead = true;
                    _this.showFoot = true;
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.opentokService
            .initSession()
            .then(function (session) {
            _this.session = session;
            _this.session.on("streamCreated", function (event) {
                _this.streams.push(event.stream);
                _this.changeDetectorRef.detectChanges();
            });
            _this.session.on("streamDestroyed", function (event) {
                var idx = _this.streams.indexOf(event.stream);
                if (idx > -1) {
                    _this.streams.splice(idx, 1);
                    _this.changeDetectorRef.detectChanges();
                }
            });
        })
            .then(function () { return _this.opentokService.connect(); })
            .catch(function (err) {
            console.error(err);
        });
        this.userService.populate();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _opentok_service__WEBPACK_IMPORTED_MODULE_4__["OpentokService"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_hashURl_service__WEBPACK_IMPORTED_MODULE_5__["HashURlService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/auth/auth.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _opentok_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./opentok.service */ "./src/app/opentok.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/services/auth.service */ "./src/app/core/services/auth.service.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_5__["HomeModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_4__["AuthModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase, "spadesGame"),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_12__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_13__["AngularFireAuthModule"],
            ],
            providers: [_opentok_service__WEBPACK_IMPORTED_MODULE_9__["OpentokService"], _core_services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./no-auth-guard.service */ "./src/app/auth/no-auth-guard.service.ts");





var routes = [
    {
        path: 'login',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["NoAuthGuard"]]
    },
    {
        path: 'register',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        canActivate: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["NoAuthGuard"]]
    }
];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jss2\">\n  <div class=\"sign-in__modal\">\n    <p class=\"sign-in__title\">Sign in with:</p>\n    <a class=\"sign-in__social-button\" (click) = \"signinWithGoogle()\">\n      <img class=\"social-button__icon\" width=\"20px\" style=\"margin-bottom:3px; margin-right:5px\" alt=\"Google sign-in\"\n        src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png\" />\n      Google\n    </a>\n    <br />\n    <a class=\"sign-in__social-button\" (click) = \"signWithFacebook()\">\n      <svg aria-hidden=\"true\" class=\"social-button__icon\" width=\"18\" height=\"18\" viewBox=\"0 0 18 18\">\n        <path\n          d=\"M3 1a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2V3a2 2 0 00-2-2H3zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5z\"\n          fill=\"white\" stroke=\"black\" stroke-width=\"0.1\"></path>\n      </svg>\n      Facebook\n    </a>\n    <p class=\"sign-in__or\">Or</p>\n    <p class=\"signup-status\" style=\"visibility:hidden\"></p>\n    <form class=\"signup sign-in__form\" action=\"/api/coh/addprofile\" method=\"post\" (ngSubmit) = \"signinWithAnonymously()\">\n      <input class=\"sign-in__input\" type=\"text\" placeholder=\"Username\" #username>\n      <hr />\n      <input class=\"sign-in__button\" type=\"submit\" value=\"Create UserName\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign-in__modal {\n  background: url('preview-403821-nv1XHwHEgu0nD3WZ-large.jfif');\n  color: #FFFFFF;\n  padding-top: 190px;\n  text-align: center;\n  box-sizing: border-box;\n  font-family: sans-serif;\n  line-height: 1.5em;\n  min-height: 800px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0; }\n  .sign-in__modal * {\n    box-sizing: inherit; }\n  .sign-in__close {\n  position: absolute;\n  display: block;\n  top: 10px;\n  right: 10px;\n  height: 20px;\n  width: 20px;\n  cursor: pointer; }\n  .sign-in__close:before, .sign-in__close:after {\n    content: '';\n    height: 100%;\n    width: 100%;\n    display: block;\n    border: none;\n    border-left: 2px solid white;\n    transform-origin: 75% 50%; }\n  .sign-in__close:before {\n    transform: rotate(-45deg); }\n  .sign-in__close:after {\n    transform: rotate(45deg); }\n  .sign-in__title {\n  margin-bottom: 20px; }\n  .sign-in__or {\n  margin-top: 26px; }\n  .sign-in__social-button {\n  color: #FFFFFF;\n  height: 60px;\n  display: inline-block;\n  text-decoration: none;\n  border: 1px solid #FFFFFF;\n  line-height: 60px;\n  width: 100%;\n  max-width: 445px;\n  margin-bottom: 14px;\n  position: relative;\n  cursor: pointer; }\n  .social-button__icon {\n  height: 1.5em;\n  width: 1.5em;\n  position: absolute;\n  left: 20px;\n  top: 15px; }\n  .sign-in__form {\n  width: 100%;\n  margin: 0 auto;\n  max-width: 445px; }\n  .sign-in__form ::-webkit-input-placeholder {\n    color: #FFFFFF; }\n  .sign-in__form :-moz-placeholder {\n    color: #FFFFFF; }\n  .sign-in__form ::-moz-placeholder {\n    color: #FFFFFF; }\n  .sign-in__form :-ms-input-placeholder {\n    color: #FFFFFF; }\n  .sign-in__form ::-ms-input-placeholder {\n    color: #FFFFFF; }\n  .sign-in__form :placeholder-shown {\n    color: #FFFFFF; }\n  .sign-in__input {\n  font-size: 1em;\n  background: none;\n  border: none;\n  color: #FFFFFF;\n  padding: 20px;\n  width: 100%;\n  outline: none;\n  border-bottom: 1px solid #FFFFFF; }\n  .sign-in__input:focus {\n    background: rgba(255, 255, 255, 0.2); }\n  .sign-in__show-password {\n  width: 100%;\n  max-width: 445px;\n  margin: 40px auto;\n  text-align: right; }\n  .sign-in__button {\n  width: 100%;\n  max-width: 445px;\n  background-color: #88cc854f;\n  border: none;\n  color: url('preview-403821-nv1XHwHEgu0nD3WZ-large.jfif');\n  font-weight: bold;\n  height: 60px;\n  line-height: 60px;\n  display: block;\n  font-size: 1em; }\n  .sign-in__button:active {\n    background: url('preview-403821-nv1XHwHEgu0nD3WZ-large.jfif');\n    color: #FFFFFF;\n    outline: none;\n    border: 1px solid #FFFFFF; }\n  .sign-in__link {\n  color: #FFFFFF;\n  text-decoration: underline; }\n  .sign-in__forgot-password {\n  width: 100%;\n  max-width: 445px;\n  text-align: right;\n  margin: 40px auto; }\n  .show-password__checkbox + label {\n  position: relative;\n  padding-right: 25px;\n  cursor: pointer; }\n  .show-password__checkbox + label:after {\n    content: '';\n    border: 1px solid white;\n    display: inline-block;\n    height: 1em;\n    width: 1em;\n    position: absolute;\n    right: 0;\n    top: 0; }\n  .show-password__checkbox:checked + label:before {\n  content: '';\n  height: .7em;\n  width: .25em;\n  display: block;\n  border: solid white;\n  border-width: 0 2px 2px 0;\n  position: absolute;\n  right: .4em;\n  top: .05em;\n  transform: rotate(45deg); }\n  .show-password__checkbox {\n  display: none; }\n  .jss2 {\n  height: 100vh;\n  display: flex;\n  overflow: hidden;\n  position: inherit;\n  flex-direction: column; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9GOlxcUHJvZ3JhbUxpc3RcXDExc3BhZGUtZ2FtZTExXFxzcGFkZSBnYW1lL3NyY1xcYXBwXFxhdXRoXFxhdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UsNkRBTjRGO0VBTzVGLGNBTjJCO0VBTzNCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbkIsaUJBQWlCO0VBQ2hCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRLEVBQUE7RUFiVjtJQWVJLG1CQUFtQixFQUFBO0VBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZSxFQUFBO0VBUGpCO0lBU0ksV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsY0FBYztJQUNkLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIseUJBQXlCLEVBQUE7RUFmN0I7SUFrQkkseUJBQXlCLEVBQUE7RUFsQjdCO0lBcUJJLHdCQUF3QixFQUFBO0VBRzVCO0VBQ0UsbUJBQW1CLEVBQUE7RUFFckI7RUFDRSxnQkFBZ0IsRUFBQTtFQUVsQjtFQUNFLGNBckQyQjtFQXNEM0IsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBekQyQjtFQTBEM0IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkExRG9CO0VBMkRwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTtFQUVqQjtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTLEVBQUE7RUFFWDtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBekVvQixFQUFBO0VBc0V0QjtJQUtJLGNBN0V5QixFQUFBO0VBd0U3QjtJQVNJLGNBakZ5QixFQUFBO0VBd0U3QjtJQWFJLGNBckZ5QixFQUFBO0VBd0U3QjtJQWlCSSxjQXpGeUIsRUFBQTtFQXdFN0I7SUFxQkksY0E3RnlCLEVBQUE7RUF3RTdCO0lBeUJJLGNBakd5QixFQUFBO0VBb0c3QjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBeEcyQjtFQXlHM0IsYUFBYTtFQUNiLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0NBNUcyQixFQUFBO0VBb0c3QjtJQVVJLG9DQUFpQyxFQUFBO0VBR3JDO0VBQ0UsV0FBVztFQUNYLGdCQWpIb0I7RUFrSHBCLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtFQUVuQjtFQUNFLFdBQVc7RUFDWCxnQkF2SG9CO0VBd0hwQiwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLHdEQTdINEY7RUE4SDVGLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxjQUFjLEVBQUE7RUFWaEI7SUFZSSw2REFwSTBGO0lBcUkxRixjQXBJeUI7SUFxSXpCLGFBQWE7SUFDYix5QkF0SXlCLEVBQUE7RUF5STdCO0VBQ0UsY0ExSTJCO0VBMkkzQiwwQkFBMEIsRUFBQTtFQUU1QjtFQUNFLFdBQVc7RUFDWCxnQkE3SW9CO0VBOElwQixpQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7RUFFbkI7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTtFQUhqQjtJQUtJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNLEVBQUE7RUFHVjtFQUVJLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHdCQUF3QixFQUFBO0VBRzVCO0VBQ0UsYUFBYSxFQUFBO0VBR2Y7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JfX3NpZ24taW4tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9wcmV2aWV3LTQwMzgyMS1udjFYSHdIRWd1MG5EM1daLWxhcmdlLmpmaWYpO1xyXG4kY29sb3JfX3NpZ24taW4tdGV4dDogI0ZGRkZGRjtcclxuXHJcbiR3aWR0aF9fc2lnbi1pbjogNDQ1cHg7XHJcblxyXG4uc2lnbi1pbl9fbW9kYWx7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yX19zaWduLWluLWJhY2tncm91bmQ7XHJcbiAgY29sb3I6ICRjb2xvcl9fc2lnbi1pbi10ZXh0O1xyXG4gIHBhZGRpbmctdG9wOiAxOTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcblx0bWluLWhlaWdodDogODAwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICAqe1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuLnNpZ24taW5fX2Nsb3Nle1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0b3A6IDEwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAmOmJlZm9yZSwgJjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA3NSUgNTAlO1xyXG4gIH1cclxuICAmOmJlZm9yZXtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgfVxyXG4gICY6YWZ0ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG59XHJcbi5zaWduLWluX190aXRsZXtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5zaWduLWluX19vcntcclxuICBtYXJnaW4tdG9wOiAyNnB4O1xyXG59XHJcbi5zaWduLWluX19zb2NpYWwtYnV0dG9ue1xyXG4gIGNvbG9yOiAkY29sb3JfX3NpZ24taW4tdGV4dDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfX3NpZ24taW4tdGV4dDtcclxuICBsaW5lLWhlaWdodDogNjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6ICR3aWR0aF9fc2lnbi1pbjtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnNvY2lhbC1idXR0b25fX2ljb257XHJcbiAgaGVpZ2h0OiAxLjVlbTtcclxuICB3aWR0aDogMS41ZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgdG9wOiAxNXB4O1xyXG59XHJcbi5zaWduLWluX19mb3Jte1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogJHdpZHRoX19zaWduLWluO1xyXG4gIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJGNvbG9yX19zaWduLWluLXRleHQ7XHJcbiAgfVxyXG5cclxuICA6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJGNvbG9yX19zaWduLWluLXRleHQ7XHJcbiAgfVxyXG5cclxuICA6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICRjb2xvcl9fc2lnbi1pbi10ZXh0O1xyXG4gIH1cclxuXHJcbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJGNvbG9yX19zaWduLWluLXRleHQ7XHJcbiAgfVxyXG5cclxuICA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogJGNvbG9yX19zaWduLWluLXRleHQ7XHJcbiAgfVxyXG5cclxuICA6cGxhY2Vob2xkZXItc2hvd24ge1xyXG4gICAgY29sb3I6ICRjb2xvcl9fc2lnbi1pbi10ZXh0O1xyXG4gIH1cclxufVxyXG4uc2lnbi1pbl9faW5wdXR7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6ICRjb2xvcl9fc2lnbi1pbi10ZXh0O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yX19zaWduLWluLXRleHQ7XHJcbiAgJjpmb2N1c3tcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsIC4yKTtcclxuICB9XHJcbn1cclxuLnNpZ24taW5fX3Nob3ctcGFzc3dvcmR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAkd2lkdGhfX3NpZ24taW47XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnNpZ24taW5fX2J1dHRvbntcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6ICR3aWR0aF9fc2lnbi1pbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODhjYzg1NGY7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGNvbG9yOiAkY29sb3JfX3NpZ24taW4tYmFja2dyb3VuZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgJjphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3JfX3NpZ24taW4tYmFja2dyb3VuZDtcclxuICAgIGNvbG9yOiAkY29sb3JfX3NpZ24taW4tdGV4dDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JfX3NpZ24taW4tdGV4dDtcclxuICB9XHJcbn1cclxuLnNpZ24taW5fX2xpbmt7XHJcbiAgY29sb3I6ICRjb2xvcl9fc2lnbi1pbi10ZXh0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbi5zaWduLWluX19mb3Jnb3QtcGFzc3dvcmR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAkd2lkdGhfX3NpZ24taW47XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbn1cclxuLnNob3ctcGFzc3dvcmRfX2NoZWNrYm94ICsgbGFiZWx7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICY6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG59XHJcbi5zaG93LXBhc3N3b3JkX19jaGVja2JveDpjaGVja2VkICsgbGFiZWx7XHJcbiAgJjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGhlaWdodDogLjdlbTtcclxuICAgIHdpZHRoOiAuMjVlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiBzb2xpZCB3aGl0ZTtcclxuICAgIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLjRlbTtcclxuICAgIHRvcDogLjA1ZW07XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG59XHJcbi5zaG93LXBhc3N3b3JkX19jaGVja2JveHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uanNzMntcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogaW5oZXJpdDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__);






var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, authservice, userService, _fireauth) {
        this.router = router;
        this.authservice = authservice;
        this.userService = userService;
        this._fireauth = _fireauth;
    }
    AuthComponent.prototype.ngOnInit = function () { };
    AuthComponent.prototype.signinWithGoogle = function () {
        var _this = this;
        this.authservice.signinWithGoogle()
            .then(function (res) {
            localStorage.setItem("username", _this._fireauth.auth.currentUser.displayName);
            console.log(_this._fireauth.auth.currentUser, "this._fireauth.auth.currentUser");
            _this.signinwithcunnitAPi();
        })
            .catch(function (err) {
            console.log("error : ", err);
        });
    };
    AuthComponent.prototype.signWithFacebook = function () {
        var _this = this;
        this.authservice.signinWithFacebook()
            .then(function (res) {
            _this.signinwithcunnitAPi();
        })
            .catch(function (err) {
            console.log("error : ", err);
        });
    };
    AuthComponent.prototype.signinWithAnonymously = function () {
        var _this = this;
        var username = this.username.nativeElement.value;
        if (username == '')
            return;
        localStorage.setItem("username", username);
        this.authservice.signinWithAnonymously()
            .then(function () {
            _this.signinwithcunnitAPi();
        });
    };
    AuthComponent.prototype.signinwithcunnitAPi = function () {
        var _this = this;
        var credentials = { email: "evelyncunni56@gmail.com", password: "psj00114" };
        this.userService
            .attemptAuth('login', credentials)
            .subscribe(function (data) { return _this.router.navigateByUrl('/'); }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('username'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AuthComponent.prototype, "username", void 0);
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-auth-page",
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _no_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./no-auth-guard.service */ "./src/app/auth/no-auth-guard.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");






var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]],
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]],
            providers: [_no_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["NoAuthGuard"]],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/no-auth-guard.service.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/no-auth-guard.service.ts ***!
  \***********************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var NoAuthGuard = /** @class */ (function () {
    function NoAuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    NoAuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (isAuth) { return !isAuth; }));
    };
    NoAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], NoAuthGuard);
    return NoAuthGuard;
}());



/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    // Set this to the base URL of your sample server, such as 'https://your-app-name.herokuapp.com'.
    // Do not include the trailing slash. See the README for more information:
    SAMPLE_SERVER_BASE_URL: "http://localhost:3000",
    // OR, if you have not set up a web server that runs the learning-opentok-php code,
    // set these values to OpenTok API key, a valid session ID, and a token for the session.
    // For test purposes, you can obtain these from https://tokbox.com/account.
    API_KEY: "46825214",
    SESSION_ID: "2_MX40NjgyNTIxNH5-MTU5NTIzNjQxNzMwN354anBtZ1dnQjZMdzdLRGxFQ2d6L0w5TGV-UH4",
    TOKEN: "T1==cGFydG5lcl9pZD00NjgyNTIxNCZzaWc9ZDlhZGM5ODA0MTliOTI0ZjhiNzg1ZTlhYWQzOTI5NzRmZTYzMmM0MDpzZXNzaW9uX2lkPTJfTVg0ME5qZ3lOVEl4Tkg1LU1UVTVOVEl6TmpReE56TXdOMzU0YW5CdFoxZG5RalpNZHpkTFJHeEZRMmQ2TDB3NVRHVi1VSDQmY3JlYXRlX3RpbWU9MTU5NTIzNjM3NSZub25jZT0wLjI3ODcwOTg0ODg4NzQxNzgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTU5NTMyMjc3NSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ",
});


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/http.token.interceptor */ "./src/app/core/interceptors/http.token.interceptor.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");






var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors_http_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["HttpTokenInterceptor"], multi: true },
                _services__WEBPACK_IMPORTED_MODULE_5__["ApiService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["ArticlesService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"],
                _services__WEBPACK_IMPORTED_MODULE_5__["CommentsService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["JwtService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["ProfilesService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["TagsService"],
                _services__WEBPACK_IMPORTED_MODULE_5__["UserService"]
            ],
            declarations: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: CoreModule, ApiService, ArticlesService, AuthGuard, CommentsService, JwtService, ProfilesService, TagsService, UserService, HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "./src/app/core/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ApiService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["CommentsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["JwtService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["ProfilesService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["TagsService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _services__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });

/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interceptors */ "./src/app/core/interceptors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return _interceptors__WEBPACK_IMPORTED_MODULE_2__["HttpTokenInterceptor"]; });






/***/ }),

/***/ "./src/app/core/interceptors/http.token.interceptor.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/interceptors/http.token.interceptor.ts ***!
  \*************************************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return HttpTokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/core/services/index.ts");



var HttpTokenInterceptor = /** @class */ (function () {
    function HttpTokenInterceptor(jwtService) {
        this.jwtService = jwtService;
    }
    HttpTokenInterceptor.prototype.intercept = function (req, next) {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        var token = this.jwtService.getToken();
        if (token) {
            headersConfig['Authorization'] = "Token " + token;
        }
        var request = req.clone({ setHeaders: headersConfig });
        return next.handle(request);
    };
    HttpTokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["JwtService"]])
    ], HttpTokenInterceptor);
    return HttpTokenInterceptor;
}());



/***/ }),

/***/ "./src/app/core/interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/*! exports provided: HttpTokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http.token.interceptor */ "./src/app/core/interceptors/http.token.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpTokenInterceptor", function() { return _http_token_interceptor__WEBPACK_IMPORTED_MODULE_0__["HttpTokenInterceptor"]; });




/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var ApiService = /** @class */ (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.formatErrors = function (error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error.error);
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"](); }
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, { params: params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path, JSON.stringify(body)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.formatErrors));
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].api_url + path).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.formatErrors));
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/services/articles.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/articles.service.ts ***!
  \***************************************************/
/*! exports provided: ArticlesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return ArticlesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ArticlesService = /** @class */ (function () {
    function ArticlesService(apiService) {
        this.apiService = apiService;
    }
    ArticlesService.prototype.query = function (config) {
        // Convert any filters over to Angular's URLSearchParams
        var params = {};
        Object.keys(config.filters)
            .forEach(function (key) {
            params[key] = config.filters[key];
        });
        return this.apiService
            .get('/articles' + ((config.type === 'feed') ? '/feed' : ''), new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: params }));
    };
    ArticlesService.prototype.get = function (slug) {
        return this.apiService.get('/articles/' + slug)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.article; }));
    };
    ArticlesService.prototype.destroy = function (slug) {
        return this.apiService.delete('/articles/' + slug);
    };
    ArticlesService.prototype.save = function (article) {
        // If we're updating an existing article
        if (article.slug) {
            return this.apiService.put('/articles/' + article.slug, { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.article; }));
            // Otherwise, create a new article
        }
        else {
            return this.apiService.post('/articles/', { article: article })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data.article; }));
        }
    };
    ArticlesService.prototype.favorite = function (slug) {
        return this.apiService.post('/articles/' + slug + '/favorite');
    };
    ArticlesService.prototype.unfavorite = function (slug) {
        return this.apiService.delete('/articles/' + slug + '/favorite');
    };
    ArticlesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], ArticlesService);
    return ArticlesService;
}());



/***/ }),

/***/ "./src/app/core/services/auth-guard.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/auth-guard.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);





var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router) {
        var _this = this;
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.userDetail = null;
        this.user = _firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetail = user;
            }
            else {
                _this.userDetail = null;
            }
        });
    }
    //signin with Google clinet id
    AuthService.prototype.signinWithGoogle = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider());
    };
    //signin with Facebook app id and app sercret
    AuthService.prototype.signinWithFacebook = function () {
        return this._firebaseAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider());
    };
    //sign out in firebase
    AuthService.prototype.signOut = function () {
        this._firebaseAuth.auth.signOut();
        this.router.navigateByUrl('/');
        localStorage.clear();
    };
    Object.defineProperty(AuthService.prototype, "isUserAnonymousLoggedIn", {
        // signin with anonymously in firebase.
        get: function () {
            return this.userDetail !== null ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        get: function () {
            return this.userDetail;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signinWithAnonymously = function () {
        var _this = this;
        return this._firebaseAuth.auth.signInAnonymously()
            .then(function (user) {
            // this.userDetail = user
            console.log("this._firebaseAuth.authState", _this._firebaseAuth.authState);
        })
            .catch(function (err) {
            console.log("error : ", err);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/comments.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/comments.service.ts ***!
  \***************************************************/
/*! exports provided: CommentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return CommentsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CommentsService = /** @class */ (function () {
    function CommentsService(apiService) {
        this.apiService = apiService;
    }
    CommentsService.prototype.add = function (slug, payload) {
        return this.apiService
            .post("/articles/" + slug + "/comments", { comment: { body: payload } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.comment; }));
    };
    CommentsService.prototype.getAll = function (slug) {
        return this.apiService.get("/articles/" + slug + "/comments")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.comments; }));
    };
    CommentsService.prototype.destroy = function (commentId, articleSlug) {
        return this.apiService
            .delete("/articles/" + articleSlug + "/comments/" + commentId);
    };
    CommentsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], CommentsService);
    return CommentsService;
}());



/***/ }),

/***/ "./src/app/core/services/document.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/document.service.ts ***!
  \***************************************************/
/*! exports provided: DocumentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentService", function() { return DocumentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");



var DocumentService = /** @class */ (function () {
    function DocumentService(socket) {
        this.socket = socket;
        this.currentDocument = this.socket.fromEvent("document");
        this.documents = this.socket.fromEvent("documents");
    }
    DocumentService.prototype.getDocument = function (id) {
        this.socket.emit("getDoc", id);
    };
    DocumentService.prototype.newDocument = function () {
        this.socket.emit("addDoc", { id: this.docId(), doc: "" });
    };
    DocumentService.prototype.editDocument = function (document) {
        this.socket.emit("editDoc", document);
    };
    DocumentService.prototype.docId = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], DocumentService);
    return DocumentService;
}());



/***/ }),

/***/ "./src/app/core/services/hashURl.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/hashURl.service.ts ***!
  \**************************************************/
/*! exports provided: HashURlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HashURlService", function() { return HashURlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HashURlService = /** @class */ (function () {
    function HashURlService() {
        this.hash = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    }
    HashURlService.prototype.urlHash = function () {
        if (!location.hash) {
            location.hash = this.hash;
        }
    };
    HashURlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HashURlService);
    return HashURlService;
}());



/***/ }),

/***/ "./src/app/core/services/index.ts":
/*!****************************************!*\
  !*** ./src/app/core/services/index.ts ***!
  \****************************************/
/*! exports provided: ApiService, ArticlesService, AuthGuard, CommentsService, JwtService, ProfilesService, TagsService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]; });

/* harmony import */ var _articles_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles.service */ "./src/app/core/services/articles.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlesService", function() { return _articles_service__WEBPACK_IMPORTED_MODULE_1__["ArticlesService"]; });

/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/core/services/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard_service__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });

/* harmony import */ var _comments_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments.service */ "./src/app/core/services/comments.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommentsService", function() { return _comments_service__WEBPACK_IMPORTED_MODULE_3__["CommentsService"]; });

/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return _jwt_service__WEBPACK_IMPORTED_MODULE_4__["JwtService"]; });

/* harmony import */ var _profiles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profiles.service */ "./src/app/core/services/profiles.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return _profiles_service__WEBPACK_IMPORTED_MODULE_5__["ProfilesService"]; });

/* harmony import */ var _tags_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tags.service */ "./src/app/core/services/tags.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return _tags_service__WEBPACK_IMPORTED_MODULE_6__["TagsService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/core/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]; });











/***/ }),

/***/ "./src/app/core/services/jwt.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/jwt.service.ts ***!
  \**********************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JwtService = /** @class */ (function () {
    function JwtService() {
    }
    JwtService.prototype.getToken = function () {
        return window.localStorage['jwtToken'];
    };
    JwtService.prototype.saveToken = function (token) {
        window.localStorage['jwtToken'] = token;
    };
    JwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('jwtToken');
    };
    JwtService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], JwtService);
    return JwtService;
}());



/***/ }),

/***/ "./src/app/core/services/multimail.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/multimail.service.ts ***!
  \****************************************************/
/*! exports provided: MultimailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimailService", function() { return MultimailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MultimailService = /** @class */ (function () {
    function MultimailService(router) {
        this.router = router;
        this.handler = null;
    }
    MultimailService.prototype.multiemail = function () {
    };
    MultimailService.prototype.localStripe = function () {
        var _this = this;
        if (!window.document.getElementById("stripe-script")) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            s.onload = function () {
                _this.handler = window.StripeCheckout.configure({
                    key: "pk_test_aeUUjYYcx4XNfKVW60pmHTtI",
                    locale: "auto",
                    token: function (token) {
                        console.log(token);
                        alert("success payment");
                    },
                });
            };
            window.document.body.appendChild(s);
        }
    };
    MultimailService.prototype.payment_close = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#payment").css("display", "none");
    };
    MultimailService.prototype.pay = function (amount) {
        var handler = window.StripeCheckout.configure({
            key: "pk_live_65sPTfXZWDCX3nI43Oht8qaF00zD1M5gJN",
            locale: "auto",
            token: function (token) {
                console.log("token", token);
            },
        });
        handler.open({
            name: "Spade Game",
            description: "After you send amount by the Amount you selected, you can start funny game and you will earn more money than that.thanks",
            amount: amount * 100,
        });
    };
    MultimailService.prototype.go_to_page = function () {
        var teamatemail = jquery__WEBPACK_IMPORTED_MODULE_2__("#teamate").val();
        var opponentmail = jquery__WEBPACK_IMPORTED_MODULE_2__("#opponent").val();
        var opponentTeamate = jquery__WEBPACK_IMPORTED_MODULE_2__("#opponentTeamate").val();
        var teamateinvite = jquery__WEBPACK_IMPORTED_MODULE_2__("#teaminvite").val();
        if (teamatemail == "" && opponentTeamate == "" && opponentmail == "" && teamateinvite == "") {
            return;
        }
        else {
            localStorage.setItem("teammate", teamatemail);
            localStorage.setItem("teaminvite", teamateinvite);
            localStorage.setItem("opponentmail", opponentTeamate);
            localStorage.setItem("opponentTeammate", opponentTeamate);
            var selecetd = jquery__WEBPACK_IMPORTED_MODULE_2__(".optionval option:selected").val();
            localStorage.setItem("min", selecetd);
            if (selecetd == 1200) {
                this.router.navigateByUrl("/editor");
            }
            else {
                document.getElementById("myModal").style.display = "none";
                var amount = selecetd;
                this.pay(amount);
                this.router.navigateByUrl('/editor');
            }
        }
    };
    MultimailService.prototype.create_game_info = function () {
        document.getElementById("myModal").style.display = "block";
    };
    MultimailService.prototype.config_setting = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#modal-container").removeAttr("class").addClass("one");
    };
    MultimailService.prototype.cancel = function () {
        document.getElementById("myModal").style.display = "none";
    };
    MultimailService.prototype.init = function () {
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__("#loadingView").css("display", "none");
        }, 3000);
    };
    MultimailService.prototype.localTime = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__("#datalocaltimes").val(new Date().toISOString().substr(0, 19));
        var selecetds = jquery__WEBPACK_IMPORTED_MODULE_2__("#select_timezone option:selected").val();
        var timezone = -((new Date()).getTimezoneOffset() / 60);
        var realtimezone = jquery__WEBPACK_IMPORTED_MODULE_2__('#select_timezone').val(timezone);
        jquery__WEBPACK_IMPORTED_MODULE_2__('#select_timezone').css('marginTop', '0px');
    };
    MultimailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MultimailService);
    return MultimailService;
}());



/***/ }),

/***/ "./src/app/core/services/profiles.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/profiles.service.ts ***!
  \***************************************************/
/*! exports provided: ProfilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesService", function() { return ProfilesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ProfilesService = /** @class */ (function () {
    function ProfilesService(apiService) {
        this.apiService = apiService;
    }
    ProfilesService.prototype.get = function (username) {
        return this.apiService.get('/profiles/' + username)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.profile; }));
    };
    ProfilesService.prototype.follow = function (username) {
        return this.apiService.post('/profiles/' + username + '/follow');
    };
    ProfilesService.prototype.unfollow = function (username) {
        return this.apiService.delete('/profiles/' + username + '/follow');
    };
    ProfilesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], ProfilesService);
    return ProfilesService;
}());



/***/ }),

/***/ "./src/app/core/services/sendmail.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/services/sendmail.service.ts ***!
  \***************************************************/
/*! exports provided: SendmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendmailService", function() { return SendmailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SendmailService = /** @class */ (function () {
    function SendmailService(http) {
        this.http = http;
        this.url = 'http://localhost:4000';
    }
    SendmailService.prototype.sendMail = function (teammatemail, teaminvite, opponentmail, opponentTeamate, shareurl) {
        var obj = {
            sendermail: localStorage.getItem("username"),
            teammate: teammatemail,
            invitation: teaminvite,
            opponentmail: opponentmail,
            opponentTeamate: opponentTeamate,
            shareUrl: shareurl
        };
        this.http.post(this.url + "/sendmail/send", obj)
            .subscribe(function (res) { console.log("Done"); });
    };
    SendmailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SendmailService);
    return SendmailService;
}());



/***/ }),

/***/ "./src/app/core/services/tags.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/tags.service.ts ***!
  \***********************************************/
/*! exports provided: TagsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsService", function() { return TagsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TagsService = /** @class */ (function () {
    function TagsService(apiService) {
        this.apiService = apiService;
    }
    TagsService.prototype.getAll = function () {
        return this.apiService.get('/tags')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data.tags; }));
    };
    TagsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], TagsService);
    return TagsService;
}());



/***/ }),

/***/ "./src/app/core/services/teamate.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/teamate.service.ts ***!
  \**************************************************/
/*! exports provided: TeamateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamateService", function() { return TeamateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var TeamateService = /** @class */ (function () {
    function TeamateService() {
    }
    TeamateService.prototype.focus = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".focus").slideDown("slow");
    };
    TeamateService.prototype.focusout = function () {
        jquery__WEBPACK_IMPORTED_MODULE_2__(".focus").slideUp();
    };
    TeamateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamateService);
    return TeamateService;
}());



/***/ }),

/***/ "./src/app/core/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var _jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jwt.service */ "./src/app/core/services/jwt.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var UserService = /** @class */ (function () {
    function UserService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])());
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({});
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.attemptAuth = function (type, credentials) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/users' + route, { user: credentials })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            _this.setAuth(data.user);
            return data;
        }));
    };
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.value;
    };
    // Update the user on the server (email, pass, etc)
    UserService.prototype.update = function (user) {
        var _this = this;
        return this.apiService
            .put('/user', { user: user })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        }));
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/home/home-auth-resolver.service.ts":
/*!****************************************************!*\
  !*** ./src/app/home/home-auth-resolver.service.ts ***!
  \****************************************************/
/*! exports provided: HomeAuthResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAuthResolver", function() { return HomeAuthResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var HomeAuthResolver = /** @class */ (function () {
    function HomeAuthResolver(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    HomeAuthResolver.prototype.resolve = function (route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    };
    HomeAuthResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], HomeAuthResolver);
    return HomeAuthResolver;
}());



/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-auth-resolver.service */ "./src/app/home/home-auth-resolver.service.ts");





var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        resolve: {
            isAuthenticated: _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_4__["HomeAuthResolver"]
        }
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jss1\">\n  <div [ngClass]=\"{'publishing': publishing}\" #publisherDiv></div>\n  <div class=\"jss2\" id=\"first-field\">\n    <div class=\"MuiContainer-root hero MuiContainer-maxWidthSm\">\n      <img src=\"../../assets/image/ace-of-spades-5188736_1280.png\" alt=\"POKER IN PLACE\" id=\"logo-image\">\n      <div>\n        <div class=\"wrapper\">\n          <h1>SPADES GAME</h1>\n        </div>\n        <h4 id=\"ui\"></h4>\n        <h6 class=\"MuiTypography-root MuiTypography-h6 MuiTypography-colorInherit\" style=\"margin:1rem 0px;color:white\">\n          Play spade while safely social distancing and catching up with your friends. Optimized for large screens or\n          tablets.\n        </h6>\n        <a href=\"\" routerLink=\"/login\" tabindex=\"0\" aria-disabled=\"false\" style=\"margin:1rem 0px\" id=\"pocker-start-btn\"\n          class=\"MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeLarge MuiButton-sizeLarge btn btn-primary\">\n          <span *appShowAuthed=\"false\" class=\"MuiButton-label glow-on-hover\">Get Started</span>\n          <span *appShowAuthed=\"true\" class=\"MuiButton-label glow-on-hover\" (click)=\"create_game_info()\">Create New Game</span>\n          <span class=\"MuiTouchRipple-root\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"jss2\">\n    <div class=\"row\">\n      <div class=\"jss21\"\n        style=\"background-color: #eeeeee; color: rgb(68, 68, 68); justify-content: center; align-items: center;\">\n        <div style=\"width: 100%;height:100%\">\n          <div style=\"width: 100%;height:100%;\">\n            <video class=\"video_control\" autoplay\n              src=\"https://codemyui.com/wp-content/uploads/2019/09/fitgoal_dribbble_final_cut_jt01-dribbble-1.mov\"></video>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"jss2\" id=\"spade-table\">\n    <div class=\"jss21\">\n      <div class=\"tableContainer\">\n        <div class=\"tableContainer\">\n          <div class=\"table\">\n            <div class=\"circle_cards\">\n              <div class=\"player1_card playcard\"></div>\n              <div class=\"player2_card playcard\">\n                <img src=\"../../assets/cards/10_of_spades.png\" alt=\"\" class=\"cover_card2\">\n              </div>\n              <div class=\"player3_card playcard\">\n                <img src=\"../../assets/cards/jack_of_spades.png\" alt=\"\" class=\"cover_card3\">\n              </div>\n              <div class=\"player4_card playcard\"></div>\n            </div>\n            <div class=\"player1\">\n              <div class=\"container\">\n                <div class=\"box\">\n                  <div class=\"row full-content\">\n                    <div class=\"col-md-6\">\n                      <div class=\"user-avatar-self\">\n                        <div [ngClass]=\"{'publishing': publishing}\" #publishersDiv></div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <h5 style=\"text-align: center;margin-top: 3vh;\">Nikola</h5>\n                      <p style=\"text-align: center;\">$30.24</p>\n                    </div>\n                  </div>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <div class=\"content\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"player2\">\n              <div class=\"container\">\n                <div class=\"box\">\n                  <div class=\"row full-content\">\n                    <div class=\"col-md-12\" style=\"height: 15vh;\">\n                      <div class=\"user-avatar\"></div>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <h5 style=\"text-align:center;margin-top: 3vh;\">Sylvia</h5>\n                      <p style=\"text-align: center;\">$ 12.40</p>\n                    </div>\n                  </div>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <div class=\"content\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"player3\">\n              <div class=\"container\">\n                <div class=\"box\">\n                  <div class=\"row full-content\">\n                    <div class=\"col-md-12\" style=\"height: 15vh;\">\n                      <div class=\"user-avatar2\"></div>\n                    </div>\n                    <div class=\"col-md-12\">\n                      <h5 style=\"text-align:center;margin-top: 3vh;\">Olivia</h5>\n                      <p style=\"text-align: center;\">$ 12.40</p>\n                    </div>\n                  </div>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <div class=\"content\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"player4\">\n              <div class=\"container\">\n                <div class=\"box\">\n                  <div class=\"row full-content\">\n                    <div class=\"col-md-6\">\n                      <div class=\"user-avatar1\"></div>\n                    </div>\n                    <div class=\"col-md-6\">\n                      <h5 style=\"text-align:center;margin-top: 3vh;\">Anna</h5>\n                      <p style=\"text-align: center;\">$30.24</p>\n                    </div>\n                  </div>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <div class=\"content\"></div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div id=\"myModal\" class=\"modal\">\n  <div class=\"boxs\">\n    <a class=\"closes\" (click) = \"cancel()\">&times;</a>\n    <h1>Create New Game</h1>\n    <hr />\n    <div id=\"cash\" class=\" tab_content\">\n      <hr />\n      <select name=\"\" class=\"optionval\" id=\"select_option\">\n        <option value=\"1200\">Up to 4 players, 20min(Free)</option>\n        <option value=\"3600\">Up to 4 players, 60min($3)</option>\n        <option value=\"7200\">Up to 4 players, 120min($5)</option>\n        <option value=\"10800\">Up to 4 players, 180min($8)</option>\n      </select>\n      <hr />\n      <h2>Email Invites</h2>\n      <hr />\n      <div class=\"flexlayout\">\n        <div style=\"width: 40%;display: flex;\"><h6>Teammate&nbsp;&nbsp;(player 3)</h6></div>\n        <div style=\"width: 40%;\"><input id=\"teamate\" class=\"flex_input\" type=\"email\" (focus) = \"focus()\" (focusout) = \"onefocusout()\" /></div>\n        <app-teamate></app-teamate>\n      </div>\n      <hr />\n      <div class=\"flexlayout\">\n        <div style=\"width: 40%;display: flex;\"><h6>Opponent&nbsp;&nbsp;(player 2)</h6></div>\n        <div style=\"width: 50%;\"><input id=\"opponent\" class=\"flex_input\" type=\"email\" (focus) = \"focusout()\" (focusout) = \"twofocusout()\" /></div>\n      </div>\n      <hr />\n      <div class=\"flexlayout\">\n        <div style=\"width: 40%;display: flex;\"><h6>Opponent Teammate&nbsp;&nbsp;(player 4)</h6></div>\n        <div style=\"width: 50%;\"><input id=\"opponentTeamate\" class=\"flex_input\" type=\"email\" (focus) = \"focusout()\" (focusout) = \"threefocusout()\" /></div>\n      </div>\n      <hr />\n      <!-- <p class=\"email_input\">Email invites (type email then hit enter). You can add more later...</p>\n      <input type=\"text\" id=\"essai\" placeholder=\"Email\" class=\"full\"> -->\n      <div id=\"buy_blindg\">\n        <p>Start Time (you can start sooner)</p>\n        <p>Time zone</p>\n      </div>\n      <div id=\"buy_blind\">\n        <input type=\"datetime-local\" id=\"datalocaltimes\" class=\"full\" defaultValue = \"new Date()\"/>\n        <select class=\"full selectedval\" id=\"select_timezone\" style=\"margin-top: 4px;\">\n          <option timeZoneId=\"1\" gmtAdjustment=\"GMT-12:00\" useDaylightTime=\"0\" value=\"-12\">(GMT-12:00) International\n            Date Line\n            West</option>\n          <option timeZoneId=\"2\" gmtAdjustment=\"GMT-11:00\" useDaylightTime=\"0\" value=\"-11\">(GMT-11:00) Midway Island,\n            Samoa\n          </option>\n          <option timeZoneId=\"3\" gmtAdjustment=\"GMT-10:00\" useDaylightTime=\"0\" value=\"-10\">(GMT-10:00) Hawaii</option>\n          <option timeZoneId=\"4\" gmtAdjustment=\"GMT-09:00\" useDaylightTime=\"1\" value=\"-9\">(GMT-09:00) Alaska</option>\n          <option timeZoneId=\"5\" gmtAdjustment=\"GMT-08:00\" useDaylightTime=\"1\" value=\"-8\">(GMT-08:00) Pacific Time (US &\n            Canada)\n          </option>\n          <option timeZoneId=\"6\" gmtAdjustment=\"GMT-08:00\" useDaylightTime=\"1\" value=\"-8\">(GMT-08:00) Tijuana, Baja\n            California\n          </option>\n          <option timeZoneId=\"7\" gmtAdjustment=\"GMT-07:00\" useDaylightTime=\"0\" value=\"-7\">(GMT-07:00) Arizona</option>\n          <option timeZoneId=\"8\" gmtAdjustment=\"GMT-07:00\" useDaylightTime=\"1\" value=\"-7\">(GMT-07:00) Chihuahua, La Paz,\n            Mazatlan</option>\n          <option timeZoneId=\"9\" gmtAdjustment=\"GMT-07:00\" useDaylightTime=\"1\" value=\"-7\">(GMT-07:00) Mountain Time (US\n            &\n            Canada)</option>\n          <option timeZoneId=\"10\" gmtAdjustment=\"GMT-06:00\" useDaylightTime=\"0\" value=\"-6\">(GMT-06:00) Central America\n          </option>\n          <option timeZoneId=\"11\" gmtAdjustment=\"GMT-06:00\" useDaylightTime=\"1\" value=\"-6\">(GMT-06:00) Central Time (US\n            &\n            Canada)</option>\n          <option timeZoneId=\"12\" gmtAdjustment=\"GMT-06:00\" useDaylightTime=\"1\" value=\"-6\">(GMT-06:00) Guadalajara,\n            Mexico City,\n            Monterrey</option>\n          <option timeZoneId=\"13\" gmtAdjustment=\"GMT-06:00\" useDaylightTime=\"0\" value=\"-6\">(GMT-06:00) Saskatchewan\n          </option>\n          <option timeZoneId=\"15\" gmtAdjustment=\"GMT-05:00\" useDaylightTime=\"1\" value=\"-5\">(GMT-05:00) Eastern Time (US\n            &\n            Canada)</option>\n          <option timeZoneId=\"17\" gmtAdjustment=\"GMT-04:00\" useDaylightTime=\"1\" value=\"-4\">(GMT-04:00) Atlantic Time\n            (Canada)\n          </option>\n          <option timeZoneId=\"18\" gmtAdjustment=\"GMT-04:00\" useDaylightTime=\"0\" value=\"-4\">(GMT-04:00) Caracas, La Paz\n          </option>\n          <option timeZoneId=\"19\" gmtAdjustment=\"GMT-04:00\" useDaylightTime=\"0\" value=\"-4\">(GMT-04:00) Manaus</option>\n          <option timeZoneId=\"20\" gmtAdjustment=\"GMT-04:00\" useDaylightTime=\"1\" value=\"-4\">(GMT-04:00) Santiago</option>\n          <option timeZoneId=\"21\" gmtAdjustment=\"GMT-03:30\" useDaylightTime=\"1\" value=\"-3.5\">(GMT-03:30) Newfoundland\n          </option>\n          <option timeZoneId=\"22\" gmtAdjustment=\"GMT-03:00\" useDaylightTime=\"1\" value=\"-3\">(GMT-03:00) Brasilia</option>\n          <option timeZoneId=\"23\" gmtAdjustment=\"GMT-03:00\" useDaylightTime=\"0\" value=\"-3\">(GMT-03:00) Buenos Aires,\n            Georgetown\n          </option>\n          <option timeZoneId=\"24\" gmtAdjustment=\"GMT-03:00\" useDaylightTime=\"1\" value=\"-3\">(GMT-03:00) Greenland\n          </option>\n          <option timeZoneId=\"25\" gmtAdjustment=\"GMT-03:00\" useDaylightTime=\"1\" value=\"-3\">(GMT-03:00) Montevideo\n          </option>\n          <option timeZoneId=\"26\" gmtAdjustment=\"GMT-02:00\" useDaylightTime=\"1\" value=\"-2\">(GMT-02:00) Mid-Atlantic\n          </option>\n          <option timeZoneId=\"27\" gmtAdjustment=\"GMT-01:00\" useDaylightTime=\"0\" value=\"-1\">(GMT-01:00) Cape Verde Is.\n          </option>\n          <option timeZoneId=\"28\" gmtAdjustment=\"GMT-01:00\" useDaylightTime=\"1\" value=\"-1\">(GMT-01:00) Azores</option>\n          <option timeZoneId=\"29\" gmtAdjustment=\"GMT+00:00\" useDaylightTime=\"0\" value=\"0\">(GMT+00:00) Casablanca,\n            Monrovia,\n            Reykjavik</option>\n          <option timeZoneId=\"30\" gmtAdjustment=\"GMT+00:00\" useDaylightTime=\"1\" value=\"0\">(GMT+00:00) Greenwich Mean\n            Time :\n            Dublin, Edinburgh, Lisbon, London</option>\n          <option timeZoneId=\"31\" gmtAdjustment=\"GMT+01:00\" useDaylightTime=\"1\" value=\"1\">(GMT+01:00) Amsterdam, Berlin,\n            Bern,\n            Rome, Stockholm, Vienna</option>\n          <option timeZoneId=\"32\" gmtAdjustment=\"GMT+01:00\" useDaylightTime=\"1\" value=\"1\">(GMT+01:00) Belgrade,\n            Bratislava,\n            Budapest, Ljubljana, Prague</option>\n          <option timeZoneId=\"33\" gmtAdjustment=\"GMT+01:00\" useDaylightTime=\"1\" value=\"1\">(GMT+01:00) Brussels,\n            Copenhagen,\n            Madrid, Paris</option>\n          <option timeZoneId=\"34\" gmtAdjustment=\"GMT+01:00\" useDaylightTime=\"1\" value=\"1\">(GMT+01:00) Sarajevo, Skopje,\n            Warsaw,\n            Zagreb</option>\n          <option timeZoneId=\"35\" gmtAdjustment=\"GMT+01:00\" useDaylightTime=\"1\" value=\"1\">(GMT+01:00) West Central\n            Africa\n          </option>\n          <option timeZoneId=\"36\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Amman</option>\n          <option timeZoneId=\"37\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Athens, Bucharest,\n            Istanbul</option>\n          <option timeZoneId=\"38\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Beirut</option>\n          <option timeZoneId=\"39\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Cairo</option>\n          <option timeZoneId=\"40\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"0\" value=\"2\">(GMT+02:00) Harare, Pretoria\n          </option>\n          <option timeZoneId=\"41\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Helsinki, Kyiv,\n            Riga,\n            Sofia, Tallinn, Vilnius</option>\n          <option timeZoneId=\"42\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Jerusalem</option>\n          <option timeZoneId=\"43\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Minsk</option>\n          <option timeZoneId=\"44\" gmtAdjustment=\"GMT+02:00\" useDaylightTime=\"1\" value=\"2\">(GMT+02:00) Windhoek</option>\n          <option timeZoneId=\"45\" gmtAdjustment=\"GMT+03:00\" useDaylightTime=\"0\" value=\"3\">(GMT+03:00) Kuwait, Riyadh,\n            Baghdad\n          </option>\n          <option timeZoneId=\"46\" gmtAdjustment=\"GMT+03:00\" useDaylightTime=\"1\" value=\"3\">(GMT+03:00) Moscow, St.\n            Petersburg,\n            Volgograd</option>\n          <option timeZoneId=\"47\" gmtAdjustment=\"GMT+03:00\" useDaylightTime=\"0\" value=\"3\">(GMT+03:00) Nairobi</option>\n          <option timeZoneId=\"48\" gmtAdjustment=\"GMT+03:00\" useDaylightTime=\"0\" value=\"3\">(GMT+03:00) Tbilisi</option>\n          <option timeZoneId=\"49\" gmtAdjustment=\"GMT+03:30\" useDaylightTime=\"1\" value=\"3.5\">(GMT+03:30) Tehran</option>\n          <option timeZoneId=\"50\" gmtAdjustment=\"GMT+04:00\" useDaylightTime=\"0\" value=\"4\">(GMT+04:00) Abu Dhabi, Muscat\n          </option>\n          <option timeZoneId=\"51\" gmtAdjustment=\"GMT+04:00\" useDaylightTime=\"1\" value=\"4\">(GMT+04:00) Baku</option>\n          <option timeZoneId=\"52\" gmtAdjustment=\"GMT+04:00\" useDaylightTime=\"1\" value=\"4\">(GMT+04:00) Yerevan</option>\n          <option timeZoneId=\"53\" gmtAdjustment=\"GMT+04:30\" useDaylightTime=\"0\" value=\"4.5\">(GMT+04:30) Kabul</option>\n          <option timeZoneId=\"54\" gmtAdjustment=\"GMT+05:00\" useDaylightTime=\"1\" value=\"5\">(GMT+05:00) Yekaterinburg\n          </option>\n          <option timeZoneId=\"55\" gmtAdjustment=\"GMT+05:00\" useDaylightTime=\"0\" value=\"5\">(GMT+05:00) Islamabad,\n            Karachi,\n            Tashkent</option>\n          <option timeZoneId=\"56\" gmtAdjustment=\"GMT+05:30\" useDaylightTime=\"0\" value=\"5.5\">(GMT+05:30) Sri\n            Jayawardenapura\n          </option>\n          <option timeZoneId=\"57\" gmtAdjustment=\"GMT+05:30\" useDaylightTime=\"0\" value=\"5.5\">(GMT+05:30) Chennai,\n            Kolkata,\n            Mumbai, New Delhi</option>\n          <option timeZoneId=\"58\" gmtAdjustment=\"GMT+05:45\" useDaylightTime=\"0\" value=\"5.75\">(GMT+05:45) Kathmandu\n          </option>\n          <option timeZoneId=\"59\" gmtAdjustment=\"GMT+06:00\" useDaylightTime=\"1\" value=\"6\">(GMT+06:00) Almaty,\n            Novosibirsk\n          </option>\n          <option timeZoneId=\"60\" gmtAdjustment=\"GMT+06:00\" useDaylightTime=\"0\" value=\"6\">(GMT+06:00) Astana, Dhaka\n          </option>\n          <option timeZoneId=\"61\" gmtAdjustment=\"GMT+06:30\" useDaylightTime=\"0\" value=\"6.5\">(GMT+06:30) Yangon (Rangoon)\n          </option>\n          <option timeZoneId=\"62\" gmtAdjustment=\"GMT+07:00\" useDaylightTime=\"0\" value=\"7\">(GMT+07:00) Bangkok, Hanoi,\n            Jakarta\n          </option>\n          <option timeZoneId=\"63\" gmtAdjustment=\"GMT+07:00\" useDaylightTime=\"1\" value=\"7\">(GMT+07:00) Krasnoyarsk\n          </option>\n          <option timeZoneId=\"64\" gmtAdjustment=\"GMT+08:00\" useDaylightTime=\"0\" value=\"8\">(GMT+08:00) Beijing,\n            Chongqing, Hong\n            Kong, Urumqi</option>\n          <option timeZoneId=\"65\" gmtAdjustment=\"GMT+08:00\" useDaylightTime=\"0\" value=\"8\">(GMT+08:00) Kuala Lumpur,\n            Singapore\n          </option>\n          <option timeZoneId=\"66\" gmtAdjustment=\"GMT+08:00\" useDaylightTime=\"0\" value=\"8\">(GMT+08:00) Irkutsk, Ulaan\n            Bataar\n          </option>\n          <option timeZoneId=\"67\" gmtAdjustment=\"GMT+08:00\" useDaylightTime=\"0\" value=\"8\">(GMT+08:00) Perth</option>\n          <option timeZoneId=\"68\" gmtAdjustment=\"GMT+08:00\" useDaylightTime=\"0\" value=\"8\">(GMT+08:00) Taipei</option>\n          <option timeZoneId=\"69\" gmtAdjustment=\"GMT+09:00\" useDaylightTime=\"0\" value=\"9\">(GMT+09:00) Osaka, Sapporo,\n            Tokyo\n          </option>\n          <option timeZoneId=\"70\" gmtAdjustment=\"GMT+09:00\" useDaylightTime=\"0\" value=\"9\">(GMT+09:00) Seoul</option>\n          <option timeZoneId=\"71\" gmtAdjustment=\"GMT+09:00\" useDaylightTime=\"1\" value=\"9\">(GMT+09:00) Yakutsk</option>\n          <option timeZoneId=\"72\" gmtAdjustment=\"GMT+09:30\" useDaylightTime=\"0\" value=\"9.5\">(GMT+09:30) Adelaide\n          </option>\n          <option timeZoneId=\"73\" gmtAdjustment=\"GMT+09:30\" useDaylightTime=\"0\" value=\"9.5\">(GMT+09:30) Darwin</option>\n          <option timeZoneId=\"74\" gmtAdjustment=\"GMT+10:00\" useDaylightTime=\"0\" value=\"10\">(GMT+10:00) Brisbane</option>\n          <option timeZoneId=\"75\" gmtAdjustment=\"GMT+10:00\" useDaylightTime=\"1\" value=\"10\">(GMT+10:00) Canberra,\n            Melbourne,\n            Sydney</option>\n          <option timeZoneId=\"76\" gmtAdjustment=\"GMT+10:00\" useDaylightTime=\"1\" value=\"10\">(GMT+10:00) Hobart</option>\n          <option timeZoneId=\"77\" gmtAdjustment=\"GMT+10:00\" useDaylightTime=\"0\" value=\"10\">(GMT+10:00) Guam, Port\n            Moresby\n          </option>\n          <option timeZoneId=\"78\" gmtAdjustment=\"GMT+10:00\" useDaylightTime=\"1\" value=\"10\">(GMT+10:00) Vladivostok\n          </option>\n          <option timeZoneId=\"79\" gmtAdjustment=\"GMT+11:00\" useDaylightTime=\"1\" value=\"11\">(GMT+11:00) Magadan, Solomon\n            Is., New\n            Caledonia</option>\n          <option timeZoneId=\"80\" gmtAdjustment=\"GMT+12:00\" useDaylightTime=\"1\" value=\"12\">(GMT+12:00) Auckland,\n            Wellington\n          </option>\n          <option timeZoneId=\"81\" gmtAdjustment=\"GMT+12:00\" useDaylightTime=\"0\" value=\"12\">(GMT+12:00) Fiji, Kamchatka,\n            Marshall\n            Is.</option>\n          <option timeZoneId=\"82\" gmtAdjustment=\"GMT+13:00\" useDaylightTime=\"0\" value=\"13\">(GMT+13:00) Nuku'alofa\n          </option>\n        </select>\n      </div>\n      <div class=\"button-holder\"><a class=\"button outline\" (click)=\"go_to_page()\">CREATE<span\n            class=\"lines\"></span></a></div>\n    </div>\n  </div>\n</div>\n<div id=\"loadingView\" class=\"modal\">\n  <div id=\"loading-wrapper\">\n    <div id=\"loading-text\">LOADING</div>\n    <div id=\"loading-content\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\n  background-color: #074e2c;\n  background-image: url(/assets/image/black-thread-light.png);\n  flex: 1 1;\n  margin: 15.5rem;\n  border-radius: 2rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.jss21 {\n  top: 15%;\n  left: 15%;\n  zoom: 0.7;\n  right: 15%;\n  bottom: 15%;\n  position: absolute; }\n\n.tableContainer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: stretch; }\n\n.jss2 {\n  height: 1000px;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  flex-direction: column; }\n\n.seat {\n  display: flex;\n  overflow: hidden;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background-color: #000;\n  overflow: visible;\n  background-size: cover;\n  color: #000;\n  transition: border .5s ease-in-out; }\n\n.player1 {\n  background-color: #00ffd5;\n  width: 40vh;\n  height: 20vh;\n  bottom: 0;\n  margin-bottom: -8rem;\n  position: absolute;\n  left: 10;\n  margin-left: 0; }\n\n.player2 {\n  background-color: #00ffd5;\n  width: 20vh;\n  height: 40vh;\n  bottom: 10;\n  margin-bottom: -8rem;\n  position: absolute;\n  right: -15vh;\n  margin-left: -4rem; }\n\n.player3 {\n  background-color: #00ffd5;\n  width: 20vh;\n  height: 40vh;\n  bottom: 20;\n  margin-bottom: -8rem;\n  position: absolute;\n  left: -6vh;\n  margin-left: -4rem; }\n\n.player4 {\n  background-color: #00ffd5;\n  width: 40vh;\n  height: 20vh;\n  /* bottom: 181px; */\n  margin-bottom: -8rem;\n  position: absolute;\n  left: 10;\n  margin-left: 0;\n  top: -17vh; }\n\n.player {\n  display: flex;\n  width: 5rem;\n  height: 5rem; }\n\n.p1 .profile {\n  left: 100%;\n  top: 50%;\n  margin-top: -20px;\n  margin-left: 1rem; }\n\n.seat .profile {\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  height: 2.5rem;\n  white-space: nowrap;\n  line-height: 2.5rem;\n  padding-right: 1rem;\n  background-color: rgba(255, 255, 255, 0.75);\n  border-top-left-radius: 1.25rem;\n  border-bottom-left-radius: 1.25rem;\n  border-top-right-radius: 1.25rem;\n  border-bottom-right-radius: 1.25rem;\n  max-width: 8rem;\n  z-index: 99;\n  min-width: 6rem; }\n\n.seat .profile > div {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.MuiAvatar-colorDefault {\n  color: #303030;\n  background-color: #757575; }\n\n.MuiAvatar-root {\n  width: 40px;\n  height: 40px;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  font-size: 1.25rem;\n  align-items: center;\n  flex-shrink: 0;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  line-height: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 50%;\n  justify-content: center; }\n\n.avatar {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  height: 2.5rem !important;\n  width: 2.5rem !important; }\n\n.avatar {\n  margin-right: .5rem; }\n\n.MuiAvatar-fallback {\n  width: 75%;\n  height: 75%; }\n\n.MuiSvgIcon-root {\n  fill: currentColor;\n  width: 1em;\n  height: 1em;\n  display: inline-block;\n  font-size: 1.5rem;\n  transition: none;\n  flex-shrink: 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.seat .stack {\n  top: 100%;\n  width: 70%;\n  background-color: inherit;\n  left: 15%;\n  border-bottom-left-radius: .625rem;\n  border-bottom-right-radius: .625rem;\n  line-height: 1.25rem;\n  background-color: rgba(255, 255, 255, 0.95);\n  font-weight: 600;\n  padding: .35rem; }\n\n.seat .profile > div {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.seat.dealer:before,\n.seat .stack {\n  position: absolute;\n  text-align: center; }\n\n.MuiContainer-maxWidthSm {\n  max-width: 600px; }\n\n.MuiContainer-root {\n  width: 100%;\n  display: block;\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.hero {\n  z-index: 1;\n  flex-direction: row;\n  display: flex !important;\n  height: 100%;\n  align-items: flex-start;\n  padding-top: 10%; }\n\n.hero > img {\n  margin-left: -10%; }\n\n.MuiTypography-colorInherit {\n  color: inherit; }\n\n.MuiTypography-h2 {\n  font-size: 3.75rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 300;\n  line-height: 1.2;\n  letter-spacing: -0.00833em; }\n\n.MuiTypography-h6 {\n  font-size: 1.25rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 500;\n  line-height: 1.6;\n  letter-spacing: 0.0075em; }\n\n.MuiButton-containedSizeLarge {\n  padding: 8px 22px;\n  font-size: 0.9375rem; }\n\n.MuiButton-containedPrimary {\n  color: #fff;\n  background-color: #32a86f; }\n\n.MuiButton-contained {\n  color: rgba(0, 0, 0, 0.87);\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  background-color: #e0e0e0; }\n\n.MuiButton-root {\n  color: #fff;\n  padding: 6px 16px;\n  font-size: 0.875rem;\n  min-width: 64px;\n  box-sizing: border-box;\n  transition: none;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 500;\n  line-height: 1.75;\n  border-radius: 4px;\n  letter-spacing: 0.02857em;\n  text-transform: uppercase; }\n\n.MuiButtonBase-root {\n  color: inherit;\n  border: 0;\n  cursor: pointer;\n  margin: 0;\n  display: inline-flex;\n  outline: 0;\n  padding: 0;\n  position: relative;\n  align-items: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border-radius: 0;\n  vertical-align: middle;\n  -moz-appearance: none;\n  justify-content: center;\n  text-decoration: none;\n  background-color: transparent;\n  -webkit-appearance: none;\n  -webkit-tap-highlight-color: transparent; }\n\n.MuiButton-label {\n  width: 100%;\n  display: inherit;\n  align-items: inherit;\n  justify-content: inherit; }\n\n.MuiTouchRipple-root {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 0;\n  overflow: hidden;\n  position: absolute;\n  border-radius: inherit;\n  pointer-events: none; }\n\n.card {\n  background-color: #195739;\n  border-radius: .5rem; }\n\n#spade-table {\n  height: 150vh;\n  /* background-color: #424242; */\n  background-image: url('preview-403821-nv1XHwHEgu0nD3WZ-large.jfif'); }\n\n.hero {\n  z-index: 1;\n  flex-direction: row;\n  display: flex !important;\n  height: 100%;\n  align-items: flex-start;\n  padding-top: 10%; }\n\n.hero > img {\n  margin-left: -10%; }\n\n@media (max-device-width: 600px) {\n  .hero {\n    flex-direction: column; }\n  .hero > img {\n    margin-left: 0; } }\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white; }\n\n.App-link {\n  color: #61dafb; }\n\n.video-background {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.video-background video {\n  -o-object-fit: cover !important;\n     object-fit: cover !important;\n  height: 100%; }\n\n.video-background .overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.8);\n  background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.8) 35%, rgba(0, 0, 0, 0.5) 100%); }\n\n@-webkit-keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n\n.about {\n  z-index: 1;\n  flex-direction: column;\n  display: flex !important;\n  height: 100%;\n  align-items: flex-start;\n  padding-top: 10%; }\n\n.about .feedback a,\n.about .feedback iframe {\n  margin: 0 1rem; }\n\n@media screen and (orientation: portrait) {\n  .hero {\n    align-items: center; }\n  .hero > div {\n    max-width: 80vw;\n    align-items: center;\n    display: flex;\n    flex-direction: column;\n    text-align: center; } }\n\n.action {\n  box-shadow: 0 0 9px 4px #a87d32;\n  -webkit-animation: glow .75s linear infinite alternate;\n          animation: glow .75s linear infinite alternate; }\n\n#first-field {\n  position: absolute;\n  top: 51px;\n  background-color: transparent;\n  width: -webkit-fill-available; }\n\n#logo-image {\n  color: #0099ff;\n  width: 200px;\n  margin-right: 1rem; }\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1000;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: #13131338;\n  /* Black w/ opacity */ }\n\n/* Modal Content */\n\n.modal-content {\n  background-color: #424242;\n  margin: auto;\n  padding: 20px;\n  border-color: black;\n  color: white;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: auto;\n  font-family: initial; }\n\n/* The Close Button */\n\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer; }\n\n.tab {\n  overflow: hidden;\n  border: 1px solid #424242;\n  background-color: #424242; }\n\n/* Style the buttons inside the tab */\n\n.tab div {\n  width: 300px;\n  background-color: inherit;\n  float: left;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  padding: 14px 16px;\n  transition: 0.3s;\n  font-size: 17px; }\n\n/* Change background color of buttons on hover */\n\n.tab div:hover {\n  background-color: transparent;\n  border: 1px solid;\n  border-color: transparent transparent green transparent; }\n\n/* Create an active/current tablink class */\n\n.tab div.active {\n  background-color: #424242;\n  border-bottom-color: green; }\n\n/* Style the tab content */\n\n.tabcontent {\n  display: none;\n  padding: 6px 12px;\n  -webkit-animation: fadeEffect 1s;\n  animation: fadeEffect 1s; }\n\n/* Fade in tabs */\n\n@-webkit-keyframes fadeEffect {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n@keyframes fadeEffect {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n\n.dropdown-content {\n  display: none;\n  margin-top: -10px;\n  position: absolute;\n  background-color: #424242;\n  width: 100%;\n  z-index: 1;\n  box-shadow: transparent rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.dropdown-content a {\n  font-size: 15px;\n  float: none;\n  color: white;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n  text-align: left; }\n\n.dropdown-content a:hover {\n  background-color: #606060; }\n\n.dropdown:active .dropdown-content {\n  display: block; }\n\n/* get started button style */\n\n.glow-on-hover {\n  width: 220px;\n  height: 50px;\n  border: none;\n  outline: none;\n  color: #fff;\n  background: #111;\n  cursor: pointer;\n  position: relative;\n  z-index: 0;\n  border-radius: 10px; }\n\n.glow-on-hover:before {\n  content: '';\n  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  background-size: 400%;\n  z-index: -1;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n  width: calc(100% + 4px);\n  height: calc(100% + 4px);\n  -webkit-animation: glowing 20s linear infinite;\n          animation: glowing 20s linear infinite;\n  opacity: 0;\n  transition: opacity .3s ease-in-out;\n  border-radius: 10px; }\n\n.glow-on-hover:active {\n  color: #000; }\n\n.glow-on-hover:active:after {\n  background: transparent; }\n\n.glow-on-hover:hover:before {\n  opacity: 1; }\n\n.glow-on-hover:after {\n  z-index: -1;\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: #111;\n  left: 0;\n  top: 0;\n  border-radius: 10px; }\n\n@-webkit-keyframes glowing {\n  0% {\n    background-position: 0 0; }\n  50% {\n    background-position: 400% 0; }\n  100% {\n    background-position: 0 0; } }\n\n@keyframes glowing {\n  0% {\n    background-position: 0 0; }\n  50% {\n    background-position: 400% 0; }\n  100% {\n    background-position: 0 0; } }\n\n#localVideo {\n  width: 100%;\n  height: auto; }\n\n.iframe {\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  width: 100%;\n  height: 100%; }\n\n.background-img {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  margin: 5% auto;\n  padding: 20px;\n  border: 1px solid #2a3cad;\n  border-radius: 4px;\n  box-shadow: 0px 0px 5px #2a3cad;\n  position: relative; }\n\n.box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  height: 100%;\n  background: #036f09;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-shadow: 0 20px 50px #031c06;\n  border: 2px solid #033005;\n  color: white;\n  padding: 20px; }\n\n.box:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: -100%;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.1);\n  transition: 0.5s;\n  pointer-events: none; }\n\n.box:hover:before {\n  left: -50%;\n  transform: skewX(-5deg); }\n\n.box .content {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  right: 15px;\n  bottom: 15px;\n  border: 1px solid white;\n  padding: 20px;\n  text-align: center;\n  box-shadow: 0 5px 10px rgba(9, 0, 0, 0.5); }\n\n.box span {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: block;\n  box-sizing: border-box; }\n\n.box span:nth-child(1) {\n  transform: rotate(0deg); }\n\n.box span:nth-child(2) {\n  transform: rotate(180deg); }\n\n.box span:nth-child(3) {\n  transform: rotate(360deg); }\n\n.box span:nth-child(4) {\n  transform: rotate(0deg); }\n\n.box span:before {\n  content: '';\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background: #50dfdb;\n  -webkit-animation: animate 4s linear infinite;\n          animation: animate 4s linear infinite; }\n\n@-webkit-keyframes animate {\n  0% {\n    transform: scaleX(0);\n    transform-origin: left; }\n  50% {\n    transform: scaleX(1);\n    transform-origin: left; }\n  50.1% {\n    transform: scaleX(1);\n    transform-origin: right; }\n  100% {\n    transform: scaleX(0);\n    transform-origin: right; } }\n\n@keyframes animate {\n  0% {\n    transform: scaleX(0);\n    transform-origin: left; }\n  50% {\n    transform: scaleX(1);\n    transform-origin: left; }\n  50.1% {\n    transform: scaleX(1);\n    transform-origin: right; }\n  100% {\n    transform: scaleX(0);\n    transform-origin: right; } }\n\n.user-avatar {\n  background-image: url('1.png');\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  /* border-radius: 50%; */ }\n\n.user-avatar1 {\n  background-image: url('2.png');\n  background-size: cover;\n  width: 90%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  /* border-radius: 50%; */ }\n\n.user-avatar2 {\n  background-image: url('3.jpg');\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  /* border-radius: 50%; */ }\n\n.user-avatar-self {\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  /* border-radius: 50%; */ }\n\n.full-content {\n  height: 100%;\n  width: 100%; }\n\n.camera-video {\n  background-size: cover;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  /* border-radius: 50%; */ }\n\n.circle_cards {\n  background-color: transparent;\n  width: 60vh;\n  height: 60vh;\n  bottom: 10;\n  top: 10;\n  margin-bottom: -8rem;\n  position: absolute;\n  left: 10;\n  margin-left: 0; }\n\n.player1_card {\n  /* background-color: #036f09; */\n  background: url('6_of_spades.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  bottom: 8vh;\n  left: 33%;\n  width: 17vh;\n  height: 25vh;\n  z-index: 1;\n  transform: rotate(15deg); }\n\n.player2_card {\n  /* background-color: #036f09; */\n  position: absolute;\n  right: 8vh;\n  top: 33%;\n  width: 25vh;\n  height: 17vh;\n  z-index: 2;\n  transform: rotate(13deg); }\n\n.player3_card {\n  /* background-color: #036f09; */\n  position: absolute;\n  left: 8vh;\n  top: 33%;\n  width: 25vh;\n  height: 17vh;\n  z-index: 4;\n  transform: rotate(10deg); }\n\n.player4_card {\n  /* background-color: #036f09; */\n  background-image: url('3_of_spades.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  top: 8vh;\n  left: 33%;\n  width: 17vh;\n  height: 25vh;\n  z-index: 3;\n  transform: rotate(18deg); }\n\n.cover_card2 {\n  /* background-image: url(../../assets/cards/king_of_spades.png); */\n  /* background-repeat: no-repeat; */\n  /* background-size: cover; */\n  width: 68%;\n  height: 157%;\n  transform: rotate(100deg);\n  box-shadow: 5px 5px 10px;\n  border: 2px solid white; }\n\n.cover_card3 {\n  /* background-image: url(../../assets/cards/king_of_spades.png); */\n  /* background-repeat: no-repeat; */\n  /* background-size: cover; */\n  width: 68%;\n  height: 157%;\n  transform: rotate(86deg);\n  box-shadow: 5px 5px 10px;\n  border: 2px solid white; }\n\n@font-face {\n  font-family: \"ubuntu\";\n  font-style: italic;\n  font-weight: 300;\n  src: local(\"Lato Light Italic\"), local(\"Lato-LightItalic\"), url(https://fonts.gstatic.com/s/ubuntucondensed/v8/u-4k0rCzjgs5J7oXnJcM_0kACGMtT-Dfqw.woff2) format(\"woff2\"); }\n\nbody {\n  height: 100vh;\n  margin: 0;\n  background-color: #333641;\n  font-family: \"ubuntu\", Arial, sans-serif;\n  overflow-x: hidden;\n  display: grid;\n  place-items: center; }\n\na {\n  text-decoration: none;\n  color: white; }\n\n.wrapper {\n  text-align: center; }\n\n.wrapper h1 {\n    color: #fff;\n    font-size: 92px;\n    font-family: \"ubuntu\";\n    text-transform: uppercase;\n    font-weight: 700;\n    font-family: \"Josefin Sans\", sans-serif;\n    background: linear-gradient(to right, #e72a3a 10%, #fff 50%, #5bdaff 60%);\n    background-size: auto auto;\n    background-clip: border-box;\n    background-size: 200% auto;\n    color: #fff;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -webkit-animation: textclip 1.5s linear infinite;\n            animation: textclip 1.5s linear infinite;\n    display: inline-block; }\n\n@-webkit-keyframes textclip {\n  to {\n    background-position: 200% center; } }\n\n@keyframes textclip {\n  to {\n    background-position: 200% center; } }\n\n.video_control {\n  width: 100%;\n  height: 100%; }\n\n#modal-container {\n  background-color: white;\n  position: absolute;\n  display: table;\n  height: 100px;\n  width: calc(100/3);\n  margin: 15% 25% 25% 15%;\n  top: 0;\n  left: 0;\n  transform: scale(0);\n  z-index: 1; }\n\n#modal-container.one {\n    transform: scaleY(0.01) scaleX(0);\n    -webkit-animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n            animation: unfoldIn 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.one .modal-background .modal {\n      transform: scale(0);\n      position: fixed;\n      /* Stay in place */\n      overflow: hidden !important;\n      -webkit-animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: zoomIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.one.out {\n      transform: scale(1);\n      -webkit-animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: unfoldOut 1s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.one.out .modal-background .modal {\n        -webkit-animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: zoomOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.two {\n    transform: scale(1); }\n\n#modal-container.two .modal-background {\n      background: rgba(0, 0, 0, 0);\n      -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.two .modal-background .modal {\n        opacity: 0;\n        -webkit-animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.two + .content {\n      -webkit-animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: scaleBack 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.two.out {\n      -webkit-animation: quickScaleDown 0s .5s linear forwards;\n              animation: quickScaleDown 0s .5s linear forwards; }\n\n#modal-container.two.out .modal-background {\n        -webkit-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.two.out .modal-background .modal {\n          -webkit-animation: scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                  animation: scaleDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.two.out + .content {\n        -webkit-animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: scaleForward 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.three {\n    z-index: 0;\n    transform: scale(1); }\n\n#modal-container.three .modal-background {\n      background: rgba(0, 0, 0, 0.6); }\n\n#modal-container.three .modal-background .modal {\n        -webkit-animation: moveUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: moveUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.three + .content {\n      z-index: 1;\n      -webkit-animation: slideUpLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: slideUpLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.three.out .modal-background .modal {\n      -webkit-animation: moveDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: moveDown 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.three.out + .content {\n      -webkit-animation: slideDownLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: slideDownLarge 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.four {\n    z-index: 0;\n    transform: scale(1); }\n\n#modal-container.four .modal-background {\n      background: rgba(0, 0, 0, 0.7); }\n\n#modal-container.four .modal-background .modal {\n        -webkit-animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: blowUpModal 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.four + .content {\n      z-index: 1;\n      -webkit-animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: blowUpContent 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.four.out .modal-background .modal {\n      -webkit-animation: blowUpModalTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: blowUpModalTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.four.out + .content {\n      -webkit-animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: blowUpContentTwo 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.five {\n    transform: scale(1); }\n\n#modal-container.five .modal-background {\n      background: rgba(0, 0, 0, 0);\n      -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.five .modal-background .modal {\n        transform: translateX(-1500px);\n        -webkit-animation: roadRunnerIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: roadRunnerIn 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.five.out {\n      -webkit-animation: quickScaleDown 0s .5s linear forwards;\n              animation: quickScaleDown 0s .5s linear forwards; }\n\n#modal-container.five.out .modal-background {\n        -webkit-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.five.out .modal-background .modal {\n          -webkit-animation: roadRunnerOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                  animation: roadRunnerOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.six {\n    transform: scale(1); }\n\n#modal-container.six .modal-background {\n      background: rgba(0, 0, 0, 0);\n      -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.six .modal-background .modal {\n        background-color: transparent;\n        -webkit-animation: modalFadeIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: modalFadeIn 0.5s 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.six .modal-background .modal h2, #modal-container.six .modal-background .modal p {\n          opacity: 0;\n          position: relative;\n          -webkit-animation: modalContentFadeIn 0.5s 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                  animation: modalContentFadeIn 0.5s 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.six .modal-background .modal .modal-svg rect {\n          -webkit-animation: sketchIn 0.5s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                  animation: sketchIn 0.5s 0.3s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.six.out {\n      -webkit-animation: quickScaleDown 0s .5s linear forwards;\n              animation: quickScaleDown 0s .5s linear forwards; }\n\n#modal-container.six.out .modal-background {\n        -webkit-animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: fadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.six.out .modal-background .modal {\n          -webkit-animation: modalFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                  animation: modalFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.six.out .modal-background .modal h2, #modal-container.six.out .modal-background .modal p {\n            -webkit-animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                    animation: modalContentFadeOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.six.out .modal-background .modal .modal-svg rect {\n            -webkit-animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                    animation: sketchOut 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.seven {\n    transform: scale(1); }\n\n#modal-container.seven .modal-background {\n      background: rgba(0, 0, 0, 0);\n      -webkit-animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n              animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.seven .modal-background .modal {\n        height: 75px;\n        width: 75px;\n        border-radius: 75px;\n        overflow: hidden;\n        -webkit-animation: bondJamesBond 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: bondJamesBond 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.seven .modal-background .modal h2, #modal-container.seven .modal-background .modal p {\n          opacity: 0;\n          position: relative;\n          -webkit-animation: modalContentFadeIn .5s 1.4s linear forwards;\n                  animation: modalContentFadeIn .5s 1.4s linear forwards; }\n\n#modal-container.seven.out {\n      -webkit-animation: slowFade .5s 1.5s linear forwards;\n              animation: slowFade .5s 1.5s linear forwards; }\n\n#modal-container.seven.out .modal-background {\n        background-color: rgba(0, 0, 0, 0.7);\n        -webkit-animation: fadeToRed 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                animation: fadeToRed 2s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.seven.out .modal-background .modal {\n          border-radius: 3px;\n          height: 162px;\n          width: 227px;\n          -webkit-animation: killShot 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                  animation: killShot 1s cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container.seven.out .modal-background .modal h2, #modal-container.seven.out .modal-background .modal p {\n            -webkit-animation: modalContentFadeOut 0.5s 0.5 cubic-bezier(0.165, 0.84, 0.44, 1) forwards;\n                    animation: modalContentFadeOut 0.5s 0.5 cubic-bezier(0.165, 0.84, 0.44, 1) forwards; }\n\n#modal-container .modal-background {\n    display: table-cell;\n    background: rgba(0, 0, 0, 0.8);\n    text-align: center;\n    vertical-align: middle; }\n\n#modal-container .modal-background .modal {\n      background: black;\n      padding: 150px;\n      display: inline-block;\n      border-radius: 3px;\n      font-weight: 300; }\n\n#modal-container .modal-background .modal h2 {\n        font-size: 25px;\n        line-height: 25px;\n        margin-bottom: 15px; }\n\n#modal-container .modal-background .modal p {\n        font-size: 18px;\n        line-height: 22px; }\n\n#modal-container .modal-background .modal .modal-svg {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n        border-radius: 3px; }\n\n#modal-container .modal-background .modal .modal-svg rect {\n          stroke: #fff;\n          stroke-width: 2px;\n          stroke-dasharray: 778;\n          stroke-dashoffset: 778; }\n\n@-webkit-keyframes unfoldIn {\n  0% {\n    transform: scaleY(0.005) scaleX(0); }\n  50% {\n    transform: scaleY(0.005) scaleX(1); }\n  100% {\n    transform: scaleY(1) scaleX(1); } }\n\n@keyframes unfoldIn {\n  0% {\n    transform: scaleY(0.005) scaleX(0); }\n  50% {\n    transform: scaleY(0.005) scaleX(1); }\n  100% {\n    transform: scaleY(1) scaleX(1); } }\n\n@-webkit-keyframes unfoldOut {\n  0% {\n    transform: scaleY(1) scaleX(1); }\n  50% {\n    transform: scaleY(0.005) scaleX(1); }\n  100% {\n    transform: scaleY(0.005) scaleX(0); } }\n\n@keyframes unfoldOut {\n  0% {\n    transform: scaleY(1) scaleX(1); }\n  50% {\n    transform: scaleY(0.005) scaleX(1); }\n  100% {\n    transform: scaleY(0.005) scaleX(0); } }\n\n@-webkit-keyframes zoomIn {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes zoomIn {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@-webkit-keyframes zoomOut {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes zoomOut {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    background: rgba(0, 0, 0, 0); }\n  100% {\n    background: rgba(0, 0, 0, 0.7); } }\n\n@keyframes fadeIn {\n  0% {\n    background: rgba(0, 0, 0, 0); }\n  100% {\n    background: rgba(0, 0, 0, 0.7); } }\n\n@-webkit-keyframes fadeOut {\n  0% {\n    background: rgba(0, 0, 0, 0.7); }\n  100% {\n    background: rgba(0, 0, 0, 0); } }\n\n@keyframes fadeOut {\n  0% {\n    background: rgba(0, 0, 0, 0.7); }\n  100% {\n    background: rgba(0, 0, 0, 0); } }\n\n@-webkit-keyframes scaleUp {\n  0% {\n    transform: scale(0.8) translateY(1000px);\n    opacity: 0; }\n  100% {\n    transform: scale(1) translateY(0px);\n    opacity: 1; } }\n\n@keyframes scaleUp {\n  0% {\n    transform: scale(0.8) translateY(1000px);\n    opacity: 0; }\n  100% {\n    transform: scale(1) translateY(0px);\n    opacity: 1; } }\n\n@-webkit-keyframes scaleDown {\n  0% {\n    transform: scale(1) translateY(0px);\n    opacity: 1; }\n  100% {\n    transform: scale(0.8) translateY(1000px);\n    opacity: 0; } }\n\n@keyframes scaleDown {\n  0% {\n    transform: scale(1) translateY(0px);\n    opacity: 1; }\n  100% {\n    transform: scale(0.8) translateY(1000px);\n    opacity: 0; } }\n\n@-webkit-keyframes scaleBack {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0.85); } }\n\n@keyframes scaleBack {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0.85); } }\n\n@-webkit-keyframes scaleForward {\n  0% {\n    transform: scale(0.85); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes scaleForward {\n  0% {\n    transform: scale(0.85); }\n  100% {\n    transform: scale(1); } }\n\n@-webkit-keyframes quickScaleDown {\n  0% {\n    transform: scale(1); }\n  99.9% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes quickScaleDown {\n  0% {\n    transform: scale(1); }\n  99.9% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@-webkit-keyframes slideUpLarge {\n  0% {\n    transform: translateY(0%); }\n  100% {\n    transform: translateY(-100%); } }\n\n@keyframes slideUpLarge {\n  0% {\n    transform: translateY(0%); }\n  100% {\n    transform: translateY(-100%); } }\n\n@-webkit-keyframes slideDownLarge {\n  0% {\n    transform: translateY(-100%); }\n  100% {\n    transform: translateY(0%); } }\n\n@keyframes slideDownLarge {\n  0% {\n    transform: translateY(-100%); }\n  100% {\n    transform: translateY(0%); } }\n\n@-webkit-keyframes moveUp {\n  0% {\n    transform: translateY(150px); }\n  100% {\n    transform: translateY(0); } }\n\n@keyframes moveUp {\n  0% {\n    transform: translateY(150px); }\n  100% {\n    transform: translateY(0); } }\n\n@-webkit-keyframes moveDown {\n  0% {\n    transform: translateY(0px); }\n  100% {\n    transform: translateY(150px); } }\n\n@keyframes moveDown {\n  0% {\n    transform: translateY(0px); }\n  100% {\n    transform: translateY(150px); } }\n\n@-webkit-keyframes blowUpContent {\n  0% {\n    transform: scale(1);\n    opacity: 1; }\n  99.9% {\n    transform: scale(2);\n    opacity: 0; }\n  100% {\n    transform: scale(0); } }\n\n@keyframes blowUpContent {\n  0% {\n    transform: scale(1);\n    opacity: 1; }\n  99.9% {\n    transform: scale(2);\n    opacity: 0; }\n  100% {\n    transform: scale(0); } }\n\n@-webkit-keyframes blowUpContentTwo {\n  0% {\n    transform: scale(2);\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n@keyframes blowUpContentTwo {\n  0% {\n    transform: scale(2);\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n@-webkit-keyframes blowUpModal {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes blowUpModal {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@-webkit-keyframes blowUpModalTwo {\n  0% {\n    transform: scale(1);\n    opacity: 1; }\n  100% {\n    transform: scale(0);\n    opacity: 0; } }\n\n@keyframes blowUpModalTwo {\n  0% {\n    transform: scale(1);\n    opacity: 1; }\n  100% {\n    transform: scale(0);\n    opacity: 0; } }\n\n@-webkit-keyframes roadRunnerIn {\n  0% {\n    transform: translateX(-1500px) skewX(30deg) scaleX(1.3); }\n  70% {\n    transform: translateX(30px) skewX(0deg) scaleX(0.9); }\n  100% {\n    transform: translateX(0px) skewX(0deg) scaleX(1); } }\n\n@keyframes roadRunnerIn {\n  0% {\n    transform: translateX(-1500px) skewX(30deg) scaleX(1.3); }\n  70% {\n    transform: translateX(30px) skewX(0deg) scaleX(0.9); }\n  100% {\n    transform: translateX(0px) skewX(0deg) scaleX(1); } }\n\n@-webkit-keyframes roadRunnerOut {\n  0% {\n    transform: translateX(0px) skewX(0deg) scaleX(1); }\n  30% {\n    transform: translateX(-30px) skewX(-5deg) scaleX(0.9); }\n  100% {\n    transform: translateX(1500px) skewX(30deg) scaleX(1.3); } }\n\n@keyframes roadRunnerOut {\n  0% {\n    transform: translateX(0px) skewX(0deg) scaleX(1); }\n  30% {\n    transform: translateX(-30px) skewX(-5deg) scaleX(0.9); }\n  100% {\n    transform: translateX(1500px) skewX(30deg) scaleX(1.3); } }\n\n@-webkit-keyframes sketchIn {\n  0% {\n    stroke-dashoffset: 778; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@keyframes sketchIn {\n  0% {\n    stroke-dashoffset: 778; }\n  100% {\n    stroke-dashoffset: 0; } }\n\n@-webkit-keyframes sketchOut {\n  0% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 778; } }\n\n@keyframes sketchOut {\n  0% {\n    stroke-dashoffset: 0; }\n  100% {\n    stroke-dashoffset: 778; } }\n\n@-webkit-keyframes modalFadeIn {\n  0% {\n    background-color: transparent; }\n  100% {\n    background-color: white; } }\n\n@keyframes modalFadeIn {\n  0% {\n    background-color: transparent; }\n  100% {\n    background-color: white; } }\n\n@-webkit-keyframes modalFadeOut {\n  0% {\n    background-color: white; }\n  100% {\n    background-color: transparent; } }\n\n@keyframes modalFadeOut {\n  0% {\n    background-color: white; }\n  100% {\n    background-color: transparent; } }\n\n@-webkit-keyframes modalContentFadeIn {\n  0% {\n    opacity: 0;\n    top: -20px; }\n  100% {\n    opacity: 1;\n    top: 0; } }\n\n@keyframes modalContentFadeIn {\n  0% {\n    opacity: 0;\n    top: -20px; }\n  100% {\n    opacity: 1;\n    top: 0; } }\n\n@-webkit-keyframes modalContentFadeOut {\n  0% {\n    opacity: 1;\n    top: 0px; }\n  100% {\n    opacity: 0;\n    top: -20px; } }\n\n@keyframes modalContentFadeOut {\n  0% {\n    opacity: 1;\n    top: 0px; }\n  100% {\n    opacity: 0;\n    top: -20px; } }\n\n@-webkit-keyframes bondJamesBond {\n  0% {\n    transform: translateX(1000px); }\n  80% {\n    transform: translateX(0px);\n    border-radius: 75px;\n    height: 75px;\n    width: 75px; }\n  90% {\n    border-radius: 3px;\n    height: 182px;\n    width: 247px; }\n  100% {\n    border-radius: 3px;\n    height: 162px;\n    width: 227px; } }\n\n@keyframes bondJamesBond {\n  0% {\n    transform: translateX(1000px); }\n  80% {\n    transform: translateX(0px);\n    border-radius: 75px;\n    height: 75px;\n    width: 75px; }\n  90% {\n    border-radius: 3px;\n    height: 182px;\n    width: 247px; }\n  100% {\n    border-radius: 3px;\n    height: 162px;\n    width: 227px; } }\n\n@-webkit-keyframes killShot {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1; }\n  100% {\n    transform: translateY(300px) rotate(45deg);\n    opacity: 0; } }\n\n@keyframes killShot {\n  0% {\n    transform: translateY(0) rotate(0deg);\n    opacity: 1; }\n  100% {\n    transform: translateY(300px) rotate(45deg);\n    opacity: 0; } }\n\n@-webkit-keyframes fadeToRed {\n  0% {\n    background-color: rgba(0, 0, 0, 0.6); }\n  100% {\n    background-color: rgba(255, 0, 0, 0.8); } }\n\n@keyframes fadeToRed {\n  0% {\n    background-color: rgba(0, 0, 0, 0.6); }\n  100% {\n    background-color: rgba(255, 0, 0, 0.8); } }\n\n@-webkit-keyframes slowFade {\n  0% {\n    opacity: 1; }\n  99.9% {\n    opacity: 0;\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes slowFade {\n  0% {\n    opacity: 1; }\n  99.9% {\n    opacity: 0;\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n.boxs {\n  width: 700px;\n  height: auto;\n  border: 30px solid #0c0b0b;\n  border-radius: 10px;\n  margin: 50px auto;\n  background: #0c0b0b;\n  color: white; }\n\n.btn-1 {\n  text-align: center;\n  display: inline-block;\n  padding: 15px 40px;\n  border: 1px solid black;\n  border-bottom-color: white;\n  cursor: pointer;\n  letter-spacing: 2px;\n  position: relative;\n  overflow: hidden;\n  margin: 0 20px;\n  width: 100%;\n  color: white;\n  font-family: initial;\n  font-size: 22px; }\n\n.btn-1:active {\n  border-bottom-color: green; }\n\n.tab-bar {\n  display: flex;\n  justify-content: space-evenly; }\n\n.patron_text {\n  background-color: #ffffff;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  text-shadow: rgba(0, 0, 0, 0.5) 0px 3px 3px; }\n\n#cash {\n  display: block; }\n\n#tournament {\n  display: none; }\n\n.borderbottom {\n  border-bottom: 2px solid green; }\n\n.tab_content {\n  margin: 10px 20px 0 20px; }\n\n#select_option {\n  width: 100%;\n  height: 36px;\n  border-color: #0c0b0b;\n  border-bottom: 2px solid #fcfffc;\n  color: white;\n  background-color: #0c0b0b; }\n\n#buy_blind {\n  display: flex;\n  justify-content: space-between;\n  color: black;\n  margin: 0 0 0 0; }\n\n.full {\n  width: 100%;\n  border-color: transparent;\n  border-bottom: 2px solid #f7f7f7;\n  /* background-color: transparent; */\n  color: white;\n  height: 40px;\n  background-color: #0c0b0b; }\n\n#buy_blindg {\n  display: flex;\n  justify-content: space-between;\n  color: black;\n  margin: 10px 0 0 0; }\n\n.email_input {\n  font-size: smaller;\n  margin: 10px 0 0 0; }\n\np {\n  color: white; }\n\n.button-holder {\n  color: white;\n  font-weight: bold;\n  border: 1px solid white;\n  border-radius: 30px;\n  text-align: center;\n  display: inline-block;\n  letter-spacing: 4px;\n  text-decoration: none;\n  padding: 10px 52px;\n  cursor: pointer;\n  margin: 53px 0 0 113px;\n  margin-left: 405px; }\n\nspan.email-ids {\n  float: left;\n  border: 1px solid #ccc;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  background: #f5f5f5;\n  padding: 3px 10px;\n  border-radius: 5px; }\n\nspan.cancel-email {\n  border: 1px solid #ccc;\n  width: 18px;\n  display: block;\n  float: right;\n  text-align: center;\n  margin-left: 20px;\n  border-radius: 49%;\n  height: 18px;\n  line-height: 15px;\n  margin-top: 1px;\n  cursor: pointer; }\n\n.email-id-row {\n  border: 1px solid #ccc; }\n\n.email-id-row input {\n  border: 0;\n  outline: 0; }\n\nspan.to-input {\n  display: block;\n  float: left;\n  padding-right: 11px; }\n\n.email-id-row {\n  padding-top: 6px;\n  padding-bottom: 7px;\n  /*margin-top: 23px;*/ }\n\n#loadingView {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1000;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: black;\n  /* Black w/ opacity */ }\n\n#loading-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0; }\n\n#loading-text {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #999;\n  width: 100px;\n  height: 30px;\n  margin: -7px 0 0 -45px;\n  text-align: center;\n  font-family: 'PT Sans Narrow', sans-serif;\n  font-size: 20px; }\n\n#loading-content {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 170px;\n  height: 170px;\n  margin: -85px 0 0 -85px;\n  border: 3px solid #F00; }\n\n#loading-content:after {\n  content: \"\";\n  position: absolute;\n  border: 3px solid #0F0;\n  left: 15px;\n  right: 15px;\n  top: 15px;\n  bottom: 15px; }\n\n#loading-content:before {\n  content: \"\";\n  position: absolute;\n  border: 3px solid #00F;\n  left: 5px;\n  right: 5px;\n  top: 5px;\n  bottom: 5px; }\n\n#loading-content {\n  border: 3px solid transparent;\n  border-top-color: #4D658D;\n  border-bottom-color: #4D658D;\n  border-radius: 50%;\n  -webkit-animation: loader 2s linear infinite;\n  animation: loader 2s linear infinite; }\n\n#loading-content:before {\n  border: 3px solid transparent;\n  border-top-color: #D4CC6A;\n  border-bottom-color: #D4CC6A;\n  border-radius: 50%;\n  -webkit-animation: loader 3s linear infinite;\n  animation: loader 3s linear infinite; }\n\n#loading-content:after {\n  border: 3px solid transparent;\n  border-top-color: #84417C;\n  border-bottom-color: #84417C;\n  border-radius: 50%;\n  -webkit-animation: loader 1.5s linear infinite;\n  animation: loader 1.5s linear infinite;\n  -moz-animation: loader 2s linear infinite;\n  -o-animation: loader 2s linear infinite; }\n\n@-webkit-keyframes loaders {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes loaders {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes loader {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes loader {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n.flexlayout {\n  display: flex;\n  justify-content: space-between; }\n\n.flex_input {\n  border-style: none;\n  background: transparent;\n  border-bottom: 1px solid white;\n  width: 100%;\n  position: relative;\n  outline: none;\n  color: white;\n  font-size: 18px; }\n\n.closes {\n  color: white;\n  cursor: pointer;\n  font-size: xx-large;\n  font-weight: bolder;\n  float: right; }\n\n#select_timezone {\n  margin-top: 0px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9GOlxcUHJvZ3JhbUxpc3RcXDExc3BhZGUtZ2FtZTExXFxzcGFkZSBnYW1lL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGtDQUFrQyxFQUFBOztBQUdwQztFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtFQUNa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O0VBQ0UsYUFBYTtFQUNiLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsYUFBYTtFQUViLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBSWpCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLFlBQVksRUFBQTs7QUFJZDtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYmxle1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDc0ZTJjO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZS9ibGFjay10aHJlYWQtbGlnaHQucG5nKTtcbiAgZmxleDogMSAxO1xuICBtYXJnaW46IDE1LjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5qc3MyMXtcbiAgdG9wOiAxNSU7XG4gIGxlZnQ6IDE1JTtcbiAgem9vbTogMC43O1xuICByaWdodDogMTUlO1xuICBib3R0b206IDE1JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udGFibGVDb250YWluZXJ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG5cbi5qc3Mye1xuICBoZWlnaHQ6IDEwMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uc2VhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogIzAwMDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIC41cyBlYXNlLWluLW91dDtcbn1cblxuLnBsYXllcjEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmQ1O1xuICB3aWR0aDogNDB2aDtcbiAgaGVpZ2h0OiAyMHZoO1xuICBib3R0b206IDA7XG4gIG1hcmdpbi1ib3R0b206IC04cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuLnBsYXllcjIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmQ1O1xuICB3aWR0aDogMjB2aDtcbiAgaGVpZ2h0OiA0MHZoO1xuICBib3R0b206IDEwO1xuICBtYXJnaW4tYm90dG9tOiAtOHJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTE1dmg7XG4gIG1hcmdpbi1sZWZ0OiAtNHJlbTtcbn1cblxuLnBsYXllcjMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmQ1O1xuICB3aWR0aDogMjB2aDtcbiAgaGVpZ2h0OiA0MHZoO1xuICBib3R0b206IDIwO1xuICBtYXJnaW4tYm90dG9tOiAtOHJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtNnZoO1xuICBtYXJnaW4tbGVmdDogLTRyZW07XG59XG5cbi5wbGF5ZXI0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZkNTtcbiAgd2lkdGg6IDQwdmg7XG4gIGhlaWdodDogMjB2aDtcbiAgLyogYm90dG9tOiAxODFweDsgKi9cbiAgbWFyZ2luLWJvdHRvbTogLThyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICB0b3A6IC0xN3ZoO1xufVxuXG4ucGxheWVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDVyZW07XG4gIGhlaWdodDogNXJlbTtcbn1cblxuLnAxIC5wcm9maWxlIHtcbiAgbGVmdDogMTAwJTtcbiAgdG9wOiA1MCU7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNlYXQgLnByb2ZpbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogMi41cmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBsaW5lLWhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAxMDAlLCAuNzUpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxLjI1cmVtO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMS4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEuMjVyZW07XG4gIG1heC13aWR0aDogOHJlbTtcbiAgei1pbmRleDogOTk7XG4gIG1pbi13aWR0aDogNnJlbTtcbn1cblxuLnNlYXQgLnByb2ZpbGU+ZGl2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5NdWlBdmF0YXItY29sb3JEZWZhdWx0IHtcbiAgY29sb3I6ICMzMDMwMzA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XG59XG5cbi5NdWlBdmF0YXItcm9vdCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYXZhdGFyIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDIuNXJlbSAhaW1wb3J0YW50O1xuICB3aWR0aDogMi41cmVtICFpbXBvcnRhbnQ7XG59XG5cbi5hdmF0YXIge1xuICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xufVxuXG4uTXVpQXZhdGFyLWZhbGxiYWNrIHtcbiAgd2lkdGg6IDc1JTtcbiAgaGVpZ2h0OiA3NSU7XG59XG5cbi5NdWlTdmdJY29uLXJvb3Qge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gIHdpZHRoOiAxZW07XG4gIGhlaWdodDogMWVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICB0cmFuc2l0aW9uOiBub25lO1xuICBmbGV4LXNocmluazogMDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zZWF0IC5zdGFjayB7XG4gIHRvcDogMTAwJTtcbiAgd2lkdGg6IDcwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgbGVmdDogMTUlO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuNjI1cmVtO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjYyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDEwMCUsIC45NSk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IC4zNXJlbTtcbn1cblxuLnNlYXQgLnByb2ZpbGU+ZGl2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5zZWF0LmRlYWxlcjpiZWZvcmUsXG4uc2VhdCAuc3RhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLk11aUNvbnRhaW5lci1tYXhXaWR0aFNtIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuLk11aUNvbnRhaW5lci1yb290IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5oZXJvIHtcbiAgei1pbmRleDogMTtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG4uaGVybz5pbWcge1xuICBtYXJnaW4tbGVmdDogLTEwJTtcbn1cblxuLk11aVR5cG9ncmFwaHktY29sb3JJbmhlcml0IHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbi5NdWlUeXBvZ3JhcGh5LWgyIHtcbiAgZm9udC1zaXplOiAzLjc1cmVtO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDA4MzNlbTtcbn1cblxuXG4uTXVpVHlwb2dyYXBoeS1oNiB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDA3NWVtO1xufVxuXG5cblxuLk11aUJ1dHRvbi1jb250YWluZWRTaXplTGFyZ2Uge1xuICBwYWRkaW5nOiA4cHggMjJweDtcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XG59XG5cbi5NdWlCdXR0b24tY29udGFpbmVkUHJpbWFyeSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzJhODZmO1xufVxuXG4uTXVpQnV0dG9uLWNvbnRhaW5lZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4uTXVpQnV0dG9uLXJvb3Qge1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIG1pbi13aWR0aDogNjRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNzU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDI4NTdlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLk11aUJ1dHRvbkJhc2Utcm9vdCB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgb3V0bGluZTogMDtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4uTXVpQnV0dG9uLWxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XG59XG5cbi5NdWlUb3VjaFJpcHBsZS1yb290IHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgei1pbmRleDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5cbi5jYXJke1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk1NzM5O1xuICBib3JkZXItcmFkaXVzOiAuNXJlbTtcbn1cblxuXG4jc3BhZGUtdGFibGV7XG4gIGhlaWdodDogMTUwdmg7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICM0MjQyNDI7ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvcHJldmlldy00MDM4MjEtbnYxWEh3SEVndTBuRDNXWi1sYXJnZS5qZmlmKTtcbn1cblxuXG5cblxuLmhlcm8ge1xuICB6LWluZGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbi5oZXJvID4gaW1nIHtcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XG59XG5cbkBtZWRpYSAobWF4LWRldmljZS13aWR0aDogNjAwcHgpIHtcbiAgLmhlcm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLmhlcm8gPiBpbWcge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICB9XG59XG5cbi5BcHAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmMzNDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IGNhbGMoMTBweCArIDJ2bWluKTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uQXBwLWxpbmsge1xuICBjb2xvcjogIzYxZGFmYjtcbn1cblxuLnZpZGVvLWJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cblxuLnZpZGVvLWJhY2tncm91bmQgdmlkZW8ge1xuICBvYmplY3QtZml0OiBjb3ZlciAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi52aWRlby1iYWNrZ3JvdW5kIC5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgIDE4MGRlZyxcbiAgICByZ2JhKDAsIDAsIDAsIDAuOSkgMCUsXG4gICAgcmdiYSgwLCAwLCAwLCAwLjgpIDM1JSxcbiAgICByZ2JhKDAsIDAsIDAsIDAuNSkgMTAwJVxuICApO1xufVxuXG5Aa2V5ZnJhbWVzIEFwcC1sb2dvLXNwaW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG4uYWJvdXQge1xuICB6LWluZGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cblxuXG4uYWJvdXQgLmZlZWRiYWNrIGEsXG4uYWJvdXQgLmZlZWRiYWNrIGlmcmFtZSB7XG4gIG1hcmdpbjogMCAxcmVtO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmhlcm8ge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cblxuICAuaGVybyA+IGRpdiB7XG4gICAgbWF4LXdpZHRoOiA4MHZ3O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG4uYWN0aW9uIHtcbiAgICBib3gtc2hhZG93OiAwIDAgOXB4IDRweCAjYTg3ZDMyO1xuICAgIGFuaW1hdGlvbjogZ2xvdyAuNzVzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XG59XG5cbiNmaXJzdC1maWVsZHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbn1cblxuI2xvZ28taW1hZ2V7XG4gIGNvbG9yOiByZ2IoMCwgMTUzLCAyNTUpO1xuICB3aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLm1vZGFsIHtcbiAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gIHotaW5kZXg6IDEwMDA7IC8qIFNpdCBvbiB0b3AgKi9cbiAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzMTMxMzM4OyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG59XG5cbi8qIE1vZGFsIENvbnRlbnQgKi9cbi5tb2RhbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogaW5pdGlhbDtcbn1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNsb3NlOmhvdmVyLFxuLmNsb3NlOmZvY3VzIHtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFiIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQyNDI0MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0Mjtcbn1cblxuLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cbi50YWIgZGl2IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4vKiBDaGFuZ2UgYmFja2dyb3VuZCBjb2xvciBvZiBidXR0b25zIG9uIGhvdmVyICovXG4udGFiIGRpdjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6MXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGdyZWVuIHRyYW5zcGFyZW50O1xufVxuXG4vKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xuLnRhYiBkaXYuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogZ3JlZW47XG59XG5cbi8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xuLnRhYmNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVFZmZlY3QgMXM7XG4gIGFuaW1hdGlvbjogZmFkZUVmZmVjdCAxcztcbn1cblxuLyogRmFkZSBpbiB0YWJzICovXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUVmZmVjdCB7XG4gIGZyb20ge29wYWNpdHk6IDA7fVxuICB0byB7b3BhY2l0eTogMTt9XG59XG5cbkBrZXlmcmFtZXMgZmFkZUVmZmVjdCB7XG4gIGZyb20ge29wYWNpdHk6IDA7fVxuICB0byB7b3BhY2l0eTogMTt9XG59XG5cbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50IHJnYmEoMCwwLDAsMC4yKSwgMHB4IDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLDAuMTQpLCAwcHggM3B4IDE0cHggMnB4IHJnYmEoMCwwLDAsMC4xMik7XG59XG5cbi5kcm9wZG93bi1jb250ZW50IGEge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZsb2F0OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDYwNjA7XG59XG5cbi5kcm9wZG93bjphY3RpdmUgLmRyb3Bkb3duLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyogZ2V0IHN0YXJ0ZWQgYnV0dG9uIHN0eWxlICovXG5cbi5nbG93LW9uLWhvdmVyIHtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6ICMxMTE7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5nbG93LW9uLWhvdmVyOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZmYwMDAwLCAjZmY3MzAwLCAjZmZmYjAwLCAjNDhmZjAwLCAjMDBmZmQ1LCAjMDAyYmZmLCAjN2EwMGZmLCAjZmYwMGM4LCAjZmYwMDAwKTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtMnB4O1xuICAgIGxlZnQ6LTJweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDQwMCU7XG4gICAgei1pbmRleDogLTE7XG4gICAgZmlsdGVyOiBibHVyKDVweCk7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDRweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA0cHgpO1xuICAgIGFuaW1hdGlvbjogZ2xvd2luZyAyMHMgbGluZWFyIGluZmluaXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmdsb3ctb24taG92ZXI6YWN0aXZlIHtcbiAgICBjb2xvcjogIzAwMFxufVxuXG4uZ2xvdy1vbi1ob3ZlcjphY3RpdmU6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uZ2xvdy1vbi1ob3Zlcjpob3ZlcjpiZWZvcmUge1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5nbG93LW9uLWhvdmVyOmFmdGVyIHtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICMxMTE7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuQGtleWZyYW1lcyBnbG93aW5nIHtcbiAgICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDAgMDsgfVxuICAgIDUwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDQwMCUgMDsgfVxuICAgIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7IH1cbn1cblxuXG4jbG9jYWxWaWRlb3tcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaWZyYW1le1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5iYWNrZ3JvdW5kLWltZ3tcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbWFyZ2luOiA1JSBhdXRvO1xuICBwYWRkaW5nOjIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyYTNjYWQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggIzJhM2NhZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYm94e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMDM2ZjA5O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2IoMywgMjgsIDYpO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDMzMDA1O1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5ib3g6YmVmb3Jle1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDowO1xuICBsZWZ0Oi0xMDAlO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6MTAwJTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xuICB0cmFuc2l0aW9uOjAuNXM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYm94OmhvdmVyOmJlZm9yZXtcbiAgbGVmdDotNTAlO1xuICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcbn1cblxuXG4uYm94IC5jb250ZW50e1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjE1cHg7XG4gIGxlZnQ6MTVweDtcbiAgcmlnaHQ6MTVweDtcbiAgYm90dG9tOjE1cHg7XG4gIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XG4gIHBhZGRpbmc6MjBweDtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDEwcHggcmdiYSg5LDAsMCwwLjUpO1xuXG59XG5cbi5ib3ggc3BhbntcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG59XG5cbi5ib3ggc3BhbjpudGgtY2hpbGQoMSlcbntcbiAgdHJhbnNmb3JtOnJvdGF0ZSgwZGVnKTtcbn1cblxuLmJveCBzcGFuOm50aC1jaGlsZCgyKVxue1xuICB0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7XG59XG5cbi5ib3ggc3BhbjpudGgtY2hpbGQoMylcbntcbiAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xufVxuXG4uYm94IHNwYW46bnRoLWNoaWxkKDQpXG57XG4gIHRyYW5zZm9ybTpyb3RhdGUoMGRlZyk7XG59XG5cbi5ib3ggc3BhbjpiZWZvcmVcbntcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICM1MGRmZGI7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZSA0cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG4gIDAlIHtcbiAgdHJhbnNmb3JtOnNjYWxlWCgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgfVxuICA1MCVcbiAge1xuICAgIHRyYW5zZm9ybTpzY2FsZVgoMSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gIH1cbiAgNTAuMSVcbiAge1xuICAgIHRyYW5zZm9ybTpzY2FsZVgoMSk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuXG4gIH1cblxuICAxMDAlXG4gIHtcbiAgICB0cmFuc2Zvcm06c2NhbGVYKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcblxuICB9XG5cbn1cblxuLnVzZXItYXZhdGFye1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvMS5wbmcpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBib3R0b206IDA7XG4gICAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xuICB9XG5cbi51c2VyLWF2YXRhcjF7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvMi5wbmcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIGJvdHRvbTogMDtcbiAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xufVxuXG5cbi51c2VyLWF2YXRhcjJ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1hZ2UvMy5qcGcpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDowO1xuICBib3R0b206IDA7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDUwJTsgKi9cbn1cblxuXG4udXNlci1hdmF0YXItc2VsZntcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6MDtcbiAgYm90dG9tOiAwO1xuICAvKiBib3JkZXItcmFkaXVzOiA1MCU7ICovXG59XG5cbi5mdWxsLWNvbnRlbnR7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYW1lcmEtdmlkZW97XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIGJvdHRvbTogMDtcbiAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xufVxuXG4uY2lyY2xlX2NhcmRze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDYwdmg7XG4gIGhlaWdodDogNjB2aDtcbiAgYm90dG9tOiAxMDtcbiAgdG9wOiAxMDtcbiAgbWFyZ2luLWJvdHRvbTogLThyZW07XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuXG5cblxuLnBsYXllcjFfY2FyZHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzAzNmYwOTsgKi9cbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9jYXJkcy82X29mX3NwYWRlcy5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHZoO1xuICBsZWZ0OiAzMyU7XG4gIHdpZHRoOiAxN3ZoO1xuICBoZWlnaHQ6IDI1dmg7XG4gIHotaW5kZXg6IDE7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKVxufVxuXG5cbi5wbGF5ZXIyX2NhcmR7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMzZmMDk7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDh2aDtcbiAgdG9wOiAzMyU7XG4gIHdpZHRoOiAyNXZoO1xuICBoZWlnaHQ6IDE3dmg7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEzZGVnKVxufVxuXG5cbi5wbGF5ZXIzX2NhcmR7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMzZmMDk7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHZoO1xuICB0b3A6IDMzJTtcbiAgd2lkdGg6IDI1dmg7XG4gIGhlaWdodDogMTd2aDtcbiAgei1pbmRleDogNDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpXG59XG5cbi5wbGF5ZXI0X2NhcmR7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICMwMzZmMDk7ICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvY2FyZHMvM19vZl9zcGFkZXMucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDh2aDtcbiAgbGVmdDogMzMlO1xuICB3aWR0aDogMTd2aDtcbiAgaGVpZ2h0OiAyNXZoO1xuICB6LWluZGV4OiAzO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZylcbn1cblxuLmNvdmVyX2NhcmQye1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2NhcmRzL2tpbmdfb2Zfc3BhZGVzLnBuZyk7ICovXG4gIC8qIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXG4gICAgd2lkdGg6IDY4JTtcbiAgICBoZWlnaHQ6IDE1NyU7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTAwZGVnKTtcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHg7XG4gICAgYm9yZGVyOjJweCBzb2xpZCB3aGl0ZTtcbn1cblxuLmNvdmVyX2NhcmQze1xuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2NhcmRzL2tpbmdfb2Zfc3BhZGVzLnBuZyk7ICovXG4gIC8qIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7ICovXG4gIC8qIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXG4gIHdpZHRoOiA2OCU7XG4gIGhlaWdodDogMTU3JTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoODZkZWcpO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHg7XG4gIGJvcmRlcjoycHggc29saWQgd2hpdGU7XG59XG5cblxuJGF2YXRhci1zaXplOiAzMnB4O1xuJGJvZHktYmFja2dyb3VuZDogIzMzMzY0MTtcblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiBcInVidW50dVwiO1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdHNyYzogbG9jYWwoXCJMYXRvIExpZ2h0IEl0YWxpY1wiKSwgbG9jYWwoXCJMYXRvLUxpZ2h0SXRhbGljXCIpLFxuXHRcdHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvdWJ1bnR1Y29uZGVuc2VkL3Y4L3UtNGswckN6amdzNUo3b1huSmNNXzBrQUNHTXRULURmcXcud29mZjIpXG5cdFx0XHRmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cblxuYm9keSB7XG5cdGhlaWdodDogMTAwdmg7XG5cdG1hcmdpbjogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmFja2dyb3VuZDtcblx0Zm9udC1mYW1pbHk6IFwidWJ1bnR1XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmEge1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLndyYXBwZXIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGgxIHtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRmb250LXNpemU6IDkycHg7XG5cdFx0Zm9udC1mYW1pbHk6IFwidWJ1bnR1XCI7XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdGZvbnQtZmFtaWx5OiBcIkpvc2VmaW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuXHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2U3MmEzYSAxMCUsICNmZmYgNTAlLCAjNWJkYWZmIDYwJSk7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBhdXRvIGF1dG87XG5cdFx0YmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuXHRcdGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdGJhY2tncm91bmQtY2xpcDogdGV4dDtcblx0XHQvLyB0ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuXHRcdC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRhbmltYXRpb246IHRleHRjbGlwIDEuNXMgbGluZWFyIGluZmluaXRlO1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIHRleHRjbGlwIHtcblx0dG8ge1xuXHRcdGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgY2VudGVyO1xuXHR9XG59XG5cbi52aWRlb19jb250cm9se1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4jbW9kYWwtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICBkaXNwbGF5OnRhYmxlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDpjYWxjKDEwMC8zKTtcbiAgbWFyZ2luOjE1JSAyNSUgMjUlIDE1JTtcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcbiAgdHJhbnNmb3JtOnNjYWxlKDApO1xuICB6LWluZGV4OjE7XG4gICYub25lIHtcbiAgICB0cmFuc2Zvcm06c2NhbGVZKC4wMSkgc2NhbGVYKDApO1xuICAgIGFuaW1hdGlvbjp1bmZvbGRJbiAxcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgIC5tb2RhbCB7XG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgYW5pbWF0aW9uOiB6b29tSW4gLjVzIC44cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dCB7XG4gICAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XG4gICAgICBhbmltYXRpb246dW5mb2xkT3V0IDFzIC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgLm1vZGFsLWJhY2tncm91bmQge1xuICAgICAgICAubW9kYWwge1xuICAgICAgICAgIGFuaW1hdGlvbjogem9vbU91dCAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAmLnR3byB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xuICAgIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuMCk7XG4gICAgICBhbmltYXRpb246IGZhZGVJbiAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgIC5tb2RhbCB7XG4gICAgICAgIG9wYWNpdHk6MDtcbiAgICAgICAgYW5pbWF0aW9uOiBzY2FsZVVwIC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgfVxuICAgIH1cbiAgICArIC5jb250ZW50IHtcbiAgICAgIGFuaW1hdGlvbjogc2NhbGVCYWNrIC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgIH1cbiAgICAmLm91dCB7XG4gICAgICBhbmltYXRpb246IHF1aWNrU2NhbGVEb3duIDBzIC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgICAubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICAgYW5pbWF0aW9uOiBzY2FsZURvd24gLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgICsgLmNvbnRlbnQge1xuICAgICAgICBhbmltYXRpb246IHNjYWxlRm9yd2FyZCAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi50aHJlZSB7XG4gICAgei1pbmRleDowO1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcbiAgICAubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjYpO1xuICAgICAgLm1vZGFsIHtcbiAgICAgICAgYW5pbWF0aW9uOiBtb3ZlVXAgLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgZm9yd2FyZHM7XG4gICAgICB9XG4gICAgfVxuICAgICsgLmNvbnRlbnQge1xuICAgICAgei1pbmRleDoxO1xuICAgICAgYW5pbWF0aW9uOiBzbGlkZVVwTGFyZ2UgLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgZm9yd2FyZHM7XG4gICAgfVxuICAgICYub3V0IHtcbiAgICAgIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICBhbmltYXRpb246IG1vdmVEb3duIC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICArIC5jb250ZW50IHtcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZURvd25MYXJnZSAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5mb3VyIHtcbiAgICB6LWluZGV4OjA7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xuICAgIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuNyk7XG4gICAgICAubW9kYWwge1xuICAgICAgICBhbmltYXRpb246IGJsb3dVcE1vZGFsIC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgfVxuICAgIH1cbiAgICArIC5jb250ZW50IHtcbiAgICAgIHotaW5kZXg6MTtcbiAgICAgIGFuaW1hdGlvbjpibG93VXBDb250ZW50IC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgIH1cbiAgICAmLm91dCB7XG4gICAgICAubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgYW5pbWF0aW9uOiBibG93VXBNb2RhbFR3byAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgKyAuY29udGVudCB7XG4gICAgICAgIGFuaW1hdGlvbjogYmxvd1VwQ29udGVudFR3byAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5maXZlIHtcbiAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XG4gICAgLm1vZGFsLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wKTtcbiAgICAgIGFuaW1hdGlvbjogZmFkZUluIC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgLm1vZGFsIHtcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTE1MDBweCk7XG4gICAgICAgIGFuaW1hdGlvbjogcm9hZFJ1bm5lckluIC4zcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgfVxuICAgIH1cbiAgICAmLm91dCB7XG4gICAgICBhbmltYXRpb246IHF1aWNrU2NhbGVEb3duIDBzIC41cyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgICAubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZU91dCAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICBhbmltYXRpb246IHJvYWRSdW5uZXJPdXQgLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgZm9yd2FyZHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5zaXgge1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcbiAgICAubW9kYWwtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjApO1xuICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gLjVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgZm9yd2FyZHM7XG4gICAgICAubW9kYWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgICAgICBhbmltYXRpb246IG1vZGFsRmFkZUluIC41cyAuOHMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgICAgaDIscCB7XG4gICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgIGFuaW1hdGlvbjogbW9kYWxDb250ZW50RmFkZUluIC41cyAxcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgICB9XG4gICAgICAgIC5tb2RhbC1zdmcge1xuICAgICAgICAgIHJlY3Qge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBza2V0Y2hJbiAuNXMgLjNzIGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgZm9yd2FyZHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgICYub3V0IHtcbiAgICAgIGFuaW1hdGlvbjogcXVpY2tTY2FsZURvd24gMHMgLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAgIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlT3V0IC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgICAubW9kYWwge1xuICAgICAgICAgIGFuaW1hdGlvbjogbW9kYWxGYWRlT3V0IC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgICAgIGgyLHAge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBtb2RhbENvbnRlbnRGYWRlT3V0IC41cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubW9kYWwtc3ZnIHtcbiAgICAgICAgICAgIHJlY3Qge1xuICAgICAgICAgICAgICBhbmltYXRpb246IHNrZXRjaE91dCAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgJi5zZXZlbiB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xuICAgIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuMCk7XG4gICAgICBhbmltYXRpb246IGZhZGVJbiAuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgIC5tb2RhbCB7XG4gICAgICAgIGhlaWdodDo3NXB4O1xuICAgICAgICB3aWR0aDo3NXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOjc1cHg7XG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcbiAgICAgICAgYW5pbWF0aW9uOiBib25kSmFtZXNCb25kIDEuNXMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgICAgaDIscCB7XG4gICAgICAgICAgb3BhY2l0eTowO1xuICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgICAgICAgIGFuaW1hdGlvbjogbW9kYWxDb250ZW50RmFkZUluIC41cyAxLjRzIGxpbmVhciBmb3J3YXJkcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLm91dCB7XG4gICAgICBhbmltYXRpb246IHNsb3dGYWRlIC41cyAxLjVzIGxpbmVhciBmb3J3YXJkcztcbiAgICAgIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC43KTtcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlVG9SZWQgMnMgY3ViaWMtYmV6aWVyKDAuMTY1LCAwLjg0MCwgMC40NDAsIDEuMDAwKSBmb3J3YXJkcztcbiAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOjNweDtcbiAgICAgICAgICBoZWlnaHQ6MTYycHg7XG4gICAgICAgICAgd2lkdGg6MjI3cHg7XG4gICAgICAgICAgYW5pbWF0aW9uOiBraWxsU2hvdCAxcyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQwLCAwLjQ0MCwgMS4wMDApIGZvcndhcmRzO1xuICAgICAgICAgIGgyLHAge1xuICAgICAgICAgICAgYW5pbWF0aW9uOm1vZGFsQ29udGVudEZhZGVPdXQgLjVzIC41IGN1YmljLWJlemllcigwLjE2NSwgMC44NDAsIDAuNDQwLCAxLjAwMCkgZm9yd2FyZHM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5tb2RhbC1iYWNrZ3JvdW5kIHtcbiAgICBkaXNwbGF5OnRhYmxlLWNlbGw7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLC44KTtcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7XG4gICAgLm1vZGFsIHtcbiAgICAgIGJhY2tncm91bmQ6YmxhY2s7XG4gICAgICBwYWRkaW5nOjE1MHB4O1xuICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XG4gICAgICBib3JkZXItcmFkaXVzOjNweDtcbiAgICAgIGZvbnQtd2VpZ2h0OjMwMDtcbiAgICAgIGgyIHtcbiAgICAgICAgZm9udC1zaXplOjI1cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OjI1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MTVweDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6MThweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6MjJweDtcbiAgICAgIH1cbiAgICAgIC5tb2RhbC1zdmcge1xuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICAgICAgdG9wOjA7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6M3B4O1xuICAgICAgICByZWN0IHtcbiAgICAgICAgICBzdHJva2U6ICNmZmY7XG4gICAgICAgICAgc3Ryb2tlLXdpZHRoOiAycHg7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogNzc4O1xuICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiA3Nzg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyB1bmZvbGRJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06c2NhbGVZKC4wMDUpIHNjYWxlWCgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTpzY2FsZVkoLjAwNSkgc2NhbGVYKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTpzY2FsZVkoMSkgc2NhbGVYKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgdW5mb2xkT3V0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTpzY2FsZVkoMSkgc2NhbGVYKDEpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlWSguMDA1KSBzY2FsZVgoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlWSguMDA1KSBzY2FsZVgoMCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyB6b29tSW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHpvb21PdXQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsLjApO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuNyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0IHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuNyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4wKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlVXAge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKC44KSB0cmFuc2xhdGVZKDEwMDBweCk7XG4gICAgb3BhY2l0eTowO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eToxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2NhbGVEb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVZKDBweCk7XG4gICAgb3BhY2l0eToxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTpzY2FsZSguOCkgdHJhbnNsYXRlWSgxMDAwcHgpO1xuICAgIG9wYWNpdHk6MDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNjYWxlQmFjayB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKC44NSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzY2FsZUZvcndhcmQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKC44NSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcXVpY2tTY2FsZURvd24ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDEpO1xuICB9XG4gIDk5LjklIHtcbiAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDApO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVVcExhcmdlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDAlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbGlkZURvd25MYXJnZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTAwJSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCUpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgbW92ZVVwIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDE1MHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vdmVEb3duIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMTUwcHgpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYmxvd1VwQ29udGVudCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XG4gICAgb3BhY2l0eToxO1xuICB9XG4gIDk5LjklIHtcbiAgICB0cmFuc2Zvcm06c2NhbGUoMik7XG4gICAgb3BhY2l0eTowO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTpzY2FsZSgwKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsb3dVcENvbnRlbnRUd28ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDIpO1xuICAgIG9wYWNpdHk6MDtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XG4gICAgb3BhY2l0eToxO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgYmxvd1VwTW9kYWwge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsb3dVcE1vZGFsVHdvIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTpzY2FsZSgxKTtcbiAgICBvcGFjaXR5OjE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDApO1xuICAgIG9wYWNpdHk6MDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHJvYWRSdW5uZXJJbiB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTUwMHB4KSBza2V3WCgzMGRlZykgc2NhbGVYKDEuMyk7XG4gIH1cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgzMHB4KSBza2V3WCgwZGVnKSBzY2FsZVgoLjkpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDBweCkgc2tld1goMGRlZykgc2NhbGVYKDEpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgcm9hZFJ1bm5lck91dCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgwcHgpIHNrZXdYKDBkZWcpIHNjYWxlWCgxKTtcbiAgfVxuICAzMCUge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC0zMHB4KSBza2V3WCgtNWRlZykgc2NhbGVYKC45KTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgxNTAwcHgpIHNrZXdYKDMwZGVnKSBzY2FsZVgoMS4zKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrZXRjaEluIHtcblx0MCUge1xuXHRcdHN0cm9rZS1kYXNob2Zmc2V0OiA3Nzg7XG5cdH1cblx0MTAwJSB7XG5cdFx0c3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG5cdH1cbn1cblxuQGtleWZyYW1lcyBza2V0Y2hPdXQge1xuXHQwJSB7XG5cdFx0c3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG5cdH1cblx0MTAwJSB7XG5cdFx0c3Ryb2tlLWRhc2hvZmZzZXQ6IDc3ODtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIG1vZGFsRmFkZUluIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIG1vZGFsRmFkZU91dCB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtb2RhbENvbnRlbnRGYWRlSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTowO1xuICAgIHRvcDotMjBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OjE7XG4gICAgdG9wOjA7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBtb2RhbENvbnRlbnRGYWRlT3V0IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6MTtcbiAgICB0b3A6MHB4O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6MDtcbiAgICB0b3A6LTIwcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBib25kSmFtZXNCb25kIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKDEwMDBweCk7XG4gIH1cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgwcHgpO1xuICAgIGJvcmRlci1yYWRpdXM6NzVweDtcbiAgICBoZWlnaHQ6NzVweDtcbiAgICB3aWR0aDo3NXB4O1xuICB9XG4gIDkwJSB7XG4gICAgYm9yZGVyLXJhZGl1czozcHg7XG4gICAgaGVpZ2h0OjE4MnB4O1xuICAgIHdpZHRoOjI0N3B4O1xuICB9XG4gIDEwMCUge1xuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xuICAgIGhlaWdodDoxNjJweDtcbiAgICB3aWR0aDoyMjdweDtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGtpbGxTaG90IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZSgwZGVnKTtcbiAgICBvcGFjaXR5OjE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMzAwcHgpIHJvdGF0ZSg0NWRlZyk7XG4gICAgb3BhY2l0eTowO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgZmFkZVRvUmVkIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYShibGFjaywuNik7XG4gIH1cbiAgMTAwJSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKHJlZCwuOCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzbG93RmFkZSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OjE7XG4gIH1cbiAgOTkuOSUge1xuICAgIG9wYWNpdHk6MDtcbiAgICB0cmFuc2Zvcm06c2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOnNjYWxlKDApO1xuICB9XG59XG5cbi5ib3hzIHtcbiAgd2lkdGg6IDcwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlcjogMzBweCBzb2xpZCAjMGMwYjBiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbiAgYmFja2dyb3VuZDogIzBjMGIwYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLTEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMTVweCA0MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjp3aGl0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6aGlkZGVuO1xuICBtYXJnaW46IDAgMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IGluaXRpYWw7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmJ0bi0xOmFjdGl2ZXtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjpncmVlbjtcbn1cblxuLnRhYi1iYXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLnBhdHJvbl90ZXh0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xuICB0ZXh0LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjUpIDBweCAzcHggM3B4O1xufVxuXG4jY2FzaHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiN0b3VybmFtZW50e1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uYm9yZGVyYm90dG9te1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47XG59XG5cbi50YWJfY29udGVudHtcbiAgbWFyZ2luOiAxMHB4IDIwcHggMCAyMHB4O1xufVxuXG4jc2VsZWN0X29wdGlvbntcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzZweDtcbiAgYm9yZGVyLWNvbG9yOiAjMGMwYjBiO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZjZmZmYztcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMwYjBiO1xufVxuXG4jYnV5X2JsaW5ke1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAwIDAgMCAwO1xufVxuXG4uZnVsbHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjdmN2Y3O1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgKi9cbiAgY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzBiMGI7XG59XG5cbiNidXlfYmxpbmRne1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xufVxuXG4uZW1haWxfaW5wdXR7XG4gIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xufVxuXG5we1xuIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1dHRvbi1ob2xkZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAxMHB4IDUycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA1M3B4IDAgMCAxMTNweDtcbiAgbWFyZ2luLWxlZnQ6IDQwNXB4O1xufVxuXG5cbnNwYW4uZW1haWwtaWRzIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbnNwYW4uY2FuY2VsLWVtYWlsIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDklO1xuICAgIGhlaWdodDogMThweDtcbiAgICBsaW5lLWhlaWdodDogMTVweDtcbiAgICBtYXJnaW4tdG9wOiAxcHg7ICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5lbWFpbC1pZC1yb3cge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4uZW1haWwtaWQtcm93IGlucHV0IHtcbiAgICBib3JkZXI6IDA7IG91dGxpbmU6MDtcbn1cbnNwYW4udG8taW5wdXQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDExcHg7XG59XG4uZW1haWwtaWQtcm93IHtcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgLyptYXJnaW4tdG9wOiAyM3B4OyovXG59XG5cbiNsb2FkaW5nVmlldyB7XG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTAwMDsgLyogU2l0IG9uIHRvcCAqL1xuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xufVxuXG5cbiNsb2FkaW5nLXdyYXBwZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuI2xvYWRpbmctdGV4dCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGNvbG9yOiAjOTk5O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgbWFyZ2luOiAtN3B4IDAgMCAtNDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogJ1BUIFNhbnMgTmFycm93Jywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jbG9hZGluZy1jb250ZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDE3MHB4O1xuICBoZWlnaHQ6IDE3MHB4O1xuICBtYXJnaW46IC04NXB4IDAgMCAtODVweDtcbiAgYm9yZGVyOiAzcHggc29saWQgI0YwMDtcbn1cblxuI2xvYWRpbmctY29udGVudDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzBGMDtcbiAgbGVmdDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogMTVweDtcbiAgYm90dG9tOiAxNXB4O1xufVxuXG4jbG9hZGluZy1jb250ZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwRjtcbiAgbGVmdDogNXB4O1xuICByaWdodDogNXB4O1xuICB0b3A6IDVweDtcbiAgYm90dG9tOiA1cHg7XG59XG5cbiNsb2FkaW5nLWNvbnRlbnQge1xuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzRENjU4RDtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzRENjU4RDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGxvYWRlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBsb2FkZXIgMnMgbGluZWFyIGluZmluaXRlO1xufVxuXG4jbG9hZGluZy1jb250ZW50OmJlZm9yZSB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWNvbG9yOiAjRDRDQzZBO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjRDRDQzZBO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXIgM3MgbGluZWFyIGluZmluaXRlO1xuICAgIC1tb3otYW5pbWF0aW9uOiBsb2FkZXIgMnMgbGluZWFyIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGxvYWRlciAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbG9hZGVyIDNzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuI2xvYWRpbmctY29udGVudDphZnRlciB7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wLWNvbG9yOiAjODQ0MTdDO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjODQ0MTdDO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXIgMS41cyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogbG9hZGVyIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIC1tb3otYW5pbWF0aW9uOiBsb2FkZXIgMnMgbGluZWFyIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGxvYWRlciAycyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgbG9hZGVycyB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGxvYWRlciB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5cbi5mbGV4bGF5b3V0e1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mbGV4X2lucHV0e1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC8vIHBhZGRpbmc6IDEwcHggMDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDE4cHg7XG4gIC8vIG1hcmdpbi1ib3R0b206IDMwcHhcbn1cblxuLmNsb3Nlc3tcbiAgY29sb3I6IHdoaXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuXG4jc2VsZWN0X3RpbWV6b25le1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opentok_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../opentok.service */ "./src/app/opentok.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_sendmail_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/services/sendmail.service */ "./src/app/core/services/sendmail.service.ts");
/* harmony import */ var _core_services_multimail_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/multimail.service */ "./src/app/core/services/multimail.service.ts");
/* harmony import */ var _core_services_teamate_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/services/teamate.service */ "./src/app/core/services/teamate.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_8__);









var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, opentokService, authService, Sendmails, multimail, teamate) {
        this.router = router;
        this.opentokService = opentokService;
        this.authService = authService;
        this.Sendmails = Sendmails;
        this.multimail = multimail;
        this.teamate = teamate;
        this.handler = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.multimail.init();
        this.multiemail();
        this.localStripe();
        this.setDate();
    };
    HomeComponent.prototype.setDate = function () {
        var now = new Date();
        var timezone = now.getTimezoneOffset();
        if (timezone == 720) {
            // alert("GMT + 2")
        }
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var OT = this.opentokService.getOT();
        this.publisher = OT.initPublisher(this.publisherDiv.nativeElement, {
            insertMode: "append",
            width: "100%",
            height: "1000px",
        });
        this.publishers = OT.initPublisher(this.publishersDiv.nativeElement, {
            insertMode: "append",
            width: "150px",
            height: "150px",
        });
        if (this.session) {
            if (this.session["isConnected"]()) {
                this.publish();
            }
            this.session.on("sessionConnected", function () { return _this.publish(); });
        }
    };
    HomeComponent.prototype.publish = function () {
        var _this = this;
        this.session.publish(this.publisher, function (err) {
            if (err) {
                alert(err.message);
            }
            else {
                _this.publishing = true;
            }
        });
    };
    HomeComponent.prototype.create_game_info = function () {
        this.multimail.create_game_info();
        this.localTime();
    };
    HomeComponent.prototype.config_setting = function () {
        this.multimail.config_setting();
    };
    HomeComponent.prototype.cancel = function () {
        this.multimail.cancel();
    };
    HomeComponent.prototype.go_to_page = function () {
        var _this = this;
        this.multimail.go_to_page();
        setTimeout(function () {
            _this.sendmails();
        }, 5000);
    };
    // to create payment
    HomeComponent.prototype.pay = function (amount) {
        this.multimail.pay(amount);
    };
    HomeComponent.prototype.localStripe = function () {
        this.multimail.localStripe();
    };
    HomeComponent.prototype.payment_close = function () {
        this.multimail.payment_close();
    };
    //multiplaery send email
    HomeComponent.prototype.multiemail = function () {
        this.multimail.multiemail();
    };
    HomeComponent.prototype.sendmails = function () {
        // const receivermails = localStorage.getItem("mails");
        var teammatemail = localStorage.getItem("teammate");
        var teaminvite = localStorage.getItem("teaminvite");
        var opponentmail = localStorage.getItem("opponentmail");
        var opponentTeamate = localStorage.getItem("opponentTeammate");
        var shareurl = location.href;
        this.Sendmails.sendMail(teammatemail, teaminvite, opponentmail, opponentTeamate, shareurl);
    };
    HomeComponent.prototype.localTime = function () {
        this.multimail.localTime();
    };
    HomeComponent.prototype.focus = function () {
        this.teamate.focus();
    };
    HomeComponent.prototype.focusout = function () {
        this.teamate.focusout();
    };
    HomeComponent.prototype.onefocusout = function () {
        var teamatemail = jquery__WEBPACK_IMPORTED_MODULE_8__("#teamate").val();
        if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(teamatemail)) {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#teaminvite").attr("disabled", false);
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#teaminvite").attr("disabled", true);
            jquery__WEBPACK_IMPORTED_MODULE_8__("#teaminvite").val("Input correctly in Teamate!");
            jquery__WEBPACK_IMPORTED_MODULE_8__("#teamate").val("invailed");
            jquery__WEBPACK_IMPORTED_MODULE_8__("#teamate").css({ borderColor: "red", color: "red" });
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#teamate").css({ borderColor: "white", color: "white" });
                jquery__WEBPACK_IMPORTED_MODULE_8__("#teamate").val("");
                jquery__WEBPACK_IMPORTED_MODULE_8__("#teaminvite").val("");
            }, 2000);
        }
    };
    HomeComponent.prototype.twofocusout = function () {
        var opponentmail = jquery__WEBPACK_IMPORTED_MODULE_8__("#opponent").val();
        if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(opponentmail)) {
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#opponent").val("invalid");
            jquery__WEBPACK_IMPORTED_MODULE_8__("#opponent").css({ borderColor: "red", color: "red" });
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#opponent").css({ borderColor: "white", color: "white" });
                jquery__WEBPACK_IMPORTED_MODULE_8__("#opponent").val("");
            }, 2000);
        }
    };
    HomeComponent.prototype.threefocusout = function () {
        var opponentTeamate = jquery__WEBPACK_IMPORTED_MODULE_8__("#opponentTeamate").val();
        if (/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(opponentTeamate)) {
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_8__("#opponentTeamate").val("invalid");
            jquery__WEBPACK_IMPORTED_MODULE_8__("#opponentTeamate").css({ borderColor: "red", color: "red" });
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_8__("#opponentTeamate").css({ borderColor: "white", color: "white" });
                jquery__WEBPACK_IMPORTED_MODULE_8__("#opponentTeamate").val("");
            }, 2000);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("publisherDiv"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "publisherDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("publishersDiv"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "publishersDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", OT.Session)
    ], HomeComponent.prototype, "session", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home-page",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _opentok_service__WEBPACK_IMPORTED_MODULE_2__["OpentokService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _core_services_sendmail_service__WEBPACK_IMPORTED_MODULE_5__["SendmailService"],
            _core_services_multimail_service__WEBPACK_IMPORTED_MODULE_6__["MultimailService"],
            _core_services_teamate_service__WEBPACK_IMPORTED_MODULE_7__["TeamateService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-auth-resolver.service */ "./src/app/home/home-auth-resolver.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _teamate_teamate_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./teamate/teamate.component */ "./src/app/home/teamate/teamate.component.ts");








var config = { url: "http://localhost:4000", options: {} };
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomeRoutingModule"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_6__["SocketIoModule"].forRoot(config)],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
                _teamate_teamate_component__WEBPACK_IMPORTED_MODULE_7__["TeamateComponent"]
            ],
            providers: [_home_auth_resolver_service__WEBPACK_IMPORTED_MODULE_3__["HomeAuthResolver"]],
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/teamate/teamate.component.css":
/*!****************************************************!*\
  !*** ./src/app/home/teamate/teamate.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".focus{\r\n  width: 300px;\r\n  height: 200px;\r\n  background-color: #0c0b0b;\r\n  position: absolute;\r\n  display: none;\r\n  border-radius: 12px;\r\n  color: white;\r\n  border:0.1px dotted white;\r\n}\r\n\r\nh3{\r\n  text-align: center;\r\n  padding: 20px;\r\n}\r\n\r\ntextarea{\r\n  background-color: transparent;\r\n  border-style: dotted;\r\n  width: 90%;\r\n  height: 96px;\r\n  margin: 0 0 0 17px;\r\n}\r\n\r\n::-webkit-scrollbar{\r\n  width: 7px;\r\n}\r\n\r\n::-webkit-scrollbar-button{\r\n  border-radius: 10px;\r\n  background: white;\r\n  box-shadow: inset 0 0 6px rgba(0,0,0,0.5);\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\nbox-shadow: inset 0 0 10px white;\r\nborder-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS90ZWFtYXRlL3RlYW1hdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIseUNBQXlDO0FBQzNDOztBQUVBO0FBQ0EsZ0NBQWdDO0FBQ2hDLG1CQUFtQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGVhbWF0ZS90ZWFtYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9jdXN7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjMGIwYjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6MC4xcHggZG90dGVkIHdoaXRlO1xyXG59XHJcblxyXG5oM3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgbWFyZ2luOiAwIDAgMCAxN3B4O1xyXG59XHJcblxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhcntcclxuICB3aWR0aDogN3B4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbntcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjUpO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuYm94LXNoYWRvdzogaW5zZXQgMCAwIDEwcHggd2hpdGU7XHJcbmJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/teamate/teamate.component.html":
/*!*****************************************************!*\
  !*** ./src/app/home/teamate/teamate.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"focus\" (click) = \"display()\" >\n <h3>Teammate Invitation</h3>\n <textarea id=\"teaminvite\"></textarea>\n</div>\n"

/***/ }),

/***/ "./src/app/home/teamate/teamate.component.ts":
/*!***************************************************!*\
  !*** ./src/app/home/teamate/teamate.component.ts ***!
  \***************************************************/
/*! exports provided: TeamateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamateComponent", function() { return TeamateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamateComponent = /** @class */ (function () {
    function TeamateComponent() {
    }
    TeamateComponent.prototype.ngOnInit = function () {
    };
    TeamateComponent.prototype.display = function () {
    };
    TeamateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teamate',
            template: __webpack_require__(/*! ./teamate.component.html */ "./src/app/home/teamate/teamate.component.html"),
            styles: [__webpack_require__(/*! ./teamate.component.css */ "./src/app/home/teamate/teamate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamateComponent);
    return TeamateComponent;
}());



/***/ }),

/***/ "./src/app/opentok.service.ts":
/*!************************************!*\
  !*** ./src/app/opentok.service.ts ***!
  \************************************/
/*! exports provided: OpentokService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpentokService", function() { return OpentokService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @opentok/client */ "./node_modules/@opentok/client/dist/js/opentok.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opentok_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config */ "./src/app/config.ts");




var OpentokService = /** @class */ (function () {
    function OpentokService() {
    }
    OpentokService.prototype.getOT = function () {
        return _opentok_client__WEBPACK_IMPORTED_MODULE_2__;
    };
    OpentokService.prototype.initSession = function () {
        var _this = this;
        if (_config__WEBPACK_IMPORTED_MODULE_3__["default"].API_KEY && _config__WEBPACK_IMPORTED_MODULE_3__["default"].TOKEN && _config__WEBPACK_IMPORTED_MODULE_3__["default"].SESSION_ID) {
            this.session = this.getOT().initSession(_config__WEBPACK_IMPORTED_MODULE_3__["default"].API_KEY, _config__WEBPACK_IMPORTED_MODULE_3__["default"].SESSION_ID);
            this.token = _config__WEBPACK_IMPORTED_MODULE_3__["default"].TOKEN;
            return Promise.resolve(this.session);
        }
        else {
            return fetch(_config__WEBPACK_IMPORTED_MODULE_3__["default"].SAMPLE_SERVER_BASE_URL + '/session')
                .then(function (data) { return data.json(); })
                .then(function (json) {
                _this.session = _this.getOT().initSession(json.apiKey, json.sessionId);
                _this.token = json.token;
                console.log("this.session", _this.session);
                return _this.session;
            });
        }
    };
    OpentokService.prototype.connect = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.session.connect(_this.token, function (err) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(_this.session);
                }
            });
        });
    };
    OpentokService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OpentokService);
    return OpentokService;
}());



/***/ }),

/***/ "./src/app/shared/article-helpers/article-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-list.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-link {\n  cursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FydGljbGUtaGVscGVycy9hcnRpY2xlLWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYXJ0aWNsZS1oZWxwZXJzL2FydGljbGUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/article-helpers/article-list.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-list.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article-preview\n  *ngFor=\"let article of results\"\n  [article]=\"article\">\n</app-article-preview>\n\n<div class=\"app-article-preview\"\n  [hidden]=\"!loading\">\n  Loading articles...\n</div>\n\n<div class=\"app-article-preview\"\n  [hidden]=\"loading || results.length\">\n  No articles are here... yet.\n</div>\n\n<nav [hidden]=\"loading || totalPages.length <= 1\">\n  <ul class=\"pagination\">\n\n    <li class=\"page-item\"\n      [ngClass]=\"{'active': pageNumber === currentPage}\"\n      *ngFor=\"let pageNumber of totalPages\"\n      (click)=\"setPageTo(pageNumber)\">\n\n      <a class=\"page-link\" >{{ pageNumber }}</a>\n\n    </li>\n\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/article-helpers/article-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-list.component.ts ***!
  \******************************************************************/
/*! exports provided: ArticleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return ArticleListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");



var ArticleListComponent = /** @class */ (function () {
    function ArticleListComponent(articlesService) {
        this.articlesService = articlesService;
        this.loading = false;
        this.currentPage = 1;
        this.totalPages = [1];
    }
    Object.defineProperty(ArticleListComponent.prototype, "config", {
        set: function (config) {
            if (config) {
                this.query = config;
                this.currentPage = 1;
                this.runQuery();
            }
        },
        enumerable: true,
        configurable: true
    });
    ArticleListComponent.prototype.setPageTo = function (pageNumber) {
        this.currentPage = pageNumber;
        this.runQuery();
    };
    ArticleListComponent.prototype.runQuery = function () {
        var _this = this;
        this.loading = true;
        this.results = [];
        // Create limit and offset filter (if necessary)
        if (this.limit) {
            this.query.filters.limit = this.limit;
            this.query.filters.offset = (this.limit * (this.currentPage - 1));
        }
        this.articlesService.query(this.query)
            .subscribe(function (data) {
            _this.loading = false;
            _this.results = data.articles;
            // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
            _this.totalPages = Array.from(new Array(Math.ceil(data.articlesCount / _this.limit)), function (val, index) { return index + 1; });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ArticleListComponent.prototype, "limit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ArticleListComponent.prototype, "config", null);
    ArticleListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-list',
            template: __webpack_require__(/*! ./article-list.component.html */ "./src/app/shared/article-helpers/article-list.component.html"),
            styles: [__webpack_require__(/*! ./article-list.component.css */ "./src/app/shared/article-helpers/article-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["ArticlesService"]])
    ], ArticleListComponent);
    return ArticleListComponent;
}());



/***/ }),

/***/ "./src/app/shared/article-helpers/article-meta.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-meta.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-meta\">\n  <a [routerLink]=\"['/profile', article.author.username]\">\n    <img [src]=\"article.author.image\" />\n  </a>\n\n  <div class=\"info\">\n    <a class=\"author\"\n      [routerLink]=\"['/profile', article.author.username]\">\n      {{ article.author.username }}\n    </a>\n    <span class=\"date\">\n      {{ article.createdAt | date: 'longDate' }}\n    </span>\n  </div>\n\n  <ng-content></ng-content>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/article-helpers/article-meta.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-meta.component.ts ***!
  \******************************************************************/
/*! exports provided: ArticleMetaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return ArticleMetaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticleMetaComponent = /** @class */ (function () {
    function ArticleMetaComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticleMetaComponent.prototype, "article", void 0);
    ArticleMetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-meta',
            template: __webpack_require__(/*! ./article-meta.component.html */ "./src/app/shared/article-helpers/article-meta.component.html")
        })
    ], ArticleMetaComponent);
    return ArticleMetaComponent;
}());



/***/ }),

/***/ "./src/app/shared/article-helpers/article-preview.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-preview.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"article-preview\">\n  <app-article-meta [article]=\"article\">\n    <app-favorite-button\n      [article]=\"article\"\n      (toggle)=\"onToggleFavorite($event)\"\n      class=\"pull-xs-right\">\n      {{article.favoritesCount}}\n    </app-favorite-button>\n  </app-article-meta>\n\n  <a [routerLink]=\"['/article', article.slug]\" class=\"preview-link\">\n    <h1>{{ article.title }}</h1>\n    <p>{{ article.description }}</p>\n    <span>Read more...</span>\n    <ul class=\"tag-list\">\n      <li class=\"tag-default tag-pill tag-outline\"\n        *ngFor=\"let tag of article.tagList\">\n        {{ tag }}\n      </li>\n    </ul>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/article-helpers/article-preview.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/article-helpers/article-preview.component.ts ***!
  \*********************************************************************/
/*! exports provided: ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return ArticlePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticlePreviewComponent = /** @class */ (function () {
    function ArticlePreviewComponent() {
    }
    ArticlePreviewComponent.prototype.onToggleFavorite = function (favorited) {
        this.article['favorited'] = favorited;
        if (favorited) {
            this.article['favoritesCount']++;
        }
        else {
            this.article['favoritesCount']--;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ArticlePreviewComponent.prototype, "article", void 0);
    ArticlePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-article-preview',
            template: __webpack_require__(/*! ./article-preview.component.html */ "./src/app/shared/article-helpers/article-preview.component.html")
        })
    ], ArticlePreviewComponent);
    return ArticlePreviewComponent;
}());



/***/ }),

/***/ "./src/app/shared/article-helpers/index.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/article-helpers/index.ts ***!
  \*************************************************/
/*! exports provided: ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-list.component */ "./src/app/shared/article-helpers/article-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return _article_list_component__WEBPACK_IMPORTED_MODULE_0__["ArticleListComponent"]; });

/* harmony import */ var _article_meta_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article-meta.component */ "./src/app/shared/article-helpers/article-meta.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return _article_meta_component__WEBPACK_IMPORTED_MODULE_1__["ArticleMetaComponent"]; });

/* harmony import */ var _article_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-preview.component */ "./src/app/shared/article-helpers/article-preview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return _article_preview_component__WEBPACK_IMPORTED_MODULE_2__["ArticlePreviewComponent"]; });






/***/ }),

/***/ "./src/app/shared/buttons/favorite-button.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/buttons/favorite-button.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-sm\"\n [ngClass]=\"{ 'disabled' : isSubmitting,\n              'btn-outline-primary': !article.favorited,\n              'btn-primary': article.favorited }\"\n (click)=\"toggleFavorite()\">\n  <i class=\"ion-heart\"></i> <ng-content></ng-content>\n</button>\n"

/***/ }),

/***/ "./src/app/shared/buttons/favorite-button.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/buttons/favorite-button.component.ts ***!
  \*************************************************************/
/*! exports provided: FavoriteButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function() { return FavoriteButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var FavoriteButtonComponent = /** @class */ (function () {
    function FavoriteButtonComponent(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSubmitting = false;
    }
    FavoriteButtonComponent.prototype.toggleFavorite = function () {
        var _this = this;
        this.isSubmitting = true;
        this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
            // Favorite the article if it isn't favorited yet
            if (!_this.article.favorited) {
                return _this.articlesService.favorite(_this.article.slug)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; }));
                // Otherwise, unfavorite the article
            }
            else {
                return _this.articlesService.unfavorite(_this.article.slug)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; }));
            }
        })).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavoriteButtonComponent.prototype, "article", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FavoriteButtonComponent.prototype, "toggle", void 0);
    FavoriteButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite-button',
            template: __webpack_require__(/*! ./favorite-button.component.html */ "./src/app/shared/buttons/favorite-button.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], FavoriteButtonComponent);
    return FavoriteButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/buttons/follow-button.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/buttons/follow-button.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\n  class=\"btn btn-sm action-btn\"\n  [ngClass]=\"{ 'disabled': isSubmitting,\n               'btn-outline-secondary': !profile.following,\n               'btn-secondary': profile.following }\"\n  (click)=\"toggleFollowing()\">\n  <i class=\"ion-plus-round\"></i>\n  &nbsp;\n  {{ profile.following ? 'Unfollow' : 'Follow' }} {{ profile.username }}\n</button>\n"

/***/ }),

/***/ "./src/app/shared/buttons/follow-button.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/buttons/follow-button.component.ts ***!
  \***********************************************************/
/*! exports provided: FollowButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function() { return FollowButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var FollowButtonComponent = /** @class */ (function () {
    function FollowButtonComponent(profilesService, router, userService) {
        this.profilesService = profilesService;
        this.router = router;
        this.userService = userService;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isSubmitting = false;
    }
    FollowButtonComponent.prototype.toggleFollowing = function () {
        var _this = this;
        this.isSubmitting = true;
        // TODO: remove nested subscribes, use mergeMap
        this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (authenticated) {
            // Not authenticated? Push to login screen
            if (!authenticated) {
                _this.router.navigateByUrl('/login');
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(null);
            }
            // Follow this profile if we aren't already
            if (!_this.profile.following) {
                return _this.profilesService.follow(_this.profile.username)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(true);
                }, function (err) { return _this.isSubmitting = false; }));
                // Otherwise, unfollow this profile
            }
            else {
                return _this.profilesService.unfollow(_this.profile.username)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
                    _this.isSubmitting = false;
                    _this.toggle.emit(false);
                }, function (err) { return _this.isSubmitting = false; }));
            }
        })).subscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FollowButtonComponent.prototype, "profile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FollowButtonComponent.prototype, "toggle", void 0);
    FollowButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-follow-button',
            template: __webpack_require__(/*! ./follow-button.component.html */ "./src/app/shared/buttons/follow-button.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["ProfilesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], FollowButtonComponent);
    return FollowButtonComponent;
}());



/***/ }),

/***/ "./src/app/shared/buttons/index.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/buttons/index.ts ***!
  \*****************************************/
/*! exports provided: FavoriteButtonComponent, FollowButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorite-button.component */ "./src/app/shared/buttons/favorite-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function() { return _favorite_button_component__WEBPACK_IMPORTED_MODULE_0__["FavoriteButtonComponent"]; });

/* harmony import */ var _follow_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./follow-button.component */ "./src/app/shared/buttons/follow-button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function() { return _follow_button_component__WEBPACK_IMPORTED_MODULE_1__["FollowButtonComponent"]; });





/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: ArticleListComponent, ArticleMetaComponent, ArticlePreviewComponent, ListErrorsComponent, SharedModule, ShowAuthedDirective, FavoriteButtonComponent, FollowButtonComponent, FooterComponent, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _article_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article-helpers */ "./src/app/shared/article-helpers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleListComponent", function() { return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticleListComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticleMetaComponent", function() { return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticleMetaComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArticlePreviewComponent", function() { return _article_helpers__WEBPACK_IMPORTED_MODULE_0__["ArticlePreviewComponent"]; });

/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/app/shared/buttons/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FavoriteButtonComponent", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["FavoriteButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FollowButtonComponent", function() { return _buttons__WEBPACK_IMPORTED_MODULE_1__["FollowButtonComponent"]; });

/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/app/shared/layout/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _layout__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]; });

/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-errors.component */ "./src/app/shared/list-errors.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return _list_errors_component__WEBPACK_IMPORTED_MODULE_3__["ListErrorsComponent"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]; });

/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show-authed.directive */ "./src/app/shared/show-authed.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowAuthedDirective", function() { return _show_authed_directive__WEBPACK_IMPORTED_MODULE_5__["ShowAuthedDirective"]; });









/***/ }),

/***/ "./src/app/shared/layout/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"jss2\" style=\"background-color: rgb(238, 238, 238); color: rgb(68, 68, 68);margin-top: auto;\">\n    <div class=\"jss1\">\n      <div class=\"MuiContainer-root about MuiContainer-maxWidthSm\">\n        <h5 class=\"MuiTypography-root MuiTypography-h5 patron_text\">\n          This is a solo-creative project stemming from the shelter-in-place directives. Would love any feedback or\n          suggestions. If you feel like helping to support the infrastructure costs, I would greatly appreciate any\n          donations. Please enjoy!\n        </h5>\n        <hr>\n        <div class=\"row height-adjust\">\n            <div class=\"col-md-4\">\n              <div class=\"sendfeedback hover\">&nbsp;&nbsp;send feedback</div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"Partron hover\">Become to patron</div>\n            </div>\n            <div class=\"col-md-4 last\">\n              <div class=\"spade hover\">&nbsp;&nbsp;Twitter#Space</div>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/shared/layout/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jss2 {\n  height: 100vh;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  flex-direction: column; }\n\n.jss1 {\n  display: flex;\n  overflow: scroll;\n  min-height: 100vh;\n  flex-direction: column; }\n\n.MuiContainer-maxWidthSm {\n  max-width: 600px; }\n\n.MuiContainer-root {\n  padding-left: 24px;\n  padding-right: 24px; }\n\n.MuiContainer-root {\n  width: 100%;\n  display: block;\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 16px;\n  padding-right: 16px; }\n\n.about {\n  z-index: 1;\n  flex-direction: column;\n  display: flex !important;\n  height: 100%;\n  align-items: flex-start;\n  padding-top: 10%; }\n\n.MuiTypography-h5 {\n  font-size: 1.5rem;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  font-weight: 400;\n  line-height: 1.334;\n  letter-spacing: 0em; }\n\n.MuiTypography-root {\n  margin: 0; }\n\nh5 {\n  display: block;\n  font-size: 0.83em;\n  -webkit-margin-before: 1.67em;\n          margin-block-start: 1.67em;\n  -webkit-margin-after: 1.67em;\n          margin-block-end: 1.67em;\n  -webkit-margin-start: 0px;\n          margin-inline-start: 0px;\n  -webkit-margin-end: 0px;\n          margin-inline-end: 0px;\n  font-weight: bold; }\n\n.feedback {\n  bottom: 0;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 6rem; }\n\n.about .feedback a,\n.about .feedback iframe {\n  margin: 0 1rem; }\n\n.MuiLink-underlineHover {\n  text-decoration: none; }\n\n.MuiTypography-colorPrimary {\n  color: #32a86f; }\n\n.hover {\n  font-size: smaller;\n  padding: 10px 10px 10px 10px;\n  text-align: center;\n  color: #000;\n  text-transform: uppercase;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  cursor: pointer;\n  display: inline-block;\n  /* min-width: 70%; */ }\n\n.hover {\n  background-color: transparent;\n  border: 3px solid #00d7c3;\n  border-radius: 50px;\n  transition: all .15s ease-in-out;\n  color: #00d7c3; }\n\n.hover:hover {\n  box-shadow: 0 0 10px 0 #00d7c3 inset, 0 0 20px 2px #00d7c3;\n  border: 3px solid #00d7c3; }\n\n.height-adjust {\n  margin-top: 100px;\n  text-align: -webkit-center; }\n\n@media only screen and (max-width: 380px) {\n  .height-adjust .last {\n    margin-left: 18%; } }\n\n.Partron {\n  background-color: #00d7c3;\n  border-color: #00d7c3;\n  color: white; }\n\n.patron_text {\n  background-color: #424032;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  text-shadow: rgba(255, 255, 255, 0.5) 0px 3px 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9GOlxcUHJvZ3JhbUxpc3RcXDExc3BhZGUtZ2FtZTExXFxzcGFkZSBnYW1lL3NyY1xcYXBwXFxzaGFyZWRcXGxheW91dFxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGlCQUFpQjtFQUNqQix1REFBdUQ7RUFDdkQsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxTQUFTLEVBQUE7O0FBR1g7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDZCQUEwQjtVQUExQiwwQkFBMEI7RUFDMUIsNEJBQXdCO1VBQXhCLHdCQUF3QjtFQUN4Qix5QkFBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLHVCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBR2Q7O0VBRUUsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixvQkFBQSxFQUFxQjs7QUFHdkI7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUVuQixnQ0FBZ0M7RUFDaEMsY0FBYyxFQUFBOztBQUVoQjtFQUNFLDBEQUEwRDtFQUMxRCx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQSxFQUNqQjs7QUFHSDtFQUNJLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWSxFQUFBOztBQUdoQjtFQUNFLHlCQUF5QjtFQUN6Qiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsaURBQThDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qc3MyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmpzczEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uTXVpQ29udGFpbmVyLW1heFdpZHRoU20ge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5NdWlDb250YWluZXItcm9vdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5NdWlDb250YWluZXItcm9vdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5hYm91dCB7XHJcbiAgei1pbmRleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5cclxuLk11aVR5cG9ncmFwaHktaDUge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS4zMzQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxufVxyXG5cclxuLk11aVR5cG9ncmFwaHktcm9vdCB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oNSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAwLjgzZW07XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAxLjY3ZW07XHJcbiAgbWFyZ2luLWJsb2NrLWVuZDogMS42N2VtO1xyXG4gIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDBweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZmVlZGJhY2sge1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGhlaWdodDogNnJlbTtcclxufVxyXG5cclxuLmFib3V0IC5mZWVkYmFjayBhLFxyXG4uYWJvdXQgLmZlZWRiYWNrIGlmcmFtZSB7XHJcbiAgbWFyZ2luOiAwIDFyZW07XHJcbn1cclxuXHJcbi5NdWlMaW5rLXVuZGVybGluZUhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5NdWlUeXBvZ3JhcGh5LWNvbG9yUHJpbWFyeSB7XHJcbiAgY29sb3I6ICMzMmE4NmY7XHJcbn1cclxuXHJcbi5ob3ZlciB7XHJcbiAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIC8qIG1pbi13aWR0aDogNzAlOyAqL1xyXG59XHJcblxyXG4uaG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwMGQ3YzM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMTVzIGVhc2UtaW4tb3V0O1xyXG4gIGNvbG9yOiAjMDBkN2MzO1xyXG59XHJcbi5ob3Zlcjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjMDBkN2MzIGluc2V0LCAwIDAgMjBweCAycHggIzAwZDdjMztcclxuICBib3JkZXI6IDNweCBzb2xpZCAjMDBkN2MzO1xyXG59XHJcblxyXG4uaGVpZ2h0LWFkanVzdHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgLmhlaWdodC1hZGp1c3QgLmxhc3Qge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4JTtcclxuICB9XHJcbn1cclxuXHJcbi5QYXJ0cm9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDdjMztcclxuICAgIGJvcmRlci1jb2xvcjogIzAwZDdjMztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnBhdHJvbl90ZXh0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjQwMzI7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB0ZXh0LXNoYWRvdzogcmdiYSgyNTUsMjU1LDI1NSwwLjUpIDBweCAzcHggM3B4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/layout/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.today = Date.now();
        // console.log("");
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/layout/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/layout/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n  <ul class=\"block-menu\">\n    <li><a (click)=\"sideslide()\" class=\"three-d\">\n        <i class=\"fas fa-bars\" style=\"color: white;\"></i>\n        <span aria-hidden=\"true\" class=\"three-d-box\">\n          <span class=\"front\"><i class=\"fas fa-bars\" style=\"color: white;\"></i></span>\n          <span class=\"back\"><i class=\"fas fa-bars\" style=\"color: white;\"></i></span>\n        </span>\n      </a></li>\n    <li>\n      <a class=\"three-d\">\n        SPADE GAME\n        <span aria-hidden=\"true\" class=\"three-d-box\">\n          <span class=\"front\">SPADE GAME</span>\n          <span class=\"back\">SPADE GAME</span>\n        </span>\n      </a>\n    </li>\n\n    <li class=\"pull-xs-right\" *appShowAuthed=\"false\">\n      <a class=\"three-d\" routerLink=\"/login\">\n        <i class=\"ion-person\"></i>\n        <span aria-hidden=\"true\" class=\"three-d-box\">\n          <span class=\"front\"><i class=\"fas fa-sign-in-alt\"></i></span>\n          <span class=\"back\"><i class=\"ion-person\"></i></span>\n        </span>\n      </a>\n    </li>\n\n    <li class=\"pull-xs-right\" *appShowAuthed=\"false\">\n      <a class=\"three-d\" (click)=\"config_setting()\">\n        <i class=\"ion-gear-a\"></i>\n        <span aria-hidden=\"true\" class=\"three-d-box\">\n          <span class=\"front\"><i class=\"ion-gear-a\"></i></span>\n          <span class=\"back\"><i class=\"ion-gear-a\"></i></span>\n        </span>\n      </a>\n    </li>\n\n    <li class=\"pull-xs-right\" *appShowAuthed=\"false\"><a class=\"three-d\">\n        <i class=\"ion-arrow-expand\" id=\"data-toggle\" data-toggle-fullscreen></i>\n        <span aria-hidden=\"true\" class=\"three-d-box\">\n          <span class=\"front\"><i class=\"ion-arrow-expand\" id=\"data-toggle\" data-toggle-fullscreen></i></span>\n          <span class=\"back\"><i class=\"ion-arrow-expand\" id=\"data-toggle\" data-toggle-fullscreen></i></span>\n        </span>\n      </a>\n    </li>\n\n    <li class=\"pull-xs-right\" *appShowAuthed=\"false\"><a class=\"three-d\">\n        Help support us!\n        <span aria-hidden=\"true\" class=\"three-d-box\">\n          <span class=\"front\">Help support us!</span>\n          <span class=\"back\">Help support us!</span>\n        </span>\n      </a>\n    </li>\n\n    <li class=\"pull-xs-right\" *appShowAuthed=\"true\" (click)=\"signOut()\">\n      <a class=\"three-d\">\n        ss\n        <span aria-hidden=\"true\" class=\"three-d-box\">\n          <span class=\"front\" id=\"currentuser\"><i class=\"ion-person\"></i></span>\n          <span class=\"back\"><i class=\"fas fa-sign-out-alt\"></i></span>\n        </span>\n      </a>\n    </li>\n\n\n    <li class=\"pull-xs-right nav-item\" *appShowAuthed=\"true\">\n      <a class=\"three-d\">\n        <i class=\"ion-arrow-expand\" id=\"data-toggle\" data-toggle-fullscreen></i>\n        <span aria-hidden=\"true\" class=\"three-d-box\">\n          <span class=\"front\"><i class=\"ion-arrow-expand\" id=\"data-toggle\" data-toggle-fullscreen></i></span>\n          <span class=\"back\"><i class=\"ion-arrow-expand\" id=\"data-toggle\" data-toggle-fullscreen></i></span>\n        </span>\n      </a>\n    </li>\n\n\n    <li class=\"pull-xs-right nav-item\" (click)=\"config_setting()\" *appShowAuthed=\"true\">\n      <a class=\"three-d\" (click)=\"config_setting()\">\n        <i class=\"ion-gear-a\"></i>\n        <span aria-hidden=\"true\" class=\"three-d-box\">\n          <span class=\"front\"><i class=\"ion-gear-a\"></i></span>\n          <span class=\"back\"><i class=\"ion-gear-a\"></i></span>\n        </span>\n      </a>\n    </li>\n\n\n  </ul>\n  <div id=\"Sidenav\" class=\"sidenav\">\n    <p class=\"navText\">Spade Game</p>\n    <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">\n      <i class=\"fas fa-angle-left\"></i>\n    </a>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/shared/layout/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/layout/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\n  background-color: black !important;\n  height: 82px;\n  color: white; }\n\n.navbar-brand {\n  color: aliceblue !important; }\n\n.nav-link {\n  color: white;\n  font-family: -webkit-body; }\n\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content */\n\n.modal-content {\n  background-color: #fefefe;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%; }\n\n/* The Close Button */\n\n.close {\n  color: #aaaaaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer; }\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px; }\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s; }\n\n.sidenav a:hover {\n  color: #f1f1f1; }\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 16px;\n  margin-left: 50px; }\n\n.sidenav .navText {\n  position: absolute;\n  top: 4px;\n  right: 92px;\n  font-size: 20px;\n  margin-left: 10px;\n  font-family: initial; }\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px; }\n  .sidenav a {\n    font-size: 18px; } }\n\n.patron_text {\n  background-color: #424032;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  text-shadow: rgba(255, 255, 255, 0.5) 0px 3px 3px; }\n\n/* basic menu styles */\n\n.block-menu {\n  display: block;\n  background: #000;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 10vh; }\n\n.block-menu li {\n  display: inline-block;\n  margin-top: 2vh; }\n\n.block-menu li a {\n  color: #fff;\n  display: block;\n  text-decoration: none;\n  font-family: 'Passion One', Arial, sans-serif;\n  text-transform: uppercase;\n  overflow: visible;\n  line-height: 20px;\n  font-size: 24px;\n  padding: 15px 10px; }\n\n/* animation domination */\n\n.three-d {\n  perspective: 200px;\n  transition: all .07s linear;\n  position: relative;\n  cursor: pointer; }\n\n/* complete the animation! */\n\n.three-d:hover .three-d-box,\n.three-d:focus .three-d-box {\n  transform: translateZ(-25px) rotateX(90deg); }\n\n.three-d-box {\n  transition: all .3s ease-out;\n  transform: translatez(-25px);\n  transform-style: preserve-3d;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 100%;\n  height: 100%; }\n\n/*\r\n\tput the \"front\" and \"back\" elements into place with CSS transforms,\r\n\tspecifically translation and translatez\r\n*/\n\n.front {\n  transform: rotatex(0deg) translatez(25px); }\n\n.back {\n  transform: rotatex(-90deg) translatez(25px);\n  color: #ffe7c4; }\n\n.front, .back {\n  display: block;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: black;\n  padding: 15px 10px;\n  color: white;\n  pointer-events: none;\n  box-sizing: border-box; }\n\n.avatar-circle {\n  width: 30px;\n  height: 30px;\n  background-color: black;\n  border: 1px solid white;\n  text-align: center;\n  border-radius: 50%;\n  -webkit-border-radius: 50%;\n  -moz-border-radius: 50%;\n  margin-top: -4px; }\n\n.initials {\n  position: relative;\n  top: 0px;\n  /* 25% of parent */\n  font-size: 15px;\n  /* 50% of parent */\n  line-height: 30px;\n  /* 50% of parent */\n  color: white;\n  font-family: cursive;\n  font-weight: bold; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dC9GOlxcUHJvZ3JhbUxpc3RcXDExc3BhZGUtZ2FtZTExXFxzcGFkZSBnYW1lL3NyY1xcYXBwXFxzaGFyZWRcXGxheW91dFxcaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbGF5b3V0L2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGFBQWE7RUFDYixzQkFBQTtFQUNBLGVBQWU7RUFDZixrQkFBQTtFQUNBLFVBQVU7RUFDVixlQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLHdCQUFBO0VBQ0EsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsZUFBQTtFQUNBLFlBQVk7RUFDWixnQkFBQTtFQUNBLGNBQWM7RUFDZCw0QkFBQTtFQUNBLHVCQUE4QjtFQUM5QixtQkFBQTtFQUNBLG9DQUFvQztFQUNwQyxxQkFBQSxFQUFzQjs7QUFHeEIsa0JBQUE7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVSxFQUFBOztBQUdaLHFCQUFBOztBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR25COztFQUVFLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUlqQjtFQUNFLFlBQVk7RUFDWixRQUFRO0VBQ1IsZUFBZTtFQUNmLFVBQVU7RUFDVixNQUFNO0VBQ04sT0FBTztFQUNQLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNFO0lBQVUsaUJBQWlCLEVBQUE7RUFDM0I7SUFBWSxlQUFlLEVBQUEsRUFBRzs7QUFHaEM7RUFDRSx5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGlEQUE4QyxFQUFBOztBQUloRCxzQkFBQTs7QUFDQTtFQUNDLGNBQWM7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVksRUFBQTs7QUFHZDtFQUNFLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0MsV0FBVztFQUNYLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsNkNBQTZDO0VBRTdDLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHbkIseUJBQUE7O0FBQ0E7RUFDQyxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRWYsNEJBQUE7O0FBQ0E7O0VBRUMsMkNBQTJDLEVBQUE7O0FBRzdDO0VBQ0MsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1Qiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdiOzs7Q0NqQkM7O0FEcUJEO0VBQ0MseUNBQXlDLEVBQUE7O0FBRzFDO0VBQ0MsMkNBQTJDO0VBQzNDLGNBQWMsRUFBQTs7QUFHZjtFQUNDLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixzQkFBc0IsRUFBQTs7QUFLdkI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix1QkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBOztBQUlsQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQUUsa0JBQUE7RUFDVixlQUFlO0VBQUUsa0JBQUE7RUFDakIsaUJBQWlCO0VBQUUsa0JBQUE7RUFDbkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sYXlvdXQvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDgycHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5ke1xyXG4gIGNvbG9yOiBhbGljZWJsdWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5hdi1saW5re1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogLXdlYmtpdC1ib2R5O1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIC8qIEVuYWJsZSBzY3JvbGwgaWYgbmVlZGVkICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gIC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLyogTW9kYWwgQ29udGVudCAqL1xyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICBjb2xvcjogI2FhYWFhYTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5zaWRlbmF2IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogMC41cztcclxuICBwYWRkaW5nLXRvcDogNjBweDtcclxufVxyXG5cclxuLnNpZGVuYXYgYSB7XHJcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiAjODE4MTgxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG59XHJcblxyXG4uc2lkZW5hdiAuY2xvc2VidG4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAubmF2VGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDRweDtcclxuICAgIHJpZ2h0OiA5MnB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogaW5pdGlhbDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cclxuICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxyXG59XHJcblxyXG4ucGF0cm9uX3RleHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDAzMjtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtbW96LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtc2hhZG93OiByZ2JhKDI1NSwyNTUsMjU1LDAuNSkgMHB4IDNweCAzcHg7XHJcbn1cclxuXHJcblxyXG4vKiBiYXNpYyBtZW51IHN0eWxlcyAqL1xyXG4uYmxvY2stbWVudSB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogIzAwMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgaGVpZ2h0OiAxMHZoO1xyXG59XHJcblxyXG4uYmxvY2stbWVudSBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxufVxyXG5cclxuLmJsb2NrLW1lbnUgbGkgYSB7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGZvbnQtZmFtaWx5OiAnUGFzc2lvbiBPbmUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuXHQvLyBmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRvdmVyZmxvdzogdmlzaWJsZTtcclxuXHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRmb250LXNpemU6IDI0cHg7XHJcblx0cGFkZGluZzogMTVweCAxMHB4O1xyXG59XHJcblxyXG4vKiBhbmltYXRpb24gZG9taW5hdGlvbiAqL1xyXG4udGhyZWUtZCB7XHJcblx0cGVyc3BlY3RpdmU6IDIwMHB4O1xyXG5cdHRyYW5zaXRpb246IGFsbCAuMDdzIGxpbmVhcjtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblx0LyogY29tcGxldGUgdGhlIGFuaW1hdGlvbiEgKi9cclxuXHQudGhyZWUtZDpob3ZlciAudGhyZWUtZC1ib3gsXHJcblx0LnRocmVlLWQ6Zm9jdXMgLnRocmVlLWQtYm94IHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjVweCkgcm90YXRlWCg5MGRlZyk7XHJcblx0fVxyXG5cclxuLnRocmVlLWQtYm94IHtcclxuXHR0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRleigtMjVweCk7XHJcblx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHRwb2ludGVyLWV2ZW50czogbm9uZTtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKlxyXG5cdHB1dCB0aGUgXCJmcm9udFwiIGFuZCBcImJhY2tcIiBlbGVtZW50cyBpbnRvIHBsYWNlIHdpdGggQ1NTIHRyYW5zZm9ybXMsXHJcblx0c3BlY2lmaWNhbGx5IHRyYW5zbGF0aW9uIGFuZCB0cmFuc2xhdGV6XHJcbiovXHJcbi5mcm9udCB7XHJcblx0dHJhbnNmb3JtOiByb3RhdGV4KDBkZWcpIHRyYW5zbGF0ZXooMjVweCk7XHJcbn1cclxuXHJcbi5iYWNrIHtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZXgoLTkwZGVnKSB0cmFuc2xhdGV6KDI1cHgpO1xyXG5cdGNvbG9yOiAjZmZlN2M0O1xyXG59XHJcblxyXG4uZnJvbnQsIC5iYWNrIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdGJhY2tncm91bmQ6IGJsYWNrO1xyXG5cdHBhZGRpbmc6IDE1cHggMTBweDtcclxuXHRjb2xvcjogd2hpdGU7XHJcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuXHJcbi8vIHVzZXIgYXZhdGFyIHdpdGggdXNlcm5hbWVcclxuLmF2YXRhci1jaXJjbGUge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXRvcDogLTRweDtcclxufVxyXG5cclxuXHJcbi5pbml0aWFscyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMHB4OyAvKiAyNSUgb2YgcGFyZW50ICovXHJcbiAgZm9udC1zaXplOiAxNXB4OyAvKiA1MCUgb2YgcGFyZW50ICovXHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7IC8qIDUwJSBvZiBwYXJlbnQgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiIsIi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDgycHg7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6IGFsaWNlYmx1ZSAhaW1wb3J0YW50OyB9XG5cbi5uYXYtbGluayB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IC13ZWJraXQtYm9keTsgfVxuXG4ubW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIC8qIFN0YXkgaW4gcGxhY2UgKi9cbiAgei1pbmRleDogMTtcbiAgLyogU2l0IG9uIHRvcCAqL1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgLyogRnVsbCB3aWR0aCAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwgaGVpZ2h0ICovXG4gIG92ZXJmbG93OiBhdXRvO1xuICAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAvKiBCbGFjayB3LyBvcGFjaXR5ICovIH1cblxuLyogTW9kYWwgQ29udGVudCAqL1xuLm1vZGFsLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XG4gIHdpZHRoOiA4MCU7IH1cblxuLyogVGhlIENsb3NlIEJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgY29sb3I6ICNhYWFhYWE7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG4uY2xvc2U6aG92ZXIsXG4uY2xvc2U6Zm9jdXMge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLnNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBwYWRkaW5nLXRvcDogNjBweDsgfVxuXG4uc2lkZW5hdiBhIHtcbiAgcGFkZGluZzogOHB4IDhweCA4cHggMzJweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjODE4MTgxO1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zczsgfVxuXG4uc2lkZW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICNmMWYxZjE7IH1cblxuLnNpZGVuYXYgLmNsb3NlYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4OyB9XG5cbi5zaWRlbmF2IC5uYXZUZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDRweDtcbiAgcmlnaHQ6IDkycHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtZmFtaWx5OiBpbml0aWFsOyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xuICAuc2lkZW5hdiB7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7IH1cbiAgLnNpZGVuYXYgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4OyB9IH1cblxuLnBhdHJvbl90ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDAzMjtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC1tb3otYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSAwcHggM3B4IDNweDsgfVxuXG4vKiBiYXNpYyBtZW51IHN0eWxlcyAqL1xuLmJsb2NrLW1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogIzAwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwdmg7IH1cblxuLmJsb2NrLW1lbnUgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDJ2aDsgfVxuXG4uYmxvY2stbWVudSBsaSBhIHtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiAnUGFzc2lvbiBPbmUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIHBhZGRpbmc6IDE1cHggMTBweDsgfVxuXG4vKiBhbmltYXRpb24gZG9taW5hdGlvbiAqL1xuLnRocmVlLWQge1xuICBwZXJzcGVjdGl2ZTogMjAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAuMDdzIGxpbmVhcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyogY29tcGxldGUgdGhlIGFuaW1hdGlvbiEgKi9cbi50aHJlZS1kOmhvdmVyIC50aHJlZS1kLWJveCxcbi50aHJlZS1kOmZvY3VzIC50aHJlZS1kLWJveCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjVweCkgcm90YXRlWCg5MGRlZyk7IH1cblxuLnRocmVlLWQtYm94IHtcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGV6KC0yNXB4KTtcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4vKlxyXG5cdHB1dCB0aGUgXCJmcm9udFwiIGFuZCBcImJhY2tcIiBlbGVtZW50cyBpbnRvIHBsYWNlIHdpdGggQ1NTIHRyYW5zZm9ybXMsXHJcblx0c3BlY2lmaWNhbGx5IHRyYW5zbGF0aW9uIGFuZCB0cmFuc2xhdGV6XHJcbiovXG4uZnJvbnQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZXgoMGRlZykgdHJhbnNsYXRleigyNXB4KTsgfVxuXG4uYmFjayB7XG4gIHRyYW5zZm9ybTogcm90YXRleCgtOTBkZWcpIHRyYW5zbGF0ZXooMjVweCk7XG4gIGNvbG9yOiAjZmZlN2M0OyB9XG5cbi5mcm9udCwgLmJhY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cblxuLmF2YXRhci1jaXJjbGUge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi10b3A6IC00cHg7IH1cblxuLmluaXRpYWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgLyogMjUlIG9mIHBhcmVudCAqL1xuICBmb250LXNpemU6IDE1cHg7XG4gIC8qIDUwJSBvZiBwYXJlbnQgKi9cbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIC8qIDUwJSBvZiBwYXJlbnQgKi9cbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/layout/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/layout/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/app/core/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_document_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/document.service */ "./src/app/core/services/document.service.ts");







var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService, authService, router, documentService) {
        this.userService = userService;
        this.authService = authService;
        this.router = router;
        this.documentService = documentService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.currentUser.subscribe(function (userData) {
            _this.currentUser = userData;
        });
        this.documents = this.documentService.documents;
        this._docSub = this.documentService.currentDocument.subscribe(function (doc) { return (_this.currentDoc = doc.id); });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this._docSub.unsubscribe();
    };
    HeaderComponent.prototype.loadDoc = function (id) {
        this.documentService.getDocument(id);
    };
    HeaderComponent.prototype.newDoc = function () {
        this.documentService.newDocument();
    };
    HeaderComponent.prototype.ngAfterViewInit = function () {
        if (localStorage.getItem("username")) {
            jquery__WEBPACK_IMPORTED_MODULE_4__("#currentuser").textContent = localStorage
                .getItem("username")
                .slice(0, 2);
        }
        if (this.authService.currentUserId) {
            jquery__WEBPACK_IMPORTED_MODULE_4__("#currentuser").textContent = this.authService.currentUserId.slice(0, 2);
        }
    };
    HeaderComponent.prototype.signOut = function () {
        this.userService.purgeAuth();
        this.authService.signOut();
        localStorage.clear();
    };
    HeaderComponent.prototype.config_setting = function () {
        jquery__WEBPACK_IMPORTED_MODULE_4__("#configmodal").css("display", "block");
    };
    HeaderComponent.prototype.screen_landscape = function () {
        screen.orientation.unlock();
        alert(screen.orientation.unlock);
    };
    HeaderComponent.prototype.sideslide = function () {
        document.getElementById("Sidenav").style.width = "250px";
    };
    HeaderComponent.prototype.closeNav = function () {
        document.getElementById("Sidenav").style.width = "0px";
    };
    HeaderComponent.prototype.modal_setting_close = function () {
        document.getElementById("Modal_setting").style.display = "none";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("currentuser"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("currentuser"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HeaderComponent.prototype, "currentuser", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-layout-header",
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/shared/layout/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/shared/layout/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _core_services_document_service__WEBPACK_IMPORTED_MODULE_6__["DocumentService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/layout/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/layout/index.ts ***!
  \****************************************/
/*! exports provided: FooterComponent, HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/layout/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_component__WEBPACK_IMPORTED_MODULE_0__["FooterComponent"]; });

/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component */ "./src/app/shared/layout/header.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return _header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"]; });





/***/ }),

/***/ "./src/app/shared/list-errors.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/list-errors.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"error-messages\" *ngIf=\"errorList\">\n  <li *ngFor=\"let error of errorList\">\n    {{ error }}\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/shared/list-errors.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/list-errors.component.ts ***!
  \*************************************************/
/*! exports provided: ListErrorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListErrorsComponent", function() { return ListErrorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListErrorsComponent = /** @class */ (function () {
    function ListErrorsComponent() {
        this.formattedErrors = [];
    }
    Object.defineProperty(ListErrorsComponent.prototype, "errors", {
        set: function (errorList) {
            this.formattedErrors = Object.keys(errorList.errors || {})
                .map(function (key) { return key + " " + errorList.errors[key]; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListErrorsComponent.prototype, "errorList", {
        get: function () { return this.formattedErrors; },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], ListErrorsComponent.prototype, "errors", null);
    ListErrorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-errors',
            template: __webpack_require__(/*! ./list-errors.component.html */ "./src/app/shared/list-errors.component.html")
        })
    ], ListErrorsComponent);
    return ListErrorsComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./article-helpers */ "./src/app/shared/article-helpers/index.ts");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./buttons */ "./src/app/shared/buttons/index.ts");
/* harmony import */ var _list_errors_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./list-errors.component */ "./src/app/shared/list-errors.component.ts");
/* harmony import */ var _show_authed_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./show-authed.directive */ "./src/app/shared/show-authed.directive.ts");










var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            declarations: [
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleListComponent"],
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleMetaComponent"],
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticlePreviewComponent"],
                _buttons__WEBPACK_IMPORTED_MODULE_7__["FavoriteButtonComponent"],
                _buttons__WEBPACK_IMPORTED_MODULE_7__["FollowButtonComponent"],
                _list_errors_component__WEBPACK_IMPORTED_MODULE_8__["ListErrorsComponent"],
                _show_authed_directive__WEBPACK_IMPORTED_MODULE_9__["ShowAuthedDirective"]
            ],
            exports: [
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleListComponent"],
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticleMetaComponent"],
                _article_helpers__WEBPACK_IMPORTED_MODULE_6__["ArticlePreviewComponent"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _buttons__WEBPACK_IMPORTED_MODULE_7__["FavoriteButtonComponent"],
                _buttons__WEBPACK_IMPORTED_MODULE_7__["FollowButtonComponent"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _list_errors_component__WEBPACK_IMPORTED_MODULE_8__["ListErrorsComponent"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _show_authed_directive__WEBPACK_IMPORTED_MODULE_9__["ShowAuthedDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/show-authed.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/show-authed.directive.ts ***!
  \*************************************************/
/*! exports provided: ShowAuthedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAuthedDirective", function() { return ShowAuthedDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");



var ShowAuthedDirective = /** @class */ (function () {
    function ShowAuthedDirective(templateRef, userService, viewContainer) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainer = viewContainer;
    }
    ShowAuthedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
            if ((isAuthenticated && _this.condition) ||
                (!isAuthenticated && !_this.condition)) {
                _this.viewContainer.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainer.clear();
            }
        });
    };
    Object.defineProperty(ShowAuthedDirective.prototype, "appShowAuthed", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], ShowAuthedDirective.prototype, "appShowAuthed", null);
    ShowAuthedDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: "[appShowAuthed]" }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"],
            _core__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], ShowAuthedDirective);
    return ShowAuthedDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: true,
    api_url: "https://conduit.productionready.io/api",
    firebase: {
        apiKey: "AIzaSyC4QD7yeg-PhcIAmadOFeWRAv0XMRFWLdQ",
        authDomain: "spades-in-place.firebaseapp.com",
        databaseURL: "https://spades-in-place.firebaseio.com",
        projectId: "spades-in-place",
        storageBucket: "spades-in-place.appspot.com",
        messagingSenderId: "282747446977",
        appId: "1:282747446977:web:791c78426e9d62886dd640",
        measurementId: "G-65KZSH1X7P",
    },
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
var bootstrapPromise = Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
// Logging bootstrap information
bootstrapPromise.then(function (success) { return console.log("Bootstrap success"); })
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\ProgramList\11spade-game11\spade game\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map