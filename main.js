(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: getAuthServiceConfigs, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthServiceConfigs", function() { return getAuthServiceConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-md */ "./node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/tutorial/tutorial.component */ "./src/app/ui/tutorial/tutorial.component.ts");
/* harmony import */ var _ui_video_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/video/video.component */ "./src/app/ui/video/video.component.ts");
/* harmony import */ var _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/editor/editor.component */ "./src/app/ui/editor/editor.component.ts");
/* harmony import */ var _ui_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ui/quiz/quiz.component */ "./src/app/ui/quiz/quiz.component.ts");
/* harmony import */ var _services_course_course_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var _ui_signin_signin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ui/signin/signin.component */ "./src/app/ui/signin/signin.component.ts");
/* harmony import */ var _ui_interview_questions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ui/interview/questions.component */ "./src/app/ui/interview/questions.component.ts");
/* harmony import */ var _ui_user_desktop_userdesktop_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/user/desktop/userdesktop.component */ "./src/app/ui/user/desktop/userdesktop.component.ts");
/* harmony import */ var _ui_searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/searchresults/searchresults.component */ "./src/app/ui/searchresults/searchresults.component.ts");
/* harmony import */ var _services_code_executor_code_executor_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/code-executor/code-executor.service */ "./src/app/services/code-executor/code-executor.service.ts");
/* harmony import */ var _tutorial_resolve__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./tutorial.resolve */ "./src/app/tutorial.resolve.ts");
/* harmony import */ var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/quiz/quiz.service */ "./src/app/services/quiz/quiz.service.ts");
/* harmony import */ var _pipes_safepipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/safepipe */ "./src/app/pipes/safepipe.ts");
/* harmony import */ var _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/apps/apps.service */ "./src/app/services/apps/apps.service.ts");
/* harmony import */ var _ui_apps_apps_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/apps/apps.component */ "./src/app/ui/apps/apps.component.ts");
/* harmony import */ var _ui_apps_appsdetails_appsdetails_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./ui/apps/appsdetails/appsdetails.component */ "./src/app/ui/apps/appsdetails/appsdetails.component.ts");
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular-6-social-login-v2 */ "./node_modules/angular-6-social-login-v2/angular-6-social-login-v2.umd.js");
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_28__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var routes = [
    {
        path: '', redirectTo: '/course/1/topic/1', pathMatch: 'full'
    },
    { path: 'course/:courseId', component: _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_12__["TutorialComponent"],
        children: [
            { path: '', redirectTo: './topic/1', pathMatch: 'full' },
            { path: 'topic/:topicId', component: _ui_video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"] },
            { path: 'interview/:courseName', component: _ui_interview_questions_component__WEBPACK_IMPORTED_MODULE_18__["QuestionsComponent"] }
        ],
        resolve: { courses: _tutorial_resolve__WEBPACK_IMPORTED_MODULE_22__["TutorialResolve"] }
    },
    { path: 'userdesktop', component: _ui_user_desktop_userdesktop_component__WEBPACK_IMPORTED_MODULE_19__["UserDesktopComponent"] },
    { path: 'searchresults', component: _ui_searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_20__["SearchResultsComponent"] },
    { path: 'apps', component: _ui_apps_apps_component__WEBPACK_IMPORTED_MODULE_26__["AppsComponent"] },
    { path: 'appsdetails/:id', component: _ui_apps_appsdetails_appsdetails_component__WEBPACK_IMPORTED_MODULE_27__["AppsDetailsComponent"] },
    { path: '**', redirectTo: '/course/1/topic/1', pathMatch: 'full' }
];
// Configs 
function getAuthServiceConfigs() {
    var config = new angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_28__["AuthServiceConfig"]([
        {
            id: angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_28__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_28__["GoogleLoginProvider"]("26197787311-0pmktkpj9m5bts42j5g9u5f5gem4sfrd.apps.googleusercontent.com")
        }
    ]);
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _ui_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_12__["TutorialComponent"], _ui_video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"], _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_14__["EditorComponent"],
                _pipes_safepipe__WEBPACK_IMPORTED_MODULE_24__["SafePipe"], _ui_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_15__["QuizComponent"], _ui_signin_signin_component__WEBPACK_IMPORTED_MODULE_17__["SigninComponent"], _ui_interview_questions_component__WEBPACK_IMPORTED_MODULE_18__["QuestionsComponent"], _ui_user_desktop_userdesktop_component__WEBPACK_IMPORTED_MODULE_19__["UserDesktopComponent"], _ui_searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_20__["SearchResultsComponent"],
                _ui_apps_apps_component__WEBPACK_IMPORTED_MODULE_26__["AppsComponent"], _ui_apps_appsdetails_appsdetails_component__WEBPACK_IMPORTED_MODULE_27__["AppsDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__["AceEditorModule"], angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_28__["SocialLoginModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), ngx_md__WEBPACK_IMPORTED_MODULE_6__["NgxMdModule"].forRoot(), angular_webstorage_service__WEBPACK_IMPORTED_MODULE_7__["StorageServiceModule"],
            ],
            providers: [_tutorial_resolve__WEBPACK_IMPORTED_MODULE_22__["TutorialResolve"], _services_course_course_service__WEBPACK_IMPORTED_MODULE_16__["CourseService"], _services_code_executor_code_executor_service__WEBPACK_IMPORTED_MODULE_21__["CodeExecutorService"], _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_23__["QuizService"], _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_25__["AppsService"], {
                    provide: angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_28__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pipes/safepipe.ts":
/*!***********************************!*\
  !*** ./src/app/pipes/safepipe.ts ***!
  \***********************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'safe' }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "./src/app/services/apps/apps.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/apps/apps.service.ts ***!
  \***********************************************/
/*! exports provided: AppsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsService", function() { return AppsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppsService = /** @class */ (function () {
    function AppsService(http) {
        this.http = http;
    }
    AppsService.prototype.getAppsData = function () {
        return this.http.get("https://codingkrishna.github.io/api/apps.json");
    };
    AppsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppsService);
    return AppsService;
}());



/***/ }),

/***/ "./src/app/services/code-executor/code-executor.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/code-executor/code-executor.service.ts ***!
  \*****************************************************************/
/*! exports provided: CodeExecutorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeExecutorService", function() { return CodeExecutorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeExecutorService = /** @class */ (function () {
    function CodeExecutorService(httpClient) {
        this.httpClient = httpClient;
    }
    CodeExecutorService.prototype.getLanguages = function () {
        return this.httpClient.get(" https://api.judge0.com/languages");
    };
    CodeExecutorService.prototype.executeCode = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.post("https://api.judge0.com/submissions", data, httpOptions);
    };
    CodeExecutorService.prototype.getStatusOfCodeExecution = function (token) {
        return this.httpClient.get("https://api.judge0.com/submissions/" + token);
    };
    CodeExecutorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CodeExecutorService);
    return CodeExecutorService;
}());



