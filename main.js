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

module.exports = "<app-layout>\n</app-layout>\n"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/layout/layout.component */ "./src/app/ui/layout/layout.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/tutorial/tutorial.component */ "./src/app/ui/tutorial/tutorial.component.ts");
/* harmony import */ var _ui_video_video_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/video/video.component */ "./src/app/ui/video/video.component.ts");
/* harmony import */ var _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/editor/editor.component */ "./src/app/ui/editor/editor.component.ts");
/* harmony import */ var _ui_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/quiz/quiz.component */ "./src/app/ui/quiz/quiz.component.ts");
/* harmony import */ var _services_course_course_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var _ui_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/signin/signin.component */ "./src/app/ui/signin/signin.component.ts");
/* harmony import */ var _services_code_executor_code_executor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/code-executor/code-executor.service */ "./src/app/services/code-executor/code-executor.service.ts");
/* harmony import */ var _tutorial_resolve__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tutorial.resolve */ "./src/app/tutorial.resolve.ts");
/* harmony import */ var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/quiz/quiz.service */ "./src/app/services/quiz/quiz.service.ts");
/* harmony import */ var _pipes_safepipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/safepipe */ "./src/app/pipes/safepipe.ts");
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angular-6-social-login-v2 */ "./node_modules/angular-6-social-login-v2/angular-6-social-login-v2.umd.js");
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_21__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var routes = [
    { path: '', redirectTo: '/course/1/topic/1', pathMatch: 'full' },
    { path: 'course/:courseId', component: _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_11__["TutorialComponent"],
        children: [
            { path: '', redirectTo: './topic/1', pathMatch: 'full' },
            {
                path: 'topic/:topicId',
                component: _ui_video_video_component__WEBPACK_IMPORTED_MODULE_12__["VideoComponent"]
            }
        ],
        resolve: { courses: _tutorial_resolve__WEBPACK_IMPORTED_MODULE_18__["TutorialResolve"] }
    }
];
// Configs 
function getAuthServiceConfigs() {
    var config = new angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_21__["AuthServiceConfig"]([
        {
            id: angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_21__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_21__["GoogleLoginProvider"]("26197787311-0pmktkpj9m5bts42j5g9u5f5gem4sfrd.apps.googleusercontent.com")
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
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _ui_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"], _ui_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_11__["TutorialComponent"], _ui_video_video_component__WEBPACK_IMPORTED_MODULE_12__["VideoComponent"], _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_13__["EditorComponent"],
                _pipes_safepipe__WEBPACK_IMPORTED_MODULE_20__["SafePipe"], _ui_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_14__["QuizComponent"], _ui_signin_signin_component__WEBPACK_IMPORTED_MODULE_16__["SigninComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__["AceEditorModule"], angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_21__["SocialLoginModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes), ngx_md__WEBPACK_IMPORTED_MODULE_6__["NgxMdModule"].forRoot()
            ],
            providers: [_tutorial_resolve__WEBPACK_IMPORTED_MODULE_18__["TutorialResolve"], _services_course_course_service__WEBPACK_IMPORTED_MODULE_15__["CourseService"], _services_code_executor_code_executor_service__WEBPACK_IMPORTED_MODULE_17__["CodeExecutorService"], _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_19__["QuizService"], {
                    provide: angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_21__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.8.1/css/all.css\" integrity=\"sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf\" crossorigin=\"anonymous\">\n\n  \n      <div class=\"row header-navbar\">\n        <div class=\"col-md-3\">\n          <h2 class=\"nav-header\">CodeEditor</h2>\n        </div>\n        <div class=\"col-md-4 offset-md-3\" style=\"margin-left: 12%\"> \n          <select class=\"nav-lang-select\" name=\"language\" (change)=\"selectedLanguage($event.target.value)\">\n              <option *ngFor='let language of languageList' value={{language.id}}>{{language.name}}</option>\n          </select>\n        </div>  \n        <div class=\"col-md-2\" style=\"margin-left:10%\">\n          <button class=\"nav-submit\" (click)=\"executeCode(text)\"><i class=\"fas fa-play\"></i> Run</button>\n        </div>\n      </div>\n    \n\n\n  <section class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 onlineEditor-section\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 onlineEditor-panel\">\n      <ace-editor\n       [(text)]=\"text\"\n        #editor style=\"height:250px;\"></ace-editor>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n      <span>Input:</span>\n      <ace-editor\n       [(text)]=\"input\"\n        #editor style=\"height:150px;\"></ace-editor>\n    </div>\n    <div class=\"col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n        <span>Output: </span> \n        <div class=\"result-box\">\n            {{codeResult}}\n        </div>\n      </div>\n  </div>\n</section>\n\n\n"

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

module.exports = "<!-- FOOTER -->\n<nav class=\"bg-dark navbar-dark footer-fixed-custom\">\n    <span class=\"navbar footer-text-custom\">\n      Pioneer Coders 2019 . All Rights Reserved\n    </span>\n  </nav>\n  <!-- FOOTER -->"

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

module.exports = "/* CSS Document */\n.mega-menu{\n\twidth: 500%; \n\toverflow: hidden; \n\tpadding: 10px;\n\tposition: absolute;\n\tmargin-left: -400%;\n}\n.mega-menu a{\n\ttext-decoration: none; \n\tcolor: cadetblue;\n}\n.mega-menu .sub-menu-heading{ \n\tcolor: darkcyan;\n}\n@media(max-width:500px){\n\t.mega-menu{\n\t\twidth: 300px;\n\t}\n}\n.dropdown:hover .mega-menu{\n\tdisplay:  block;\n}\nnav{\n\tz-index: 5;\n\tbox-shadow: 0px 3px 3px 0px rgba(0,0,0,0.5);\n}\n.design-main{\n\tmargin-left: 45%;\n\twidth: 10%;\n\theight: 25px;\n }\n.design-main-inside{\n\twidth:33%; \n\theight:22%; \n\tfloat: left;\n }\n "

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top Banner -->\n<nav class=\"navbar-header navbar-expand-sm bg-dark navbar-dark\">\n    <button\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarText\"\n      aria-controls=\"navbarText\"\n      aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarText\">\n      <ul class=\"navbar-nav \" style=\"margin-left: 10%\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" href=\"#\" style=\"color: white\"\n            ><i class=\"fas fa-mobile-alt\"></i> +91-8123870076</a\n          >\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\" style=\"color: white\"\n            ><i class=\"far fa-envelope\"></i> contactus@pioneercoders.com</a\n          >\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\" style=\"margin-left: -19%\">\n        <li>\n          <a\n            class=\"nav-link\"\n            href=\"#\"\n            style=\"color: white; margin-left: 470px\"\n            ><i class=\"fas fa-map-marker-alt\"></i> BTM layout 1stage, Near\n            Gangothri Circle</a\n          >\n        </li>\n      </ul>\n    </div>\n  </nav>\n<!-- Top Banner -->\n\n<!-- Header -->\n<nav class=\"navbar  navbar-expand-xl  bg-white navbar-fixed-custom  \">\n    <!-- Brand/logo -->\n    <a class=\"navbar-brand\" href=\"#\"> </a>\n    <!-- Links -->\n    <ul class=\"navbar-nav \" style=\"margin-left: 20px \">\n      <li class=\"nav-item\">\n        <img src=\"../../../assets/pc-logo.png\" alt=\"logo\" style=\"width:90px; margin-left: 70%\" />\n      </li>\n      <li class=\"nav-item  \">\n        <a\n          class=\"nav-link\"\n          href=\"#\"\n          style=\"color:#5f5f5f; font: inherit ; margin-top: 8px;margin-left: 30%;\"\n          ><h2 class=\"title\">PioneerCoders</h2></a\n        >\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right nav-move-right\" style=\"margin-left: -12%\">\n      <li class=\"nav-item dropdown\">\n        <a\n        class=\"nav-link dropdown-toggle\" \n        href=\"#\" \n        id=\"navbarDropdown\" \n        role=\"button\" \n        data-toggle=\"dropdown\" \n        aria-haspopup=\"true\" \n        aria-expanded=\"false\"\n        style=\"color:#DC3545\"\n        >Video Tutorial</a>\n        \n        \n        <!--Header -->\n        \n        <!-- Course  Menu -->\n        \n        <!-- MENU DETAILS -->\n        <div class=\"dropdown-menu mega-menu\" aria-labelledby=\"navbarDropdown\">\n          <div class=\"row\">\n            <div class=\"col-md-3\" *ngFor=\"let courseGrop of courseGropList\">\n              <p><strong class=\"sub-menu-heading\">{{courseGrop.key}}</strong></p>\n              <p>\n                <a *ngFor=\"let course of courseGrop.value\" \n                    routerLink=\"/course/{{course.courseId}}/topic/1\">\n                    {{course.name}}<br>\n                  </a>\n                </p>\n            </div>\n          </div> \n        </div>\n      </li>\n      <li>\n        <!-- <app-signin></app-signin> -->\n      </li>\n    </ul>\n  </nav>\n"

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
    function HeaderComponent(courseSer, route) {
        this.courseSer = courseSer;
        this.route = route;
        this.courseList = [];
        this.courseGropList = [];
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
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/ui/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/ui/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/ui/layout/layout.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/layout/layout.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/layout/layout.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/layout/layout.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <!--<div class=\"jumbotron\">\n    <h1>Angular CLI v6 + Bootstrap & FontAwesome</h1>\n    <p>\n      In this tutorial you learn how to use Angular CLI v6 with Bootstrap and FontAwesome!\n    </p>\n  </div>-->\n  \n    <router-outlet></router-outlet>\n  \n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/ui/layout/layout.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/layout/layout.component.ts ***!
  \***********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
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

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/ui/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/ui/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
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

module.exports = ""

/***/ }),

/***/ "./src/app/ui/quiz/quiz.component.html":
/*!*********************************************!*\
  !*** ./src/app/ui/quiz/quiz.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\" style=\"padding:10%\">\n            <!-- Quiz content -->\n            <div>\n                <h4> QUIZ</h4>\n            \n            <div class=\"jumbotron\">\n              <ul>{{question}}</ul>\n                <ul *ngFor=\"let opt of option\">\n                    <div class=\"checkbox\">\n                        <label><input type=\"checkbox\" (click)=\"check($event,opt)\">\n                       {{opt}}\n                        <span class=\"cr\"><i class=\"cr-icon glyphicon glyphicon-ok\"></i></span>\n                        </label>\n                    </div>\n                </ul>\n               <button (click)=\"previous()\"*ngIf=\"i>0\" >previous</button>\n                <button  (click)=\"next()\" *ngIf=\"i<quizlength\">next</button>\n            </div>\n                <button class=\"btn btn-info\" (click)=\"generatemark()\">Submit</button>\n            </div>\n            <!-- Quiz content -->\n    </div>\n  </div>\n</div>\n\n<div class=\"text-right\" style=\"margin-top: -9%\">\n  <button type=\"button\" class=\"btn btn-info btn-rounded mb-4\" data-toggle=\"modal\" data-target=\"#modalLoginForm\" style=\"font-weight: bold; width: 21%\">Quiz</button>\n</div>"

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
        alert("your score is " + JSON.stringify(this.marks));
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

module.exports = "<button (click)=\"socialSignIn('google')\">Sign in with Google</button>"

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
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-6-social-login-v2 */ "./node_modules/angular-6-social-login-v2/angular-6-social-login-v2.umd.js");
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_1__);
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
    function SigninComponent(socialAuthService) {
        this.socialAuthService = socialAuthService;
    }
    SigninComponent.prototype.socialSignIn = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData
            // ...
        });
    };
    SigninComponent.prototype.socialSignOut = function (socialPlatform) {
        var socialPlatformProvider;
        if (socialPlatform == "google") {
            socialPlatformProvider = angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_1__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signOut().then(function (data) {
            console.log('Success fully logged out');
        });
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/ui/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/ui/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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

module.exports = "li.active a{\n    background-color: lightsalmon;\n}\n"

/***/ }),

