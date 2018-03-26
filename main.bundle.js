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

/***/ "../../../../../src/app/answer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__surveys_surveys_component__ = __webpack_require__("../../../../../src/app/surveys/surveys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__survey_detail_survey_detail_component__ = __webpack_require__("../../../../../src/app/survey-detail/survey-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__survey_results_survey_results_component__ = __webpack_require__("../../../../../src/app/survey-results/survey-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__info_section_info_section_component__ = __webpack_require__("../../../../../src/app/info-section/info-section.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'detail/:id', component: __WEBPACK_IMPORTED_MODULE_4__survey_detail_survey_detail_component__["a" /* SurveyDetailComponent */] },
    { path: 'surveys', component: __WEBPACK_IMPORTED_MODULE_3__surveys_surveys_component__["a" /* SurveysComponent */] },
    { path: 'info', component: __WEBPACK_IMPORTED_MODULE_6__info_section_info_section_component__["a" /* InfoSectionComponent */] },
    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_5__survey_results_survey_results_component__["a" /* SurveyResultsComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
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
exports.push([module.i, "/* AppComponent's private CSS styles */\r\nh1 {\r\n  font-size: 1.2em;\r\n  color: #999;\r\n  margin-bottom: 0;\r\n}\r\nh2 {\r\n  font-size: 2em;\r\n  margin-top: 0;\r\n  padding-top: 0;\r\n}\r\nnav a {\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n  margin-top: 10px;\r\n  display: inline-block;\r\n  background-color: #eee;\r\n  border-radius: 4px;\r\n}\r\nnav a:visited, a:link {\r\n  color: #607D8B;\r\n}\r\nnav a:hover {\r\n  color: #039be5;\r\n  background-color: #CFD8DC;\r\n}\r\nnav a.active {\r\n  color: #039be5;\r\n}\r\n.img-fluid{max-width:100%;height:auto}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <h1>{{title}}</h1>-->\r\n<img src=\"1.jpg\" class=\"img-fluid\" alt=\"Header image, with text choice\"/>\r\n<nav>\r\n  <a routerLink=\"/dashboard\">Pääsivulle</a>\r\n  <a routerLink=\"/results\">Kyselyiden tulokset</a>\r\n  <a routerLink=\"/info\">Taustaa sivustosta</a>\r\n <!-- <a routerLink=\"/surveys\">Kyselyt</a> -->\r\n</nav>\r\n<router-outlet></router-outlet>\r\n\r\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Superennustajat';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__survey_detail_survey_detail_component__ = __webpack_require__("../../../../../src/app/survey-detail/survey-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__surveys_surveys_component__ = __webpack_require__("../../../../../src/app/surveys/surveys.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__survey_service__ = __webpack_require__("../../../../../src/app/survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__messages_messages_component__ = __webpack_require__("../../../../../src/app/messages/messages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__survey_results_survey_results_component__ = __webpack_require__("../../../../../src/app/survey-results/survey-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__info_section_info_section_component__ = __webpack_require__("../../../../../src/app/info-section/info-section.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__surveys_surveys_component__["a" /* SurveysComponent */],
                __WEBPACK_IMPORTED_MODULE_5__survey_detail_survey_detail_component__["a" /* SurveyDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_10__messages_messages_component__["a" /* MessagesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__survey_results_survey_results_component__["a" /* SurveyResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__info_section_info_section_component__["a" /* InfoSectionComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__survey_service__["a" /* SurveyService */], __WEBPACK_IMPORTED_MODULE_8__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_9__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* DashboardComponent's private CSS styles */\r\n[class*='col-'] {\r\n  float: left;\r\n  padding-right: 20px;\r\n  padding-bottom: 20px;\r\n}\r\n[class*='col-']:last-of-type {\r\n  padding-right: 0;\r\n}\r\na {\r\n  text-decoration: none;\r\n}\r\n*, *:after, *:before {\r\n  -webkit-box-sizing: border-box;\r\n  box-sizing: border-box;\r\n}\r\nh3 {\r\n  text-align: center; margin-bottom: 0;\r\n}\r\nh4 {\r\n  position: relative;\r\n}\r\n.grid {\r\n  margin: 0;\r\n}\r\n.col-1-4 {\r\n  width: 25%;\r\n}\r\n.module {\r\n  padding: 20px;\r\n  text-align: center;\r\n  color: #eee;\r\n  max-height: 120px;\r\n  min-width: 520px;\r\n  background-color: #607D8B;\r\n  border-radius: 2px;\r\n}\r\n.module:hover {\r\n  background-color: #EEE;\r\n  cursor: pointer;\r\n  color: #607d8b;\r\n}\r\n.grid-pad {\r\n  padding: 10px 0;\r\n}\r\n.grid-pad > [class*='col-']:last-of-type {\r\n  padding-right: 20px;\r\n}\r\n@media (max-width: 600px) {\r\n  .module {\r\n    font-size: 10px;\r\n    max-height: 75px; }\r\n}\r\n@media (max-width: 1024px) {\r\n  .grid {\r\n    margin: 0;\r\n  }\r\n  .module {\r\n    min-width: 60px;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Aktiiviset kyselyt</h3>\r\n<div class=\"grid grid-pad\">\r\n  <a *ngFor=\"let survey of surveys\" class=\"col-1-1\"\r\n      routerLink=\"/detail/{{survey.id}}\">\r\n    <div class=\"module survey\">\r\n      <h4>{{survey.name}}</h4>\r\n    </div>\r\n  </a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__survey__ = __webpack_require__("../../../../../src/app/survey.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_service__ = __webpack_require__("../../../../../src/app/survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(surveyService, dataService) {
        this.surveyService = surveyService;
        this.dataService = dataService;
        this.surveys = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getSurveys();
    };
    DashboardComponent.prototype.getSurveys = function () {
        var _this = this;
        if (this.surveyService.SURVEYS) {
            this.surveys = this.surveyService.SURVEYS;
        }
        else {
            // this.surveyService.getSurveys().subscribe(surveys => this.surveys = surveys.slice(1, 5));
            var values_1;
            var surveys_1 = new Array();
            this.dataService.getAll()
                .subscribe(function (data) { return values_1 = data; }, function (error) { return function () {
                console.log(error);
            }; }, function () {
                for (var _i = 0, values_2 = values_1; _i < values_2.length; _i++) {
                    var entry = values_2[_i];
                    var surv = JSON.parse(entry);
                    //alert(surv.id);
                    var sam = new __WEBPACK_IMPORTED_MODULE_1__survey__["a" /* Survey */]();
                    sam.id = surv.id;
                    sam.name = surv.name;
                    // alert(entry.name);
                    surveys_1.push(sam);
                }
                // this.surveys = surveys.slice(1,5);
                _this.surveys = surveys_1;
                _this.surveyService.SURVEYS = surveys_1;
            });
        }
        // this.surveyService.getSurveys() 
        // .subscribe(surveys => this.surveys = surveys.slice(1, 5));
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__survey_service__["a" /* SurveyService */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Answers } from './answers';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.actionUrl = "https://gb5nzln27b.execute-api.eu-west-1.amazonaws.com/test/survey";
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.actionUrl);
    };
    DataService.prototype.getQuestions = function (id) {
        var url = this.actionUrl + "/" + id + "/questions/";
        return this.http.get(url);
    };
    DataService.prototype.add = function (answers) {
        var toAdd = JSON.stringify({ Answers: answers });
        //const id = itemName.surveyId;
        var id = 2;
        var url = this.actionUrl + "/" + id + "/answers/";
        //alert(url);
        return this.http.post(url, toAdd);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/app/info-section/info-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/info-section/info-section.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-9\" >\r\n<p>\r\n    <b>Taustaa sivustosta</b>\r\n </p>\r\n\r\n <p>\r\n    Asiantuntijoiden epämääräinen puhe ja heiveröinen argumentointi on tuttua niin päivän \r\n    politiikan seuraajille kuin talousuutisten lukijoillekin. Ennustuksia ja arvioita \r\n    tulevaisuuden tärkeistä tapahtumista heitellään lonkalta, eikä mönkään menneistä \r\n    arvioista yleensä joudu vastaamaan koska kukaan ei seuraa niiden toteutumista.\r\n    </p>\r\n    <p>\r\n    Usein seuraaminen on ylipäätään mahdotonta, sillä kokeneet puhujat osaavat käyttää\r\n    epämääräistä kieltä, jonka voi tulkita miten päin tahansa.\r\n    </p><p>\r\n    Haluamme edistää numeroilla ilmoitettua todennäköisyyteen perustuvaa tulevaisuuden \r\n    arviointia. Tällaisia arvioita voidaan tallentaa, seurata ja verrata toisten\r\n    antamiin arvioihin toisin kuin ympäripyöreitä lausuntoja.\r\n  </p>\r\n    <b>Brierin pisteet</b>\r\n    <p>\r\n    <a href=\"https://en.wikipedia.org/wiki/Brier_score\"><strong>Brierin pisteitä</strong></a> käytetään todennäköisyysarvioiden täsmäävyyden mittaamiseen.\r\n    Brierin pisteet mittaavat neliöllistä eroa ennustuksiesi ja oikeasti tapahtuneiden \r\n    asioiden välillä.</p>\r\n    <p>\r\n    Otetaan esimerkki Suomen 2018 presidentinvaaleista. Arvioit, että Sauli Niinistö voittaa\r\n    95% todennäköisyydellä. Ennustuksesi Brierin pisteet: (1 - 0.95)^2 = 0.0025. \r\n    </p><p>\r\n    Jos tämän lisäksi olisit uskonut Paavo Väyrysen tulevan toiseksi 60 % todennäköisyydellä,\r\n    olisi keskimääräinen Brierin pisteesi ollut: ((1 - 0.95)^2 + (0 - 0.6)^2)/2 = \r\n    (0.0025 + 0.36)/2 = 0.181.\r\n  </p> <p>\r\n    Antamalla aina vastauksen 50% saa Brierin pisteeksi 0.25, vastaamalla aina oikein saa 0\r\n    ja vastaamalla aina väärin on Brierin pisteet 1. Paras tulos on siis 0 ja huonoin 1.\r\n  </p><p>\r\n    Brierin pisteet siis rankaisee ylenmääräisestä itsevarmuudesta ja palkitsee oikean\r\n    suuntaisesta ennustuksesta.\r\n  </p>\r\n  <p>\r\n   <b>LINKKEJÄ</b> </p>\r\n    \r\n   <p><a href=\"http://www.tietotila.com/arvosteluja/Superennustajat.pdf\">Superennustajat kirjan arvostelu</a></p>\r\n   <p><a href=\"https://en.wikipedia.org/wiki/The_Good_Judgment_Project \">Good Judgment - projektin wikipediasivu</a></p>\r\n   <p><a href=\" https://www.gjopen.com  \">GJOpen sivusto</a></p>\r\n   <p><a href=\" https://www.tiede.fi/blogit/rajankayntia/oletko-superennustaja-todista-kykysi-ennustuskisassa \">Teppo Mattsonin \r\n  loistava blogikirjoitus ennustuskisoista</a></p>\r\n   \r\n    \r\n    \r\n    \r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/info-section/info-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoSectionComponent; });
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

var InfoSectionComponent = /** @class */ (function () {
    function InfoSectionComponent() {
    }
    InfoSectionComponent.prototype.ngOnInit = function () {
    };
    InfoSectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-info-section',
            template: __webpack_require__("../../../../../src/app/info-section/info-section.component.html"),
            styles: [__webpack_require__("../../../../../src/app/info-section/info-section.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoSectionComponent);
    return InfoSectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* MessagesComponent's private CSS styles */\r\nh2 {\r\n  color: red;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\nbody {\r\n  margin: 2em;\r\n}\r\nbody, input[text], button {\r\n  color: crimson;\r\n  font-family: Cambria, Georgia;\r\n}\r\nbutton.clear {\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #aaa;\r\n  cursor: auto;\r\n}\r\nbutton.clear {\r\n  color: #888;\r\n  margin-bottom: 12px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"messageService.messages.length\">\r\n\r\n  <h2>Viimeksi katsotut kyselyt</h2>\r\n  <button class=\"clear\"\r\n          (click)=\"messageService.clear()\">clear</button>\r\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\r\n\r\n</div> \r\n"

/***/ }),

/***/ "../../../../../src/app/messages/messages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(messageService) {
        this.messageService = messageService;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages',
            template: __webpack_require__("../../../../../src/app/messages/messages.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__message_service__["a" /* MessageService */]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Question; });
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());



/***/ }),

/***/ "../../../../../src/app/survey-detail/survey-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* HeroDetailComponent's private CSS styles */\r\nlabel {\r\n  display: inline-block;\r\n  font-size: 1em;\r\n  margin: .5em 0;\r\n  color: #607D8B;\r\n  font-weight: bold;\r\n}\r\ninput {\r\n  height: 2em;\r\n  width: 10em;\r\n  font-size: 1em;\r\n  padding-left: .4em;\r\n}\r\nbutton {\r\n  margin-top: 20px;\r\n  font-family: Arial;\r\n  background-color: #eee;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  border-radius: 4px;\r\n  cursor: pointer; cursor: hand;\r\n}\r\nbutton:hover {\r\n  background-color: #cfd8dc;\r\n}\r\nbutton:disabled {\r\n  background-color: #eee;\r\n  color: #ccc;\r\n  cursor: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey-detail/survey-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"survey\"  class=\"col-md-6\">\r\n<div class=\"row\">\r\n  \r\n  <div class=\"col-md-9\" >\r\n    <p> Ohjeet vastaamiseen: </p>\r\n    <p>vastaa jokaiseen väittämään numerolla 0-100, jossa numero vastaa todennäköisyyttä prosentteina . Esimerkiksi vastaus 65 tarkoittaa: \"65 prosentin todennäköisyydellä\".</p>\r\n  </div>\r\n</div>\r\n  \r\n</div>\r\n\r\n<div *ngIf=\"survey\"  class=\"col-md-6\">\r\n  \r\n  <h2>{{ survey.name | uppercase }} Kysymykset:</h2>\r\n            \r\n  <div *ngFor=\"let question of questions; index as idx\">\r\n    <label for=\"answer\"> {{question.text}}</label>\r\n    <div class=\"row\">\r\n     <input [(ngModel)]=\"answers[idx].answer\" #answer=\"ngModel\" #ctrl=\"ngModel\" required placeholder=\"Todennäköisyys %\"/>\r\n     </div>\r\n     <div *ngIf=\"answer.invalid && (answer.touched)\"  class=\"alert alert-danger\">\r\n       <div>Kysymyseen ei ole vastattu!</div>\r\n    </div>\r\n    <div class=\"row\"></div>\r\n    \r\n  </div>\r\n\r\n\r\n  <button (click)=\"goBack()\">Takaisin</button>\r\n  <button (click)=\"saveAnswers()\">Lähetä vastaukset</button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/survey-detail/survey-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question__ = __webpack_require__("../../../../../src/app/question.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__survey__ = __webpack_require__("../../../../../src/app/survey.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__survey_service__ = __webpack_require__("../../../../../src/app/survey.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__answer__ = __webpack_require__("../../../../../src/app/answer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SurveyDetailComponent = /** @class */ (function () {
    function SurveyDetailComponent(route, surveyService, location, dataService) {
        this.route = route;
        this.surveyService = surveyService;
        this.location = location;
        this.dataService = dataService;
        this.name = "";
        this.answers = [new __WEBPACK_IMPORTED_MODULE_7__answer__["a" /* Answer */]];
    }
    SurveyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.dataService
            .getQuestions(id)
            .subscribe(function (data) { return _this.values = data; }, function (error) { return function () {
            alert(error);
            console.log(error);
        }; }, function () {
            var questions = Array();
            var index = 0;
            for (var _i = 0, _a = _this.values.questions; _i < _a.length; _i++) {
                var entry = _a[_i];
                var quest = new __WEBPACK_IMPORTED_MODULE_3__question__["a" /* Question */]();
                quest.id = entry.id;
                quest.text = entry.text_fi;
                questions.push(quest);
                _this.preBuildAnswer(quest, index);
                index++;
            }
            _this.questions = questions;
            _this.getSurvey();
        });
    };
    SurveyDetailComponent.prototype.preBuildAnswer = function (quest, index) {
        var ans = new __WEBPACK_IMPORTED_MODULE_7__answer__["a" /* Answer */]();
        ans.answer = "";
        ans.questionId = quest.id;
        ans.question = quest.text;
        if (index == 0) {
            this.answers[0] = ans;
            return;
        }
        this.answers.push(ans);
    };
    SurveyDetailComponent.prototype.getSurvey = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.surveyService.getSurvey(id)
            .subscribe(function (survey) { return _this.survey = survey; });
    };
    SurveyDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    SurveyDetailComponent.prototype.saveAnswers = function () {
        // alert(this.answers[0].answer);
        this.dataService.add(this.answers).subscribe(function (error) { return function () {
            //alert(error);
            console.log(error);
        }; }, function () {
        });
        this.location.back();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__survey__["a" /* Survey */])
    ], SurveyDetailComponent.prototype, "survey", void 0);
    SurveyDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-survey-detail',
            template: __webpack_require__("../../../../../src/app/survey-detail/survey-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/survey-detail/survey-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__survey_service__["a" /* SurveyService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_6__data_service__["a" /* DataService */]])
    ], SurveyDetailComponent);
    return SurveyDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/survey-results/survey-results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".module_results {\r\n    padding: 20px;\r\n    max-width: 80%;\r\n  }\r\n\r\n  .center {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 80%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/survey-results/survey-results.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n    Ennen Suomen 2018 presidentinvaaleja sivustolla oli vaaleihin liittyvä kysely. Kyselyn vastauksen on analysoitu ja tulokset \r\n    esitetään alla.\r\n</p>\r\n<p>\r\n    Presidentinvaalikyselyn kysymykset olivat:\r\n</p>\r\n<p>\r\n    1. Millä todennäköisyydellä presidentinvaalit ratkeavat ensimmäisellä kierroksella?\r\n</p>\r\n<p>\r\n    2. Millä todennäköisyydellä Paavo Väyrynen saa Pekka Haavistoa enemmän ääniä?\r\n</p>\r\n\r\n<p>\r\n    3. Millä todennäköisyydellä äänestysprosentti ensimmäisellä kierroksella on yli 70%?\r\n</p>\r\n<p>\r\n    4. Millä todennäköisyydellä yksi tai useampi ehdokas luopuu ehdokkuudesta ennen ensimmäisen kierroksen vaalipäivää?\r\n</p>\r\n<p>\r\n    5. Millä todennäköisyydellä Pekka Haaviston kannatus on suurempi kuin Laura Huhtasaaren?\r\n</p>\r\n<p>\r\n    Kysymyksiä oli vain 5 kappaletta. Tämä ei ole lähellekään riittävä määrä jotta hyvät ennustajat \r\n    saataisiin aidosti eroteltua huonoista. Puhtaasti arvaamalla aina tulokseksi 0 % tai 100 %, \r\n    keskimäärin yksi arvaaja 32:sta saisi täydelliset Brierin pisteet, eli 0.0. Hieman yllättäen \r\n    kysymyksiin ei kuitenkaan vastattu usein tällä tavalla ja jos vastattiin, niin kukaan ei saanut \r\n    oikeaa vastausta jokaiseen kysymykseen. \r\n</p>\r\n<p>\r\n    Oikeat vastaukset, eli toteutunut rivi on: 1, 0, 0, 0, 1. Parhaat Brierin pisteet olivat 0.003\r\n    ja keskimääräiset pisteet 0.215. Antamalla jokaiseen kysymykseen vastauksen 50 % olisi saanut \r\n    tuloksen 0.25. Alla olevassa kuvassa on esitetty jokaisen 147 vastanneen vastaukset. Rehellisyyden\r\n    nimissä pitää kertoa että arviolta noin 30 vastausta on kehittäjiltä itseltään sillä tämän ensimmäisen\r\n    kyselyn aikana sivustoa kehitettiin paljon eteenpäin ja se toimi meille oppituntina. \"Oikeita\"\r\n    vastauksia tuli kuitenkin yli 100 kpl, Superennustajat kiittää!\r\n</p>\r\n    <!-- <center> -->\r\n    <img class=\"center\" src=\"2.jpg\" alt=\"Presidentinvaalikyselyn tulokset\" />\r\n    <!-- </center> -->"

