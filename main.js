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
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui/header/header.component */ "./src/app/ui/header/header.component.ts");
/* harmony import */ var _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ui/footer/footer.component */ "./src/app/ui/footer/footer.component.ts");
/* harmony import */ var _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ui/tutorial/tutorial.component */ "./src/app/ui/tutorial/tutorial.component.ts");
/* harmony import */ var _ui_video_video_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/video/video.component */ "./src/app/ui/video/video.component.ts");
/* harmony import */ var _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ui/editor/editor.component */ "./src/app/ui/editor/editor.component.ts");
/* harmony import */ var _ui_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/quiz/quiz.component */ "./src/app/ui/quiz/quiz.component.ts");
/* harmony import */ var _services_course_course_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/course/course.service */ "./src/app/services/course/course.service.ts");
/* harmony import */ var _ui_signin_signin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ui/signin/signin.component */ "./src/app/ui/signin/signin.component.ts");
/* harmony import */ var _ui_interview_interview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/interview/interview.component */ "./src/app/ui/interview/interview.component.ts");
/* harmony import */ var _ui_user_desktop_userdesktop_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ui/user/desktop/userdesktop.component */ "./src/app/ui/user/desktop/userdesktop.component.ts");
/* harmony import */ var _ui_searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/searchresults/searchresults.component */ "./src/app/ui/searchresults/searchresults.component.ts");
/* harmony import */ var _services_code_executor_code_executor_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/code-executor/code-executor.service */ "./src/app/services/code-executor/code-executor.service.ts");
/* harmony import */ var _tutorial_resolve__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./tutorial.resolve */ "./src/app/tutorial.resolve.ts");
/* harmony import */ var _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/quiz/quiz.service */ "./src/app/services/quiz/quiz.service.ts");
/* harmony import */ var _pipes_safepipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/safepipe */ "./src/app/pipes/safepipe.ts");
/* harmony import */ var _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/apps/apps.service */ "./src/app/services/apps/apps.service.ts");
/* harmony import */ var _services_interview_interview_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/interview/interview.service */ "./src/app/services/interview/interview.service.ts");
/* harmony import */ var _ui_apps_apps_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ui/apps/apps.component */ "./src/app/ui/apps/apps.component.ts");
/* harmony import */ var _ui_apps_appsdetails_appsdetails_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./ui/apps/appsdetails/appsdetails.component */ "./src/app/ui/apps/appsdetails/appsdetails.component.ts");
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! angular-6-social-login-v2 */ "./node_modules/angular-6-social-login-v2/angular-6-social-login-v2.umd.js");
/* harmony import */ var angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @progress/kendo-angular-buttons */ "./node_modules/@progress/kendo-angular-buttons/dist/fesm5/index.js");
/* harmony import */ var _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @progress/kendo-angular-dialog */ "./node_modules/@progress/kendo-angular-dialog/dist/fesm5/index.js");
/* harmony import */ var _ui_user_desktop_profile_profile_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ui/user/desktop/profile/profile.component */ "./src/app/ui/user/desktop/profile/profile.component.ts");
/* harmony import */ var _ui_user_desktop_profile_address_address_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ui/user/desktop/profile//address/address.component */ "./src/app/ui/user/desktop/profile/address/address.component.ts");
/* harmony import */ var _ui_user_desktop_profile_skilleset_skilleset_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./ui/user/desktop/profile//skilleset/skilleset.component */ "./src/app/ui/user/desktop/profile/skilleset/skilleset.component.ts");
/* harmony import */ var _ui_user_desktop_profile_work_exp_work_exp_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./ui/user/desktop/profile//work-exp/work-exp.component */ "./src/app/ui/user/desktop/profile/work-exp/work-exp.component.ts");
/* harmony import */ var _ui_user_desktop_profile_education_education_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./ui/user/desktop/profile//education/education.component */ "./src/app/ui/user/desktop/profile/education/education.component.ts");
/* harmony import */ var _ui_user_desktop_profile_bc_info_bc_info_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./ui/user/desktop/profile//bc-info/bc-info.component */ "./src/app/ui/user/desktop/profile/bc-info/bc-info.component.ts");
/* harmony import */ var _ui_user_desktop_profile_projects_projects_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./ui/user/desktop/profile//projects/projects.component */ "./src/app/ui/user/desktop/profile/projects/projects.component.ts");
/* harmony import */ var _ui_user_desktop_profile_social_info_social_info_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./ui/user/desktop/profile//social-info/social-info.component */ "./src/app/ui/user/desktop/profile/social-info/social-info.component.ts");
/* harmony import */ var _ui_user_desktop_viewprofile_viewprofile_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./ui/user/desktop/viewprofile/viewprofile.component */ "./src/app/ui/user/desktop/viewprofile/viewprofile.component.ts");
/* harmony import */ var _ui_user_desktop_mytasks_mytasks_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./ui/user/desktop/mytasks/mytasks.component */ "./src/app/ui/user/desktop/mytasks/mytasks.component.ts");
/* harmony import */ var _ui_user_desktop_onlinetest_onlinetest_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./ui/user/desktop/onlinetest/onlinetest.component */ "./src/app/ui/user/desktop/onlinetest/onlinetest.component.ts");
/* harmony import */ var _ui_user_desktop_online_test_results_online_test_results_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./ui/user/desktop/online-test-results/online-test-results.component */ "./src/app/ui/user/desktop/online-test-results/online-test-results.component.ts");
/* harmony import */ var _ui_user_desktop_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./ui/user/desktop/quiz-results/quiz-results.component */ "./src/app/ui/user/desktop/quiz-results/quiz-results.component.ts");
/* harmony import */ var _ui_user_desktop_booked_events_booked_events_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./ui/user/desktop/booked-events/booked-events.component */ "./src/app/ui/user/desktop/booked-events/booked-events.component.ts");
/* harmony import */ var _ui_user_desktop_refer_friends_refer_friends_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./ui/user/desktop/refer-friends/refer-friends.component */ "./src/app/ui/user/desktop/refer-friends/refer-friends.component.ts");
/* harmony import */ var _ui_user_desktop_settings_settings_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./ui/user/desktop/settings/settings.component */ "./src/app/ui/user/desktop/settings/settings.component.ts");
/* harmony import */ var _ui_user_desktop_perchasedcourses_perchasedcourses_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./ui/user/desktop/perchasedcourses/perchasedcourses.component */ "./src/app/ui/user/desktop/perchasedcourses/perchasedcourses.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import {Component} from '@angular/core';










































