(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editor-editor-module"],{

/***/ "./node_modules/jw-angular-social-buttons/lib/fb-like.component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/fb-like.component.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var FbLikeComponent = /** @class */ (function () {
    function FbLikeComponent() {
        this.url = location.href;
        // initialise facebook sdk after it loads if required
        if (!window['fbAsyncInit']) {
            window['fbAsyncInit'] = function () {
                window['FB'].init({
                    appId: 'your-app-id',
                    autoLogAppEvents: true,
                    xfbml: true,
                    version: 'v3.0'
                });
            };
        }
        // load facebook sdk if required
        var url = 'https://connect.facebook.net/en_US/sdk.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }
    FbLikeComponent.prototype.ngAfterViewInit = function () {
        // render facebook button
        window['FB'] && window['FB'].XFBML.parse();
    };
    FbLikeComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'fb-like',
                    template: "<div class=\"fb-like\" [attr.data-href]=\"url\" data-layout=\"button_count\" data-action=\"like\" data-show-faces=\"true\" data-share=\"true\"></div>"
                },] },
    ];
    /** @nocollapse */
    FbLikeComponent.ctorParameters = function () { return []; };
    FbLikeComponent.propDecorators = {
        "url": [{ type: core_1.Input },],
    };
    return FbLikeComponent;
}());
exports.FbLikeComponent = FbLikeComponent;


/***/ }),

/***/ "./node_modules/jw-angular-social-buttons/lib/google-plus.component.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/google-plus.component.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var GooglePlusComponent = /** @class */ (function () {
    function GooglePlusComponent() {
        this.url = location.href;
        // load google plus sdk if required
        var url = 'https://apis.google.com/js/platform.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }
    GooglePlusComponent.prototype.ngAfterViewInit = function () {
        // render google plus button
        window['gapi'] && window['gapi'].plusone.go();
    };
    GooglePlusComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'google-plus',
                    template: "<div class=\"g-plusone\" [attr.data-href]=\"url\" data-size=\"medium\"></div>"
                },] },
    ];
    /** @nocollapse */
    GooglePlusComponent.ctorParameters = function () { return []; };
    GooglePlusComponent.propDecorators = {
        "url": [{ type: core_1.Input },],
    };
    return GooglePlusComponent;
}());
exports.GooglePlusComponent = GooglePlusComponent;


/***/ }),

/***/ "./node_modules/jw-angular-social-buttons/lib/jw-angular-social-buttons.module.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/jw-angular-social-buttons.module.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var fb_like_component_1 = __webpack_require__(/*! ./fb-like.component */ "./node_modules/jw-angular-social-buttons/lib/fb-like.component.js");
var google_plus_component_1 = __webpack_require__(/*! ./google-plus.component */ "./node_modules/jw-angular-social-buttons/lib/google-plus.component.js");
var tweet_component_1 = __webpack_require__(/*! ./tweet.component */ "./node_modules/jw-angular-social-buttons/lib/tweet.component.js");
var linkedin_share_component_1 = __webpack_require__(/*! ./linkedin-share.component */ "./node_modules/jw-angular-social-buttons/lib/linkedin-share.component.js");
var pin_it_component_1 = __webpack_require__(/*! ./pin-it.component */ "./node_modules/jw-angular-social-buttons/lib/pin-it.component.js");
var JwSocialButtonsModule = /** @class */ (function () {
    function JwSocialButtonsModule() {
    }
    JwSocialButtonsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        fb_like_component_1.FbLikeComponent,
                        google_plus_component_1.GooglePlusComponent,
                        tweet_component_1.TweetComponent,
                        linkedin_share_component_1.LinkedInShareComponent,
                        pin_it_component_1.PinItComponent
                    ],
                    exports: [
                        fb_like_component_1.FbLikeComponent,
                        google_plus_component_1.GooglePlusComponent,
                        tweet_component_1.TweetComponent,
                        linkedin_share_component_1.LinkedInShareComponent,
                        pin_it_component_1.PinItComponent
                    ]
                },] },
    ];
    return JwSocialButtonsModule;
}());
exports.JwSocialButtonsModule = JwSocialButtonsModule;


/***/ }),

/***/ "./node_modules/jw-angular-social-buttons/lib/linkedin-share.component.js":
/*!********************************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/linkedin-share.component.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var LinkedInShareComponent = /** @class */ (function () {
    function LinkedInShareComponent() {
        this.url = location.href;
        // load twitter sdk if required
        var url = 'https://platform.linkedin.com/in.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            script.innerHTML = ' lang: en_US';
            document.body.appendChild(script);
        }
    }
    LinkedInShareComponent.prototype.ngAfterViewInit = function () {
        // add linkedin share button script tag to element
        this.element.nativeElement.innerHTML = "<script type=\"IN/Share\" data-url=\"" + this.url + "\"></script>";
        // render share button
        window['IN'] && window['IN'].parse();
    };
    LinkedInShareComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'linkedin-share',
                    template: "<div #element></div>"
                },] },
    ];
    /** @nocollapse */
    LinkedInShareComponent.ctorParameters = function () { return []; };
    LinkedInShareComponent.propDecorators = {
        "url": [{ type: core_1.Input },],
        "element": [{ type: core_1.ViewChild, args: ['element',] },],
    };
    return LinkedInShareComponent;
}());
exports.LinkedInShareComponent = LinkedInShareComponent;


/***/ }),

/***/ "./node_modules/jw-angular-social-buttons/lib/pin-it.component.js":
/*!************************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/pin-it.component.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var PinItComponent = /** @class */ (function () {
    function PinItComponent() {
        this.url = location.href;
        this.media = '';
        this.description = '';
        // load pinterest sdk if required
        var url = 'https://assets.pinterest.com/js/pinit.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            script['data-pin-build'] = 'parsePins';
            document.body.appendChild(script);
        }
    }
    PinItComponent.prototype.ngAfterViewInit = function () {
        // render pin it button
        window['parsePins'] && window['parsePins']();
    };
    PinItComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'pin-it',
                    template: "<a href=\"//www.pinterest.com/pin/create/button/?url={{url}}&media={{media}}&description={{description}}\" data-pin-do=\"buttonPin\" data-pin-config=\"beside\"></a>"
                },] },
    ];
    /** @nocollapse */
    PinItComponent.ctorParameters = function () { return []; };
    PinItComponent.propDecorators = {
        "url": [{ type: core_1.Input },],
        "media": [{ type: core_1.Input },],
        "description": [{ type: core_1.Input },],
    };
    return PinItComponent;
}());
exports.PinItComponent = PinItComponent;


/***/ }),

/***/ "./node_modules/jw-angular-social-buttons/lib/tweet.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/jw-angular-social-buttons/lib/tweet.component.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var TweetComponent = /** @class */ (function () {
    function TweetComponent() {
        this.url = location.href;
        this.text = '';
        // load twitter sdk if required
        var url = 'https://platform.twitter.com/widgets.js';
        if (!document.querySelector("script[src='" + url + "']")) {
            var script = document.createElement('script');
            script.src = url;
            document.body.appendChild(script);
        }
    }
    TweetComponent.prototype.ngAfterViewInit = function () {
        // render tweet button
        window['twttr'] && window['twttr'].widgets.load();
    };
    TweetComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tweet',
                    template: "<a href=\"https://twitter.com/share\" [attr.data-text]=\"text\" [attr.data-url]=\"url\" class=\"twitter-share-button\"></a>"
                },] },
    ];
    /** @nocollapse */
    TweetComponent.ctorParameters = function () { return []; };
    TweetComponent.propDecorators = {
        "url": [{ type: core_1.Input },],
        "text": [{ type: core_1.Input },],
    };
    return TweetComponent;
}());
exports.TweetComponent = TweetComponent;


/***/ }),

/***/ "./node_modules/ng2-adsense/fesm5/ng2-adsense.js":
/*!*******************************************************!*\
  !*** ./node_modules/ng2-adsense/fesm5/ng2-adsense.js ***!
  \*******************************************************/
/*! exports provided: ADSENSE_TOKEN, AdsenseComponent, AdsenseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADSENSE_TOKEN", function() { return ADSENSE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsenseComponent", function() { return AdsenseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsenseModule", function() { return AdsenseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var ADSENSE_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('AdsenseConfig');

var AdsenseComponent = /** @class */ (function () {
    function AdsenseComponent(config, platform) {
        this.config = config;
        this.platform = platform;
        /** can be manually set if you need all ads on a page to have same id page-xxx */
        this.adRegion = 'page-' + Math.floor(Math.random() * 10000) + 1;
    }
    AdsenseComponent.prototype.ngOnInit = function () {
        var config = this.config;
        function use(source, defaultValue) {
            return config && source !== undefined ? source : defaultValue;
        }
        this.adClient = use(this.adClient, config.adClient);
        this.adSlot = use(this.adSlot, config.adSlot);
        this.adFormat = use(this.adFormat, config.adFormat || 'auto');
        this.display = use(this.display, config.display || 'block');
        this.width = use(this.width, config.width);
        this.height = use(this.height, config.height);
        this.layout = use(this.layout, config.layout);
        this.layoutKey = use(this.layoutKey, config.layoutKey);
        this.pageLevelAds = use(this.pageLevelAds, config.pageLevelAds);
        this.adtest = use(this.adtest, config.adtest);
        this.fullWidthResponsive = use(this.fullWidthResponsive, config.fullWidthResponsive);
    };
    AdsenseComponent.prototype.ngOnDestroy = function () {
        var iframe = this.ins.nativeElement.querySelector('iframe');
        if (iframe && iframe.contentWindow) {
            iframe.src = 'about:blank';
            iframe.remove();
        }
    };
    AdsenseComponent.prototype.ngAfterViewInit = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platform)) {
            this.push();
        }
    };
    AdsenseComponent.prototype.push = function () {
        var p = {};
        if (this.pageLevelAds) {
            p.google_ad_client = this.adClient;
            p.enable_page_level_ads = true;
        }
        if (window) {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push(p);
            }
            catch (_a) {
                // pass
            }
        }
    };
    AdsenseComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [ADSENSE_TOKEN,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "adClient", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "adSlot", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "adFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "adRegion", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "display", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "height", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "layout", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "layoutKey", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "pageLevelAds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "adtest", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "fullWidthResponsive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AdsenseComponent.prototype, "className", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ins', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true })
    ], AdsenseComponent.prototype, "ins", void 0);
    AdsenseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng2-adsense,ng-adsense',
            template: "\n    <ins\n      #ins\n      class=\"adsbygoogle {{ className }}\"\n      [style.display]=\"display\"\n      [style.width.px]=\"width\"\n      [style.height.px]=\"height\"\n      [attr.data-ad-client]=\"adClient\"\n      [attr.data-ad-slot]=\"adSlot\"\n      [attr.data-ad-format]=\"adFormat\"\n      [attr.data-ad-region]=\"adRegion\"\n      [attr.data-layout]=\"layout\"\n      [attr.data-adtest]=\"adtest\"\n      [attr.data-layout-key]=\"layoutKey\"\n      [attr.data-full-width-responsive]=\"fullWidthResponsive\"\n    >\n    </ins>\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(ADSENSE_TOKEN)),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]))
    ], AdsenseComponent);
    return AdsenseComponent;
}());

var AdsenseModule = /** @class */ (function () {
    function AdsenseModule() {
    }
    AdsenseModule_1 = AdsenseModule;
    AdsenseModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: AdsenseModule_1,
            providers: [{ provide: ADSENSE_TOKEN, useValue: config }],
        };
    };
    var AdsenseModule_1;
    AdsenseModule = AdsenseModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [AdsenseComponent],
            declarations: [AdsenseComponent],
        })
    ], AdsenseModule);
    return AdsenseModule;
}());

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng2-adsense.js.map


/***/ }),

/***/ "./src/app/editor/ads/ads.component.css":
/*!**********************************************!*\
  !*** ./src/app/editor/ads/ads.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adventisment{\r\n  position: absolute;\r\n  top: 170px;\r\n  left: 0px;\r\n  background-color: grey;\r\n  height: 500px;\r\n  width: 300px;\r\n}\r\n\r\n/************* common code ***********/\r\n\r\n* {\r\n    position: absolute;\r\n    text-decoration: none;\r\n\r\n}\r\n\r\nimg {\r\n    border: medium none;\r\n}\r\n\r\n#ads {\r\n    margin: 0px auto;\r\n    position: absolute;\r\n    top: 170px;\r\n    left: 0px;\r\n    height: 500px;\r\n    width: 300px;\r\n   -moz-user-select: -moz-none;\r\n   -webkit-user-select: none;\r\n   -ms-user-select: none;\r\n   user-select: none;\r\n}\r\n\r\n#banner {\r\n  margin: 0 auto;\r\n    background-color: #fff;\r\n    border: 1px solid #666;\r\n    cursor: pointer;\r\n    width: 300px;\r\n    height: 250px;\r\n    overflow: hidden;\r\n    -o-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.baby, .offer1, .offer2, .toy ,.text1, .text2, .cta,.logo-bg, .logo .bottom-bg{\r\n     opacity: 0;\r\n     display: block;\r\n}\r\n\r\n/************* class size fixing **********/\r\n\r\n.offer1 {\r\n    top: 23px;\r\n    left: 13px;\r\n}\r\n\r\n.offer2 {\r\n    top: 19px;\r\n    left: 81px;\r\n    z-index: 6;\r\n}\r\n\r\n.toy {\r\n    top: 64px;\r\n    left: 13px;\r\n    opacity: 0;\r\n}\r\n\r\n.text1 {\r\n    bottom: 44px;\r\n    left: 14px;\r\n    z-index: 2;\r\n}\r\n\r\n.text2 {\r\n    bottom: 44px;\r\n    right: 127px;\r\n    z-index: 3;\r\n}\r\n\r\n.cta {\r\n     bottom: 10px;\r\n     left: 14px;\r\n     z-index: 2;\r\n}\r\n\r\n.logo {\r\n     bottom: 25px;\r\n     right: 14px;\r\n     z-index: 2;\r\n}\r\n\r\n.bottom-bg {\r\n     bottom: 0;\r\n     z-index: 1;\r\n}\r\n\r\n/********* animation **********/\r\n\r\n.baby {\r\n    animation: baby 1s .5s both;\r\n    -webkit-animation: baby 1s .5s both;\r\n}\r\n\r\n.offer1 {\r\n    animation: offer 3s 1.5s  forwards;\r\n    -webkit-animation: offer 3s 1.5s  forwards;\r\n}\r\n\r\n.offer2 {\r\n    animation: offer 3s 2.5s  forwards;\r\n    -webkit-animation: offer 3s 2.5s  forwards;\r\n}\r\n\r\n.toy {\r\n     animation: toy 2.8s 4.0s forwards;\r\n   -webkit-animation: toy 2.8s 4.0s forwards;\r\n}\r\n\r\n.text1 {\r\n    animation: text1 2s 4.8s forwards;\r\n    -webkit-animation: text1 2s 4.8s forwards;\r\n}\r\n\r\n.text2 {\r\n    animation: text2 2s 4.8s forwards;\r\n    -webkit-animation: text2 2s 4.8s forwards;\r\n}\r\n\r\n.cta {\r\n    animation: cta 2s 5.8s forwards;\r\n    -webkit-animation: cta 2s 5.8s forwards;\r\n}\r\n\r\n.bottom-bg {\r\n    animation: bottom-bg 2s .2s both;\r\n    -webkit-animation: bottom-bg 2s .2s both;\r\n}\r\n\r\n/******* animation keyframes *************/\r\n\r\n@-webkit-keyframes offer {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-20px);\r\n  }\r\n  20% {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes offer {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-20px);\r\n  }\r\n  20% {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes toy {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n  20% {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes toy {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(20px);\r\n  }\r\n  20% {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@-webkit-keyframes baby {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes baby {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes bottom-bg{\r\n    0% {\r\n        opacity: 0;\r\n    transform: translateY(90px);\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    transform: translateY(0px);\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    transform: translateY(0px);\r\n    }\r\n}\r\n\r\n@keyframes bottom-bg{\r\n    0% {\r\n        opacity: 0;\r\n    transform: translateY(90px);\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    transform: translateY(0px);\r\n    }\r\n    100%{\r\n        opacity: 1;\r\n    transform: translateY(0px);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes text1 {\r\n    0% {\r\n        opacity: 0;\r\n    transform: translateX(-90px);\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    transform: translateX(0px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    transform: translateX(0px);\r\n    }\r\n}\r\n\r\n@keyframes text1 {\r\n    0% {\r\n        opacity: 0;\r\n    transform: translateX(-90px);\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    transform: translateX(0px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    transform: translateX(0px);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes text2 {\r\n    0% {\r\n        opacity: 0;\r\n    transform: translateX(90px);\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    transform: translateX(0px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    transform: translateX(0px);\r\n    }\r\n}\r\n\r\n@keyframes text2 {\r\n    0% {\r\n        opacity: 0;\r\n    transform: translateX(90px);\r\n    }\r\n    30% {\r\n        opacity: 1;\r\n    transform: translateX(0px);\r\n    }\r\n    100% {\r\n        opacity: 1;\r\n    transform: translateX(0px);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes cta {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n@keyframes cta {\r\n    from {\r\n        opacity: 0;\r\n    }\r\n    to {\r\n        opacity: 1;\r\n      }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2Fkcy9hZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBLHNDQUFzQzs7QUFFdEM7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCOztBQUV6Qjs7QUFDQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxhQUFhO0lBQ2IsWUFBWTtHQUNiLDJCQUEyQjtHQUUzQix5QkFBeUI7R0FDekIscUJBQXFCO0dBQ3JCLGlCQUFpQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7SUFDWixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUdoQix5QkFBeUI7SUFDekIsc0JBQXNCO0FBQzFCOztBQUVBO0tBQ0ssVUFBVTtLQUNWLGNBQWM7QUFDbkI7O0FBRUEsMkNBQTJDOztBQUUzQztJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFVBQVU7QUFDZDs7QUFFQTtLQUNLLFlBQVk7S0FDWixVQUFVO0tBQ1YsVUFBVTtBQUNmOztBQUVBO0tBQ0ssWUFBWTtLQUNaLFdBQVc7S0FDWCxVQUFVO0FBQ2Y7O0FBRUE7S0FDSyxTQUFTO0tBQ1QsVUFBVTtBQUNmOztBQUVBLCtCQUErQjs7QUFFL0I7SUFDSSwyQkFBMkI7SUFDM0IsbUNBQW1DO0FBQ3ZDOztBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLDBDQUEwQztBQUM5Qzs7QUFDQTtJQUNJLGtDQUFrQztJQUNsQywwQ0FBMEM7QUFDOUM7O0FBQ0E7S0FDSyxpQ0FBaUM7R0FDbkMseUNBQXlDO0FBQzVDOztBQUNBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlDQUF5QztBQUM3Qzs7QUFDQTtJQUNJLGlDQUFpQztJQUNqQyx5Q0FBeUM7QUFDN0M7O0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHdDQUF3QztBQUM1Qzs7QUFFQSwwQ0FBMEM7O0FBRTFDO0VBQ0U7SUFDRSxVQUFVO0lBRUYsNEJBQTRCO0VBQ3RDO0VBQ0E7SUFDRSxVQUFVO0lBRUYsMEJBQTBCO0VBQ3BDO0VBQ0E7SUFDRSxVQUFVO0lBRUYsMEJBQTBCO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFFRiw0QkFBNEI7RUFDdEM7RUFDQTtJQUNFLFVBQVU7SUFFRiwwQkFBMEI7RUFDcEM7RUFDQTtJQUNFLFVBQVU7SUFFRiwwQkFBMEI7RUFDcEM7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUVGLDJCQUEyQjtFQUNyQztFQUNBO0lBQ0UsVUFBVTtJQUVGLDBCQUEwQjtFQUNwQztFQUNBO0lBQ0UsVUFBVTtJQUVGLDBCQUEwQjtFQUNwQztBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBRUYsMkJBQTJCO0VBQ3JDO0VBQ0E7SUFDRSxVQUFVO0lBRUYsMEJBQTBCO0VBQ3BDO0VBQ0E7SUFDRSxVQUFVO0lBRUYsMEJBQTBCO0VBQ3BDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFFTiwyQkFBMkI7SUFDbkM7SUFDQTtRQUNJLFVBQVU7SUFFTiwwQkFBMEI7SUFDbEM7SUFDQTtRQUNJLFVBQVU7SUFFViwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUVOLDJCQUEyQjtJQUNuQztJQUNBO1FBQ0ksVUFBVTtJQUVOLDBCQUEwQjtJQUNsQztJQUNBO1FBQ0ksVUFBVTtJQUVWLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBRU4sNEJBQTRCO0lBQ3BDO0lBQ0E7UUFDSSxVQUFVO0lBRU4sMEJBQTBCO0lBQ2xDO0lBQ0E7UUFDSSxVQUFVO0lBRU4sMEJBQTBCO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFFTiw0QkFBNEI7SUFDcEM7SUFDQTtRQUNJLFVBQVU7SUFFTiwwQkFBMEI7SUFDbEM7SUFDQTtRQUNJLFVBQVU7SUFFTiwwQkFBMEI7SUFDbEM7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtJQUVOLDJCQUEyQjtJQUNuQztJQUNBO1FBQ0ksVUFBVTtJQUVOLDBCQUEwQjtJQUNsQztJQUNBO1FBQ0ksVUFBVTtJQUVOLDBCQUEwQjtJQUNsQztBQUNKOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBRU4sMkJBQTJCO0lBQ25DO0lBQ0E7UUFDSSxVQUFVO0lBRU4sMEJBQTBCO0lBQ2xDO0lBQ0E7UUFDSSxVQUFVO0lBRU4sMEJBQTBCO0lBQ2xDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtJQUNkO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksVUFBVTtNQUNaO0FBQ04iLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvYWRzL2Fkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkdmVudGlzbWVudHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNzBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLyoqKioqKioqKioqKiogY29tbW9uIGNvZGUgKioqKioqKioqKiovXHJcblxyXG4qIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuaW1nIHtcclxuICAgIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbn1cclxuXHJcbiNhZHMge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTcwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAtbW96LXVzZXItc2VsZWN0OiAtbW96LW5vbmU7XHJcbiAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5cclxuI2Jhbm5lciB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzY2NjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5iYWJ5LCAub2ZmZXIxLCAub2ZmZXIyLCAudG95ICwudGV4dDEsIC50ZXh0MiwgLmN0YSwubG9nby1iZywgLmxvZ28gLmJvdHRvbS1iZ3tcclxuICAgICBvcGFjaXR5OiAwO1xyXG4gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKiBjbGFzcyBzaXplIGZpeGluZyAqKioqKioqKioqL1xyXG5cclxuLm9mZmVyMSB7XHJcbiAgICB0b3A6IDIzcHg7XHJcbiAgICBsZWZ0OiAxM3B4O1xyXG59XHJcblxyXG4ub2ZmZXIyIHtcclxuICAgIHRvcDogMTlweDtcclxuICAgIGxlZnQ6IDgxcHg7XHJcbiAgICB6LWluZGV4OiA2O1xyXG59XHJcblxyXG4udG95IHtcclxuICAgIHRvcDogNjRweDtcclxuICAgIGxlZnQ6IDEzcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4udGV4dDEge1xyXG4gICAgYm90dG9tOiA0NHB4O1xyXG4gICAgbGVmdDogMTRweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi50ZXh0MiB7XHJcbiAgICBib3R0b206IDQ0cHg7XHJcbiAgICByaWdodDogMTI3cHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4uY3RhIHtcclxuICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgbGVmdDogMTRweDtcclxuICAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgICAgYm90dG9tOiAyNXB4O1xyXG4gICAgIHJpZ2h0OiAxNHB4O1xyXG4gICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5ib3R0b20tYmcge1xyXG4gICAgIGJvdHRvbTogMDtcclxuICAgICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4vKioqKioqKioqIGFuaW1hdGlvbiAqKioqKioqKioqL1xyXG5cclxuLmJhYnkge1xyXG4gICAgYW5pbWF0aW9uOiBiYWJ5IDFzIC41cyBib3RoO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJhYnkgMXMgLjVzIGJvdGg7XHJcbn1cclxuLm9mZmVyMSB7XHJcbiAgICBhbmltYXRpb246IG9mZmVyIDNzIDEuNXMgIGZvcndhcmRzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG9mZmVyIDNzIDEuNXMgIGZvcndhcmRzO1xyXG59XHJcbi5vZmZlcjIge1xyXG4gICAgYW5pbWF0aW9uOiBvZmZlciAzcyAyLjVzICBmb3J3YXJkcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBvZmZlciAzcyAyLjVzICBmb3J3YXJkcztcclxufVxyXG4udG95IHtcclxuICAgICBhbmltYXRpb246IHRveSAyLjhzIDQuMHMgZm9yd2FyZHM7XHJcbiAgIC13ZWJraXQtYW5pbWF0aW9uOiB0b3kgMi44cyA0LjBzIGZvcndhcmRzO1xyXG59XHJcbi50ZXh0MSB7XHJcbiAgICBhbmltYXRpb246IHRleHQxIDJzIDQuOHMgZm9yd2FyZHM7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogdGV4dDEgMnMgNC44cyBmb3J3YXJkcztcclxufVxyXG4udGV4dDIge1xyXG4gICAgYW5pbWF0aW9uOiB0ZXh0MiAycyA0LjhzIGZvcndhcmRzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHRleHQyIDJzIDQuOHMgZm9yd2FyZHM7XHJcbn1cclxuLmN0YSB7XHJcbiAgICBhbmltYXRpb246IGN0YSAycyA1LjhzIGZvcndhcmRzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGN0YSAycyA1LjhzIGZvcndhcmRzO1xyXG59XHJcblxyXG4uYm90dG9tLWJnIHtcclxuICAgIGFuaW1hdGlvbjogYm90dG9tLWJnIDJzIC4ycyBib3RoO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGJvdHRvbS1iZyAycyAuMnMgYm90aDtcclxufVxyXG5cclxuLyoqKioqKiogYW5pbWF0aW9uIGtleWZyYW1lcyAqKioqKioqKioqKioqL1xyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIG9mZmVyIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgb2ZmZXIge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHRveSB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgfVxyXG4gIDIwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0b3kge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xyXG4gIH1cclxuICAyMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBiYWJ5IHtcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJhYnkge1xyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBib3R0b20tYmd7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOTBweCk7XHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm90dG9tLWJne1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSg5MHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwcHgpO1xyXG4gICAgfVxyXG4gICAgMzAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAle1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGV4dDEge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOTBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtOTBweCk7XHJcbiAgICB9XHJcbiAgICAzMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB0ZXh0MSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05MHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC05MHB4KTtcclxuICAgIH1cclxuICAgIDMwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgdGV4dDIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg5MHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpO1xyXG4gICAgfVxyXG4gICAgMzAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdGV4dDIge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCg5MHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDkwcHgpO1xyXG4gICAgfVxyXG4gICAgMzAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBjdGEge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGN0YSB7XHJcbiAgICBmcm9tIHtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/editor/ads/ads.component.html":