/***/ }),

/***/ "./src/app/services/course/course.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course/course.service.ts ***!
  \***************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseService = /** @class */ (function () {
    function CourseService(http) {
        this.http = http;
        this.courseSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    CourseService.prototype.getCourses = function () {
        return this.courseSubject.asObservable();
    };
    CourseService.prototype.getCourseDetails = function (courseId) {
        return this.coursesData.courses.filter(function (course) { return course.courseId == courseId; })[0];
    };
    CourseService.prototype.getTopicDetails = function (courseId, topicId) {
        var course = this.coursesData.courses.filter(function (course) { return course.courseId == courseId; })[0];
        return course.topics.filter(function (topic) { return topic.topicId == topicId; })[0];
    };
    CourseService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CourseService);
    return CourseService;
}());



/***/ }),

/***/ "./src/app/services/quiz/quiz.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/quiz/quiz.service.ts ***!
  \***********************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.getQuizData = function (courseId, topicId) {
        return this.http.get('https://codingkrishna.github.io/api/questions.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.json().error); }));
    };
    QuizService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/services/search/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/search/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var SearchService = /** @class */ (function () {
    function SearchService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.searchResultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SearchService.prototype.getSearch = function (issueTitle) {
        var _this = this;
        var url = 'https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&site=stackoverflow&q=' + issueTitle;
        console.log('url-->', url);
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            _this.storage.set('search-results', data.items);
            _this.searchResultSubject.next(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.json().error); }));
    };
    SearchService.prototype.getSearchResults = function () {
        return this.searchResultSubject.asObservable();
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var STORAGE_KEY = 'user-info';
var UserService = /** @class */ (function () {
    function UserService(http, storage) {
        this.http = http;
        this.storage = storage;
        this.userDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    UserService.prototype.set = function (value) {
        console.log("in session set=-----------......>>>>>", value);
        this.http.post("http://localhost:4300/api/users", JSON.parse(value)).subscribe(function (data) {
            console.log("inserted succesfully", data);
        });
        this.storage.set(STORAGE_KEY, value);
    };
    UserService.prototype.get = function () {
        return this.storage.get(STORAGE_KEY);
    };
    UserService.prototype.getUserData = function () {
        // console.log(this.UserData.id,"userAs");
        return this.userDataSubject.asObservable();
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], Object])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/user/user.ts":
/*!***************************************!*\
  !*** ./src/app/services/user/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/tutorial.resolve.ts":
/*!*************************************!*\
  !*** ./src/app/tutorial.resolve.ts ***!
  \*************************************/
/*! exports provided: TutorialResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialResolve", function() { return TutorialResolve; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TutorialResolve = /** @class */ (function () {
    function TutorialResolve(courseSer, http) {
        this.courseSer = courseSer;
        this.http = http;
    }
    TutorialResolve.prototype.resolve = function (route, state) {
        var _this = this;
        return this.http.get("https://codingkrishna.github.io/api/courses.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) {
            _this.courseSer.coursesData = data;
            _this.courseSer.courseSubject.next(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(err.json().error); }));
    };
    TutorialResolve = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_services_course_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TutorialResolve);
    return TutorialResolve;
}());



/***/ }),

/***/ "./src/app/ui/apps/apps.component.css":
/*!********************************************!*\
  !*** ./src/app/ui/apps/apps.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    /* width:18rem;\n    height:18rem; */\n    cursor: pointer;\n}\n.shadow-sm{\n    box-shadow: 0px 0px 60px 5px  rgba(0, 0, 0, 0.4) !important; \n}\n"

/***/ }),

/***/ "./src/app/ui/apps/apps.component.html":
/*!*********************************************!*\
  !*** ./src/app/ui/apps/apps.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"card shadow-sm col-sm\" *ngFor=\"let app of appslist\">\n            <img class=\"img-fluid\" routerLink = \"/appsdetails/{{app.id}}\" src=\"../../../assets/images/apps_images/{{app.imgUrls[0]}}\" alt=\"farm-ease\">\n        </div>\n        <div class=\"col-sm-1\"></div>\n        <!--<div class=\"card shadow-sm col-sm\">\n            <img class=\"img-fluid mt-3\" routerLink = \"/farmcard\" src=\"../../../assets/images/Regnant-Portal-App/regnant_logo.webp\" alt=\"farm-ease\">\n        </div>\n        <div class=\"col-sm-1\"></div>\n        <div class=\"card shadow-sm col-sm\">\n            <img class=\"img-fluid\" routerLink = '/smartcard' src=\"../../../assets/images/the smart chits/logo.jpg\" alt=\"farm-ease\">\n        </div> -->\n    </div>\n</div>\n<!-- <div class=\"container mt-5 mb-5\">\n    <div class=\"row\">\n            <div class=\"col-sm-1\"></div>\n        <div class=\"card shadow-sm col-sm\">\n            <img class=\"img-fluid mt-5\" src=\"../../../assets/images/LearnApp/logo.png\" alt=\"farm-ease\">\n        </div>\n        <div class=\"col-sm-2\"></div>\n        <div class=\"card shadow-sm col-sm\">\n            <img class=\"img-fluid mt-3\" routerLink = \"/farmcard\" src=\"../../../assets/images/Regnant-Portal-App/regnant_logo.webp\" alt=\"farm-ease\">\n        </div>\n        <div class=\"col-sm-2\"></div>\n    </div>\n</div> -->"

/***/ }),

/***/ "./src/app/ui/apps/apps.component.ts":
/*!*******************************************!*\
  !*** ./src/app/ui/apps/apps.component.ts ***!
  \*******************************************/
/*! exports provided: AppsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsComponent", function() { return AppsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/apps/apps.service */ "./src/app/services/apps/apps.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppsComponent = /** @class */ (function () {
    function AppsComponent(appsService) {
        this.appsService = appsService;
    }
    AppsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apps = this.appsService.getAppsData();
        this.apps.subscribe(function (data) {
            _this.appslist = data.apps;
            //  console.log(this.appslist);
        });
    };
    AppsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apps',
            template: __webpack_require__(/*! ./apps.component.html */ "./src/app/ui/apps/apps.component.html"),
            styles: [__webpack_require__(/*! ./apps.component.css */ "./src/app/ui/apps/apps.component.css")]
        }),
        __metadata("design:paramtypes", [_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_1__["AppsService"]])
    ], AppsComponent);
    return AppsComponent;
}());



/***/ }),

/***/ "./src/app/ui/apps/appsdetails/appsdetails.component.css":
/*!***************************************************************!*\
  !*** ./src/app/ui/apps/appsdetails/appsdetails.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-indicators li{\n    height: 10px !important;\n    width: 10px !important;\n    border-radius: 50%;\n}\n.farm{\n    font-family: cfont;\n    font-size: 3rem;\n    font-weight: 550;\n    color: #186607;\n}\n.desc{\n    font-family: Georgia, 'Times New Roman', Times, serif;\n    font-size: 1rem;\n    color: green;\n    font-style: italic;\n}"

/***/ }),

