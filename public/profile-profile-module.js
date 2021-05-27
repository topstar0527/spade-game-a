(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./src/app/profile/profile-articles.component.html":
/*!*********************************************************!*\
  !*** ./src/app/profile/profile-articles.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article-list [limit]=\"10\" [config]=\"articlesConfig\">\n</app-article-list>\n"

/***/ }),

/***/ "./src/app/profile/profile-articles.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/profile/profile-articles.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileArticlesComponent", function() { return ProfileArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfileArticlesComponent = /** @class */ (function () {
    function ProfileArticlesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.articlesConfig = {
            type: 'all',
            filters: {}
        };
    }
    ProfileArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.articlesConfig = {
                type: 'all',
                filters: {}
            }; // Only method I found to refresh article load on swap
            _this.articlesConfig.filters.author = _this.profile.username;
        });
    };
    ProfileArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-articles',
            template: __webpack_require__(/*! ./profile-articles.component.html */ "./src/app/profile/profile-articles.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileArticlesComponent);
    return ProfileArticlesComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-favorites.component.html":
/*!**********************************************************!*\
  !*** ./src/app/profile/profile-favorites.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-article-list [limit]=\"10\" [config]=\"favoritesConfig\">\n</app-article-list>\n"

/***/ }),

/***/ "./src/app/profile/profile-favorites.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/profile-favorites.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileFavoritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFavoritesComponent", function() { return ProfileFavoritesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfileFavoritesComponent = /** @class */ (function () {
    function ProfileFavoritesComponent(route, router) {
        this.route = route;
        this.router = router;
        this.favoritesConfig = {
            type: 'all',
            filters: {}
        };
    }
    ProfileFavoritesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.data.subscribe(function (data) {
            _this.profile = data.profile;
            _this.favoritesConfig.filters.favorited = _this.profile.username;
        });
    };
    ProfileFavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-favorites',
            template: __webpack_require__(/*! ./profile-favorites.component.html */ "./src/app/profile/profile-favorites.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileFavoritesComponent);
    return ProfileFavoritesComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile-resolver.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/profile/profile-resolver.service.ts ***!
  \*****************************************************/
/*! exports provided: ProfileResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResolver", function() { return ProfileResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProfileResolver = /** @class */ (function () {
    function ProfileResolver(profilesService, router) {
        this.profilesService = profilesService;
        this.router = router;
    }
    ProfileResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.profilesService.get(route.params['username'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.router.navigateByUrl('/'); }));
    };
    ProfileResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["ProfilesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileResolver);
    return ProfileResolver;
}());



/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_articles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-articles.component */ "./src/app/profile/profile-articles.component.ts");
/* harmony import */ var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-favorites.component */ "./src/app/profile/profile-favorites.component.ts");
/* harmony import */ var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-resolver.service */ "./src/app/profile/profile-resolver.service.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");







var routes = [
    {
        path: ':username',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
        resolve: {
            profile: _profile_resolver_service__WEBPACK_IMPORTED_MODULE_5__["ProfileResolver"]
        },
        children: [
            {
                path: '',
                component: _profile_articles_component__WEBPACK_IMPORTED_MODULE_3__["ProfileArticlesComponent"]
            },
            {
                path: 'favorites',
                component: _profile_favorites_component__WEBPACK_IMPORTED_MODULE_4__["ProfileFavoritesComponent"]
            }
        ]
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-page\">\n\n  <div class=\"user-info\">\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-xs-12 col-md-10 offset-md-1\">\n          <img [src]=\"profile.image\" class=\"user-img\" />\n          <h4>{{ profile.username }}</h4>\n          <p>{{ profile.bio }}</p>\n          <app-follow-button\n            [hidden]=\"isUser\"\n            [profile]=\"profile\"\n            (toggle)=\"onToggleFollowing($event)\">\n          </app-follow-button>\n           <a [routerLink]=\"['/settings']\"\n              [hidden]=\"!isUser\"\n              class=\"btn btn-sm btn-outline-secondary action-btn\">\n              <i class=\"ion-gear-a\"></i> Edit Profile Settings\n            </a>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n\n      <div class=\"col-xs-12 col-md-10 offset-md-1\">\n        <div class=\"articles-toggle\">\n          <ul class=\"nav nav-pills outline-active\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 routerLinkActive=\"active\"\n                 [routerLinkActiveOptions]=\"{ exact: true }\"\n                 [routerLink]=\"['/profile', profile.username]\">\n                 My Victory\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\"\n                 routerLinkActive=\"active\"\n                 [routerLinkActiveOptions]=\"{ exact: true }\"\n                 [routerLink]=\"['/profile', profile.username, 'favorites']\">\n                 My Budget\n              </a>\n            </li>\n          </ul>\n        </div>\n\n        <router-outlet></router-outlet>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route, userService) {
        this.route = route;
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (data) {
            _this.profile = data.profile;
            // Load the current user's data.
            return _this.userService.currentUser.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (userData) {
                _this.currentUser = userData;
                _this.isUser = (_this.currentUser.username === _this.profile.username);
            }));
        })).subscribe();
    };
    ProfileComponent.prototype.onToggleFollowing = function (following) {
        this.profile.following = following;
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-page',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _profile_articles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile-articles.component */ "./src/app/profile/profile-articles.component.ts");
/* harmony import */ var _profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _profile_favorites_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-favorites.component */ "./src/app/profile/profile-favorites.component.ts");
/* harmony import */ var _profile_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-resolver.service */ "./src/app/profile/profile-resolver.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");








var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _profile_routing_module__WEBPACK_IMPORTED_MODULE_7__["ProfileRoutingModule"]
            ],
            declarations: [
                _profile_articles_component__WEBPACK_IMPORTED_MODULE_2__["ProfileArticlesComponent"],
                _profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"],
                _profile_favorites_component__WEBPACK_IMPORTED_MODULE_4__["ProfileFavoritesComponent"]
            ],
            providers: [
                _profile_resolver_service__WEBPACK_IMPORTED_MODULE_5__["ProfileResolver"]
            ]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=profile-profile-module.js.map