/*!***********************************************!*\
  !*** ./src/app/editor/ads/ads.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"ads\">\n  <div id=\"banner\">\n    <img src=\"http://i621.photobucket.com/albums/tt295/mahsin/baby%20toys/creative.jpg\" class=\"baby\">\n    <img src=\"http://i621.photobucket.com/albums/tt295/mahsin/baby%20toys/60per.png\" class=\"offer1\">\n    <img src=\"http://i621.photobucket.com/albums/tt295/mahsin/baby%20toys/offer2.png\" class=\"offer2\">\n    <img src=\"http://i621.photobucket.com/albums/tt295/mahsin/baby%20toys/toy.png\" class=\"toy\">\n    <img src=\"http://i621.photobucket.com/albums/tt295/mahsin/baby%20toys/text1.png\" class=\"text1\">\n    <img src=\"http://i621.photobucket.com/albums/tt295/mahsin/baby%20toys/text2.png\" class=\"text2\">\n    <img src=\"http://i621.photobucket.com/albums/tt295/mahsin/baby%20toys/cta.png\" class=\"cta\">\n    <img src=\"http://i621.photobucket.com/albums/tt295/mahsin/baby%20toys/logo.png\" class=\"logo\">\n    <img src=\"http://i621.photobucket.com/albums/tt295/mahsin/baby%20toys/bottom-bg.png\" class=\"bottom-bg\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/ads/ads.component.ts":
/*!*********************************************!*\
  !*** ./src/app/editor/ads/ads.component.ts ***!
  \*********************************************/
/*! exports provided: AdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdsComponent", function() { return AdsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdsComponent = /** @class */ (function () {
    function AdsComponent() {
    }
    AdsComponent.prototype.ngAfterViewInit = function () {
    };
    AdsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ads',
            template: __webpack_require__(/*! ./ads.component.html */ "./src/app/editor/ads/ads.component.html"),
            styles: [__webpack_require__(/*! ./ads.component.css */ "./src/app/editor/ads/ads.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdsComponent);
    return AdsComponent;
}());



/***/ }),

/***/ "./src/app/editor/ads1/ads1.component.css":
/*!************************************************!*\
  !*** ./src/app/editor/ads1/ads1.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adventisment{\r\n  position: absolute;\r\n  top: 170px;\r\n  right: 0px;\r\n  background-color: grey;\r\n  height: 500px;\r\n  width: 300px;\r\n}\r\n\r\nspan.info { position: absolute; z-index: 9; right: 0; cursor: pointer; }\r\n\r\nspan.info:hover:before { content: \"Ads by StarTuấn\"; background: #CDCCCC; border-radius: 0 0 0 5px; padding: 0px 3px 0 10px; font-family: arial; width: 89px; position: absolute; right: 15px; font-size: 12px; top: 0; color: #222; }\r\n\r\n.st-ads:hover{-webkit-filter: brightness(1.3);filter: brightness(1.3);}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2FkczEvYWRzMS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUEsWUFBWSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRTs7QUFBQyx5QkFBeUIsMEJBQTBCLEVBQUUsbUJBQW1CLEVBQUUsd0JBQXdCLEVBQUUsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTs7QUFDN1MsY0FBYywrQkFBdUIsQ0FBdkIsdUJBQXVCLENBQUMiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvYWRzMS9hZHMxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWR2ZW50aXNtZW50e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDE3MHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICBoZWlnaHQ6IDUwMHB4O1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuc3Bhbi5pbmZvIHsgcG9zaXRpb246IGFic29sdXRlOyB6LWluZGV4OiA5OyByaWdodDogMDsgY3Vyc29yOiBwb2ludGVyOyB9c3Bhbi5pbmZvOmhvdmVyOmJlZm9yZSB7IGNvbnRlbnQ6IFwiQWRzIGJ5IFN0YXJUdeG6pW5cIjsgYmFja2dyb3VuZDogI0NEQ0NDQzsgYm9yZGVyLXJhZGl1czogMCAwIDAgNXB4OyBwYWRkaW5nOiAwcHggM3B4IDAgMTBweDsgZm9udC1mYW1pbHk6IGFyaWFsOyB3aWR0aDogODlweDsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMTVweDsgZm9udC1zaXplOiAxMnB4OyB0b3A6IDA7IGNvbG9yOiAjMjIyOyB9XHJcbi5zdC1hZHM6aG92ZXJ7ZmlsdGVyOiBicmlnaHRuZXNzKDEuMyk7fVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/editor/ads1/ads1.component.html":
/*!*************************************************!*\
  !*** ./src/app/editor/ads1/ads1.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adventisment\">\n  <span class=\"info\"><img border=\"0\"\n      src=\"https://lh5.googleusercontent.com/-aqtz0ba7YSA/V-Dm0DjyaKI/AAAAAAAAD5c/-fp-vJL-smwTC1kxq7_gXJ1-a82Dm95SACK4B/s400/icon.PNG\"></span>\n  <div class='st-ads'>\n    <a target=\"_blank\" href=\"http://ouo.io/ref/KPnlI4WF\">\n      <div\n        style=\"background-image: url(https://2.bp.blogspot.com/-pNMS8P8waOo/V-EZyoOw09I/AAAAAAAAD5s/JRMp6pnQaAoYsGWbIrKInOJ9sQLCE7M5gCK4B/s1600/banner-ouo-io.png);width: 300px;height: 600px;\">\n      </div>\n    </a></div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/ads1/ads1.component.ts":
/*!***********************************************!*\
  !*** ./src/app/editor/ads1/ads1.component.ts ***!
  \***********************************************/
/*! exports provided: Ads1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ads1Component", function() { return Ads1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Ads1Component = /** @class */ (function () {
    function Ads1Component() {
    }
    Ads1Component.prototype.ngOnInit = function () {
    };
    Ads1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ads1',
            template: __webpack_require__(/*! ./ads1.component.html */ "./src/app/editor/ads1/ads1.component.html"),
            styles: [__webpack_require__(/*! ./ads1.component.css */ "./src/app/editor/ads1/ads1.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Ads1Component);
    return Ads1Component;
}());



/***/ }),

/***/ "./src/app/editor/chat/chat.component.html":
/*!*************************************************!*\
  !*** ./src/app/editor/chat/chat.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"floating-chat\">\n  <i class=\"fa fa-comments\" aria-hidden=\"true\" style=\"font-size: 30px;\"></i>\n  <div class=\"chat\">\n    <div class=\"header\">\n      <span class=\"title\">\n        Spades Game\n      </span>\n      <button>\n        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      </button>\n\n    </div>\n    <ul class=\"messages\">\n    </ul>\n    <div class=\"footer\">\n      <app-document></app-document>\n      <button id=\"sendMessage\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/chat/chat.component.scss":
/*!*************************************************!*\
  !*** ./src/app/editor/chat/chat.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  background: skyblue;\n  font: 12px/16px 'Noto Sans', sans-serif; }\n\n.floating-chat {\n  z-index: 3;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  position: fixed;\n  bottom: 10px;\n  right: 10px;\n  width: 60px;\n  height: 60px;\n  transform: translateY(70px);\n  transition: all 250ms ease-out;\n  border-radius: 50%;\n  opacity: 0;\n  background: -webkit-linear-gradient(-45deg, #183850 0, #3bb940ad 25%, #26b13e 50%, #2086140a 75%, #306d376b 100%);\n  background-repeat: no-repeat;\n  background-attachment: fixed; }\n\n.floating-chat.enter:hover {\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n    opacity: 1; }\n\n.floating-chat.enter {\n    transform: translateY(0);\n    opacity: 0.6;\n    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.14); }\n\n.floating-chat.expand {\n    width: 250px;\n    max-height: 400px;\n    height: 400px;\n    border-radius: 5px;\n    cursor: auto;\n    opacity: 1; }\n\n.floating-chat :focus {\n    outline: 0;\n    box-shadow: 0 0 3pt 2pt rgba(14, 200, 121, 0.3); }\n\n.floating-chat button {\n    background: transparent;\n    border: 0;\n    color: white;\n    text-transform: uppercase;\n    border-radius: 3px;\n    cursor: pointer; }\n\n.floating-chat .chat {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    opacity: 0;\n    width: 1px;\n    height: 1px;\n    border-radius: 50%;\n    transition: all 250ms ease-out;\n    margin: auto;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n\n.floating-chat .chat.enter {\n      opacity: 1;\n      border-radius: 0;\n      margin: 10px;\n      width: auto;\n      height: auto; }\n\n.floating-chat .chat .header {\n      flex-shrink: 0;\n      padding-bottom: 10px;\n      display: flex;\n      background: transparent; }\n\n.floating-chat .chat .header .title {\n        flex-grow: 1;\n        flex-shrink: 1;\n        padding: 0 5px;\n        text-shadow: 0 1px 0 #c9cfce, 0 2px 0 #bcc2c2, 0 2.3px 0 #afb6b6, 0 2.5px 0 #a4adac, 0 0 5px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.3); }\n\n.floating-chat .chat .header button {\n        flex-shrink: 0; }\n\n.floating-chat .chat .messages {\n      padding: 10px;\n      margin: 0;\n      list-style: none;\n      overflow-y: scroll;\n      overflow-x: hidden;\n      flex-grow: 1;\n      border-radius: 4px;\n      background: transparent; }\n\n.floating-chat .chat .messages::-webkit-scrollbar {\n        width: 5px; }\n\n.floating-chat .chat .messages::-webkit-scrollbar-track {\n        border-radius: 5px;\n        background-color: rgba(25, 147, 147, 0.1); }\n\n.floating-chat .chat .messages::-webkit-scrollbar-thumb {\n        border-radius: 5px;\n        background-color: rgba(25, 147, 147, 0.2); }\n\n.floating-chat .chat .messages li {\n        position: relative;\n        clear: both;\n        display: inline-block;\n        padding: 14px;\n        margin: 0 0 20px 0;\n        font: 12px/16px 'Noto Sans', sans-serif;\n        border-radius: 10px;\n        background-color: rgba(25, 147, 147, 0.2);\n        word-wrap: break-word;\n        max-width: 81%; }\n\n.floating-chat .chat .messages li:before {\n          position: absolute;\n          top: 0;\n          width: 25px;\n          height: 25px;\n          border-radius: 25px;\n          content: '';\n          background-size: cover; }\n\n.floating-chat .chat .messages li:after {\n          position: absolute;\n          top: 10px;\n          content: '';\n          width: 0;\n          height: 0;\n          border-top: 10px solid rgba(25, 147, 147, 0.2); }\n\n.floating-chat .chat .messages li.other {\n        animation: show-chat-odd 0.15s 1 ease-in;\n        -moz-animation: show-chat-odd 0.15s 1 ease-in;\n        -webkit-animation: show-chat-odd 0.15s 1 ease-in;\n        float: right;\n        margin-right: 45px;\n        color: #0AD5C1; }\n\n.floating-chat .chat .messages li.other:before {\n        right: -45px;\n        background-image: url(https://github.com/Thatkookooguy.png); }\n\n.floating-chat .chat .messages li.other:after {\n        border-right: 10px solid transparent;\n        right: -10px; }\n\n.floating-chat .chat .messages li.self {\n        animation: show-chat-even 0.15s 1 ease-in;\n        -moz-animation: show-chat-even 0.15s 1 ease-in;\n        -webkit-animation: show-chat-even 0.15s 1 ease-in;\n        float: left;\n        margin-left: 45px;\n        color: #0EC879; }\n\n.floating-chat .chat .messages li.self:before {\n        left: -45px;\n        background-image: url(https://github.com/ortichon.png); }\n\n.floating-chat .chat .messages li.self:after {\n        border-left: 10px solid transparent;\n        left: -10px; }\n\n.floating-chat .chat .footer {\n      flex-shrink: 0;\n      display: flex;\n      padding-top: 10px;\n      max-height: 90px;\n      background: transparent; }\n\n.floating-chat .chat .footer .text-box {\n        border-radius: 3px;\n        background: rgba(0, 8, 8, 0.42);\n        min-height: 100%;\n        width: 196px;\n        margin-right: 5px;\n        color: #ffffff;\n        overflow-y: auto;\n        padding: 2px 5px; }\n\n@keyframes show-chat-even {\n  0% {\n    margin-left: -480px; }\n  100% {\n    margin-left: 0; } }\n\n@-webkit-keyframes show-chat-even {\n  0% {\n    margin-left: -480px; }\n  100% {\n    margin-left: 0; } }\n\n@keyframes show-chat-odd {\n  0% {\n    margin-right: -480px; }\n  100% {\n    margin-right: 0; } }\n\n@-webkit-keyframes show-chat-odd {\n  0% {\n    margin-right: -480px; }\n  100% {\n    margin-right: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2NoYXQvRjpcXFByb2dyYW1MaXN0XFwxMXNwYWRlLWdhbWUxMVxcc3BhZGUgZ2FtZS9zcmNcXGFwcFxcZWRpdG9yXFxjaGF0XFxjaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDQTtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLG1CQUFtQjtFQUNuQix1Q0FBdUMsRUFBQTs7QUFHM0M7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFVBQVU7RUF4RFYsaUhBQWlIO0VBQ2pILDRCQUE0QjtFQUM1Qiw0QkFBNEIsRUFBQTs7QUF1Q2hDO0lBa0JRLDBFQUEwRTtJQUMxRSxVQUFVLEVBQUE7O0FBbkJsQjtJQXNCUSx3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLDRFQUE0RSxFQUFBOztBQXhCcEY7SUEyQlEsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVLEVBQUE7O0FBaENsQjtJQW1DUSxVQUFVO0lBQ1YsK0NBQW9DLEVBQUE7O0FBcEM1QztJQXVDUSx1QkFBdUI7SUFDdkIsU0FBUztJQUNULFlBQVk7SUFDWix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTs7QUE1Q3ZCO0lBK0NRLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVMsRUFBQTs7QUEzRGpCO01BNkRZLFVBQVU7TUFDVixnQkFBZ0I7TUFDaEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxZQUFZLEVBQUE7O0FBakV4QjtNQW9FWSxjQUFjO01BQ2Qsb0JBQW9CO01BQ3BCLGFBQWE7TUFDYix1QkFBdUIsRUFBQTs7QUF2RW5DO1FBeUVnQixZQUFZO1FBQ1osY0FBYztRQUNkLGNBQWM7UUFDZCwyUUFVNEIsRUFBQTs7QUF0RjVDO1FBeUZnQixjQUFjLEVBQUE7O0FBekY5QjtNQTZGWSxhQUFhO01BQ2IsU0FBUztNQUNULGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsdUJBQXVCLEVBQUE7O0FBdkkvQjtRQUNJLFVBaEJhLEVBQUE7O0FBa0JqQjtRQUNJLGtCQW5CYTtRQW9CYix5Q0FBeUMsRUFBQTs7QUFFN0M7UUFDSSxrQkF2QmE7UUF3QmIseUNBdkJ1QyxFQUFBOztBQWlEL0M7UUF1R2dCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gscUJBQXFCO1FBQ3JCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsdUNBQXVDO1FBQ3ZDLG1CQUFtQjtRQUNuQix5Q0EvSitCO1FBZ0svQixxQkFBcUI7UUFDckIsY0FBYyxFQUFBOztBQWhIOUI7VUFrSG9CLGtCQUFrQjtVQUNsQixNQUFNO1VBQ04sV0FuS1U7VUFvS1YsWUFwS1U7VUFxS1YsbUJBcktVO1VBc0tWLFdBQVc7VUFDWCxzQkFBc0IsRUFBQTs7QUF4SDFDO1VBMkhvQixrQkFBa0I7VUFDbEIsU0E1S2E7VUE2S2IsV0FBVztVQUNYLFFBQVE7VUFDUixTQUFTO1VBQ1QsOENBakwyQixFQUFBOztBQWlEL0M7UUFvSWdCLHdDQUF3QztRQUN4Qyw2Q0FBNkM7UUFDN0MsZ0RBQWdEO1FBQ2hELFlBQVk7UUFDWixrQkF0TEk7UUF1TEosY0FBYyxFQUFBOztBQXpJOUI7UUE0SWdCLFlBQTJCO1FBRTNCLDJEQUEyRCxFQUFBOztBQTlJM0U7UUFpSmdCLG9DQUEyRDtRQUMzRCxZQWxNaUIsRUFBQTs7QUFnRGpDO1FBcUpnQix5Q0FBeUM7UUFDekMsOENBQThDO1FBQzlDLGlEQUFpRDtRQUNqRCxXQUFXO1FBQ1gsaUJBdk1JO1FBd01KLGNBQWMsRUFBQTs7QUExSjlCO1FBNkpnQixXQUEwQjtRQUUxQixzREFBc0QsRUFBQTs7QUEvSnRFO1FBa0tnQixtQ0FBMEQ7UUFDMUQsV0FuTmlCLEVBQUE7O0FBZ0RqQztNQXVLWSxjQUFjO01BQ2QsYUFBYTtNQUViLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsdUJBQXVCLEVBQUE7O0FBNUtuQztRQThLZ0Isa0JBQWtCO1FBQ2xCLCtCQUErQjtRQUMvQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLGdCQUFnQixFQUFBOztBQVFoQztFQUNJO0lBQ0ksbUJBQW1CLEVBQUE7RUFFdkI7SUFDSSxjQUFjLEVBQUEsRUFBQTs7QUFhdEI7RUFDSTtJQUNJLG1CQUFtQixFQUFBO0VBRXZCO0lBQ0ksY0FBYyxFQUFBLEVBQUE7O0FBSXRCO0VBQ0k7SUFDSSxvQkFBb0IsRUFBQTtFQUV4QjtJQUNJLGVBQWUsRUFBQSxFQUFBOztBQWF2QjtFQUNJO0lBQ0ksb0JBQW9CLEVBQUE7RUFFeEI7SUFDSSxlQUFlLEVBQUEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4kc2Nyb2xsYmFyLXdpZHRoOiA1cHg7XHJcbiRjaGF0LXRocmVhZC1iZ2QtY29sb3I6IHJnYmEoMjUsIDE0NywgMTQ3LCAwLjIpO1xyXG4kY2hhdC10aHJlYWQtbXNnLWFycm93LXNpemU6IDEwcHg7XHJcbiRjaGF0LXRocmVhZC1hdmF0YXItc2l6ZTogMjVweDtcclxuJGNoYXQtdGhyZWFkLW9mZnNldDogI3skY2hhdC10aHJlYWQtYXZhdGFyLXNpemUgKyAyMHB4fTtcclxuJGRlZmF1bHQtc2hhZG93LWNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbi8vIE1peGluc1xyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5AbWl4aW4gZmFuY3ktYmFja2dyb3VuZCgpIHtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC00NWRlZywgIzE4Mzg1MCAwLCAjM2JiOTQwYWQgMjUlLCAjMjZiMTNlIDUwJSwgIzIwODYxNDBhIDc1JSwgIzMwNmQzNzZiIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbn1cclxuXHJcbkBtaXhpbiBmYW5jeS1zY3JvbGxiYXIoKSB7XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6ICRzY3JvbGxiYXItd2lkdGg7XHJcbiAgICB9XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHNjcm9sbGJhci13aWR0aDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1LCAxNDcsIDE0NywgMC4xKTtcclxuICAgIH1cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkc2Nyb2xsYmFyLXdpZHRoO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGF0LXRocmVhZC1iZ2QtY29sb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBzY3JvbGxpbmctc2hhZG93cygkYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQsICRzaGFkb3ctaW50ZW5zaXR5OiAwLjUsICRzaGFkb3ctY29sb3I6ICRkZWZhdWx0LXNoYWRvdy1jb2xvciwgJGNvdmVyLXNpemU6IDQwcHgsICRzaGFkb3ctc2l6ZTogMTRweCkge1xyXG4gICAgLy8gU2hhZG93IGNvdmVyc1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRiYWNrZ3JvdW5kLWNvbG9yIDMwJSwgcmdiYSgkYmFja2dyb3VuZC1jb2xvciwgMCkpLCBsaW5lYXItZ3JhZGllbnQocmdiYSgkYmFja2dyb3VuZC1jb2xvciwgMCksICRiYWNrZ3JvdW5kLWNvbG9yIDcwJSkgMCAxMDAlLCByYWRpYWwtZ3JhZGllbnQoNTAlIDAsIGZhcnRoZXN0LXNpZGUsIHJnYmEoJHNoYWRvdy1jb2xvciwgJHNoYWRvdy1pbnRlbnNpdHkpLCByZ2JhKCRzaGFkb3ctY29sb3IsIDApKSwgcmFkaWFsLWdyYWRpZW50KDUwJSAxMDAlLCBmYXJ0aGVzdC1zaWRlLCByZ2JhKCRzaGFkb3ctY29sb3IsICRzaGFkb3ctaW50ZW5zaXR5KSwgcmdiYSgkc2hhZG93LWNvbG9yLCAwKSkgMCAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRiYWNrZ3JvdW5kLWNvbG9yIDMwJSwgcmdiYSgkYmFja2dyb3VuZC1jb2xvciwgMCkpLCBsaW5lYXItZ3JhZGllbnQocmdiYSgkYmFja2dyb3VuZC1jb2xvciwgMCksICRiYWNrZ3JvdW5kLWNvbG9yIDcwJSkgMCAxMDAlLCByYWRpYWwtZ3JhZGllbnQoZmFydGhlc3Qtc2lkZSBhdCA1MCUgMCwgcmdiYSgkc2hhZG93LWNvbG9yLCAkc2hhZG93LWludGVuc2l0eSksIHJnYmEoJHNoYWRvdy1jb2xvciwgMCkpO1xyXG4gICAgLy8gYWxzbyBhZGQgYnV0dG9uIHNoYWRvdzpcclxuICAgIC8vcmFkaWFsLWdyYWRpZW50KGZhcnRoZXN0LXNpZGUgYXQgNTAlIDEwMCUsIHJnYmEoJHNoYWRvdy1jb2xvciwkc2hhZG93LWludGVuc2l0eSksIHJnYmEoJHNoYWRvdy1jb2xvciwwKSkgMCAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlICRjb3Zlci1zaXplLCAxMDAlICRjb3Zlci1zaXplLCAxMDAlICRzaGFkb3ctc2l6ZSwgMTAwJSAkc2hhZG93LXNpemU7XHJcbiAgICAvLyBPcGVyYSBkb2Vzbid0IHN1cHBvcnQgdGhpcyBpbiB0aGUgc2hvcnRoYW5kXHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGxvY2FsLCBsb2NhbCwgc2Nyb2xsLCBzY3JvbGw7XHJcbn1cclxuXHJcbioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBza3libHVlO1xyXG4gICAgZm9udDogMTJweC8xNnB4ICdOb3RvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZmxvYXRpbmctY2hhdCB7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgQGluY2x1ZGUgZmFuY3ktYmFja2dyb3VuZDtcclxuICAgICYuZW50ZXI6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xOSksIDAgNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgICAmLmVudGVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDBweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XHJcbiAgICB9XHJcbiAgICAmLmV4cGFuZCB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHQgMnB0IHJnYmEoIzBFQzg3OSwgMC4zKTtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2hhdCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLW91dDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICYuZW50ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDE7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiAgICAgMCAxcHggMCBoc2woMTc0LDUlLDgwJSksXHJcbiAgICAgICAgICAgICAgICAgICAgIDAgMnB4IDAgaHNsKDE3NCw1JSw3NSUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAwIDIuM3B4IDAgaHNsKDE3NCw1JSw3MCUpLFxyXG4gICAgICAgICAgICAgICAgICAgICAwIDIuNXB4IDAgaHNsKDE3NCw1JSw2NiUpLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgMCAwIDVweCByZ2JhKDAsMCwwLC4wNSksXHJcbiAgICAgICAgICAgICAgICAgICAgMCAxcHggM3B4IHJnYmEoMCwwLDAsLjIpLFxyXG4gICAgICAgICAgICAgICAgICAgIDAgM3B4IDVweCByZ2JhKDAsMCwwLC4yKSxcclxuICAgICAgICAgICAgICAgICAgIDAgNXB4IDEwcHggcmdiYSgwLDAsMCwuMiksXHJcbiAgICAgICAgICAgICAgICAgIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsLjIpLFxyXG4gICAgICAgICAgICAgICAgICAwIDIwcHggMjBweCByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lc3NhZ2VzIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBmYW5jeS1zY3JvbGxiYXI7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDIwcHggMDtcclxuICAgICAgICAgICAgICAgIGZvbnQ6IDEycHgvMTZweCAnTm90byBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2hhdC10aHJlYWQtYmdkLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MSU7XHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJGNoYXQtdGhyZWFkLWF2YXRhci1zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogJGNoYXQtdGhyZWFkLWF2YXRhci1zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6ICRjaGF0LXRocmVhZC1hdmF0YXItc2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogJGNoYXQtdGhyZWFkLW1zZy1hcnJvdy1zaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAkY2hhdC10aHJlYWQtbXNnLWFycm93LXNpemUgc29saWQgJGNoYXQtdGhyZWFkLWJnZC1jb2xvcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5vdGhlciB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb246IHNob3ctY2hhdC1vZGQgMC4xNXMgMSBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb246IHNob3ctY2hhdC1vZGQgMC4xNXMgMSBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNob3ctY2hhdC1vZGQgMC4xNXMgMSBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAkY2hhdC10aHJlYWQtb2Zmc2V0O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwQUQ1QzE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkub3RoZXI6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtJGNoYXQtdGhyZWFkLW9mZnNldDtcclxuICAgICAgICAgICAgICAgIC8vIFBsYWNlaG9sZGVyIGF2YXRhciAxXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9naXRodWIuY29tL1RoYXRrb29rb29ndXkucG5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5vdGhlcjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6ICRjaGF0LXRocmVhZC1tc2ctYXJyb3ctc2l6ZSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtJGNoYXQtdGhyZWFkLW1zZy1hcnJvdy1zaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpLnNlbGYge1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzaG93LWNoYXQtZXZlbiAwLjE1cyAxIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbjogc2hvdy1jaGF0LWV2ZW4gMC4xNXMgMSBlYXNlLWluO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNob3ctY2hhdC1ldmVuIDAuMTVzIDEgZWFzZS1pbjtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6ICRjaGF0LXRocmVhZC1vZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzBFQzg3OTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsaS5zZWxmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtJGNoYXQtdGhyZWFkLW9mZnNldDtcclxuICAgICAgICAgICAgICAgIC8vIFBsYWNlaG9sZGVyIGF2YXRhciAyXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9naXRodWIuY29tL29ydGljaG9uLnBuZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGkuc2VsZjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogJGNoYXQtdGhyZWFkLW1zZy1hcnJvdy1zaXplIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLSRjaGF0LXRocmVhZC1tc2ctYXJyb3ctc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIC8vZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogOTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIC50ZXh0LWJveCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDgsIDgsIDAuNDIpO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gQW5pbWF0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbkBrZXlmcmFtZXMgc2hvdy1jaGF0LWV2ZW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDgwcHg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHNob3ctY2hhdC1ldmVuIHtcclxuICAgIDAlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTQ4MHB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzaG93LWNoYXQtZXZlbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00ODBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNob3ctY2hhdC1vZGQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogLTQ4MHB4O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc2hvdy1jaGF0LW9kZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNDgwcHg7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzaG93LWNoYXQtb2RkIHtcclxuICAgIDAlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC00ODBweDtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/chat/chat.component.ts":
/*!***********************************************!*\
  !*** ./src/app/editor/chat/chat.component.ts ***!
  \***********************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
        var element = jquery__WEBPACK_IMPORTED_MODULE_2__(".floating-chat");
        var myStorage = localStorage;
        if (!myStorage.getItem("chatID")) {
            myStorage.setItem("chatID", createUUID());
        }
        setTimeout(function () {
            element.addClass("enter");
        }, 1000);
        element.click(openElement);
        function openElement() {
            var messages = element.find(".messages");
            var textInput = element.find(".text-box");
            element.find(">i").hide();
            element.addClass("expand");
            element.find(".chat").addClass("enter");
            var strLength = textInput.val().length * 2;
            textInput.keydown(onMetaAndEnter).prop("disabled", false).focus();
            element.off("click", openElement);
            element.find(".header button").click(closeElement);
            element.find("#sendMessage").click(sendNewMessage);
            messages.scrollTop(messages.prop("scrollHeight"));
        }
        function closeElement() {
            element.find(".chat").removeClass("enter").hide();
            element.find(">i").show();
            element.removeClass("expand");
            element.find(".header button").off("click", closeElement);
            element.find("#sendMessage").off("click", sendNewMessage);
            element
                .find(".text-box")
                .off("keydown", onMetaAndEnter)
                .prop("disabled", true)
                .blur();
            setTimeout(function () {
                element.find(".chat").removeClass("enter").show();
                element.click(openElement);
            }, 500);
        }
        function createUUID() {
            // http://www.ietf.org/rfc/rfc4122.txt
            var s = [];
            var hexDigits = "0123456789abcdef";
            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
            s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
            s[8] = s[13] = s[18] = s[23] = "-";
            var uuid = s.join("");
            return uuid;
        }
        function sendNewMessage() {
            var userInput = jquery__WEBPACK_IMPORTED_MODULE_2__(".text-box");
            var newMessage = userInput
                .html()
                .replace(/\<div\>|\<br.*?\>/gi, "\n")
                .replace(/\<\/div\>/g, "")
                .trim()
                .replace(/\n/g, "<br>");
            if (!newMessage)
                return;
            var messagesContainer = jquery__WEBPACK_IMPORTED_MODULE_2__(".messages");
            messagesContainer.append(['<li class="self">', newMessage, "</li>"].join(""));
            // clean out old message
            userInput.html("");
            // focus on input
            userInput.focus();
            messagesContainer.finish().animate({
                scrollTop: messagesContainer.prop("scrollHeight"),
            }, 250);
        }
        function onMetaAndEnter(event) {
            if ((event.metaKey || event.ctrlKey) && event.keyCode == 13) {
                sendNewMessage();
            }
        }
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/editor/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/editor/chat/chat.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/editor/clock/clock.component.css":
/*!**************************************************!*\
  !*** ./src/app/editor/clock/clock.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n#Date {\r\n    font-family: 'BebasNeueRegular', Arial, Helvetica, sans-serif;\r\n    font-size: 12px;\r\n    color: white;\r\n    text-align: center;\r\n    text-shadow: 0 0 5px #00c6ff;\r\n}\r\n\r\nul {\r\n    width: 360px;\r\n    color:white;\r\n    margin: 0 auto;\r\n    padding: 10px;\r\n    list-style: none;\r\n    text-align: center;\r\n    text-shadow:0 1px 0 hsl(174,5%,80%),\r\n              0 2px 0 hsl(174,5%,75%),\r\n              0 2.3px 0 hsl(174,5%,70%),\r\n              0 2.5px 0 hsl(174,5%,66%),\r\n\r\n              0 0 5px rgba(0,0,0,.05),\r\n            0 1px 3px rgba(0,0,0,.2),\r\n            0 3px 5px rgba(0,0,0,.2),\r\n            0 5px 10px rgba(0,0,0,.2),\r\n          0 10px 10px rgba(0,0,0,.2),\r\n          0 20px 20px rgba(0,0,0,.3);\r\n}\r\n\r\nul li {\r\n    display: inline;\r\n    font-size: 2em;\r\n    text-align: center;\r\n    font-family: 'BebasNeueRegular', Arial, Helvetica, sans-serif;\r\n    text-shadow:0 1px 0 hsl(174,5%,80%),\r\n              0 2px 0 hsl(174,5%,75%),\r\n              0 2.3px 0 hsl(174,5%,70%),\r\n              0 2.5px 0 hsl(174,5%,66%),\r\n\r\n              0 0 5px rgba(0,0,0,.05),\r\n            0 1px 3px rgba(0,0,0,.2),\r\n            0 3px 5px rgba(0,0,0,.2),\r\n            0 5px 10px rgba(0,0,0,.2),\r\n          0 10px 10px rgba(0,0,0,.2),\r\n          0 20px 20px rgba(0,0,0,.3);\r\n}\r\n\r\n#point {\r\n    position: relative;\r\n    animation: mymove 1s ease infinite;\r\n    -webkit-animation: mymove 1s ease infinite;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n}\r\n\r\n/* Simple Animation */\r\n\r\n@-webkit-keyframes mymove {\r\n    0% {opacity: 1.0;\r\n    text-shadow: 0 0 20px #00c6ff;\r\n}\r\n\r\n50% {\r\n    opacity: 0;\r\n    text-shadow: none;\r\n}\r\n\r\n100% {\r\n    opacity: 1.0;\r\n    text-shadow: 0 0 20px #00c6ff;\r\n}\r\n}\r\n\r\n@keyframes mymove {\r\n    0% {opacity: 1.0;\r\n    text-shadow: 0 0 20px #00c6ff;\r\n}\r\n\r\n50% {\r\n    opacity: 0;\r\n    text-shadow: none;\r\n}\r\n\r\n100% {\r\n    opacity: 1.0;\r\n    text-shadow: 0 0 20px #00c6ff;\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLDZEQUE2RDtJQUM3RCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQjs7Ozs7Ozs7OztvQ0FVZ0M7QUFDcEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiw2REFBNkQ7SUFDN0Q7Ozs7Ozs7Ozs7b0NBVWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtDQUFrQztJQUNsQywwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQSxxQkFBcUI7O0FBQ3JCO0lBQ0ksSUFBSSxZQUFZO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDO0FBQ0E7O0FBZEE7SUFDSSxJQUFJLFlBQVk7SUFDaEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9jbG9jay9jbG9jay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4jRGF0ZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0JlYmFzTmV1ZVJlZ3VsYXInLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA1cHggIzAwYzZmZjtcclxufVxyXG5cclxudWwge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC1zaGFkb3c6MCAxcHggMCBoc2woMTc0LDUlLDgwJSksXHJcbiAgICAgICAgICAgICAgMCAycHggMCBoc2woMTc0LDUlLDc1JSksXHJcbiAgICAgICAgICAgICAgMCAyLjNweCAwIGhzbCgxNzQsNSUsNzAlKSxcclxuICAgICAgICAgICAgICAwIDIuNXB4IDAgaHNsKDE3NCw1JSw2NiUpLFxyXG5cclxuICAgICAgICAgICAgICAwIDAgNXB4IHJnYmEoMCwwLDAsLjA1KSxcclxuICAgICAgICAgICAgMCAxcHggM3B4IHJnYmEoMCwwLDAsLjIpLFxyXG4gICAgICAgICAgICAwIDNweCA1cHggcmdiYSgwLDAsMCwuMiksXHJcbiAgICAgICAgICAgIDAgNXB4IDEwcHggcmdiYSgwLDAsMCwuMiksXHJcbiAgICAgICAgICAwIDEwcHggMTBweCByZ2JhKDAsMCwwLC4yKSxcclxuICAgICAgICAgIDAgMjBweCAyMHB4IHJnYmEoMCwwLDAsLjMpO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmViYXNOZXVlUmVndWxhcicsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXNoYWRvdzowIDFweCAwIGhzbCgxNzQsNSUsODAlKSxcclxuICAgICAgICAgICAgICAwIDJweCAwIGhzbCgxNzQsNSUsNzUlKSxcclxuICAgICAgICAgICAgICAwIDIuM3B4IDAgaHNsKDE3NCw1JSw3MCUpLFxyXG4gICAgICAgICAgICAgIDAgMi41cHggMCBoc2woMTc0LDUlLDY2JSksXHJcblxyXG4gICAgICAgICAgICAgIDAgMCA1cHggcmdiYSgwLDAsMCwuMDUpLFxyXG4gICAgICAgICAgICAwIDFweCAzcHggcmdiYSgwLDAsMCwuMiksXHJcbiAgICAgICAgICAgIDAgM3B4IDVweCByZ2JhKDAsMCwwLC4yKSxcclxuICAgICAgICAgICAgMCA1cHggMTBweCByZ2JhKDAsMCwwLC4yKSxcclxuICAgICAgICAgIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsLjIpLFxyXG4gICAgICAgICAgMCAyMHB4IDIwcHggcmdiYSgwLDAsMCwuMyk7XHJcbn1cclxuXHJcbiNwb2ludCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbmltYXRpb246IG15bW92ZSAxcyBlYXNlIGluZmluaXRlO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG15bW92ZSAxcyBlYXNlIGluZmluaXRlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLyogU2ltcGxlIEFuaW1hdGlvbiAqL1xyXG5Aa2V5ZnJhbWVzIG15bW92ZSB7XHJcbiAgICAwJSB7b3BhY2l0eTogMS4wO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4ICMwMGM2ZmY7XHJcbn1cclxuXHJcbjUwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbjEwMCUge1xyXG4gICAgb3BhY2l0eTogMS4wO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4ICMwMGM2ZmY7XHJcbn1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIG15bW92ZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMS4wO1xyXG4gICAgICAgIHRleHQtc2hhZG93OiAwIDAgMjBweCAjMDBjNmZmO1xyXG4gICAgfVxyXG5cclxuICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxLjA7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAyMHB4ICMwMGM2ZmY7XHJcbiAgICB9O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/clock/clock.component.html":
/*!***************************************************!*\
  !*** ./src/app/editor/clock/clock.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li id=\"hours\"></li>\n  <li id=\"point\">:</li>\n  <li id=\"min\"></li>\n  <li id=\"point\">:</li>\n  <li id=\"sec\"></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/editor/clock/clock.component.ts":
/*!*************************************************!*\
  !*** ./src/app/editor/clock/clock.component.ts ***!
  \*************************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var ClockComponent = /** @class */ (function () {
    function ClockComponent() {
        this.pomodoroTime = 1200;
    }
    ClockComponent.prototype.ngOnInit = function () {
        this.display(localStorage.getItem("min"));
    };
    ClockComponent.prototype.togglePomodoro = function () {
        this.runtimer(this.pomodoroTime);
    };
    ClockComponent.prototype.display = function (seconds) {
        var hour = Math.floor(seconds / 3600);
        var modehour = seconds % 3600;
        var munutes = Math.floor(modehour / 60);
        var modeseconds = modehour % 60;
        var displayhour = "" + (hour < 10 ? '0' : '') + hour;
        var displaymin = "" + (munutes < 10 ? '0' : '') + munutes;
        var disseconds = "" + (modeseconds < 10 ? '0' : '') + modeseconds;
        var hour_html = jquery__WEBPACK_IMPORTED_MODULE_2__('#hours').html(displayhour);
        var min_html = jquery__WEBPACK_IMPORTED_MODULE_2__('#min').html(displaymin);
        var sec_html = jquery__WEBPACK_IMPORTED_MODULE_2__('#sec').html(disseconds);
    };
    ClockComponent.prototype.runtimer = function (seconds) {
        var _this = this;
        clearInterval(this.countdown);
        var now = Date.now();
        var timeUp = now + seconds * 1000;
        this.countdown = setInterval(function () {
            var secondsleft = Math.round((timeUp - Date.now()) / 1000);
            if (secondsleft < 0) {
                alert("game over!");
            }
            if (secondsleft < 0) {
                clearInterval(_this.countdown);
                return;
            }
            _this.display(secondsleft);
        });
    };
    ClockComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-clock',
            template: __webpack_require__(/*! ./clock.component.html */ "./src/app/editor/clock/clock.component.html"),
            styles: [__webpack_require__(/*! ./clock.component.css */ "./src/app/editor/clock/clock.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClockComponent);
    return ClockComponent;
}());



/***/ }),

/***/ "./src/app/editor/document/document.component.html":
/*!*********************************************************!*\
  !*** ./src/app/editor/document/document.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [(ngModel)]='document.doc' (keyup)='editDoc()' class=\"text-box\" contenteditable=\"true\" disabled=\"true\"></div>\n"

/***/ }),

