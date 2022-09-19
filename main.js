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
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-ace-editor */ "./node_modules/ng2-ace-editor/index.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var ngx_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-countdown */ "./node_modules/ngx-countdown/fesm5/ngx-countdown.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui/tutorial/tutorial.component */ "./src/app/ui/tutorial/tutorial.component.ts");
/* harmony import */ var _ui_video_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/video/video.component */ "./src/app/ui/video/video.component.ts");
/* harmony import */ var _services_course_course_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var _services_code_executor_code_executor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/code-executor/code-executor.service */ "./src/app/services/code-executor/code-executor.service.ts");
/* harmony import */ var _tutorial_resolve__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tutorial.resolve */ "./src/app/tutorial.resolve.ts");
/* harmony import */ var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/quiz/quiz.service */ "./src/app/services/quiz/quiz.service.ts");
/* harmony import */ var _pipes_safepipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pipes/safepipe */ "./src/app/pipes/safepipe.ts");
/* harmony import */ var _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/apps/apps.service */ "./src/app/services/apps/apps.service.ts");
/* harmony import */ var _services_interview_interview_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/interview/interview.service */ "./src/app/services/interview/interview.service.ts");
/* harmony import */ var _ui_apps_apps_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/apps/apps.component */ "./src/app/ui/apps/apps.component.ts");
/* harmony import */ var _ui_apps_appsdetails_appsdetails_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/apps/appsdetails/appsdetails.component */ "./src/app/ui/apps/appsdetails/appsdetails.component.ts");
/* harmony import */ var _ui_programs_programs_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ui/programs/programs.component */ "./src/app/ui/programs/programs.component.ts");
/* harmony import */ var _ui_programsdetails_programsdetails_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/programsdetails/programsdetails.component */ "./src/app/ui/programsdetails/programsdetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import { MatTabsModule } from '@angular/material/tabs';
// import { MatSliderModule } from '@angular/material/slider';
// import { MatInputModule } from '@angular/material/input';
// import {MatChipsModule} from '@angular/material/chips';
// import {MatIconModule} from '@angular/material/icon';
// import {MatAutocompleteModule } from '@angular/material/autocomplete';

// import {Component} from '@angular/core';





// import { EditorComponent } from './ui/editor/editor.component';
// import { QuizComponent } from './ui/quiz/quiz.component';

// import { SigninComponent } from './ui/signin/signin.component';
// import { UserDesktopComponent } from './ui/user/desktop/userdesktop.component';
// import { SearchResultsComponent } from './ui/searchresults/searchresults.component';








// import {
//   SocialLoginModule,
//   AuthServiceConfig,
//   GoogleLoginProvider
// } from "angular-6-social-login-v2";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { InputsModule } from '@progress/kendo-angular-inputs';
// import { ButtonsModule } from '@progress/kendo-angular-buttons';
// import { DialogsModule } from '@progress/kendo-angular-dialog';
// import { ProfileComponent } from './ui/user/desktop/profile/profile.component';
// import { AddressComponent } from './ui/user/desktop/profile//address/address.component';
// import { SkillesetComponent } from './ui/user/desktop/profile//skilleset/skilleset.component';
// import { WorkExpComponent } from './ui/user/desktop/profile//work-exp/work-exp.component';
// import { EducationComponent } from './ui/user/desktop/profile//education/education.component';
// import { BcInfoComponent } from './ui/user/desktop/profile//bc-info/bc-info.component';
// import { ProjectsComponent } from './ui/user/desktop/profile//projects/projects.component';
// import { SocialInfoComponent } from './ui/user/desktop/profile//social-info/social-info.component';
// import { ViewprofileComponent } from './ui/user/desktop/viewprofile/viewprofile.component';
// import { MytasksComponent } from './ui/user/desktop/mytasks/mytasks.component';
// import { OnlinetestComponent } from './ui/user/desktop/onlinetest/onlinetest.component';
// import { OnlineTestResultsComponent } from './ui/user/desktop/online-test-results/online-test-results.component';
// import { QuizResultsComponent } from './ui/user/desktop/quiz-results/quiz-results.component';
// import { BookedEventsComponent } from './ui/user/desktop/booked-events/booked-events.component';
// import { ReferFriendsComponent } from './ui/user/desktop/refer-friends/refer-friends.component';
// import { SettingsComponent } from './ui/user/desktop/settings/settings.component';
// import { PerchasedcoursesComponent } from './ui/user/desktop/perchasedcourses/perchasedcourses.component';