var routes = [
    { path: '', redirectTo: '/course/1/topic/1', pathMatch: 'full' },
    {
        path: 'course/:courseId', component: _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_18__["TutorialComponent"],
        children: [
            { path: '', redirectTo: './topic/1', pathMatch: 'full' },
            { path: 'topic/:topicId', component: _ui_video_video_component__WEBPACK_IMPORTED_MODULE_19__["VideoComponent"] },
            { path: 'interview/:courseId', component: _ui_interview_interview_component__WEBPACK_IMPORTED_MODULE_24__["InterviewComponent"] }
        ],
        resolve: { courses: _tutorial_resolve__WEBPACK_IMPORTED_MODULE_28__["TutorialResolve"] }
    },
    {
        path: 'userdesktop', component: _ui_user_desktop_userdesktop_component__WEBPACK_IMPORTED_MODULE_25__["UserDesktopComponent"],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            {
                path: 'profile', component: _ui_user_desktop_profile_profile_component__WEBPACK_IMPORTED_MODULE_40__["ProfileComponent"],
                children: [
                    { path: '', redirectTo: 'basicinfo', pathMatch: 'full' },
                    {
                        path: 'basicinfo', component: _ui_user_desktop_profile_bc_info_bc_info_component__WEBPACK_IMPORTED_MODULE_45__["BcInfoComponent"]
                    },
                    { path: 'address', component: _ui_user_desktop_profile_address_address_component__WEBPACK_IMPORTED_MODULE_41__["AddressComponent"] },
                    { path: 'education', component: _ui_user_desktop_profile_education_education_component__WEBPACK_IMPORTED_MODULE_44__["EducationComponent"] },
                    { path: 'skillset', component: _ui_user_desktop_profile_skilleset_skilleset_component__WEBPACK_IMPORTED_MODULE_42__["SkillesetComponent"] },
                    {
                        path: 'workexp', component: _ui_user_desktop_profile_work_exp_work_exp_component__WEBPACK_IMPORTED_MODULE_43__["WorkExpComponent"]
                    },
                    { path: 'projects', component: _ui_user_desktop_profile_projects_projects_component__WEBPACK_IMPORTED_MODULE_46__["ProjectsComponent"] },
                    { path: 'socialinfo', component: _ui_user_desktop_profile_social_info_social_info_component__WEBPACK_IMPORTED_MODULE_47__["SocialInfoComponent"] }
                ]
            },
            { path: 'viewprofile', component: _ui_user_desktop_viewprofile_viewprofile_component__WEBPACK_IMPORTED_MODULE_48__["ViewprofileComponent"] },
            { path: 'perchasedcourses', component: _ui_user_desktop_perchasedcourses_perchasedcourses_component__WEBPACK_IMPORTED_MODULE_56__["PerchasedcoursesComponent"] },
            { path: 'mytasks', component: _ui_user_desktop_mytasks_mytasks_component__WEBPACK_IMPORTED_MODULE_49__["MytasksComponent"] },
            { path: 'onlinetasks', component: _ui_user_desktop_onlinetest_onlinetest_component__WEBPACK_IMPORTED_MODULE_50__["OnlinetestComponent"] },
            { path: 'onlineresults', component: _ui_user_desktop_online_test_results_online_test_results_component__WEBPACK_IMPORTED_MODULE_51__["OnlineTestResultsComponent"] },
            { path: 'quizresults', component: _ui_user_desktop_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_52__["QuizResultsComponent"] },
            { path: 'bookedevents', component: _ui_user_desktop_booked_events_booked_events_component__WEBPACK_IMPORTED_MODULE_53__["BookedEventsComponent"] },
            { path: 'referfriends', component: _ui_user_desktop_refer_friends_refer_friends_component__WEBPACK_IMPORTED_MODULE_54__["ReferFriendsComponent"] },
            { path: 'settings', component: _ui_user_desktop_settings_settings_component__WEBPACK_IMPORTED_MODULE_55__["SettingsComponent"] }
        ]
    },
    { path: 'searchresults', component: _ui_searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_26__["SearchResultsComponent"] },
    { path: 'apps', component: _ui_apps_apps_component__WEBPACK_IMPORTED_MODULE_33__["AppsComponent"] },
    { path: 'appsdetails/:id', component: _ui_apps_appsdetails_appsdetails_component__WEBPACK_IMPORTED_MODULE_34__["AppsDetailsComponent"] },
    { path: '**', redirectTo: '/course/1/topic/1', pathMatch: 'full' }
];
// Configs 
function getAuthServiceConfigs() {
    var config = new angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_35__["AuthServiceConfig"]([
        {
            id: angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_35__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_35__["GoogleLoginProvider"]("26197787311-0pmktkpj9m5bts42j5g9u5f5gem4sfrd.apps.googleusercontent.com")
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
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"], _ui_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _ui_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"], _ui_tutorial_tutorial_component__WEBPACK_IMPORTED_MODULE_18__["TutorialComponent"], _ui_video_video_component__WEBPACK_IMPORTED_MODULE_19__["VideoComponent"], _ui_editor_editor_component__WEBPACK_IMPORTED_MODULE_20__["EditorComponent"],
                _pipes_safepipe__WEBPACK_IMPORTED_MODULE_30__["SafePipe"], _ui_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_21__["QuizComponent"], _ui_signin_signin_component__WEBPACK_IMPORTED_MODULE_23__["SigninComponent"], _ui_interview_interview_component__WEBPACK_IMPORTED_MODULE_24__["InterviewComponent"], _ui_user_desktop_userdesktop_component__WEBPACK_IMPORTED_MODULE_25__["UserDesktopComponent"], _ui_searchresults_searchresults_component__WEBPACK_IMPORTED_MODULE_26__["SearchResultsComponent"],
                _ui_apps_apps_component__WEBPACK_IMPORTED_MODULE_33__["AppsComponent"], _ui_apps_appsdetails_appsdetails_component__WEBPACK_IMPORTED_MODULE_34__["AppsDetailsComponent"], _ui_user_desktop_profile_education_education_component__WEBPACK_IMPORTED_MODULE_44__["EducationComponent"], _ui_user_desktop_profile_profile_component__WEBPACK_IMPORTED_MODULE_40__["ProfileComponent"], _ui_user_desktop_profile_address_address_component__WEBPACK_IMPORTED_MODULE_41__["AddressComponent"], _ui_user_desktop_profile_skilleset_skilleset_component__WEBPACK_IMPORTED_MODULE_42__["SkillesetComponent"], _ui_user_desktop_profile_work_exp_work_exp_component__WEBPACK_IMPORTED_MODULE_43__["WorkExpComponent"], _ui_user_desktop_profile_bc_info_bc_info_component__WEBPACK_IMPORTED_MODULE_45__["BcInfoComponent"], _ui_user_desktop_profile_projects_projects_component__WEBPACK_IMPORTED_MODULE_46__["ProjectsComponent"], _ui_user_desktop_profile_social_info_social_info_component__WEBPACK_IMPORTED_MODULE_47__["SocialInfoComponent"], _ui_user_desktop_viewprofile_viewprofile_component__WEBPACK_IMPORTED_MODULE_48__["ViewprofileComponent"],
                _ui_user_desktop_mytasks_mytasks_component__WEBPACK_IMPORTED_MODULE_49__["MytasksComponent"], _ui_user_desktop_onlinetest_onlinetest_component__WEBPACK_IMPORTED_MODULE_50__["OnlinetestComponent"], _ui_user_desktop_online_test_results_online_test_results_component__WEBPACK_IMPORTED_MODULE_51__["OnlineTestResultsComponent"], _ui_user_desktop_booked_events_booked_events_component__WEBPACK_IMPORTED_MODULE_53__["BookedEventsComponent"], _ui_user_desktop_refer_friends_refer_friends_component__WEBPACK_IMPORTED_MODULE_54__["ReferFriendsComponent"], _ui_user_desktop_settings_settings_component__WEBPACK_IMPORTED_MODULE_55__["SettingsComponent"], _ui_user_desktop_quiz_results_quiz_results_component__WEBPACK_IMPORTED_MODULE_52__["QuizResultsComponent"], _ui_user_desktop_perchasedcourses_perchasedcourses_component__WEBPACK_IMPORTED_MODULE_56__["PerchasedcoursesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ng2_ace_editor__WEBPACK_IMPORTED_MODULE_5__["AceEditorModule"], angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_35__["SocialLoginModule"], ngx_countdown__WEBPACK_IMPORTED_MODULE_8__["CountdownModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_12__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), ngx_md__WEBPACK_IMPORTED_MODULE_6__["NgxMdModule"].forRoot(), angular_webstorage_service__WEBPACK_IMPORTED_MODULE_7__["StorageServiceModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__["BrowserAnimationsModule"], _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_37__["InputsModule"], _progress_kendo_angular_buttons__WEBPACK_IMPORTED_MODULE_38__["ButtonsModule"], _progress_kendo_angular_dialog__WEBPACK_IMPORTED_MODULE_39__["DialogsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__["MatAutocompleteModule"]
            ],
            providers: [_tutorial_resolve__WEBPACK_IMPORTED_MODULE_28__["TutorialResolve"], _services_course_course_service__WEBPACK_IMPORTED_MODULE_22__["CourseService"], _services_code_executor_code_executor_service__WEBPACK_IMPORTED_MODULE_27__["CodeExecutorService"], _services_quiz_quiz_service__WEBPACK_IMPORTED_MODULE_29__["QuizService"], _services_interview_interview_service__WEBPACK_IMPORTED_MODULE_32__["InterviewQuestionsService"], _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_31__["AppsService"], {
                    provide: angular_6_social_login_v2__WEBPACK_IMPORTED_MODULE_35__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
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

/***/ "./src/app/services/APIUrls.ts":
/*!*************************************!*\
  !*** ./src/app/services/APIUrls.ts ***!
  \*************************************/
/*! exports provided: BASE_URL, ADD_USER_URL, GET_USER_DETAILS_BY_EMAILID, GET_TECHNOLOGIES_LIST_URL, GET_LANGUAGES_LIST_URL, GET_CITY_LIST_URL, GET_INSTITUTE_LIST_URL, GET_PROJECT_DOMAIN_LIST_URL, GET_SKILLS_LIST_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_USER_URL", function() { return ADD_USER_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_USER_DETAILS_BY_EMAILID", function() { return GET_USER_DETAILS_BY_EMAILID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TECHNOLOGIES_LIST_URL", function() { return GET_TECHNOLOGIES_LIST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_LANGUAGES_LIST_URL", function() { return GET_LANGUAGES_LIST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CITY_LIST_URL", function() { return GET_CITY_LIST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_INSTITUTE_LIST_URL", function() { return GET_INSTITUTE_LIST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PROJECT_DOMAIN_LIST_URL", function() { return GET_PROJECT_DOMAIN_LIST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SKILLS_LIST_URL", function() { return GET_SKILLS_LIST_URL; });
var BASE_URL = "https://pc-app-test.herokuapp.com";
var ADD_USER_URL = BASE_URL + "/user/add";
var GET_USER_DETAILS_BY_EMAILID = BASE_URL + "/user/getuser?";
var GET_TECHNOLOGIES_LIST_URL = BASE_URL + "/user/technologieslist";
var GET_LANGUAGES_LIST_URL = BASE_URL + "/user/languageslist";
var GET_CITY_LIST_URL = BASE_URL + "/user/getcitylist";
var GET_INSTITUTE_LIST_URL = BASE_URL + "/user/getinstitutelist";
var GET_PROJECT_DOMAIN_LIST_URL = BASE_URL + "/user/getprojectdomainlist";
var GET_SKILLS_LIST_URL = BASE_URL + "/user/addskills";


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
/* harmony import */ var _APIUrls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../APIUrls */ "./src/app/services/APIUrls.ts");
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
    UserService.prototype.storeUserData = function (userData) {
        console.log("in session set=-----------......>>>>>", userData);
        this.storage.set(STORAGE_KEY, userData);
    };
    UserService.prototype.getUserData = function () {
        return this.storage.get(STORAGE_KEY);
    };
    UserService.prototype.getUserDataFromGmail = function () {
        return this.userDataSubject.asObservable();
    };
    UserService.prototype.addUser = function (user) {
        var addUserPayload = {
            "userName": user.name,
            "emailId": user.email,
            "role": {
                "id": 1
            }
        };
        return this.http.post(_APIUrls__WEBPACK_IMPORTED_MODULE_4__["ADD_USER_URL"], addUserPayload);
    };
    UserService.prototype.getUserByEmail = function (email) {
        var url = _APIUrls__WEBPACK_IMPORTED_MODULE_4__["GET_USER_DETAILS_BY_EMAILID"] + ("emailId=" + email + "&mobileNo=\"\"");
        return this.http.get(url);
    };
    UserService.prototype.getTechnologiesList = function () {
        return this.http.get(_APIUrls__WEBPACK_IMPORTED_MODULE_4__["GET_TECHNOLOGIES_LIST_URL"]);
    };
    UserService.prototype.getLanguagesList = function () {
        return this.http.get(_APIUrls__WEBPACK_IMPORTED_MODULE_4__["GET_LANGUAGES_LIST_URL"]);
    };
    UserService.prototype.getCitiesList = function () {
        return this.http.get(_APIUrls__WEBPACK_IMPORTED_MODULE_4__["GET_CITY_LIST_URL"]);
    };
    UserService.prototype.getProjectDomainList = function () {
        return this.http.get(_APIUrls__WEBPACK_IMPORTED_MODULE_4__["GET_PROJECT_DOMAIN_LIST_URL"]);
    };
    UserService.prototype.getInstituteList = function () {
        return this.http.get(_APIUrls__WEBPACK_IMPORTED_MODULE_4__["GET_INSTITUTE_LIST_URL"]);
    };
    UserService.prototype.getSkillsList = function () {
        return this.http.get(_APIUrls__WEBPACK_IMPORTED_MODULE_4__["GET_SKILLS_LIST_URL"]);
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

module.exports = ".row-padding {\n  padding-left: 6.6%;\n  padding-right: 6.6%;\n}\nfooter {\n  background-color: #2d3339;\n  line-height: 24px;\n  position: -webkit-sticky;\n  position: sticky;\n  margin-top: auto;\n}\n.footer-bottom {\n  background-color: rgba(0,0,0,0.23);\n  color: #ffffff;\n  /* margin-top: 50px; */\n}\n.footer-bottom .copyright {\n  float: left;\n  line-height: 60px;\n  font-size: 13px;\n}\n.footer-bottom .copyright {\n  float: left;\n  line-height: 60px;\n  font-size: 13px;\n}\nfooter .copyright span:before {\n  content: \" \\00a9 \";\n}\n.footer-nav {\n  float: right;\n}\n.footer-nav ul {\n  margin: 0;\n  font-size: 14px;\n}\n.footer-nav>ul>li {\n  float: left;\n  line-height: 60px;\n}\n.footer-nav ul li {\n  border-bottom: 0;\n  padding: 0;\n}\n.footer-nav ul li:before {\n  display: none;\n}\n.footer-nav a {\n  display: block;\n  color: #ffffff;\n  padding-left: 18px;\n  text-decoration: none;\n}\n.footer-nav>ul>li>a:after {\n  content: \"|\";\n  color: #8f96a2;\n  margin-left: 18px;\n}\nul li:before {\n  content: \"\\f111\";\n  font-family: \"FontAwesome\";\n  font-size: 8px;\n  position: absolute;\n  left: 0px;\n  color: #f27c66;\n  font-weight: 800;\n  line-height: 35px;\n}\n.clear-fix:after {\n  content: '';\n  display: table;\n  clear: both;\n}\nbody {\n  min-height: 100vh;\n  position: relative;\n  margin: 0;\n}  \n"

/***/ }),

/***/ "./src/app/ui/footer/footer.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/footer/footer.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FOOTER -->\n\n<footer>\n  <div class=\"footer-bottom row-padding\">\n      <div class=\"clear-fix\">\n          <div class=\"copyright\">Pionner Coders<span></span> 2020 . All Rights Reserved</div>\n          <nav class=\"footer-nav\">\n              <ul class=\"nav clear-fix\">\n                  <li>\n                      <a href=\"index.html\">Home</a>\n                  </li>\n                  <li>\n                      <a href=\"courses-grid.html\">Courses</a>\n                  </li>\n                  <li>\n                      <a href=\"contact-us.html\">Contact</a>\n                  </li>\n              </ul>\n          </nav>\n      </div>\n  </div>\n</footer>\n<!-- FOOTER -->"

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

module.exports = "\n.row-height{\n    height: 2.5rem;\n}\n.bg-color-r{\n    background-color: #f27c66;\n}\n.bg-color-p{\n    background-color: #4bbcd7;\n}\n.bg-color-w{\n    background-color: #f9cb8f;\n}\n.bg-color-s{\n    background-color: #18bb7c;\n}\n.icon-radius{\n    border-radius: 0.5rem;\n}\n.dsp-inline-block{\n    display: inline-block;  \n}\n.font-alinement{\n    font-variant: oldstyle-nums;\n}\n.social-icon-width {\n    min-width: 2.5rem;\n}\nnav a:hover, nav a.active, .mobile_nav .active {\n    color: #f27c66;\n}\n.line-height{\n    line-height: 26px;\n}\n.text-color{\n    color: black;\n}\n.main-page .sticky-wrapper {\n\tposition: absolute;\n\twidth: 100%;\n}\n.sticky-menu.double-menu:not(.second-nav),\n.sticky-menu.alt.mobile {\n\tbackground-color: transparent;\n}\n.sticky-menu {\n\tposition: relative;\n\tz-index: 500;\n\tbackground-color: #ffffff;\n    width: 100%;\n    height: 70px;\n\t-webkit-transition: height 0.3s, -webkit-transform 0.3s;\n\ttransition: height 0.3s, -webkit-transform 0.3s;\n\ttransition: height 0.3s, transform 0.3s;\n\ttransition: height 0.3s, transform 0.3s, -webkit-transform 0.3s;\n\t-ms-transition: height 0.3s, transform 0.3s;\n\t-moz-transition: height 0.3s, transform 0.3s;\n\t-webkit-transition: height 0.3s, transform 0.3s;\n\tposition: relative;\n\tbackground-color: rgb(255, 255, 255);\n}\n.sticky-menu .logo {\n\theight: 60px;\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\tmargin-top: 5px;\n    float: left;\n    text-decoration: none;\n\twidth: auto;\n\ttransition: all 0.6s;\n\t-ms-transition: all 0.6s;\n\t-moz-transition: all 0.6s;\n\t-webkit-transition: all 0.6s;\n}\n.sticky-menu .logo img {\n\theight: 100%;\n\twidth: auto;\n\tmargin-right: 5px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n}\n.sticky-menu .logo h4 {\n\tline-height: 61px;\n\tdisplay: inline-block;\n\tvertical-align: middle;\n\tfont-family: \"Georgia\";\n\tfont-size: 36px;\n\tclear: none;\n\tcolor: #5f5f5f;\n\tmargin: 0;\n\ttransition: all 0.6s;\n\t-ms-transition: all 0.6s;\n\t-moz-transition: all 0.6s;\n\t-webkit-transition: all 0.6s;\n}\n.sticky-menu.scrolling {\n\tposition: fixed;\n\ttop: 0px;\n\tleft: 0;\n\tbackground-color: rgba(255, 255, 255, 0.952941);\n\tbox-shadow:         0px 4px 9px 0px rgba(0, 0, 0, 0.24);\n}\n.sticky-menu-boader{\n    z-index: 10;\n    box-shadow: 0 0 10px 0 gray;\n}\n.sticky-menu.scrolling .logo {\n\theight: 58px;\n\tmargin: 3px 0;\n}\n.sticky-menu.scrolling .logo h4 {\n\tfont-size: 28px;\n    /* line-height: 52px; */\n}\n.main-nav ul {\n\tmargin: 0;\n}\n.main-nav ul li {\n\tborder-bottom: 0;\n\tpadding: 0;\n}\n.main-nav ul li:before {\n\tdisplay: none;\n}\n.main-nav {\n\tfont-size: 14px;\n\tfont-weight: 500;\n\tfloat: right;\n}\n.main-nav>ul>li {\n\tfloat: left;\n\tline-height: 70px;\n\t\n}\nul li:before {\n    content: \"\\f111\";\n    font-family: \"FontAwesome\";\n    font-size: 8px;\n    position: absolute;\n    left: 0px;\n    color: #f27c66;\n    font-weight: 800;\n    line-height: 35px;\n}\n.sticky-menu.double-menu:not(.second-nav) .main-nav:not(.mobile_nav)>ul>li {\n\tcolor: #ffffff;\n}\n.sticky-menu.double-menu:not(.second-nav) .logo h4,\n.sticky-menu.alt.mobile .logo h4{\n\tcolor: #ffffff;\n}\n.sticky-menu.scrolling .main-nav>ul>li {\n\tline-height: 64px;\n}\n.main-nav>ul>li>a {\n\tdisplay: block;\n    padding-left: 20px;\n    text-decoration: none;\n}\n.main-nav>ul>li>a:after {\n\tcontent: \"|\";\n\tpadding-left: 20px;\n\tcolor: #dfdfdf;\n    font-size: 1em;\n}\n.main-nav>ul>li:last-child>a:after {\n    display: none;\n}\n@media screen and (max-width: 479px) {\n\t.sticky-menu .logo h4 {\n\t\tline-height: 45px;\n\t\tfont-size: 22px;\n\t}\n\t.sticky-menu .logo {\n\t\theight: 50px;\n\t}\n\n}\n.main-nav>ul>li>ul {\n\tposition: absolute;\n\tleft: -999999px;\n\topacity: 0;\n\tz-index: 1;\n\tbox-shadow: 0px 4px 10px 0px rgba(0,0,0,0.2);\n}\n/*.sticky-menu .grid-row {\n\tposition: relative;\n\tz-index: 1;\n}*/\n.megamenu {\n\tposition: inherit;\n}\n.main-nav ul ul {\n\tz-index: 1;\n\tborder-top: 2px solid #f27c66;\n\tbackground-color: #ffffff;\n\t-webkit-transition: opacity 0.3s ease 0.3s, -webkit-left 0.6s step-end;\n    -webkit-transition: opacity 0.3s ease 0.3s, left 0.6s step-end;\n    transition: opacity 0.3s ease 0.3s, -webkit-left 0.6s step-end;\n    transition: opacity 0.3s ease 0.3s, -moz-left 0.6s step-end;\n    transition: opacity 0.3s ease 0.3s, -ms-left 0.6s step-end;\n    transition: opacity 0.3s ease 0.3s, left 0.6s step-end;\n    border-bottom-right-radius: 4px;\n    -ms-border-bottom-right-radius: 4px;\n    -moz-border-bottom-right-radius: 4px;\n    -webkit-border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px;\n    -ms-border-bottom-left-radius: 4px;\n    -moz-border-bottom-left-radius: 4px;\n    -webkit-border-bottom-left-radius: 4px;\n}\n.main-nav .megamenu ul ul {\n\tbackground: inherit;\n}\n.megamenu>ul ul {\n\tborder: 0;\n}\n.megamenu>ul {\n\tdisplay: -webkit-box;\n\tdisplay: flex;\n\tposition: absolute;\n\twidth: 100%;\n\tleft: -999999px;\n\tpadding: 20px 0 20px 0;\n\topacity: 0;\n\tbox-shadow: inset 0px 4px 9px 0px rgba(0,0,0,0.24);\n}\n.megamenu:hover>ul{\n\tleft: 0;\n\topacity: 1;\n}\n.home-hover{\n    left: 625px;    \n}\n.megamenu>ul>li {\n\tdisplay: -webkit-box;\n    display: flex;\n -webkit-box-orient: vertical;\n -webkit-box-direction: normal;\n         flex-direction: column;\n\tfloat: left;\n\twidth: 25%;\n\tborder-right: 1px solid #e6e6e6;\n\tbox-sizing: border-box;\n\t-moz-box-sizing: border-box;\n\t-webkit-box-sizing: border-box;\n}\n.megamenu>ul>li>ul {\n\t-webkit-box-flex: 1;\n    flex: 1 0 auto;\n}\n.megamenu>ul>li img {\n\tmargin: 15px auto 0 auto;\n\twidth: calc(100% - 41.5px);\n}\n.megamenu>ul>li:last-child{\n\tborder: 0;\n}\n.megamenu>ul>li li {\n\tcolor: #5f5f5f;\n\tline-height: 36px;\n}\n.megamenu>ul>li li:last-child{\n\tborder-bottom: 0;\n}\n.megamenu>ul a {\n\tpadding-left: 40px !important;\n    display: block;\n}\n.megamenu>ul a:before{\n\tfont-family: FontAwesome;\n\tcontent: \"\\f111\";\n\tfont-size: 5px;\n\tcolor: #f27c66;\n\tvertical-align: middle;\n    padding-right: 5px;\n}\n.header-megamenu {\n\tfont-size: 15px;\n\tposition: relative;\n\ttext-transform: uppercase;\n\tcolor: #333333;\n\tline-height: 1;\n\tpadding: 0 25px 20px 40px;\n\tfont-weight: 500;\n}\n.main-nav>ul>li ul li:last-child {\n\tborder: 0;\n}\n.main-nav ul li:hover ul {\n\tz-index: 2;\n\t-webkit-transition: opacity 0.3s ease, -webkit-left 0.0s step-start;\n\t-webkit-transition: opacity 0.3s ease, left 0.0s step-start;\n\ttransition: opacity 0.3s ease, -webkit-left 0.0s step-start;\n\ttransition: opacity 0.3s ease, -moz-left 0.0s step-start;\n\ttransition: opacity 0.3s ease, -ms-left 0.0s step-start;\n}\n.main-nav>ul>li:hover>ul{\n\tleft: 0;\n\topacity: 1;\n}\n.main-nav>ul>li>ul a {\n\tdisplay: block;\n\tpadding: 2px 25px;\n    white-space: nowrap;\n    text-decoration: none;\n}\n.main-nav>ul>li>ul a:before{\n\tfont-family: FontAwesome;\n\tcontent: \"\\f111\";\n\tfont-size: 5px;\n\tcolor: #f27c66;\n\tvertical-align: middle;\n    padding-right: 5px;\n}\n.clear-fix:after {\n    content: '';\n    display: table;\n    clear: both;\n}\n.main-nav ul>.header-menu {\n    padding: 0 20px;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n}\n.main-nav ul>.back, .main-nav ul>.header-menu {\n    display: none;\n    background-color: #4bbcd7;\n    color: #ffffff;\n    font-size: 18px;\n    text-transform: uppercase;\n    font-weight: 500;\n    border-top-left-radius: 10px;\n    -ms-border-top-left-radius: 10px;\n    -moz-border-top-left-radius: 10px;\n    -webkit-border-top-left-radius: 10px;\n}\n/* login-page */\n.custom-model .modal-dialog {\n    max-width: 100% !important;\n    margin: 0 !important;\n}\n.background.bg-r {\n    padding: 60px 0 80px 0;\n    position: relative;\n    z-index: 1;\n    background-color: #f27c66;\n}\n.background {\n    background-image: url('parallax_pattern-1.png');\n    background-repeat: repeat;\n\tbackground-color: #f27c66;\n\twidth: 100%;\n}\n.background.bg-r:before {\n    position: absolute;\n    z-index: 1;\n    content: \"\";\n    display: block;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    opacity: 0.2;\n    background-image: url('parallax_pattern-1.png');\n    background-repeat: repeat;\n}\n.background.bg-r:before {\n    position: absolute;\n    z-index: 1;\n    content: \"\";\n    display: block;\n    opacity: 0.2;\n}\n.background.bg-r>* {\n    position: relative;\n    z-index: 2;\n}\n.login-block {\n    margin: 0 auto;\n    width: 100%;\n    max-width: 360px;\n    background: #ffffff;\n    padding: 20px 30px;\n}\n.login-block .logo {\n    display: block;\n    margin: 0 auto 30px auto;\n    text-align: center;\n}\n.login-block .logo img {\n    margin: 0 auto;\n}\n.login-block .logo h2 {\n    display: inline-block;\n    color: #5f5f5f;\n    clear: none;\n}\n.img {\n    width: 78px;\n    margin-left: 5px;\n}\n.login-btn.facebook {\n    border-color: #428bca;\n    background: #428bca;\n    color: #ffffff;\n    text-decoration: none;\n}\n.half-button {\n    width: calc(50% - 8px);\n    min-width: 100px;\n    float: left;\n}\n.login-btn.border-radius {\n    border-top-left-radius: 10px;\n    -ms-border-top-left-radius: 10px;\n    -moz-border-top-left-radius: 10px;\n    -webkit-border-top-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    -ms-border-bottom-right-radius: 10px;\n    -moz-border-bottom-right-radius: 10px;\n    -webkit-border-bottom-right-radius: 10px;\n\n  }\n.login-btn {\n    padding: 10px 20px;\n    min-width: 144px;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    -webkit-box-sizing: border-box;\n    border: 2px solid #f27c66;\n    background-color: #f27c66;\n    text-decoration: none;\n    line-height: 16px;\n    font-size: 15px;\n    font-weight: 500;\n    color: #ffffff;\n    text-align: center;\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n}\n.login-btn.email {\n    border-color: #5bc0de;\n    background: #5bc0de;\n    color: #ffffff;\n    text-decoration: none;\n}\n.half-button + .half-button {\n    margin-left: 10px;\n    clear: right;\n}\n.email {\n    color: inherit;\n}\n.clear-both {\n    display: block;\n    clear: both;\n}\n.login-or {\n    position: relative;\n    font-size: 18px;\n    color: #aaa;\n    margin-top: 10px;\n    margin-bottom: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\nhr {\n    border-top: 1px solid #bfbfbf;\n}\nhr {\n    height: 1px;\n    background-color: #f2f2f2;\n}\n.span-or {\n    display: block;\n    position: absolute;\n    left: 50%;\n    top: -2px;\n    margin-left: -25px;\n    background-color: #fff;\n    width: 50px;\n    text-align: center;\n}\n.login-block .form-group {\n    position: relative;\n}\n.login-block .form-group input {\n    line-height: 44px;\n    height: 44px;\n}\ninput[type=\"text\"], input[type=\"password\"] {\n    border: 1px solid #e6e6e6;\n    line-height: 34px;\n    height: 36px;\n    padding: 0 12px;\n    font-size: 14px;\n    color: #595959;\n    width: 100%;\n}\n.login-block .form-group .input-icon {\n    position: absolute;\n    right: 1px;\n    top: 10px;\n    width: 38px;\n    height: 24px;\n    text-align: right;\n    border-left: 1px solid #ececec;\n    color: rgb(65, 60, 60);\n    font-size: 18px;\n    line-height: 24px;\n    text-shadow: none;\n}\n.form-group .input-icon {\n    position: relative;\n}\n.login-block .form-group .input-icon i {\n    color: #b1adad;\n    font-size: 18px;\n    line-height: 24px;\n    width: 38px;\n}\n.form-group .input-icon i {\n    position: absolute;\n    top: 0;\n    left: 0;\n    line-height: 34px;\n    text-align: center;\n    width: 30px;\n}\n.fa {\n    display: inline-block;\n    font-family: FontAwesome;\n    font-style: normal;\n\tfont-weight: normal;\n\tcolor: #FFFFFF;\n\tcursor: pointer;\n    line-height: 1;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n.login-block .form-group .input-icon {\n    position: absolute;\n    right: 1px;\n    top: 10px;\n    width: 38px;\n    height: 24px;\n    text-align: right;\n    border-left: 1px solid #ececec;\n    color: #ccc;\n    font-size: 18px;\n    line-height: 24px;\n    text-shadow: none;\n}\n.fa-user:before {\n    content: \"\\f007\";\n}\n.login-block .form-group + .form-group {\n    margin-top: 25px;\n}\n.login-block .form-group {\n    position: relative;\n}\n.login-block .small {\n    font-size: 12px;\n    margin-bottom: 20px;\n}\np {\n    line-height: 25px;\n    margin-bottom: 10px;\n}\n.login-block .small a {\n    color: #b0b0b0;\n    text-decoration: none;\n}\na {\n    color: #f27c66;\n    text-decoration: none;\n}\n.login-btn.alt, .login-btn[class*=\"bt-color-\"].alt {\n    background: transparent;\n    color: #595959;\n    text-decoration: none;\n}\n.login-btn.alt:hover {\n    background-color: #f27c66;\n    color: #ffffff !important;\n}\n.login-btn.bt-color-3.plus:hover {\n    background: transparent;\n    color: #595959;\n}\n.login-block .button-fullwidth {\n    width: 100%;\n}\n.login-btn.alt.bt-color-3:hover, .login-btn.bt-color-3 {\n    background-color: #18bb7c;\n    text-decoration: none;\n}\n.login-btn.bt-color-3 {\n    border-color: #18bb7c;  \n}\n.login-block .button-fullwidth + .button-fullwidth {\n    margin-top: 10px;\n}"

/***/ }),

/***/ "./src/app/ui/header/header.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/header/header.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Top Banner -->\n<div class=\"bg-dark text-white row-height\">\n    <div class=\"row row-padding\">\n        <div class=\"col-sm-6\">\n            <div class=\"float-left row-height m-2 font-alinement\">\n                <i class=\"fa fa-phone bg-color-r p-1 icon-radius dsp-inline-block mr-1\"></i>\n                <span>91-8123870076</span>\n            </div>\n            <div class=\"float-left row-height m-2\">\n                <i class=\"fa fa-envelope bg-color-r p-1 icon-radius mr-1\"></i>\n                <span>contactus@pionnercoders.com</span>\n            </div>\n        </div>\n        <div class=\"col-sm-6 pr-0\">\n            <!-- <div class=\"float-right bg-color-s row-height social-icon-width text-center pt-2\"><i\n                  class=\"fa fa-shopping-cart\"></i></div> -->\n            <div class=\"float-right row-height social-icon-width text-center\">\n                <app-signin></app-signin>\n            </div>\n            <!-- <div class=\"float-right bg-color-p row-height social-icon-width text-center pt-2\"><i\n                    class=\"fa fa-user login-icon\"></i></div> -->\n\n            <!-- <div class=\"float-right bg-color-w row-height social-icon-width text-center pt-2\"><i\n                  class=\"share-icon fa fa-share-alt\"></i></div> -->\n            <!-- <div class=\"float-right bg-color-r row-height social-icon-width text-center pt-2\"><i\n                    class=\"fa fa-search\"></i></div> -->\n        </div>\n    </div>\n</div>\n\n<!-- <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark pt-0 pb-0\" >\n  <div class=\"container\">\n\n    <ul class=\"nav navbar-nav justify-content-start\">\n      <li class=\"nav-item m-1\">\n        <a class=\"nav-link pl-0 text-white\" href=\"#\" >\n          <i class=\"fas fa-mobile-alt\"></i> +91-8123870076</a>\n      </li>\n      <li class=\"nav-item m-1  \">\n        <a class=\"nav-link text-white\" href=\"#\" ><i class=\"far fa-envelope\"></i>\n          contactus@pioneercoders.com</a>\n      </li>\n    </ul>\n    <ul class=\"nav navbar-nav justify-content-end\">\n      <li class=\"nav-item m-1 \">\n        <a class=\"nav-link p-0 text-white\" href=\"#\" ><i class=\"fas fa-map-marker-alt\"></i> BTM\n          layout 1stage, Near\n          Gangothri Circle</a>\n      </li>\n    </ul>\n  </div>\n\n</nav> -->\n<!-- Top Banner -->\n\n<!-- 2nd Navbar -->\n<!-- Header -->\n\n<div class=\"sticky-wrapper row-padding sticky-menu-boader\">\n    <div class=\"sticky-menu\">\n        <div class=\"grid-row clear-fix\">\n            <!-- logo -->\n            <a href=\"#\" class=\"logo\">\n                <img src=\"/src/assets/pc-logo.png\" alt=\"\">\n                <h4>Pionner Coders</h4>\n            </a>\n            <!-- / logo -->\n            <nav class=\"main-nav\">\n                <ul class=\"nav clear-fix\">\n                    <li class=\"megamenu\">\n                        <a class=\"active\" href=\"#\">Video Tutorial</a>\n\n                        <ul class=\"clear-fix\">\n                            <li *ngFor=\"let courseGrop of courseGropList\">\n                                <div class=\"header-megamenu\">{{courseGrop.key}}</div>\n                                <ul class=\"nav flex-column line-height\">\n                                    <li class=\"nav-item\" *ngFor=\"let course of courseGrop.value\">\n                                        <a class=\"text-color\" routerLink=\"/course/{{course.courseId}}/topic/1\">\n                                            {{course.name}}\n                                        </a>\n                                    </li>\n                                </ul>\n                            </li>\n                        </ul>\n                        <!-- / sub mega menu -->\n                    </li>\n                    <li>\n                        <a class=\"text-color\" routerLink=\"/apps\">Live Projects</a>\n                    </li>\n                    <li>\n                        <a class=\"text-color\" href=\"#\">Consulting</a>\n                    </li>\n                </ul>\n            </nav>\n        </div>\n    </div>\n</div>"

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
    HeaderComponent.prototype.register = function () {
        this.router.navigate(['userdesktop']);
        this.registerModel.nativeElement.click();
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

/***/ "./src/app/ui/interview/interview.component.html":
/*!*******************************************************!*\
  !*** ./src/app/ui/interview/interview.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <div NgxMd [path]=\"questionsFileName\" (error)=\"errorHandler($event)\"></div> -->\n\n<ngx-md class=\"panel\" #main (loaded)=\"onLoad()\" [path]=\"url\" *ngFor=\"let url of interviewQuestionDataUrls\"></ngx-md>\n"

/***/ }),