/***/ }),

/***/ "../../../../../src/app/survey-results/survey-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyResultsComponent; });
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

var SurveyResultsComponent = /** @class */ (function () {
    function SurveyResultsComponent() {
    }
    SurveyResultsComponent.prototype.ngOnInit = function () {
    };
    SurveyResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-survey-results',
            template: __webpack_require__("../../../../../src/app/survey-results/survey-results.component.html"),
            styles: [__webpack_require__("../../../../../src/app/survey-results/survey-results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SurveyResultsComponent);
    return SurveyResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/survey.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey__ = __webpack_require__("../../../../../src/app/survey.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("../../../../../src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service__ = __webpack_require__("../../../../../src/app/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("../../../../rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { SURVEYS } from './mock-surveys';




var SurveyService = /** @class */ (function () {
    function SurveyService(messageService, dataService, http) {
        this.messageService = messageService;
        this.dataService = dataService;
        this.http = http;
    }
    SurveyService.prototype.getSurveys = function () {
        var _this = this;
        return this.http.get("https://gb5nzln27b.execute-api.eu-west-1.amazonaws.com/test/survey").
            pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["a" /* tap */])(function (surveys) { return _this.SURVEYS = surveys; }));
    };
    SurveyService.prototype.getSurveysMock = function () {
        // Todo: send the message _after_ fetching the surveys
        var _this = this;
        var values;
        var surveys = new Array();
        this.dataService.getAll()
            .subscribe(function (data) { return values = data; }, function (error) { return function () {
            console.log(error);
        }; }, function () {
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var entry = values_1[_i];
                var surv = JSON.parse(entry);
                //alert(surv.id);
                var sam = new __WEBPACK_IMPORTED_MODULE_2__survey__["a" /* Survey */]();
                sam.id = surv.id;
                sam.name = surv.name;
                // alert(entry.name);
                surveys.push(sam);
            }
            _this.SURVEYS = surveys;
        });
        // alert(surveys);
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(this.SURVEYS);
    };
    SurveyService.prototype.getSurvey = function (id) {
        // Todo: send the message _after_ fetching the survey
        var surv = this.SURVEYS.find(function (survey) { return survey.id == id; });
        this.messageService.add(surv.name);
        return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(surv);
    };
    SurveyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__message_service__["a" /* MessageService */], __WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], SurveyService);
    return SurveyService;
}());



/***/ }),