var routes = [
    { path: '', redirectTo: '/programs/100/topic/1', pathMatch: 'full' },
    {
        path: 'course/:courseId', component: _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_12__["TutorialComponent"],
        children: [
            { path: '', redirectTo: './topic/1', pathMatch: 'full' },
            { path: 'topic/:topicId', component: _ui_video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"] }
        ],
        resolve: { courses: _tutorial_resolve__WEBPACK_IMPORTED_MODULE_16__["TutorialResolve"] }
    },
    // {
    //   path: 'userdesktop', component: UserDesktopComponent,
    //   children: [
    //     { path: '', redirectTo: 'profile', pathMatch: 'full' },
    //     {
    //       path: 'profile', component: ProfileComponent,
    //       children: [
    //         { path: '', redirectTo: 'basicinfo', pathMatch: 'full' },
    //         {
    //           path: 'basicinfo', component: BcInfoComponent },
    //         { path: 'address', component: AddressComponent },
    //         { path: 'education', component: EducationComponent },
    //         { path: 'skillset', component: SkillesetComponent },
    //         {
    //           path: 'workexp', component: WorkExpComponent },
    //         { path: 'projects', component: ProjectsComponent },
    //         { path: 'socialinfo', component: SocialInfoComponent }
    //       ]
    //     },
    //     { path: 'viewprofile', component: ViewprofileComponent },
    //     { path: 'perchasedcourses', component: PerchasedcoursesComponent },
    //     { path: 'mytasks', component: MytasksComponent },
    //     { path: 'onlinetasks', component: OnlinetestComponent },
    //     { path: 'onlineresults', component: OnlineTestResultsComponent },
    //     { path: 'quizresults', component: QuizResultsComponent },
    //     { path: 'bookedevents', component: BookedEventsComponent },
    //     { path: 'referfriends', component: ReferFriendsComponent },
    //     { path: 'settings', component: SettingsComponent }
    //   ]
    // },
    // { path: 'searchresults', component: SearchResultsComponent },
    // { path: 'apps', component: AppsComponent },
    // { path: 'appsdetails/:id', component: AppsDetailsComponent },
    // { path: 'programs', component: ProgramsComponent},
    { path: 'programs', redirectTo: '/programs/100/topic/1', pathMatch: 'full' },
    {
        path: 'programs/:courseId', component: _ui_programs_programs_component__WEBPACK_IMPORTED_MODULE_23__["ProgramsComponent"],
        children: [
            { path: '', redirectTo: './topic/1', pathMatch: 'full' },
            { path: 'topic/:topicId', component: _ui_programsdetails_programsdetails_component__WEBPACK_IMPORTED_MODULE_24__["ProgramsdetailsComponent"] }
        ],
        resolve: { courses: _tutorial_resolve__WEBPACK_IMPORTED_MODULE_16__["TutorialResolve"] }
    },
    { path: '**', redirectTo: '/course/1/topic/1', pathMatch: 'full' }
];
// Configs 
// export function getAuthServiceConfigs() {
//   let config = new AuthServiceConfig(
//     [
//       {
//         id: GoogleLoginProvider.PROVIDER_ID,
//         provider: new GoogleLoginProvider("26197787311-0pmktkpj9m5bts42j5g9u5f5gem4sfrd.apps.googleusercontent.com")
//       }
//     ]
//   );
//   return config;
// }
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _ui_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_12__["TutorialComponent"], _ui_video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"],
                // EditorComponent,
                _pipes_safepipe__WEBPACK_IMPORTED_MODULE_18__["SafePipe"],
                //QuizComponent, SigninComponent, 
                //UserDesktopComponent, 
                //SearchResultsComponent,
                _ui_apps_apps_component__WEBPACK_IMPORTED_MODULE_21__["AppsComponent"], _ui_apps_appsdetails_appsdetails_component__WEBPACK_IMPORTED_MODULE_22__["AppsDetailsComponent"],
                //EducationComponent, ProfileComponent, AddressComponent, SkillesetComponent, WorkExpComponent, BcInfoComponent, ProjectsComponent, SocialInfoComponent, ViewprofileComponent,
                //MytasksComponent, OnlinetestComponent, OnlineTestResultsComponent, BookedEventsComponent, ReferFriendsComponent, SettingsComponent, QuizResultsComponent, PerchasedcoursesComponent, 
                _ui_programs_programs_component__WEBPACK_IMPORTED_MODULE_23__["ProgramsComponent"],
                _ui_programsdetails_programsdetails_component__WEBPACK_IMPORTED_MODULE_24__["ProgramsdetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__["AceEditorModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_7__["CountdownModule"],
                // SocialLoginModule,  MatTabsModule, MatSliderModule, MatInputModule,MatChipsModule,MatIconModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), angular_webstorage_service__WEBPACK_IMPORTED_MODULE_6__["StorageServiceModule"],
                //BrowserAnimationsModule, InputsModule, ButtonsModule, DialogsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                //MatAutocompleteModule,
                ngx_markdown__WEBPACK_IMPORTED_MODULE_8__["MarkdownModule"].forRoot({ loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }),
            ],
            providers: [_tutorial_resolve__WEBPACK_IMPORTED_MODULE_16__["TutorialResolve"], _services_course_course_service__WEBPACK_IMPORTED_MODULE_14__["CourseService"], _services_code_executor_code_executor_service__WEBPACK_IMPORTED_MODULE_15__["CodeExecutorService"], _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_17__["QuizService"], _services_interview_interview_service__WEBPACK_IMPORTED_MODULE_20__["InterviewQuestionsService"], _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_19__["AppsService"],
            ],
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

/***/ "./src/app/services/interview/interview.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/interview/interview.service.ts ***!
  \*********************************************************/
/*! exports provided: InterviewQuestionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewQuestionsService", function() { return InterviewQuestionsService; });
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




var InterviewQuestionsService = /** @class */ (function () {
    function InterviewQuestionsService(http) {
        this.http = http;
    }
    InterviewQuestionsService.prototype.getInterViewQuesionsData = function (courseId) {
        return this.http.get("https://codingkrishna.github.io/api/interview_questions.json").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) {
            console.log(data);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.json().error); }));
    };
    InterviewQuestionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InterviewQuestionsService);
    return InterviewQuestionsService;
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

module.exports = "<div class=\"container mt-5\">\n    <div class=\"row\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"card shadow-sm col-sm\" *ngFor=\"let app of appslist\">\n            <img class=\"img-fluid\" routerLink = \"/appsdetails/{{app.id}}\" src=\"../../../assets/images/apps_images/{{app.imgUrls[0]}}\" alt=\"farm-ease\">\n        </div>\n        <div class=\"col-sm-1\">  </div>\n    </div>\n</div>\n"

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

module.exports = "<div class=\"container mt-5 mb-5\">\n        <div class=\"card shadow-lg mb-5\">\n            <div class=\"row no-gutters\">\n                <div class=\"col-md-7 mt-3 ml-3\">\n                    <div id=\"slides\" class=\"carousel slide\" data-ride=\"carousel\">\n                        <ol class=\"carousel-indicators\">\n                            <li data-target=\"#slides\" data-slide-to=\"0\" class=\"active\"></li>\n                            <li data-target=\"#slides\" data-slide-to=\"1\"></li>\n                            <!-- <li data-target=\"#slides\" data-slide-to=\"2\"></li>\n                            <li data-target=\"#slides\" data-slide-to=\"3\"></li> -->\n                            <!-- <li data-target=\"#slides\" data-slide-to=\"4\"></li>\n                            <li data-target=\"#slides\" data-slide-to=\"5\"></li> -->\n                        </ol>\n                        <div class=\"carousel-inner\">\n                            <div class=\"carousel-item active\">\n                                <img class=\"img-fluid d-block w-100\" src=\"../../../../assets/images/apps_images/{{app.imgUrls[1]}}\"\n                                    alt=\"First slide\">\n                            </div>\n                            <div class=\"carousel-item\">\n                                <img class=\"img-fluid d-block w-100\" src=\"../../../../assets/images/apps_images/{{app.imgUrls[2]}}\"\n                                    alt=\"Second slide\">\n                            </div>\n                        </div>\n                        <a class=\"carousel-control-prev\" href=\"#slides\" role=\"button\" data-slide=\"prev\">\n                            <!-- <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> -->\n                            <span class=\"sr-only\">Previous</span>\n                        </a>\n                        <a class=\"carousel-control-next\" href=\"#slides\" role=\"button\" data-slide=\"next\">\n                            <!-- <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> -->\n                            <span class=\"sr-only\">Next</span>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-md\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title farm\">{{app.name}}</h5>\n                        <p class=\"card-text desc\">{{app.description}}</p>\n                        <div>Wanna be a contributor?</div>\n                        <button>Enroll Now</button>\n                    </div>\n                </div>\n                <div class=\"col-12 mt-3\">\n                    <div class=\"card-footer\">\n                        <h5>Specifications</h5>\n                        <p class=\"card-text\" *ngFor=\"let spec of app.specifications\">{{spec}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n</div>"

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