/***/ "./src/app/ui/interview/interview.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/ui/interview/interview.component.ts ***!
  \*****************************************************/
/*! exports provided: InterviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterviewComponent", function() { return InterviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-md */ "./node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var _services_interview_interview_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/interview/interview.service */ "./src/app/services/interview/interview.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InterviewComponent = /** @class */ (function () {
    function InterviewComponent(route, router, interviewSer) {
        this.route = route;
        this.router = router;
        this.interviewSer = interviewSer;
        this.questionsFileName = "README.md";
        this.interviewQuestionUrl = "https://raw.githubusercontent.com/CodingKrishna/OrderMilk/master/README.md";
        this.interviewQuestionDataUrls = [];
    }
    InterviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.route.params.subscribe( params => {
        //   this.questionsFileName = 'assets/'+ params.courseName + '-interview-questions.md';
        //   console.log('questionsFileName-->', this.questionsFileName);
        // });
        this.route.params.subscribe(function (params) {
            var courseId = params.courseId;
            console.log("CourseId to show Interview Questions::", courseId);
            _this.interviewSer.getInterViewQuesionsData(courseId).subscribe(function (data) {
                console.log("subscribe interview data ==>", data);
                for (var _i = 0, _a = data.interviewquestions; _i < _a.length; _i++) {
                    var course = _a[_i];
                    if (course.courseId == courseId) {
                        _this.interviewQuestionDataUrls = course.urls;
                        console.log("Interview Questions data urls:", _this.interviewQuestionDataUrls);
                    }
                }
            });
        });
    };
    InterviewComponent.prototype.errorHandler = function (error) {
        console.log('error while loading readme file', error);
    };
    InterviewComponent.prototype.ngAfterViewInit = function () {
        console.log(this.main);
        // for html
        console.log(this.main._md);
        // for nativeElement
        console.log(this.main._el.nativeElement);
    };
    InterviewComponent.prototype.onLoad = function () {
        console.log('content loaded');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ngx_md__WEBPACK_IMPORTED_MODULE_2__["NgxMdComponent"]),
        __metadata("design:type", ngx_md__WEBPACK_IMPORTED_MODULE_2__["NgxMdComponent"])
    ], InterviewComponent.prototype, "main", void 0);
    InterviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'interview-questions',
            template: __webpack_require__(/*! ./interview.component.html */ "./src/app/ui/interview/interview.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_interview_interview_service__WEBPACK_IMPORTED_MODULE_3__["InterviewQuestionsService"]])
    ], InterviewComponent);
    return InterviewComponent;
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

module.exports = ".btn-outline-info {\n  width: auto;\n  height: auto;\n  color: black;\n  background-color: transparent;\n  border-radius: .25rem;\n  border: 1px solid #4bbcd7;\n  box-sizing: border-box;\n}\n.btn-outline-info:hover {\n  background-color: #4bbcd7;\n  color: #fff;\n  border-radius: .25rem;\n  border: 1px solid #4bbcd7;\n  box-sizing: border-box;\n}\n.btn-info-dif {\n    background-color: transparent;\n    border-radius: 0px;\n    border-top-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n.btn-info-dif:hover {\n    background-color: #4bbcd7;\n    color: #fff;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    border-top-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n  }\n.score-card{\n    color: green;\n  }\n.close-quiz{\n    cursor: pointer;\n    position: relative;\n    left: -19px;\n    top: 14px;\n    font-size: 28px\n  }\n.bg-color-s{\n    background-color: #4bbcd7;\n  }\n.border-radius{\n   border-radius: 35px;\n }"

/***/ }),

/***/ "./src/app/ui/quiz/quiz.component.html":
/*!*********************************************!*\
  !*** ./src/app/ui/quiz/quiz.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" data-backdrop=\"static\" id=\"modalLoginForm\" tabindex=\"-1\" role=\"dialog\"\n  aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\">\n    <div class=\"modal-content\">\n      <!-- Quiz content -->\n      <div class=\"quiz-container\">\n        <div class=\"row justify-content-center m-2 bg-color-s border-radius text-white\">\n          <div class=\"col align-self-center\">\n            <h4 class=\"p-0 m-2\"> QUIZ</h4>\n          </div>\n          <div class=\"col text-right\">\n            <h4 class=\"p-2 m-2\">\n              <countdown #countdown [config]=\"{leftTime: [quizlength]*60, demand: true}\" (finished)=\"finishTest()\">\n                $!m!:$!s!</countdown>\n            </h4>\n          </div>\n          <div><a title=\"Close\" class=\"pull-right\"><i data-dismiss=\"modal\" class=\"close close-quiz pull-right\"\n                style=\"cursor: pointer;\" title=\"close\">&times;</i></a></div>\n          <!-- <a title=\"Close\"><i ng-click=\"CloseModal()\" class=\"close pull-right\">&times;</i></a>  -->\n          <!-- <div class=\"col-12\">\n                <div class=\"progress\">\n                    <div class=\"progress-bar w-75\" role=\"progressbar\" aria-valuenow={{i}} aria-valuemin=\"0\" aria-valuemax=\"{{quizlength}}\"></div>\n                  </div>\n              \n            </div> -->\n        </div>\n        <div class=\"row justify-content-center m-2 \">\n          <div class=\"col-12 m-3 pl-4 text-justify font-weight-bold text-uppercase\">{{(i+1)}} . {{question}}</div>\n          <div class=\"col-6 text-justify mt-2 mb-2  \" *ngFor=\"let opt of option\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label \"><input type=\"radio\" name=\"options\" class=\"form-check-label\"\n                  (click)=\"check($event,opt)\">\n                {{opt}}\n                <span class=\"cr\"><i class=\"cr-icon glyphicon glyphicon-ok\"></i></span>\n              </label>\n            </div>\n          </div>\n        </div>\n        <div class=\"row m-5 justify-content-center\">\n\n          <div class=\"col text-left pl-0\"><button class=\"btn btn-outline-info \" (click)=\"previous()\" *ngIf=\"i>0\"><i\n                class=\"fas fa-hand-point-left\"></i> Previous</button></div>\n\n\n          <div class=\"col text-center pl-0\" *ngIf=\"showMarks\"><span class=\"score-card\">Your Score: <i\n                class=\"fas fa-hand-point-right\"></i> {{marskScored}}</span></div>\n\n\n          <div class=\"col text-right\"> <button class=\"btn btn-outline-info\" (click)=\"next()\"\n              *ngIf=\"i<(quizlength-1)\">Next <i class=\"fas fa-hand-point-right\"></i></button></div>\n        </div>\n        <div class=\"row m-5 justify-content-center\">\n          <div class=\"col text-center \"> <button class=\" btn btn-info-dif btn-md \" ng-disabled=all\n              (click)=\"generatemark()\" [disabled]=\"showMarks\">Submit Test</button> </div>\n        </div>\n      </div>\n      <!-- Quiz content -->\n    </div>\n  </div>\n</div>\n<div class=\"text-right\">\n  <button class=\"btn btn-info-dif btn-md\" type=\"button\" title=\"Start Quiz\" data-toggle=\"modal\"\n    data-target=\"#modalLoginForm\" (click)=\"startQuiz()\">Quiz Test</button>\n</div>"

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

module.exports = ".btn-bg-info{\n    background-color: salmon;\n    color: white;\n    border: 0px;\n}\n.btn-hight{\n    height: 40px;\n}"

/***/ }),

/***/ "./src/app/ui/signin/signin.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/signin/signin.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- <button class=\"btn btn-outline-secondary m-1\"> Profile</button> -->\n<button class=\"btn btn-outline-info btn-bg-info btn-hight\" (click)=\"socialSignIn('google')\">\n     <i class=\"fa fa-google\"></i> Sign in with Google\n</button>"

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
            _this.userService.addUser(u).subscribe(function (addUserResponse) {
                if (addUserResponse.isSuccess) {
                    // navigate to desktop page..
                    _this.userService.storeUserData(addUserResponse.response);
                    _this.router.navigate(['/userdesktop/viewprofile']);
                }
                else {
                    _this.userService.getUserByEmail(u.email).subscribe(function (getUserResponse) {
                        _this.userService.storeUserData(getUserResponse.response);
                        _this.router.navigate(['/userdesktop/viewprofile']);
                    });
                }
            });
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

module.exports = "li.active{\n    background-color: salmon ;\n    color:white;\n}\n.topics > li{\n    outline: none;\n}\n.topics > :first-child{\n    border-top-left-radius: 10px;\n}\n.topics > :last-child{\n    border-bottom-right-radius: 10px;\n}\n.container-mrg{\n    margin-top: 0px;\n}\n.btn-mrg-top{\n    margin-top: 16%;\n    outline: none !important;\n}\n.button {\n    background-color: #004A7F;\n    border-radius: 50%;\n    border: none;\n    color: #FFFFFF;\n    cursor: pointer;\n    display: inline-block;\n    font-family: Roboto;\n    font-size: 20px;\n    padding: 5px 10px;\n    text-align: center;\n    text-decoration: none;\n    -webkit-animation: glowing 1300ms infinite;\n    animation: glowing 1300ms infinite;\n  }\n@-webkit-keyframes glowing {\n    0% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    50% { background-color: #f52803; box-shadow: 0 0 20px #f52803; }\n    100% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    }\n@keyframes glowing {\n    0% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    50% { background-color: #f52803; box-shadow: 0 0 20px #f52803; }\n    100% { background-color: #f27c66; box-shadow: 0 0 5px #f27c66; }\n    }\n.scroll-top{\n        position: fixed;\n        top: -10px;\n        right: 0.3rem;\n        z-index: 99;\n        /* margin-left: 5px; */\n        padding: 10px;\n        line-height: normal;\n    }"

/***/ }),

/***/ "./src/app/ui/tutorial/tutorial.component.html":
/*!*****************************************************!*\
  !*** ./src/app/ui/tutorial/tutorial.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>{{courseDetails.courseId}} </div>\n<div>{{courseDetails.name}} </div>\n<div>{{courseDetails.description}} </div>\n<div *ngFor=\"let topic of courseDetails.topics\">\n    <div ><a routerLink=\"video/{{topic.videoId}}\">{{topic.name}}</a> </div>\n</div>\n<div>\n        <router-outlet></router-outlet>\n</div>\n-->\n\n<!-- online editer button -->\n<p><button class=\"button float-right btn-mrg-top scroll-top\"  *ngIf=\"!opened\" (click)=\"open(true)\">Online <br>Editer</button></p>\n      <kendo-window [top]=\"126\" [left]=\"390\" [width]=\"840\" title=\"Code Editer\" [(state)]=\"WindowState\" *ngIf=\"opened\" (close)=\"close(false)\">\n        <p style=\"text-align: center;\"><online-editor [courseId]=\"courseId\" [sampleCode]=\"sampleCode\"></online-editor></p>\n      </kendo-window>      \n<!-- online editer button -->\n<!-- vedios -->\n    <div class=\"row row-padding\">\n        <div class=\"col-3\">\n            <div class=\"menu justify-content-start\">\n                <ul class=\"pl-0 topics\">\n                    <li routerLink=\"topic/{{topic.topicId}}\" routerLinkActive=\"active current\"\n                        *ngFor=\"let topic of courseDetails.topics\" style=\"cursor: pointer;\">\n                        {{topic.name}}\n                    </li>\n                    <li routerLink=\"interview/{{courseDetails.courseId}}\">Interview Questions</li>\n                </ul>\n            </div>\n        </div>\n        <div class=\"col-9 p-0\">\n            <div class=\"col justify-content-start p-0\">\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div> "

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

/***/ "./src/app/ui/user/desktop/booked-events/booked-events.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/ui/user/desktop/booked-events/booked-events.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user/desktop/booked-events/booked-events.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui/user/desktop/booked-events/booked-events.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex1 flex pad-1r\">\n  <div class=\"flex flex-col width100\">\n    <div class=\"box-shadow\">\n      <div class=\"border-btm-user mar-bottom-05r\">\n        <h4 class=\"pad-1-per mar-0\">BookedEvents</h4>\n      </div>\n      <div class=\"pad-1r\">\n        <table class=\"cart-table-header \" style=\"width:100%\">\n          <tr>\n            <th class=\"cart-table-header pad-05r \">Events</th>\n            <th class=\"cart-table-header pad-05r\">EventDate</th>\n            <th class=\"cart-table-header pad-05r\">Seats</th>\n          </tr>\n          <tr>\n            <td class=\"cart-table-row pad-1r width-60\">\n              <span>Even1</span>\n            </td>\n            <td class=\"cart-table-row pad-1r\">\n              <span>12/12/17</span>\n            </td>\n            <td class=\"cart-table-row pad-1r\">\n              <span>10</span>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"cart-table-row pad-1r width-60\">\n              <span>Even1</span>\n            </td>\n            <td class=\"cart-table-row pad-1r\">\n              <span>12/12/17</span>\n            </td>\n            <td class=\"cart-table-row pad-1r\">\n              <span>10</span>\n            </td>\n\n          </tr>\n          <tr>\n            <td class=\"cart-table-row pad-1r width-60\">\n              <span>Even1</span>\n            </td>\n            <td class=\"cart-table-row pad-1r\">\n              <span>12/12/17</span>\n            </td>\n            <td class=\"cart-table-row pad-1r\">\n              <span>10</span>\n            </td>\n          </tr>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/booked-events/booked-events.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui/user/desktop/booked-events/booked-events.component.ts ***!
  \**************************************************************************/