/***/ "./src/app/editor/document/document.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/editor/document/document.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-box {\n  border-radius: 3px;\n  background: #00020066;\n  min-height: 100%;\n  width: 196px;\n  margin-right: 5px;\n  color: #ffffff;\n  padding: 2px 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2RvY3VtZW50L0Y6XFxQcm9ncmFtTGlzdFxcMTFzcGFkZS1nYW1lMTFcXHNwYWRlIGdhbWUvc3JjXFxhcHBcXGVkaXRvclxcZG9jdW1lbnRcXGRvY3VtZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvZG9jdW1lbnQvZG9jdW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1ib3h7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQ6ICMwMDAyMDA2NjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxOTZweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAycHggNXB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/document/document.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/editor/document/document.component.ts ***!
  \*******************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/document.service */ "./src/app/core/services/document.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DocumentComponent = /** @class */ (function () {
    function DocumentComponent(documentService) {
        this.documentService = documentService;
    }
    DocumentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._docSub = this.documentService.currentDocument
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
            id: "",
            doc: "Select an existing document or create a new one to get started",
        }))
            .subscribe(function (document) { return (_this.document = document); });
    };
    DocumentComponent.prototype.ngOnDestroy = function () {
        this._docSub.unsubscribe();
    };
    DocumentComponent.prototype.editDoc = function () {
        this.documentService.editDocument(this.document);
    };
    DocumentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-document",
            template: __webpack_require__(/*! ./document.component.html */ "./src/app/editor/document/document.component.html"),
            styles: [__webpack_require__(/*! ./document.component.scss */ "./src/app/editor/document/document.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]])
    ], DocumentComponent);
    return DocumentComponent;
}());



/***/ }),

/***/ "./src/app/editor/documentList/documentList.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/editor/documentList/documentList.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='sidenav'>\n  <span (click)='newDoc()'>New Document</span>\n  <span [class.selected]='docId === currentDoc' (click)='loadDoc(docId)'\n    *ngFor='let docId of documents | async'>{{ docId }}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/documentList/documentList.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/editor/documentList/documentList.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav {\n  position: relative;\n  height: 500px;\n  width: 220px;\n  background-color: #111111;\n  overflow-x: hidden;\n  padding-top: 20px; }\n  .sidenav span {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 25px;\n    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;\n    color: #818181;\n    display: block; }\n  .sidenav .selected {\n    color: #e1e1e1; }\n  .sidenav :hover {\n    color: #f1f1f1;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2RvY3VtZW50TGlzdC9GOlxcUHJvZ3JhbUxpc3RcXDExc3BhZGUtZ2FtZTExXFxzcGFkZSBnYW1lL3NyY1xcYXBwXFxlZGl0b3JcXGRvY3VtZW50TGlzdFxcZG9jdW1lbnRMaXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixpQkFBaUIsRUFBQTtFQU5yQjtJQVNRLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLDBEQUEwRDtJQUMxRCxjQUFjO0lBQ2QsY0FBYyxFQUFBO0VBZHRCO0lBZ0JRLGNBQWMsRUFBQTtFQWhCdEI7SUFrQlEsY0FBYztJQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9kb2N1bWVudExpc3QvZG9jdW1lbnRMaXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVuYXYge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIHdpZHRoOiAyMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBwYWRkaW5nOiA2cHggOHB4IDZweCAxNnB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICBjb2xvcjogIzgxODE4MTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH0uc2VsZWN0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAjZTFlMWUxO1xyXG4gICAgfTpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/documentList/documentList.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/editor/documentList/documentList.component.ts ***!
  \***************************************************************/
/*! exports provided: DocumentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentListComponent", function() { return DocumentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_document_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/document.service */ "./src/app/core/services/document.service.ts");



var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(documentService) {
        this.documentService = documentService;
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documents = this.documentService.documents;
        this._docSub = this.documentService.currentDocument.subscribe(function (doc) { return (_this.currentDoc = doc.id); });
    };
    DocumentListComponent.prototype.ngOnDestroy = function () {
        this._docSub.unsubscribe();
    };
    DocumentListComponent.prototype.loadDoc = function (id) {
        this.documentService.getDocument(id);
    };
    DocumentListComponent.prototype.newDoc = function () {
        this.documentService.newDocument();
        console.log("aaaaaaaaaa");
    };
    DocumentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-documentList",
            template: __webpack_require__(/*! ./documentList.component.html */ "./src/app/editor/documentList/documentList.component.html"),
            styles: [__webpack_require__(/*! ./documentList.component.scss */ "./src/app/editor/documentList/documentList.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_document_service__WEBPACK_IMPORTED_MODULE_2__["DocumentService"]])
    ], DocumentListComponent);
    return DocumentListComponent;
}());



/***/ }),

/***/ "./src/app/editor/editable-article-resolver.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/editor/editable-article-resolver.service.ts ***!
  \*************************************************************/
/*! exports provided: EditableArticleResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditableArticleResolver", function() { return EditableArticleResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var EditableArticleResolver = /** @class */ (function () {
    function EditableArticleResolver(articlesService, router, userService) {
        this.articlesService = articlesService;
        this.router = router;
        this.userService = userService;
    }
    EditableArticleResolver.prototype.resolve = function (route, state) {
        var _this = this;
        return this.articlesService.get(route.params['slug'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (article) {
            if (_this.userService.getCurrentUser().username === article.author.username) {
                return article;
            }
            else {
                _this.router.navigateByUrl('/');
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return _this.router.navigateByUrl('/'); }));
    };
    EditableArticleResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core__WEBPACK_IMPORTED_MODULE_3__["ArticlesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _core__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], EditableArticleResolver);
    return EditableArticleResolver;
}());



/***/ }),

/***/ "./src/app/editor/editor-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/editor/editor-routing.module.ts ***!
  \*************************************************/
/*! exports provided: EditorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorRoutingModule", function() { return EditorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editable-article-resolver.service */ "./src/app/editor/editable-article-resolver.service.ts");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core */ "./src/app/core/index.ts");






var routes = [
    {
        path: '',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
    },
    {
        path: ':slug',
        component: _editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"],
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        resolve: {
            article: _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_4__["EditableArticleResolver"]
        }
    }
];
var EditorRoutingModule = /** @class */ (function () {
    function EditorRoutingModule() {
    }
    EditorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EditorRoutingModule);
    return EditorRoutingModule;
}());



/***/ }),