/***/ "./src/app/ui/footer/footer.component.css":
/*!************************************************!*\
  !*** ./src/app/ui/footer/footer.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-padding {\n  padding-left: 6.6%;\n  padding-right: 6.6%;\n}\nfooter {\n  background-color: #2d3339;\n  line-height: 24px;\n  position: -webkit-sticky;\n  position: sticky;\n  margin-top: auto;\n}\n.footer-bottom {\n  background-color: rgba(0,0,0,0.23);\n  color: #ffffff;\n  /* margin-top: 50px; */\n}\n.footer-bottom .copyright {\n  float: left;\n  line-height: 60px;\n  font-size: 13px;\n}\n.footer-bottom .copyright {\n  float: left;\n  line-height: 60px;\n  font-size: 13px;\n}\nfooter .copyright span:before {\n  content: \" \\00a9 \";\n}\n.footer-nav {\n  float: right;\n}\n.footer-nav ul {\n  margin: 0;\n  font-size: 14px;\n}\n.footer-nav>ul>li {\n  float: left;\n  line-height: 60px;\n}\n.footer-nav ul li {\n  border-bottom: 0;\n  padding: 0;\n}\n.footer-nav ul li:before {\n  display: none;\n}\n.footer-nav a {\n  display: block;\n  color: #ffffff;\n  padding-left: 18px;\n  text-decoration: none;\n}\n.footer-nav>ul>li>a:after {\n  content: \"|\";\n  color: #8f96a2;\n  margin-left: 18px;\n}\nul li:before {\n  content: \"\\f111\";\n  font-family: \"FontAwesome\";\n  font-size: 8px;\n  position: absolute;\n  left: 0px;\n  color: #f27c66;\n  font-weight: 800;\n  line-height: 35px;\n}\n.clear-fix:after {\n  content: '';\n  display: table;\n  clear: both;\n}\nbody {\n  min-height: 100vh;\n  position: relative;\n  margin: 0;\n}  \n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\n\n<footer>\n  <div class=\"footer-bottom row-padding\">\n      <div class=\"clear-fix\">\n          <div class=\"copyright\">Pionner Coders<span></span> 2022 . All Rights Reserved</div>\n          <!-- <nav class=\"footer-nav\">\n              <ul class=\"nav clear-fix\">\n                  <li>\n                      <a href=\"index.html\">Home</a>\n                  </li>\n                  <li>\n                      <a href=\"courses-grid.html\">Courses</a>\n                  </li>\n                  <li>\n                      <a href=\"contact-us.html\">Contact</a>\n                  </li>\n              </ul>\n          </nav> -->\n      </div>\n  </div>\n</footer>\n<!-- FOOTER -->"

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
        console.log('this is footer component');
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

module.exports = ".row-height{\n    height: 2.5rem;\n}\n.bg-color-r{\n    background-color: #f27c66;\n}\n.bg-color-p{\n    background-color: #4bbcd7;\n}\n.bg-color-w{\n    background-color: #f9cb8f;\n}\n.bg-color-s{\n    background-color: #18bb7c;\n}\n.icon-radius{\n    border-radius: 0.5rem;\n}\n.dsp-inline-block{\n    display: inline-block;  \n}\n.font-alinement{\n    font-variant: oldstyle-nums;\n}\n.social-icon-width {\n    min-width: 2.5rem;\n}\nnav a:hover, nav a.active, .mobile_nav .active {\n    color: #f27c66;\n}\n.line-height{\n    line-height: 26px;\n}\n.text-color{\n    color: black;\n}\n.main-page .sticky-wrapper {\n\tposition: absolute;\n\twidth: 100%;\n}\n.sticky-menu.double-menu:not(.second-nav),\n.sticky-menu.alt.mobile {\n\tbackground-color: transparent;\n}\n.sticky-menu {\n\tposition: relative;\n\tz-index: 500;\n\tbackground-color: #ffffff;\n    width: 100%;\n    height: 70px;\n\t-webkit-transition: height 0.3s, -webkit-transform 0.3s;\n\ttransition: height 0.3s, -webkit-transform 0.3s;\n\ttransition: height 0.3s, transform 0.3s;\n\ttransition: height 0.3s, transform 0.3s, -webkit-transform 0.3s;\n\t-ms-transition: height 0.3s, transform 0.3s;\n\t-moz-transition: height 0.3s, transform 0.3s;\n\t-webkit-transition: height 0.3s, transform 0.3s;\n\tposition: relative;\n\tbackground-color: rgb(255, 255, 255);\n}\n.sticky-menu .logo {\n\theight: 60px;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\tmargin-top: 5px;\n    float: left;\n    text-decoration: none;\n\twidth: auto;\n\ttransition: all 0.6s;\n\t-ms-transition: all 0.6s;\n\t-moz-transition: all 0.6s;\n\t-webkit-transition: all 0.6s;\n}\n.sticky-menu .logo img {\n\theight: 100%;\n\twidth: auto;\n\tmargin-right: 5px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.sticky-menu .logo h4 {\n\tline-height: 61px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tfont-family: \"Georgia\";\n\tfont-size: 36px;\n\tclear: none;\n\tcolor: #5f5f5f;\n\tmargin: 0;\n\ttransition: all 0.6s;\n\t-ms-transition: all 0.6s;\n\t-moz-transition: all 0.6s;\n\t-webkit-transition: all 0.6s;\n}\n.sticky-menu.scrolling {\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0;\n\tbackground-color: rgba(255, 255, 255, 0.952941);\n\tbox-shadow:         0px 4px 9px 0px rgba(0, 0, 0, 0.24);\n}\n.sticky-menu-boader{\n    z-index: 10;\n    box-shadow: 0 0 10px 0 gray;\n}\n.sticky-menu.scrolling .logo {\n\theight: 58px;\n\tmargin: 3px 0;\n}\n.sticky-menu.scrolling .logo h4 {\n\tfont-size: 28px;\n    /* line-height: 52px; */\n}\n.main-nav ul {\n\tmargin: 0;\n}\n.main-nav ul li {\n\tborder-bottom: 0;\n\tpadding: 0;\n}\n.main-nav ul li:before {\n\tdisplay: none;\n}\n.main-nav {\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tfloat: right;\n}\n.main-nav>ul>li {\n\tfloat: left;\n\tline-height: 70px;\n\t\n}\nul li:before {\n    content: \"\\f111\";\n    font-family: \"FontAwesome\";\n    font-size: 8px;\n    position: absolute;\n    left: 0px;\n    color: #f27c66;\n    font-weight: 800;\n    line-height: 35px;\n}\n.sticky-menu.double-menu:not(.second-nav) .main-nav:not(.mobile_nav)>ul>li {\n\tcolor: #ffffff;\n}\n.sticky-menu.double-menu:not(.second-nav) .logo h4,\n.sticky-menu.alt.mobile .logo h4{\n\tcolor: #ffffff;\n}\n.sticky-menu.scrolling .main-nav>ul>li {\n\tline-height: 64px;\n}\n.main-nav>ul>li>a {\n\tdisplay: block;\n    padding-left: 20px;\n    text-decoration: none;\n}\n.main-nav>ul>li>a:after {\n\tcontent: \"|\";\n\tpadding-left: 20px;\n\tcolor: #dfdfdf;\n    font-size: 1em;\n}\n.main-nav>ul>li:last-child>a:after {\n    display: none;\n}\n@media screen and (max-width: 479px) {\n\t.sticky-menu .logo h4 {\n\t\tline-height: 45px;\n\t\tfont-size: 22px;\n\t}\n\t.sticky-menu .logo {\n\t\theight: 50px;\n\t}\n\n}\n.main-nav>ul>li>ul {\n\tposition: absolute;\n\tleft: -999999px;\n\topacity: 0;\n\tz-index: 1;\n\tbox-shadow: 0px 4px 10px 0px rgba(0,0,0,0.2);\n}\n/*.sticky-menu .grid-row {\n\tposition: relative;\n\tz-index: 1;\n}*/\n.megamenu {\n\tposition: inherit;\n}\n.main-nav ul ul {\n\tz-index: 1;\n\tborder-top: 2px solid #f27c66;\n\tbackground-color: #ffffff;\n\t-webkit-transition: opacity 0.3s ease 0.3s, -webkit-left 0.6s step-end;\n    -webkit-transition: opacity 0.3s ease 0.3s, left 0.6s step-end;\n    transition: opacity 0.3s ease 0.3s, -webkit-left 0.6s step-end;\n    transition: opacity 0.3s ease 0.3s, -moz-left 0.6s step-end;\n    transition: opacity 0.3s ease 0.3s, -ms-left 0.6s step-end;\n    transition: opacity 0.3s ease 0.3s, left 0.6s step-end;\n    border-bottom-right-radius: 4px;\n    -ms-border-bottom-right-radius: 4px;\n    -moz-border-bottom-right-radius: 4px;\n    -webkit-border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    -ms-border-bottom-left-radius: 4px;\n    -moz-border-bottom-left-radius: 4px;\n    -webkit-border-bottom-left-radius: 4px;\n}\n.main-nav .megamenu ul ul {\n\tbackground: inherit;\n}\n.megamenu>ul ul {\n\tborder: 0;\n}\n.megamenu>ul {\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\tposition: absolute;\n\twidth: 100%;\n\tleft: -999999px;\n\tpadding: 20px 0 20px 0;\n\topacity: 0;\n\tbox-shadow: inset 0px 4px 9px 0px rgba(0,0,0,0.24);\n}\n.megamenu:hover>ul{\n\tleft: 0;\n\topacity: 1;\n}\n.home-hover{\n    left: 625px;    \n}\n.megamenu>ul>li {\n\tdisplay: -webkit-box;\n    display: flex;\n -webkit-box-orient: vertical;\n -webkit-box-direction: normal;\n         flex-direction: column;\n\tfloat: left;\n\twidth: 25%;\n\tborder-right: 1px solid #e6e6e6;\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n}\n.megamenu>ul>li>ul {\n\t-webkit-box-flex: 1;\n    flex: 1 0 auto;\n}\n.megamenu>ul>li img {\n\tmargin: 15px auto 0 auto;\n\twidth: calc(100% - 41.5px);\n}\n.megamenu>ul>li:last-child{\n\tborder: 0;\n}\n.megamenu>ul>li li {\n\tcolor: #5f5f5f;\n\tline-height: 36px;\n}\n.megamenu>ul>li li:last-child{\n\tborder-bottom: 0;\n}\n.megamenu>ul a {\n\tpadding-left: 40px !important;\n    display: block;\n}\n.megamenu>ul a:before{\n\tfont-family: FontAwesome;\n\tcontent: \"\\f111\";\n\tfont-size: 5px;\n\tcolor: #f27c66;\n\tvertical-align: middle;\n    padding-right: 5px;\n}\n.header-megamenu {\n\tfont-size: 15px;\n\tposition: relative;\n\ttext-transform: uppercase;\n\tcolor: #333333;\n\tline-height: 1;\n\tpadding: 0 25px 20px 40px;\n\tfont-weight: 500;\n}\n.main-nav>ul>li ul li:last-child {\n\tborder: 0;\n}\n.main-nav ul li:hover ul {\n\tz-index: 2;\n\t-webkit-transition: opacity 0.3s ease, -webkit-left 0.0s step-start;\n\t-webkit-transition: opacity 0.3s ease, left 0.0s step-start;\n\ttransition: opacity 0.3s ease, -webkit-left 0.0s step-start;\n\ttransition: opacity 0.3s ease, -moz-left 0.0s step-start;\n\ttransition: opacity 0.3s ease, -ms-left 0.0s step-start;\n}\n.main-nav>ul>li:hover>ul{\n\tleft: 0;\n\topacity: 1;\n}\n.main-nav>ul>li>ul a {\n\tdisplay: block;\n\tpadding: 2px 25px;\n    white-space: nowrap;\n    text-decoration: none;\n}\n.main-nav>ul>li>ul a:before{\n\tfont-family: FontAwesome;\n\tcontent: \"\\f111\";\n\tfont-size: 5px;\n\tcolor: #f27c66;\n\tvertical-align: middle;\n    padding-right: 5px;\n}\n.clear-fix:after {\n    content: '';\n    display: table;\n    clear: both;\n}\n.main-nav ul>.header-menu {\n    padding: 0 20px;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n.main-nav ul>.back, .main-nav ul>.header-menu {\n    display: none;\n    background-color: #4bbcd7;\n    color: #ffffff;\n    font-size: 18px;\n    text-transform: uppercase;\n    font-weight: 500;\n    border-top-left-radius: 10px;\n    -ms-border-top-left-radius: 10px;\n    -moz-border-top-left-radius: 10px;\n    -webkit-border-top-left-radius: 10px;\n}\n/* login-page */\n.custom-model .modal-dialog {\n    max-width: 100% !important;\n    margin: 0 !important;\n}\n.background.bg-r {\n    padding: 60px 0 80px 0;\n    position: relative;\n    z-index: 1;\n    background-color: #f27c66;\n}\n.background {\n    background-image: url('parallax_pattern-1.png');\n    background-repeat: repeat;\n\tbackground-color: #f27c66;\n\twidth: 100%;\n}\n.background.bg-r:before {\n    position: absolute;\n    z-index: 1;\n    content: \"\";\n    display: block;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    opacity: 0.2;\n    background-image: url('parallax_pattern-1.png');\n    background-repeat: repeat;\n}\n.background.bg-r:before {\n    position: absolute;\n    z-index: 1;\n    content: \"\";\n    display: block;\n    opacity: 0.2;\n}\n.background.bg-r>* {\n    position: relative;\n    z-index: 2;\n}\n.login-block {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 360px;\n    background: #ffffff;\n    padding: 20px 30px;\n}\n.login-block .logo {\n    display: block;\n    margin: 0 auto 30px auto;\n    text-align: center;\n}\n.login-block .logo img {\n    margin: 0 auto;\n}\n.login-block .logo h2 {\n    display: inline-block;\n    color: #5f5f5f;\n    clear: none;\n}\n.img {\n    width: 78px;\n    margin-left: 5px;\n}\n.login-btn.facebook {\n    border-color: #428bca;\n    background: #428bca;\n    color: #ffffff;\n    text-decoration: none;\n}\n.half-button {\n    width: calc(50% - 8px);\n    min-width: 100px;\n    float: left;\n}\n.login-btn.border-radius {\n    border-top-left-radius: 10px;\n    -ms-border-top-left-radius: 10px;\n    -moz-border-top-left-radius: 10px;\n    -webkit-border-top-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    -ms-border-bottom-right-radius: 10px;\n    -moz-border-bottom-right-radius: 10px;\n    -webkit-border-bottom-right-radius: 10px;\n\n  }\n.login-btn {\n    padding: 10px 20px;\n    min-width: 144px;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    border: 2px solid #f27c66;\n    background-color: #f27c66;\n    text-decoration: none;\n    line-height: 16px;\n    font-size: 15px;\n    font-weight: 500;\n    color: #ffffff;\n    text-align: center;\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n}\n.login-btn.email {\n    border-color: #5bc0de;\n    background: #5bc0de;\n    color: #ffffff;\n    text-decoration: none;\n}\n.half-button + .half-button {\n    margin-left: 10px;\n    clear: right;\n}\n.email {\n    color: inherit;\n}\n.clear-both {\n    display: block;\n    clear: both;\n}\n.login-or {\n    position: relative;\n    font-size: 18px;\n    color: #aaa;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\nhr {\n    border-top: 1px solid #bfbfbf;\n}\nhr {\n    height: 1px;\n    background-color: #f2f2f2;\n}\n.span-or {\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: -2px;\n    margin-left: -25px;\n    background-color: #fff;\n    width: 50px;\n    text-align: center;\n}\n.login-block .form-group {\n    position: relative;\n}\n.login-block .form-group input {\n    line-height: 44px;\n    height: 44px;\n}\ninput[type=\"text\"], input[type=\"password\"] {\n    border: 1px solid #e6e6e6;\n    line-height: 34px;\n    height: 36px;\n    padding: 0 12px;\n    font-size: 14px;\n    color: #595959;\n    width: 100%;\n}\n.login-block .form-group .input-icon {\n    position: absolute;\n    right: 1px;\n    top: 10px;\n    width: 38px;\n    height: 24px;\n    text-align: right;\n    border-left: 1px solid #ececec;\n    color: rgb(65, 60, 60);\n    font-size: 18px;\n    line-height: 24px;\n    text-shadow: none;\n}\n.form-group .input-icon {\n    position: relative;\n}\n.login-block .form-group .input-icon i {\n    color: #b1adad;\n    font-size: 18px;\n    line-height: 24px;\n    width: 38px;\n}\n.form-group .input-icon i {\n    position: absolute;\n    top: 0;\n    left: 0;\n    line-height: 34px;\n    text-align: center;\n    width: 30px;\n}\n.fa {\n    display: inline-block;\n    font-family: FontAwesome;\n    font-style: normal;\n\tfont-weight: normal;\n\tcolor: #FFFFFF;\n\tcursor: pointer;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.login-block .form-group .input-icon {\n    position: absolute;\n    right: 1px;\n    top: 10px;\n    width: 38px;\n    height: 24px;\n    text-align: right;\n    border-left: 1px solid #ececec;\n    color: #ccc;\n    font-size: 18px;\n    line-height: 24px;\n    text-shadow: none;\n}\n.fa-user:before {\n    content: \"\\f007\";\n}\n.login-block .form-group + .form-group {\n    margin-top: 25px;\n}\n.login-block .form-group {\n    position: relative;\n}\n.login-block .small {\n    font-size: 12px;\n    margin-bottom: 20px;\n}\np {\n    line-height: 25px;\n    margin-bottom: 10px;\n}\n.login-block .small a {\n    color: #b0b0b0;\n    text-decoration: none;\n}\na {\n    color: #f27c66;\n    text-decoration: none;\n}\n.login-btn.alt, .login-btn[class*=\"bt-color-\"].alt {\n    background: transparent;\n    color: #595959;\n    text-decoration: none;\n}\n.login-btn.alt:hover {\n    background-color: #f27c66;\n    color: #ffffff !important;\n}\n.login-btn.bt-color-3.plus:hover {\n    background: transparent;\n    color: #595959;\n}\n.login-block .button-fullwidth {\n    width: 100%;\n}\n.login-btn.alt.bt-color-3:hover, .login-btn.bt-color-3 {\n    background-color: #18bb7c;\n    text-decoration: none;\n}\n.login-btn.bt-color-3 {\n    border-color: #18bb7c;  \n}\n.login-block .button-fullwidth + .button-fullwidth {\n    margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top Banner -->\n<div class=\"bg-dark text-white row-height\">\n    <div class=\"row row-padding\">\n        <div class=\"col-sm-6\">\n            <div class=\"float-left row-height m-2 font-alinement\">\n                <i class=\"fa fa-phone bg-color-r p-1 icon-radius dsp-inline-block mr-1\"></i>\n                <span>91-8123870076</span>\n            </div>\n            <div class=\"float-left row-height m-2\">\n                <i class=\"fa fa-envelope bg-color-r p-1 icon-radius mr-1\"></i>\n                <span>contactus@pionnercoders.com</span>\n            </div>\n        </div>\n        <div class=\"col-sm-6 pr-0\">\n            <!-- <div class=\"float-right bg-color-s row-height social-icon-width text-center pt-2\"><i\n                  class=\"fa fa-shopping-cart\"></i></div> -->\n            <!-- <div class=\"float-right row-height social-icon-width text-center\">\n                <app-signin></app-signin>\n            </div> -->\n            <!-- <div class=\"float-right bg-color-p row-height social-icon-width text-center pt-2\"><i\n                    class=\"fa fa-user login-icon\"></i></div> -->\n\n            <!-- <div class=\"float-right bg-color-w row-height social-icon-width text-center pt-2\"><i\n                  class=\"share-icon fa fa-share-alt\"></i></div> -->\n            <!-- <div class=\"float-right bg-color-r row-height social-icon-width text-center pt-2\"><i\n                    class=\"fa fa-search\"></i></div> -->\n        </div>\n    </div>\n</div>\n\n<!-- <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark pt-0 pb-0\" >\n  <div class=\"container\">\n\n    <ul class=\"nav navbar-nav justify-content-start\">\n      <li class=\"nav-item m-1\">\n        <a class=\"nav-link pl-0 text-white\" href=\"#\" >\n          <i class=\"fas fa-mobile-alt\"></i> +91-8123870076</a>\n      </li>\n      <li class=\"nav-item m-1  \">\n        <a class=\"nav-link text-white\" href=\"#\" ><i class=\"far fa-envelope\"></i>\n          contactus@pioneercoders.com</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav justify-content-end\">\n      <li class=\"nav-item m-1 \">\n        <a class=\"nav-link p-0 text-white\" href=\"#\" ><i class=\"fas fa-map-marker-alt\"></i> BTM\n          layout 1stage, Near\n          Gangothri Circle</a>\n      </li>\n    </ul>\n  </div>\n\n</nav> -->\n<!-- Top Banner -->\n\n<!-- 2nd Navbar -->\n<!-- Header -->\n\n<div class=\"sticky-wrapper row-padding sticky-menu-boader\">\n    <div class=\"sticky-menu\">\n        <div class=\"grid-row clear-fix\">\n            <!-- logo -->\n            <a href=\"#\" class=\"logo\">\n                <img src=\"/src/assets/pc-logo.png\" alt=\"\">\n                <h4>Pionner Coders</h4>\n            </a>\n            <!-- / logo -->\n            <nav class=\"main-nav\">\n                <ul class=\"nav clear-fix\">\n                    <li>\n                        <a class=\"active\"  routerLink=\"/programs\">Programs</a>\n                    </li>\n                    <li class=\"megamenu\">\n                        <a  class=\"text-color\" href=\"#\">Video Tutorial</a>\n\n                        <ul class=\"clear-fix\">\n                            <li *ngFor=\"let courseGrop of courseGropList\">\n                                <div class=\"header-megamenu\">{{courseGrop.key}}</div>\n                                <ul class=\"nav flex-column line-height\">\n                                    <li class=\"nav-item\" *ngFor=\"let course of courseGrop.value\">\n                                        <a class=\"text-color\" routerLink=\"/course/{{course.courseId}}/topic/1\">\n                                            {{course.name}}\n                                        </a>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <!-- / sub mega menu -->\n                    </li>\n                    <!-- <li>\n                        <a class=\"text-color\" routerLink=\"/apps\">Live Projects</a>\n                    </li> -->\n                </ul>\n            </nav>\n        </div>\n    </div>\n</div>"

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
        this.show = false;
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
    HeaderComponent.prototype.register = function () {
        this.router.navigate(['userdesktop']);
        this.registerModel.nativeElement.click();
    };
    HeaderComponent.prototype.onClick = function () {
        this.show = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerModel'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HeaderComponent.prototype, "registerModel", void 0);
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

/***/ "./src/app/ui/programs/programs.component.css":
/*!****************************************************!*\
  !*** ./src/app/ui/programs/programs.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.active{\n    background-color: salmon ;\n    color:white;\n}\n.topics > li{\n    outline: none;\n}\n.topics > :first-child{\n    border-top-left-radius: 10px;\n}\n.topics > :last-child{\n    border-bottom-right-radius: 10px;\n}\n.container-mrg{\n    margin-top: 0px;\n}\n.btn-mrg-top{\n    margin-top: 16%;\n    outline: none !important;\n}\n.button {\n    background-color: #004A7F;\n    border-radius: 50%;\n    border: none;\n    color: #FFFFFF;\n    cursor: pointer;\n    display: inline-block;\n    font-family: Roboto;\n    font-size: 20px;\n    padding: 5px 10px;\n    text-align: center;\n    text-decoration: none;\n    -webkit-animation: glowing 1300ms infinite;\n    animation: glowing 1300ms infinite;\n  }\n@-webkit-keyframes glowing {\n    0% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    50% { background-color: #f52803; box-shadow: 0 0 20px #f52803; }\n    100% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    }\n@keyframes glowing {\n    0% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    50% { background-color: #f52803; box-shadow: 0 0 20px #f52803; }\n    100% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    }\n.scroll-top{\n        position: fixed;\n        top: -10px;\n        right: 0.3rem;\n        z-index: 99;\n        /* margin-left: 5px; */\n        padding: 10px;\n        line-height: normal;\n    }"

/***/ }),

