webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".zm-upimage {\r\n    height: 400px;\r\n    /*width: 100%;*/\r\n    overflow: hidden;\r\n    display: block;\r\n    margin-top: 25px;\r\n    position: relative;\r\n    text-align: center;\r\n    color:black;\r\n    box-shadow: 1px 1px 1px #26262652;\r\n}\r\n.zm-upimage img{\r\n    /*position: relative;*/\r\n    width: 100%;\r\n}\r\n.zm-imagetext{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n.zm-about{\r\n    margin: 50px 50px 0 50px;\r\n}\r\n.zm-team{\r\n    margin: 0 auto 100px auto;\r\n    height: 700px;\r\n    width: 1000px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin-top: 25px;\r\n\r\n}\r\n.zm-member{\r\n    height: 350px;\r\n    width: 300px;\r\n    /*width: 40%;\r\n    height: 45%;*/\r\n    text-align: center;\r\n\r\n}\r\n.zm-memberpicture{\r\n    width: 100%;\r\n    height: 80%;\r\n}\r\n.zm-membertext{\r\n    width: 100%;\r\n    height: 20%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"zm-upimage\">\n  <img src=\"../../assets/office.jpg\">\n  <div class=\"zm-imagetext\">\n    <h1 class=\"zm-headtitle\">Lorem ipsum</h1>\n    <p class=\"zm-headdesc\">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>\n  </div>\n</div>\n<div class=\"zm-about\">\n  <div class=\"zm-abouttext\">\n    <p>Non magna aliqua veniam voluptate officia aute est velit ut ad minim deserunt ipsum. Consectetur reprehenderit et eu\n      dolor aliquip qui et. Qui ex laborum voluptate elit mollit nulla cupidatat sint esse laboris. Excepteur tempor Lorem\n      in nostrud qui adipisicing officia sint commodo proident officia. Officia magna nulla et veniam id dolore ad amet labore\n      anim. Ea incididunt cupidatat nisi occaecat nulla non adipisicing consequat ea. Do aliquip non incididunt laborum.\n      Nisi laboris mollit ea consectetur eu nisi nisi enim minim ut id mollit proident excepteur. Pariatur nostrud magna\n      exercitation ex sint ad duis tempor est incididunt irure consectetur non. Minim exercitation sunt minim ullamco commodo\n      ipsum sunt ad deserunt sunt ullamco enim aute ex. Nostrud occaecat laboris sunt ea esse duis mollit commodo aliqua\n      dolore pariatur do amet elit. Labore dolore ad amet anim sit do. </p>\n  </div>\n\n</div>\n<div class=\"zm-team\">\n  <div class=\"zm-member\">\n    <!-- <div class=\"zm-memberpicture\" ></div> -->\n    <img class=\"zm-memberpicture\" src=\"../../assets/Joffrey.jpg\">\n    <div class=\"zm-membertext\">\n      <p>Joffrey Mahieu</p>\n      <p>Function</p>\n    </div>\n  </div>\n  <div class=\"zm-member\">\n      <img class=\"zm-memberpicture\" src=\"../../assets/Robin.png\">\n    <div class=\"zm-membertext\">\n      <p>Robin Vande Velde</p>\n      <p>Function</p>\n    </div>\n  </div>\n  <div class=\"zm-member\">\n      <img class=\"zm-memberpicture\" src=\"../../assets/Thomas.png\">\n    <div class=\"zm-membertext\">\n      <p>Thomas Devriese</p>\n      <p>Function</p>\n    </div>\n  </div>\n  <div class=\"zm-member\">\n      <img class=\"zm-memberpicture\" src=\"../../assets/Arne.png\">\n    <div class=\"zm-membertext\">\n      <p>Arne Lecoutre</p>\n      <p>Function</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_page_component__ = __webpack_require__("../../../../../src/app/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carsresult_carsresult_component__ = __webpack_require__("../../../../../src/app/carsresult/carsresult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'page' },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_5__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__page_page_component__["a" /* PageComponent */] },
    { path: 'carsresult', component: __WEBPACK_IMPORTED_MODULE_4__carsresult_carsresult_component__["a" /* CarsresultComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* :host{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 16px;\r\n    margin: 0 auto;\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<zm-signup></zm-signup>\n<zm-login></zm-login>\n<zm-header></zm-header>\n<router-outlet></router-outlet>\n<zm-footer></zm-footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'zm';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zm-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_page_component__ = __webpack_require__("../../../../../src/app/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__carsresult_carsresult_component__ = __webpack_require__("../../../../../src/app/carsresult/carsresult.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__datepicker_datepicker_component__ = __webpack_require__("../../../../../src/app/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_5__page_page_component__["a" /* PageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_9__carsresult_carsresult_component__["a" /* CarsresultComponent */],
                __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__datepicker_datepicker_component__["a" /* DatepickerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/carsresult/carsresult.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".zm-searchnav{\n    text-align: center;\n    margin-top: 25px;\n}\n.zm-searchcars{\n    width: 100%;\n    height: 75px;\n    margin: 0 auto;\n    font-weight: bold;\n    color: #2B16E0;\n    background-color: #2a2a2a;\n    box-shadow: 1px 1px 1px #26262652;\n    \n}\n.zm-searchcars div{\n    display: inline-block;\n    text-align: left;\n}\n.zm-searchcars input{\n    display: block;\n    width: 110px;\n    height: 40px;\n    padding: 0 5px 0 5px;\n    background-color: white; \n    outline: none;\n    border-radius: 10px;\n    border: 0px;\n}\n.zm-searchplace, .zm-searchfrom, .zm-searchuntill{\n    width: 120px;\n    padding: 10px;\n    margin: 5px 5px 5px 5px;\n    \n}\n.zm-searchbutton{\n    margin: 5px 5px 5px 5px;\n   \n    \n}\n.zm-searchbutton button{\n    height: 40px;\n    background-color: #262626;\n    color: white;\n    position: relative;\n    padding: 0px 40px;\n    border-radius: 10px;\n    /*border-bottom: 5px solid #1F10A1;*/\n    font-weight: bold;\n    text-align: center;\n    border: 0;\n    cursor: pointer;\n}\n.zm-searchbutton button:hover{\n    background-color: #2a2a2a\n}\n\n.zm-fullpage{\n    width: 100%;\n    margin-top: 25px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start\n}\n.zm-carfilter{\n    width: 20%;\n    background-color: #262626;\n    height: 400px;\n    margin-left: 50px;\n    margin-right: 68px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    color: white;\n    box-shadow: 1px 1px 1px #26262652;\n}\n.zm-filters{\n    width: 80%;\n    margin: 0 auto;\n}\n.zm-allcars{\n    width: 70%;\n    background-color: #f0f0f0;\n    height: 900px;\n    box-shadow: 1px 1px 1px #26262652;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carsresult/carsresult.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"zm-searchnav\">\n  <div class=\"zm-searchcars\">\n    <div class=\"zm-searchplace\">\n      <input type=\"text\" placeholder=\"Address, airport,...\">\n    </div>\n    <div class=\"zm-searchfrom\">\n      <input type=\"text\" placeholder=\"From...\">\n    </div>\n    <div class=\"zm-searchuntill\">\n      <input type=\"text\" placeholder=\"Until...\">\n    </div>\n    <div class=\"zm-searchbutton\">\n      <button [routerLink]=\"['/carsresult']\">Search</button>\n    </div>\n  </div>\n</div>\n<div class=\"zm-fullpage\">\n  <div class=\"zm-carfilter\">\n    <div class=\"zm-filters\">\n      <p>Sort by</p>\n      <select>\n        <option>Relevance</option>\n        <option>Price: low-high</option>\n        <option>Price: high-low</option>\n      </select>\n      <p>Price</p>\n      <p>HIER KOMT SLIDER</p>\n      <select>\n        <option>All years</option>\n        <option>Less then 5 years old</option>\n        <option>Less then 10yearls old</option>\n      </select>\n    </div>\n  </div>\n\n  <div class=\"zm-allcars\">\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/carsresult/carsresult.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsresultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarsresultComponent = (function () {
    function CarsresultComponent() {
    }
    CarsresultComponent.prototype.ngOnInit = function () {
    };
    CarsresultComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zm-carsresult',
            template: __webpack_require__("../../../../../src/app/carsresult/carsresult.component.html"),
            styles: [__webpack_require__("../../../../../src/app/carsresult/carsresult.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarsresultComponent);
    return CarsresultComponent;
}());



/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control{\n    width: 100px;\n}\n\ninput{\n    font-size: 12px;\n    padding: 10px 10px 10px 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n  <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\n    <img src=\"../../assets/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DatepickerComponent = (function () {
    function DatepickerComponent() {
    }
    DatepickerComponent.prototype.ngOnInit = function () {
    };
    DatepickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zm-datepicker',
            template: __webpack_require__("../../../../../src/app/datepicker/datepicker.component.html"),
            styles: [__webpack_require__("../../../../../src/app/datepicker/datepicker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4{\r\n    color: white;\r\n    margin: 15px 0 15px 0;\r\n}\r\n.zm-footer{\r\n    background-color: #2a2a2a;\r\n    height: 200px;\r\n    width: 100%;\r\n    /*box-shadow: inset 0px 11px 10px -10px #262626;*/\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n\r\n}\r\n.zm-info, .zm-footernav, .zm-social{\r\n    height: 150px;\r\n    margin: 25px 0 0 0;\r\n    width: 33%;\r\n    text-align: center;\r\n}\r\n.zm-info p{\r\n margin: 0 0 0 0;\r\n}\r\n.zm-footernav a, .zm-social a{\r\n    display: block;\r\n}\r\n.zm-social img{\r\n    width: 5%;\r\n    margin: 0 5px 0 5px;\r\n}\r\n.zm-footercopy{\r\n   width: 100%;\r\n   height: 100px;\r\n   background-color: #2a2a2a;\r\n   margin: 0 0 0 0;\r\n   display: block;\r\n}\r\n.zm-footercopy p{\r\n    margin: 0 auto;\r\n    text-align: center;\r\n}\r\na, p{\r\n    color: white;\r\n}\r\n@media only screen and (max-width: 840px) {\r\n    .zm-footer{\r\n        display: block;\r\n        width: 100%;\r\n        height: 350px;\r\n    }\r\n    .zm-footercopy p{\r\n        padding: 15px 0 0 0;\r\n    }\r\n    .zm-info, .zm-footernav, .zm-social{\r\n        height: 110px;\r\n        margin: 0 auto;\r\n        width: 100%;\r\n\r\n    }\r\n    .zm-social img{\r\n        width: 10%;\r\n        margin: 0 15px 0 15px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"zm-footer\">\n  <div class=\"zm-info\">\n    <h4>Zoem</h4>\n    <p>Graaf Karel de Goedelaan 5</p>\n    <p>8500 Kortrijk</p>\n  </div>\n  <div class=\"zm-footernav\">\n    <h4>Navigation</h4>\n    <a href=\"/\" [routerLink]=\"['/about']\">About</a>\n    <a href=\"/\" [routerLink]=\"['/signup']\">Register</a>\n  </div>\n  <div class=\"zm-social\">\n    <h4>Follow us</h4>\n    <img src=\"../../assets/facebook.png\" alt=\"\">\n    <img src=\"../../assets/instagram.png\" alt=\"\">\n    <img src=\"../../assets/twitter.png\" alt=\"\">\n  </div>\n</div>\n<div class=\"zm-footercopy\">\n  <p>© Zoem 2017</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zm-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".zm-header {\r\n  height: 50px;\r\n  width: 100%;\r\n  /*position: fixed;*/\r\n  margin-top: 25px;\r\n  left: 0;\r\n  z-index: 200;\r\n}\r\n\r\n.zm-logo {\r\n  display: block;\r\n  position: absolute;\r\n  left: 50px;\r\n  cursor: pointer;\r\n}\r\n\r\n.zm-logo:hover {\r\n  transition: .5s ease;\r\n  opacity: 0.3;\r\n}\r\n\r\n.zm-logo img {\r\n  height: 50px;\r\n}\r\n\r\n.zm-menu {\r\n  right: 10px;\r\n  position: absolute;\r\n}\r\n\r\n.zm-menu ul {\r\n  background: transparent;\r\n}\r\n\r\n.zm-nav {\r\n  padding-left: 0;\r\n  list-style: none;\r\n  float: left;\r\n  margin-right: 30px;\r\n}\r\n\r\n.zm-menu ul li {\r\n  margin-right: 20px;\r\n  display: inline;\r\n}\r\n\r\n.zm-menu-mob {\r\n  display: none;\r\n}\r\n\r\n.zm-hamburger {\r\n  display: none;\r\n}\r\n\r\n.zm-cross {\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 840px) {\r\n  .zm-header {\r\n    /*background-color: blue;*/\r\n    width: 100%;\r\n    margin: 0 0 0 0;\r\n  }\r\n  .zm-logo {\r\n    margin: 10px 0 0 0;\r\n    left: 15px;\r\n  }\r\n  .zm-logo img {\r\n    height: 30px;\r\n  }\r\n  .zm-menu {\r\n    display: none;\r\n  }\r\n  .zm-menu-mob {\r\n    display: none;\r\n  }\r\n  .zm-hamburger {\r\n    display: block;\r\n    background: none;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    line-height: 40px;\r\n    padding: 5px 15px 0px 15px;\r\n    color: #2a2a2a;\r\n    border: 0;\r\n    font-size: 1.4em;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n    z-index: 10000000000000;\r\n  }\r\n  .zm-cross {\r\n    background: none;\r\n    position: absolute;\r\n    top: 3px;\r\n    right: 0;\r\n    padding: 10px 15px 0px 15px;\r\n    color: #2a2a2a;\r\n    border: 0;\r\n    font-size: 3em;\r\n    line-height: 60px;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    outline: none;\r\n    z-index: 10000000000000;\r\n  }\r\n  .zm-menu-mob {\r\n    z-index: 1000000;\r\n    font-weight: bold;\r\n    font-size: 0.8em;\r\n    width: 100%;\r\n    background: #f0f0f0;\r\n    position: absolute;\r\n    text-align: center;\r\n    font-size: 12px;\r\n  }\r\n  .zm-menu-mob ul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style-type: none;\r\n    list-style-image: none;\r\n  }\r\n  .zm-menu-mob li {\r\n    display: block;\r\n    padding: 15px 0 15px 0;\r\n    border-bottom: #dddddd 1px solid;\r\n  }\r\n  .zm-menu-mob li:hover {\r\n    display: block;\r\n    background: #ffffff;\r\n    padding: 15px 0 15px 0;\r\n    border-bottom: #dddddd 1px solid;\r\n  }\r\n  .zm-menu-mob ul li a {\r\n    text-decoration: none;\r\n    margin: 0px;\r\n    color: black;\r\n  }\r\n  .zm-menu-mob ul li a:hover {\r\n    color: #666;\r\n    text-decoration: none;\r\n  }\r\n  .zm-menu-mob a {\r\n    text-decoration: none;\r\n    color: black;\r\n  }\r\n  .zm-menu-mob a:hover {\r\n    text-decoration: none;\r\n    color: #666;\r\n  }\r\n  .glyphicon-home {\r\n    color: #2a2a2a;\r\n    font-size: 1.5em;\r\n    margin-top: 5px;\r\n    margin: 0 auto;\r\n  }\r\n  header {\r\n    display: inline-block;\r\n    font-size: 12px;\r\n  }\r\n  span {\r\n    padding-left: 20px;\r\n  }\r\n  a {\r\n    color: #336699;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"zm-header\">\n  <div class=\"zm-logo\">\n    <img src=\"../../assets/ZoemLogo.png\" alt=\"Zoem\" [routerLink]=\"['']\">\n  </div>\n  <div class=\"zm-menu\">\n    <ul class=\"zm-nav\">\n      <li>\n        <a href=\"\" [routerLink]=\"['/about']\">About</a>\n      </li>\n      <li>\n        <a (click)=\"open()\">Sign Up</a>\n      </li>\n    </ul>\n  </div>\n  <button class=\"zm-hamburger\" id=\"zm-hamburger\" (click)=\"openhamburger()\">&#9776;</button>\n  <button class=\"zm-cross\" id=\"zm-cross\" (click)=\"closenav()\">&#735;</button>\n</div>\n<div class=\"zm-menu-mob\" id=\"zm-menu-mob\">\n  <ul class=\"zm-nav-mob\" id=\"zm-nav-mob\">\n    <li>\n      <a href=\"\" [routerLink]=\"['/about']\" (click)=\"closenav()\">About</a>\n    </li>\n    <li>\n      <a (click)=\"open()\" (click)=\"closenav()\" >Sign Up</a>\n    </li>\n  </ul>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_app_js__ = __webpack_require__("../../../../../src/scripts/app.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scripts_app_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scripts_app_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openhamburger = function () {
        document.getElementById('zm-hamburger').style.display = 'none';
        document.getElementById('zm-cross').style.display = 'block';
        document.getElementById('zm-menu-mob').style.display = 'block';
    };
    HeaderComponent.prototype.closenav = function () {
        document.getElementById('zm-menu-mob').style.display = 'none';
        document.getElementById('zm-cross').style.display = 'none';
        document.getElementById('zm-hamburger').style.display = 'block';
    };
    HeaderComponent.prototype.test = function () {
        console.log("worksss");
    };
    HeaderComponent.prototype.open = function () {
        document.getElementById('modal').style.display = 'block';
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zm-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n.Login a{\n    color: #2B16E0;\n    font-weight: bold;\n}\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n.cancelbtn {\n    padding: 14px 20px;\n    background-color: #f44336;\n}\n.cancelbtn,.signupbtn, .loginbtn {\n    float: left;\n    width: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n.modal2 {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    /*height: 100%;*/ /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n.modal-content {\n    /*background-color: #fefefe;*/\n    /*background-image: url(\"../../assets/connect.png\");\n    background-repeat: repeat; */\n    background-color: #f0f0f0;\n    box-shadow: 1px 1px 1px #26262652;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    /*border: 1px solid #888;*/\n    /*width: 80%; /* Could be more or less, depending on screen size */\n    width: 500px;\n    border-radius: 10px;\n    \n}\n\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 35px;\n    top: 15px;\n    color: #000;\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n\n/* Clear floats */\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n    .cancelbtn, .signupbtn {\n        width: 100%;\n    }\n}\n#id02{\n    z-index: 10;\n}\n.full{\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal2 full\" id=\"modal2\" (click)=\"close();\">\n  <span (click)=\"close()\" class=\"close\" title=\"Close Modal\">&times;</span>\n  <form class=\"modal-content animate\" action=\"\">\n    <div class=\"container\">\n      <h2>Log in on Zoem</h2>\n\n      <label>\n        <b>Email</b>\n      </label>\n      <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" required>\n\n      <label>\n        <b>Password</b>\n      </label>\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\n\n      <input type=\"checkbox\" checked=\"checked\"> Remember me\n\n      <div class=\"clearfix\">\n        <button type=\"button\" (click)=\"close()\" class=\"cancelbtn\">Cancel</button>\n        <button type=\"submit\" class=\"loginbtn\">Log in</button>\n      </div>\n      <div class=\"Login\">\n        <p>Don’t have an account?\n          <a (click)=\"gosignup()\">Sign up</a>\n        </p>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.close = function () {
        document.getElementById('modal2').style.display = 'none';
    };
    LoginComponent.prototype.gosignup = function () {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('modal2').style.display = 'none';
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zm-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/page/page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.zm-upimage {\r\n    height: 500px;\r\n    /*width: 100%;*/\r\n    overflow: hidden;\r\n    display: block;\r\n    margin-top: 25px;\r\n    position: relative;\r\n    text-align: center;\r\n    color:black;\r\n    box-shadow: 1px 1px 1px #26262652;\r\n}\r\n.zm-upimage img{\r\n    /*position: relative;*/\r\n    width: 100%;\r\n}\r\n.zm-imagetext{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n.zm-adstitle{\r\n    /*height: 50px;*/\r\n    width: 100%;\r\n    text-align: center;\r\n    margin:  0 0 0 0 ;\r\n    color: white;\r\n    z-index: 10;\r\n}\r\n.zm-adstext{\r\n    color: white;\r\n    margin: 0 0 15px 0;\r\n    padding-top: 50px;\r\n}\r\n.zm-payedcars{\r\n    width: 100%;\r\n    background-color: #2a2a2a;\r\n    height: 500px;\r\n\r\n}\r\n.zm-carads{\r\n   /*width: 100%;*/\r\n   /*margin-top: 25px;*/\r\n   margin-right: 25px;\r\n   margin-left: 25px;\r\n   display: -webkit-box;\r\n   display: -ms-flexbox;\r\n   display: flex;\r\n   -webkit-box-orient: horizontal;\r\n   -webkit-box-direction: normal;\r\n       -ms-flex-direction: row;\r\n           flex-direction: row;\r\n   -webkit-box-pack: center;\r\n       -ms-flex-pack: center;\r\n           justify-content: center;\r\n   cursor: pointer;\r\n   /*padding-top: 50px;*/\r\n   \r\n\r\n}\r\n.zm-carad{\r\n    margin: 0 25px 0 25px;\r\n    width: auto;\r\n    height: auto;\r\n    position: relative\r\n\r\n}\r\n.zm-carad img{\r\n    width: 100%;\r\n    box-shadow: 1px 1px 1px #26262652;\r\n}\r\n.zm-caroverlay{\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #16DA00;\r\n    opacity: 0.8;\r\n    filter: alpha(opacity=80);\r\n    overflow: hidden;\r\n    width: 0;\r\n    height: 100%;\r\n    transition: .5s ease;\r\n    \r\n}\r\n.zm-carad:hover .zm-caroverlay{\r\n    width: 100%;\r\n}\r\n.zm-cardesc {\r\n    display: inline-block;\r\n    white-space: nowrap; \r\n    color: white;\r\n    font-size: 20px;\r\n    position: absolute;\r\n    overflow: hidden;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n}\r\n.zm-containersplit{\r\n    /*margin-top: 50px;*/\r\n    margin: 100px 50px 158px 50px;\r\n    height: 300px;\r\n    \r\n}\r\n.zm-halfl{\r\n    float:left;\r\n    width: 50%;\r\n    \r\n}\r\n.zm-halfr{\r\n    float: right;\r\n    width: 50%;\r\n    box-shadow: 1px 1px 1px #26262652;\r\n}\r\n.zm-halfr img{\r\n    width: 100%;\r\n    background-position: center;\r\n    background-size: cover;\r\n}\r\n.zm-containersplit:after{\r\n    clear: both;\r\n}\r\n.zm-join{\r\n    height: 400px;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    background: url(" + __webpack_require__("../../../../../src/assets/mobiles2.jpg") + ") no-repeat;\r\n    background-size: 100%;\r\n    text-align: center;\r\n    /*vertical-align: center;*/\r\n\r\n}\r\n/* .zm-join img{\r\n    position: relative;\r\n    width: 100%;\r\n    height: auto;\r\n} */\r\n.zm-jointext{\r\n    margin-top:150px;\r\n}\r\n.zm-joinbutton{\r\n   margin-top: 80px;\r\n}\r\n/*.zm-joinbutton:active{\r\n    transform: translate(0px,5px);\r\n    -webkit-transform: translate(0px,5px);\r\n}*/\r\n.zm-joinbutton a{\r\n    background-color: #2B16E0;\r\n    color: #FFF;\r\n    position: relative;\r\n    padding: 20px 40px;\r\n    border-radius: 10px;\r\n    /*border-bottom: 5px solid #1F10A1;*/\r\n    font-weight: bold;\r\n    \r\n}\r\n.zm-joinbutton a:active{\r\n    /*border-bottom: none;*/\r\n    background-color: rgb(31, 16, 163)\r\n}\r\n.zm-joinbutton a:hover{\r\n    background-color: rgb(31, 16, 163);\r\n}\r\n.zm-searchcars{\r\n    width: 900px;\r\n    margin: 0 auto;\r\n    display: inline-block;\r\n    font-weight: bold;\r\n    color: white;\r\n    \r\n}\r\n.zm-searchcars div{\r\n    display: inline-block;\r\n    text-align: left;\r\n}\r\n.zm-searchcars input{\r\n  width: 100px;\r\n  font-size: 12px;\r\n  padding: 10px 10px 10px 10px;\r\n}\r\n.zm-searchplace, .zm-searchfrom, .zm-searchuntill{\r\n\r\n}\r\n.zm-searchbutton{\r\n    margin: 5px 5px 5px 5px;\r\n   \r\n    \r\n}\r\n.zm-searchbutton button{\r\n    height: 40px;\r\n    background-color: #2B16E0;\r\n    color: #FFF;\r\n    position: relative;\r\n    padding: 0px 40px;\r\n    border-radius: 10px;\r\n    /*border-bottom: 5px solid #1F10A1;*/\r\n    font-weight: bold;\r\n    text-align: center;\r\n    border: 0;\r\n}\r\n.zm-searchbutton button:hover{\r\n    background-color: rgb(31, 16, 163);\r\n}\r\n@media only screen and (max-width: 840px) {\r\n    .zm-upimage{\r\n    }\r\n    .zm-upimage image{\r\n        height: 100%;\r\n    }\r\n    .zm-imagetext{\r\n        width: 100%;\r\n        height: 100%;\r\n       \r\n    }\r\n    .zm-headtitle{\r\n        -webkit-transform: none;\r\n                transform: none;\r\n        \r\n    }\r\n    .zm-headdesc{\r\n        -webkit-transform: none;\r\n                transform: none;\r\n    }\r\n\r\n    .zm-searchcars{\r\n    }\r\n\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"zm-upimage\" (click)=\"close()\">\n  <img src=\"../../assets/inside_Car.jpg\">\n  <div class=\"zm-imagetext\">\n    <div class=\"zm-headtxt\">\n        <h1 class=\"zm-headtitle\">Lorem ipsum</h1>\n        <p class=\"zm-headdesc\">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>\n    </div>\n    <form action=\"/\" class=\"zm-searchcars\">\n      <div class=\"zm-searchplace\">\n        <label for=\"\">Where</label>\n        <input class=\"form-control\"type=\"text\" placeholder=\"Address, airport,...\">\n      </div>\n      <div class=\"zm-searchfrom\">\n        <label for=\"\">From</label>\n        <zm-datepicker></zm-datepicker>\n      </div>\n      <div class=\"zm-searchuntill\">\n        <label for=\"\">Until</label>\n        <zm-datepicker></zm-datepicker>\n      </div>\n      <div class=\"zm-searchbutton\">\n        <button [routerLink]=\"['/carsresult']\">Search</button>\n      </div>\n\n\n    </form>\n  </div>\n\n</div>\n<div class=\"zm-payedcars\">\n    <div class=\"zm-adstitle\">\n        <h1 class=\"zm-adstext\">Lorem ipsum</h1>\n      </div>\n  <div class=\"zm-carads\">\n    <div class=\"zm-carad\">\n      <img src=\"../../assets/Auris-Hybrid.jpg\">\n      <div class=\"zm-caroverlay\">\n        <div class=\"zm-cardesc\">€ 25 - Brugge</div>\n      </div>\n  \n    </div>\n    <div class=\"zm-carad\">\n      <img src=\"../../assets/tesla.jpg\">\n      <div class=\"zm-caroverlay\">\n        <div class=\"zm-cardesc\">€ 60 - Brussel</div>\n      </div>\n    </div>\n    <div class=\"zm-carad\">\n      <img src=\"../../assets/Volkswagen-GTE.jpg\">\n      <div class=\"zm-caroverlay\">\n        <div class=\"zm-cardesc\">€ 40 - Brugge</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"zm-containersplit\">\n  <div class=\"zm-halfl\">\n    <h1>Lorem ipsum</h1>\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores expedita velit laudantium eligendi reiciendis nulla\n      facilis, vero voluptate perspiciatis excepturi numquam praesentium alias tenetur, accusantium at molestiae non, temporibus\n      molestias!\n    </p>\n  </div>\n  <div class=\"zm-halfr\">\n    <img class=\"zm-halfimg\" src=\"../../assets/travel2.jpg\">\n  </div>\n\n</div>\n<div class=\"zm-join\">\n  <!-- <img src=\"../../assets/mobiles2.jpg\"> -->\n  <h1 class=\"zm-jointext\">Lorem ipsum</h1>\n  <div class=\"zm-joinbutton\">\n    <a href=\"#\">List your car</a>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageComponent = (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent.prototype.close = function () {
        document.getElementById('modal').style.display = 'none';
    };
    PageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/page/page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n.Login a{\n    color: #2B16E0;\n    font-weight: bold;\n}\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n.cancelbtn {\n    padding: 14px 20px;\n    background-color: #f44336;\n}\n.cancelbtn,.signupbtn, .loginbtn {\n    float: left;\n    width: 50%;\n}\n\n.container {\n    padding: 16px;\n}\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    /*height: 100%;*/ /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n.modal-content {\n    /*background-color: #fefefe;*/\n    /*background-image: url(\"../../assets/connect.png\");\n     background-repeat: repeat; */\n    background-color: #f0f0f0;\n    box-shadow: 1px 1px 1px #26262652;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    /*border: 1px solid #888;*/\n    /*width: 80%; /* Could be more or less, depending on screen size */\n    width: 500px;\n    border-radius: 10px;\n    \n}\n\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 35px;\n    top: 15px;\n    color: #000;\n    font-size: 40px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n\n/* Clear floats */\n.clearfix::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n\n/* Change styles for cancel button and signup button on extra small screens */\n@media screen and (max-width: 300px) {\n    .cancelbtn, .signupbtn {\n        width: 100%;\n    }\n}\n#id02{\n    z-index: 10;\n}\n.full{\n    height: 100%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<div class=\"modal\" id=\"modal\" >\r\n  <span (click)=\"close()\" class=\"close\" title=\"Close Modal\">&times;</span>\r\n  <form class=\"modal-content animate\" action=\"\">\r\n    <div class=\"container\">\r\n      <h2>Sign up on Zoem</h2>\r\n      <label>\r\n        <b>Firstname</b>\r\n      </label>\r\n      <input type=\"text\" placeholder=\"Enter Firstname\" name=\"firstname\" id=\"firstname\" required >\r\n\r\n      <label>\r\n        <b>Lastname</b>\r\n      </label>\r\n      <input type=\"text\" placeholder=\"Enter Lastname\" name=\"lastname\" id=\"lastname\" required>\r\n\r\n      <label>\r\n        <b>Email</b>\r\n      </label>\r\n      <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" id=\"email\" required>\r\n\r\n      <label>\r\n        <b>Password</b>\r\n      </label>\r\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" id=\"psw\" required>\r\n\r\n      <label>\r\n        <b>Repeat Password</b>\r\n      </label>\r\n      <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required>\r\n      <input type=\"checkbox\" checked=\"checked\"> Remember me\r\n      <p>By creating an account you agree to our\r\n        <a href=\"#\">Terms & Privacy</a>.</p>\r\n\r\n      <div class=\"clearfix\">\r\n        <button type=\"button\" (click)=\"close()\" id=\"cancelbtn\" class=\"cancelbtn\">Cancel</button>\r\n        <button type=\"submit\"  class=\"signupbtn\" (click)=\"sign();\">Sign Up</button>\r\n      </div>\r\n      <div class=\"Login\">\r\n        <p>Already have an account?\r\n          <a (click)=\"gologin()\">Log in</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"
=======
module.exports = "<div class=\"modal\" id=\"modal\" >\n  <span (click)=\"close()\" class=\"close\" title=\"Close Modal\">&times;</span>\n  <form class=\"modal-content animate\" action=\"\">\n    <div class=\"container\">\n      <h2>Sign up on Zoem</h2>\n      <label>\n        <b>Firstname</b>\n      </label>\n      <input type=\"text\" placeholder=\"Enter Firstname\" name=\"firstname\" id=\"firstname\" required >\n\n      <label>\n        <b>Lastname</b>\n      </label>\n      <input type=\"text\" placeholder=\"Enter Lastname\" name=\"lastname\" id=\"lastname\" required>\n\n      <label>\n        <b>Email</b>\n      </label>\n      <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" id=\"email\">\n\n      <label>\n        <b>Password</b>\n      </label>\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" id=\"psw\">\n\n      <label>\n        <b>Repeat Password</b>\n      </label>\n      <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\">\n      <input type=\"checkbox\" checked=\"checked\"> Remember me\n      <p>By creating an account you agree to our\n        <a href=\"#\">Terms & Privacy</a>.</p>\n\n      <div class=\"clearfix\">\n        <button type=\"button\" (click)=\"close()\" id=\"cancelbtn\" class=\"cancelbtn\">Cancel</button>\n        <button type=\"submit\"  class=\"signupbtn\" (click)=\"sign();\">Sign Up</button>\n      </div>\n      <div class=\"Login\">\n        <p>Already have an account?\n          <a (click)=\"gologin()\">Log in</a>\n        </p>\n      </div>\n    </div>\n  </form>\n</div>"
>>>>>>> f9d8172c2b8474fac0bd848fa2c973069d3cc139

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(http) {
        this.http = http;
        this.user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["a" /* User */]();
    }
<<<<<<< HEAD
    /*public close(){
      /*alert('anso');*/ /*
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'none';
}*/
=======
    SignupComponent.prototype.sign = function () {
        this.user.firstName = document.getElementById('firstname').value;
        this.user.lastName = document.getElementById('lastname').value;
        this.user.email = document.getElementById('email').value;
        this.user.password = document.getElementById('psw').value;
        this.http.post('http://localhost:3000/api/user', this.user)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err.message);
        });
        console.log(this.user);
    };
>>>>>>> f9d8172c2b8474fac0bd848fa2c973069d3cc139
    SignupComponent.prototype.close = function () {
        document.getElementById('modal').style.display = 'none';
    };
    SignupComponent.prototype.gologin = function () {
        document.getElementById('modal2').style.display = 'block';
        document.getElementById('modal').style.display = 'none';
    };
    SignupComponent.prototype.sign = function () {
        // let name: string;
        // name = (<HTMLInputElement>document.getElementById('firstname')).value;
        // console.log(name);
        this.user.firstName = document.getElementById('firstname').value;
        this.user.lastName = document.getElementById('lastname').value;
        this.user.email = document.getElementById('email').value;
        this.user.password = document.getElementById('psw').value;
        this.http.post('localhost:3000/api/', this.user)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err.message);
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zm-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/mobiles2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mobiles2.b6774089f0a62364e7f8.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/scripts/app.js":
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map