/***/ "./src/app/editor/editor.component.html":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jss2\" style=\"background-image: url(../../assets/image/preview-403821-nv1XHwHEgu0nD3WZ-large.jfif);\">\n  <app-spadeGame></app-spadeGame>\n  <app-chat></app-chat>\n  <app-facebookshare></app-facebookshare>\n  <app-shareURl></app-shareURl>\n  <app-ads></app-ads>\n  <app-ads1></app-ads1>\n</div>\n<div id=\"myModal\" class=\"modal\">\n  <div id=\"loading-wrapper\">\n    <div id=\"loading-text\">Loading...</div>\n    <div id=\"loading-content\"></div>\n  </div>\n</div>\n<div id=\"configmodal\" >\n  <div class=\"boxs\">\n    <h2>Configure Audio/Video</h2>\n    <br />\n    <p>Before the game begins, let's make sure your audio/video are configured correctly. The microphone should light up as you\n    talk. If it is not, please select a different input device.</p>\n    <h4>Audio Input:</h4>\n    <select name=\"\" id=\"audioinput\" class=\"select\"></select>\n    <h4>Audio Output:</h4>\n    <select name=\"\" id=\"audiooutput\" class=\"select\"></select>\n    <h4>Video Input:</h4>\n    <select name=\"\" id=\"videoinput\" class=\"select\"></select>\n    <div [ngClass]=\"{'publishing': publishing}\" #publisherDiv></div>\n    <div class=\"btn-create\" (click) = \"Done_configmoal()\">Done</div>\n  </div>\n</div>\n<div id=\"waiting\">\n  <div id=\"loading-wrapper\">\n    <div class=\"waiting\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/editor.component.scss":
/*!**********************************************!*\
  !*** ./src/app/editor/editor.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jss2 {\n  height: 1000px;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  flex-direction: column; }\n\n.table {\n  background-color: #074e2c;\n  background-image: url(/assets/image/black-thread-light.png);\n  flex: 1 1;\n  margin-left: 300px;\n  margin-right: 300px;\n  margin-top: 150px;\n  margin-bottom: 150px;\n  border-radius: 2rem;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.jss21 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: stretch; }\n\n.tableContainer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: stretch; }\n\n.modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1000;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: black;\n  /* Black w/ opacity */ }\n\n#waiting {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1000;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: #211f1f2e;\n  /* Black w/ opacity */ }\n\n#loading-wrapper {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0; }\n\n#loading-text {\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #999;\n  width: 100px;\n  height: 30px;\n  margin: -7px 0 0 -45px;\n  text-align: center;\n  font-family: 'PT Sans Narrow', sans-serif;\n  font-size: 20px; }\n\n#loading-content {\n  display: block;\n  position: relative;\n  left: 50%;\n  top: 50%;\n  width: 170px;\n  height: 170px;\n  margin: -85px 0 0 -85px;\n  border: 3px solid #F00; }\n\n#loading-content:after {\n  content: \"\";\n  position: absolute;\n  border: 3px solid #0F0;\n  left: 15px;\n  right: 15px;\n  top: 15px;\n  bottom: 15px; }\n\n#loading-content:before {\n  content: \"\";\n  position: absolute;\n  border: 3px solid #00F;\n  left: 5px;\n  right: 5px;\n  top: 5px;\n  bottom: 5px; }\n\n#loading-content {\n  border: 3px solid transparent;\n  border-top-color: #4D658D;\n  border-bottom-color: #4D658D;\n  border-radius: 50%;\n  -webkit-animation: loader 2s linear infinite;\n  animation: loader 2s linear infinite; }\n\n#loading-content:before {\n  border: 3px solid transparent;\n  border-top-color: #D4CC6A;\n  border-bottom-color: #D4CC6A;\n  border-radius: 50%;\n  -webkit-animation: loader 3s linear infinite;\n  animation: loader 3s linear infinite; }\n\n#loading-content:after {\n  border: 3px solid transparent;\n  border-top-color: #84417C;\n  border-bottom-color: #84417C;\n  border-radius: 50%;\n  -webkit-animation: loader 1.5s linear infinite;\n  animation: loader 1.5s linear infinite;\n  -moz-animation: loader 2s linear infinite;\n  -o-animation: loader 2s linear infinite; }\n\n@-webkit-keyframes loaders {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes loaders {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@-webkit-keyframes loader {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes loader {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n\n#content-wrapper {\n  color: #FFF;\n  position: fixed;\n  left: 0;\n  top: 20px;\n  width: 100%;\n  height: 100%; }\n\n#header {\n  width: 800px;\n  margin: 0 auto;\n  text-align: center;\n  height: 100px;\n  background-color: #666; }\n\n#content {\n  width: 800px;\n  height: 1000px;\n  margin: 0 auto;\n  text-align: center;\n  background-color: #888; }\n\n#configmodal {\n  display: none;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 1;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(92, 89, 89, 0.212);\n  /* Black w/ opacity */ }\n\n.boxs {\n  width: 700px;\n  height: 576px;\n  border: 30px solid #131313;\n  border-radius: 10px;\n  margin: 50px auto;\n  background: #131313;\n  color: white; }\n\n.select {\n  background-color: #131313;\n  height: 37px;\n  margin: 0 0 10px 0;\n  border-color: #131313;\n  border-bottom-color: white; }\n\n.btn-create {\n  float: right;\n  background: transparent;\n  border: 1px solid white;\n  width: 200px;\n  line-height: 50px;\n  border-radius: 25px;\n  text-align: center;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  position: relative;\n  margin-bottom: 30px;\n  overflow: hidden;\n  transition: 300ms; }\n\n.btn-create span {\n  z-index: 93;\n  position: relative; }\n\n.btn-create:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: -105%;\n  transition: 300ms;\n  background: rgba(255, 255, 255, 0.52);\n  transform: skew(-30deg); }\n\n.btn-create:hover:before {\n  left: 105%; }\n\n.btn-create:hover {\n  box-shadow: 5px 5px 15px 0px rgba(0, 0, 0, 0.3);\n  cursor: pointer; }\n\n@media only screen and (max-width: 360px) {\n  .table {\n    margin-left: 300px;\n    margin-right: 300px; } }\n\n.playerone {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  position: absolute; }\n\n.playertwo {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  position: absolute;\n  right: 120px;\n  top: 400px; }\n\n.playerthree {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  position: absolute;\n  bottom: 0; }\n\n.playerfour {\n  width: 200px;\n  height: 200px;\n  background-color: red;\n  position: absolute;\n  left: 120px;\n  top: 400px; }\n\n.timer {\n  position: absolute;\n  left: 50%;\n  top: 21px;\n  z-index: 1000;\n  color: white;\n  font-size: 38px;\n  display: none; }\n\n.waiting {\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  font-size: 2rem;\n  position: relative; }\n\n.waiting:after {\n    content: \"Waiting.\";\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: transparent;\n    color: white;\n    -webkit-animation: waiting 3s steps(3, end) infinite;\n            animation: waiting 3s steps(3, end) infinite; }\n\n@-webkit-keyframes waiting {\n  33% {\n    content: \"Waiting..\"; }\n  66% {\n    content: \"Waiting...\"; } }\n\n@keyframes waiting {\n  33% {\n    content: \"Waiting..\"; }\n  66% {\n    content: \"Waiting...\"; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL0Y6XFxQcm9ncmFtTGlzdFxcMTFzcGFkZS1nYW1lMTFcXHNwYWRlIGdhbWUvc3JjXFxhcHBcXGVkaXRvclxcZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLHlCQUF5QjtFQUN6QiwyREFBMkQ7RUFDM0QsU0FBUztFQUNULGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCLEVBQUE7O0FBRXpCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLGNBQWM7RUFBRSxzQkFBQTtFQUNoQixlQUFlO0VBQUUsa0JBQUE7RUFDakIsYUFBYTtFQUFFLGVBQUE7RUFDZixrQkFBa0I7RUFBRSx3QkFBQTtFQUNwQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFdBQVc7RUFBRSxlQUFBO0VBQ2IsWUFBWTtFQUFFLGdCQUFBO0VBQ2QsY0FBYztFQUFFLDRCQUFBO0VBQ2hCLHVCQUE0QjtFQUFFLG1CQUFBO0VBQzlCLHVCQUF1QjtFQUFFLHFCQUFBLEVBQXNCOztBQUdqRDtFQUNFLGFBQWE7RUFBRSxzQkFBQTtFQUNmLGVBQWU7RUFBRSxrQkFBQTtFQUNqQixhQUFhO0VBQUUsZUFBQTtFQUNmLGtCQUFrQjtFQUFFLHdCQUFBO0VBQ3BCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUFFLGVBQUE7RUFDYixZQUFZO0VBQUUsZ0JBQUE7RUFDZCxjQUFjO0VBQUUsNEJBQUE7RUFDaEIsdUJBQTRCO0VBQUUsbUJBQUE7RUFDOUIsMkJBQTJCO0VBQUUscUJBQUEsRUFBc0I7O0FBSXJEO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLE1BQU0sRUFBQTs7QUFHUjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHlDQUF5QztFQUN6QyxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDVixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQiw0Q0FBNEM7RUFHNUMsb0NBQW9DLEVBQUE7O0FBR3RDO0VBQ0UsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUc1QyxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSw2QkFBNkI7RUFDN0IseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsOENBQThDO0VBQzlDLHNDQUFzQztFQUNwQyx5Q0FBeUM7RUFDM0MsdUNBQXVDLEVBQUE7O0FBR3pDO0VBQ0U7SUFHRSx1QkFBdUIsRUFBQTtFQUV6QjtJQUdFLHlCQUF5QixFQUFBLEVBQUE7O0FBVDdCO0VBQ0U7SUFHRSx1QkFBdUIsRUFBQTtFQUV6QjtJQUdFLHlCQUF5QixFQUFBLEVBQUE7O0FBSTdCO0VBQ0U7SUFHRSx1QkFBdUIsRUFBQTtFQUV6QjtJQUdFLHlCQUF5QixFQUFBLEVBQUE7O0FBVDdCO0VBQ0U7SUFHRSx1QkFBdUIsRUFBQTtFQUV6QjtJQUdFLHlCQUF5QixFQUFBLEVBQUE7O0FBSTdCO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFFRSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBRUUsWUFBWTtFQUNaLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWE7RUFBRSxzQkFBQTtFQUNmLGVBQWU7RUFBRSxrQkFBQTtFQUNqQixVQUFVO0VBQUUsZUFBQTtFQUNaLGtCQUFrQjtFQUFFLHdCQUFBO0VBQ3BCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUFFLGVBQUE7RUFDYixZQUFZO0VBQUUsZ0JBQUE7RUFDZCxjQUFjO0VBQUUsNEJBQUE7RUFDaEIsdUJBQTRCO0VBQUUsbUJBQUE7RUFDOUIseUNBQXlDO0VBQUUscUJBQUEsRUFBc0I7O0FBR25FO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYiwwQkFBMEI7RUFDMUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdoQjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQiwwQkFBMEIsRUFBQTs7QUFHNUI7RUFDSSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFVO0VBQ1YsaUJBQWdCO0VBQ2hCLHFDQUFrQztFQUNsQyx1QkFBc0IsRUFBQTs7QUFFMUI7RUFDSSxVQUFVLEVBQUE7O0FBR2Q7RUFDSSwrQ0FBK0M7RUFDakQsZUFBYyxFQUFBOztBQUdoQjtFQUNFO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBLEVBRXRCOztBQUdIO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFTLEVBQUE7O0FBRVg7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsU0FBUSxFQUFBOztBQUdWO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFTLEVBQUE7O0FBR1g7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhLEVBQUE7O0FBSWY7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBTHBCO0lBUUksbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixvREFBNEM7WUFBNUMsNENBQTRDLEVBQUE7O0FBSWhEO0VBQ0U7SUFDRSxvQkFBb0IsRUFBQTtFQUV0QjtJQUNFLHFCQUFxQixFQUFBLEVBQUE7O0FBTHpCO0VBQ0U7SUFDRSxvQkFBb0IsRUFBQTtFQUV0QjtJQUNFLHFCQUFxQixFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmpzczJ7XHJcbiAgaGVpZ2h0OiAxMDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udGFibGV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3NGUyYztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZS9ibGFjay10aHJlYWQtbGlnaHQucG5nKTtcclxuICBmbGV4OiAxIDE7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMzAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5qc3MyMXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxufVxyXG5cclxuLnRhYmxlQ29udGFpbmVye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xyXG4gIHotaW5kZXg6IDEwMDA7IC8qIFNpdCBvbiB0b3AgKi9cclxuICBwYWRkaW5nLXRvcDogMTAwcHg7IC8qIExvY2F0aW9uIG9mIHRoZSBib3ggKi9cclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xyXG4gIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cclxuICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbiN3YWl0aW5ne1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTAwMDsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxMWYxZjJlOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcblxyXG4jbG9hZGluZy13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG59XHJcblxyXG4jbG9hZGluZy10ZXh0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbWFyZ2luOiAtN3B4IDAgMCAtNDVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdQVCBTYW5zIE5hcnJvdycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jbG9hZGluZy1jb250ZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiAxNzBweDtcclxuICBoZWlnaHQ6IDE3MHB4O1xyXG4gIG1hcmdpbjogLTg1cHggMCAwIC04NXB4O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICNGMDA7XHJcbn1cclxuXHJcbiNsb2FkaW5nLWNvbnRlbnQ6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICMwRjA7XHJcbiAgbGVmdDogMTVweDtcclxuICByaWdodDogMTVweDtcclxuICB0b3A6IDE1cHg7XHJcbiAgYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4jbG9hZGluZy1jb250ZW50OmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzAwRjtcclxuICBsZWZ0OiA1cHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB0b3A6IDVweDtcclxuICBib3R0b206IDVweDtcclxufVxyXG5cclxuI2xvYWRpbmctY29udGVudCB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzRENjU4RDtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNEQ2NThEO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtbW96LWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtby1hbmltYXRpb246IGxvYWRlciAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBsb2FkZXIgMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcblxyXG4jbG9hZGluZy1jb250ZW50OmJlZm9yZSB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogI0Q0Q0M2QTtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjRDRDQzZBO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogbG9hZGVyIDNzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBsb2FkZXIgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGxvYWRlciAzcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbiNsb2FkaW5nLWNvbnRlbnQ6YWZ0ZXIge1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICM4NDQxN0M7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzg0NDE3QztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGxvYWRlciAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246IGxvYWRlciAxLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIC1tb3otYW5pbWF0aW9uOiBsb2FkZXIgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1vLWFuaW1hdGlvbjogbG9hZGVyIDJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkZXJzIHtcclxuICAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsb2FkZXIge1xyXG4gIDAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4jY29udGVudC13cmFwcGVyIHtcclxuICBjb2xvcjogI0ZGRjtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jaGVhZGVyXHJcbntcclxuICB3aWR0aDogODAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcclxufVxyXG5cclxuI2NvbnRlbnRcclxue1xyXG4gIHdpZHRoOiA4MDBweDtcclxuICBoZWlnaHQ6IDEwMDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxufVxyXG5cclxuI2NvbmZpZ21vZGFse1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDsgLyogTG9jYXRpb24gb2YgdGhlIGJveCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5MiwgODksIDg5LCAwLjIxMik7IC8qIEJsYWNrIHcvIG9wYWNpdHkgKi9cclxufVxyXG5cclxuLmJveHN7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBoZWlnaHQ6IDU3NnB4O1xyXG4gICAgYm9yZGVyOiAzMHB4IHNvbGlkICMxMzEzMTM7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjMTMxMzEzO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc2VsZWN0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMzEzMTM7XHJcbiAgaGVpZ2h0OiAzN3B4O1xyXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICBib3JkZXItY29sb3I6ICMxMzEzMTM7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tY3JlYXRle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjozMDBtcztcclxufVxyXG5cclxuLmJ0bi1jcmVhdGUgc3BhbntcclxuICAgIHotaW5kZXg6IDkzO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5idG4tY3JlYXRlOmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6LTEwNSU7XHJcbiAgICB0cmFuc2l0aW9uOjMwMG1zO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjUyKTtcclxuICAgIHRyYW5zZm9ybTpza2V3KC0zMGRlZyk7XHJcbn1cclxuLmJ0bi1jcmVhdGU6aG92ZXI6YmVmb3Jle1xyXG4gICAgbGVmdDogMTA1JTtcclxuXHJcbn1cclxuLmJ0bi1jcmVhdGU6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xyXG4gIC50YWJsZXtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwMHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5wbGF5ZXJvbmV7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHJcbn1cclxuLnBsYXllcnR3b3tcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxMjBweDtcclxuICB0b3A6NDAwcHg7XHJcbn1cclxuLnBsYXllcnRocmVle1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOjA7XHJcblxyXG59XHJcbi5wbGF5ZXJmb3Vye1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMTIwcHg7XHJcbiAgdG9wOjQwMHB4O1xyXG59XHJcblxyXG4udGltZXJ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDIxcHg7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzOHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4ud2FpdGluZyB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwdnc7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiV2FpdGluZy5cIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGFuaW1hdGlvbjogd2FpdGluZyAzcyBzdGVwcygzLCBlbmQpIGluZmluaXRlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyB3YWl0aW5nIHtcclxuICAzMyUge1xyXG4gICAgY29udGVudDogXCJXYWl0aW5nLi5cIjtcclxuICB9XHJcbiAgNjYlIHtcclxuICAgIGNvbnRlbnQ6IFwiV2FpdGluZy4uLlwiO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opentok_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../opentok.service */ "./src/app/opentok.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_services_hashURl_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/hashURl.service */ "./src/app/core/services/hashURl.service.ts");






var EditorComponent = /** @class */ (function () {
    function EditorComponent(opentokService, hashurl) {
        this.opentokService = opentokService;
        this.hashurl = hashurl;
    }
    EditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var OT = this.opentokService.getOT();
        this.publisher = OT.initPublisher(this.publisherDiv.nativeElement, {
            insertMode: "append",
            width: "150px",
            height: "100px"
        });
        if (this.session) {
            if (this.session["isConnected"]()) {
                this.publish();
            }
            this.session.on("sessionConnected", function () { return _this.publish(); });
        }
    };
    EditorComponent.prototype.ngOnInit = function () {
        this.firstmodal();
        this.hashurl.urlHash();
    };
    EditorComponent.prototype.publish = function () {
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
    EditorComponent.prototype.firstmodal = function () {
        var _this = this;
        setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__(".modal").css("display", "none");
            _this.secondmodal();
        }, 2000);
    };
    EditorComponent.prototype.secondmodal = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__('#waiting').css('display', 'block');
        // this.thirdmodal();
    };
    EditorComponent.prototype.thirdmodal = function () {
        navigator.mediaDevices.enumerateDevices().then(this.gotDevices).catch();
        jquery__WEBPACK_IMPORTED_MODULE_3__("#configmodal").css("display", "block");
    };
    EditorComponent.prototype.gotDevices = function (deviceInfos) {
        console.log("deviceInfos", deviceInfos);
        if (deviceInfos.length == "null") {
        }
        else {
            for (var i = 0; i < deviceInfos.length; i++) {
                if (deviceInfos[i].kind == "audioinput") {
                    console.log(deviceInfos[i].kind == "audioinput");
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#audioinput").append("<option>" + deviceInfos[i].label + "</option>");
                }
                if (deviceInfos[i].kind == "audiooutput") {
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#audiooutput").append("<option>" + deviceInfos[i].label + "</option>");
                }
                if (deviceInfos[i].kind == "videoinput") {
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#videoinput").append("<option>" + deviceInfos[i].label + "</option>");
                }
            }
        }
    };
    EditorComponent.prototype.Done_configmoal = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__("#configmodal").css("display", "none");
        jquery__WEBPACK_IMPORTED_MODULE_3__(".timer").css("display", "block");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("publisherselfDiv"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditorComponent.prototype, "publisherselfDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("publisherDiv"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], EditorComponent.prototype, "publisherDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", OT.Session)
    ], EditorComponent.prototype, "session", void 0);
    EditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-editor-page",
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/editor/editor.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./editor.component.scss */ "./src/app/editor/editor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_opentok_service__WEBPACK_IMPORTED_MODULE_2__["OpentokService"],
            _core_services_hashURl_service__WEBPACK_IMPORTED_MODULE_4__["HashURlService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/editor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/editor/editor.module.ts ***!
  \*****************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editable-article-resolver.service */ "./src/app/editor/editable-article-resolver.service.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _editor_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor-routing.module */ "./src/app/editor/editor-routing.module.ts");
/* harmony import */ var _opentok_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../opentok.service */ "./src/app/opentok.service.ts");
/* harmony import */ var _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./publisher/publisher.component */ "./src/app/editor/publisher/publisher.component.ts");
/* harmony import */ var _subObject_subObject_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subObject/subObject.component */ "./src/app/editor/subObject/subObject.component.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/fesm5/ngx-socket-io.js");
/* harmony import */ var _documentList_documentList_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./documentList/documentList.component */ "./src/app/editor/documentList/documentList.component.ts");
/* harmony import */ var _document_document_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./document/document.component */ "./src/app/editor/document/document.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/editor/chat/chat.component.ts");
/* harmony import */ var _spadeGame_spadeGame_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./spadeGame/spadeGame.component */ "./src/app/editor/spadeGame/spadeGame.component.ts");
/* harmony import */ var _facebookshare_facebookshare_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./facebookshare/facebookshare.component */ "./src/app/editor/facebookshare/facebookshare.component.ts");
/* harmony import */ var _shareURl_shareURl_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shareURl/shareURl.component */ "./src/app/editor/shareURl/shareURl.component.ts");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! jw-angular-social-buttons */ "./node_modules/jw-angular-social-buttons/lib/jw-angular-social-buttons.module.js");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _clock_clock_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./clock/clock.component */ "./src/app/editor/clock/clock.component.ts");
/* harmony import */ var _ads_ads_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ads/ads.component */ "./src/app/editor/ads/ads.component.ts");
/* harmony import */ var _ads1_ads1_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ads1/ads1.component */ "./src/app/editor/ads1/ads1.component.ts");
/* harmony import */ var ng2_adsense__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-adsense */ "./node_modules/ng2-adsense/fesm5/ng2-adsense.js");





















var config = { url: "http://localhost:4000", options: {} };
console.log("sockentconfig", ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["SocketIoModule"].forRoot(config));
var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _editor_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditorRoutingModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_9__["SocketIoModule"].forRoot(config),
                jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_16__["JwSocialButtonsModule"],
                ng2_adsense__WEBPACK_IMPORTED_MODULE_20__["AdsenseModule"].forRoot({
                    adClient: 'ca-pub-7640562161899788',
                    adSlot: 7259870550,
                }),
            ],
            declarations: [
                _editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"],
                _publisher_publisher_component__WEBPACK_IMPORTED_MODULE_7__["PublisherComponent"],
                _subObject_subObject_component__WEBPACK_IMPORTED_MODULE_8__["SubObjectComponent"],
                _documentList_documentList_component__WEBPACK_IMPORTED_MODULE_10__["DocumentListComponent"],
                _document_document_component__WEBPACK_IMPORTED_MODULE_11__["DocumentComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_12__["ChatComponent"],
                _spadeGame_spadeGame_component__WEBPACK_IMPORTED_MODULE_13__["SpadeGameComponent"],
                _facebookshare_facebookshare_component__WEBPACK_IMPORTED_MODULE_14__["FacebookshareComponent"],
                _shareURl_shareURl_component__WEBPACK_IMPORTED_MODULE_15__["ShareURlComponent"],
                _clock_clock_component__WEBPACK_IMPORTED_MODULE_17__["ClockComponent"],
                _ads_ads_component__WEBPACK_IMPORTED_MODULE_18__["AdsComponent"],
                _ads1_ads1_component__WEBPACK_IMPORTED_MODULE_19__["Ads1Component"],
            ],
            providers: [_editable_article_resolver_service__WEBPACK_IMPORTED_MODULE_3__["EditableArticleResolver"], _opentok_service__WEBPACK_IMPORTED_MODULE_6__["OpentokService"]],
        })
    ], EditorModule);
    return EditorModule;
}());



/***/ }),

/***/ "./src/app/editor/facebookshare/facebookshare.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/editor/facebookshare/facebookshare.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "Result\n<div class=\"icon\">\n  <i class=\"\tfa fa-share-alt\"></i>\n  <ul class=\"menu\">\n    <li class=\"spread\" (click) = \"fb($event)\">\n      <a class=\"unit\">\n        <i class=\"fa fa-facebook-f\"></i>\n      </a>\n    </li>\n\n    <li class=\"spread\">\n      <a class=\"unit\">\n        <i class=\"fa fa-google-plus\"></i>\n      </a>\n    </li>\n\n    <li class=\"spread\">\n      <a class=\"unit\">\n        <i class=\"\tfa fa-twitter\"></i>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/facebookshare/facebookshare.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/editor/facebookshare/facebookshare.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* [1] */\n/* [2] */\n/* [3] */\n/* [4] */\n/* [5] */\n/* [6] */\n/* Styles: */\n.icon {\n  position: fixed;\n  bottom: 10px;\n  left: 10px;\n  background: #ffffff17;\n  cursor: pointer;\n  margin: auto;\n  color: white;\n  border-radius: 50%;\n  height: 60px;\n  width: 60px;\n  line-height: 60px;\n  text-align: center;\n  font-weight: bold;\n  transition: 0.24s 0.2s;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }\n.icon:hover {\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22); }\n.menu {\n  position: absolute;\n  top: -30px;\n  left: -30px;\n  border: 60px solid transparent;\n  cursor: default;\n  border-radius: 50%;\n  transform: scale(0);\n  transition: transform 1.4s 0.07s;\n  z-index: -5; }\n.spread {\n  position: absolute;\n  top: -100px;\n  left: -100px;\n  transform-origin: 100px 100px;\n  transition: all 0.5s 0.1s; }\n.icon:hover {\n  /* Where all the MAGIC happens: */ }\n.icon:hover .menu {\n    transition: transform 0.4s 0.08s,\r z-index   0s  0.5s;\n    transform: scale(1);\n    z-index: 5; }\n.icon:hover .spread, .icon:hover .unit {\n    transition: all 0.2s; }\n.icon:hover .spread:nth-child(1) {\n    transition-delay: 0.02s;\n    transform: rotate(50deg); }\n.icon:hover .spread:nth-child(1) .unit {\n      transition-delay: 0.04s;\n      transform: rotate(635deg); }\n.icon:hover .spread:nth-child(2) {\n    transition-delay: 0.04s;\n    transform: rotate(90deg); }\n.icon:hover .spread:nth-child(2) .unit {\n      transition-delay: 0.08s;\n      transform: rotate(595deg); }\n.icon:hover .spread:nth-child(3) {\n    transition-delay: 0.06s;\n    transform: rotate(130deg); }\n.icon:hover .spread:nth-child(3) .unit {\n      transition-delay: 0.12s;\n      transform: rotate(555deg); }\n.icon:hover .spread:nth-child(4) {\n    transition-delay: 0.08s;\n    transform: rotate(170deg); }\n.icon:hover .spread:nth-child(4) .unit {\n      transition-delay: 0.16s;\n      transform: rotate(515deg); }\n.icon:hover .spread:nth-child(5) {\n    transition-delay: 0.1s;\n    transform: rotate(210deg); }\n.icon:hover .spread:nth-child(5) .unit {\n      transition-delay: 0.2s;\n      transform: rotate(475deg); }\n.icon:hover .spread:nth-child(6) {\n    transition-delay: 0.12s;\n    transform: rotate(250deg); }\n.icon:hover .spread:nth-child(6) .unit {\n      transition-delay: 0.24s;\n      transform: rotate(435deg); }\n.icon:hover .spread:nth-child(7) {\n    transition-delay: 0.14s;\n    transform: rotate(290deg); }\n.icon:hover .spread:nth-child(7) .unit {\n      transition-delay: 0.28s;\n      transform: rotate(395deg); }\n.icon:hover .spread:nth-child(8) {\n    transition-delay: 0.16s;\n    transform: rotate(330deg); }\n.icon:hover .spread:nth-child(8) .unit {\n      transition-delay: 0.32s;\n      transform: rotate(355deg); }\n.icon:hover .spread:nth-child(9) {\n    transition-delay: 0.18s;\n    transform: rotate(370deg); }\n.icon:hover .spread:nth-child(9) .unit {\n      transition-delay: 0.36s;\n      transform: rotate(315deg); }\n/* END .icon:hover */\n.unit {\n  position: absolute;\n  background: #ffffff17;\n  font-size: 60%;\n  text-decoration: none;\n  width: 45px;\n  height: 45px;\n  line-height: 45px;\n  color: white;\n  font-size: larger;\n  border-radius: 50%;\n  transition: 0.6s;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2ZhY2Vib29rc2hhcmUvRjpcXFByb2dyYW1MaXN0XFwxMXNwYWRlLWdhbWUxMVxcc3BhZGUgZ2FtZS9zcmNcXGFwcFxcZWRpdG9yXFxmYWNlYm9va3NoYXJlXFxmYWNlYm9va3NoYXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9lZGl0b3IvZmFjZWJvb2tzaGFyZS9mYWNlYm9va3NoYXJlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNtQixRQUFBO0FBQ0csUUFBQTtBQUNLLFFBQUE7QUFDSixRQUFBO0FBRUEsUUFBQTtBQUNPLFFBQUE7QUFFOUIsWUFBQTtBQUNBO0VBQ0ksZUFBZTtFQUNmLFlBQVk7RUFDWixVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qiw0RUFBc0UsRUFBQTtBQUcxRTtFQUNJLDJFQUFzRSxFQUFBO0FBRzFFO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBN0JrRDtFQThCbEQsV0E5QmtEO0VBK0JsRCw4QkFBb0M7RUFDcEMsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDakIsZ0NBQWdDO0VBQ2hDLFdBQVcsRUFBQTtBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBeENpQjtFQXlDakIsWUF6Q2lCO0VBMENqQiw2QkExQ2lCO0VBMkNqQix5QkFBeUIsRUFBQTtBQUc3QjtFQVdBLGlDQUFBLEVBQWtDO0FBWGxDO0lBRVEscURBRVc7SUFDWCxtQkFDRjtJQU5OLFVBT0ssRUFBQTtBQ1BIO0lEQUYsb0JBYWMsRUFBQTtBQ1haO0lEYVUsdUJBQVc7SUFmdkIsd0JBYWMsRUFBQTtBQ1JWO01EYWEsdUJBQVc7TUFsQjVCLHlCQWF5QixFQUFDO0FDTHhCO0lET1UsdUJBQVc7SUFmdkIsd0JBYWMsRUFBQTtBQ0ZWO01ET2EsdUJBQVc7TUFsQjVCLHlCQWF5QixFQUFDO0FDQ3hCO0lEQ1UsdUJBQVc7SUFmdkIseUJBYWMsRUFBQTtBQ0lWO01EQ2EsdUJBQVc7TUFsQjVCLHlCQWF5QixFQUFDO0FDT3hCO0lETFUsdUJBQVc7SUFmdkIseUJBYWMsRUFBQTtBQ1VWO01ETGEsdUJBQVc7TUFsQjVCLHlCQWF5QixFQUFDO0FDYXhCO0lEWFUsc0JBQVc7SUFmdkIseUJBYWMsRUFBQTtBQ2dCVjtNRFhhLHNCQUFXO01BbEI1Qix5QkFheUIsRUFBQztBQ21CeEI7SURqQlUsdUJBQVc7SUFmdkIseUJBYWMsRUFBQTtBQ3NCVjtNRGpCYSx1QkFBVztNQWxCNUIseUJBYXlCLEVBQUM7QUN5QnhCO0lEdkJVLHVCQUFXO0lBZnZCLHlCQWFjLEVBQUE7QUM0QlY7TUR2QmEsdUJBQVc7TUFsQjVCLHlCQWF5QixFQUFDO0FDK0J4QjtJRDdCVSx1QkFBVztJQWZ2Qix5QkFhYyxFQUFBO0FDa0NWO01EN0JhLHVCQUFXO01BbEI1Qix5QkFheUIsRUFBQztBQ3FDeEI7SURuQ1UsdUJBQVc7SUFmdkIseUJBYWMsRUFBQTtBQ3dDVjtNRG5DYSx1QkFBVztNQ3FDdEIseUJBQXlCLEVBQUU7QUQvQmpDLG9CQUFNO0FDa0NOO0VEaENJLGtCQUFZO0VBQ1oscUJBQWM7RUFDZCxjQUFBO0VBQ0EscUJBN0VnQjtFQThFaEIsV0E5RVk7RUErRVosWUFBVztFQUNYLGlCQUFZO0VBQ1osWUFBVztFQUNYLGlCQUFlO0VBQ2Ysa0JBQWdCO0VBQ2hCLGdCQUFlO0VDa0NqQixlQUFlLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvZmFjZWJvb2tzaGFyZS9mYWNlYm9va3NoYXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICAgICAgICAgJGxpOiA5OyAvKiBbMV0gKi9cclxuICAgICRpY29uLXNpemU6IDYwcHg7IC8qIFsyXSAqL1xyXG4gICAgJG1lbnUtc2l6ZTogMTIwcHggLyAyOyAvKiBbM10gKi9cclxuICAgICR1bml0LXNpemU6IDQ1cHg7ICAvKiBbNF0gKi9cclxuJG1lbnUtcG9zaXRpb246ICgoJG1lbnUtc2l6ZSAqIDIpIC0gJGljb24tc2l6ZSkgLyAtMjtcclxuICAgICAgICRvZmZzZXQ6IDEwMHB4OyAvKiBbNV0gKi9cclxuICAgICAgICAgICRkZWc6IDM2MGRlZyAvICRsaTsgLyogWzZdICovXHJcblxyXG4vKiBTdHlsZXM6ICovXHJcbi5pY29uIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGxlZnQ6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmMTc7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjI0cyAwLjJzO1xyXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxufVxyXG5cclxuLmljb246aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAxOXB4IDM4cHggcmdiYSgwLDAsMCwwLjMwKSwgMCAxNXB4IDEycHggcmdiYSgwLDAsMCwwLjIyKTtcclxufVxyXG5cclxuLm1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6ICRtZW51LXBvc2l0aW9uO1xyXG4gIGxlZnQ6ICRtZW51LXBvc2l0aW9uO1xyXG4gIGJvcmRlcjogJG1lbnUtc2l6ZSBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS40cyAwLjA3cztcclxuICAgIHotaW5kZXg6IC01O1xyXG59XHJcblxyXG4uc3ByZWFkIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLSgkb2Zmc2V0KTtcclxuICAgIGxlZnQ6IC0oJG9mZnNldCk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAkb2Zmc2V0ICRvZmZzZXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG59XHJcblxyXG4uaWNvbjpob3ZlciB7XHJcbiAgICAgLm1lbnUge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIDAuMDhzLFxyXG4gICAgICAgIHotaW5kZXggICAwcyAgMC41cztcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgfVxyXG4gICAgIC5zcHJlYWQsIC51bml0IHtcclxuICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgfVxyXG5cclxuLyogV2hlcmUgYWxsIHRoZSBNQUdJQyBoYXBwZW5zOiAqL1xyXG4gICAgIEBmb3IgJG0gZnJvbSAxIHRocm91Z2ggJGxpIHtcclxuICAgICAgIC5zcHJlYWQ6bnRoLWNoaWxkKCN7JG19KSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6ICRtICogMC4wMnM7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEwICsgJGRlZyAqICRtKTtcclxuICAgICAgICAgICAgLnVuaXQge1xyXG4gICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6ICRtICogMC4wNHM7XHJcbiAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLSRkZWcgKiAkbSArIDcyMCAtIDQ1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gIH1cclxufSAvKiBFTkQgLmljb246aG92ZXIgKi9cclxuXHJcbi51bml0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmYxNztcclxuICAgIGZvbnQtc2l6ZTogNjAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgd2lkdGg6ICR1bml0LXNpemU7XHJcbiAgICBoZWlnaHQ6ICR1bml0LXNpemU7XHJcbiAgICBsaW5lLWhlaWdodDogJHVuaXQtc2l6ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogMC42cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIvKiBbMV0gKi9cbi8qIFsyXSAqL1xuLyogWzNdICovXG4vKiBbNF0gKi9cbi8qIFs1XSAqL1xuLyogWzZdICovXG4vKiBTdHlsZXM6ICovXG4uaWNvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmMTc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRyYW5zaXRpb246IDAuMjRzIDAuMnM7XG4gIGJveC1zaGFkb3c6IDAgMTRweCAyOHB4IHJnYmEoMCwgMCwgMCwgMC4yNSksIDAgMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yMik7IH1cblxuLmljb246aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDE5cHggMzhweCByZ2JhKDAsIDAsIDAsIDAuMyksIDAgMTVweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yMik7IH1cblxuLm1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTMwcHg7XG4gIGxlZnQ6IC0zMHB4O1xuICBib3JkZXI6IDYwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMS40cyAwLjA3cztcbiAgei1pbmRleDogLTU7IH1cblxuLnNwcmVhZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTAwcHg7XG4gIGxlZnQ6IC0xMDBweDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwcHggMTAwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7IH1cblxuLmljb246aG92ZXIge1xuICAvKiBXaGVyZSBhbGwgdGhlIE1BR0lDIGhhcHBlbnM6ICovIH1cbiAgLmljb246aG92ZXIgLm1lbnUge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIDAuMDhzLFxyIHotaW5kZXggICAwcyAgMC41cztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHotaW5kZXg6IDU7IH1cbiAgLmljb246aG92ZXIgLnNwcmVhZCwgLmljb246aG92ZXIgLnVuaXQge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XG4gIC5pY29uOmhvdmVyIC5zcHJlYWQ6bnRoLWNoaWxkKDEpIHtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjAycztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1MGRlZyk7IH1cbiAgICAuaWNvbjpob3ZlciAuc3ByZWFkOm50aC1jaGlsZCgxKSAudW5pdCB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA0cztcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYzNWRlZyk7IH1cbiAgLmljb246aG92ZXIgLnNwcmVhZDpudGgtY2hpbGQoMikge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDRzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgfVxuICAgIC5pY29uOmhvdmVyIC5zcHJlYWQ6bnRoLWNoaWxkKDIpIC51bml0IHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDhzO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNTk1ZGVnKTsgfVxuICAuaWNvbjpob3ZlciAuc3ByZWFkOm50aC1jaGlsZCgzKSB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4wNnM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTsgfVxuICAgIC5pY29uOmhvdmVyIC5zcHJlYWQ6bnRoLWNoaWxkKDMpIC51bml0IHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNTU1ZGVnKTsgfVxuICAuaWNvbjpob3ZlciAuc3ByZWFkOm50aC1jaGlsZCg0KSB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4wOHM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTcwZGVnKTsgfVxuICAgIC5pY29uOmhvdmVyIC5zcHJlYWQ6bnRoLWNoaWxkKDQpIC51bml0IHtcbiAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTZzO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNTE1ZGVnKTsgfVxuICAuaWNvbjpob3ZlciAuc3ByZWFkOm50aC1jaGlsZCg1KSB7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpOyB9XG4gICAgLmljb246aG92ZXIgLnNwcmVhZDpudGgtY2hpbGQoNSkgLnVuaXQge1xuICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ3NWRlZyk7IH1cbiAgLmljb246aG92ZXIgLnNwcmVhZDpudGgtY2hpbGQoNikge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTJzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI1MGRlZyk7IH1cbiAgICAuaWNvbjpob3ZlciAuc3ByZWFkOm50aC1jaGlsZCg2KSAudW5pdCB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI0cztcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQzNWRlZyk7IH1cbiAgLmljb246aG92ZXIgLnNwcmVhZDpudGgtY2hpbGQoNykge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTRzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI5MGRlZyk7IH1cbiAgICAuaWNvbjpob3ZlciAuc3ByZWFkOm50aC1jaGlsZCg3KSAudW5pdCB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjI4cztcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM5NWRlZyk7IH1cbiAgLmljb246aG92ZXIgLnNwcmVhZDpudGgtY2hpbGQoOCkge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTZzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7IH1cbiAgICAuaWNvbjpob3ZlciAuc3ByZWFkOm50aC1jaGlsZCg4KSAudW5pdCB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjMycztcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM1NWRlZyk7IH1cbiAgLmljb246aG92ZXIgLnNwcmVhZDpudGgtY2hpbGQoOSkge1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMThzO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM3MGRlZyk7IH1cbiAgICAuaWNvbjpob3ZlciAuc3ByZWFkOm50aC1jaGlsZCg5KSAudW5pdCB7XG4gICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjM2cztcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7IH1cblxuLyogRU5EIC5pY29uOmhvdmVyICovXG4udW5pdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjE3O1xuICBmb250LXNpemU6IDYwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBsaW5lLWhlaWdodDogNDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiAwLjZzO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/facebookshare/facebookshare.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/editor/facebookshare/facebookshare.component.ts ***!
  \*****************************************************************/