/***/ "./src/app/ui/apps/appsdetails/appsdetails.component.html":
/*!****************************************************************!*\
  !*** ./src/app/ui/apps/appsdetails/appsdetails.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-5 mb-5\">\n        <div class=\"card shadow-lg mb-5\">\n            <div class=\"row no-gutters\">\n                <div class=\"col-md-7 mt-3 ml-3\">\n                    <div id=\"slides\" class=\"carousel slide\" data-ride=\"carousel\">\n                        <ol class=\"carousel-indicators\">\n                            <li data-target=\"#slides\" data-slide-to=\"0\" class=\"active\"></li>\n                            <li data-target=\"#slides\" data-slide-to=\"1\"></li>\n                            <!-- <li data-target=\"#slides\" data-slide-to=\"2\"></li>\n                            <li data-target=\"#slides\" data-slide-to=\"3\"></li> -->\n                            <!-- <li data-target=\"#slides\" data-slide-to=\"4\"></li>\n                            <li data-target=\"#slides\" data-slide-to=\"5\"></li> -->\n                        </ol>\n                        <div class=\"carousel-inner\">\n                            <div class=\"carousel-item active\">\n                                <img class=\"img-fluid d-block w-100\" src=\"../../../../assets/images/apps_images/{{app.imgUrls[1]}}\"\n                                    alt=\"First slide\">\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img class=\"img-fluid d-block w-100\" src=\"../../../../assets/images/apps_images/{{app.imgUrls[2]}}\"\n                                    alt=\"Second slide\">\n                            </div>\n                            <!-- <div class=\"carousel-item\">\n                                <img class=\"img-fluid d-block w-100\" src=\"../../../../assets/images/apps_images/{{app.imgUrls[1]}}\"\n                                    alt=\"Third slide\">\n                            </div> -->\n                            <!-- <div class=\"carousel-item\">\n                                <img class=\"img-fluid d-block w-100\" src=\"../../../../assets/images/Farm-eaze/Slot.png\"\n                                    alt=\"fourth slide\">\n                            </div> -->\n                            <!-- <div class=\"carousel-item\">\n                                <img class=\"img-fluid d-block w-100\" src=\"../../assets/images/GT/Register-Employee.png\"\n                                    alt=\"fifth slide\">\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img class=\"img-fluid d-block w-100\" src=\"../../assets/images/GT/Select-task.png\"\n                                    alt=\"sixth slide\">\n                            </div> -->\n                        </div>\n                        <a class=\"carousel-control-prev\" href=\"#slides\" role=\"button\" data-slide=\"prev\">\n                            <!-- <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> -->\n                            <span class=\"sr-only\">Previous</span>\n                        </a>\n                        <a class=\"carousel-control-next\" href=\"#slides\" role=\"button\" data-slide=\"next\">\n                            <!-- <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> -->\n                            <span class=\"sr-only\">Next</span>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-md\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title farm\">{{app.name}}</h5>\n                        <p class=\"card-text desc\">{{app.description}}</p>\n                    </div>\n                </div>\n                <div class=\"col-12 mt-3\">\n                    <div class=\"card-footer\">\n                        <h5>Specifications</h5>\n                        <p class=\"card-text\" *ngFor=\"let spec of app.specifications\">{{spec}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/apps/appsdetails/appsdetails.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui/apps/appsdetails/appsdetails.component.ts ***!
  \**************************************************************/
/*! exports provided: AppsDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsDetailsComponent", function() { return AppsDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/apps/apps.service */ "./src/app/services/apps/apps.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppsDetailsComponent = /** @class */ (function () {
    function AppsDetailsComponent(routerpara, appsService) {
        this.routerpara = routerpara;
        this.appsService = appsService;
    }
    AppsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerpara.paramMap.subscribe(function (data) {
            var id = data.get('id');
            console.log("Selected App Id:", id);
            _this.appsService.getAppsData().subscribe(function (data) {
                _this.app = data.apps.filter(function (data) { return data.id == id; })[0];
                console.log("App Details ==> ", _this.app);
            });
        });
    };
    AppsDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'apps-details',
            template: __webpack_require__(/*! ./appsdetails.component.html */ "./src/app/ui/apps/appsdetails/appsdetails.component.html"),
            styles: [__webpack_require__(/*! ./appsdetails.component.css */ "./src/app/ui/apps/appsdetails/appsdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_2__["AppsService"]])
    ], AppsDetailsComponent);
    return AppsDetailsComponent;
}());



/***/ }),

/***/ "./src/app/ui/editor/editor.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/editor/editor.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".onlineEditor-section{\n    padding: 0%;\n}\n.onlineEditor-panel{\n    position: relative;\n    display: inline-block;\n    width: 100%;\n    padding: 0%;\n    background-color: #ddd;\n    border: 1px solid;\n}\n/* .ace-monokai {\n    background-color: #ddd;\n    color: #00304C;\n}\n.ace_gutter {\n    background: rgb(188, 193, 202);\n    color: #2F3129;\n} */\n.header-navbar{\n        width: 100%;\n        height: 50px;\n        margin-top: 20px;\n        background-color: #00304C;\n        margin-left: 0px;\n    }\n.nav-header{\n     color: white;\n     margin: 5px;\n    }\n.nav-lang-select{\n        height: 30px;\n        margin: 10px 0px;\n        border: 1px solid #00304C;\n        border-radius: 4px;\n    }\n.nav-submit{\n    width: 75px;\n    height: 30px;\n    margin-top: 10px;\n    border: 1px solid #0ba9a0;\n    border-radius: 4px;\n    background-color: #0ba9a0;\n    color: white;\n\n   \n    \n    }\n.result-box{\n        border: 1px solid;\n        height: 150px;\n    }\n"

/***/ }),

/***/ "./src/app/ui/editor/editor.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/editor/editor.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">\n\n  \n      <div class=\"row header-navbar\">\n        <div class=\"col-md-3\">\n          <h2 class=\"nav-header\">CodeEditor</h2>\n        </div>\n        <div class=\"col-md-4 offset-md-3\" style=\"margin-left: 12%\"> \n          <select class=\"nav-lang-select\" name=\"language\" (change)=\"selectedLanguage($event.target.value)\">\n              <option *ngFor='let language of languageList' value={{language.id}}>{{language.name}}</option>\n          </select>\n        </div>  \n        <div class=\"col-md-2\" style=\"margin-left:10%\">\n          <button class=\"nav-submit\" (click)=\"executeCode(text)\"><i class=\"fas fa-play\"></i> Run</button>\n        </div>\n      </div>\n    \n\n\n  <section class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 onlineEditor-section\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 onlineEditor-panel\">\n      <ace-editor\n       [(text)]=\"text\"\n        #editor style=\"height:250px;\"></ace-editor>\n  </div>\n  <div class=\"row mb-5\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n      <span>Input:</span>\n      <ace-editor\n       [(text)]=\"input\"\n        #editor style=\"height:150px;\"></ace-editor>\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n        <span>Output: </span> \n        <div class=\"result-box\">\n            {{codeResult}}\n        </div>\n      </div>\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/ui/editor/editor.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/editor/editor.component.ts ***!
  \***********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_code_executor_code_executor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/code-executor/code-executor.service */ "./src/app/services/code-executor/code-executor.service.ts");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! brace */ "./node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var brace_theme_monokai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! brace/theme/monokai */ "./node_modules/brace/theme/monokai.js");