/***/ "./src/app/ui/programs/programs.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/programs/programs.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>{{courseDetails.courseId}} </div>\n<div>{{courseDetails.name}} </div>\n<div>{{courseDetails.description}} </div>\n<div *ngFor=\"let topic of courseDetails.topics\">\n    <div ><a routerLink=\"video/{{topic.videoId}}\">{{topic.name}}</a> </div>\n</div>\n<div>\n        <router-outlet></router-outlet>\n</div>\n-->\n\n<!-- online editer button -->\n<!-- <p><button class=\"button float-right btn-mrg-top scroll-top\"  *ngIf=\"!opened\" (click)=\"open(true)\">Online <br>Editer</button></p>\n       <kendo-window [top]=\"126\" [left]=\"390\" [width]=\"840\" title=\"Code Editer\" [(state)]=\"WindowState\" *ngIf=\"opened\" (close)=\"close(false)\">\n        <p style=\"text-align: center;\"><online-editor [courseId]=\"courseId\" [sampleCode]=\"sampleCode\"></online-editor></p>\n      </kendo-window>       -->\n<!-- online editer button -->\n<!-- vedios -->\n<div class=\"row row-padding\">\n    <div class=\"col-3\">\n        <div class=\"menu justify-content-start\">\n            <ul class=\"pl-0 topics\">\n                <li routerLink=\"topic/{{topic.topicId}}\" routerLinkActive=\"active current\"\n                    *ngFor=\"let topic of courseDetails.topics\" style=\"cursor: pointer;\">\n                    {{topic.name}}\n                </li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"col-9 p-0\">\n        <div class=\"col justify-content-start p-0\">\n            <router-outlet></router-outlet>\n        </div>\n    </div>\n</div> "