/*! exports provided: FacebookshareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookshareComponent", function() { return FacebookshareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FacebookshareComponent = /** @class */ (function () {
    function FacebookshareComponent() {
    }
    FacebookshareComponent.prototype.ngAfterViewInit = function () { };
    FacebookshareComponent.prototype.fb = function (e) {
        window.open("https://www.facebook.com/sharer/sharer.php?u=", "facebook-popup", "height=600,width=900");
    };
    FacebookshareComponent.prototype.Google = function () {
        window.open();
    };
    FacebookshareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-facebookshare",
            template: __webpack_require__(/*! ./facebookshare.component.html */ "./src/app/editor/facebookshare/facebookshare.component.html"),
            styles: [__webpack_require__(/*! ./facebookshare.component.scss */ "./src/app/editor/facebookshare/facebookshare.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FacebookshareComponent);
    return FacebookshareComponent;
}());



/***/ }),

/***/ "./src/app/editor/publisher/publisher.component.css":
/*!**********************************************************!*\
  !*** ./src/app/editor/publisher/publisher.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userprofile{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\np{\r\n  font-family: fantasy;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3B1Ymxpc2hlci9wdWJsaXNoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9lZGl0b3IvcHVibGlzaGVyL3B1Ymxpc2hlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJwcm9maWxle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5we1xyXG4gIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/publisher/publisher.component.html":
/*!***********************************************************!*\
  !*** ./src/app/editor/publisher/publisher.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userprofile\">\n  <div [ngClass]=\"{'publishing': publishing}\" #publisherDiv style=\"margin:-17px\"></div>\n  <p>{{username}}</p>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/editor/publisher/publisher.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/editor/publisher/publisher.component.ts ***!
  \*********************************************************/
/*! exports provided: PublisherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublisherComponent", function() { return PublisherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opentok_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../opentok.service */ "./src/app/opentok.service.ts");



var publish = function () {
};
var PublisherComponent = /** @class */ (function () {
    function PublisherComponent(opentokService) {
        this.opentokService = opentokService;
        this.username = localStorage.getItem("username");
        this.publishing = false;
    }
    PublisherComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var OT = this.opentokService.getOT();
        this.publisher = OT.initPublisher(this.publisherDiv.nativeElement, { insertMode: 'append', width: '93px', height: '61px', });
        if (this.session) {
            if (this.session['isConnected']()) {
                this.publish();
            }
            this.session.on('sessionConnected', function () { return _this.publish(); });
        }
    };
    PublisherComponent.prototype.publish = function () {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('publisherDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PublisherComponent.prototype, "publisherDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", OT.Session)
    ], PublisherComponent.prototype, "session", void 0);
    PublisherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publisher',
            template: __webpack_require__(/*! ./publisher.component.html */ "./src/app/editor/publisher/publisher.component.html"),
            styles: [__webpack_require__(/*! ./publisher.component.css */ "./src/app/editor/publisher/publisher.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_opentok_service__WEBPACK_IMPORTED_MODULE_2__["OpentokService"]])
    ], PublisherComponent);
    return PublisherComponent;
}());



/***/ }),

/***/ "./src/app/editor/shareURl/shareURl.component.html":
/*!*********************************************************!*\
  !*** ./src/app/editor/shareURl/shareURl.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"shareheader\">\n  <p id=\"p1\" (click) = \"copyToClipboard('#p1')\"></p>\n  <app-clock></app-clock>\n</div>\n"

/***/ }),

/***/ "./src/app/editor/shareURl/shareURl.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/editor/shareURl/shareURl.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(\"https://fonts.googleapis.com/css?family=Poppins:600\");\n.shareheader {\n  position: fixed;\n  background-color: #00800075;\n  top: 82px;\n  height: 77px;\n  width: 35%;\n  border-radius: 35px;\n  display: flex;\n  text-shadow: 0 1px 0 #c9cfce, 0 2px 0 #bcc2c2, 0 2.3px 0 #afb6b6, 0 2.5px 0 #a4adac, 0 0 5px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.3); }\n#p1 {\n  cursor: pointer;\n  padding: 25px 10px 10px 30px;\n  color: white;\n  text-shadow: 0 1px 0 #c9cfce, 0 2px 0 #bcc2c2, 0 2.3px 0 #afb6b6, 0 2.5px 0 #a4adac, 0 0 5px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2), 0 20px 20px rgba(0, 0, 0, 0.3); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3NoYXJlVVJsL0Y6XFxQcm9ncmFtTGlzdFxcMTFzcGFkZS1nYW1lMTFcXHNwYWRlIGdhbWUvc3JjXFxhcHBcXGVkaXRvclxcc2hhcmVVUmxcXHNoYXJlVVJsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtFQUFZO0FBSVo7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMlFBVWtDLEVBQUE7QUFHcEM7RUFDRSxlQUFlO0VBQ2YsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWiwyUUFVa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9zaGFyZVVSbC9zaGFyZVVSbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczo2MDAnKTtcclxuXHJcblxyXG5cclxuLnNoYXJlaGVhZGVye1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4MDAwNzU7XHJcbiAgdG9wOiA4MnB4O1xyXG4gIGhlaWdodDogNzdweDtcclxuICB3aWR0aDogMzUlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0ZXh0LXNoYWRvdzowIDFweCAwIGhzbCgxNzQsNSUsODAlKSxcclxuICAgICAgICAgICAgICAwIDJweCAwIGhzbCgxNzQsNSUsNzUlKSxcclxuICAgICAgICAgICAgICAwIDIuM3B4IDAgaHNsKDE3NCw1JSw3MCUpLFxyXG4gICAgICAgICAgICAgIDAgMi41cHggMCBoc2woMTc0LDUlLDY2JSksXHJcblxyXG4gICAgICAgICAgICAgIDAgMCA1cHggcmdiYSgwLDAsMCwuMDUpLFxyXG4gICAgICAgICAgICAwIDFweCAzcHggcmdiYSgwLDAsMCwuMiksXHJcbiAgICAgICAgICAgIDAgM3B4IDVweCByZ2JhKDAsMCwwLC4yKSxcclxuICAgICAgICAgICAgMCA1cHggMTBweCByZ2JhKDAsMCwwLC4yKSxcclxuICAgICAgICAgIDAgMTBweCAxMHB4IHJnYmEoMCwwLDAsLjIpLFxyXG4gICAgICAgICAgMCAyMHB4IDIwcHggcmdiYSgwLDAsMCwuMyk7XHJcbn1cclxuXHJcbiNwMXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMjVweCAxMHB4IDEwcHggMzBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6MCAxcHggMCBoc2woMTc0LDUlLDgwJSksXHJcbiAgICAgICAgICAgICAgMCAycHggMCBoc2woMTc0LDUlLDc1JSksXHJcbiAgICAgICAgICAgICAgMCAyLjNweCAwIGhzbCgxNzQsNSUsNzAlKSxcclxuICAgICAgICAgICAgICAwIDIuNXB4IDAgaHNsKDE3NCw1JSw2NiUpLFxyXG5cclxuICAgICAgICAgICAgICAwIDAgNXB4IHJnYmEoMCwwLDAsLjA1KSxcclxuICAgICAgICAgICAgMCAxcHggM3B4IHJnYmEoMCwwLDAsLjIpLFxyXG4gICAgICAgICAgICAwIDNweCA1cHggcmdiYSgwLDAsMCwuMiksXHJcbiAgICAgICAgICAgIDAgNXB4IDEwcHggcmdiYSgwLDAsMCwuMiksXHJcbiAgICAgICAgICAwIDEwcHggMTBweCByZ2JhKDAsMCwwLC4yKSxcclxuICAgICAgICAgIDAgMjBweCAyMHB4IHJnYmEoMCwwLDAsLjMpO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/editor/shareURl/shareURl.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/editor/shareURl/shareURl.component.ts ***!
  \*******************************************************/
/*! exports provided: ShareURlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareURlComponent", function() { return ShareURlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var ShareURlComponent = /** @class */ (function () {
    function ShareURlComponent() {
    }
    ShareURlComponent.prototype.ngOnInit = function () {
        var url = location.href;
        jquery__WEBPACK_IMPORTED_MODULE_2__('#p1').html(url);
    };
    ShareURlComponent.prototype.copyToClipboard = function (element) {
        (jquery__WEBPACK_IMPORTED_MODULE_2__(element).text()).select();
        document.execCommand("copy");
    };
    ShareURlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shareURl',
            template: __webpack_require__(/*! ./shareURl.component.html */ "./src/app/editor/shareURl/shareURl.component.html"),
            styles: [__webpack_require__(/*! ./shareURl.component.scss */ "./src/app/editor/shareURl/shareURl.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShareURlComponent);
    return ShareURlComponent;
}());



/***/ }),