/* harmony import */ var brace_theme_monokai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(brace_theme_monokai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var brace_mode_typescript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! brace/mode/typescript */ "./node_modules/brace/mode/typescript.js");
/* harmony import */ var brace_mode_typescript__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(brace_mode_typescript__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var brace_mode_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! brace/mode/javascript */ "./node_modules/brace/mode/javascript.js");
/* harmony import */ var brace_mode_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(brace_mode_javascript__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var brace_ext_language_tools_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! brace/ext/language_tools.js */ "./node_modules/brace/ext/language_tools.js");
/* harmony import */ var brace_ext_language_tools_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(brace_ext_language_tools_js__WEBPACK_IMPORTED_MODULE_6__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditorComponent = /** @class */ (function () {
    function EditorComponent(codeExecutorService) {
        this.codeExecutorService = codeExecutorService;
        this.text = "";
        this.input = "";
        this.options = { maxLines: 1000, printMargin: false };
        this.languageList = [];
        this.selectedLang = "";
        this.codeResult = "";
    }
    EditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeExecutorService.getLanguages()
            .subscribe(function (result) {
            console.log("EditorComponent on init>>", result);
            _this.languageList = result;
        });
        this.text = this.sampleCode;
        console.log('smapleCode -->', this.sampleCode, this.courseId);
    };
    EditorComponent.prototype.ngAfterViewInit = function () {
        this.editor.setTheme("ace/theme/monokai");
        this.editor.getEditor().setOptions({
            enableBasicAutocompletion: true
        });
        this.editor.getEditor().commands.addCommand({
            name: "showOtherCompletions",
            bindKey: "Ctrl-.",
            exec: function (editor) {
            }
        });
    };
    EditorComponent.prototype.selectedLanguage = function (filterVal) {
        console.log('[HK] selected language>>', filterVal);
        this.selectedLang = filterVal;
    };
    EditorComponent.prototype.onChange = function (code) {
        console.log("new code", code);
    };
    EditorComponent.prototype.executeCode = function (text) {
        var _this = this;
        var data = {
            "language_id": this.selectedLang,
            "source_code": text,
            "stdin": this.input
        };
        console.log("co--->", data);
        this.codeExecutorService.executeCode(data)
            .subscribe(function (result) {
            setTimeout(function () {
                console.log("code submmit Response ....", result.token);
                _this.codeExecutorService.getStatusOfCodeExecution(result.token)
                    .subscribe(function (result) {
                    console.log("code run status>", result);
                    _this.codeResult = result.stdout;
                });
            }, 5000);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], EditorComponent.prototype, "sampleCode", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], EditorComponent.prototype, "courseId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('editor'),
        __metadata("design:type", Object)
    ], EditorComponent.prototype, "editor", void 0);
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'online-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/ui/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/ui/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [_services_code_executor_code_executor_service__WEBPACK_IMPORTED_MODULE_1__["CodeExecutorService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fa-heart {\n  color: hotpink;\n}\nnav{\n  z-index: 5;\n}"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\n<nav class=\"bg-dark navbar-dark footer-fixed-custom\">\n  <div class=\"container\">\n    <div class=\"row \">\n      <div class=\"col justify-content-start align-content-center  \">\n        <p class=\"text-white mt-1 mb-1 ml-0 pl-0\"> Pioneer Coders 2019 . All Rights Reserved</p>\n      </div>\n    </div>\n  </div>\n</nav>\n<!-- FOOTER -->"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/footer/footer.component.ts ***!
  \***********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/ui/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/ui/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/ui/header/header.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/header/header.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tag-line{\n    font-size: 80%;\n    padding-left: 18%;\n}\n.dropdown-menu{\n    left: 86px;\n    top: 70px;\n}\n.other > ul{\n    list-style-type: none;\n    display: contents;\n}\n.active-cyan-4 input[type=text]:focus:not([readonly]) {\n    border: 1px solid #17A2B8;\n    box-shadow: none;\n}\n.active-cyan-3 input[type=text] {\n    border: 1px solid #17A2B8;\n\n}\n.active-cyan-4 input[type=text]:focus::-webkit-input-placeholder { \n    transition: opacity 0.45s ease; \n  \t  opacity: 0;\n}\n.active-cyan-4 input[type=text]:focus::-ms-input-placeholder { \n    transition: opacity 0.45s ease; \n  \t  opacity: 0;\n}\n.active-cyan-4 input[type=text]:focus::placeholder { \n    transition: opacity 0.45s ease; \n  \t  opacity: 0;\n}\n.apps{\n    padding-top: 5px;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top Banner -->\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark pt-0 pb-0\" >\n  <div class=\"container\">\n\n    <ul class=\"nav navbar-nav justify-content-start\">\n      <li class=\"nav-item m-1\">\n        <a class=\"nav-link pl-0 text-white\" href=\"#\" >\n          <i class=\"fas fa-mobile-alt\"></i> +91-8123870076</a>\n      </li>\n      <li class=\"nav-item m-1  \">\n        <a class=\"nav-link text-white\" href=\"#\" ><i class=\"far fa-envelope\"></i>\n          contactus@pioneercoders.com</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav justify-content-end\">\n      <li class=\"nav-item m-1 \">\n        <a class=\"nav-link p-0 text-white\" href=\"#\" ><i class=\"fas fa-map-marker-alt\"></i> BTM\n          layout 1stage, Near\n          Gangothri Circle</a>\n      </li>\n    </ul>\n  </div>\n\n</nav>\n<!-- Top Banner -->\n<!-- 2nd Navbar -->\n<!-- Header -->\n<nav class=\"navbar  navbar-expand-sm  sticky-top m-0 bg-white navbar-light shadow-sm\">\n  <div class=\"container\">\n    <!-- Brand/logo -->\n    <a class=\"navbar-brand \" href=\"#\">\n      <img src=\"../../../assets/pc-logo.png\" alt=\"logo\" class=\"img-box d-inline-flex mr-auto\" width=\"50px\" />\n      <h2 class=\"title text-secondary d-inline-flex\">PioneerCoders</h2>\n      <div class=\"tag-line\">Path to Code, Platform for coders.</div>\n    </a>\n    <!-- Hamburger Icon -->\n    <button class=\"navbar-toggler ml-auto\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\"\n    aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n    <!-- Collapsible Menu -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"nav navbar-nav ml-auto\">\n        <div class=\"active-cyan-3 active-cyan-4 mb-4\" >\n          <li class=\"row mr-5\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Enter exception\" [(ngModel)]=\"searchQuery\" (keyup.enter)=\"handleSearch()\"> <i style=\"margin-left: -10%; margin-top: 5% \" class=\"fas fa-search\"></i></li>\n        </div>\n        <li class=\"nav-item dropdown  position-static\">\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n            aria-haspopup=\"true\" aria-expanded=\"false\" style=\"color:#DC3545\">Video Tutorial\n          </a>\n\n          <!-- MENU DETAILS -->\n          <div class=\"row\">\n            <div class=\"dropdown-menu col-lg-11  col-lg-10 col-lg-offset-2 col-sm-10 col-sm-offset-2 bg-light shadow-lg p-3 mb-5 bg-white rounded \" aria-labelledby=\"navbarDropdown\">\n              <div class=\"container\">\n                <div class=\"row justify-content-around\">\n                  <div *ngFor=\"let courseGrop of courseGropList\">\n                    <div class=\"col\">\n                      <p><strong class=\"sub-menu-heading\">{{courseGrop.key}}</strong></p>\n                      <p>\n                        <a *ngFor=\"let course of courseGrop.value\" routerLink=\"/course/{{course.courseId}}/topic/1\">\n                          {{course.name}}<br>\n                        </a>\n                      </p>\n                    </div>\n                  </div>\n                           \n                  <!-- <div >\n                    <div class=\"col\">\n                      <p><strong class=\"sub-menu-heading\">Others</strong></p> \n                       <div class='other'>\n                         <ul>\n                           <li><a href=\"#\">Tersm</a></li>\n                           <li><a href=\"#\">Services</a></li>\n                           <li><a href=\"#\">Contact Us</a></li>\n                         </ul>\n                       </div>\n                    </div>\n                  </div>\n                -->\n\n                  \n                </div>\n              </div>\n            </div>\n  \n          </div>\n        </li>\n        <li class=\"nav-item position-static apps\">\n          <a routerLink=\"/apps\"> Apps</a>\n      </li>\n        <li class=\"nav-item justify-content-end\">\n          <app-signin></app-signin>\n        </li>\n        \n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/ui/header/header.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/header/header.component.ts ***!
  \***********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, courseSer, route, searchSer) {
        this.router = router;
        this.courseSer = courseSer;
        this.route = route;
        this.searchSer = searchSer;
        this.courseList = [];
        this.courseGropList = [];
        this.searchQuery = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.courseSer.getCourses().subscribe(function (data) {
            _this.courseList = data.courses;
            console.log('Header->ngOnInit() courseList-->', _this.courseList);
            var groupedCollection = _this.courseList.reduce(function (previous, current) {
                var property = 'type';
                if (!previous[current[property]]) {
                    previous[current[property]] = [current];
                }
                else {
                    previous[current[property]].push(current);
                }
                return previous;
            }, {});
            // this will return an array of objects, each object containing a group of objects
            _this.courseGropList = Object.keys(groupedCollection).map(function (key) { return ({ key: key, value: groupedCollection[key] }); });
            console.log('courseGropList', _this.courseGropList);
        });
        jquery__WEBPACK_IMPORTED_MODULE_4__('body').on('mouseenter mouseleave', '.dropdown', function (e) {
            var dropdown = jquery__WEBPACK_IMPORTED_MODULE_4__(e.target).closest('.dropdown');
            var menu = jquery__WEBPACK_IMPORTED_MODULE_4__('.dropdown-menu', dropdown);
            dropdown.addClass('show');
            menu.addClass('show');
            setTimeout(function () {
                dropdown[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
                menu[dropdown.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 100);
        });
    };
    HeaderComponent.prototype.handleSearch = function () {
        var _this = this;
        console.log('search stated -->', this.searchQuery);
        this.searchSer.getSearch(this.searchQuery).subscribe(function (data) {
            _this.router.navigate(['searchresults']);
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_course_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/interview/questions.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/interview/questions.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div NgxMd [path]=\"questionsFileName\" (error)=\"errorHandler($event)\"></div>"

/***/ }),

/***/ "./src/app/ui/interview/questions.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/interview/questions.component.ts ***!
  \*****************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(route, router) {
        this.route = route;
        this.router = router;
        this.questionsFileName = "README.md";
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.questionsFileName = 'assets/' + params.courseName + '-interview-questions.md';
            console.log('questionsFileName-->', _this.questionsFileName);
        });
    };
    QuestionsComponent.prototype.errorHandler = function (error) {
        console.log('error while loading readme file', error);
    };
    QuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'interview-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/ui/interview/questions.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/ui/quiz/answerkey.ts":
/*!**************************************!*\
  !*** ./src/app/ui/quiz/answerkey.ts ***!
  \**************************************/
/*! exports provided: AnswerKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerKey", function() { return AnswerKey; });
var AnswerKey = /** @class */ (function () {
    function AnswerKey(choosen, answer) {
        this.choosen = choosen;
        this.answer = answer;
    }
    return AnswerKey;
}());



/***/ }),

/***/ "./src/app/ui/quiz/quiz.component.css":
/*!********************************************!*\
  !*** ./src/app/ui/quiz/quiz.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n  .btn-info-dif {\n    background-color: transparent;\n    border-radius: 0px;\n    border-top-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n    transition: all 0.3s;\n  }\n  \n  .btn-info-dif:hover {\n    background-color: #4bbcd7;\n    color: #fff;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    border-top-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n  }\n  \n  .score-card{\n    color: green;\n\n  }\n  \n  .close-quiz{\n    cursor: pointer;\n    position: relative;\n    left: 20px;\n    top: -10px;\n    font-size: 28px\n  }\n "

/***/ }),