/***/ }),

/***/ "./src/app/ui/programs/programs.component.ts":
/*!***************************************************!*\
  !*** ./src/app/ui/programs/programs.component.ts ***!
  \***************************************************/
/*! exports provided: ProgramsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsComponent", function() { return ProgramsComponent; });
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



var ProgramsComponent = /** @class */ (function () {
    function ProgramsComponent(route, router, courseSer) {
        this.route = route;
        this.router = router;
        this.courseSer = courseSer;
        this.opened = false;
    }
    ProgramsComponent.prototype.open = function (isOpened) {
        this.opened = true;
    };
    ProgramsComponent.prototype.close = function () {
        this.opened = false;
    };
    ProgramsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var courseId = params.courseId;
            _this.courseDetails = _this.courseSer.getCourseDetails(courseId);
            console.log('TutorialComponent->ngOnInit() courseId->', _this.courseDetails, 'couse detilas->', _this.courseDetails);
        });
    };
    ProgramsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'programs',
            template: __webpack_require__(/*! ./programs.component.html */ "./src/app/ui/programs/programs.component.html"),
            styles: [__webpack_require__(/*! ./programs.component.css */ "./src/app/ui/programs/programs.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_course_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])
    ], ProgramsComponent);
    return ProgramsComponent;
}());



/***/ }),