/***/ "./src/app/editor/spadeGame/spadeGame.component.css":
/*!**********************************************************!*\
  !*** ./src/app/editor/spadeGame/spadeGame.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/********************************************************************************************\r\n This code is copyright (C) RauÃ°Ã¡s HugbÃºnaÃ°ur ehf. (Red Ace Software LLC)\r\n\r\n This code is NOT open source, and it is NOT permitted to use it on other sites, modify it\r\n or otherwise use it for other purposes than playing on https://cardgames.io/spades/\r\n\r\n I've had to deal with multiple people stealing my work and I'm sick of it.\r\n Don't be a dick, write your own game!\r\n********************************************************************************************/\r\n\r\n.debug #wrapper {\r\n    background: red\r\n}\r\n\r\n.debug #draper-left {\r\n    background: white\r\n}\r\n\r\n.debug #draper-right {\r\n    background: yellow\r\n}\r\n\r\n.debug #board-wrapper-and-ads {\r\n    background: purple\r\n}\r\n\r\n.debug #textcontent {\r\n    background: gray\r\n}\r\n\r\n.debug #promo-links div {\r\n    background: Wheat\r\n}\r\n\r\n.debug #board-and-header {\r\n    background: maroon\r\n}\r\n\r\n#draper-left {\r\n    float: left;\r\n    width: 160px\r\n}\r\n\r\n#draper-right {\r\n    float: left;\r\n    width: 160px\r\n}\r\n\r\n#board-wrapper-and-ads {\r\n    width: 100%\r\n}\r\n\r\n#promo-links {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 13px\r\n}\r\n\r\n#promo-links div a {\r\n    padding: 3px\r\n}\r\n\r\n#board-and-header {\r\n    float: left\r\n}\r\n\r\n#board-and-header,\r\n#textcontent,\r\n#promo-links div {\r\n    width: 716px\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)\r\n}\r\n\r\nhtml {\r\n    min-height: 100%\r\n}\r\n\r\nbody {\r\n    background: transparent;\r\n    font-family: Arial, sans-serif;\r\n    color: #333;\r\n    padding-top: 15px;\r\n    padding-bottom: 5px\r\n}\r\n\r\n#cookie-banner {\r\n    display: none;\r\n    position: fixed;\r\n    width: 100%;\r\n    background: #8a2be2;\r\n    bottom: 0;\r\n    left: 0;\r\n    color: white;\r\n    z-index: 70000;\r\n    font-size: 18px;\r\n    padding: 15px\r\n}\r\n\r\n#cookie-banner a {\r\n    display: inline-block;\r\n    color: white !important;\r\n    background: #fafafa;\r\n    color: black !important;\r\n    padding: 2px 10px;\r\n    border-radius: 4px;\r\n    text-align: center\r\n}\r\n\r\n#board {\r\n    -webkit-touch-callout: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none\r\n}\r\n\r\np,\r\nol,\r\nul {\r\n    font-size: 18px;\r\n    line-height: 23px\r\n}\r\n\r\nol,\r\nul {\r\n    padding: 10px 40px\r\n}\r\n\r\nli {\r\n    margin-bottom: 5px\r\n}\r\n\r\np {\r\n    padding: 5px 10px\r\n}\r\n\r\na:link,\r\na:visited {\r\n    color: #ca0000;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    border-style: none\r\n}\r\n\r\na:hover {\r\n    color: black\r\n}\r\n\r\nimg {\r\n    border-style: none\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n    text-align: center;\r\n    color: white\r\n}\r\n\r\n#board div h3 {\r\n    color: white\r\n}\r\n\r\nh1 {\r\n    margin-top: 10px;\r\n    color: white;\r\n    font-size: 50px;\r\n    text-shadow: #444 1px 1px 2px;\r\n    font-family: 'Slackey', \"Lucida Grande\", \"Lucida Sans Unicode\", Tahoma, Geneva, Arial, Verdana, sans-serif\r\n}\r\n\r\nh2 {\r\n    font-size: 28px;\r\n    margin: 0 0 10px 0\r\n}\r\n\r\nh3 {\r\n    font-size: 22px;\r\n    margin: 25px auto 10px auto\r\n}\r\n\r\n.game-thumbnail {\r\n    display: inline-block;\r\n    margin: 10px;\r\n    height: 191px;\r\n    border: solid 2px white;\r\n    border-radius: 5px\r\n}\r\n\r\n#wrapper {\r\n    width: 1030px;\r\n    margin: 0 auto\r\n}\r\n\r\n#board {\r\n    background-color: #005009;\r\n    background-image: url('black-thread-light.png');\r\n    /* border: solid 3px white; */\r\n    /* border-radius: 30px; */\r\n    color: white;\r\n    /* padding: 5px; */\r\n    box-shadow: black 0 0 5px;\r\n    /* margin-bottom: 15px */\r\n}\r\n\r\n#board h3 {\r\n    color: white\r\n}\r\n\r\n#board a,\r\n#board a:visited {\r\n    color: yellow\r\n}\r\n\r\n#board a:hover,\r\n#board a:active {\r\n    color: orange !important\r\n}\r\n\r\n#play-page {\r\n    position: relative;\r\n    height: 600px;\r\n    margin: auto;\r\n    width: 700px\r\n}\r\n\r\n.dialog {\r\n    color: #333;\r\n    background-color: #edf35a;\r\n    border-radius: 5px;\r\n    box-shadow: #222 0 0 5px\r\n}\r\n\r\n#board .dialog h3 {\r\n    color: maroon;\r\n    text-shadow: none\r\n}\r\n\r\n.error {\r\n    color: red;\r\n    font-weight: bold\r\n}\r\n\r\n.newest-game {\r\n    color: yellow !important;\r\n    display: inline-block;\r\n    font-family: Verdana, Arial;\r\n    text-shadow: -1px -1px 0 red, 1px -1px 0 red, -1px 1px 0 red, 1px 1px 0 red\r\n}\r\n\r\n.newest-game:hover {\r\n    color: black !important;\r\n    text-shadow: none\r\n}\r\n\r\n#menucontainer {\r\n    margin-bottom: 15px;\r\n    margin-top: -10px\r\n}\r\n\r\n#menu {\r\n    padding: 2px;\r\n    position: relative;\r\n    margin: auto;\r\n    text-align: center\r\n}\r\n\r\n#menu li {\r\n    display: inline;\r\n    list-style: none;\r\n    font-size: 18px\r\n}\r\n\r\n.don-draper {\r\n    width: 160px;\r\n    height: 620px;\r\n    margin-top: 100px;\r\n    float: left\r\n}\r\n\r\n.don-draper label {\r\n    display: block;\r\n    text-align: center;\r\n    height: 20px;\r\n    padding: 0;\r\n    width: 100%;\r\n    font-size: 12px\r\n}\r\n\r\n.don-draper label:only-child {\r\n    display: none\r\n}\r\n\r\n#draper-right {\r\n    margin-left: 150px\r\n}\r\n\r\n#draper-left {\r\n    margin-right: 150px;\r\n    display: none\r\n}\r\n\r\n#about {\r\n    margin-top: 20px\r\n}\r\n\r\n#version-info,\r\n#privacy,\r\n#version-check {\r\n    text-align: center;\r\n    margin: auto;\r\n    font-size: 12px\r\n}\r\n\r\n#version-check {\r\n    border: solid 1px black\r\n}\r\n\r\n.avatar {\r\n    position: absolute\r\n}\r\n\r\n.avatar small {\r\n    position: relative;\r\n    display: block;\r\n    text-align: center;\r\n    margin-top: 5px;\r\n    font-size: 13px\r\n}\r\n\r\n.avatar div {\r\n    border: solid 0 white;\r\n    cursor: pointer\r\n}\r\n\r\n.face-thumb {\r\n    width: 20px;\r\n    height: 20px;\r\n    position: relative;\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/players-thumbs.png);\r\n    background-repeat: no-repeat;\r\n    display: inline-block\r\n}\r\n\r\n.face-thumb.face-0 {\r\n    background-position: 0 0\r\n}\r\n\r\n.face-thumb.face-1 {\r\n    background-position: -20px 0\r\n}\r\n\r\n.face-thumb.face-2 {\r\n    background-position: -40px 0\r\n}\r\n\r\n.face-thumb.face-3 {\r\n    background-position: -60px 0\r\n}\r\n\r\n.face-thumb.face-4 {\r\n    background-position: -80px 0\r\n}\r\n\r\n.face-thumb.face-5 {\r\n    background-position: -100px 0\r\n}\r\n\r\n.face-thumb.face-6 {\r\n    background-position: -120px 0\r\n}\r\n\r\n.face-thumb.face-7 {\r\n    background-position: -140px 0\r\n}\r\n\r\n.face-thumb.face-8 {\r\n    background-position: -160px 0\r\n}\r\n\r\n.face-thumb.face-9 {\r\n    background-position: -180px 0\r\n}\r\n\r\n.face-thumb.face-10 {\r\n    background-position: -200px 0\r\n}\r\n\r\n.face-thumb.face-11 {\r\n    background-position: -220px 0\r\n}\r\n\r\n.face-thumb.face-12 {\r\n    background-position: -240px 0\r\n}\r\n\r\n.face-thumb.face-13 {\r\n    background-position: -260px 0\r\n}\r\n\r\n.face-small {\r\n    width: 50px;\r\n    height: 50px;\r\n    position: relative;\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/players.png);\r\n    background-repeat: no-repeat\r\n}\r\n\r\n.face-small.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/players-sad.png)\r\n}\r\n\r\n.face-small.face-0 {\r\n    background-position: 0 0\r\n}\r\n\r\n.face-small.face-1 {\r\n    background-position: -50px 0\r\n}\r\n\r\n.face-small.face-2 {\r\n    background-position: -100px 0\r\n}\r\n\r\n.face-small.face-3 {\r\n    background-position: -150px 0\r\n}\r\n\r\n.face-small.face-4 {\r\n    background-position: -200px 0\r\n}\r\n\r\n.face-small.face-5 {\r\n    background-position: -250px 0\r\n}\r\n\r\n.face-small.face-6 {\r\n    background-position: -300px 0\r\n}\r\n\r\n.face-small.face-7 {\r\n    background-position: -350px 0\r\n}\r\n\r\n.face-small.face-8 {\r\n    background-position: -400px 0\r\n}\r\n\r\n.face-small.face-9 {\r\n    background-position: -450px 0\r\n}\r\n\r\n.face-small.face-10 {\r\n    background-position: -500px 0\r\n}\r\n\r\n.face-small.face-11 {\r\n    background-position: -550px 0\r\n}\r\n\r\n.face-small.face-12 {\r\n    background-position: -600px 0\r\n}\r\n\r\n.face-small.face-13 {\r\n    background-position: -650px 0\r\n}\r\n\r\n.face-large {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/players-large.png);\r\n    width: 120px;\r\n    height: 120px\r\n}\r\n\r\n.face-large.face-0 {\r\n    background-position: 0 0\r\n}\r\n\r\n.face-large.face-1 {\r\n    background-position: -120px 0\r\n}\r\n\r\n.face-large.face-2 {\r\n    background-position: -240px 0\r\n}\r\n\r\n.face-large.face-3 {\r\n    background-position: -360px 0\r\n}\r\n\r\n.face-large.face-4 {\r\n    background-position: -480px 0\r\n}\r\n\r\n.face-large.face-5 {\r\n    background-position: -600px 0\r\n}\r\n\r\n.face-large.face-6 {\r\n    background-position: -720px 0\r\n}\r\n\r\n.face-large.face-7 {\r\n    background-position: -840px 0\r\n}\r\n\r\n.face-large.face-8 {\r\n    background-position: -960px 0\r\n}\r\n\r\n.face-large.face-9 {\r\n    background-position: -1080px 0\r\n}\r\n\r\n.face-large.face-10 {\r\n    background-position: -1200px 0\r\n}\r\n\r\n.face-large.face-11 {\r\n    background-position: -1320px 0\r\n}\r\n\r\n.face-large.face-12 {\r\n    background-position: -1440px 0\r\n}\r\n\r\n.face-large.face-13 {\r\n    background-position: -1560px 0\r\n}\r\n\r\n.svg .face-small,\r\n.svg .face-large,\r\n.svg .face-thumb {\r\n    background-position: center !important;\r\n    background-repeat: no-repeat\r\n}\r\n\r\n.svg .face-0 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-0.svg)\r\n}\r\n\r\n.svg .face-1 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-1.svg)\r\n}\r\n\r\n.svg .face-2 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-2.svg)\r\n}\r\n\r\n.svg .face-3 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-3.svg)\r\n}\r\n\r\n.svg .face-4 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-4.svg)\r\n}\r\n\r\n.svg .face-5 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-5.svg)\r\n}\r\n\r\n.svg .face-6 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-6.svg)\r\n}\r\n\r\n.svg .face-7 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-7.svg)\r\n}\r\n\r\n.svg .face-8 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-8.svg)\r\n}\r\n\r\n.svg .face-9 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-9.svg)\r\n}\r\n\r\n.svg .face-10 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-10.svg)\r\n}\r\n\r\n.svg .face-11 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-11.svg)\r\n}\r\n\r\n.svg .face-12 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-12.svg)\r\n}\r\n\r\n.svg .face-13 {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-13.svg)\r\n}\r\n\r\n.svg .face-0.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-0-sad.svg)\r\n}\r\n\r\n.svg .face-1.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-1-sad.svg)\r\n}\r\n\r\n.svg .face-2.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-2-sad.svg)\r\n}\r\n\r\n.svg .face-3.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-3-sad.svg)\r\n}\r\n\r\n.svg .face-4.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-4-sad.svg)\r\n}\r\n\r\n.svg .face-5.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-5-sad.svg)\r\n}\r\n\r\n.svg .face-6.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-6-sad.svg)\r\n}\r\n\r\n.svg .face-7.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-7-sad.svg)\r\n}\r\n\r\n.svg .face-8.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-8-sad.svg)\r\n}\r\n\r\n.svg .face-9.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-9-sad.svg)\r\n}\r\n\r\n.svg .face-10.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-10-sad.svg)\r\n}\r\n\r\n.svg .face-11.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-11-sad.svg)\r\n}\r\n\r\n.svg .face-12.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-12-sad.svg)\r\n}\r\n\r\n.svg .face-13.sad {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/face-13-sad.svg)\r\n}\r\n\r\n.bubble {\r\n    position: absolute;\r\n    width: 130px;\r\n    height: 97px;\r\n    display: none;\r\n    z-index: 5000;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: 114px 83px !important\r\n}\r\n\r\n.bubble p {\r\n    color: black;\r\n    text-align: center;\r\n    font-size: 16px;\r\n    margin-top: 12px;\r\n    margin-left: 18px;\r\n    padding: 0 !important;\r\n    width: 85px;\r\n    height: 45px;\r\n    line-height: 45px;\r\n    display: block;\r\n    font-size: 11px\r\n}\r\n\r\n.bubble p span {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    line-height: normal;\r\n    font-size: 11px\r\n}\r\n\r\n#top-player-bubble p {\r\n    margin-top: 29px;\r\n    margin-left: 20px\r\n}\r\n\r\n#right-player-bubble p {\r\n    margin-top: 14px;\r\n    margin-left: 20px\r\n}\r\n\r\n#left-player-bubble {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/speech-left.png);\r\n    top: 177px;\r\n    left: 52px\r\n}\r\n\r\n#right-player-bubble {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/speech-right.png);\r\n    top: 175px;\r\n    right: 50px\r\n}\r\n\r\n#top-player-bubble {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/speech-top.png);\r\n    top: 30px;\r\n    left: 200px\r\n}\r\n\r\n#bottom-player-bubble {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/speech-left.png);\r\n    bottom: 43px;\r\n    left: 372px\r\n}\r\n\r\n.svg #left-player-bubble {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/speech-left.svg)\r\n}\r\n\r\n.svg #right-player-bubble {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/speech-right.svg)\r\n}\r\n\r\n.svg #top-player-bubble {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/speech-top.svg)\r\n}\r\n\r\n.svg #bottom-player-bubble {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/speech-left.svg)\r\n}\r\n\r\n.dealer small {\r\n    background: white;\r\n    color: black;\r\n    border: solid 1px #222;\r\n    font-weight: bold;\r\n    border-radius: 12px\r\n}\r\n\r\n#left-player {\r\n    top: 204px;\r\n    left: -157px;\r\n}\r\n\r\n#right-player {\r\n    top: 199px;\r\n    right: -158px;\r\n}\r\n\r\n#top-player {\r\n    top: -140px;\r\n    left: 237px;\r\n    width: 200px;\r\n    height: 100px;\r\n}\r\n\r\n#bottom-player {\r\n    bottom: -136px;\r\n    left: 235px;\r\n    width: 200px;\r\n    height: 100px;\r\n}\r\n\r\n#player-count {\r\n    position: absolute;\r\n    width: 166px;\r\n    left: 362px;\r\n    top: 310px\r\n}\r\n\r\n#release-notes ul li ul {\r\n    padding-left: 30px;\r\n    font-size: 12px\r\n}\r\n\r\n#result-box {\r\n    display: none;\r\n    text-align: center;\r\n    width: 330px\r\n}\r\n\r\n#results-div {\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 200px\r\n}\r\n\r\n.results {\r\n    width: 400px;\r\n    margin: auto;\r\n    display: none\r\n}\r\n\r\n.results h3 {\r\n    padding: 10px;\r\n    font-size: 18px;\r\n    margin: 0\r\n}\r\n\r\n.results p img {\r\n    float: right;\r\n    margin-left: 5px\r\n}\r\n\r\n.button-panel {\r\n    clear: both;\r\n    text-align: center;\r\n    padding: 10px;\r\n    height: 30px\r\n}\r\n\r\n#change-player {\r\n    width: 300px;\r\n    position: absolute;\r\n    left: 200px;\r\n    top: 150px;\r\n    z-index: 50000;\r\n    display: none\r\n}\r\n\r\n#change-player h3 {\r\n    margin: 8px 0\r\n}\r\n\r\n#player-picker {\r\n    margin: 10px auto\r\n}\r\n\r\n#open-player-picker {\r\n    position: absolute;\r\n    bottom: 104px;\r\n    font-size: 12px;\r\n    left: 280px;\r\n    font-weight: normal\r\n}\r\n\r\n#next-image,\r\n#prev-image {\r\n    width: 70px\r\n}\r\n\r\n#save-image {\r\n    width: 100px\r\n}\r\n\r\n#messageBox {\r\n    width: 45%;\r\n    top: 520px;\r\n    left: -339px;\r\n    padding: 0;\r\n    margin: 0 0 0 112px;\r\n    padding: 10px 15px 15px 15px;\r\n    /* border-top: 1px solid #fff; */\r\n    background: hsla(121, 91%, 18%, 0.58);\r\n    word-wrap: break-word;\r\n    border-radius: 20px;\r\n    position: relative;\r\n    min-height: 102px;\r\n    background-image: -moz-linear-gradient(hsla(0, 0%, 100%, .6), hsla(0, 0%, 100%, 0) 30px );\r\n    background-image: gradient(linear, 0 0, 0 30, from(hsla(0,0%,100%,.6)), to(hsla(0,0%,100%,0)));\r\n    box-shadow: 1px 1px 2px hsla(0, 0%, 0%, 0.54);\r\n}\r\n\r\n#messageBox:after{\r\n    content: \"\\00A0\";\r\n    display: block;\r\n    width: 0;\r\n    height: 0;\r\n    border-width: 10px 20px 10px 0;\r\n    border-style: solid;\r\n    border-color: transparent hsl(121, 88%, 16%) transparent transparent;\r\n    position: absolute;\r\n    left: 334px;\r\n    top: 116px;\r\n    transform: rotate(-136deg);\r\n\r\n}\r\n\r\n#messageBox p {\r\n    width: 50%;\r\n    height: 35px;\r\n    font-size: 15px;\r\n    font-family: cursive;\r\n    line-height: 16px;\r\n    margin: 0 auto;\r\n    padding: 23px 6px;\r\n    color: white;\r\n    background-color: transparent;\r\n    border-radius: 4px;\r\n    text-shadow: none\r\n}\r\n\r\n#authorpic {\r\n    float: left;\r\n    padding: 10px 10px 0 10px\r\n}\r\n\r\n#authorpic img {\r\n    border: solid 1px white\r\n}\r\n\r\n.winner-img {\r\n    display: none\r\n}\r\n\r\n#options-page small {\r\n    display: block;\r\n    text-align: center\r\n}\r\n\r\n#menu li a.selected {\r\n    text-decoration: underline\r\n}\r\n\r\n.playlink {\r\n    display: block;\r\n    text-align: center\r\n}\r\n\r\n#options-page {\r\n    width: 360px;\r\n    position: absolute;\r\n    background: #edf35a;\r\n    top: 130px;\r\n    left: 175px;\r\n    z-index: 10000;\r\n    border-radius: 5px;\r\n    box-shadow: black 0 0 5px;\r\n    -moz-border-radius: 15px;\r\n    -ms-border-radius: 15px;\r\n    color: black;\r\n    display: none\r\n}\r\n\r\n#options-page button {\r\n    width: 100px;\r\n    height: 30px;\r\n    display: block;\r\n    margin: auto;\r\n    margin-top: 10px;\r\n    margin-bottom: 15px\r\n}\r\n\r\n#options-page h2 {\r\n    color: maroon;\r\n    font-size: 24px;\r\n    padding-top: 8px\r\n}\r\n\r\n#options-page p {\r\n    margin-left: 50px\r\n}\r\n\r\n.big {\r\n    color: #fff !important;\r\n    font-family: Arial, sans-serif;\r\n    font-weight: normal !important;\r\n    font-size: 14px;\r\n    padding: 3px 9px;\r\n    border-radius: 40px;\r\n    border: solid 1px #fff !important;\r\n    border-bottom: solid 2px #fff !important;\r\n    background: #ddd;\r\n    background: linear-gradient(to bottom, #fff, #ddd);\r\n    background: -moz-linear-gradient(top, #fff, #ddd);\r\n    -webkit-touch-callout: none;\r\n    outline: 0;\r\n}\r\n\r\n.big {\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    padding: 7px 12px;\r\n    width: 170px;\r\n    text-align: center;\r\n}\r\n\r\n.small {\r\n    font-size: 11px;\r\n    padding: 3px 5px\r\n}\r\n\r\n.big:hover {\r\n   outline: 0;\r\n    cursor: pointer;\r\n    color: #f3f3f3 !important;\r\n    background: linear-gradient(to bottom, #ddd, #311313);\r\n    background: -moz-linear-gradient(top, #ddd, #fff);\r\n    border-radius: 42px;\r\n}\r\n\r\n.big:disabled {\r\n    background: #ddd;\r\n    opacity: .5;\r\n    cursor: auto\r\n}\r\n\r\n.big:active:hover {\r\n    -webkit-touch-callout: none;\r\n    outline: 0;\r\n    border-bottom: solid 1px #555 !important;\r\n    position: relative;\r\n    top: 1px;\r\n    background: #ddd\r\n}\r\n\r\n.result-table {\r\n    padding: 1px;\r\n    background-color: white;\r\n    margin: 5px 10px;\r\n    border-radius: 3px;\r\n    border: solid 2px #333;\r\n    font-family: Arial, sans-serif\r\n}\r\n\r\n.result-table table {\r\n    border-collapse: collapse;\r\n    border: solid 1px black;\r\n    width: 100%\r\n}\r\n\r\n.result-table .totals {\r\n    font-weight: bold\r\n}\r\n\r\n.result-table table td,\r\n.result-table table th {\r\n    text-align: right;\r\n    border: solid 1px black;\r\n    padding: 2px;\r\n    white-space: nowrap\r\n}\r\n\r\n.result-table table th {\r\n    font-weight: bold;\r\n    text-align: center\r\n}\r\n\r\n.result-table .thick-bottom {\r\n    border-bottom: solid 2px black\r\n}\r\n\r\n.result-table .thick-top {\r\n    border-top: solid 2px black\r\n}\r\n\r\n.trophy {\r\n    display: inline-block;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/trophy.png);\r\n    width: 53px;\r\n    height: 80px\r\n}\r\n\r\n.trophy.mini {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/mini-trophy.png);\r\n    width: 40px;\r\n    height: 40px\r\n}\r\n\r\n.trophy.medium {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/medium-trophy.png);\r\n    width: 80px;\r\n    height: 120px\r\n}\r\n\r\n.trophy.big {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/big-trophy.png);\r\n    width: 240px;\r\n    height: 360px\r\n}\r\n\r\n.svg .trophy {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/svg/trophy.svg)\r\n}\r\n\r\n.player-stats {\r\n    margin: 20px auto;\r\n    background: white;\r\n    width: 508px;\r\n    padding: 0;\r\n    border: solid 2px white;\r\n    border-radius: 3px;\r\n    color: black;\r\n    position: relative;\r\n    display: none\r\n}\r\n\r\n.two-column-stats {\r\n    margin: auto;\r\n    width: 398px;\r\n    background: white;\r\n    border: solid 2px white;\r\n    border-radius: 3px;\r\n    position: relative\r\n}\r\n\r\n.two-column-stats table {\r\n    border: solid 2px black;\r\n    width: 398px !important\r\n}\r\n\r\n.stats-column-1 {\r\n    width: 130px;\r\n    float: left\r\n}\r\n\r\n.stats-column-1 .name {\r\n    text-align: center;\r\n    font-size: 28px\r\n}\r\n\r\n.stats-column-2 {\r\n    float: left\r\n}\r\n\r\n.stats-wrapper {\r\n    border: solid 2px #222\r\n}\r\n\r\n.stats-table {\r\n    border-style: none;\r\n    border-left: solid 2px #222;\r\n    border-collapse: collapse;\r\n    color: black;\r\n    width: 374px\r\n}\r\n\r\n.stats-table td,\r\n.stats-table th {\r\n    padding: 3px;\r\n    font-size: 16px;\r\n    border-style: none\r\n}\r\n\r\n.stats-table h4 {\r\n    padding: 3px;\r\n    font-size: 19px\r\n}\r\n\r\n.stats-table tr {\r\n    border-top: solid 1px #222\r\n}\r\n\r\n.stats-table tr.first-row {\r\n    border-top-style: none\r\n}\r\n\r\n.stats-table tr td {\r\n    text-align: right\r\n}\r\n\r\n.stats-table tr th {\r\n    text-align: left;\r\n    border-right: solid 1px #222\r\n}\r\n\r\n.stats-table tr:nth-child(odd) {\r\n    background-color: #f1f1f1\r\n}\r\n\r\n.stats h2 {\r\n    color: white;\r\n    font-family: Verdana, Arial, sans-serif;\r\n    text-shadow: black 1px 1px green;\r\n    margin-top: 30px\r\n}\r\n\r\n.drivers-license {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/players-large.png);\r\n    width: 120px;\r\n    height: 120px;\r\n    margin: 10px auto 6px auto\r\n}\r\n\r\n#stats-disclaimer {\r\n    font-size: 14px;\r\n    width: 500px;\r\n    margin: 5px auto 30px auto\r\n}\r\n\r\n.clear-stats {\r\n    width: 180px;\r\n    height: 40px;\r\n    display: block;\r\n    margin: 20px auto;\r\n    font-size: 20px\r\n}\r\n\r\n#stats-template,\r\n#solitaire-template {\r\n    display: none\r\n}\r\n\r\n.js-variablePlayerCount {\r\n    display: none\r\n}\r\n\r\n.spin {\r\n    -webkit-transition: 1s ease-in;\r\n    -webkit-transform: rotate(360deg);\r\n    transition: 1s ease-in;\r\n    transform: rotate(360deg)\r\n}\r\n\r\n#theme-opt-out {\r\n    text-align: center;\r\n    font-family: Arial, sans-serif;\r\n    display: none;\r\n    padding-bottom: 10px\r\n}\r\n\r\n.themed #theme-opt-out {\r\n    display: block\r\n}\r\n\r\n.underboard-message {\r\n    text-align: center;\r\n    font-family: Arial, sans-serif;\r\n    margin-bottom: 30px;\r\n    font-size: 12px;\r\n    padding-left: 10px;\r\n    padding-right: 10px\r\n}\r\n\r\n.pirateday #top-player:after {\r\n    content: \"\";\r\n    display: block;\r\n    width: 62px;\r\n    height: 34px;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-image: url(/shared/images/piratehat.svg);\r\n    position: absolute;\r\n    left: -6px;\r\n    top: -16px\r\n}\r\n\r\n.adslot_1 {\r\n    display: none\r\n}\r\n\r\n.fake-ad {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: white\r\n}\r\n\r\n#debug-console {\r\n    font-family: 'Lucida Console', monospace;\r\n    font-size: 16px;\r\n    background: black;\r\n    color: white;\r\n    width: 100%;\r\n    overflow-y: scroll;\r\n    padding: 5px;\r\n    height: 300px\r\n}\r\n\r\n@font-face {\r\n    font-family: CardSuits;\r\n    font-style: normal;\r\n    font-weight: bold;\r\n    src: url(/shared/images/fonts/CardSuits.eot) format('embedded-opentype'), url(/shared/images/fonts/CardSuits.woff) format('woff'), url(/shared/images/fonts/CardSuits.ttf) format('truetype')\r\n}\r\n\r\n@font-face {\r\n    font-family: CardSuits;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n    src: url(/shared/images/fonts/CardSuits.eot) format('embedded-opentype'), url(/shared/images/fonts/CardSuits.woff) format('woff'), url(/shared/images/fonts/CardSuits.ttf) format('truetype')\r\n}\r\n\r\n@media(min-width:1354px) {\r\n    #wrapper {\r\n        width: 1338px\r\n    }\r\n    #draper-left {\r\n        display: block\r\n    }\r\n    #textcontent,\r\n    #promo-links div {\r\n        margin-left: 310px\r\n    }\r\n    .adslot_1 {\r\n        display: block\r\n    }\r\n}\r\n\r\n@media(max-width:1044px) {\r\n    #wrapper {\r\n        width: 100%;\r\n        box-sizing: border-box\r\n    }\r\n    #board-and-header {\r\n        width: 730px;\r\n        margin-left: 5px\r\n    }\r\n    #promo-links {\r\n        width: 100%;\r\n        text-align: center\r\n    }\r\n    #promo-links div {\r\n        display: inline;\r\n        font-size: 15px\r\n    }\r\n    #draper-right {\r\n        width: 120px\r\n    }\r\n    #textcontent {\r\n        width: 100%;\r\n        padding: 15px;\r\n        box-sizing: border-box;\r\n        margin: 0\r\n    }\r\n}\r\n\r\n@media(max-width:1023px) {\r\n    #wrapper {\r\n        width: 730px\r\n    }\r\n    #draper-right {\r\n        width: 730px;\r\n        margin: 0 auto;\r\n        height: 110px;\r\n        float: none\r\n    }\r\n    #textcontent {\r\n        margin-top: 40px\r\n    }\r\n    .underboard-message {\r\n        height: 130px;\r\n        margin: 0;\r\n        font-size: 16px;\r\n        display: table-cell;\r\n        vertical-align: middle\r\n    }\r\n    #board {\r\n        margin-bottom: 0\r\n    }\r\n    #board-and-header {\r\n        margin: 0 auto;\r\n        width: 100%;\r\n        float: none\r\n    }\r\n    .don-draper {\r\n        float: none\r\n    }\r\n}\r\n\r\n@media(max-width:730px) {\r\n    #board {\r\n        border-radius: 0;\r\n        border-left: 0;\r\n        border-right: 0\r\n    }\r\n}\r\n\r\n.card {\r\n    width: 71px;\r\n    height: 96px;\r\n    position: absolute;\r\n    cursor: pointer;\r\n    overflow: hidden\r\n}\r\n\r\n.png-card {\r\n    background-image: url('png_card.png')\r\n}\r\n\r\n.svg .card div {\r\n    background-size: 71px 96px;\r\n    background-image: none\r\n}\r\n\r\n.faceup,\r\n.facedown {\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block\r\n}\r\n\r\n.svg .card.up .facedown {\r\n    display: none\r\n}\r\n\r\n.svg .card .facedown {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/cards/newback.svg)\r\n}\r\n\r\n.card.expanded {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/expanded-cards.png)\r\n}\r\n\r\n.verticalTrick {\r\n    position: absolute;\r\n    width: 33px;\r\n    height: 45px;\r\n    background-image: url('vi.png');\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-size: 33px 45px\r\n}\r\n\r\n.verticalTrick{\r\n  bottom: 17.5px;\r\n  right: 385px;\r\n}\r\n\r\n.svg .verticalTrick {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/cards/newback.svg)\r\n}\r\n\r\n.horizontalTrick {\r\n    position: absolute;\r\n    width: 45px;\r\n    height: 33px;\r\n    background-image: url('horixontal_card.png');\r\n    background-repeat: no-repeat;\r\n    background-position: center\r\n}\r\n\r\n.svg .horizontalTrick {\r\n    background-image: url(https://d3hp2os08tb528.cloudfront.net/shared/images/cards/newback.svg);\r\n    width: 33px;\r\n    height: 45px;\r\n    background-size: 33px 45px;\r\n    transform: rotate(90deg)\r\n}\r\n\r\n#deal {\r\n    position: absolute;\r\n    width: 170px;\r\n    left: 360px;\r\n    top: 260px;\r\n    display: none;\r\n}\r\n\r\n#sortHand {\r\n    position: absolute;\r\n    left: 385px;\r\n    bottom: 40px;\r\n    display: none\r\n}\r\n\r\n.featured {\r\n    color: orange !important;\r\n    text-shadow: black 0 0 1px;\r\n    font-size: 16px\r\n}\r\n\r\n.trick-count {\r\n    position: absolute;\r\n    color: white;\r\n    font-family: Arial, sans-serif;\r\n    font-size: 18px;\r\n    text-align: center;\r\n    box-sizing: border-box\r\n}\r\n\r\n#top-player-trick-count,\r\n#bottom-player-trick-count {\r\n    width: 30px;\r\n    height: 45px;\r\n    line-height: 45px\r\n}\r\n\r\n#bottom-player-trick-count{\r\n    bottom: 19.5px;\r\n    right: 418px;\r\n}\r\n\r\n#left-player-trick-count,\r\n#right-player-trick-count {\r\n    width: 45px;\r\n    height: 30px;\r\n    line-height: 30px\r\n}\r\n\r\n.mini-card.d,\r\n.mini-card.h {\r\n    color: red\r\n}\r\n\r\n.mini-card {\r\n    font-family: Arial, sans-serif;\r\n    font-weight: bold;\r\n    font-size: 14px;\r\n    color: black;\r\n    padding-right: 1px;\r\n    padding-left: 1px\r\n}\r\n\r\n.mini-card {\r\n    font-family: CardSuits, Arial, Helvetica, sans-serif\r\n}\r\n\r\n.mini-card-outlined {\r\n    border: solid 1px black;\r\n    border-radius: 3px;\r\n    background: white;\r\n    padding: 0 2px;\r\n    white-space: nowrap\r\n}\r\n\r\n.bubble p span {\r\n    font-size: 22px;\r\n    color: #333\r\n}\r\n\r\n.dealer {\r\n    font-size: 11px;\r\n    padding: 2px\r\n}\r\n\r\n#winner1,\r\n#winner2 {\r\n    display: inline-block;\r\n    margin-bottom: 18px\r\n}\r\n\r\n#bid-div {\r\n    position: absolute;\r\n    width: 100%;\r\n    bottom: 290px;\r\n    display: none;\r\n    text-align: center\r\n}\r\n\r\n#rules h3 {\r\n    font-size: 22px;\r\n    margin-top: 12px\r\n}\r\n\r\n#bid-div div#bid-div-inner {\r\n    padding: 5px;\r\n    display: inline-block;\r\n    background-color: #036f09;\r\n    color: black;\r\n    border-radius: 10px;\r\n    -webkit-border-radius: 10px;\r\n    -moz-border-radius: 10px;\r\n    -o-border-radius: 10px;\r\n    box-shadow: 1px 1px 2px;\r\n}\r\n\r\n#bid-div-inner h4 {\r\n    font-weight: normal;\r\n    color: white\r\n}\r\n\r\n.dialog {\r\n    border-radius: 7px\r\n}\r\n\r\n#bid-div div span {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    background-color: #ffffff94;\r\n    border: solid 1px #ffffff85;\r\n    color: #134e04;\r\n    width: 25px;\r\n    height: 24px;\r\n    line-height: 27px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    -webkit-border-radius: 25px;\r\n    -moz-border-radius: 5px;\r\n    -o-border-radius: 5px;\r\n    margin: 4px;\r\n    font-size: 18px;\r\n}\r\n\r\n#bigspade {\r\n    z-index: 100000;\r\n    position: absolute;\r\n    top: 130px;\r\n    left: 200px;\r\n    display: none;\r\n    border-style: none;\r\n    width: 300px;\r\n    height: 300px;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    background-image: url(/spades/images/bigspade.png)\r\n}\r\n\r\n.svg #bigspade {\r\n    background-image: url(/spades/images/bigspade.svg)\r\n}\r\n\r\n#result-box {\r\n    z-index: 10000;\r\n    font-size: 12px;\r\n    display: none;\r\n    position: absolute;\r\n    width: auto\r\n}\r\n\r\n#scoring-header th {\r\n    font-size: 16px;\r\n    padding: 8px\r\n}\r\n\r\n#names-row th {\r\n    padding-left: 5px;\r\n    padding-right: 5px\r\n}\r\n\r\n#winner-pics {\r\n    text-align: center;\r\n    display: none\r\n}\r\n\r\n.opponent-win-pics,\r\n.human-win-pics {\r\n    margin-bottom: 20px\r\n}\r\n\r\n#start-new-tournament {\r\n    display: none\r\n}\r\n\r\n.results h5 {\r\n    display: none;\r\n    color: #222;\r\n    font-size: 12px\r\n}\r\n\r\n.button-panel {\r\n    padding: 5px\r\n}\r\n\r\n#inline-score {\r\n    position: absolute;\r\n    right: 100px;\r\n    bottom: 10px;\r\n    font-size: 12px;\r\n    display: none;\r\n    width: 170px\r\n}\r\n\r\n#inline-score table th,\r\n#inline-score table td {\r\n    text-align: right\r\n}\r\n\r\n#you-bill-bags,\r\n#john-lisa-bags {\r\n    width: 50px\r\n}\r\n\r\n#you-bill-score,\r\n#john-lisa-score {\r\n    width: 30px\r\n}\r\n\r\n#inline-score h5 {\r\n    font-size: 14px;\r\n    padding-bottom: 2px\r\n}\r\n\r\n.box{\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 100%;\r\n  height: 100%;\r\n  background: #036f09;\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n  box-shadow: 0 20px 50px rgb(3, 28, 6);\r\n  border: 2px solid #033005;\r\n  color: white;\r\n  padding: 20px;\r\n}\r\n\r\n.box:before{\r\n  content: '';\r\n  position:absolute;\r\n  top:0;\r\n  left:-100%;\r\n  width:100%;\r\n  height:100%;\r\n  background: rgba(255,255,255,0.1);\r\n  transition:0.5s;\r\n  pointer-events: none;\r\n}\r\n\r\n.box:hover:before{\r\n  left:-50%;\r\n  transform: skewX(-5deg);\r\n}\r\n\r\n.box .content{\r\n  position:absolute;\r\n  top:15px;\r\n  left:15px;\r\n  right:15px;\r\n  bottom:15px;\r\n  border:1px solid white;\r\n  padding:20px;\r\n  text-align:center;\r\n  box-shadow: 0 5px 10px rgba(9,0,0,0.5);\r\n\r\n}\r\n\r\n.box span{\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  box-sizing: border-box;\r\n\r\n}\r\n\r\n.box span:nth-child(1)\r\n{\r\n  transform:rotate(0deg);\r\n}\r\n\r\n.box span:nth-child(2)\r\n{\r\n  transform:rotate(180deg);\r\n}\r\n\r\n.box span:nth-child(3)\r\n{\r\n  transform:rotate(360deg);\r\n}\r\n\r\n.box span:nth-child(4)\r\n{\r\n  transform:rotate(540deg);\r\n}\r\n\r\n.box span:before\r\n{\r\n  content: '';\r\n  position: absolute;\r\n  width:100%;\r\n  height: 2px;\r\n  background: #50dfdb;\r\n  -webkit-animation: animate 4s linear infinite;\r\n          animation: animate 4s linear infinite;\r\n}\r\n\r\n@-webkit-keyframes animate {\r\n  0% {\r\n  transform:scaleX(0);\r\n  transform-origin: left;\r\n  }\r\n  50%\r\n  {\r\n    transform:scaleX(1);\r\n  transform-origin: left;\r\n  }\r\n  50.1%\r\n  {\r\n    transform:scaleX(1);\r\n  transform-origin: right;\r\n\r\n  }\r\n\r\n  100%\r\n  {\r\n    transform:scaleX(0);\r\n  transform-origin: right;\r\n\r\n  }\r\n\r\n}\r\n\r\n@keyframes animate {\r\n  0% {\r\n  transform:scaleX(0);\r\n  transform-origin: left;\r\n  }\r\n  50%\r\n  {\r\n    transform:scaleX(1);\r\n  transform-origin: left;\r\n  }\r\n  50.1%\r\n  {\r\n    transform:scaleX(1);\r\n  transform-origin: right;\r\n\r\n  }\r\n\r\n  100%\r\n  {\r\n    transform:scaleX(0);\r\n  transform-origin: right;\r\n\r\n  }\r\n\r\n}\r\n\r\n.user-avatar-self{\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top:0;\r\n  bottom: 0;\r\n  /* border-radius: 50%; */\r\n}\r\n\r\n.full-content{\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.camera-video{\r\n  background-size: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  top:0;\r\n  bottom: 0;\r\n  /* border-radius: 50%; */\r\n}\r\n\r\n#left-player{\r\n  width: 100px;\r\n  height: 200px;\r\n}\r\n\r\n#right-player{\r\n  width: 100px;\r\n  height: 200px;\r\n}\r\n\r\n#header{\r\n  height: 140px;\r\n  background-color: transparent;\r\n}\r\n\r\n.bottom_player{\r\n    width: 95px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0px;\r\n    height: 71px;\r\n    border-radius: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL3NwYWRlR2FtZS9zcGFkZUdhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7NEZBUTRGOztBQUU1RjtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSSxXQUFXO0lBQ1g7QUFDSjs7QUFDQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakI7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBOzs7SUFHSTtBQUNKOztBQUNBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVDtBQUNKOztBQUNBO0lBQ0k7QUFDSjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2Qiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQjtBQUNKOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLGNBQWM7SUFDZCxlQUFlO0lBQ2Y7QUFDSjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCO0FBQ0o7O0FBQ0E7SUFDSSwyQkFBMkI7SUFDM0IseUJBQXlCO0lBRXpCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckI7QUFDSjs7QUFDQTs7O0lBR0ksZUFBZTtJQUNmO0FBQ0o7O0FBQ0E7O0lBRUk7QUFDSjs7QUFDQTtJQUNJO0FBQ0o7O0FBQ0E7SUFDSTtBQUNKOztBQUNBOztJQUVJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsaUJBQWlCO0lB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SUFDTixTQUFTO0lBQ1QsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9zcGFkZUdhbWUvc3BhZGVHYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuIFRoaXMgY29kZSBpcyBjb3B5cmlnaHQgKEMpIFJhdcODwrDDg8KhcyBIdWdiw4PCum5hw4PCsHVyIGVoZi4gKFJlZCBBY2UgU29mdHdhcmUgTExDKVxyXG5cclxuIFRoaXMgY29kZSBpcyBOT1Qgb3BlbiBzb3VyY2UsIGFuZCBpdCBpcyBOT1QgcGVybWl0dGVkIHRvIHVzZSBpdCBvbiBvdGhlciBzaXRlcywgbW9kaWZ5IGl0XHJcbiBvciBvdGhlcndpc2UgdXNlIGl0IGZvciBvdGhlciBwdXJwb3NlcyB0aGFuIHBsYXlpbmcgb24gaHR0cHM6Ly9jYXJkZ2FtZXMuaW8vc3BhZGVzL1xyXG5cclxuIEkndmUgaGFkIHRvIGRlYWwgd2l0aCBtdWx0aXBsZSBwZW9wbGUgc3RlYWxpbmcgbXkgd29yayBhbmQgSSdtIHNpY2sgb2YgaXQuXHJcbiBEb24ndCBiZSBhIGRpY2ssIHdyaXRlIHlvdXIgb3duIGdhbWUhXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmRlYnVnICN3cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJlZFxyXG59XHJcbi5kZWJ1ZyAjZHJhcGVyLWxlZnQge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGVcclxufVxyXG4uZGVidWcgI2RyYXBlci1yaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3dcclxufVxyXG4uZGVidWcgI2JvYXJkLXdyYXBwZXItYW5kLWFkcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBwdXJwbGVcclxufVxyXG4uZGVidWcgI3RleHRjb250ZW50IHtcclxuICAgIGJhY2tncm91bmQ6IGdyYXlcclxufVxyXG4uZGVidWcgI3Byb21vLWxpbmtzIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBXaGVhdFxyXG59XHJcbi5kZWJ1ZyAjYm9hcmQtYW5kLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBtYXJvb25cclxufVxyXG4jZHJhcGVyLWxlZnQge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTYwcHhcclxufVxyXG4jZHJhcGVyLXJpZ2h0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDE2MHB4XHJcbn1cclxuI2JvYXJkLXdyYXBwZXItYW5kLWFkcyB7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcbiNwcm9tby1saW5rcyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTNweFxyXG59XHJcbiNwcm9tby1saW5rcyBkaXYgYSB7XHJcbiAgICBwYWRkaW5nOiAzcHhcclxufVxyXG4jYm9hcmQtYW5kLWhlYWRlciB7XHJcbiAgICBmbG9hdDogbGVmdFxyXG59XHJcbiNib2FyZC1hbmQtaGVhZGVyLFxyXG4jdGV4dGNvbnRlbnQsXHJcbiNwcm9tby1saW5rcyBkaXYge1xyXG4gICAgd2lkdGg6IDcxNnB4XHJcbn1cclxuKiB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApXHJcbn1cclxuaHRtbCB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlXHJcbn1cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4XHJcbn1cclxuI2Nvb2tpZS1iYW5uZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzhhMmJlMjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB6LWluZGV4OiA3MDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDE1cHhcclxufVxyXG4jY29va2llLWJhbm5lciBhIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4jYm9hcmQge1xyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xyXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZVxyXG59XHJcbnAsXHJcbm9sLFxyXG51bCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweFxyXG59XHJcbm9sLFxyXG51bCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHhcclxufVxyXG5saSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHhcclxufVxyXG5wIHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4XHJcbn1cclxuYTpsaW5rLFxyXG5hOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6ICNjYTAwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZVxyXG59XHJcbmE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrXHJcbn1cclxuaW1nIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZVxyXG59XHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlXHJcbn1cclxuI2JvYXJkIGRpdiBoMyB7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufVxyXG5oMSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6ICM0NDQgMXB4IDFweCAycHg7XHJcbiAgICBmb250LWZhbWlseTogJ1NsYWNrZXknLCBcIkx1Y2lkYSBHcmFuZGVcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFRhaG9tYSwgR2VuZXZhLCBBcmlhbCwgVmVyZGFuYSwgc2Fucy1zZXJpZlxyXG59XHJcbmgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIG1hcmdpbjogMCAwIDEwcHggMFxyXG59XHJcbmgzIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIG1hcmdpbjogMjVweCBhdXRvIDEwcHggYXV0b1xyXG59XHJcbi5nYW1lLXRodW1ibmFpbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDE5MXB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHhcclxufVxyXG4jd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAzMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG9cclxufVxyXG4jYm9hcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTAwOTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2UvYmxhY2stdGhyZWFkLWxpZ2h0LnBuZyk7XHJcbiAgICAvKiBib3JkZXI6IHNvbGlkIDNweCB3aGl0ZTsgKi9cclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDMwcHg7ICovXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAvKiBwYWRkaW5nOiA1cHg7ICovXHJcbiAgICBib3gtc2hhZG93OiBibGFjayAwIDAgNXB4O1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMTVweCAqL1xyXG59XHJcbiNib2FyZCBoMyB7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufVxyXG4jYm9hcmQgYSxcclxuI2JvYXJkIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogeWVsbG93XHJcbn1cclxuI2JvYXJkIGE6aG92ZXIsXHJcbiNib2FyZCBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogb3JhbmdlICFpbXBvcnRhbnRcclxufVxyXG4jcGxheS1wYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogNzAwcHhcclxufVxyXG4uZGlhbG9nIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjM1YTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAta2h0bWwtYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogIzIyMiAwIDAgNXB4XHJcbn1cclxuI2JvYXJkIC5kaWFsb2cgaDMge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICAgIHRleHQtc2hhZG93OiBub25lXHJcbn1cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcbi5uZXdlc3QtZ2FtZSB7XHJcbiAgICBjb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgQXJpYWw7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgcmVkLCAxcHggLTFweCAwIHJlZCwgLTFweCAxcHggMCByZWQsIDFweCAxcHggMCByZWRcclxufVxyXG4ubmV3ZXN0LWdhbWU6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXNoYWRvdzogbm9uZVxyXG59XHJcbiNtZW51Y29udGFpbmVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTBweFxyXG59XHJcbiNtZW51IHtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcbiNtZW51IGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE4cHhcclxufVxyXG4uZG9uLWRyYXBlciB7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDYyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBmbG9hdDogbGVmdFxyXG59XHJcbi5kb24tZHJhcGVyIGxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4XHJcbn1cclxuLmRvbi1kcmFwZXIgbGFiZWw6b25seS1jaGlsZCB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuI2RyYXBlci1yaWdodCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUwcHhcclxufVxyXG4jZHJhcGVyLWxlZnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNTBweDtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG4jYWJvdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweFxyXG59XHJcbiN2ZXJzaW9uLWluZm8sXHJcbiNwcml2YWN5LFxyXG4jdmVyc2lvbi1jaGVjayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBmb250LXNpemU6IDEycHhcclxufVxyXG4jdmVyc2lvbi1jaGVjayB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFja1xyXG59XHJcbi5hdmF0YXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlXHJcbn1cclxuLmF2YXRhciBzbWFsbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweFxyXG59XHJcbi5hdmF0YXIgZGl2IHtcclxuICAgIGJvcmRlcjogc29saWQgMCB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG59XHJcbi5mYWNlLXRodW1iIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZDNocDJvczA4dGI1MjguY2xvdWRmcm9udC5uZXQvc2hhcmVkL2ltYWdlcy9wbGF5ZXJzLXRodW1icy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9ja1xyXG59XHJcbi5mYWNlLXRodW1iLmZhY2UtMCB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDBcclxufVxyXG4uZmFjZS10aHVtYi5mYWNlLTEge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwcHggMFxyXG59XHJcbi5mYWNlLXRodW1iLmZhY2UtMiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDBweCAwXHJcbn1cclxuLmZhY2UtdGh1bWIuZmFjZS0zIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02MHB4IDBcclxufVxyXG4uZmFjZS10aHVtYi5mYWNlLTQge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTgwcHggMFxyXG59XHJcbi5mYWNlLXRodW1iLmZhY2UtNSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwcHggMFxyXG59XHJcbi5mYWNlLXRodW1iLmZhY2UtNiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTIwcHggMFxyXG59XHJcbi5mYWNlLXRodW1iLmZhY2UtNyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQwcHggMFxyXG59XHJcbi5mYWNlLXRodW1iLmZhY2UtOCB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTYwcHggMFxyXG59XHJcbi5mYWNlLXRodW1iLmZhY2UtOSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTgwcHggMFxyXG59XHJcbi5mYWNlLXRodW1iLmZhY2UtMTAge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMHB4IDBcclxufVxyXG4uZmFjZS10aHVtYi5mYWNlLTExIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0yMjBweCAwXHJcbn1cclxuLmZhY2UtdGh1bWIuZmFjZS0xMiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggMFxyXG59XHJcbi5mYWNlLXRodW1iLmZhY2UtMTMge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI2MHB4IDBcclxufVxyXG4uZmFjZS1zbWFsbCB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvcGxheWVycy5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdFxyXG59XHJcbi5mYWNlLXNtYWxsLnNhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL3BsYXllcnMtc2FkLnBuZylcclxufVxyXG4uZmFjZS1zbWFsbC5mYWNlLTAge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwXHJcbn1cclxuLmZhY2Utc21hbGwuZmFjZS0xIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC01MHB4IDBcclxufVxyXG4uZmFjZS1zbWFsbC5mYWNlLTIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEwMHB4IDBcclxufVxyXG4uZmFjZS1zbWFsbC5mYWNlLTMge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE1MHB4IDBcclxufVxyXG4uZmFjZS1zbWFsbC5mYWNlLTQge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMHB4IDBcclxufVxyXG4uZmFjZS1zbWFsbC5mYWNlLTUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTI1MHB4IDBcclxufVxyXG4uZmFjZS1zbWFsbC5mYWNlLTYge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMwMHB4IDBcclxufVxyXG4uZmFjZS1zbWFsbC5mYWNlLTcge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTM1MHB4IDBcclxufVxyXG4uZmFjZS1zbWFsbC5mYWNlLTgge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQwMHB4IDBcclxufVxyXG4uZmFjZS1zbWFsbC5mYWNlLTkge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTQ1MHB4IDBcclxufVxyXG4uZmFjZS1zbWFsbC5mYWNlLTEwIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC01MDBweCAwXHJcbn1cclxuLmZhY2Utc21hbGwuZmFjZS0xMSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNTUwcHggMFxyXG59XHJcbi5mYWNlLXNtYWxsLmZhY2UtMTIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTYwMHB4IDBcclxufVxyXG4uZmFjZS1zbWFsbC5mYWNlLTEzIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC02NTBweCAwXHJcbn1cclxuLmZhY2UtbGFyZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZDNocDJvczA4dGI1MjguY2xvdWRmcm9udC5uZXQvc2hhcmVkL2ltYWdlcy9wbGF5ZXJzLWxhcmdlLnBuZyk7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBoZWlnaHQ6IDEyMHB4XHJcbn1cclxuLmZhY2UtbGFyZ2UuZmFjZS0wIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMFxyXG59XHJcbi5mYWNlLWxhcmdlLmZhY2UtMSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTIwcHggMFxyXG59XHJcbi5mYWNlLWxhcmdlLmZhY2UtMiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjQwcHggMFxyXG59XHJcbi5mYWNlLWxhcmdlLmZhY2UtMyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMzYwcHggMFxyXG59XHJcbi5mYWNlLWxhcmdlLmZhY2UtNCB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNDgwcHggMFxyXG59XHJcbi5mYWNlLWxhcmdlLmZhY2UtNSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjAwcHggMFxyXG59XHJcbi5mYWNlLWxhcmdlLmZhY2UtNiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNzIwcHggMFxyXG59XHJcbi5mYWNlLWxhcmdlLmZhY2UtNyB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtODQwcHggMFxyXG59XHJcbi5mYWNlLWxhcmdlLmZhY2UtOCB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtOTYwcHggMFxyXG59XHJcbi5mYWNlLWxhcmdlLmZhY2UtOSB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTA4MHB4IDBcclxufVxyXG4uZmFjZS1sYXJnZS5mYWNlLTEwIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xMjAwcHggMFxyXG59XHJcbi5mYWNlLWxhcmdlLmZhY2UtMTEge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEzMjBweCAwXHJcbn1cclxuLmZhY2UtbGFyZ2UuZmFjZS0xMiB7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTQ0MHB4IDBcclxufVxyXG4uZmFjZS1sYXJnZS5mYWNlLTEzIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IC0xNTYwcHggMFxyXG59XHJcbi5zdmcgLmZhY2Utc21hbGwsXHJcbi5zdmcgLmZhY2UtbGFyZ2UsXHJcbi5zdmcgLmZhY2UtdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0XHJcbn1cclxuLnN2ZyAuZmFjZS0wIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtMC5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS0xIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtMS5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS0yIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtMi5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS0zIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtMy5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS00IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtNC5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS01IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtNS5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS02IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtNi5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS03IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtNy5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS04IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtOC5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS05IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtOS5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS0xMCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL3N2Zy9mYWNlLTEwLnN2ZylcclxufVxyXG4uc3ZnIC5mYWNlLTExIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtMTEuc3ZnKVxyXG59XHJcbi5zdmcgLmZhY2UtMTIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZDNocDJvczA4dGI1MjguY2xvdWRmcm9udC5uZXQvc2hhcmVkL2ltYWdlcy9zdmcvZmFjZS0xMi5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS0xMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL3N2Zy9mYWNlLTEzLnN2ZylcclxufVxyXG4uc3ZnIC5mYWNlLTAuc2FkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtMC1zYWQuc3ZnKVxyXG59XHJcbi5zdmcgLmZhY2UtMS5zYWQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZDNocDJvczA4dGI1MjguY2xvdWRmcm9udC5uZXQvc2hhcmVkL2ltYWdlcy9zdmcvZmFjZS0xLXNhZC5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS0yLnNhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL3N2Zy9mYWNlLTItc2FkLnN2ZylcclxufVxyXG4uc3ZnIC5mYWNlLTMuc2FkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtMy1zYWQuc3ZnKVxyXG59XHJcbi5zdmcgLmZhY2UtNC5zYWQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZDNocDJvczA4dGI1MjguY2xvdWRmcm9udC5uZXQvc2hhcmVkL2ltYWdlcy9zdmcvZmFjZS00LXNhZC5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS01LnNhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL3N2Zy9mYWNlLTUtc2FkLnN2ZylcclxufVxyXG4uc3ZnIC5mYWNlLTYuc2FkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtNi1zYWQuc3ZnKVxyXG59XHJcbi5zdmcgLmZhY2UtNy5zYWQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZDNocDJvczA4dGI1MjguY2xvdWRmcm9udC5uZXQvc2hhcmVkL2ltYWdlcy9zdmcvZmFjZS03LXNhZC5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS04LnNhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL3N2Zy9mYWNlLTgtc2FkLnN2ZylcclxufVxyXG4uc3ZnIC5mYWNlLTkuc2FkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtOS1zYWQuc3ZnKVxyXG59XHJcbi5zdmcgLmZhY2UtMTAuc2FkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtMTAtc2FkLnN2ZylcclxufVxyXG4uc3ZnIC5mYWNlLTExLnNhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL3N2Zy9mYWNlLTExLXNhZC5zdmcpXHJcbn1cclxuLnN2ZyAuZmFjZS0xMi5zYWQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZDNocDJvczA4dGI1MjguY2xvdWRmcm9udC5uZXQvc2hhcmVkL2ltYWdlcy9zdmcvZmFjZS0xMi1zYWQuc3ZnKVxyXG59XHJcbi5zdmcgLmZhY2UtMTMuc2FkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL2ZhY2UtMTMtc2FkLnN2ZylcclxufVxyXG4uYnViYmxlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogOTdweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiA1MDAwO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTE0cHggODNweCAhaW1wb3J0YW50XHJcbn1cclxuLmJ1YmJsZSBwIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiA4NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTFweFxyXG59XHJcbi5idWJibGUgcCBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxMXB4XHJcbn1cclxuI3RvcC1wbGF5ZXItYnViYmxlIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMjlweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4XHJcbn1cclxuI3JpZ2h0LXBsYXllci1idWJibGUgcCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHhcclxufVxyXG4jbGVmdC1wbGF5ZXItYnViYmxlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3BlZWNoLWxlZnQucG5nKTtcclxuICAgIHRvcDogMTc3cHg7XHJcbiAgICBsZWZ0OiA1MnB4XHJcbn1cclxuI3JpZ2h0LXBsYXllci1idWJibGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZDNocDJvczA4dGI1MjguY2xvdWRmcm9udC5uZXQvc2hhcmVkL2ltYWdlcy9zcGVlY2gtcmlnaHQucG5nKTtcclxuICAgIHRvcDogMTc1cHg7XHJcbiAgICByaWdodDogNTBweFxyXG59XHJcbiN0b3AtcGxheWVyLWJ1YmJsZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL3NwZWVjaC10b3AucG5nKTtcclxuICAgIHRvcDogMzBweDtcclxuICAgIGxlZnQ6IDIwMHB4XHJcbn1cclxuI2JvdHRvbS1wbGF5ZXItYnViYmxlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3BlZWNoLWxlZnQucG5nKTtcclxuICAgIGJvdHRvbTogNDNweDtcclxuICAgIGxlZnQ6IDM3MnB4XHJcbn1cclxuLnN2ZyAjbGVmdC1wbGF5ZXItYnViYmxlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL3NwZWVjaC1sZWZ0LnN2ZylcclxufVxyXG4uc3ZnICNyaWdodC1wbGF5ZXItYnViYmxlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvc3ZnL3NwZWVjaC1yaWdodC5zdmcpXHJcbn1cclxuLnN2ZyAjdG9wLXBsYXllci1idWJibGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZDNocDJvczA4dGI1MjguY2xvdWRmcm9udC5uZXQvc2hhcmVkL2ltYWdlcy9zdmcvc3BlZWNoLXRvcC5zdmcpXHJcbn1cclxuLnN2ZyAjYm90dG9tLXBsYXllci1idWJibGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZDNocDJvczA4dGI1MjguY2xvdWRmcm9udC5uZXQvc2hhcmVkL2ltYWdlcy9zdmcvc3BlZWNoLWxlZnQuc3ZnKVxyXG59XHJcbi5kZWFsZXIgc21hbGwge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjMjIyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4XHJcbn1cclxuI2xlZnQtcGxheWVyIHtcclxuICAgIHRvcDogMjA0cHg7XHJcbiAgICBsZWZ0OiAtMTU3cHg7XHJcbn1cclxuI3JpZ2h0LXBsYXllciB7XHJcbiAgICB0b3A6IDE5OXB4O1xyXG4gICAgcmlnaHQ6IC0xNThweDtcclxufVxyXG4jdG9wLXBsYXllciB7XHJcbiAgICB0b3A6IC0xNDBweDtcclxuICAgIGxlZnQ6IDIzN3B4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4jYm90dG9tLXBsYXllciB7XHJcbiAgICBib3R0b206IC0xMzZweDtcclxuICAgIGxlZnQ6IDIzNXB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4jcGxheWVyLWNvdW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxNjZweDtcclxuICAgIGxlZnQ6IDM2MnB4O1xyXG4gICAgdG9wOiAzMTBweFxyXG59XHJcbiNyZWxlYXNlLW5vdGVzIHVsIGxpIHVsIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweFxyXG59XHJcbiNyZXN1bHQtYm94IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMzMwcHhcclxufVxyXG4jcmVzdWx0cy1kaXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDIwMHB4XHJcbn1cclxuLnJlc3VsdHMge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcbi5yZXN1bHRzIGgzIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDBcclxufVxyXG4ucmVzdWx0cyBwIGltZyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4XHJcbn1cclxuLmJ1dHRvbi1wYW5lbCB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHhcclxufVxyXG4jY2hhbmdlLXBsYXllciB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMDBweDtcclxuICAgIHRvcDogMTUwcHg7XHJcbiAgICB6LWluZGV4OiA1MDAwMDtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG4jY2hhbmdlLXBsYXllciBoMyB7XHJcbiAgICBtYXJnaW46IDhweCAwXHJcbn1cclxuI3BsYXllci1waWNrZXIge1xyXG4gICAgbWFyZ2luOiAxMHB4IGF1dG9cclxufVxyXG4jb3Blbi1wbGF5ZXItcGlja2VyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTA0cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsZWZ0OiAyODBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWxcclxufVxyXG4jbmV4dC1pbWFnZSxcclxuI3ByZXYtaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDcwcHhcclxufVxyXG4jc2F2ZS1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwcHhcclxufVxyXG4jbWVzc2FnZUJveCB7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgdG9wOiA1MjBweDtcclxuICAgIGxlZnQ6IC0zMzlweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDAgMCAwIDExMnB4O1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4IDE1cHggMTVweDtcclxuICAgIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZmZmOyAqL1xyXG4gICAgYmFja2dyb3VuZDogaHNsYSgxMjEsIDkxJSwgMTglLCAwLjU4KTtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDJweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KGhzbGEoMCwgMCUsIDEwMCUsIC42KSwgaHNsYSgwLCAwJSwgMTAwJSwgMCkgMzBweCApO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogZ3JhZGllbnQobGluZWFyLCAwIDAsIDAgMzAsIGZyb20oaHNsYSgwLDAlLDEwMCUsLjYpKSwgdG8oaHNsYSgwLDAlLDEwMCUsMCkpKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMXB4IDFweCAycHggaHNsYSgwLDAlLDAlLC4zKTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDFweCAycHggaHNsYSgwLDAlLDAlLC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IGhzbGEoMCwgMCUsIDAlLCAwLjU0KTtcclxufVxyXG5cclxuI21lc3NhZ2VCb3g6YWZ0ZXJ7XHJcbiAgICBjb250ZW50OiBcIlxcMDBBMFwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci13aWR0aDogMTBweCAyMHB4IDEwcHggMDtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IGhzbCgxMjEsIDg4JSwgMTYlKSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDMzNHB4O1xyXG4gICAgdG9wOiAxMTZweDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzZkZWcpO1xyXG5cclxufVxyXG4jbWVzc2FnZUJveCBwIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAyM3B4IDZweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmVcclxufVxyXG4jYXV0aG9ycGljIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweFxyXG59XHJcbiNhdXRob3JwaWMgaW1nIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlXHJcbn1cclxuLndpbm5lci1pbWcge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcbiNvcHRpb25zLXBhZ2Ugc21hbGwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4jbWVudSBsaSBhLnNlbGVjdGVkIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXHJcbn1cclxuLnBsYXlsaW5rIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuI29wdGlvbnMtcGFnZSB7XHJcbiAgICB3aWR0aDogMzYwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWRmMzVhO1xyXG4gICAgdG9wOiAxMzBweDtcclxuICAgIGxlZnQ6IDE3NXB4O1xyXG4gICAgei1pbmRleDogMTAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3gtc2hhZG93OiBibGFjayAwIDAgNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuI29wdGlvbnMtcGFnZSBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweFxyXG59XHJcbiNvcHRpb25zLXBhZ2UgaDIge1xyXG4gICAgY29sb3I6IG1hcm9vbjtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIHBhZGRpbmctdG9wOiA4cHhcclxufVxyXG4jb3B0aW9ucy1wYWdlIHAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHhcclxufVxyXG4uYmlnIHtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZiwgI2RkZCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICM2NGYxNWI3NSwgIzljZjc3ZjAwKTtcclxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ZmZiwgI2RkZCk7XHJcbiAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG59XHJcbi5iaWcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiA3cHggMTJweDtcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgcGFkZGluZzogM3B4IDVweFxyXG59XHJcbi5iaWc6aG92ZXIge1xyXG4gICBvdXRsaW5lOiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICNmM2YzZjMgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNkZGQsICMzMTEzMTMpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMDdjMzQxMWEsICMwMDMzMDI3MCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNkZGQsICNmZmYpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDJweDtcclxufVxyXG4uYmlnOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxuICAgIGN1cnNvcjogYXV0b1xyXG59XHJcbi5iaWc6YWN0aXZlOmhvdmVyIHtcclxuICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzU1NSAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkXHJcbn1cclxuLnJlc3VsdC10YWJsZSB7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMzMzO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmXHJcbn1cclxuLnJlc3VsdC10YWJsZSB0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICB3aWR0aDogMTAwJVxyXG59XHJcbi5yZXN1bHQtdGFibGUgLnRvdGFscyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZFxyXG59XHJcbi5yZXN1bHQtdGFibGUgdGFibGUgdGQsXHJcbi5yZXN1bHQtdGFibGUgdGFibGUgdGgge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCBibGFjaztcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXBcclxufVxyXG4ucmVzdWx0LXRhYmxlIHRhYmxlIHRoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuLnJlc3VsdC10YWJsZSAudGhpY2stYm90dG9tIHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDJweCBibGFja1xyXG59XHJcbi5yZXN1bHQtdGFibGUgLnRoaWNrLXRvcCB7XHJcbiAgICBib3JkZXItdG9wOiBzb2xpZCAycHggYmxhY2tcclxufVxyXG4udHJvcGh5IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL3Ryb3BoeS5wbmcpO1xyXG4gICAgd2lkdGg6IDUzcHg7XHJcbiAgICBoZWlnaHQ6IDgwcHhcclxufVxyXG4udHJvcGh5Lm1pbmkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZDNocDJvczA4dGI1MjguY2xvdWRmcm9udC5uZXQvc2hhcmVkL2ltYWdlcy9taW5pLXRyb3BoeS5wbmcpO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHhcclxufVxyXG4udHJvcGh5Lm1lZGl1bSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL21lZGl1bS10cm9waHkucG5nKTtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweFxyXG59XHJcbi50cm9waHkuYmlnIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvYmlnLXRyb3BoeS5wbmcpO1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiAzNjBweFxyXG59XHJcbi5zdmcgLnRyb3BoeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL3N2Zy90cm9waHkuc3ZnKVxyXG59XHJcbi5wbGF5ZXItc3RhdHMge1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHdpZHRoOiA1MDhweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG4udHdvLWNvbHVtbi1zdGF0cyB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDogMzk4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogc29saWQgMnB4IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbn1cclxuLnR3by1jb2x1bW4tc3RhdHMgdGFibGUge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggYmxhY2s7XHJcbiAgICB3aWR0aDogMzk4cHggIWltcG9ydGFudFxyXG59XHJcbi5zdGF0cy1jb2x1bW4tMSB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBmbG9hdDogbGVmdFxyXG59XHJcbi5zdGF0cy1jb2x1bW4tMSAubmFtZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI4cHhcclxufVxyXG4uc3RhdHMtY29sdW1uLTIge1xyXG4gICAgZmxvYXQ6IGxlZnRcclxufVxyXG4uc3RhdHMtd3JhcHBlciB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMjIyXHJcbn1cclxuLnN0YXRzLXRhYmxlIHtcclxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggIzIyMjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB3aWR0aDogMzc0cHhcclxufVxyXG4uc3RhdHMtdGFibGUgdGQsXHJcbi5zdGF0cy10YWJsZSB0aCB7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmVcclxufVxyXG4uc3RhdHMtdGFibGUgaDQge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgZm9udC1zaXplOiAxOXB4XHJcbn1cclxuLnN0YXRzLXRhYmxlIHRyIHtcclxuICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAjMjIyXHJcbn1cclxuLnN0YXRzLXRhYmxlIHRyLmZpcnN0LXJvdyB7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBub25lXHJcbn1cclxuLnN0YXRzLXRhYmxlIHRyIHRkIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0XHJcbn1cclxuLnN0YXRzLXRhYmxlIHRyIHRoIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAjMjIyXHJcbn1cclxuLnN0YXRzLXRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjFcclxufVxyXG4uc3RhdHMgaDIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1zaGFkb3c6IGJsYWNrIDFweCAxcHggZ3JlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4XHJcbn1cclxuLmRyaXZlcnMtbGljZW5zZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL3BsYXllcnMtbGFyZ2UucG5nKTtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggYXV0byA2cHggYXV0b1xyXG59XHJcbiNzdGF0cy1kaXNjbGFpbWVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICAgIG1hcmdpbjogNXB4IGF1dG8gMzBweCBhdXRvXHJcbn1cclxuLmNsZWFyLXN0YXRzIHtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICBmb250LXNpemU6IDIwcHhcclxufVxyXG4jc3RhdHMtdGVtcGxhdGUsXHJcbiNzb2xpdGFpcmUtdGVtcGxhdGUge1xyXG4gICAgZGlzcGxheTogbm9uZVxyXG59XHJcbi5qcy12YXJpYWJsZVBsYXllckNvdW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG4uc3BpbiB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDFzIGVhc2UtaW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB0cmFuc2l0aW9uOiAxcyBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKVxyXG59XHJcbiN0aGVtZS1vcHQtb3V0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweFxyXG59XHJcbi50aGVtZWQgI3RoZW1lLW9wdC1vdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2tcclxufVxyXG4udW5kZXJib2FyZC1tZXNzYWdlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4XHJcbn1cclxuLnBpcmF0ZWRheSAjdG9wLXBsYXllcjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3NoYXJlZC9pbWFnZXMvcGlyYXRlaGF0LnN2Zyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtNnB4O1xyXG4gICAgdG9wOiAtMTZweFxyXG59XHJcbi5hZHNsb3RfMSB7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuLmZha2UtYWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZVxyXG59XHJcbiNkZWJ1Zy1jb25zb2xlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIENvbnNvbGUnLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgaGVpZ2h0OiAzMDBweFxyXG59XHJcbkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6IENhcmRTdWl0cztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgc3JjOiB1cmwoL3NoYXJlZC9pbWFnZXMvZm9udHMvQ2FyZFN1aXRzLmVvdCkgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoL3NoYXJlZC9pbWFnZXMvZm9udHMvQ2FyZFN1aXRzLndvZmYpIGZvcm1hdCgnd29mZicpLCB1cmwoL3NoYXJlZC9pbWFnZXMvZm9udHMvQ2FyZFN1aXRzLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpXHJcbn1cclxuQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogQ2FyZFN1aXRzO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHNyYzogdXJsKC9zaGFyZWQvaW1hZ2VzL2ZvbnRzL0NhcmRTdWl0cy5lb3QpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKC9zaGFyZWQvaW1hZ2VzL2ZvbnRzL0NhcmRTdWl0cy53b2ZmKSBmb3JtYXQoJ3dvZmYnKSwgdXJsKC9zaGFyZWQvaW1hZ2VzL2ZvbnRzL0NhcmRTdWl0cy50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKVxyXG59XHJcbkBtZWRpYShtaW4td2lkdGg6MTM1NHB4KSB7XHJcbiAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDEzMzhweFxyXG4gICAgfVxyXG4gICAgI2RyYXBlci1sZWZ0IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9ja1xyXG4gICAgfVxyXG4gICAgI3RleHRjb250ZW50LFxyXG4gICAgI3Byb21vLWxpbmtzIGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMxMHB4XHJcbiAgICB9XHJcbiAgICAuYWRzbG90XzEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDoxMDQ0cHgpIHtcclxuICAgICN3cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XHJcbiAgICB9XHJcbiAgICAjYm9hcmQtYW5kLWhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDczMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHhcclxuICAgIH1cclxuICAgICNwcm9tby1saW5rcyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbiAgICB9XHJcbiAgICAjcHJvbW8tbGlua3MgZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4XHJcbiAgICB9XHJcbiAgICAjZHJhcGVyLXJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogMTIwcHhcclxuICAgIH1cclxuICAgICN0ZXh0Y29udGVudCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIG1hcmdpbjogMFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6MTAyM3B4KSB7XHJcbiAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IDczMHB4XHJcbiAgICB9XHJcbiAgICAjZHJhcGVyLXJpZ2h0IHtcclxuICAgICAgICB3aWR0aDogNzMwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICBmbG9hdDogbm9uZVxyXG4gICAgfVxyXG4gICAgI3RleHRjb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4XHJcbiAgICB9XHJcbiAgICAudW5kZXJib2FyZC1tZXNzYWdlIHtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgICB9XHJcbiAgICAjYm9hcmQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBcclxuICAgIH1cclxuICAgICNib2FyZC1hbmQtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbm9uZVxyXG4gICAgfVxyXG4gICAgLmRvbi1kcmFwZXIge1xyXG4gICAgICAgIGZsb2F0OiBub25lXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo3MzBweCkge1xyXG4gICAgI2JvYXJkIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAwO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMFxyXG4gICAgfVxyXG59XHJcbi5jYXJkIHtcclxuICAgIHdpZHRoOiA3MXB4O1xyXG4gICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxyXG59XHJcbi5wbmctY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlL3BuZ19jYXJkLnBuZylcclxufVxyXG4uc3ZnIC5jYXJkIGRpdiB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcxcHggOTZweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmVcclxufVxyXG4uZmFjZXVwLFxyXG4uZmFjZWRvd24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9ja1xyXG59XHJcbi5zdmcgLmNhcmQudXAgLmZhY2Vkb3duIHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG4uc3ZnIC5jYXJkIC5mYWNlZG93biB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9kM2hwMm9zMDh0YjUyOC5jbG91ZGZyb250Lm5ldC9zaGFyZWQvaW1hZ2VzL2NhcmRzL25ld2JhY2suc3ZnKVxyXG59XHJcbi5jYXJkLmV4cGFuZGVkIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvZXhwYW5kZWQtY2FyZHMucG5nKVxyXG59XHJcbi52ZXJ0aWNhbFRyaWNrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAzM3B4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWFnZS92aS5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMzNweCA0NXB4XHJcbn1cclxuLnZlcnRpY2FsVHJpY2t7XHJcbiAgYm90dG9tOiAxNy41cHg7XHJcbiAgcmlnaHQ6IDM4NXB4O1xyXG59XHJcblxyXG4uc3ZnIC52ZXJ0aWNhbFRyaWNrIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvY2FyZHMvbmV3YmFjay5zdmcpXHJcbn1cclxuLmhvcml6b250YWxUcmljayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMzNweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2UvaG9yaXhvbnRhbF9jYXJkLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyXHJcbn1cclxuLnN2ZyAuaG9yaXpvbnRhbFRyaWNrIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2QzaHAyb3MwOHRiNTI4LmNsb3VkZnJvbnQubmV0L3NoYXJlZC9pbWFnZXMvY2FyZHMvbmV3YmFjay5zdmcpO1xyXG4gICAgd2lkdGg6IDMzcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMzcHggNDVweDtcclxuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpXHJcbn1cclxuI2RlYWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDE3MHB4O1xyXG4gICAgbGVmdDogMzYwcHg7XHJcbiAgICB0b3A6IDI2MHB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4jc29ydEhhbmQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMzg1cHg7XHJcbiAgICBib3R0b206IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lXHJcbn1cclxuLmZlYXR1cmVkIHtcclxuICAgIGNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcclxuICAgIHRleHQtc2hhZG93OiBibGFjayAwIDAgMXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4XHJcbn1cclxuLnRyaWNrLWNvdW50IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcclxufVxyXG4jdG9wLXBsYXllci10cmljay1jb3VudCxcclxuI2JvdHRvbS1wbGF5ZXItdHJpY2stY291bnQge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDVweFxyXG59XHJcblxyXG4jYm90dG9tLXBsYXllci10cmljay1jb3VudHtcclxuICAgIGJvdHRvbTogMTkuNXB4O1xyXG4gICAgcmlnaHQ6IDQxOHB4O1xyXG59XHJcbiNsZWZ0LXBsYXllci10cmljay1jb3VudCxcclxuI3JpZ2h0LXBsYXllci10cmljay1jb3VudCB7XHJcbiAgICB3aWR0aDogNDVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4XHJcbn1cclxuLm1pbmktY2FyZC5kLFxyXG4ubWluaS1jYXJkLmgge1xyXG4gICAgY29sb3I6IHJlZFxyXG59XHJcbi5taW5pLWNhcmQge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweFxyXG59XHJcbi5taW5pLWNhcmQge1xyXG4gICAgZm9udC1mYW1pbHk6IENhcmRTdWl0cywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZlxyXG59XHJcbi5taW5pLWNhcmQtb3V0bGluZWQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcFxyXG59XHJcbi5idWJibGUgcCBzcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGNvbG9yOiAjMzMzXHJcbn1cclxuLmRlYWxlciB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nOiAycHhcclxufVxyXG4jd2lubmVyMSxcclxuI3dpbm5lcjIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweFxyXG59XHJcbiNiaWQtZGl2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm90dG9tOiAyOTBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG4jcnVsZXMgaDMge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTJweFxyXG59XHJcbiNiaWQtZGl2IGRpdiNiaWQtZGl2LWlubmVyIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMzZmMDk7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4O1xyXG59XHJcbiNiaWQtZGl2LWlubmVyIGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBjb2xvcjogd2hpdGVcclxufVxyXG4uZGlhbG9nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDdweFxyXG59XHJcbiNiaWQtZGl2IGRpdiBzcGFuIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY5NDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNmZmZmZmY4NTtcclxuICAgIGNvbG9yOiAjMTM0ZTA0O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuI2JpZ3NwYWRlIHtcclxuICAgIHotaW5kZXg6IDEwMDAwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTMwcHg7XHJcbiAgICBsZWZ0OiAyMDBweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc3BhZGVzL2ltYWdlcy9iaWdzcGFkZS5wbmcpXHJcbn1cclxuLnN2ZyAjYmlnc3BhZGUge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zcGFkZXMvaW1hZ2VzL2JpZ3NwYWRlLnN2ZylcclxufVxyXG4jcmVzdWx0LWJveCB7XHJcbiAgICB6LWluZGV4OiAxMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogYXV0b1xyXG59XHJcbiNzY29yaW5nLWhlYWRlciB0aCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA4cHhcclxufVxyXG4jbmFtZXMtcm93IHRoIHtcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4XHJcbn1cclxuI3dpbm5lci1waWNzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG4ub3Bwb25lbnQtd2luLXBpY3MsXHJcbi5odW1hbi13aW4tcGljcyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4XHJcbn1cclxuI3N0YXJ0LW5ldy10b3VybmFtZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmVcclxufVxyXG4ucmVzdWx0cyBoNSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgY29sb3I6ICMyMjI7XHJcbiAgICBmb250LXNpemU6IDEycHhcclxufVxyXG4uYnV0dG9uLXBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDVweFxyXG59XHJcbiNpbmxpbmUtc2NvcmUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwMHB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHdpZHRoOiAxNzBweFxyXG59XHJcbiNpbmxpbmUtc2NvcmUgdGFibGUgdGgsXHJcbiNpbmxpbmUtc2NvcmUgdGFibGUgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHRcclxufVxyXG4jeW91LWJpbGwtYmFncyxcclxuI2pvaG4tbGlzYS1iYWdzIHtcclxuICAgIHdpZHRoOiA1MHB4XHJcbn1cclxuI3lvdS1iaWxsLXNjb3JlLFxyXG4jam9obi1saXNhLXNjb3JlIHtcclxuICAgIHdpZHRoOiAzMHB4XHJcbn1cclxuI2lubGluZS1zY29yZSBoNSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4XHJcbn1cclxuXHJcbi5ib3h7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzAzNmYwOTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDUwcHggcmdiKDMsIDI4LCA2KTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjMDMzMDA1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uYm94OmJlZm9yZXtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0Oi0xMDAlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjEpO1xyXG4gIHRyYW5zaXRpb246MC41cztcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLmJveDpob3ZlcjpiZWZvcmV7XHJcbiAgbGVmdDotNTAlO1xyXG4gIHRyYW5zZm9ybTogc2tld1goLTVkZWcpO1xyXG59XHJcblxyXG5cclxuLmJveCAuY29udGVudHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MTVweDtcclxuICBsZWZ0OjE1cHg7XHJcbiAgcmlnaHQ6MTVweDtcclxuICBib3R0b206MTVweDtcclxuICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4gIHBhZGRpbmc6MjBweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoOSwwLDAsMC41KTtcclxuXHJcbn1cclxuXHJcbi5ib3ggc3BhbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG59XHJcblxyXG4uYm94IHNwYW46bnRoLWNoaWxkKDEpXHJcbntcclxuICB0cmFuc2Zvcm06cm90YXRlKDBkZWcpO1xyXG59XHJcblxyXG4uYm94IHNwYW46bnRoLWNoaWxkKDIpXHJcbntcclxuICB0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5ib3ggc3BhbjpudGgtY2hpbGQoMylcclxue1xyXG4gIHRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTtcclxufVxyXG5cclxuLmJveCBzcGFuOm50aC1jaGlsZCg0KVxyXG57XHJcbiAgdHJhbnNmb3JtOnJvdGF0ZSg1NDBkZWcpO1xyXG59XHJcblxyXG4uYm94IHNwYW46YmVmb3JlXHJcbntcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBoZWlnaHQ6IDJweDtcclxuICBiYWNrZ3JvdW5kOiAjNTBkZmRiO1xyXG4gIGFuaW1hdGlvbjogYW5pbWF0ZSA0cyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XHJcbiAgMCUge1xyXG4gIHRyYW5zZm9ybTpzY2FsZVgoMCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxuICB9XHJcbiAgNTAlXHJcbiAge1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlWCgxKTtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xyXG4gIH1cclxuICA1MC4xJVxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTpzY2FsZVgoMSk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcblxyXG4gIH1cclxuXHJcbiAgMTAwJVxyXG4gIHtcclxuICAgIHRyYW5zZm9ybTpzY2FsZVgoMCk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi51c2VyLWF2YXRhci1zZWxme1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBib3R0b206IDA7XHJcbiAgLyogYm9yZGVyLXJhZGl1czogNTAlOyAqL1xyXG59XHJcblxyXG4uZnVsbC1jb250ZW50e1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhbWVyYS12aWRlb3tcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIC8qIGJvcmRlci1yYWRpdXM6IDUwJTsgKi9cclxufVxyXG5cclxuI2xlZnQtcGxheWVye1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4jcmlnaHQtcGxheWVye1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4jaGVhZGVye1xyXG4gIGhlaWdodDogMTQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5ib3R0b21fcGxheWVye1xyXG4gICAgd2lkdGg6IDk1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBoZWlnaHQ6IDcxcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/editor/spadeGame/spadeGame.component.html":