/***/ "./src/app/ui/quiz/quiz.component.html":
/*!*********************************************!*\
  !*** ./src/app/ui/quiz/quiz.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\">\n    <div class=\"modal-content\">\n      <!-- Quiz content -->\n      <div class=\"container\">\n        <div class=\"row justify-content-center m-2 bg-dark text-white\">\n          <div class=\"col align-self-center\">\n            <h4 class=\"p-0 m-2\"> QUIZ</h4>\n          </div>\n          <div class=\"col text-right\">\n            <h4 class=\"p-2 m-2\"><countdown #countdown [config]=\"{leftTime: [quizlength]*60, demand: true}\"  (finished)=\"finishTest()\">$!m!:$!s!</countdown></h4>\n          </div>\n          <div><a title=\"Close\" class=\" pull-right\"><i ng-click=\"CloseModal('modalLoginForm')\" class=\"close close-quiz pull-right\" style=\"cursor: pointer;\" title=\"close\">&times;</i></a></div>\n          <!-- <a title=\"Close\"><i ng-click=\"CloseModal()\" class=\"close pull-right\">&times;</i></a>  -->\n          <!-- <div class=\"col-12\">\n              <div class=\"progress\">\n                  <div class=\"progress-bar w-75\" role=\"progressbar\" aria-valuenow={{i}} aria-valuemin=\"0\" aria-valuemax=\"{{quizlength}}\"></div>\n                </div>\n            \n          </div> -->\n        </div>\n         \n\n        <div class=\"row justify-content-center m-2 \">\n          <div class=\"col-12 m-3 pl-4 text-justify font-weight-bold text-uppercase\">{{(i+1)}} . {{question}}</div>\n          <div class=\"col-6 text-justify mt-2 mb-2  \" *ngFor=\"let opt of option\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label \"><input type=\"radio\" name=\"options\" class=\"form-check-label\"\n                  (click)=\"check($event,opt)\">\n                {{opt}}\n                <span class=\"cr\"><i class=\"cr-icon glyphicon glyphicon-ok\"></i></span>\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row m-5 justify-content-center\">\n\n          <div class=\"col text-left pl-0\"><button class=\"btn btn-outline-dark \" (click)=\"previous()\"\n              *ngIf=\"i>0\"><i class=\"fas fa-hand-point-left\"></i> Previous</button></div>\n\n\n              <div class=\"col text-center pl-0\" *ngIf=\"showMarks\"><span class=\"score-card\">Your Score: <i class=\"fas fa-hand-point-right\"></i> {{marskScored}}</span></div>\n\n\n          <div class=\"col text-right\"> <button class=\"btn btn-outline-dark \" (click)=\"next()\"\n              *ngIf=\"i<(quizlength-1)\">Next <i class=\"fas fa-hand-point-right\"></i></button></div>\n        </div>\n        <div class=\"row m-5 justify-content-center\">\n          <div class=\"col text-center \"> <button class=\" btn btn-info-dif btn-md \" ng-disabled=all\n              (click)=\"generatemark()\" [disabled]=\"showMarks\" >Submit Test</button> </div>\n        </div>\n      </div>\n      <!-- Quiz content -->\n    </div>\n  </div>\n</div>\n\n<div class=\"text-right\">\n \n    <button class=\"btn btn-info-dif btn-md\" type=\"button\" title=\"Start Quiz\"  data-toggle=\"modal\"\n    data-target=\"#modalLoginForm\" (click)=\"startQuiz()\">Quiz Test</button> \n</div>"

/***/ }),

