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

module.exports = "<div class=\"zm-upimage\">\r\n  <img src=\"../../assets/office.jpg\">\r\n  <div class=\"zm-imagetext\">\r\n    <h1 class=\"zm-headtitle\">Lorem ipsum</h1>\r\n    <p class=\"zm-headdesc\">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>\r\n  </div>\r\n</div>\r\n<div class=\"zm-about\">\r\n  <div class=\"zm-abouttext\">\r\n    <p>Non magna aliqua veniam voluptate officia aute est velit ut ad minim deserunt ipsum. Consectetur reprehenderit et eu\r\n      dolor aliquip qui et. Qui ex laborum voluptate elit mollit nulla cupidatat sint esse laboris. Excepteur tempor Lorem\r\n      in nostrud qui adipisicing officia sint commodo proident officia. Officia magna nulla et veniam id dolore ad amet labore\r\n      anim. Ea incididunt cupidatat nisi occaecat nulla non adipisicing consequat ea. Do aliquip non incididunt laborum.\r\n      Nisi laboris mollit ea consectetur eu nisi nisi enim minim ut id mollit proident excepteur. Pariatur nostrud magna\r\n      exercitation ex sint ad duis tempor est incididunt irure consectetur non. Minim exercitation sunt minim ullamco commodo\r\n      ipsum sunt ad deserunt sunt ullamco enim aute ex. Nostrud occaecat laboris sunt ea esse duis mollit commodo aliqua\r\n      dolore pariatur do amet elit. Labore dolore ad amet anim sit do. </p>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"zm-team\">\r\n  <div class=\"zm-member\">\r\n    <!-- <div class=\"zm-memberpicture\" ></div> -->\r\n    <img class=\"zm-memberpicture\" src=\"../../assets/Joffrey.jpg\">\r\n    <div class=\"zm-membertext\">\r\n      <p>Joffrey Mahieu</p>\r\n      <p>Function</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"zm-member\">\r\n      <img class=\"zm-memberpicture\" src=\"../../assets/Robin.png\">\r\n    <div class=\"zm-membertext\">\r\n      <p>Robin Vande Velde</p>\r\n      <p>Function</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"zm-member\">\r\n      <img class=\"zm-memberpicture\" src=\"../../assets/Thomas.png\">\r\n    <div class=\"zm-membertext\">\r\n      <p>Thomas Devriese</p>\r\n      <p>Function</p>\r\n    </div>\r\n  </div>\r\n  <div class=\"zm-member\">\r\n      <img class=\"zm-memberpicture\" src=\"../../assets/Arne.png\">\r\n    <div class=\"zm-membertext\">\r\n      <p>Arne Lecoutre</p>\r\n      <p>Function</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<zm-signup></zm-signup>\r\n<zm-login></zm-login>\r\n<zm-header></zm-header>\r\n<router-outlet></router-outlet>\r\n<zm-footer></zm-footer>\r\n\r\n"

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
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
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
exports.push([module.i, ".zm-searchnav{\r\n    text-align: center;\r\n    margin-top: 25px;\r\n}\r\n.zm-searchcars{\r\n    width: 100%;\r\n    height: 75px;\r\n    margin: 0 auto;\r\n    font-weight: bold;\r\n    color: #2B16E0;\r\n    background-color: #2a2a2a;\r\n    box-shadow: 1px 1px 1px #26262652;\r\n    \r\n}\r\n.zm-searchcars div{\r\n    display: inline-block;\r\n    text-align: left;\r\n}\r\n.zm-searchcars input{\r\n    display: block;\r\n    width: 110px;\r\n    height: 40px;\r\n    padding: 0 5px 0 5px;\r\n    background-color: white; \r\n    outline: none;\r\n    border-radius: 10px;\r\n    border: 0px;\r\n}\r\n.zm-searchplace, .zm-searchfrom, .zm-searchuntill{\r\n    width: 120px;\r\n    padding: 10px;\r\n    margin: 5px 5px 5px 5px;\r\n    \r\n}\r\n.zm-searchbutton{\r\n    margin: 5px 5px 5px 5px;\r\n   \r\n    \r\n}\r\n.zm-searchbutton button{\r\n    height: 40px;\r\n    background-color: #262626;\r\n    color: white;\r\n    position: relative;\r\n    padding: 0px 40px;\r\n    border-radius: 10px;\r\n    /*border-bottom: 5px solid #1F10A1;*/\r\n    font-weight: bold;\r\n    text-align: center;\r\n    border: 0;\r\n    cursor: pointer;\r\n}\r\n.zm-searchbutton button:hover{\r\n    background-color: #2a2a2a\r\n}\r\n\r\n.zm-fullpage{\r\n    width: 100%;\r\n    margin-top: 25px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start\r\n}\r\n.zm-carfilter{\r\n    width: 20%;\r\n    background-color: #262626;\r\n    height: 400px;\r\n    margin-left: 50px;\r\n    margin-right: 68px;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    color: white;\r\n    box-shadow: 1px 1px 1px #26262652;\r\n}\r\n.zm-filters{\r\n    width: 80%;\r\n    margin: 0 auto;\r\n}\r\n.zm-allcars{\r\n    width: 70%;\r\n    background-color: #f0f0f0;\r\n    height: 900px;\r\n    box-shadow: 1px 1px 1px #26262652;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carsresult/carsresult.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"zm-searchnav\">\r\n  <div class=\"zm-searchcars\">\r\n    <div class=\"zm-searchplace\">\r\n      <input type=\"text\" placeholder=\"Address, airport,...\">\r\n    </div>\r\n    <div class=\"zm-searchfrom\">\r\n      <input type=\"text\" placeholder=\"From...\">\r\n    </div>\r\n    <div class=\"zm-searchuntill\">\r\n      <input type=\"text\" placeholder=\"Until...\">\r\n    </div>\r\n    <div class=\"zm-searchbutton\">\r\n      <button [routerLink]=\"['/carsresult']\">Search</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"zm-fullpage\">\r\n  <div class=\"zm-carfilter\">\r\n    <div class=\"zm-filters\">\r\n      <p>Sort by</p>\r\n      <select>\r\n        <option>Relevance</option>\r\n        <option>Price: low-high</option>\r\n        <option>Price: high-low</option>\r\n      </select>\r\n      <p>Price</p>\r\n      <p>HIER KOMT SLIDER</p>\r\n      <select>\r\n        <option>All years</option>\r\n        <option>Less then 5 years old</option>\r\n        <option>Less then 10yearls old</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"zm-allcars\">\r\n\r\n  </div>\r\n\r\n</div>\r\n"

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
exports.push([module.i, ".form-control{\r\n    width: 100px;\r\n}\r\n\r\ninput{\r\n    font-size: 12px;\r\n    padding: 10px 10px 10px 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\r\n  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\r\n  <button class=\"input-group-addon\" (click)=\"d.toggle()\" type=\"button\">\r\n    <img src=\"../../assets/calendar-icon.svg\" style=\"width: 1.2rem; height: 1rem; cursor: pointer;\" />\r\n  </button>\r\n</div>\r\n"

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

module.exports = "<div class=\"zm-footer\">\r\n  <div class=\"zm-info\">\r\n    <h4>Zoem</h4>\r\n    <p>Graaf Karel de Goedelaan 5</p>\r\n    <p>8500 Kortrijk</p>\r\n  </div>\r\n  <div class=\"zm-footernav\">\r\n    <h4>Navigation</h4>\r\n    <a href=\"/\" [routerLink]=\"['/about']\">About</a>\r\n    <a href=\"/\" [routerLink]=\"['/signup']\">Register</a>\r\n  </div>\r\n  <div class=\"zm-social\">\r\n    <h4>Follow us</h4>\r\n    <img src=\"../../assets/facebook.png\" alt=\"\">\r\n    <img src=\"../../assets/instagram.png\" alt=\"\">\r\n    <img src=\"../../assets/twitter.png\" alt=\"\">\r\n  </div>\r\n</div>\r\n<div class=\"zm-footercopy\">\r\n  <p>© Zoem 2017</p>\r\n</div>\r\n"

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

module.exports = "<div class=\"zm-header\">\r\n  <div class=\"zm-logo\">\r\n    <img src=\"../../assets/ZoemLogo.png\" alt=\"Zoem\" [routerLink]=\"['']\">\r\n  </div>\r\n  <div class=\"zm-menu\">\r\n    <ul class=\"zm-nav\">\r\n      <li>\r\n        <a href=\"\" [routerLink]=\"['/about']\">About</a>\r\n      </li>\r\n      <li>\r\n        <a (click)=\"open()\">Sign Up</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n  <button class=\"zm-hamburger\" id=\"zm-hamburger\" (click)=\"openhamburger()\">&#9776;</button>\r\n  <button class=\"zm-cross\" id=\"zm-cross\" (click)=\"closenav()\">&#735;</button>\r\n</div>\r\n<div class=\"zm-menu-mob\" id=\"zm-menu-mob\">\r\n  <ul class=\"zm-nav-mob\" id=\"zm-nav-mob\">\r\n    <li>\r\n      <a href=\"\" [routerLink]=\"['/about']\" (click)=\"closenav()\">About</a>\r\n    </li>\r\n    <li>\r\n      <a (click)=\"open()\" (click)=\"closenav()\" >Sign Up</a>\r\n    </li>\r\n  </ul>\r\n\r\n</div>\r\n"

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
exports.push([module.i, "input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n.Login a{\r\n    color: #2B16E0;\r\n    font-weight: bold;\r\n}\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n.cancelbtn {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n.cancelbtn,.signupbtn, .loginbtn {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n.modal2 {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    /*height: 100%;*/ /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    padding-top: 60px;\r\n}\r\n.modal-content {\r\n    /*background-color: #fefefe;*/\r\n    /*background-image: url(\"../../assets/connect.png\");\r\n    background-repeat: repeat; */\r\n    background-color: #f0f0f0;\r\n    box-shadow: 1px 1px 1px #26262652;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    /*border: 1px solid #888;*/\r\n    /*width: 80%; /* Could be more or less, depending on screen size */\r\n    width: 500px;\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\n/* The Close Button (x) */\r\n.close {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    color: #000;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n        width: 100%;\r\n    }\r\n}\r\n#id02{\r\n    z-index: 10;\r\n}\r\n.full{\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal2 full\" id=\"modal2\" (click)=\"close();\">\r\n  <span (click)=\"close()\" class=\"close\" title=\"Close Modal\">&times;</span>\r\n  <form class=\"modal-content animate\" action=\"\">\r\n    <div class=\"container\">\r\n      <h2>Log in on Zoem</h2>\r\n\r\n      <label>\r\n        <b>Email</b>\r\n      </label>\r\n      <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" required>\r\n\r\n      <label>\r\n        <b>Password</b>\r\n      </label>\r\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\r\n\r\n      <input type=\"checkbox\" checked=\"checked\"> Remember me\r\n\r\n      <div class=\"clearfix\">\r\n        <button type=\"button\" (click)=\"close()\" class=\"cancelbtn\">Cancel</button>\r\n        <button type=\"submit\" class=\"loginbtn\">Log in</button>\r\n      </div>\r\n      <div class=\"Login\">\r\n        <p>Don’t have an account?\r\n          <a (click)=\"gosignup()\">Sign up</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

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

module.exports = "\r\n<div class=\"zm-upimage\" (click)=\"close()\">\r\n  <img src=\"../../assets/inside_Car.jpg\">\r\n  <div class=\"zm-imagetext\">\r\n    <div class=\"zm-headtxt\">\r\n        <h1 class=\"zm-headtitle\">Lorem ipsum</h1>\r\n        <p class=\"zm-headdesc\">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>\r\n    </div>\r\n    <form action=\"/\" class=\"zm-searchcars\">\r\n      <div class=\"zm-searchplace\">\r\n        <label for=\"\">Where</label>\r\n        <input class=\"form-control\"type=\"text\" placeholder=\"Address, airport,...\">\r\n      </div>\r\n      <div class=\"zm-searchfrom\">\r\n        <label for=\"\">From</label>\r\n        <zm-datepicker></zm-datepicker>\r\n      </div>\r\n      <div class=\"zm-searchuntill\">\r\n        <label for=\"\">Until</label>\r\n        <zm-datepicker></zm-datepicker>\r\n      </div>\r\n      <div class=\"zm-searchbutton\">\r\n        <button [routerLink]=\"['/carsresult']\">Search</button>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"zm-payedcars\">\r\n    <div class=\"zm-adstitle\">\r\n        <h1 class=\"zm-adstext\">Lorem ipsum</h1>\r\n      </div>\r\n  <div class=\"zm-carads\">\r\n    <div class=\"zm-carad\">\r\n      <img src=\"../../assets/Auris-Hybrid.jpg\">\r\n      <div class=\"zm-caroverlay\">\r\n        <div class=\"zm-cardesc\">€ 25 - Brugge</div>\r\n      </div>\r\n  \r\n    </div>\r\n    <div class=\"zm-carad\">\r\n      <img src=\"../../assets/tesla.jpg\">\r\n      <div class=\"zm-caroverlay\">\r\n        <div class=\"zm-cardesc\">€ 60 - Brussel</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"zm-carad\">\r\n      <img src=\"../../assets/Volkswagen-GTE.jpg\">\r\n      <div class=\"zm-caroverlay\">\r\n        <div class=\"zm-cardesc\">€ 40 - Brugge</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"zm-containersplit\">\r\n  <div class=\"zm-halfl\">\r\n    <h1>Lorem ipsum</h1>\r\n    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores expedita velit laudantium eligendi reiciendis nulla\r\n      facilis, vero voluptate perspiciatis excepturi numquam praesentium alias tenetur, accusantium at molestiae non, temporibus\r\n      molestias!\r\n    </p>\r\n  </div>\r\n  <div class=\"zm-halfr\">\r\n    <img class=\"zm-halfimg\" src=\"../../assets/travel2.jpg\">\r\n  </div>\r\n\r\n</div>\r\n<div class=\"zm-join\">\r\n  <!-- <img src=\"../../assets/mobiles2.jpg\"> -->\r\n  <h1 class=\"zm-jointext\">Lorem ipsum</h1>\r\n  <div class=\"zm-joinbutton\">\r\n    <a href=\"#\">List your car</a>\r\n  </div>\r\n  "

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
exports.push([module.i, "input[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n.Login a{\r\n    color: #2B16E0;\r\n    font-weight: bold;\r\n}\r\nbutton {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n.cancelbtn {\r\n    padding: 14px 20px;\r\n    background-color: #f44336;\r\n}\r\n.cancelbtn,.signupbtn, .loginbtn {\r\n    float: left;\r\n    width: 50%;\r\n}\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    /*height: 100%;*/ /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: rgb(0,0,0); /* Fallback color */\r\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n    padding-top: 60px;\r\n}\r\n.modal-content {\r\n    /*background-color: #fefefe;*/\r\n    /*background-image: url(\"../../assets/connect.png\");\r\n     background-repeat: repeat; */\r\n    background-color: #f0f0f0;\r\n    box-shadow: 1px 1px 1px #26262652;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    /*border: 1px solid #888;*/\r\n    /*width: 80%; /* Could be more or less, depending on screen size */\r\n    width: 500px;\r\n    border-radius: 10px;\r\n    \r\n}\r\n\r\n/* The Close Button (x) */\r\n.close {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    color: #000;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Clear floats */\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n@media screen and (max-width: 300px) {\r\n    .cancelbtn, .signupbtn {\r\n        width: 100%;\r\n    }\r\n}\r\n#id02{\r\n    z-index: 10;\r\n}\r\n.full{\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\" id=\"modal\" (click)=\"close();\">\r\n  <span (click)=\"close()\" class=\"close\" title=\"Close Modal\">&times;</span>\r\n  <form class=\"modal-content animate\" action=\"\">\r\n    <div class=\"container\">\r\n      <h2>Sign up on Zoem</h2>\r\n      <label>\r\n        <b>Firstname</b>\r\n      </label>\r\n      <input type=\"text\" placeholder=\"Enter Firstname\" name=\"firstname\" required>\r\n\r\n      <label>\r\n        <b>Lastname</b>\r\n      </label>\r\n      <input type=\"text\" placeholder=\"Enter Lastname\" name=\"lastname\" required>\r\n\r\n      <label>\r\n        <b>Email</b>\r\n      </label>\r\n      <input type=\"text\" placeholder=\"Enter Email\" name=\"email\" required>\r\n\r\n      <label>\r\n        <b>Password</b>\r\n      </label>\r\n      <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\" required>\r\n\r\n      <label>\r\n        <b>Repeat Password</b>\r\n      </label>\r\n      <input type=\"password\" placeholder=\"Repeat Password\" name=\"psw-repeat\" required>\r\n      <input type=\"checkbox\" checked=\"checked\"> Remember me\r\n      <p>By creating an account you agree to our\r\n        <a href=\"#\">Terms & Privacy</a>.</p>\r\n\r\n      <div class=\"clearfix\">\r\n        <button type=\"button\" (click)=\"close()\" id=\"cancelbtn\" class=\"cancelbtn\">Cancel</button>\r\n        <button type=\"submit\"  class=\"signupbtn\">Sign Up</button>\r\n      </div>\r\n      <div class=\"Login\">\r\n        <p>Already have an account?\r\n          <a (click)=\"gologin()\">Log in</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
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

var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    /*public close(){
      /*alert('anso');*/ /*
    (<HTMLInputElement>document.getElementById('modal')).style.display = 'none';
}*/
    SignupComponent.prototype.close = function () {
        document.getElementById('modal').style.display = 'none';
    };
    SignupComponent.prototype.gologin = function () {
        document.getElementById('modal2').style.display = 'block';
        document.getElementById('modal').style.display = 'none';
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'zm-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
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