/*!***********************************************************!*\
  !*** ./src/app/editor/spadeGame/spadeGame.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"svg\">\n  <div id=\"wrapper\">\n    <div id=\"board-wrapper-and-ads\">\n      <div id=\"draper-left\" class=\"don-draper\">\n      </div>\n      <br />\n      <div id=\"board-and-header\">\n        <div id=\"header\">\n\n        </div>\n        <div id=\"board\" class=\"board spades\">\n          <div id=\"play-page\" class=\"inner-page\">\n            <div id=\"left-player\" class=\"avatar\">\n              <div class=\"container\">\n                <div class=\"box\">\n                  <div class=\"row full-content\">\n                    <div class=\"col-md-6\">\n                    </div>\n                    <div class=\"col-md-6\">\n                    </div>\n                  </div>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <div class=\"content\">\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"left-player-bubble\" class=\"bubble\">\n              <p><span></span></p>\n            </div>\n            <div id=\"right-player\" class=\"avatar\">\n              <div class=\"container\">\n                <div class=\"box\">\n                  <div class=\"row full-content\">\n                    <div class=\"col-md-6\">\n                    </div>\n                    <div class=\"col-md-6\">\n                    </div>\n                  </div>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <div class=\"content\">\n\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"right-player-bubble\" class=\"bubble\">\n              <p><span></span></p>\n            </div>\n            <div id=\"top-player\" class=\"avatar\">\n              <div class=\"container\">\n                <div class=\"box\">\n                  <div class=\"row full-content\">\n                    <div class=\"col-md-6\">\n                    </div>\n                    <div class=\"col-md-6\">\n                    </div>\n                  </div>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <div class=\"content\">\n                    <app-subObject></app-subObject>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"top-player-bubble\" class=\"bubble\">\n              <p><span></span></p>\n            </div>\n            <div id=\"bottom-player\" class=\"avatar\">\n              <div class=\"container\">\n                <div class=\"box\">\n                  <div class=\"row full-content\">\n                    <div class=\"col-md-6\">\n                    </div>\n                    <div class=\"col-md-6\">\n                    </div>\n                  </div>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <span></span>\n                  <div class=\"content\">\n                    <app-publisher>></app-publisher>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div id=\"bottom-player-bubble\" class=\"bubble\">\n              <p><span></span></p>\n            </div>\n            <div id=\"messageBox\">\n              <p>Click Deal to start the game.</p>\n            </div>\n            <div id=\"deal\">\n              <div class=\"big\" aria-disabled=\"false\">Deal</div>\n            </div>\n            <div id=\"bid-div\">\n              <div id=\"bid-div-inner\">\n                <h4>What is your bid?</h4>\n              </div>\n            </div>\n            <div id=\"bigspade\"></div>\n            <div id=\"top-player-trick-count\" class=\"trick-count\"></div>\n            <div id=\"bottom-player-trick-count\" class=\"trick-count\"></div>\n            <div id=\"left-player-trick-count\" class=\"trick-count\"></div>\n            <div id=\"right-player-trick-count\" class=\"trick-count\"></div>\n            <div id=\"inline-score\">\n              <h5>Current Score</h5>\n              <table>\n                <tr>\n                  <th>You &amp; Bill</th>\n                  <td id=\"you-bill-score\">0</td>\n                  <td id=\"you-bill-bags\">(0 bags)</td>\n                </tr>\n                <tr>\n                  <th>John &amp; Lisa</th>\n                  <td id=\"john-lisa-score\">0</td>\n                  <td id=\"john-lisa-bags\">(0 bags)</td>\n                </tr>\n              </table>\n            </div>\n            <!-- Win and lose screens -->\n            <div class=\"dialog results\" id=\"result-box\">\n              <h3 id=\"result-header\">Congratulations, you won this hand!</h3>\n              <div id=\"winner-pics\">\n                <div class=\"trophy\"></div>\n                <span id=\"winner1\"></span>\n                <span id=\"winner2\"></span>\n                <div class=\"trophy\"></div>\n              </div>\n              <h5>Round X</h5>\n              <div class=\"result-table\">\n                <table>\n                  <tr id=\"names-row\">\n                    <th></th>\n                    <th>You &amp; Bill</th>\n                    <th>John &amp; Lisa</th>\n                  </tr>\n                  <tr id=\"combined-bid\">\n                    <td>Combined bid</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"tricks-taken\">\n                    <td>Tricks taken</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"bags\">\n                    <td>Bags</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"bags-last-round\">\n                    <td>Bags from last round</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"bags-total\">\n                    <td>Total bags</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <!--\n\t\t\t\t\t\t\t\t\t<tr id=\"bags-next-round\">\n\t\t\t\t\t\t\t\t\t\t<th>Bags carried to next round</th>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t\t<td></td>\n\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t-->\n                  <tr id=\"scoring-header\">\n                    <th colspan=\"3\">Scoring</th>\n                  </tr>\n                  <tr id=\"successful-bid\">\n                    <td>Successful bid</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"failed-bid\">\n                    <td>Failed bid</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"bag-score\">\n                    <td>Bag score</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"bag-penalty\">\n                    <td>Bag penalty</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"successful-nil-bid\">\n                    <td>Successful nil bid</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"failed-nil-bid\">\n                    <td>Failed nil bid</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"points-this-round\" class=\"totals\">\n                    <td>Points this round</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"points-last-round\">\n                    <td>Points from previous rounds</td>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                  <tr id=\"points-total\" class=\"thick-top\">\n                    <th>Total points</th>\n                    <td class=\"t1\"></td>\n                    <td class=\"t2\"></td>\n                  </tr>\n                </table>\n              </div>\n              <div class=\"button-panel\">\n                <button class=\"button\" id=\"start-new-game\">Play another hand!</button>\n                <button class=\"button\" id=\"reset-game\">Reset scores</button>\n                <button class=\"button\" id=\"start-new-tournament\">Start a new game!</button>\n              </div>\n            </div>\n\n          </div>\n          <div style=\"clear:both\"></div>\n\n        </div>\n        <!--end row 2 -->\n\n        <!-- row 3, all text content -->\n      </div>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/editor/spadeGame/spadeGame.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/editor/spadeGame/spadeGame.component.ts ***!
  \*********************************************************/