/*! exports provided: BookedEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookedEventsComponent", function() { return BookedEventsComponent; });
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

var BookedEventsComponent = /** @class */ (function () {
    function BookedEventsComponent() {
    }
    BookedEventsComponent.prototype.ngOnInit = function () {
    };
    BookedEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booked-events',
            template: __webpack_require__(/*! ./booked-events.component.html */ "./src/app/ui/user/desktop/booked-events/booked-events.component.html"),
            styles: [__webpack_require__(/*! ./booked-events.component.css */ "./src/app/ui/user/desktop/booked-events/booked-events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookedEventsComponent);
    return BookedEventsComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/mytasks/mytasks.component.css":
/*!***************************************************************!*\
  !*** ./src/app/ui/user/desktop/mytasks/mytasks.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user/desktop/mytasks/mytasks.component.html":
/*!****************************************************************!*\
  !*** ./src/app/ui/user/desktop/mytasks/mytasks.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-1r flex1 \" ng-if=\"currentPannel=='taskPage'\">\n  <div class=\"flex flex-col flex1 box-shadow\">\n    <div class=\"border-btm-user mar-bottom-05r\">\n      <h4 class=\"pad-1-per mar-0\">MyTaks</h4>\n    </div>\n    <div class=\"pad-1r\">\n      <table class=\"cart-table-header width100 ft-open-sans-regular\">\n        <tr>\n          <th class=\"cart-table-header pad-05r\">TeskName</th>\n          <th class=\"cart-table-header pad-05r\">GivenDate</th>\n          <th class=\"cart-table-header pad-05r\">Status</th>\n          <th class=\"cart-table-header pad-05r\">SubmittedDate</th>\n        </tr>\n        <tr class=\"text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>HTML</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">Completed</td>\n          <td class=\"cart-table-row pad-05r\">15/12/2017</td>\n\n        </tr>\n        <tr class=\" text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>CSS</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">Yet-to-Start</td>\n          <td class=\"cart-table-row pad-05r\">-</td>\n        </tr>\n        <tr class=\" text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>Java</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">Completed</td>\n          <td class=\"cart-table-row pad-05r\">14/12/2017</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/mytasks/mytasks.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui/user/desktop/mytasks/mytasks.component.ts ***!
  \**************************************************************/
/*! exports provided: MytasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytasksComponent", function() { return MytasksComponent; });
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

var MytasksComponent = /** @class */ (function () {
    function MytasksComponent() {
    }
    MytasksComponent.prototype.ngOnInit = function () {
    };
    MytasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mytasks',
            template: __webpack_require__(/*! ./mytasks.component.html */ "./src/app/ui/user/desktop/mytasks/mytasks.component.html"),
            styles: [__webpack_require__(/*! ./mytasks.component.css */ "./src/app/ui/user/desktop/mytasks/mytasks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MytasksComponent);
    return MytasksComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/online-test-results/online-test-results.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/ui/user/desktop/online-test-results/online-test-results.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user/desktop/online-test-results/online-test-results.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/ui/user/desktop/online-test-results/online-test-results.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-1r flex1\" ng-if=\"currentPannel ==='onlinetestResults'\">\n  <div class=\"flex flex-col flex1 box-shadow \">\n    <div class=\"border-btm-user mar-bottom-05r\">\n      <h4 class=\"pad-1-per mar-0\">Online Test Results</h4>\n    </div>\n    <div class=\"pad-1r\">\n      <table class=\"cart-table-header width100 ft-open-sans-regular\">\n        <tr>\n          <th class=\"cart-table-header pad-05r\">TestName</th>\n          <th class=\"cart-table-header pad-05r\">Date</th>\n          <th class=\"cart-table-header pad-05r\">SecuredMarks</th>\n          <th class=\"cart-table-header pad-05r\">TotalMarks</th>\n\n        </tr>\n        <tr class=\" text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>HTML</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">15</td>\n          <td class=\"cart-table-row pad-05r\">20</td>\n\n        </tr>\n        <tr class=\"text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>CSS</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">12</td>\n          <td class=\"cart-table-row pad-05r\">20</td>\n        </tr>\n        <tr class=\"text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>Java</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">20</td>\n          <td class=\"cart-table-row pad-05r\">30</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/online-test-results/online-test-results.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/ui/user/desktop/online-test-results/online-test-results.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OnlineTestResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlineTestResultsComponent", function() { return OnlineTestResultsComponent; });
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

var OnlineTestResultsComponent = /** @class */ (function () {
    function OnlineTestResultsComponent() {
    }
    OnlineTestResultsComponent.prototype.ngOnInit = function () {
    };
    OnlineTestResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-online-test-results',
            template: __webpack_require__(/*! ./online-test-results.component.html */ "./src/app/ui/user/desktop/online-test-results/online-test-results.component.html"),
            styles: [__webpack_require__(/*! ./online-test-results.component.css */ "./src/app/ui/user/desktop/online-test-results/online-test-results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OnlineTestResultsComponent);
    return OnlineTestResultsComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/onlinetest/onlinetest.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/ui/user/desktop/onlinetest/onlinetest.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user/desktop/onlinetest/onlinetest.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/ui/user/desktop/onlinetest/onlinetest.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-1r flex1\" ng-if=\"currentPannel ==='onlinetestResults'\">\n  <div class=\"flex flex-col flex1 box-shadow \">\n    <div class=\"border-btm-user mar-bottom-05r\">\n      <h4 class=\"pad-1-per mar-0\">Online Test Results</h4>\n    </div>\n    <div class=\"pad-1r\">\n      <table class=\"cart-table-header width100 ft-open-sans-regular\">\n        <tr>\n          <th class=\"cart-table-header pad-05r\">TestName</th>\n          <th class=\"cart-table-header pad-05r\">Date</th>\n          <th class=\"cart-table-header pad-05r\">SecuredMarks</th>\n          <th class=\"cart-table-header pad-05r\">TotalMarks</th>\n\n        </tr>\n        <tr class=\" text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>HTML</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">15</td>\n          <td class=\"cart-table-row pad-05r\">20</td>\n\n        </tr>\n        <tr class=\"text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>CSS</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">12</td>\n          <td class=\"cart-table-row pad-05r\">20</td>\n        </tr>\n        <tr class=\"text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>Java</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">20</td>\n          <td class=\"cart-table-row pad-05r\">30</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/onlinetest/onlinetest.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ui/user/desktop/onlinetest/onlinetest.component.ts ***!
  \********************************************************************/
/*! exports provided: OnlinetestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlinetestComponent", function() { return OnlinetestComponent; });
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

var OnlinetestComponent = /** @class */ (function () {
    function OnlinetestComponent() {
    }
    OnlinetestComponent.prototype.ngOnInit = function () {
    };
    OnlinetestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-onlinetest',
            template: __webpack_require__(/*! ./onlinetest.component.html */ "./src/app/ui/user/desktop/onlinetest/onlinetest.component.html"),
            styles: [__webpack_require__(/*! ./onlinetest.component.css */ "./src/app/ui/user/desktop/onlinetest/onlinetest.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OnlinetestComponent);
    return OnlinetestComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/perchasedcourses/perchasedcourses.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/ui/user/desktop/perchasedcourses/perchasedcourses.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user/desktop/perchasedcourses/perchasedcourses.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/ui/user/desktop/perchasedcourses/perchasedcourses.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-1r\">\n  <div class=\"flex flex-col  flex1 box-shadow \">\n    <div class=\"border-btm-user mar-bottom-05r\">\n      <h4 class=\"pad-1-per mar-0\">PurchasedCourses</h4>\n    </div>\n    <div class=\"pad-1r\">\n      <table class=\"cart-table-header width100 ft-open-sans-regular\">\n        <tr>\n          <th class=\"cart-table-header pad-05r\">Course</th>\n          <th class=\"cart-table-header pad-05r\">PerchasedDate</th>\n          <th class=\"cart-table-header pad-05r\">Validity</th>\n          <th class=\"cart-table-header pad-05r\">Amount</th>\n        </tr>\n        <tr class=\" text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <div class=\"flex flex-row \">\n              <div class=\"flex flex1\">\n                <img class=\"height-50 width-70 \" src=\"/src/assets/images/apps_images/corejava_logo.png\">\n              </div>\n              <div class=\"flex flex-3 justify-content-start align-item-center\">\n                <span>java</span>\n              </div>\n            </div>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">13/6/2018</td>\n          <td class=\"cart-table-row pad-05r\"><i class=\"fa fa-inr \" aria-hidden=\"true\"></i>5000</td>\n\n        </tr>\n        <tr class=\" text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <div class=\"flex flex-row \">\n              <div class=\"flex flex1\">\n                <img class=\"height-50 width-70 \" src=\"/src/assets/images/apps_images/angularjs_training_logo.jpg\">\n              </div>\n              <div class=\"flex flex-3 justify-content-start align-item-center\">\n                <span>AngularJs</span>\n              </div>\n            </div>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">13/6/2018</td>\n          <td class=\"cart-table-row pad-05r\"><i class=\"fa fa-inr \" aria-hidden=\"true\"></i>5000</td>\n        </tr>\n        <tr class=\" text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <div class=\"flex flex-row \">\n              <div class=\"flex flex1\">\n                <img class=\"height-50 width-70 \" src=\"/src/assets/images/apps_images/java_logo.png\">\n              </div>\n              <div class=\"flex flex-3 justify-content-start align-item-center\">\n                <span>ServletsAndjsp</span>\n              </div>\n            </div>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">13/6/2018</td>\n          <td class=\"cart-table-row pad-05r\"><i class=\"fa fa-inr \" aria-hidden=\"true\"></i>5000</td>\n\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/perchasedcourses/perchasedcourses.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ui/user/desktop/perchasedcourses/perchasedcourses.component.ts ***!
  \********************************************************************************/
/*! exports provided: PerchasedcoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerchasedcoursesComponent", function() { return PerchasedcoursesComponent; });
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

var PerchasedcoursesComponent = /** @class */ (function () {
    function PerchasedcoursesComponent() {
    }
    PerchasedcoursesComponent.prototype.ngOnInit = function () {
    };
    PerchasedcoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perchasedcourses',
            template: __webpack_require__(/*! ./perchasedcourses.component.html */ "./src/app/ui/user/desktop/perchasedcourses/perchasedcourses.component.html"),
            styles: [__webpack_require__(/*! ./perchasedcourses.component.css */ "./src/app/ui/user/desktop/perchasedcourses/perchasedcourses.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerchasedcoursesComponent);
    return PerchasedcoursesComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/profile/address/address.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/address/address.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-success {\nwidth: auto;\nheight: auto;\ncolor: black;\nbackground-color: transparent;\nborder-radius: .25rem;\nborder: 1px solid #18BB7C;\nbox-sizing: border-box;\n}\n.btn-outline-success:hover {\nbackground-color: #18BB7C;\ncolor: #fff;\nborder-radius: .25rem;\nborder: 1px solid #18BB7C;\nbox-sizing: border-box;\n}\n.btn-success-dif {\n  background-color: transparent;\n  border-radius: 0px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border: 2px solid  #18BB7C;\n  box-sizing: border-box;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.btn-success-dif:hover {\n  background-color: #18BB7C;\n  color: #fff;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border: 2px solid  #18BB7C;\n  box-sizing: border-box;\n}\n.btn-pad-right{\n  padding-right: 40px !important;\n}"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/address/address.component.html":
/*!************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/address/address.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-shadow-nor\">\n    <div class=\"border-btm-orange\">\n      <h4 class=\"pad-05r mar-0\">Current Address</h4>\n    </div>\n      <form action=\"#!\" method=\"GET\">\n        <div class=\"row pt-4\">\n          <div class=\"col-sm-2 pl-5 \">\n            <label class=\"mt-2\">Address1:</label><br><br>\n            <label class=\"mt-2\">Address2:</label><br><br>    \n            <label class=\"mt-2\">Pincode:</label>\n          </div>\n          <div class=\"col-sm-6\">\n            <input class=\"width100 pad-05r text-show border-light-gary \" rows=\"3\" type=\"text\" placeholder=\"Address(Area and Street)\"><br><br>\n            <input class=\"width100 pad-05r text-show border-light-gary \" rows=\"3\" type=\"text\" placeholder=\"City/District/Town\"><br><br>\n            <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary \" placeholder=\"Pincode\">\n          </div>\n          <div class=\"col-sm-4 pl-0\">\n            <select class=\"width-90 pad-1-per  pad-05r text-show border-light-gary\">\n              <option value=\"Institution\">SelectCity</option>\n              <option value=\"#\">Bangalore</option>\n              <option value=\"#\">Mumabi</option>\n              <option value=\"#\">Hydreabad</option>\n              <option value=\"#\">Channai</option>\n              <option value=\"#\">Guntur</option>\n              <option value=\"#\">Others</option>\n            </select><br><br>\n            <select class=\"width-90 pad-1-per  pad-05r text-show border-light-gary\">\n              <option value=\"Institution\">SelectState</option>\n              <option value=\"#\">AndhraPradesh</option>\n              <option value=\"#\">Karnataka</option>\n              <option value=\"#\">Tamilnadu</option>\n              <option value=\"#\">Kerala</option>\n              <option value=\"#\">Assam</option>\n              <option value=\"#\">Others</option>\n            </select><br><br>\n            <select class=\"width-90 pad-1-per  pad-05r text-show border-light-gary\">\n              <option value=\"Institution\">SelectCountry</option>\n              <option value=\"#\">India</option>\n              <option value=\"#\">USA</option>\n              <option value=\"#\">UK</option>\n              <option value=\"#\">Singapore</option>\n              <option value=\"#\">Uganda</option>\n              <option value=\"#\">Others</option>\n            </select>           \n          </div>         \n        </div>\n        <div class=\"flex justify-end pad-1r btn-pad-right\">\n          <button class=\" btn btn-success-dif btn-md\">Save</button>\n        </div>\n      </form>\n  </div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/address/address.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/address/address.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
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

var AddressComponent = /** @class */ (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/ui/user/desktop/profile/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.css */ "./src/app/ui/user/desktop/profile/address/address.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/profile/bc-info/bc-info.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/bc-info/bc-info.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-success {\nwidth: auto;\nheight: auto;\ncolor: black;\nbackground-color: transparent;\nborder-radius: .25rem;\nborder: 1px solid #18BB7C;\nbox-sizing: border-box;\n}\n.btn-outline-success:hover {\nbackground-color: #18BB7C;\ncolor: #fff;\nborder-radius: .25rem;\nborder: 1px solid #18BB7C;\nbox-sizing: border-box;\n}\n.btn-success-dif {\nbackground-color: transparent;\nborder-radius: 0px;\nborder-top-right-radius: 10px;\nborder-bottom-left-radius: 10px;\nborder: 2px solid  #18BB7C;\nbox-sizing: border-box;\n-webkit-transition: all 0.3s;\ntransition: all 0.3s;\n}\n.btn-success-dif:hover {\nbackground-color: #18BB7C;\ncolor: #fff;\nborder-top-right-radius: 0px;\nborder-bottom-left-radius: 0px;\nborder-top-left-radius: 10px;\nborder-bottom-right-radius: 10px;\nborder: 2px solid  #18BB7C;\nbox-sizing: border-box;\n}\n.btn-outline-info {\nwidth: auto;\nheight: auto;\ncolor: black;\nbackground-color: transparent;\nborder-radius: .25rem;\nborder: 1px solid #4bbcd7;\nbox-sizing: border-box;\n}\n.btn-outline-info:hover {\nbackground-color: #4bbcd7;\ncolor: #fff;\nborder-radius: .25rem;\nborder: 1px solid #4bbcd7;\nbox-sizing: border-box;\n}\n.btn-info-dif {\n  background-color: transparent;\n  border-radius: 0px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border: 2px solid  #4bbcd7;\n  box-sizing: border-box;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.btn-info-dif:hover {\n  background-color: #4bbcd7;\n  color: #fff;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border: 2px solid  #4bbcd7;\n  box-sizing: border-box;\n}\n.btn-pad-right{\n  padding-right: 32px !important;\n}"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/bc-info/bc-info.component.html":
/*!************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/bc-info/bc-info.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <button type=\"button\" class=\"btn btn-info-dif btn-md p-2\" (click)=\"personalInfromation()\">personalinfromation</button>\n<button type=\"button\" class=\"btn btn-info-dif btn-md p-2\" (click)=\"basicinfromation()\">basicinfromation</button> -->\n<!--personal infromation-->\n<div class=\"box-shadow-nor\">\n    <div class=\"border-btm-user mar-bottom-05r\">\n        <h4 class=\"mar-0 pad-05r\">Basic Infromation</h4>\n    </div>\n    <div class=\"flex row pad-1r\">\n        <div class=\"col-sm-6 pr-0\">\n            <div class=\"row\">\n                <div class=\"col-sm-6 pr-0\">\n                    <label>Name :</label><br>\n                    <label>Email :</label><br>\n                </div>\n                <div class=\"col-sm-6 pl-0\">\n                    <label><span>Phani</span></label><br>\n                    <label><span>Phani1695@gmail.com</span></label><br>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <label>Mobile :</label><br>\n                    <label>Date of Birth :</label>\n                </div>\n                <div class=\"col-sm-6 p-0\">\n                    <span class=\"p-2\">8977147129</span><br>\n                    <span class=\"width-50\"><input type=\"date\"\n                            class=\"width100 pad-2-per text-show border-light-gary \"></span>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"flex row pad-1r\">\n        <div class=\"col-sm-3 pr-0\">\n            <label>Languages<br>\n                Known :</label><br>\n            <label class=\"mt-3\">Skills:</label><br><br>\n            <label class=\"mt-2\">ProfileSummary:</label><br><br><br>\n            <label class=\"mt-3\">Upload-Resume:</label><br>\n        </div>\n        <div class=\"col-sm-9 pl-0\">\n            <mat-form-field class=\"example-chip-list\">\n                <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                    <mat-chip *ngFor=\"let lang of languages\" [selectable]=\"selectable\" [removable]=\"removable\"\n                        (removed)=\"remove(lang)\">\n                        {{lang}}\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                    </mat-chip>\n                    <input placeholder=\"Select Language.\" #langInput [formControl]=\"languageCtrl\" [matAutocomplete]=\"auto\"\n                        [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                        [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\">\n                </mat-chip-list>\n                <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n                    <mat-option *ngFor=\"let lang of filteredLanguages | async\" [value]=\"lang\">\n                        {{lang}}\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field><br>\n            <mat-form-field class=\"example-chip-list\">\n                <mat-chip-list #chipList aria-label=\"Skills selection\">\n                    <mat-chip *ngFor=\"let skill of Skills\" [selectable]=\"selectable\" [removable]=\"removable\"\n                        (removed)=\"remove(skill)\">\n                        {{skill}}\n                        <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                    </mat-chip>\n                    <input placeholder=\"Select Skills.\" #langInput [formControl]=\"skillsCtrl\" [matAutocomplete]=\"auto\"\n                        [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                        [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\">\n                </mat-chip-list>\n                <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n                    <mat-option *ngFor=\"let skill of filteredSkills | async\" [value]=\"skill\">\n                        {{skill}}\n                    </mat-option>\n                </mat-autocomplete>\n            </mat-form-field><br>\n            <!-- <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary \"\n                placeholder=\"Enter skills\"><br><br> -->\n            <textarea class=\"width100 pad-05r text-show border-light-gary \" rows=\"2\" type=\"text\"\n                placeholder=\"Enter ProfileSummary\"></textarea><br><br>\n            <label class=\"tc-input-container has-value\">\n                <input class=\"ng-hide\" type=\"file\" label=\"\">\n            </label><br>\n        </div>\n    </div>\n    <div class=\"flex justify-end pad-1r btn-pad-right\">\n        <button class=\"btn btn-success-dif btn-md\" (click)=\"updateBasicInfo()\">Save</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/bc-info/bc-info.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/bc-info/bc-info.component.ts ***!
  \**********************************************************************/
/*! exports provided: BcInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcInfoComponent", function() { return BcInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BcInfoComponent = /** @class */ (function () {
    function BcInfoComponent(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.userData = {};
        /** Common settings for autocomplete */
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.formControl = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
        /** specific data for autocomplete */
        this.languageCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.languages = [];
        this.skills = [];
        this.allLanguages = [];
        this.allSkills = [];
    }
    BcInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getTechnologiesList().subscribe(function (techListResponse) {
            if (techListResponse.isSuccess) {
                _this.technologiesList = techListResponse.response;
            }
        });
        this.userService.getLanguagesList().subscribe(function (langListResponse) {
            if (langListResponse.isSuccess) {
                _this.languagesList = langListResponse.response;
                var langArr_1 = [];
                _this.languagesList.forEach(function (lang) {
                    langArr_1.push(lang.languageName);
                });
                _this.allLanguages = langArr_1;
                console.log("this.allLanguages ----->", _this.allLanguages);
                _this.filteredLanguages = _this.languageCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (fruit) { return fruit ? _this._filter(fruit) : _this.allLanguages.slice(); }));
            }
        });
        this.userService.getSkillsList().subscribe(function (skillsListRespones) {
            if (skillsListRespones.is) {
            }
        });
    };
    BcInfoComponent.prototype.add = function (event) {
        // Add fruit only when MatAutocomplete is not open
        // To make sure this does not conflict with OptionSelected Event
        if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value;
            // Add our fruit
            if ((value || '').trim()) {
                this.languages.push(value.trim());
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
            this.languageCtrl.setValue(null);
        }
        console.log("selected languages==>", this.languages);
    };
    BcInfoComponent.prototype.remove = function (fruit) {
        var index = this.languages.indexOf(fruit);
        if (index >= 0) {
            this.languages.splice(index, 1);
        }
        console.log("selected languages==>", this.languages);
    };
    BcInfoComponent.prototype.selected = function (event) {
        this.languages.push(event.option.viewValue);
        this.langInput.nativeElement.value = '';
        this.languageCtrl.setValue(null);
    };
    BcInfoComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.allLanguages.filter(function (fruit) {
            if (fruit) {
                fruit.toLowerCase().indexOf(filterValue) === 0;
            }
            return false;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('langInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BcInfoComponent.prototype, "langInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('skillInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BcInfoComponent.prototype, "skillInput", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto'),
        __metadata("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocomplete"])
    ], BcInfoComponent.prototype, "matAutocomplete", void 0);
    BcInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bc-info',
            template: __webpack_require__(/*! ./bc-info.component.html */ "./src/app/ui/user/desktop/profile/bc-info/bc-info.component.html"),
            styles: [__webpack_require__(/*! ./bc-info.component.css */ "./src/app/ui/user/desktop/profile/bc-info/bc-info.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]])
    ], BcInfoComponent);
    return BcInfoComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/profile/education/education.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/education/education.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-info {\n  width: auto;\n  height: auto;\n  color: black;\n  background-color: transparent;\n  border-radius: .25rem;\n  border: 1px solid #4bbcd7;\n  box-sizing: border-box;\n}\n.btn-outline-info:hover {\n  background-color: #4bbcd7;\n  color: #fff;\n  border-radius: .25rem;\n  border: 1px solid #4bbcd7;\n  box-sizing: border-box;\n}\n.btn-info-dif {\n  background-color: transparent;\n  border-radius: 0px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border: 2px solid  #4bbcd7;\n  box-sizing: border-box;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.btn-info-dif:hover {\n  background-color: #4bbcd7;\n  color: #fff;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border: 2px solid  #4bbcd7;\n  box-sizing: border-box;\n}\n.btn-outline-success {\n  width: auto;\n  height: auto;\n  color: black;\n  background-color: transparent;\n  border-radius: .25rem;\n  border: 1px solid #18BB7C;\n  box-sizing: border-box;\n}\n.btn-outline-success:hover {\n  background-color: #18BB7C;\n  color: #fff;\n  border-radius: .25rem;\n  border: 1px solid #18BB7C;\n  box-sizing: border-box;\n}\n.btn-success-dif {\n  background-color: transparent;\n  border-radius: 0px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border: 2px solid  #18BB7C;\n  box-sizing: border-box;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.btn-success-dif:hover {\n  background-color: #18BB7C;\n  color: #fff;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border: 2px solid  #18BB7C;\n  box-sizing: border-box;\n}\n.text-end{\n  text-align: end;\n}\n.border-box{\n  border-right: 1px solid gainsboro;\n}\n.btn-pad-left{\n  padding-left: 18px !important;\n}\n.btn-pad{\n  padding-right: 1px !important;\n  padding-left: 1px !important;\n}\n.mt-13{\n  margin-top: 13px !important;\n}"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/education/education.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/education/education.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-shadow-nor\">\n    <div class=\" row col-sm-12 m-0 p-0\">\n        <div class=\"border-btm-orange mar-bottom-05r width100\">\n            <h4 class=\"mar-0 pad-05r\">Education</h4>\n        </div>\n        <div class=\"col-sm-12\">\n            <div class=\"row ml-2\">\n                <div class=\"width100 row pad-05r\">\n                    <div class=\"col-sm-6\">\n                        <span class=\"font-size14 ft-wt-bold\">Education1</span>\n                    </div>\n                    <div class=\"col-sm-6 text-end pr-0\">\n                        <span class=\"p-1\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> </span>\n                        <span class=\"p-1\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <form class=\"width100\" action=\"#\" method=\"GET\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"board\">SelectYourEducationType</option>\n                            <option value=\"SSC\">SSC</option>\n                            <option value=\"Inter\">Inter/PUC</option>\n                            <option value=\"Graduation\">Graduation</option>\n                            <option value=\"PG\">PG</option>\n                            <option value=\"PhD\">Phd</option>\n                            <option value=\"Others\">Others</option>\n                        </select><br><br>\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">Univercity</option>\n                            <option value=\"#\">AndhraUnivercity</option>\n                            <option value=\"#\">JNTUH</option>\n                            <option value=\"#\">JNTUK</option>\n                            <option value=\"#\">SRM</option>\n                            <option value=\"#\">SVU</option>\n                            <option value=\"#\">Others</option>\n                        </select>\n                        <label  class=\"mb-0 pad-05r font-size14 ft-wt-bold\">Year of Passing:</label>\n                        <input type=\"date\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"><br>\n                    </div>\n                    <div class=\"col-sm-6 pr-0\">\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">Institution</option>\n                            <option value=\"#\">SwaranadraCollege</option>\n                            <option value=\"#\">RVR&JCCollege</option>\n                            <option value=\"#\">SRKRCollege</option>\n                            <option value=\"#\">VishnuCollege</option>\n                            <option value=\"#\">GITEMUnivercity</option>\n                            <option value=\"#\">Others</option>\n                        </select><br><br>\n                        <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"\n                            placeholder=\"Branch\"><br><br>\n                       <label class=\"width100 mt-13\">\n                           <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\" placeholder=\"Percentage\">\n                       </label>\n                    </div>\n                </div>\n            </form>\n            <hr>\n            <div class=\"row ml-2\">\n                <div class=\"width100 row pad-05r\">\n                    <div class=\"col-sm-6\">\n                        <span class=\"font-size14 ft-wt-bold\">Education2</span>\n                    </div>\n                    <div class=\"col-sm-6 text-end pr-0\">\n                        <span class=\"p-1\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> </span>\n                        <span class=\"p-1\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <form class=\"width100\" action=\"#\" method=\"GET\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"board\">SelectYourEducationType</option>\n                            <option value=\"SSC\">SSC</option>\n                            <option value=\"Inter\">Inter/PUC</option>\n                            <option value=\"Graduation\">Graduation</option>\n                            <option value=\"PG\">PG</option>\n                            <option value=\"PhD\">Phd</option>\n                            <option value=\"Others\">Others</option>\n                        </select><br><br>\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">Univercity</option>\n                            <option value=\"#\">AndhraUnivercity</option>\n                            <option value=\"#\">JNTUH</option>\n                            <option value=\"#\">JNTUK</option>\n                            <option value=\"#\">SRM</option>\n                            <option value=\"#\">SVU</option>\n                            <option value=\"#\">Others</option>\n                        </select><br>\n                        <label  class=\"mb-0 pad-05r font-size14 ft-wt-bold\">Year of Passing:</label>\n                        <input type=\"date\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"><br>\n                    </div>\n                    <div class=\"col-sm-6 pr-0\">\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">Institution</option>\n                            <option value=\"#\">SwaranadraCollege</option>\n                            <option value=\"#\">RVR&JCCollege</option>\n                            <option value=\"#\">SRKRCollege</option>\n                            <option value=\"#\">VishnuCollege</option>\n                            <option value=\"#\">GITEMUnivercity</option>\n                            <option value=\"#\">Others</option>\n                        </select><br><br>\n                        <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"\n                            placeholder=\"Branch\"><br><br>\n                            <label class=\"width100 mt-13\">\n                                <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\" placeholder=\"Percentage\">\n                            </label>\n                    </div>\n                </div>\n            </form>\n            <hr>\n            <div class=\"row ml-2\">\n                <div class=\"width100 row pad-05r\">\n                    <div class=\"col-sm-6\">\n                        <span class=\"font-size14 ft-wt-bold\">Education3</span>\n                    </div>\n                    <div class=\"col-sm-6 text-end pr-0\">\n                        <span class=\"p-1\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> </span>\n                        <span class=\"p-1\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <form class=\"width100\" action=\"#\" method=\"GET\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"board\">SelectYourEducationType</option>\n                            <option value=\"SSC\">SSC</option>\n                            <option value=\"Inter\">Inter/PUC</option>\n                            <option value=\"Graduation\">Graduation</option>\n                            <option value=\"PG\">PG</option>\n                            <option value=\"PhD\">Phd</option>\n                            <option value=\"Others\">Others</option>\n                        </select><br><br>\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">Univercity</option>\n                            <option value=\"#\">AndhraUnivercity</option>\n                            <option value=\"#\">JNTUH</option>\n                            <option value=\"#\">JNTUK</option>\n                            <option value=\"#\">SRM</option>\n                            <option value=\"#\">SVU</option>\n                            <option value=\"#\">Others</option>\n                        </select><br>\n                        <label  class=\"mb-0 pad-05r font-size14 ft-wt-bold\">Year of Passing:</label>\n                        <input type=\"date\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"><br>\n                    </div>\n                    <div class=\"col-sm-6 pr-0\">\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">Institution</option>\n                            <option value=\"#\">SwaranadraCollege</option>\n                            <option value=\"#\">RVR&JCCollege</option>\n                            <option value=\"#\">SRKRCollege</option>\n                            <option value=\"#\">VishnuCollege</option>\n                            <option value=\"#\">GITEMUnivercity</option>\n                            <option value=\"#\">Others</option>\n                        </select><br><br>\n                        <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"\n                            placeholder=\"Branch\"><br><br>\n                            <label class=\"width100 mt-13\">\n                                <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\" placeholder=\"Percentage\">\n                            </label>\n                    </div>\n                </div>\n            </form>\n            <hr>\n            <div class=\"row ml-2\">\n                <div class=\"width100 row pad-05r\">\n                    <div class=\"col-sm-6\">\n                        <span class=\"font-size14 ft-wt-bold\">Education4</span>\n                    </div>\n                    <div class=\"col-sm-6 text-end pr-0\">\n                        <span class=\"p-1\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> </span>\n                        <span class=\"p-1\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <form class=\"width100\" action=\"#\" method=\"GET\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"board\">SelectYourEducationType</option>\n                            <option value=\"SSC\">SSC</option>\n                            <option value=\"Inter\">Inter/PUC</option>\n                            <option value=\"Graduation\">Graduation</option>\n                            <option value=\"PG\">PG</option>\n                            <option value=\"PhD\">Phd</option>\n                            <option value=\"Others\">Others</option>\n                        </select><br><br>\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">Univercity</option>\n                            <option value=\"#\">AndhraUnivercity</option>\n                            <option value=\"#\">JNTUH</option>\n                            <option value=\"#\">JNTUK</option>\n                            <option value=\"#\">SRM</option>\n                            <option value=\"#\">SVU</option>\n                            <option value=\"#\">Others</option>\n                        </select><br>\n                        <label  class=\"mb-0 pad-05r font-size14 ft-wt-bold\">Year of Passing:</label>\n                        <input type=\"date\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"><br>\n                    </div>\n                    <div class=\"col-sm-6 pr-0\">\n                        <select class=\"width100 pad-1-per  pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">Institution</option>\n                            <option value=\"#\">SwaranadraCollege</option>\n                            <option value=\"#\">RVR&JCCollege</option>\n                            <option value=\"#\">SRKRCollege</option>\n                            <option value=\"#\">VishnuCollege</option>\n                            <option value=\"#\">GITEMUnivercity</option>\n                            <option value=\"#\">Others</option>\n                        </select><br><br>\n                        <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"\n                            placeholder=\"Branch\"><br><br>\n                            <label class=\"width100 mt-13\">\n                                <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\" placeholder=\"Percentage\">\n                            </label>\n                    </div>\n                </div>\n            </form>\n\n            <div class=\"flex justify-content-bw pad-2r btn-pad-left btn-pad\">\n                <button class=\"btn btn-info-dif btn-md\">Add</button>\n                <button class=\"btn btn-success-dif btn-md\">Save</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/education/education.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/education/education.component.ts ***!
  \**************************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
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

var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/ui/user/desktop/profile/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/ui/user/desktop/profile/education/education.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/profile/profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".height100{\n    height: 100% !important;\n}\n.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active{\n    border-top-color: #f27c66 !important;\n    border-bottom: none !important;\n}\n.nav-tabs .nav-link {\n    /* border: 0 !important; */\n    border-left: 1px solid #c5c5c5;\n    border-right: 1px solid #c5c5c5;\n    border-top: 4px solid #c5c5c5;\n    border-bottom: 1px solid #c5c5c5;\n    border-top-left-radius: 0 !important;\n    border-top-right-radius: 0 !important;\n}\n.nav-tabs .nav-item {\n    background-color: white;\n}\n.nav-tabs {\n    border-bottom-width: 0px !important;\n}\n.navpad{\n    padding: 5px 24.48px !important;\n}\n.mrg-right{\n    margin-right: 2px;\n}\n.mrg-left{\n    margin-left: 3px !important;\n}\n.pad-8{\n    padding: 8px !important;\n}\n.pad-top{\n    padding-top: 1rem;\n}\n.pad-left{\n    padding-left: 15.3px !important;\n}\n.text-inherit{\n    text-align: inherit !important;\n}\n.tabsContent {\n    padding: 3%;\n    border-left: 1px solid gainsboro;\n    border-right: 1px solid gainsboro;\n    border-bottom: 1px solid gainsboro;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin-bottom: 20px;\n  }\n.pad-mrg{\n    /* width: 10%; */\n    margin-left: -7px;\n  }\n.li {\n    -webkit-box-flex: 1;\n            flex: 1;\n    margin-right: 2px;\n    white-space: nowrap;\n    background-color: white;\n    padding: 0.5rem;\n    border-left: 1px solid #c5c5c5;\n    border-right: 1px solid #c5c5c5;\n    border-top: 4px solid #c5c5c5;\n    border-bottom: 1px solid #c5c5c5;\n    font-size: 12px;\n    text-align: center;\n}\n.font-style12{\n    font-size: 12px !important;\n    white-space: nowrap;\n}\n"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container box-shadow-nor\">\n  <div class=\"tab-content\">\n    <!-- <div class=\"width100  box-shadow-nor height100 ml-1 mt-1\"> -->\n    <div class=\"border-btm-user ml-0 background-info mar-bottom-05r width100\">\n      <h4 class=\"mar-0 pad-05r\">Profile</h4>\n    </div>\n    <!-- <div class=\"\"> -->\n    <div class=\"row pad-left pad-top\">\n      <ul class=\"nav nav-tabs\" role=\"tablist\">\n        <li class=\"nav-item font-style12 mrg-right\">\n          <a class=\"ft-roboto-regular black ng-binding nav-link navpad active\" data-toggle=\"tab\"\n            href=\"#basicInfo\">BasicInfro </a>\n        </li>\n        <li class=\"nav-item font-style12 mrg-right\">\n          <a class=\"ft-roboto-regular black ng-binding nav-link navpad\" data-toggle=\"tab\" href=\"#address\">Address\n          </a>\n        </li>\n        <li class=\"nav-item font-style12 mrg-right\">\n          <a class=\"ft-roboto-regular black ng-binding nav-link navpad\" data-toggle=\"tab\"\n            href=\"#education\">Education</a>\n        </li>\n        <li class=\"nav-item font-style12 mrg-right\">\n          <a class=\"ft-roboto-regular black ng-binding nav-link navpad\" data-toggle=\"tab\" href=\"#skillset\">Skillset</a>\n        </li>\n        <li class=\"nav-item font-style12 mrg-right\">\n          <a class=\"ft-roboto-regular black ng-binding nav-link navpad\" data-toggle=\"tab\" href=\"#workExp\">WorkExp</a>\n        </li>\n        <li class=\"nav-item font-style12 mrg-right\">\n          <a class=\"ft-roboto-regular black ng-binding nav-link navpad\" data-toggle=\"tab\" href=\"#projects\">Projects</a>\n        </li>\n        <li class=\"nav-item font-style12 mrg-right\">\n          <a class=\"ft-roboto-regular black ng-binding nav-link navpad\" data-toggle=\"tab\" href=\"#socialInfo\">Social\n            infro</a>\n        </li>\n        <li class=\"nav-item font-style12 mrg-right\">\n          <a class=\"ft-roboto-regular black ng-binding nav-link navpad\" data-toggle=\"tab\" href=\"#settings\">Visibilty\n            Settings</a>\n        </li>\n\n      </ul>\n    </div>\n\n    <div id=\"basicInfo\" class=\"container tabsContent tab-pane active\">\n      <app-bc-info></app-bc-info>\n    </div>\n    <div id=\"address\" class=\"container tabsContent tab-pane fade\">\n      <app-address></app-address>\n    </div>\n    <div id=\"education\" class=\"container tabsContent tab-pane fade\">\n      <app-education></app-education>\n    </div>\n    <div id=\"skillset\" class=\"container tabsContent tab-pane fade\">\n      <app-skilleset></app-skilleset>\n    </div>\n    <div id=\"workExp\" class=\"container tabs-content tab-pane fade\">\n      <app-work-exp></app-work-exp>\n    </div>\n    <div id=\"projects\" class=\"container tabs-content tab-pane fade\">\n      <app-projects></app-projects>\n    </div>\n    <div id=\"socialInfo\" class=\"container tabs-content tab-pane fade\">\n      <app-social-info></app-social-info>\n    </div>\n    <div id=\"settings\" class=\"container tabs-content tab-pane fade\">\n     <app-settings></app-settings>\n    </div>\n    <!-- </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/profile.component.ts ***!
  \**************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.userData = {};
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/ui/user/desktop/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/ui/user/desktop/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/profile/projects/projects.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/projects/projects.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-info {\nwidth: auto;\nheight: auto;\ncolor: black;\nbackground-color: transparent;\nborder-radius: .25rem;\nborder: 1px solid #4bbcd7;\nbox-sizing: border-box;\n}\n.btn-outline-info:hover {\nbackground-color: #4bbcd7;\ncolor: #fff;\nborder-radius: .25rem;\nborder: 1px solid #4bbcd7;\nbox-sizing: border-box;\n}\n.btn-info-dif {\nbackground-color: transparent;\nborder-radius: 0px;\nborder-top-right-radius: 10px;\nborder-bottom-left-radius: 10px;\nborder: 2px solid  #4bbcd7;\nbox-sizing: border-box;\n-webkit-transition: all 0.3s;\ntransition: all 0.3s;\n}\n.btn-info-dif:hover {\nbackground-color: #4bbcd7;\ncolor: #fff;\nborder-top-right-radius: 0px;\nborder-bottom-left-radius: 0px;\nborder-top-left-radius: 10px;\nborder-bottom-right-radius: 10px;\nborder: 2px solid  #4bbcd7;\nbox-sizing: border-box;\n}\n.btn-outline-success {\nwidth: auto;\nheight: auto;\ncolor: black;\nbackground-color: transparent;\nborder-radius: .25rem;\nborder: 1px solid #18BB7C;\nbox-sizing: border-box;\n}\n.btn-outline-success:hover {\nbackground-color: #18BB7C;\ncolor: #fff;\nborder-radius: .25rem;\nborder: 1px solid #18BB7C;\nbox-sizing: border-box;\n}\n.btn-success-dif {\n  background-color: transparent;\n  border-radius: 0px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border: 2px solid  #18BB7C;\n  box-sizing: border-box;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.btn-success-dif:hover {\n  background-color: #18BB7C;\n  color: #fff;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border: 2px solid  #18BB7C;\n  box-sizing: border-box;\n}\n.text-end{\n  text-align: end;\n}\n.btn-pad{\n        padding-right: 15px !important;\n        padding-left: 15px !important;\n}"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/projects/projects.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/projects/projects.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-shadow-nor\">\n    <div class=\"border-btm-user mar-bottom-05r\">\n        <h4 class=\"mar-0 pad-05r\">Projects</h4>\n    </div>\n    <div class=\"pad-1r\">\n        <div class=\"row\">\n            <div class=\"row width100\">\n                <div class=\"col-sm-6 pl-5\">\n                    <span class=\"font-size14 ft-wt-bold mr-3\">Project1</span>\n                </div>\n                <div class=\"col-sm-6 text-end\">\n                    <span class=\"p-1\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> </span>\n                    <span class=\"p-1\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </div>\n            <form class=\"width100\" action=\"#\" method=\"GET\">\n                <div class=\"row pad-1r pr-0\">\n                    <div class=\"col-sm-6\">\n                        <input type=\"text\" class=\"width100 pad-1-per pad-05r text-show border-light-gary\"\n                            placeholder=\"ProjectName\"><br><br>\n                        <input type=\"date\" class=\"width100 pad-1-per pad-05r text-show border-light-gary\"><br><br>\n                        <input type=\"text\" class=\"width100 pad-1-per pad-05r text-show border-light-gary\"\n                            placeholder=\"ProjectResponsebilites\"><br>\n                    </div>\n                    <div class=\"col-sm-6 p-0\">\n                        <select class=\"pad-1-per width100 pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">SelectDomain</option>\n                            <option value=\"#\">Java</option>\n                            <option value=\"#\">Anjularjs</option>\n                            <option value=\"#\">Php</option>\n                            <option value=\"#\">DataAnalist</option>\n                            <option value=\"#\">Cloud</option>\n                            <option value=\"#\">Others</option>\n                        </select><br><br>                     \n                        <input type=\"date\" class=\"width100 pad-1-per pad-05r text-show border-light-gary\"><br><br>\n                        <textarea class=\"pad-05r width100 text-show border-light-gary \" rows=\"2\" type=\"text\"\n                            placeholder=\"ProjectDiscription\"></textarea><br>\n                       \n                    </div>\n                </div>\n            </form>\n            <div class=\"row width100\">\n                <div class=\"col-sm-6 pl-5\">\n                    <span class=\"font-size14 ft-wt-bold mr-3\">Project2</span>\n                </div>\n                <div class=\"col-sm-6 text-end\">\n                    <span class=\"p-1\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> </span>\n                    <span class=\"p-1\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </div>\n            <form class=\"width100\" action=\"#\" method=\"GET\">\n                <div class=\"row pad-1r pr-0\">\n                    <div class=\"col-sm-6\">\n                        <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"\n                            placeholder=\"ProjectName\"><br><br>\n                        <input type=\"date\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"><br><br>\n                        <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"\n                            placeholder=\"ProjectResponsebilites\">\n                    </div>\n                    <div class=\"col-sm-6 p-0\">\n                        <select class=\"pad-1-per width100 pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">SelectDomain</option>\n                            <option value=\"#\">Java</option>\n                            <option value=\"#\">Anjularjs</option>\n                            <option value=\"#\">Php</option>\n                            <option value=\"#\">DataAnalist</option>\n                            <option value=\"#\">Cloud</option>\n                            <option value=\"#\">Others</option>\n                        </select><br><br>                      \n                        <input type=\"date\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary \"><br><br>\n                        <textarea class=\"pad-05r width100 text-show border-light-gary\" rows=\"2\" type=\"text\"\n                            placeholder=\"ProjectDiscription\"></textarea>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"flex justify-content-bw pad-1r btn-pad\">\n        <button class=\"btn btn-info-dif btn-md\">Add</button>\n        <button class=\"btn btn-success-dif btn-md\">Save</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/projects/projects.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/projects/projects.component.ts ***!
  \************************************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
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

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/ui/user/desktop/profile/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/ui/user/desktop/profile/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/profile/skilleset/skilleset.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/skilleset/skilleset.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-success {\n    width: auto;\n    height: auto;\n    color: black;\n    background-color: transparent;\n    border-radius: .25rem;\n    border: 1px solid #18BB7C;\n    box-sizing: border-box;\n  }\n  .btn-outline-success:hover {\n    background-color: #18BB7C;\n    color: #fff;\n    border-radius: .25rem;\n    border: 1px solid #18BB7C;\n    box-sizing: border-box;\n  }\n  .btn-success-dif {\n      background-color: transparent;\n      border-radius: 0px;\n      border-top-right-radius: 10px;\n      border-bottom-left-radius: 10px;\n      border: 2px solid  #18BB7C;\n      box-sizing: border-box;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s;\n    }\n  .btn-success-dif:hover {\n      background-color: #18BB7C;\n      color: #fff;\n      border-top-right-radius: 0px;\n      border-bottom-left-radius: 0px;\n      border-top-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n      border: 2px solid  #18BB7C;\n      box-sizing: border-box;\n    }"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/skilleset/skilleset.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/skilleset/skilleset.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" box-shadow-nor\">\n    <div class=\"border-btm-pink\">\n        <h4 class=\"mar-0 pad-05r\">Skill info</h4>\n    </div>\n    <div class=\"flex flex-col pad-1r flex1\">\n        <div class=\"flex\">\n            <input type=\"text\" class=\" pad-1-per pad-05r text-show border-light-gary width100\" placeholder=\"AddTag\"><br>\n        </div>\n        <div class=\"flex flex-row justify-content-sa pad-2-per\">\n            <div class=\"width-50 flex flex-col\">\n                <label>Communication skills :</label><br><br>\n                <label>Analitical skills:</label><br><br>\n            </div>\n            <div class=\"width-50 flex flex-col\">\n                <mat-slider thumbLabel tickInterval=\"1\"></mat-slider>\n                <mat-slider  thumbLabel tickInterval=\"1\"></mat-slider>\n                <div class=\"flex justify-end \">\n                    <button\n                        class=\" btn btn-success-dif btn-md\">Save\n                    </button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/skilleset/skilleset.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/skilleset/skilleset.component.ts ***!
  \**************************************************************************/
/*! exports provided: SkillesetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillesetComponent", function() { return SkillesetComponent; });
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

var SkillesetComponent = /** @class */ (function () {
    function SkillesetComponent() {
    }
    SkillesetComponent.prototype.ngOnInit = function () {
    };
    SkillesetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skilleset',
            template: __webpack_require__(/*! ./skilleset.component.html */ "./src/app/ui/user/desktop/profile/skilleset/skilleset.component.html"),
            styles: [__webpack_require__(/*! ./skilleset.component.css */ "./src/app/ui/user/desktop/profile/skilleset/skilleset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillesetComponent);
    return SkillesetComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/profile/social-info/social-info.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/social-info/social-info.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-success {\n    width: auto;\n    height: auto;\n    color: black;\n    background-color: transparent;\n    border-radius: .25rem;\n    border: 1px solid #18BB7C;\n    box-sizing: border-box;\n  }\n  .btn-outline-success:hover {\n    background-color: #18BB7C;\n    color: #fff;\n    border-radius: .25rem;\n    border: 1px solid #18BB7C;\n    box-sizing: border-box;\n  }\n  .btn-success-dif {\n      background-color: transparent;\n      border-radius: 0px;\n      border-top-right-radius: 10px;\n      border-bottom-left-radius: 10px;\n      border: 2px solid  #18BB7C;\n      box-sizing: border-box;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s;\n    }\n  .btn-success-dif:hover {\n      background-color: #18BB7C;\n      color: #fff;\n      border-top-right-radius: 0px;\n      border-bottom-left-radius: 0px;\n      border-top-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n      border: 2px solid  #18BB7C;\n      box-sizing: border-box;\n    }"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/social-info/social-info.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/social-info/social-info.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\" box-shadow-nor\">\n      <div class=\"border-btm-user mar-bottom-05r\">\n          <h4 class=\"mar-0 pad-05r\">Social info</h4>\n      </div>\n      <div class=\"flex flex-col pad-1r\">\n          <input type=\"text\" class=\" pad-1-per  pad-05r text-show border-light-gary \" placeholder=\"FacebookID\"><br>\n          <input type=\"text\" class=\" pad-1-per  pad-05r text-show border-light-gary \" placeholder=\"TwitterID\"><br>\n          <input type=\"text\" class=\" pad-1-per  pad-05r text-show border-light-gary \" placeholder=\"SkypeID\"><br>\n          <input type=\"text\" class=\" pad-1-per  pad-05r text-show border-light-gary \" placeholder=\"WhatsAppNumber\"><br>\n      </div>\n      <div class=\"flex justify-end pad-1r\">\n          <button class=\"btn btn-success-dif btn-md\">Save</button>\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/social-info/social-info.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/social-info/social-info.component.ts ***!
  \******************************************************************************/
/*! exports provided: SocialInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialInfoComponent", function() { return SocialInfoComponent; });
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

var SocialInfoComponent = /** @class */ (function () {
    function SocialInfoComponent() {
    }
    SocialInfoComponent.prototype.ngOnInit = function () {
    };
    SocialInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social-info',
            template: __webpack_require__(/*! ./social-info.component.html */ "./src/app/ui/user/desktop/profile/social-info/social-info.component.html"),
            styles: [__webpack_require__(/*! ./social-info.component.css */ "./src/app/ui/user/desktop/profile/social-info/social-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialInfoComponent);
    return SocialInfoComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/profile/work-exp/work-exp.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/work-exp/work-exp.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-info {\nwidth: auto;\nheight: auto;\ncolor: black;\nbackground-color: transparent;\nborder-radius: .25rem;\nborder: 1px solid #4bbcd7;\nbox-sizing: border-box;\n}\n.btn-outline-info:hover {\nbackground-color: #4bbcd7;\ncolor: #fff;\nborder-radius: .25rem;\nborder: 1px solid #4bbcd7;\nbox-sizing: border-box;\n}\n.btn-info-dif {\nbackground-color: transparent;\nborder-radius: 0px;\nborder-top-right-radius: 10px;\nborder-bottom-left-radius: 10px;\nborder: 2px solid  #4bbcd7;\nbox-sizing: border-box;\n-webkit-transition: all 0.3s;\ntransition: all 0.3s;\n}\n.btn-info-dif:hover {\nbackground-color: #4bbcd7;\ncolor: #fff;\nborder-top-right-radius: 0px;\nborder-bottom-left-radius: 0px;\nborder-top-left-radius: 10px;\nborder-bottom-right-radius: 10px;\nborder: 2px solid  #4bbcd7;\nbox-sizing: border-box;\n}\n.btn-outline-success {\nwidth: auto;\nheight: auto;\ncolor: black;\nbackground-color: transparent;\nborder-radius: .25rem;\nborder: 1px solid #18BB7C;\nbox-sizing: border-box;\n}\n.btn-outline-success:hover {\nbackground-color: #18BB7C;\ncolor: #fff;\nborder-radius: .25rem;\nborder: 1px solid #18BB7C;\nbox-sizing: border-box;\n}\n.btn-success-dif {\n  background-color: transparent;\n  border-radius: 0px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  border: 2px solid  #18BB7C;\n  box-sizing: border-box;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.btn-success-dif:hover {\n  background-color: #18BB7C;\n  color: #fff;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-top-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n  border: 2px solid  #18BB7C;\n  box-sizing: border-box;\n}\n.width-98{\n        width: 98% !important;\n}\n.text-end{\ntext-align: end;\n}\n.pad-top{\n        padding-top: 8px;\n}\n.mrg-top{\n        margin-top: 16px;\n}\n.btn-pad-right{\n        padding-right: 50px !important;\n}"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/work-exp/work-exp.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/work-exp/work-exp.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-shadow-nor\">\n    <div class=\" mar-bottom-05r border-btm-user\">\n        <h4 class=\"mar-0 pad-05r\">Experience</h4>\n    </div>\n    <div class=\"row width100 ml-0 p-3\">\n        <div class=\"col-sm-2 pr-0 pl-0\">\n            <label class=\"mt-2\">Currentsalary:</label><br><br>\n            <label class=\"mt-1\">Experience:</label><br>\n            <label class=\"mt-4\">Expectedsalary:</label>\n        </div>\n        <div class=\"col-sm-4 pl-0\">\n            <select class=\"text-show height-40x width100 p-1 border-light-gary\">\n                <option value=\"0\">Lakhs</option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6+</option>\n            </select><br><br>\n            <select class=\"text-show height-40x width100 p-1 border-light-gary\">\n                <option value=\"0\">Years</option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6+</option>\n            </select><br>\n            <select class=\"text-show height-40x width100 p-1 border-light-gary mt-3\">\n                <option value=\"0\">Lakhs</option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6+</option>\n            </select>\n        </div>\n        <div class=\"col-sm-2 pr-0\">\n            <label class=\"mt-2\">Thousends</label><br><br>\n            <label class=\"mt-1\">Months</label><br>\n            <label class=\"mt-4\">Thousends</label>\n        </div>\n        <div class=\"col-sm-4 pl-0 pr-0\">\n            <select class=\"text-show height-40x width100 p-1 border-light-gary\">\n                <option value=\"0\">Thousends</option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6+</option>\n            </select><br><br>\n            <select class=\"width100 p-1 text-show height-40x border-light-gary\">\n                <option value=\"0\">Months</option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6+</option>\n            </select><br>\n            <select class=\"text-show height-40x width100 p-1 border-light-gary mrg-top\">\n                <option value=\"0\">Thousends</option>\n                <option value=\"1\">1</option>\n                <option value=\"2\">2</option>\n                <option value=\"3\">3</option>\n                <option value=\"4\">4</option>\n                <option value=\"5\">5</option>\n                <option value=\"6\">6+</option>\n            </select>\n        </div>\n    </div>\n    <div class=\"flex justify-content-end pad-1r\">\n        <button class=\"btn btn-success-dif btn-md\">Save</button>\n    </div>\n</div>\n\n<div class=\"flex flex-col box-shadow-nor mt-1\">\n    <div class=\"border-btm-user mar-bottom-05r\">\n        <h4 class=\"mar-0 pad-05r\">Work Experience</h4>\n    </div>\n    <div class=\"pad-1r\">\n        <div class=\"row\">\n            <div class=\"row width100\">\n                <div class=\"col-sm-6 pl-5\">\n                    <span class=\"font-size14 ft-wt-bold mr-3\">WorkExperience1</span>\n                </div>\n                <div class=\"col-sm-6 text-end\">\n                    <span class=\"p-1\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> </span>\n                    <span class=\"p-1\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </div>\n            <form class=\"width100\" action=\"#\" method=\"GET\">\n                <div class=\"row pad-1r\">\n                    <div class=\"col-sm-6\">\n                        <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"\n                            placeholder=\"Employer\"><br>\n                        <label class=\"pad-05r font-size14 ft-wt-bold\">From:</label><br>\n                        <input type=\"date\" class=\"width100 pad-1-per pad-05r text-show border-light-gary\"><br><br>\n                        <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"\n                            placeholder=\"Designation\"><br>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <select class=\"pad-1-per width100 pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">EmployeStatus</option>\n                            <option value=\"#\">CurrentEmployee</option>\n                            <option value=\"#\">PreviousEmployee</option>\n                            <option value=\"#\">Others</option>\n                        </select><br>\n                        <label class=\"pad-05r font-size14 ft-wt-bold\">To:</label><br>\n                        <input type=\"date\" class=\"width100 pad-1-per pad-05r text-show border-light-gary\"><br><br>\n                        <textarea class=\" pad-05r width100 text-show border-light-gary \" rows=\"2\" type=\"text\"\n                        placeholder=\"jobProfile\"></textarea>\n                    </div>\n                </div>\n            </form>\n            <hr>\n            <div class=\"row width100\">\n                <div class=\"col-sm-6 pl-5\">\n                    <span class=\"font-size14 ft-wt-bold mr-3\">WorkExperience2</span>\n                </div>\n                <div class=\"col-sm-6 text-end\">\n                    <span class=\"p-1\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> </span>\n                    <span class=\"p-1\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </div>\n            <form class=\"width100\" action=\"#\" method=\"GET\">\n                <div class=\"row pad-1r\">\n                    <div class=\"col-sm-6\">\n                        <input type=\"text\" class=\"width100 pad-1-per pad-05r text-show border-light-gary\"\n                            placeholder=\"Employer\"><br>\n                        <label class=\"pad-05r font-size14 ft-wt-bold\">From:</label><br>\n                        <input type=\"date\" class=\"width100 pad-1-per pad-05r text-show border-light-gary\"><br><br>\n                        <input type=\"text\" class=\"width100 pad-1-per  pad-05r text-show border-light-gary\"\n                            placeholder=\"Designation\"><br>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <select class=\"pad-1-per width100 pad-05r text-show border-light-gary\">\n                            <option value=\"Institution\">EmployeStatus</option>\n                            <option value=\"#\">CurrentEmployee</option>\n                            <option value=\"#\">PreviousEmployee</option>\n                            <option value=\"#\">Others</option>\n                        </select><br>\n                        <label class=\"pad-05r font-size14 ft-wt-bold\">To:</label><br>\n                        <input type=\"date\" class=\"width100 pad-1-per pad-05r text-show border-light-gary\"><br><br>\n                        <textarea class=\" pad-05r width100 text-show border-light-gary \" rows=\"2\" type=\"text\"\n                        placeholder=\"jobProfile\"></textarea>\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"flex justify-content-bw pad-2r btn-pad-right\">\n        <button class=\"btn btn-info-dif btn-md\">Add</button>\n        <button class=\"btn btn-success-dif btn-md\">Save</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/profile/work-exp/work-exp.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/ui/user/desktop/profile/work-exp/work-exp.component.ts ***!
  \************************************************************************/
/*! exports provided: WorkExpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkExpComponent", function() { return WorkExpComponent; });
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

var WorkExpComponent = /** @class */ (function () {
    function WorkExpComponent() {
    }
    WorkExpComponent.prototype.ngOnInit = function () {
    };
    WorkExpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work-exp',
            template: __webpack_require__(/*! ./work-exp.component.html */ "./src/app/ui/user/desktop/profile/work-exp/work-exp.component.html"),
            styles: [__webpack_require__(/*! ./work-exp.component.css */ "./src/app/ui/user/desktop/profile/work-exp/work-exp.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkExpComponent);
    return WorkExpComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/quiz-results/quiz-results.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/ui/user/desktop/quiz-results/quiz-results.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui/user/desktop/quiz-results/quiz-results.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/ui/user/desktop/quiz-results/quiz-results.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pad-1r flex1  \" ng-if=\"currentPannel=='quizResults'\">\n  <div class=\"flex flex-col flex1 box-shadow \">\n    <div class=\"border-btm-user mar-bottom-05r\">\n      <h4 class=\"pad-1-per mar-0\">Quiz Results</h4>\n    </div>\n    <div class=\"pad-1r\">\n      <table class=\"cart-table-header width100 ft-open-sans-regular\">\n        <tr>\n          <th class=\"cart-table-header pad-05r\">TestName</th>\n          <th class=\"cart-table-header pad-05r\">Date</th>\n          <th class=\"cart-table-header pad-05r\">SecuredMarks</th>\n          <th class=\"cart-table-header pad-05r\">TotalMarks</th>\n\n        </tr>\n        <tr class=\" text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>HTML</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">15</td>\n          <td class=\"cart-table-row pad-05r\">20</td>\n\n        </tr>\n        <tr class=\"text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>CSS</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">12</td>\n          <td class=\"cart-table-row pad-05r\">20</td>\n        </tr>\n        <tr class=\"text-center\">\n          <td class=\"cart-table-row pad-05r\">\n            <span>Java</span>\n          </td>\n          <td class=\"cart-table-row pad-05r\">12/12/2017</td>\n          <td class=\"cart-table-row pad-05r\">20</td>\n          <td class=\"cart-table-row pad-05r\">30</td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/quiz-results/quiz-results.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/ui/user/desktop/quiz-results/quiz-results.component.ts ***!
  \************************************************************************/
/*! exports provided: QuizResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultsComponent", function() { return QuizResultsComponent; });
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

var QuizResultsComponent = /** @class */ (function () {
    function QuizResultsComponent() {
    }
    QuizResultsComponent.prototype.ngOnInit = function () {
    };
    QuizResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-results',
            template: __webpack_require__(/*! ./quiz-results.component.html */ "./src/app/ui/user/desktop/quiz-results/quiz-results.component.html"),
            styles: [__webpack_require__(/*! ./quiz-results.component.css */ "./src/app/ui/user/desktop/quiz-results/quiz-results.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuizResultsComponent);
    return QuizResultsComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/refer-friends/refer-friends.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/ui/user/desktop/refer-friends/refer-friends.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-info {\n    width: auto;\n    height: auto;\n    color: black;\n    background-color: transparent;\n    border-radius: .25rem;\n    border: 1px solid #4bbcd7;\n    box-sizing: border-box;\n  }\n  .btn-outline-info:hover {\n    background-color: #4bbcd7;\n    color: #fff;\n    border-radius: .25rem;\n    border: 1px solid #4bbcd7;\n    box-sizing: border-box;\n  }\n  .btn-info-dif {\n      background-color: transparent;\n      border-radius: 0px;\n      border-top-right-radius: 10px;\n      border-bottom-left-radius: 10px;\n      border: 2px solid  #4bbcd7;\n      box-sizing: border-box;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s;\n    }\n  .btn-info-dif:hover {\n      background-color: #4bbcd7;\n      color: #fff;\n      border-top-right-radius: 0px;\n      border-bottom-left-radius: 0px;\n      border-top-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n      border: 2px solid  #4bbcd7;\n      box-sizing: border-box;\n    }\n  .btn-outline-success {\n      width: auto;\n      height: auto;\n      color: black;\n      background-color: transparent;\n      border-radius: .25rem;\n      border: 1px solid #18BB7C;\n      box-sizing: border-box;\n    }\n  .btn-outline-success:hover {\n      background-color: #18BB7C;\n      color: #fff;\n      border-radius: .25rem;\n      border: 1px solid #18BB7C;\n      box-sizing: border-box;\n    }\n  .btn-success-dif {\n        background-color: transparent;\n        border-radius: 0px;\n        border-top-right-radius: 10px;\n        border-bottom-left-radius: 10px;\n        border: 2px solid  #18BB7C;\n        box-sizing: border-box;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s;\n      }\n  .btn-success-dif:hover {\n        background-color: #18BB7C;\n        color: #fff;\n        border-top-right-radius: 0px;\n        border-bottom-left-radius: 0px;\n        border-top-left-radius: 10px;\n        border-bottom-right-radius: 10px;\n        border: 2px solid  #18BB7C;\n        box-sizing: border-box;\n      }"

/***/ }),

/***/ "./src/app/ui/user/desktop/refer-friends/refer-friends.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/ui/user/desktop/refer-friends/refer-friends.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex1 flex flex-col pad-2-per \">\n  <div class=\"box-shadow \">\n    <div class=\"border-btm-user mar-bottom-05r\">\n      <h4 class=\"pad-1-per mar-0\">Invite your Friends</h4>\n    </div>\n    <div class=\"flex flex-col xs-pad-5\">\n      <div class=\"flex flex-row justify-content-sa\">\n        <div class=\"width-30\">\n          <input class=\"pad-1-per width-80\" type=\"text\" placeholder=\"EnterFriendName\"><br><br>\n          <input class=\"pad-1-per width-80\" type=\"text\" placeholder=\"EnterFriendName\"><br><br>\n          <input class=\"pad-1-per width-80\" type=\"text\" placeholder=\"EnterFriendName\"><br><br>\n        </div>\n        <div class=\"width-30\">\n          <input class=\"pad-1-per width-80\" type=\"text\" placeholder=\"EnterFriendEmail\"><br><br>\n          <input class=\"pad-1-per width-80\" type=\"text\" placeholder=\"EnterFriendEmail\"><br><br>\n          <input class=\"pad-1-per width-80\" type=\"text\" placeholder=\"EnterFriendEamil\">\n        </div>\n        <div class=\"width-30\">\n          <input class=\"pad-1-per width-80\" type=\"text\" placeholder=\"EnterFriendMobileNo\">\n          <span><i class=\"fa fa-window-close ml-1\" aria-hidden=\"true\"></i></span><br><br>\n          <input class=\"pad-1-per width-80\" type=\"text\" placeholder=\"EnterFriendMobileNo\">\n          <span><i class=\"fa fa-window-close ml-1\" aria-hidden=\"true\"></i></span><br><br>\n          <input class=\"pad-1-per width-80\" type=\"text\" placeholder=\"EnterFriendMobileNo\">\n          <span><i class=\"fa fa-window-close ml-1\" aria-hidden=\"true\"></i></span><br><br>\n        </div>\n      </div>\n      <div class=\"flex justify-content-bw pad-2-per\">\n        <button\n          class=\"btn btn-info-dif btn-md\">Add</button>\n        <button\n          class=\"btn btn-success-dif btn-md\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/refer-friends/refer-friends.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/ui/user/desktop/refer-friends/refer-friends.component.ts ***!
  \**************************************************************************/
/*! exports provided: ReferFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferFriendsComponent", function() { return ReferFriendsComponent; });
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

var ReferFriendsComponent = /** @class */ (function () {
    function ReferFriendsComponent() {
    }
    ReferFriendsComponent.prototype.ngOnInit = function () {
    };
    ReferFriendsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-refer-friends',
            template: __webpack_require__(/*! ./refer-friends.component.html */ "./src/app/ui/user/desktop/refer-friends/refer-friends.component.html"),
            styles: [__webpack_require__(/*! ./refer-friends.component.css */ "./src/app/ui/user/desktop/refer-friends/refer-friends.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferFriendsComponent);
    return ReferFriendsComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/settings/settings.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/ui/user/desktop/settings/settings.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-outline-info {\n    width: auto;\n    height: auto;\n    color: black;\n    background-color: transparent;\n    border-radius: .25rem;\n    border: 1px solid #4bbcd7;\n    box-sizing: border-box;\n  }\n  .btn-outline-info:hover {\n    background-color: #4bbcd7;\n    color: #fff;\n    border-radius: .25rem;\n    border: 1px solid #4bbcd7;\n    box-sizing: border-box;\n  }\n  .btn-info-dif {\n      background-color: transparent;\n      border-radius: 0px;\n      border-top-right-radius: 10px;\n      border-bottom-left-radius: 10px;\n      border: 2px solid  #4bbcd7;\n      box-sizing: border-box;\n      -webkit-transition: all 0.3s;\n      transition: all 0.3s;\n    }\n  .btn-info-dif:hover {\n      background-color: #4bbcd7;\n      color: #fff;\n      border-top-right-radius: 0px;\n      border-bottom-left-radius: 0px;\n      border-top-left-radius: 10px;\n      border-bottom-right-radius: 10px;\n      border: 2px solid  #4bbcd7;\n      box-sizing: border-box;\n    }\n  .btn-outline-success {\n      width: auto;\n      height: auto;\n      color: black;\n      background-color: transparent;\n      border-radius: .25rem;\n      border: 1px solid #18BB7C;\n      box-sizing: border-box;\n    }\n  .btn-outline-success:hover {\n      background-color: #18BB7C;\n      color: #fff;\n      border-radius: .25rem;\n      border: 1px solid #18BB7C;\n      box-sizing: border-box;\n    }\n  .btn-success-dif {\n        background-color: transparent;\n        border-radius: 0px;\n        border-top-right-radius: 10px;\n        border-bottom-left-radius: 10px;\n        border: 2px solid  #18BB7C;\n        box-sizing: border-box;\n        -webkit-transition: all 0.3s;\n        transition: all 0.3s;\n      }\n  .btn-success-dif:hover {\n        background-color: #18BB7C;\n        color: #fff;\n        border-top-right-radius: 0px;\n        border-bottom-left-radius: 0px;\n        border-top-left-radius: 10px;\n        border-bottom-right-radius: 10px;\n        border: 2px solid  #18BB7C;\n        box-sizing: border-box;\n      }\n  .radio-pad{\n        padding-left: 20px;\n      }"

/***/ }),

/***/ "./src/app/ui/user/desktop/settings/settings.component.html":
/*!******************************************************************!*\
  !*** ./src/app/ui/user/desktop/settings/settings.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"flex1 flex flex-col pad-2-per\"> -->\n  <div class=\"box-shadow\">\n    <div class=\"border-btm-user mar-bottom-05r\">\n      <h4 class=\"pad-1-per mar-0\">Show your proflie in Recruiter Portal With Visiblity on</h4>\n    </div>\n    <div class=\"flex flex-row\">\n      <div class=\"flex pad-05r\">\n        <span>Settings</span>\n      </div>\n      <div class=\"flex-row flex width-30 justify-end\">\n        <div class=\"flex pad-05r\">\n          <label class=\"quiz-container radio-pad\">On\n            <input type=\"radio\" checked=\"checked\" name=\"radio\">\n            <span class=\"checkmark\"></span>\n          </label>\n        </div>\n        <div class=\"flex pad-05r\">\n          <label class=\"quiz-container radio-pad\">Off\n            <input type=\"radio\" checked=\"checked\" name=\"radio\">\n            <span class=\"checkmark\"></span>\n          </label>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex justify-end pad-2-per\">\n      <button\n        class=\"btn btn-success-dif btn-md\">Save</button>\n    </div>\n  </div>\n<!-- </div> -->"

/***/ }),

/***/ "./src/app/ui/user/desktop/settings/settings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/ui/user/desktop/settings/settings.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
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

var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/ui/user/desktop/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/ui/user/desktop/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/ui/user/desktop/userdesktop.component.css":
/*!***********************************************************!*\
  !*** ./src/app/ui/user/desktop/userdesktop.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar1 {\n    /* background: #F17153;\n    background: -webkit-linear-gradient(#F17153, #F58D63, #f1ab53);\n    background: -o-linear-gradient(#F17153, #F58D63, #f1ab53);\n    background: -moz-linear-gradient(#F17153, #F58D63, #f1ab53);\n    background: linear-gradient(#F17153, #F58D63, #f1ab53); */\n    background: #101010;\n    /* background: linear-gradient(#6d6b6a, #444241, #0a0a0a); */\n    background: -webkit-gradient(linear, left top, left bottom, from(#0e0e0e), color-stop(#444342), to(#6b6666));\n    background: linear-gradient(#0e0e0e, #444342, #6b6666);\n    background: -moz-linear-gradient(#0e0e0e, #444342, #6b6666);\n\n\n    padding: 0px;\n    min-height: 100%;\n}\n.logo {\n    max-height: 130px;\n}\n.logo>img {\n    margin-top: 28px;\n    cursor: pointer;\n    padding: 3px;\n    border: 3px solid #b3b3b3;\n    border-radius: 100%;\n}\n.logo>img:hover{\n    opacity: 0.6;\n}\n.list {\n    color: #fff;\n    list-style: none;\n    padding-left: 0px;\n}\n.list::first-line {\n    color: rgba(255, 255, 255, 0.5);\n}\n.list> li, h5 {\n    padding: 5px 0px 5px 40px;\n}\n.list>li:hover {\n    background-color: rgba(255, 255, 255, 0.2);\n    border-left: 5px solid white;\n    color: rgb(53, 53, 53);\n    \n    /* font-weight: bolder; */\n    padding-left: 35px;\n}\n.main-content{\ntext-align:center;\n}\n.list-a{\n    text-decoration: none;\n    color: #fff;\n}\n.list-a:hover{\n    color: rgb(53, 53, 53);\n    text-decoration: none;\n}\n.menu ul li:hover {\n    background-color: #0e679b !important;\n    color: white;\n}\n/* .menu ul li.active{\n    background-color: #0e679b ;\n    color:white;\n} */\n.menu ul li:active {\n    background-color: #0e679b !important;\n    color: white !important;\n}\n.display-pic-wh{\n    width: 100px;\n    height: 100px;\n}"

/***/ }),

/***/ "./src/app/ui/user/desktop/userdesktop.component.html":
/*!************************************************************!*\
  !*** ./src/app/ui/user/desktop/userdesktop.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background bg-color-nav-blue\">\n        <div class=\"container\">\n                <div class=\"row \">\n                        <div class=\"flex flex-row bg-white width-100 xs-flex-col xs-width-100\">\n                                <div class=\"width-22 box-shadow-nor pr-0 pl-0\">\n                                        <div class=\"flex  flex-col xs-width100\">\n                                                <div class=\"flex flex-col border bg-gray-light-4\">\n                                                        <div class=\"flex justify-content-ce\">\n                                                                <div class=\"flex flex-col pad-top-9-per\">\n                                                                        <img class=\"display-pic-wh\"\n                                                                                rel=\"userPic\"\n                                                                                src=\"../../assets/images/pclogo.png\">\n                                                                </div>\n                                                        </div>\n                                                        <div class=\"flex flex-col text-center\">\n                                                                <!-- <h4>{{userProfile.userData[0].name}}</h4> -->\n                                                                <!-- <label\n                                                                        class=\"font-size14 ft-wt-bold\">{{userProfile.userData[0].email}}</label>\n                                                                <label\n                                                                        class=\"font-size14 ft-wt-bold\">{{userProfile.userData[0].moboleNo}}</label> -->\n                                                        </div>\n                                                </div>\n                                                <nav class=\"nav-menu bg-color-r\">\n                                                        <div class=\"menu\">\n                                                                <ul class=\"list-group text-inherit\">\n                                                                        <li [routerLink]=\"'/userdesktop/profile'\"\n                                                                                class=\"list-group-item bg-color-r\">\n                                                                                <span class=\"pad-left-7\">\n                                                                                        <i class=\"fa fa-pencil-square-o\"\n                                                                                                aria-hidden=\"true\"></i>\n                                                                                </span>\n                                                                                <a class=\"gray-light-1\">Update\n                                                                                        Profile</a>\n                                                                        </li>\n                                                                        <li [routerLink]=\"'/userdesktop/viewprofile'\"\n                                                                                class=\"list-group-item bg-color-r\">\n                                                                                <span class=\"pad-left-7\">\n                                                                                        <i class=\"fa fa-picture-o\"\n                                                                                                aria-hidden=\"true\"></i>\n                                                                                        <a class=\"gray-light-1 \">View\n                                                                                                Profile</a>\n                                                                                </span>\n                                                                        </li>\n                                                                        <!-- <li [routerLink]=\"'/userdesktop/perchasedcourses'\"\n                                                                                class=\"list-group-item bg-color-r\">\n                                                                                <span class=\"pad-left-7\">\n                                                                                        <i class=\"fa fa-book\"\n                                                                                                aria-hidden=\"true\"></i>\n                                                                                </span>\n                                                                                <a class=\"gray-light-1 \"\n                                                                                        >Perchasedcourses</a>\n                                                                        </li>\n                                                                        <li [routerLink]=\"'/userdesktop/mytasks'\"\n                                                                                class=\"list-group-item bg-color-r\">\n                                                                                <span class=\"pad-left-7\">\n                                                                                        <i class=\"fa fa-book\"\n                                                                                                aria-hidden=\"true\"></i>\n                                                                                </span>\n                                                                                <a class=\"gray-light-1 \" >My\n                                                                                        Tasks</a>\n                                                                        </li>\n                                                                        <li [routerLink]=\"'/userdesktop/onlinetasks'\"\n                                                                                class=\"list-group-item bg-color-r\">\n                                                                                <span class=\"pad-left-7\">\n                                                                                        <i class=\"fa fa-th-list\"\n                                                                                                aria-hidden=\"true\"></i>\n                                                                                </span>\n                                                                                <a class=\"gray-light-1 \" >Online\n                                                                                        Test</a>\n                                                                        </li>\n                                                                        <li [routerLink]=\"'/userdesktop/onlineresults'\"\n                                                                                class=\"list-group-item bg-color-r\">\n                                                                                <span class=\"pad-left-7\">\n                                                                                        <i class=\"fa fa-eye\"\n                                                                                                aria-hidden=\"true\"></i>\n                                                                                </span>\n                                                                                <a  class=\"gray-light-1 \">Online\n                                                                                        Test\n                                                                                        Results</a>\n                                                                        </li>\n                                                                        <li [routerLink]=\"'/userdesktop/quizresults'\"\n                                                                                class=\"list-group-item bg-color-r\">\n                                                                                <span class=\"pad-left-7\">\n                                                                                        <i class=\"fa fa-eye\"\n                                                                                                aria-hidden=\"true\"></i>\n                                                                                </span>\n                                                                                <a  class=\"gray-light-1 \">Quiz\n                                                                                        Results</a>\n                                                                        </li>\n                                                                        <li [routerLink]=\"'/userdesktop/bookedevents'\"\n                                                                                class=\"list-group-item bg-color-r\">\n                                                                                <span class=\"pad-left-7\">\n                                                                                        <i class=\"fa fa-calendar\"\n                                                                                                aria-hidden=\"true\"></i>\n                                                                                </span>\n                                                                                <a class=\"gray-light-1 \"\n                                                                                       >BookedEvents</a>\n                                                                        </li>\n                                                                        <li [routerLink]=\"'/userdesktop/referfriends'\"\n                                                                                class=\"list-group-item bg-color-r\">\n                                                                                <span class=\"pad-left-7\">\n                                                                                        <i class=\"fa fa-eye\"\n                                                                                                aria-hidden=\"true\"></i>\n                                                                                </span>\n                                                                                <a class=\"gray-light-1 \" >Refer\n                                                                                        Friends</a>\n                                                                        </li> -->\n                                                                        <!-- <li [routerLink]=\"'/userdesktop/settings'\"\n                                                                                class=\"list-group-item bg-color-r\">\n                                                                                <span class=\"pad-left-7\">\n                                                                                        <i class=\"fa fa-eye\"\n                                                                                                aria-hidden=\"true\"></i>\n                                                                                </span>\n                                                                                <a class=\"gray-light-1 \"\n                                                                                        >Visiblity\n                                                                                        Settings</a>\n                                                                        </li> -->\n                                                                </ul>\n                                                        </div>\n                                                </nav>\n                                        </div>\n                                </div>\n                                <div class=\"width-88 bg-gray-light-4 pl-0 pr-0\">\n                                        <router-outlet></router-outlet>\n                                </div>\n                        </div>\n                </div>\n        </div>\n</div>"

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
        this.userProfile = {};
        this.userData = new _services_user_user__WEBPACK_IMPORTED_MODULE_3__["User"]();
    }
    UserDesktopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log('UserDesktopComponent--');
            console.log(_this.userData);
        });
        this.userData = this.userService.getUserData();
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

/***/ "./src/app/ui/user/desktop/viewprofile/viewprofile.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/ui/user/desktop/viewprofile/viewprofile.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row-padding{\n    padding: 0 30px;\n}\n.img{\n    position: relative;\n    width: 100%;\n    height: 230px;\n}\n.img-radios{\n    position: absolute;\n    background-color: rgb(21, 207, 253);\n    border-radius: 50%;\n    width: 150px;\n    height: 150px;\n    left: 78%;\n    top: 134px;\n    border: 5px solid white;\n    /* padding-bottom: 10px; */\n    /* margin-bottom: 10px; */\n}\n.bg-color-r{\n    background-color: #f27c66;\n    color: white;\n}\n.content-mrg{\n    margin: 20px 20px;\n}\n.menu {\n    box-shadow: 0 0 20px 0 rgba(0,0,0,.19);\n    padding-top: 18px;\n}\n.menu ul li {\n    margin: 5px;\n    position: relative;\n    border: 1px solid transparent;\n    text-decoration: none;\n}\n.menu ul li:hover {\n    background-color: white;\n    color: black;\n}\n.content{   \n    box-shadow:  0 0 20px 4px rgba(0,0,0,0.19);\n}\n.side-content{\n    /* margin-top: 56px; */\n    padding: 6px;\n    text-align: center;\n}\n.side-hedding{\n    background-color: white;\n    color: black;\n    padding: 2px;\n    margin: 15px;\n}\n.text-decoration{\n    text-decoration: underline;\n}\n.pad-7{\n    padding: 7px;\n}\n.pad-16{\n    padding: 16px;\n}\n.mrg-14{\n    margin: 0px 14px;\n}\n.mrg-left{\n    margin-left: -6px !important;\n}\n.mrg-right8{\n    margin-right: 8px !important;\n}\n.mrg-right30{\n    margin-right: 30px !important;\n}\n.mrg-right12{\n    margin-right: 12px !important;\n}\n.text-initial{\n    text-align: initial !important;\n}\n.border-color{\n    border: 1px solid #9bd1f1c4;\n}\n"

/***/ }),

/***/ "./src/app/ui/user/desktop/viewprofile/viewprofile.component.html":
/*!************************************************************************!*\
  !*** ./src/app/ui/user/desktop/viewprofile/viewprofile.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container box-shadow-nor pr-0\">\n    <div class=\"row\">\n        <div class=\"col-sm-9 pl-0 pr-0\">\n            <div class=\"content-mrg\">\n                <div class=\"p-2  bg-color-r text-center\">PROFILE</div>\n                <div class=\"row p-3 mrg-left\">\n                    <span class=\"ml-1\">An ambitious and highly dedicated individual having around 2 years of\n                        professional experience in Software Developer with good Knowledge in QA processes and\n                        Methodologies.</span>\n                </div>\n                <!--education details-->\n                <div class=\"p-2  bg-color-r text-center\">Education Details</div>\n                <div class=\"row p-3\">\n                    <div class=\"col-sm-3\">\n                        <label\n                            class=\"p-1 font-size14 ft-wt-bold\">{{userProfile.sscDetails[0].YearOfPass}}</label><br><br>\n                        <label\n                            class=\"p-1 font-size14 ft-wt-bold mt-2\">{{userProfile.pucDetails[0].YearOfPass}}</label><br><br><br>\n                        <label\n                            class=\"p-1 font-size14 ft-wt-bold\">{{userProfile.pucDetails[0].YearOfPass}}</label><br><br><br>\n                        <label\n                            class=\"p-1 font-size14 ft-wt-bold\">{{userProfile.digreeDetails[0].YearOfPass}}</label><br>\n                    </div>\n                    <div class=\"col-sm-9\">\n                        <label class=\"font-size14 ft-wt-bold mb-0\">{{userProfile.sscDetails[0].University}}</label><br>\n                        <p>\n                            <span class=\"font-size17\">{{userProfile.sscDetails[0].Board}},</span>\n                            <span class=\"font-size17\">{{userProfile.sscDetails[0].institute}},</span>\n                            <span class=\"font-size17\">{{userProfile.sscDetails[0].Percentage}}</span>\n                        </p>\n                        <label class=\"font-size14 ft-wt-bold mb-0\">{{userProfile.pucDetails[0].University}}</label><br>\n                        <p>\n                            <span class=\"font-size17\">{{userProfile.pucDetails[0].Board}},</span>\n                            <span class=\"font-size17\">{{userProfile.pucDetails[0].institute}},</span>\n                            <span class=\"font-size17\">{{userProfile.pucDetails[0].Percentage}}</span>\n                        </p>\n                        <label\n                            class=\"font-size14 ft-wt-bold mb-0\">{{userProfile.digreeDetails[0].University}}</label><br>\n                        <p>\n                            <span class=\"font-size17\">{{userProfile.digreeDetails[0].Board}},</span>\n                            <span class=\"font-size17\">{{userProfile.digreeDetails[0].institute}},</span>\n                            <span class=\"font-size17\">{{userProfile.digreeDetails[0].Percentage}}</span>\n                        </p>\n                        <label class=\"font-size14 ft-wt-bold mb-0\">{{userProfile.pucDetails[0].University}}</label><br>\n                        <span class=\"font-size17\">{{userProfile.pucDetails[0].Board}},</span>\n                        <span class=\"font-size17\">{{userProfile.pucDetails[0].institute}},</span>\n                        <span class=\"font-size17\">{{userProfile.pucDetails[0].Percentage}}</span>\n                    </div>\n                </div>                \n                <!--employe Experience-->\n                <div class=\"p-2  bg-color-r text-center\">Employe Experience</div>\n                <div class=\"row p-3\">\n                    <div class=\"col-sm-3\">\n                        <label\n                            class=\"p-1 font-size14 ft-wt-bold\">{{userProfile.experienceDetails[0].experience}}</label><br><br>\n                        <label\n                            class=\"p-1 font-size14 ft-wt-bold\">{{userProfile.experienceDetails[0].experience}}</label>\n                    </div>\n                    <div class=\"col-sm-9\">\n                        <label\n                            class=\"font-size14 ft-wt-bold mb-0\">{{userProfile.experienceDetails[0].duration}}</label><br>\n                        <p>\n                            <span class=\"font-size17\">{{userProfile.experienceDetails[0].employer}},</span>\n                            <span class=\"font-size17\">{{userProfile.experienceDetails[0].currentstatus}},</span>\n                            <span class=\"font-size17\">{{userProfile.experienceDetails[0].designation}},</span>\n                            <span class=\"font-size17\">{{userProfile.experienceDetails[0].jobProfile}}</span>\n                        </p>\n                        <label\n                            class=\"font-size14 ft-wt-bold mb-0\">{{userProfile.experienceDetails[0].duration}}</label><br>\n                        <p>\n                            <span class=\"font-size17\">{{userProfile.experienceDetails[0].employer}},</span>\n                            <span class=\"font-size17\">{{userProfile.experienceDetails[0].currentstatus}},</span>\n                            <span class=\"font-size17\">{{userProfile.experienceDetails[0].designation}},</span>\n                            <span class=\"font-size17\">{{userProfile.experienceDetails[0].jobProfile}}</span>\n                        </p>\n\n                    </div>\n                </div>\n                <!--Projects-->\n                <div class=\"p-2  bg-color-r text-center\">Project Infromation</div>\n                <!--project 1-->\n                <div class=\"row p-3\">\n                    <div class=\"col-sm-3\">\n                        <label class=\"flex p-1\">Name:</label><br><br>\n                        <label class=\"flex p-1\">Discription:</label><br><br>\n                        <label class=\"flex p-1 \">Duration :</label>\n                        <label class=\"flex p-1 mt-3\">Responsebilites:</label>\n                        <label class=\"flex p-1 mt-3\">Domain:</label>\n                    </div>\n                    <div class=\"col-sm-9\">\n                        <div class=\"flex\">{{userProfile.projectDetails[0].Name}}</div><br>\n                        <div class=\"text-initial\">{{userProfile.projectDetails[0].Discription}}</div><br>\n                        <div class=\"flex mt-3\">{{userProfile.projectDetails[0].Duration}}</div>\n                        <div class=\"flex mt-4\">{{userProfile.projectDetails[0].Responsebilities}}</div>\n                        <div class=\"flex mt-3\">{{userProfile.projectDetails[0].Domain}}</div>\n                    </div>\n                </div>\n                <hr>\n                <!--project 2-->\n                <div class=\"row p-3\">\n                    <div class=\"col-sm-3\">\n                        <label class=\"flex p-1\">Name:</label><br><br>\n                        <label class=\"flex p-1\">Discription:</label><br><br>\n                        <label class=\"flex p-1\">Duration :</label>\n                        <label class=\"flex p-1 mt-3\">Responsebilites:</label>\n                        <label class=\"flex p-1 mt-3\">Domain:</label>\n                    </div>\n                    <div class=\"col-sm-9\">\n                        <div class=\"flex\">{{userProfile.projectDetails[0].Name}}</div><br>\n                        <div class=\"text-initial\">{{userProfile.projectDetails[0].Discription}}</div><br>\n                        <div class=\"flex mt-3\">{{userProfile.projectDetails[0].Duration}}</div>\n                        <div class=\"flex mt-4\">{{userProfile.projectDetails[0].Responsebilities}}</div>\n                        <div class=\"flex mt-3\">{{userProfile.projectDetails[0].Domain}}</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-3 box-shadow-nor pr-0 pl-0  bg-color-r\">\n            <div class=\"side-content\">                    \n                <!--Skillset-->\n                <div class=\"side-hedding mb-2\">Skillset</div>\n                <label class=\"text-decoration\">TechnicalSills :</label>\n                <div>{{userProfile.skileset[0].TechnicalSills}}</div>\n                <label class=\"text-decoration\">FrameWorks:</label>\n                <label>{{userProfile.skileset[0].FrameWorks}}</label>\n                <!--social media-->\n                <div class=\"side-hedding mb-2\">Social Media</div>\n                <label><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\n                    krish@facebook.com</label>\n                <label><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n                    krish@twitter.com</label>\n                <label><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n                    krish@instagram.com</label>\n                <!--Expectation-->\n                <div class=\"side-hedding mb-2\">Expectation</div>\n                <label class=\"mrg-right8\">Total Experience:</label>\n                <label>{{userProfile.experienceDetails[0].experience}}</label>\n                <label class=\"mrg-right30\">Currentsalary:</label>\n                <label>{{userProfile.experienceDetails[0].currentsalary}}</label>\n                <label class=\"mrg-right12\">Expectedsalary:</label>\n                <label>200000</label>\n\n\n                <!--Hobbies-->\n                <div class=\"side-hedding mb-2\">Hobbies</div>\n                <label class=\"mr-2\">\n                    <i class=\"fa fa-bicycle\" aria-hidden=\"true\"></i>\n                </label>\n                <label class=\"mr-2\">\n                    <i class=\"fa fa-book\" aria-hidden=\"true\"></i>\n                </label>\n                <label class=\"mr-2\">\n                    <i class=\"fa fa-futbol-o\" aria-hidden=\"true\"></i>\n                </label>\n                <label class=\"mr-2\">\n                    <i class=\"fa fa-paint-brush\" aria-hidden=\"true\"></i>\n                </label>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/user/desktop/viewprofile/viewprofile.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/ui/user/desktop/viewprofile/viewprofile.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewprofileComponent", function() { return ViewprofileComponent; });
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

var ViewprofileComponent = /** @class */ (function () {
    function ViewprofileComponent() {
        this.userProfile = {};
        this.pucDetails = {};
        this.sscDetails = {};
        this.digreeDetails = [];
        this.WorkExperience = [];
        this.experienceDetails = {};
        this.projectDetails = {};
    }
    ViewprofileComponent.prototype.ngOnInit = function () {
    };
    ViewprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewprofile',
            template: __webpack_require__(/*! ./viewprofile.component.html */ "./src/app/ui/user/desktop/viewprofile/viewprofile.component.html"),
            styles: [__webpack_require__(/*! ./viewprofile.component.css */ "./src/app/ui/user/desktop/viewprofile/viewprofile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewprofileComponent);
    return ViewprofileComponent;
}());



/***/ }),

/***/ "./src/app/ui/video/video.component.css":
/*!**********************************************!*\
  !*** ./src/app/ui/video/video.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a{\n    text-decoration: none;\n    color:rgb(5, 5, 5);\n    /* font-weight: bold; */\n}\niframe{\n        z-index: 5;\n        box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.5);\n}\n.design-main{\n\tmargin-left: 40%;\n\twidth: 20%;\n    height: 10px;\n    margin-top: -2.5%;    \n }\n.design-main-inside{\n\twidth:33%; \n\theight:22%; \n\tfloat: left;\n }\n.btn-info-dif {\n    background-color: transparent;\n    border-radius: 0px;\n    border-top-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n  }\n.btn-info-dif:hover {\n    background-color: #4bbcd7;\n    color: #fff;\n    border-top-right-radius: 0px;\n    border-bottom-left-radius: 0px;\n    border-top-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n    border: 2px solid  #4bbcd7;\n    box-sizing: border-box;\n  }\n.btn-info-dif:hover a {\n    text-decoration: none;\n    color: rgb(252, 252, 252);\n  }"

/***/ }),

/***/ "./src/app/ui/video/video.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/video/video.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"embed-responsive embed-responsive-16by9\" *ngIf=\"videoId !== ''\">\n  <iframe width=\"680\" height=\"450\" [src]=\"videoId | safe\" frameborder=\"0\" allowfullscreen></iframe>\n</div>\n\n\n<div class=\"design-main\" *ngIf=\"videoId !== ''\">\n  <hr>\n  <div class=\"bg-danger design-main-inside\"></div>\n  <div class=\"bg-warning design-main-inside\"></div>\n  <div class=\"bg-success design-main-inside\"></div>\n</div>\n<br>\n<div class=\"container p-0\" *ngIf=\"videoId !== ''\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <button class=\"btn btn-info-dif btn-md\">\n        <a href=\"{{projectURL}}\" target=\"_blank\">\n          Download Sample Code</a>\n      </button>\n    </div>\n    <div class=\"col\">\n      <quiz></quiz>\n    </div>\n  </div>\n</div>\n<br>\n<div>\n  <ngx-md [path]=\"textTutorialURL\" class=\"panel\"></ngx-md>\n</div>\n<!-- <div>\n  <online-editor [courseId]=\"courseId\" [sampleCode]=\"sampleCode\"></online-editor>\n</div> -->"

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

module.exports = __webpack_require__(/*! /Users/hyalamat/pc/pc_dev_workspace/pc-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map