/***/ "./src/app/ui/programsdetails/programsdetails.component.css":
/*!******************************************************************!*\
  !*** ./src/app/ui/programsdetails/programsdetails.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n    text-decoration: none;\n    color:rgb(5, 5, 5);\n    /* font-weight: bold; */\n}\niframe{\n        z-index: 5;\n        box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);\n}\n.design-main{\n\tmargin-left: 40%;\n\twidth: 20%;\n    height: 10px;\n    margin-top: -2.5%;    \n }\n.design-main-inside{\n\twidth:33%; \n\theight:22%; \n\tfloat: left;\n }\n.mrg-top{\n        margin-top: -25px;\n}\n.btn-info-dif {\n    background-color: transparent;\n    border-radius: 0px;\n    border-top-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n.btn-info-dif:hover {\n    background-color: #4bbcd7;\n    color: #fff;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    border-top-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n  }\n.btn-info-dif:hover a {\n    text-decoration: none;\n    color: rgb(252, 252, 252);\n  }"

/***/ }),

/***/ "./src/app/ui/programsdetails/programsdetails.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/ui/programsdetails/programsdetails.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"embed-responsive embed-responsive-16by9\" *ngIf=\"videoId !== ''\">\n    <iframe width=\"680\" height=\"450\" [src]=\"videoId | safe\" frameborder=\"0\" allowfullscreen></iframe>\n  </div> -->\n  <div class=\"design-main\">\n    <hr>\n    <div class=\"bg-danger design-main-inside\"></div>\n    <div class=\"bg-warning design-main-inside\"></div>\n    <div class=\"bg-success design-main-inside\"></div>\n  </div>\n  <br>\n  <br>\n  <!-- <div *ngIf=\"videoId !== ''\">\n    <div class=\"row mb-5\">\n      <div class=\"col-6\">\n        <button class=\"btn btn-info-dif btn-md\">\n          <a href=\"{{projectURL}}\" target=\"_blank\">\n            Download Sample Code</a>\n        </button>\n      </div>\n      <div class=\"col-6\">\n        <quiz></quiz>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"mrg-top\">\n    <div markdown [src]=\"textTutorialURL\"></div>\n  </div>\n  <!-- <div>\n    <online-editor [courseId]=\"courseId\" [sampleCode]=\"sampleCode\"></online-editor>\n  </div> -->"