/***/ "./src/app/ui/tutorial/tutorial.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/tutorial/tutorial.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>{{courseDetails.courseId}} </div>\n<div>{{courseDetails.name}} </div>\n<div>{{courseDetails.description}} </div>\n<div *ngFor=\"let topic of courseDetails.topics\">\n    <div ><a routerLink=\"video/{{topic.videoId}}\">{{topic.name}}</a> </div>\n</div>\n<div>\n        <router-outlet></router-outlet>\n</div>\n-->\n\n<div class=\"container row\">\n    <div class=\"menu\">\n        <ul>\n            <li routerLink=\"topic/{{topic.topicId}}\" *ngFor=\"let topic of courseDetails.topics\" style=\"cursor: pointer;\">\n                {{topic.name}}\n            </li>\n        </ul>\n    </div>\n    <div style=\"position: relative; left:5%;margin-top: 5%\">\n            <router-outlet></router-outlet>\n    </div>\n</div>\n"

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

/***/ "./src/app/ui/video/video.component.css":
/*!**********************************************!*\
  !*** ./src/app/ui/video/video.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n    text-decoration: none;\n    color:white;\n    font-weight: bold;\n}\niframe{\n        z-index: 5;\n        box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);\n}\n.design-main{\n\tmargin-left: 40%;\n\twidth: 20%;\n    height: 10px;\n    margin-top: -2.5%;    \n }\n.design-main-inside{\n\twidth:33%; \n\theight:22%; \n\tfloat: left;\n }"

/***/ }),