/***/ "./src/app/ui/quiz/quiz.component.ts":
/*!*******************************************!*\
  !*** ./src/app/ui/quiz/quiz.component.ts ***!
  \*******************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/quiz/quiz.service */ "./src/app/services/quiz/quiz.service.ts");
/* harmony import */ var _answerkey__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answerkey */ "./src/app/ui/quiz/answerkey.ts");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizComponent = /** @class */ (function () {
    function QuizComponent(route, router, quizServ) {
        this.route = route;
        this.router = router;
        this.quizServ = quizServ;
        this.topicId = 1;
        this.i = 0;
        this.quizlength = 1;
        this.showMarks = false;
        this.marskScored = "";
        /********************************************************* */
        this.answerkey = [];
        ///////////////////////////////////
        this.marks = 0;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.courseId = +params["courseId"];
            console.log('QuizComponent->ngOnInit parent courseId', _this.courseId, ' topicId-->', _this.topicId);
            _this.getQuestions();
        });
        this.route.params.subscribe(function (params) {
            console.log('QuizComponent->ngOnInit child params', params);
            console.log('QuizComponent->ngOnInit courseId-->', _this.courseId, 'topic id-->', params.topicId, 'topicId->', params.topicId);
            _this.topicId = params.topicId;
            _this.getQuestions();
        });
    };
    QuizComponent.prototype.getQuestions = function () {
        var _this = this;
        this.quizServ.getQuizData(this.courseId, this.topicId).subscribe(function (data) {
            _this.quizQuestions = data.questions.filter(function (quesesion) { return quesesion.languageId == _this.courseId && quesesion.topicId == _this.topicId; });
            console.log('QuizComponent->ngOnInit quizQuestions', _this.quizQuestions);
            _this.question = _this.quizQuestions[0].question;
            _this.option = _this.quizQuestions[0].anslist;
            _this.i = 0;
            _this.quizlength = _this.quizQuestions.length;
        });
    };
    /******************************************************** */
    QuizComponent.prototype.next = function () {
        ++this.i;
        this.question = this.quizQuestions[this.i].question;
        this.option = this.quizQuestions[this.i].anslist;
    };
    QuizComponent.prototype.previous = function () {
        --this.i;
        this.question = this.quizQuestions[this.i].question;
        this.option = this.quizQuestions[this.i].anslist;
    };
    QuizComponent.prototype.check = function (e, str, answer) {
        if (e.target.checked) {
            console.log("..................." + str + " " + answer);
            this.answerkey.push(new _answerkey__WEBPACK_IMPORTED_MODULE_3__["AnswerKey"](str, answer));
        }
        else {
            this.answerkey.splice(0, 1);
        }
        console.log(this.answerkey);
        this.recursivecheck();
    };
    QuizComponent.prototype.generatemark = function () {
        for (var i = 0; i < this.answerkey.length; i++) {
            if (this.answerkey[i].choosen == this.quizQuestions[i].answer)
                this.marks++;
        }
        this.marskScored = JSON.stringify(this.marks);
        this.showMarks = true;
        // alert("your score is "+JSON.stringify(this.marks));
        // document.writeln("your score is " + this.marks);
    };
    ///////////////////////////////////
    QuizComponent.prototype.recursivecheck = function () {
        var result1 = this.quizQuestions;
        var result2 = this.answerkey;
        var props = ['id', 'answer'];
        var result = result1.filter(function (o1) {
            // filter out (!) items in result2
            return result2.some(function (o2) {
                return o1.answer === o2.answer;
                // assumes unique id
            });
        }).map(function (o) {
            // use reduce to make objects with only the required properties
            // and map to apply this to the filtered array as a whole
            return props.reduce(function (newo, ans) {
                newo[ans] = o[ans];
                return newo;
            }, {});
        });
        console.log("result:" + JSON.stringify(result));
    };
    QuizComponent.prototype.finishTest = function () {
        this.generatemark();
    };
    QuizComponent.prototype.startQuiz = function () {
        //this.counter.resume();
        this.counter.begin();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('countdown'),
        __metadata("design:type", ngx_countdown__WEBPACK_IMPORTED_MODULE_4__["CountdownComponent"])
    ], QuizComponent.prototype, "counter", void 0);
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/ui/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/ui/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/ui/searchresults/searchresults.component.css":
/*!**************************************************************!*\
  !*** ./src/app/ui/searchresults/searchresults.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-results-numbeirng{\nlist-style: none;\n}"

/***/ }),