/*! exports provided: SpadeGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpadeGameComponent", function() { return SpadeGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpadeGameComponent = /** @class */ (function () {
    function SpadeGameComponent() {
    }
    SpadeGameComponent.prototype.ngOnInit = function () {
    };
    SpadeGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-spadeGame",
            template: __webpack_require__(/*! ./spadeGame.component.html */ "./src/app/editor/spadeGame/spadeGame.component.html"),
            styles: [__webpack_require__(/*! ./spadeGame.component.css */ "./src/app/editor/spadeGame/spadeGame.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpadeGameComponent);
    return SpadeGameComponent;
}());



/***/ }),

/***/ "./src/app/editor/subObject/subObject.component.css":
/*!**********************************************************!*\
  !*** ./src/app/editor/subObject/subObject.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRvci9zdWJPYmplY3Qvc3ViT2JqZWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/editor/subObject/subObject.component.html":
/*!***********************************************************!*\
  !*** ./src/app/editor/subObject/subObject.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #subscriberDiv></div>\n"

/***/ }),

/***/ "./src/app/editor/subObject/subObject.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/editor/subObject/subObject.component.ts ***!
  \*********************************************************/
/*! exports provided: SubObjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubObjectComponent", function() { return SubObjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @opentok/client */ "./node_modules/@opentok/client/dist/js/opentok.js");
/* harmony import */ var _opentok_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_opentok_client__WEBPACK_IMPORTED_MODULE_2__);



var SubObjectComponent = /** @class */ (function () {
    function SubObjectComponent() {
    }
    SubObjectComponent.prototype.ngAfterViewInit = function () {
        if (this.session) {
            var subscriber = this.session.subscribe(this.stream, this.subscriberDiv.nativeElement, { width: '150px', height: '100px' }, function (err) {
                if (err) {
                    alert(err.message);
                }
            });
        }
        console.log("stream", this.stream);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subscriberDiv'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SubObjectComponent.prototype, "subscriberDiv", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _opentok_client__WEBPACK_IMPORTED_MODULE_2__["Session"])
    ], SubObjectComponent.prototype, "session", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _opentok_client__WEBPACK_IMPORTED_MODULE_2__["Stream"])
    ], SubObjectComponent.prototype, "stream", void 0);
    SubObjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-subObject',
            template: __webpack_require__(/*! ./subObject.component.html */ "./src/app/editor/subObject/subObject.component.html"),
            styles: [__webpack_require__(/*! ./subObject.component.css */ "./src/app/editor/subObject/subObject.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubObjectComponent);
    return SubObjectComponent;
}());



/***/ })

}]);
//# sourceMappingURL=editor-editor-module.js.map