/***/ }),

/***/ "./src/app/ui/programsdetails/programsdetails.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/ui/programsdetails/programsdetails.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProgramsdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsdetailsComponent", function() { return ProgramsdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../editor.js */ "./src/editor.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProgramsdetailsComponent = /** @class */ (function () {
    function ProgramsdetailsComponent(route, router, courseServ) {
        this.route = route;
        this.router = router;
        this.courseServ = courseServ;
        this.topicId = "1";
    }
    ProgramsdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.subscribe(function (params) {
            _this.courseId = +params["courseId"];
            var topic = _this.courseServ.getCourseDetails(_this.courseId).topics[0];
            _this.updateTopicDetails(topic);
        });
        this.route.params.subscribe(function (params) {
            var topic = _this.courseServ.getTopicDetails(_this.courseId, params.topicId);
            _this.updateTopicDetails(topic);
            // this.sampleCode = topic.code;
            // console.log('courseId-->', this.courseId, 'topic id-->', params.topicId, 'topic->', topic)
            // this.projectURL = topic.projectUrl;
            // this.videoId = "https://www.youtube.com/embed/"+ topic.videoId;
        });
    };
    ProgramsdetailsComponent.prototype.updateTopicDetails = function (topic) {
        console.log('VideoComponent->updateTopicDetails courseId', this.courseId, ' topic-->', topic);
        if (topic.videoId !== "") {
            this.videoId = "https://www.youtube.com/embed/" + topic.videoId;
        }
        else {
            this.videoId = '';
        }
        this.textTutorialURL = topic.textTutorialURL;
        this.projectURL = topic.projectUrl;
        this.sampleCode = topic.code;
    };
    ProgramsdetailsComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            _editor_js__WEBPACK_IMPORTED_MODULE_3__["reloadEditor"]();
        }, 1000);
    };
    ProgramsdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'programs-details',
            template: __webpack_require__(/*! ./programsdetails.component.html */ "./src/app/ui/programsdetails/programsdetails.component.html"),
            styles: [__webpack_require__(/*! ./programsdetails.component.css */ "./src/app/ui/programsdetails/programsdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_course_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]])
    ], ProgramsdetailsComponent);
    return ProgramsdetailsComponent;
}());



/***/ }),

/***/ "./src/app/ui/tutorial/tutorial.component.css":
/*!****************************************************!*\
  !*** ./src/app/ui/tutorial/tutorial.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li.active{\n    background-color: salmon ;\n    color:white;\n}\n.topics > li{\n    outline: none;\n}\n.topics > :first-child{\n    border-top-left-radius: 10px;\n}\n.topics > :last-child{\n    border-bottom-right-radius: 10px;\n}\n.container-mrg{\n    margin-top: 0px;\n}\n.btn-mrg-top{\n    margin-top: 16%;\n    outline: none !important;\n}\n.button {\n    background-color: #004A7F;\n    border-radius: 50%;\n    border: none;\n    color: #FFFFFF;\n    cursor: pointer;\n    display: inline-block;\n    font-family: Roboto;\n    font-size: 20px;\n    padding: 5px 10px;\n    text-align: center;\n    text-decoration: none;\n    -webkit-animation: glowing 1300ms infinite;\n    animation: glowing 1300ms infinite;\n  }\n@-webkit-keyframes glowing {\n    0% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    50% { background-color: #f52803; box-shadow: 0 0 20px #f52803; }\n    100% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    }\n@keyframes glowing {\n    0% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    50% { background-color: #f52803; box-shadow: 0 0 20px #f52803; }\n    100% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    }\n.scroll-top{\n        position: fixed;\n        top: -10px;\n        right: 0.3rem;\n        z-index: 99;\n        /* margin-left: 5px; */\n        padding: 10px;\n        line-height: normal;\n    }"