/***/ "./src/app/ui/searchresults/searchresults.component.html":
/*!***************************************************************!*\
  !*** ./src/app/ui/searchresults/searchresults.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"text-black-50 text-lg-center text-light\"><b>Your Search Results</b></div><br>\n    <!-- <div *ngFor=\"let result of results\"> -->\n        <ol *ngFor=\"let result of results;  let i = index\" class=\"search-results-numbeirng\">\n\n            <li class=\"container\"> {{i+1}}. &emsp;{{result.title}}\n                \n                <a href=\"{{result.link}}\" target=\"_blank\">Click here</a>\n            </li>\n        </ol>\n    <!-- </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/ui/searchresults/searchresults.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/ui/searchresults/searchresults.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/search/search.service */ "./src/app/services/search/search.service.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(route, router, searchService, storage) {
        this.route = route;
        this.router = router;
        this.searchService = searchService;
        this.storage = storage;
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getSearchResults().subscribe(function (results) {
            console.log(' SearchResultsComponent --> results--->', results);
            _this.results = results.items;
        });
        this.results = this.storage.get('search-results');
    };
    SearchResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'searchresults',
            template: __webpack_require__(/*! ./searchresults.component.html */ "./src/app/ui/searchresults/searchresults.component.html"),
            styles: [__webpack_require__(/*! ./searchresults.component.css */ "./src/app/ui/searchresults/searchresults.component.css")],
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["SESSION_STORAGE"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_search_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], Object])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/ui/signin/signin.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/signin/signin.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/signin/signin.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/signin/signin.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- <button class=\"btn btn-outline-secondary m-1\"> Profile</button> -->\n<button class=\"btn btn-outline-info\" (click)=\"socialSignIn('google')\"> <i class=\"fab fa-google\"></i> Sign in with Google</button>"

/***/ }),

/***/ "./src/app/ui/signin/signin.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/signin/signin.component.ts ***!
  \***********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-6-social-login-v2 */ "./node_modules/angular-6-social-login-v2/angular-6-social-login-v2.umd.js");
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user/user */ "./src/app/services/user/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = /** @class */ (function () {
    function SigninComponent(route, router, socialAuthService, userService) {
        this.route = route;
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.userService = userService;
    }
    SigninComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log('User signin success .........');
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData
            // ...
            var u = new _services_user_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
            u.id = userData.id;
            u.name = userData.name;
            u.email = userData.email;
            u.imgUrl = userData.image;
            _this.userService.userDataSubject.next(u);
            console.log(typeof u);
            _this.userService.set(JSON.stringify(u));
            // navigate to desktop page..
            _this.router.navigate(['/userdesktop']);
        });
    };
    SigninComponent.prototype.socialSignOut = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signOut().then(function (data) {
            console.log('Success fully logged out');
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/ui/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/ui/signin/signin.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/ui/tutorial/tutorial.component.css":
/*!****************************************************!*\
  !*** ./src/app/ui/tutorial/tutorial.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.active{\n    background-color: salmon ;\n    color:white;\n}\n.topics > li{\n    outline: none;\n}\n.topics > :first-child{\n    border-top-left-radius: 10px;\n}\n.topics > :last-child{\n    border-bottom-right-radius: 10px;\n\n}"

/***/ }),

/***/ "./src/app/ui/tutorial/tutorial.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/tutorial/tutorial.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>{{courseDetails.courseId}} </div>\n<div>{{courseDetails.name}} </div>\n<div>{{courseDetails.description}} </div>\n<div *ngFor=\"let topic of courseDetails.topics\">\n    <div ><a routerLink=\"video/{{topic.videoId}}\">{{topic.name}}</a> </div>\n</div>\n<div>\n        <router-outlet></router-outlet>\n</div>\n-->\n\n<div class=\"container \">\n    <div class=\"row\">\n        <div class=\"col-3\">\n\n            <div class=\"menu justify-content-start\">\n                <ul class=\"pl-0 topics\">\n                    <li routerLink=\"topic/{{topic.topicId}}\" routerLinkActive=\"active current\"\n                        *ngFor=\"let topic of courseDetails.topics\" style=\"cursor: pointer;\">\n                        {{topic.name}}\n                    </li>\n                    <li routerLink=\"interview/{{courseDetails.name}}\">Interview Questions</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col mt-5 p-0\">\n            <div class=\"col justify-content-start pl-0\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/tutorial/tutorial.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/tutorial/tutorial.component.ts ***!
  \***************************************************/
/*! exports provided: TutorialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialComponent", function() { return TutorialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TutorialComponent = /** @class */ (function () {
    function TutorialComponent(route, router, courseSer) {
        this.route = route;
        this.router = router;
        this.courseSer = courseSer;
    }
    TutorialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var courseId = params.courseId;
            _this.courseDetails = _this.courseSer.getCourseDetails(courseId);
            console.log('TutorialComponent->ngOnInit() courseId->', _this.courseDetails, 'couse detilas->', _this.courseDetails);
        });
    };
    TutorialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tutorial-contant',
            template: __webpack_require__(/*! ./tutorial.component.html */ "./src/app/ui/tutorial/tutorial.component.html"),
            styles: [__webpack_require__(/*! ./tutorial.component.css */ "./src/app/ui/tutorial/tutorial.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_course_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/userdesktop.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ui/user/desktop/userdesktop.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar1 {\n    /* background: #F17153;\n    background: -webkit-linear-gradient(#F17153, #F58D63, #f1ab53);\n    background: -o-linear-gradient(#F17153, #F58D63, #f1ab53);\n    background: -moz-linear-gradient(#F17153, #F58D63, #f1ab53);\n    background: linear-gradient(#F17153, #F58D63, #f1ab53); */\n    background: #101010;\n    /* background: linear-gradient(#6d6b6a, #444241, #0a0a0a); */\n    background: linear-gradient(#0e0e0e, #444342, #6b6666);\n    background: -moz-linear-gradient(#0e0e0e, #444342, #6b6666);\n\n\n    padding: 0px;\n    min-height: 100%;\n}\n.logo {\n    max-height: 130px;\n}\n.logo>img {\n    margin-top: 28px;\n    cursor: pointer;\n    padding: 3px;\n    border: 3px solid #b3b3b3;\n    border-radius: 100%;\n}\n.logo>img:hover{\n    opacity: 0.6;\n}\n.list {\n    color: #fff;\n    list-style: none;\n    padding-left: 0px;\n}\n.list::first-line {\n    color: rgba(255, 255, 255, 0.5);\n}\n.list> li, h5 {\n    padding: 5px 0px 5px 40px;\n}\n.list>li:hover {\n    background-color: rgba(255, 255, 255, 0.2);\n    border-left: 5px solid white;\n    color: rgb(53, 53, 53);\n    \n    /* font-weight: bolder; */\n    padding-left: 35px;\n}\n.main-content{\ntext-align:center;\n}\n.list-a{\n    text-decoration: none;\n    color: #fff;\n}\n.list-a:hover{\n    color: rgb(53, 53, 53);\n    text-decoration: none;\n}"

/***/ }),