/***/ "./src/app/ui/video/video.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/video/video.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<iframe\n            width=\"680\"\n            height=\"450\"\n            [src]=\"videoId | safe\"\n            frameborder=\"0\"\n            allowfullscreen\n          ></iframe>\n          <hr>\n          <div class=\"design-main\">\n              <div class=\"bg-danger design-main-inside\"></div>\n              <div class=\"bg-warning design-main-inside\"></div>\n              <div class=\"bg-success design-main-inside\"></div>\n            </div>\n          <br>\n          <button class=\"btn btn-info\">\n            <a href=\"{{projectURL}}\" target=\"_blank\"><i class=\"fas fa-angle-left\"></i><i class=\"fas fa-angle-right\"></i>  Download Sample Code</a>\n           </button>\n  <div>\n    <br>\n    <quiz></quiz>\n  </div>\n  <div>\n    <online-editor [courseId]=\"courseId\" [sampleCode]=\"sampleCode\"></online-editor>\n  </div>\n   <div>\n    <div NgxMd [path]=\"'https://github.com/CodingKrishna/api/blob/master/README.md'\" (error)=\"errorHandler($event)\" (loaded)=\"loadedHandler($event)\"></div>\n  </div>\n  <!-- <div Markdown>\n    ### your markdown code\n</div>-->\n<!-- <div NgxMd [path]=\"'../../../../README.md'\" (error)=\"errorHandler($event)\" (loaded)=\"loadedHandler($event)\"></div>\n  -->\n"

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