/***/ "../../../../../src/app/survey.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Survey; });
var Survey = /** @class */ (function () {
    function Survey() {
    }
    return Survey;
}());



/***/ }),

/***/ "../../../../../src/app/surveys/surveys.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* HeroesComponent's private CSS styles */\r\n.selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n.surveys {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n  }\r\n.surveys li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n  }\r\n.surveys li.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n.surveys li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n.surveys .text {\r\n    position: relative;\r\n    top: -3px;\r\n  }\r\n.surveys .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/surveys/surveys.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Avoimet kyselyt</h2>\r\n\r\n<ul class=\"surveys\">\r\n  <li *ngFor=\"let survey of surveys\"\r\n      [class.selected]=\"survey === selectedSurvey\"\r\n      (click)=\"onSelect(survey)\">\r\n    <span class=\"badge\">{{survey.id}}</span> {{survey.name}}\r\n  </li>\r\n</ul>\r\n<div *ngIf=\"selectedSurvey\">\r\n\r\n  <h2>{{ selectedSurvey.name | uppercase }} Kyselyn tiedot</h2>\r\n  <div><!--<span>id: </span>{{selectedSurvey.id}}</div>-->\r\n  <div>\r\n    <label>Kysely keskittyy..\r\n      <a routerLink=\"/detail/{{selectedSurvey.id}}\">Vastaa kyselyyn</a>\r\n    </label>\r\n    \r\n         \r\n  </div>\r\n\r\n</div>\r\n<app-messages></app-messages>"

/***/ }),

/***/ "../../../../../src/app/surveys/surveys.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveysComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__survey_service__ = __webpack_require__("../../../../../src/app/survey.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveysComponent = /** @class */ (function () {
    function SurveysComponent(surveyService) {
        this.surveyService = surveyService;
    }
    SurveysComponent.prototype.ngOnInit = function () {
        //this.surveyService.getSurveys()
        // .subscribe(surveys => this.surveys = surveys);
        this.surveys = this.surveyService.SURVEYS;
    };
    SurveysComponent.prototype.onSelect = function (survey) {
        this.selectedSurvey = survey;
    };
    SurveysComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-surveys',
            template: __webpack_require__("../../../../../src/app/surveys/surveys.component.html"),
            styles: [__webpack_require__("../../../../../src/app/surveys/surveys.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__survey_service__["a" /* SurveyService */]])
    ], SurveysComponent);
    return SurveysComponent;
}());



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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map