/***/ }),

/***/ "./src/app/ui/tutorial/tutorial.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/tutorial/tutorial.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>{{courseDetails.courseId}} </div>\n<div>{{courseDetails.name}} </div>\n<div>{{courseDetails.description}} </div>\n<div *ngFor=\"let topic of courseDetails.topics\">\n    <div ><a routerLink=\"video/{{topic.videoId}}\">{{topic.name}}</a> </div>\n</div>\n<div>\n        <router-outlet></router-outlet>\n</div>\n-->\n\n<!-- online editer button -->\n<!-- <p><button class=\"button float-right btn-mrg-top scroll-top\"  *ngIf=\"!opened\" (click)=\"open(true)\">Online <br>Editer</button></p>\n       <kendo-window [top]=\"126\" [left]=\"390\" [width]=\"840\" title=\"Code Editer\" [(state)]=\"WindowState\" *ngIf=\"opened\" (close)=\"close(false)\">\n        <p style=\"text-align: center;\"><online-editor [courseId]=\"courseId\" [sampleCode]=\"sampleCode\"></online-editor></p>\n      </kendo-window>       -->\n<!-- online editer button -->\n<!-- vedios -->\n    <div class=\"row row-padding\">\n        <div class=\"col-3\">\n            <div class=\"menu justify-content-start\">\n                <ul class=\"pl-0 topics\">\n                    <li routerLink=\"topic/{{topic.topicId}}\" routerLinkActive=\"active current\"\n                        *ngFor=\"let topic of courseDetails.topics\" style=\"cursor: pointer;\">\n                        {{topic.name}}\n                    </li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-9 p-0\">\n            <div class=\"col justify-content-start p-0\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div> "

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
        this.opened = false;
    }
    TutorialComponent.prototype.open = function (isOpened) {
        this.opened = true;
    };
    TutorialComponent.prototype.close = function () {
        this.opened = false;
    };
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

module.exports = "a{\n    text-decoration: none;\n    color:rgb(5, 5, 5);\n    /* font-weight: bold; */\n}\niframe{\n        z-index: 5;\n        box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);\n}\n.design-main{\n\tmargin-left: 40%;\n\twidth: 20%;\n    height: 10px;\n    margin-top: -2.5%;    \n }\n.design-main-inside{\n\twidth:33%; \n\theight:22%; \n\tfloat: left;\n }\n.mrg-top{\n        margin-top: -25px;\n}\n.btn-info-dif {\n    background-color: transparent;\n    border-radius: 0px;\n    border-top-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n.btn-info-dif:hover {\n    background-color: #4bbcd7;\n    color: #fff;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    border-top-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n  }\n.btn-info-dif:hover a {\n    text-decoration: none;\n    color: rgb(252, 252, 252);\n  }"

/***/ }),

/***/ "./src/app/ui/video/video.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/video/video.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"embed-responsive embed-responsive-16by9\" *ngIf=\"videoId !== ''\">\n  <iframe width=\"680\" height=\"450\" [src]=\"videoId | safe\" frameborder=\"0\" allowfullscreen></iframe>\n</div>\n<div class=\"design-main\" *ngIf=\"videoId !== ''\">\n  <hr>\n  <div class=\"bg-danger design-main-inside\"></div>\n  <div class=\"bg-warning design-main-inside\"></div>\n  <div class=\"bg-success design-main-inside\"></div>\n</div>\n<br>\n<!-- <div *ngIf=\"videoId !== ''\">\n  <div class=\"row mb-5\">\n    <div class=\"col-6\">\n      <button class=\"btn btn-info-dif btn-md\">\n        <a href=\"{{projectURL}}\" target=\"_blank\">\n          Download Sample Code</a>\n      </button>\n    </div>\n    <div class=\"col-6\">\n      <quiz></quiz>\n    </div>\n  </div>\n</div> -->\n<!-- <div class=\"mrg-top\">\n  <div markdown [src]=\"textTutorialURL\"></div>\n</div> -->\n<!-- <div>\n  <online-editor [courseId]=\"courseId\" [sampleCode]=\"sampleCode\"></online-editor>\n</div> -->"

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
/* harmony import */ var _editor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../editor.js */ "./src/editor.js");
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
            _this.updateTopicDetails(topic);
        });
        this.route.params.subscribe(function (params) {
            var topic = _this.courseServ.getTopicDetails(_this.courseId, params.topicId);
            _this.updateTopicDetails(topic);
            // this.sampleCode = topic.code;
            // console.log('courseId-->', this.courseId, 'topic id-->', params.topicId, 'topic->', topic)
            // this.projectURL = topic.projectUrl;
            // this.videoId = "https://www.youtube.com/embed/"+ topic.videoId;
        });
    };
    VideoComponent.prototype.updateTopicDetails = function (topic) {
        console.log('VideoComponent->updateTopicDetails courseId', this.courseId, ' topic-->', topic);
        if (topic.videoId !== "") {
            this.videoId = "https://www.youtube.com/embed/" + topic.videoId;
        }
        else {
            this.videoId = '';
        }
        this.textTutorialURL = topic.textTutorialURL;
        this.projectURL = topic.projectUrl;
        this.sampleCode = topic.code;
    };
    VideoComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            _editor_js__WEBPACK_IMPORTED_MODULE_3__["reloadEditor"]();
        }, 1000);
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

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! exports provided: reloadEditor, loadEditor, getAceObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reloadEditor", function() { return reloadEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadEditor", function() { return loadEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAceObject", function() { return getAceObject; });
function reloadEditor() {
    console.log('reloaed the ace ..')
    let editorsEle = document.querySelectorAll("[id*='editor']")
    console.log('editorsEle ==>', editorsEle)
    for (let edEle of editorsEle) {
      let id = edEle.id;
      console.log('edEle==>', id);
      if(id && id.indexOf('css')<= 0){
        loadEditor(id)
      }
    }

  }

  function loadEditor (editorId){
    console.log('editorId----------->', editorId)
    //let editorId = 'editor';

    let ele = document.getElementById(editorId);
    var editor = ace.edit(editorId);
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setOptions({ tabSize: 2, useSoftTabs: true, readOnly: false, showLineNumbers: true,showGutter: true, });
    var code = editor.getValue();
    console.log('Code to execute ==>', code);
    let dv = document.createElement('div');
    dv.innerHTML = `<button onClick="runCode('${editorId}')" style="position: absolute;
    bottom: 0;
    right: 0; ">Run</button>`
    ele.appendChild(dv);
  }
function getAceObject() {
    return ace;
}


/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
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
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment.prod */ "./src/environments/environment.prod.ts");



//import { environment } from './environments/environment';

if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
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

module.exports = __webpack_require__(/*! /Users/hyalamat/pc/pc-ui-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map