/***/ "./src/app/ui/user/desktop/userdesktop.component.html":
/*!************************************************************!*\
  !*** ./src/app/ui/user/desktop/userdesktop.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n        <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-2 col-sm-4 sidebar1\">\n\n                <div class=\"logo\">\n                    <img src=\"{{userData.imgUrl}}\" (click)=\"viewImg(userData.imgUrl)\" class=\"img-responsive center-block  mx-auto d-block\"  alt=\"Logo\">\n                </div>\n                <br>\n                <div class=\"left-navigation\">\n                    <ul class=\"list\">\n                        <h5><strong>{{userData.name}}</strong></h5>\n                        <li><a href=\"#\" class=\"list-a\">Profile<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>  </li>\n                        <li>\n                                <a href=\"#\" class=\"list-a\">Update Profile<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\n                        </li>\n                        <li>\n                                <a href=\"#\" class=\"list-a\">Playlist<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\n                        </li>\n                        <li>\n                                <a href=\"#\" class=\"list-a\">Courses<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\n                        </li>\n                        <li>\n                                <a href=\"#\" class=\"list-a\">Subscription<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\n                        </li>\n                        <li>\n                                <a href=\"#\" class=\"list-a\">Company<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\n                        </li>\n                        <li>\n                                <a href=\"#\" class=\"list-a\">Settings<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\n                        </li>\n                        <li>\n                                <a href=\"#\" class=\"list-a\">Log Out<span style=\"font-size:16px;\" class=\"pull-right hidden-xs showopacity glyphicon glyphicon-user\"></span></a>\n                        </li>\n               \n                    </ul>\n\n                    <br>\n\n                </div>\n            </div>\n         \n            <div class=\"col-md-10 col-sm-8 main-content\">\n                    <div>\n                            <h1>{{userData.id}} </h1> \n                         </div>\n                         <div>\n                             <h2>{{userData.name}}</h2>\n                         </div>\n                         <div>\n                                 <h3>{{userData.email}}</h3>\n                         </div>\n                         <div >\n                             <img src=\"{{userData.imgUrl}}\"  >\n                         </div>\n            \n            </div>\n\n\n            </div>\n            </div>\n\n      "

/***/ }),

/***/ "./src/app/ui/user/desktop/userdesktop.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ui/user/desktop/userdesktop.component.ts ***!
  \**********************************************************/
/*! exports provided: UserDesktopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDesktopComponent", function() { return UserDesktopComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_user_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user/user */ "./src/app/services/user/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDesktopComponent = /** @class */ (function () {
    function UserDesktopComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.userData = new _services_user_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    UserDesktopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log('UserDesktopComponent--');
            console.log(_this.userData);
        });
        // this.userService.getUserData().subscribe(data => {
        var data = this.userService.get();
        this.userData = JSON.parse(data);
        console.log('Recived user data-->', this.userData);
        // })
    };
    UserDesktopComponent.prototype.viewImg = function (userImg) {
        window.open(userImg, "_blank");
    };
    UserDesktopComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-desktop',
            template: __webpack_require__(/*! ./userdesktop.component.html */ "./src/app/ui/user/desktop/userdesktop.component.html"),
            styles: [__webpack_require__(/*! ./userdesktop.component.css */ "./src/app/ui/user/desktop/userdesktop.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserDesktopComponent);
    return UserDesktopComponent;
}());



/***/ }),

/***/ "./src/app/ui/video/video.component.css":
/*!**********************************************!*\
  !*** ./src/app/ui/video/video.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n    text-decoration: none;\n    color:rgb(5, 5, 5);\n    /* font-weight: bold; */\n}\niframe{\n        z-index: 5;\n        box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);\n}\n.design-main{\n\tmargin-left: 40%;\n\twidth: 20%;\n    height: 10px;\n    margin-top: -2.5%;    \n }\n.design-main-inside{\n\twidth:33%; \n\theight:22%; \n\tfloat: left;\n }\n.btn-info-dif {\n    background-color: transparent;\n    border-radius: 0px;\n    border-top-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n    transition: all 0.3s;\n  }\n.btn-info-dif:hover {\n    background-color: #4bbcd7;\n    color: #fff;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    border-top-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n  }\n.btn-info-dif:hover a {\n    text-decoration: none;\n    color: rgb(252, 252, 252);\n  }"

/***/ }),

/***/ "./src/app/ui/video/video.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/video/video.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"embed-responsive embed-responsive-16by9\">\n  <iframe width=\"680\" height=\"450\" [src]=\"videoId | safe\" frameborder=\"0\" allowfullscreen></iframe>\n</div>\n\n<hr>\n<div class=\"design-main\">\n  <div class=\"bg-danger design-main-inside\"></div>\n  <div class=\"bg-warning design-main-inside\"></div>\n  <div class=\"bg-success design-main-inside\"></div>\n</div>\n<br>\n<div class=\"container p-0\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <button class=\"btn btn-info-dif btn-md\">\n\n        <a href=\"{{projectURL}}\" target=\"_blank\"><i class=\"fas fa-angle-left\"></i><i class=\"fas fa-angle-right\"></i>\n          Download Sample Code</a>\n      </button>\n    </div>\n    <div class=\"col\">\n      <quiz></quiz>\n    </div>\n  </div>\n</div>\n<div>\n\n\n</div>\n<div>\n  <online-editor [courseId]=\"courseId\" [sampleCode]=\"sampleCode\"></online-editor>\n</div>"

/***/ }),

/***/ "./src/app/ui/video/video.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ui/video/video.component.ts ***!
  \*********************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoComponent = /** @class */ (function () {
    function VideoComponent(route, router, courseServ) {
        this.route = route;
        this.router = router;
        this.courseServ = courseServ;
        this.topicId = "1";
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.courseId = +params["courseId"];
            var topic = _this.courseServ.getCourseDetails(_this.courseId).topics[0];
            _this.sampleCode = topic.code;
            console.log('VideoComponent->ngOnInit courseId', _this.courseId, ' topic-->', topic);
            _this.projectURL = topic.projectUrl;
            _this.videoId = "https://www.youtube.com/embed/" + topic.videoId;
        });
        this.route.params.subscribe(function (params) {
            var topic = _this.courseServ.getTopicDetails(_this.courseId, params.topicId);
            _this.sampleCode = topic.code;
            console.log('courseId-->', _this.courseId, 'topic id-->', params.topicId, 'topic->', topic);
            _this.projectURL = topic.projectUrl;
            _this.videoId = "https://www.youtube.com/embed/" + topic.videoId;
        });
    };
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tutorial-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/ui/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/ui/video/video.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_course_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])
    ], VideoComponent);
    return VideoComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/hyalamat/pc/pc_dev_workspace/pc-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map