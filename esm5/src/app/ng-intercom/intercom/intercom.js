/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, PLATFORM_ID, Optional, isDevMode, RendererFactory2, ViewEncapsulation } from '@angular/core';
import { filter } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { IntercomConfig } from '../shared/intercom-config';
/**
 * A provider with every Intercom.JS method
 */
var Intercom = /** @class */ (function () {
    function Intercom(config, platformId, router, rendererFactory, document // Document
    ) {
        var _this = this;
        this.config = config;
        this.platformId = platformId;
        this.router = router;
        this.rendererFactory = rendererFactory;
        this.document = document;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.renderer2 = this.rendererFactory.createRenderer(this.document, {
            id: '-1',
            encapsulation: ViewEncapsulation.None,
            styles: [],
            data: {}
        });
        // Subscribe to router changes
        if (config && config.updateOnRouterChange) {
            this.router.events.pipe(filter((/**
             * @param {?} event
             * @return {?}
             */
            function (event) { return event instanceof NavigationEnd; }))).subscribe((/**
             * @param {?} event
             * @return {?}
             */
            function (event) {
                _this.update();
            }));
        }
        else if (isDevMode()) {
            console.warn("\n      Common practice in single page applications is to update whenever the route changes.\n      ng-intercom supports this functionality out of the box just set 'updateOnRouterChange' to true in your Intercom Module config.\n       This warning will not appear in production, if you choose not to use router updating.\n     ");
        }
    }
    /**
     * If you'd like to control when Intercom is loaded, you can use the 'boot' method.
     * This is useful in situations like a one-page Javascript based application where the user may not be logged in
     * when the page loads. You call this method with the standard intercomSettings object.
     */
    /**
     * If you'd like to control when Intercom is loaded, you can use the 'boot' method.
     * This is useful in situations like a one-page Javascript based application where the user may not be logged in
     * when the page loads. You call this method with the standard intercomSettings object.
     * @param {?=} intercomData
     * @return {?}
     */
    Intercom.prototype.boot = /**
     * If you'd like to control when Intercom is loaded, you can use the 'boot' method.
     * This is useful in situations like a one-page Javascript based application where the user may not be logged in
     * when the page loads. You call this method with the standard intercomSettings object.
     * @param {?=} intercomData
     * @return {?}
     */
    function (intercomData) {
        var _this = this;
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        /** @type {?} */
        var app_id = intercomData.app_id ? intercomData.app_id : this.config.appId
        // Run load and attach to window
        ;
        // Run load and attach to window
        this.loadIntercom(this.config, (/**
         * @param {?=} event
         * @return {?}
         */
        function (event) {
            // then boot the intercom js
            /** @type {?} */
            var data = tslib_1.__assign({}, intercomData, { app_id: app_id });
            return _this._callIntercom('boot', data);
        }));
    };
    /**
     * If you have the Respond product (combined with another product like Engage)
     * you should call the Intercom shutdown method to clear your users’ conversations anytime they logout
     * of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device
     * or computer will keep these conversations in the Messenger for one week.
     * This method will effectively clear out any user data that you have been passing through the JS API.
     */
    /**
     * If you have the Respond product (combined with another product like Engage)
     * you should call the Intercom shutdown method to clear your users’ conversations anytime they logout
     * of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device
     * or computer will keep these conversations in the Messenger for one week.
     * This method will effectively clear out any user data that you have been passing through the JS API.
     * @return {?}
     */
    Intercom.prototype.shutdown = /**
     * If you have the Respond product (combined with another product like Engage)
     * you should call the Intercom shutdown method to clear your users’ conversations anytime they logout
     * of your application. Otherwise, the cookie we use to track who was most recently logged in on a given device
     * or computer will keep these conversations in the Messenger for one week.
     * This method will effectively clear out any user data that you have been passing through the JS API.
     * @return {?}
     */
    function () {
        return this._callIntercom('shutdown');
    };
    /**
     * Calling the update method without any other arguments will trigger the JavaScript to look for new messages
     * that should be displayed to the current user (the one whose details are in the window.intercomSettings variable)
     * and show them if they exist.
     *
     * Calling the update method with a JSON object of user details will update those fields on the current user
     * in addition to logging an impression at the current URL and looking for new messages for the user.
     */
    /**
     * Calling the update method without any other arguments will trigger the JavaScript to look for new messages
     * that should be displayed to the current user (the one whose details are in the window.intercomSettings variable)
     * and show them if they exist.
     *
     * Calling the update method with a JSON object of user details will update those fields on the current user
     * in addition to logging an impression at the current URL and looking for new messages for the user.
     * @param {?=} data
     * @return {?}
     */
    Intercom.prototype.update = /**
     * Calling the update method without any other arguments will trigger the JavaScript to look for new messages
     * that should be displayed to the current user (the one whose details are in the window.intercomSettings variable)
     * and show them if they exist.
     *
     * Calling the update method with a JSON object of user details will update those fields on the current user
     * in addition to logging an impression at the current URL and looking for new messages for the user.
     * @param {?=} data
     * @return {?}
     */
    function (data) {
        return this._callIntercom('update', data);
    };
    /**
     * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
     */
    /**
     * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
     * @return {?}
     */
    Intercom.prototype.hide = /**
     * This will hide the main Messenger panel if it is open. It will not hide the Messenger Launcher.
     * @return {?}
     */
    function () {
        return this._callIntercom('hide');
    };
    /**
     * This will show the Messenger. If there are no conversations it will open with the new message view,
     * if there are it will open with the message list.
     *
     * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
     *
     */
    /**
     * This will show the Messenger. If there are no conversations it will open with the new message view,
     * if there are it will open with the message list.
     *
     * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
     *
     * @param {?=} message
     * @return {?}
     */
    Intercom.prototype.show = /**
     * This will show the Messenger. If there are no conversations it will open with the new message view,
     * if there are it will open with the message list.
     *
     * If a `message` parameter is supplied, it will automatically open a new message window, aliasing showNewMessage().
     *
     * @param {?=} message
     * @return {?}
     */
    function (message) {
        if (message) {
            return this.showNewMessage(message);
        }
        return this._callIntercom('show');
    };
    /**
     * To open the message window with the message list you can call `showMessages()`.
     */
    /**
     * To open the message window with the message list you can call `showMessages()`.
     * @return {?}
     */
    Intercom.prototype.showMessages = /**
     * To open the message window with the message list you can call `showMessages()`.
     * @return {?}
     */
    function () {
        return this._callIntercom('showMessages');
    };
    /**
     * To open the message window with the new message view you can call showNewMessage().
     *
     * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
     */
    /**
     * To open the message window with the new message view you can call showNewMessage().
     *
     * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
     * @param {?=} message
     * @return {?}
     */
    Intercom.prototype.showNewMessage = /**
     * To open the message window with the new message view you can call showNewMessage().
     *
     * This function takes an optional parameter that can be used to pre-populate the message composer as shown below.
     * @param {?=} message
     * @return {?}
     */
    function (message) {
        return this._callIntercom('showNewMessage', message);
    };
    /**
     * You can submit an event using the trackEvent method.
     * This will associate the event with the currently logged in user and send it to Intercom.
     * The final parameter is a map that can be used to send optional metadata about the event.
     *
     * You can also add custom information to events in the form of event metadata.
     */
    /**
     * You can submit an event using the trackEvent method.
     * This will associate the event with the currently logged in user and send it to Intercom.
     * The final parameter is a map that can be used to send optional metadata about the event.
     *
     * You can also add custom information to events in the form of event metadata.
     * @param {?} eventName
     * @param {?=} metadata
     * @return {?}
     */
    Intercom.prototype.trackEvent = /**
     * You can submit an event using the trackEvent method.
     * This will associate the event with the currently logged in user and send it to Intercom.
     * The final parameter is a map that can be used to send optional metadata about the event.
     *
     * You can also add custom information to events in the form of event metadata.
     * @param {?} eventName
     * @param {?=} metadata
     * @return {?}
     */
    function (eventName, metadata) {
        return this._callIntercom('trackEvent', eventName, metadata);
    };
    /**
     * A visitor is someone who goes to your site but does not use the messenger.
     * You can track these visitors via the visitor user_id.
     * This user_id can be used to retrieve the visitor or lead through the REST API.
     */
    /**
     * A visitor is someone who goes to your site but does not use the messenger.
     * You can track these visitors via the visitor user_id.
     * This user_id can be used to retrieve the visitor or lead through the REST API.
     * @return {?}
     */
    Intercom.prototype.getVisitorId = /**
     * A visitor is someone who goes to your site but does not use the messenger.
     * You can track these visitors via the visitor user_id.
     * This user_id can be used to retrieve the visitor or lead through the REST API.
     * @return {?}
     */
    function () {
        return this._callIntercom('getVisitorId');
    };
    Object.defineProperty(Intercom.prototype, "visitorId", {
        /**
         * Alias for getVisitorId()
         * @alias getVisitorId()
         * @readonly
         */
        get: /**
         * Alias for getVisitorId()
         * \@alias getVisitorId()
         * \@readonly
         * @return {?}
         */
        function () {
            return this._callIntercom('getVisitorId');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Gives you the ability to hook into the show event. Requires a function argument.
     */
    /**
     * Gives you the ability to hook into the show event. Requires a function argument.
     * @param {?} handler
     * @return {?}
     */
    Intercom.prototype.onShow = /**
     * Gives you the ability to hook into the show event. Requires a function argument.
     * @param {?} handler
     * @return {?}
     */
    function (handler) {
        return this._callIntercom('onShow', handler);
    };
    /**
     * Gives you the ability to hook into the hide event. Requires a function argument.
     */
    /**
     * Gives you the ability to hook into the hide event. Requires a function argument.
     * @param {?} handler
     * @return {?}
     */
    Intercom.prototype.onHide = /**
     * Gives you the ability to hook into the hide event. Requires a function argument.
     * @param {?} handler
     * @return {?}
     */
    function (handler) {
        return this._callIntercom('onHide', handler);
    };
    /**
     * This method allows you to register a function that will be called when the current number of unread messages changes.
     */
    /**
     * This method allows you to register a function that will be called when the current number of unread messages changes.
     * @param {?} handler
     * @return {?}
     */
    Intercom.prototype.onUnreadCountChange = /**
     * This method allows you to register a function that will be called when the current number of unread messages changes.
     * @param {?} handler
     * @return {?}
     */
    function (handler) {
        return this._callIntercom('onUnreadCountChange', handler);
    };
    /**
     * If you would like to trigger a tour based on an action a user or visitor takes in your site or application,
     * ou can use this API method. You need to call this method with the id of the tour you wish to show. The id of
     * the tour can be found in the “Use tour everywhere” section of the tour editor.
     *
     * Please note that tours shown via this API must be published and the “Use tour everywhere” section must be
     * turned on. If you're calling this API using an invalid tour id, nothing will happen.
     */
    /**
     * If you would like to trigger a tour based on an action a user or visitor takes in your site or application,
     * ou can use this API method. You need to call this method with the id of the tour you wish to show. The id of
     * the tour can be found in the “Use tour everywhere” section of the tour editor.
     *
     * Please note that tours shown via this API must be published and the “Use tour everywhere” section must be
     * turned on. If you're calling this API using an invalid tour id, nothing will happen.
     * @param {?} tourId
     * @return {?}
     */
    Intercom.prototype.startTour = /**
     * If you would like to trigger a tour based on an action a user or visitor takes in your site or application,
     * ou can use this API method. You need to call this method with the id of the tour you wish to show. The id of
     * the tour can be found in the “Use tour everywhere” section of the tour editor.
     *
     * Please note that tours shown via this API must be published and the “Use tour everywhere” section must be
     * turned on. If you're calling this API using an invalid tour id, nothing will happen.
     * @param {?} tourId
     * @return {?}
     */
    function (tourId) {
        return this._callIntercom('startTour', tourId);
    };
    /**
     * Private handler to run Intercom methods safely
     */
    /**
     * Private handler to run Intercom methods safely
     * @private
     * @param {?} fn
     * @param {...?} args
     * @return {?}
     */
    Intercom.prototype._callIntercom = /**
     * Private handler to run Intercom methods safely
     * @private
     * @param {?} fn
     * @param {...?} args
     * @return {?}
     */
    function (fn) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        if (((/** @type {?} */ (window))).Intercom) {
            return ((/** @type {?} */ (window))).Intercom.apply(((/** @type {?} */ (window))), tslib_1.__spread([fn], args));
        }
        return;
    };
    /**
     * @param {?} conf
     * @param {?} afterInjectCallback
     * @return {?}
     */
    Intercom.prototype.injectIntercomScript = /**
     * @param {?} conf
     * @param {?} afterInjectCallback
     * @return {?}
     */
    function (conf, afterInjectCallback) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        // Set the window configuration to conf
        ((/** @type {?} */ (window))).intercomSettings = conf;
        // Create the intercom script in document
        /** @type {?} */
        var s = this.document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = "https://widget.intercom.io/widget/" + this.id;
        if (((/** @type {?} */ (s))).attachEvent) {
            ((/** @type {?} */ (s))).attachEvent('onload', afterInjectCallback);
        }
        else {
            s.addEventListener('load', afterInjectCallback, false);
        }
        if (this.renderer2 && this.renderer2.appendChild) {
            this.renderer2.appendChild(this.document.head, s);
        }
        ((/** @type {?} */ (window))).Intercom('update', conf);
    };
    /**
     * @param {?} config
     * @param {?} afterLoadCallback
     * @return {?}
     */
    Intercom.prototype.loadIntercom = /**
     * @param {?} config
     * @param {?} afterLoadCallback
     * @return {?}
     */
    function (config, afterLoadCallback) {
        if (!isPlatformBrowser(this.platformId)) {
            return;
        }
        this.id = config.appId;
        /** @type {?} */
        var w = (/** @type {?} */ (window));
        /** @type {?} */
        var ic = w.Intercom
        // Set window config for Intercom
        ;
        // Set window config for Intercom
        w.intercomSettings = config;
        if (typeof ic === 'function') {
            ic('reattach_activator');
            ic('update', config);
            afterLoadCallback();
        }
        else {
            /** @type {?} */
            var i_1 = (/**
             * @return {?}
             */
            function () {
                i_1.c(arguments);
            });
            i_1.q = [];
            i_1.c = (/**
             * @param {?} args
             * @return {?}
             */
            function (args) {
                i_1.q.push(args);
            });
            w.Intercom = i_1;
            this.injectIntercomScript(config, afterLoadCallback);
        }
    };
    Intercom.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    Intercom.ctorParameters = function () { return [
        { type: IntercomConfig, decorators: [{ type: Inject, args: [IntercomConfig,] }] },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: Router, decorators: [{ type: Optional }, { type: Inject, args: [Router,] }] },
        { type: RendererFactory2 },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return Intercom;
}());
export { Intercom };
if (false) {
    /**
     * @type {?}
     * @private
     */
    Intercom.prototype.id;
    /**
     * @type {?}
     * @private
     */
    Intercom.prototype.renderer2;
    /**
     * @type {?}
     * @private
     */
    Intercom.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    Intercom.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    Intercom.prototype.router;
    /**
     * @type {?}
     * @private
     */
    Intercom.prototype.rendererFactory;
    /**
     * @type {?}
     * @private
     */
    Intercom.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjb20uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS1hbmd1bGFyLTEwLyIsInNvdXJjZXMiOlsic3JjL2FwcC9uZy1pbnRlcmNvbS9pbnRlcmNvbS9pbnRlcmNvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFhLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3BJLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTtBQUN2QyxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFBO0FBQ3ZELE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQTtBQUU3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUE7Ozs7QUFNMUQ7SUFPRSxrQkFDa0MsTUFBc0IsRUFDdkIsVUFBa0IsRUFDYixNQUFjLEVBQzFDLGVBQWlDLEVBQ0gsUUFBYSxDQUFDLFdBQVc7O1FBTGpFLGlCQWdDQztRQS9CaUMsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdkIsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQUNiLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDMUMsb0JBQWUsR0FBZixlQUFlLENBQWtCO1FBQ0gsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUduRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3ZDLE9BQU07U0FDUDtRQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsRSxFQUFFLEVBQUUsSUFBSTtZQUNSLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLE1BQU0sRUFBRSxF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QUFuUUQsSUFtUUM7U0FsUVksUUFBUTs7Ozs7O0lBRW5CLHNCQUFrQjs7Ozs7SUFFbEIsNkJBQTRCOzs7OztJQUcxQiwwQkFBc0Q7Ozs7O0lBQ3RELDhCQUFpRDs7Ozs7SUFDakQsMEJBQWtEOzs7OztJQUNsRCxtQ0FBeUM7Ozs7O0lBQ3pDLDRCQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQsIE9wdGlvbmFsLCBpc0Rldk1vZGUsIFJlbmRlcmVyMiwgUmVuZGVyZXJGYWN0b3J5MiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnXG5pbXBvcnQgeyBSb3V0ZXIsIE5hdmlnYXRpb25FbmQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5cbmltcG9ydCB7IEludGVyY29tQ29uZmlnIH0gZnJvbSAnLi4vc2hhcmVkL2ludGVyY29tLWNvbmZpZydcbmltcG9ydCB7IEJvb3RJbnB1dCB9IGZyb20gJy4uL3R5cGVzL2Jvb3QtaW5wdXQnXG5cbi8qKlxuICogQSBwcm92aWRlciB3aXRoIGV2ZXJ5IEludGVyY29tLkpTIG1ldGhvZFxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW50ZXJjb20ge1xuXG4gIHByaXZhdGUgaWQ6IHN0cmluZ1xuXG4gIHByaXZhdGUgcmVuZGVyZXIyOiBSZW5kZXJlcjJcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEludGVyY29tQ29uZmlnKSBwcml2YXRlIGNvbmZpZzogSW50ZXJjb21Db25maWcsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IE9iamVjdCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KFJvdXRlcikgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkgLy8gRG9jdW1lbnRcblxuICApIHtcbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIyID0gdGhpcy5yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIodGhpcy5kb2N1bWVudCwge1xuICAgICAgaWQ6ICctMScsXG4gICAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgICAgc3R5bGVzOiBbXSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfSlcblxuICAgIC8vIFN1YnNjcmliZSB0byByb3V0ZXIgY2hhbmdlc1xuICAgIGlmIChjb25maWcgJiYgY29uZmlnLnVwZGF0ZU9uUm91dGVyQ2hhbmdlKSB7XG4gICAgICB0aGlzLnJvdXRlci5ldmVudHMucGlwZShmaWx0ZXIoZXZlbnQgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGUoKVxuICAgICAgfSlcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgXG4gICAgICBDb21tb24gcHJhY3RpY2UgaW4gc2luZ2xlIHBhZ2UgYXBwbGljYXRpb25zIGlzIHRvIHVwZGF0ZSB3aGVuZXZlciB0aGUgcm91dGUgY2hhbmdlcy5cbiAgICAgIG5nLWludGVyY29tIHN1cHBvcnRzIHRoaXMgZnVuY3Rpb25hbGl0eSBvdXQgb2YgdGhlIGJveCBqdXN0IHNldCAndXBkYXRlT25Sb3V0ZXJDaGFuZ2UnIHRvIHRydWUgaW4geW91ciBJbnRlcmNvbSBNb2R1bGUgY29uZmlnLlxuICAgICAgIFRoaXMgd2FybmluZyB3aWxsIG5vdCBhcHBlYXIgaW4gcHJvZHVjdGlvbiwgaWYgeW91IGNob29zZSBub3QgdG8gdXNlIHJvdXRlciB1cGRhdGluZy5cbiAgICAgYClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWYgeW91J2QgbGlrZSB0byBjb250cm9sIHdoZW4gSW50ZXJjb20gaXMgbG9hZGVkLCB5b3UgY2FuIHVzZSB0aGUgJ2Jvb3QnIG1ldGhvZC5cbiAgICogVGhpcyBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyBsaWtlIGEgb25lLXBhZ2UgSmF2YXNjcmlwdCBiYXNlZCBhcHBsaWNhdGlvbiB3aGVyZSB0aGUgdXNlciBtYXkgbm90IGJlIGxvZ2dlZCBpblxuICAgKiB3aGVuIHRoZSBwYWdlIGxvYWRzLiBZb3UgY2FsbCB0aGlzIG1ldGhvZCB3aXRoIHRoZSBzdGFuZGFyZCBpbnRlcmNvbVNldHRpbmdzIG9iamVjdC5cbiAgICovXG4gIHB1YmxpYyBib290KGludGVyY29tRGF0YT86IEJvb3RJbnB1dCk6IHZvaWQge1xuICAgIGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IGFwcF9pZCA9IGludGVyY29tRGF0YS5hcHBfaWQgPyBpbnRlcmNvbURhdGEuYXBwX2lkIDogdGhpcy5jb25maWcuYXBwSWRcbiAgICAvLyBSdW4gbG9hZCBhbmQgYXR0YWNoIHRvIHdpbmRvd1xuICAgIHRoaXMubG9hZEludGVyY29tKHRoaXMuY29uZmlnLCAoZXZlbnQ/OiBFdmVudCkgPT4ge1xuICAgICAgLy8gdGhlbiBib290IHRoZSBpbnRlcmNvbSBqc1xuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgLi4uaW50ZXJjb21EYXRhLFxuICAgICAgICBhcHBfaWRcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2NhbGxJbnRlcmNvbSgnYm9vdCcsIGRhdGEpXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB5b3UgaGF2ZSB0aGUgUmVzcG9uZCBwcm9kdWN0IChjb21iaW5lZCB3aXRoIGFub3RoZXIgcHJvZHVjdCBsaWtlIEVuZ2FnZSlcbiAgICogeW91IHNob3VsZCBjYWxsIHRoZSBJbnRlcmNvbSBzaHV0ZG93biBtZXRob2QgdG8gY2xlYXIgeW91ciB1c2Vyc+KAmSBjb252ZXJzYXRpb25zIGFueXRpbWUgdGhleSBsb2dvdXRcbiAgICogb2YgeW91ciBhcHBsaWNhdGlvbi4gT3RoZXJ3aXNlLCB0aGUgY29va2llIHdlIHVzZSB0byB0cmFjayB3aG8gd2FzIG1vc3QgcmVjZW50bHkgbG9nZ2VkIGluIG9uIGEgZ2l2ZW4gZGV2aWNlXG4gICAqIG9yIGNvbXB1dGVyIHdpbGwga2VlcCB0aGVzZSBjb252ZXJzYXRpb25zIGluIHRoZSBNZXNzZW5nZXIgZm9yIG9uZSB3ZWVrLlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGVmZmVjdGl2ZWx5IGNsZWFyIG91dCBhbnkgdXNlciBkYXRhIHRoYXQgeW91IGhhdmUgYmVlbiBwYXNzaW5nIHRocm91Z2ggdGhlIEpTIEFQSS5cbiAgICovXG4gIHB1YmxpYyBzaHV0ZG93bigpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEludGVyY29tKCdzaHV0ZG93bicpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGluZyB0aGUgdXBkYXRlIG1ldGhvZCB3aXRob3V0IGFueSBvdGhlciBhcmd1bWVudHMgd2lsbCB0cmlnZ2VyIHRoZSBKYXZhU2NyaXB0IHRvIGxvb2sgZm9yIG5ldyBtZXNzYWdlc1xuICAgKiB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQgdG8gdGhlIGN1cnJlbnQgdXNlciAodGhlIG9uZSB3aG9zZSBkZXRhaWxzIGFyZSBpbiB0aGUgd2luZG93LmludGVyY29tU2V0dGluZ3MgdmFyaWFibGUpXG4gICAqIGFuZCBzaG93IHRoZW0gaWYgdGhleSBleGlzdC5cbiAgICpcbiAgICogQ2FsbGluZyB0aGUgdXBkYXRlIG1ldGhvZCB3aXRoIGEgSlNPTiBvYmplY3Qgb2YgdXNlciBkZXRhaWxzIHdpbGwgdXBkYXRlIHRob3NlIGZpZWxkcyBvbiB0aGUgY3VycmVudCB1c2VyXG4gICAqIGluIGFkZGl0aW9uIHRvIGxvZ2dpbmcgYW4gaW1wcmVzc2lvbiBhdCB0aGUgY3VycmVudCBVUkwgYW5kIGxvb2tpbmcgZm9yIG5ldyBtZXNzYWdlcyBmb3IgdGhlIHVzZXIuXG4gICAqL1xuICBwdWJsaWMgdXBkYXRlKGRhdGE/OiBhbnkpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEludGVyY29tKCd1cGRhdGUnLCBkYXRhKVxuXG4gIH1cblxuICAvKipcbiAgICogVGhpcyB3aWxsIGhpZGUgdGhlIG1haW4gTWVzc2VuZ2VyIHBhbmVsIGlmIGl0IGlzIG9wZW4uIEl0IHdpbGwgbm90IGhpZGUgdGhlIE1lc3NlbmdlciBMYXVuY2hlci5cbiAgICovXG4gIHB1YmxpYyBoaWRlKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oJ2hpZGUnKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBzaG93IHRoZSBNZXNzZW5nZXIuIElmIHRoZXJlIGFyZSBubyBjb252ZXJzYXRpb25zIGl0IHdpbGwgb3BlbiB3aXRoIHRoZSBuZXcgbWVzc2FnZSB2aWV3LFxuICAgKiBpZiB0aGVyZSBhcmUgaXQgd2lsbCBvcGVuIHdpdGggdGhlIG1lc3NhZ2UgbGlzdC5cbiAgICpcbiAgICogSWYgYSBgbWVzc2FnZWAgcGFyYW1ldGVyIGlzIHN1cHBsaWVkLCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgb3BlbiBhIG5ldyBtZXNzYWdlIHdpbmRvdywgYWxpYXNpbmcgc2hvd05ld01lc3NhZ2UoKS5cbiAgICpcbiAgICovXG4gIHB1YmxpYyBzaG93KG1lc3NhZ2U/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAobWVzc2FnZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd05ld01lc3NhZ2UobWVzc2FnZSlcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxJbnRlcmNvbSgnc2hvdycpXG5cbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBvcGVuIHRoZSBtZXNzYWdlIHdpbmRvdyB3aXRoIHRoZSBtZXNzYWdlIGxpc3QgeW91IGNhbiBjYWxsIGBzaG93TWVzc2FnZXMoKWAuXG4gICAqL1xuICBwdWJsaWMgc2hvd01lc3NhZ2VzKCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oJ3Nob3dNZXNzYWdlcycpXG4gIH1cblxuICAvKipcbiAgICogVG8gb3BlbiB0aGUgbWVzc2FnZSB3aW5kb3cgd2l0aCB0aGUgbmV3IG1lc3NhZ2UgdmlldyB5b3UgY2FuIGNhbGwgc2hvd05ld01lc3NhZ2UoKS5cbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiB0YWtlcyBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBjYW4gYmUgdXNlZCB0byBwcmUtcG9wdWxhdGUgdGhlIG1lc3NhZ2UgY29tcG9zZXIgYXMgc2hvd24gYmVsb3cuXG4gICAqL1xuICBwdWJsaWMgc2hvd05ld01lc3NhZ2UobWVzc2FnZT86IHN0cmluZyk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oJ3Nob3dOZXdNZXNzYWdlJywgbWVzc2FnZSlcblxuICB9XG5cbiAgLyoqXG4gICAqIFlvdSBjYW4gc3VibWl0IGFuIGV2ZW50IHVzaW5nIHRoZSB0cmFja0V2ZW50IG1ldGhvZC5cbiAgICogVGhpcyB3aWxsIGFzc29jaWF0ZSB0aGUgZXZlbnQgd2l0aCB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB1c2VyIGFuZCBzZW5kIGl0IHRvIEludGVyY29tLlxuICAgKiBUaGUgZmluYWwgcGFyYW1ldGVyIGlzIGEgbWFwIHRoYXQgY2FuIGJlIHVzZWQgdG8gc2VuZCBvcHRpb25hbCBtZXRhZGF0YSBhYm91dCB0aGUgZXZlbnQuXG4gICAqXG4gICAqIFlvdSBjYW4gYWxzbyBhZGQgY3VzdG9tIGluZm9ybWF0aW9uIHRvIGV2ZW50cyBpbiB0aGUgZm9ybSBvZiBldmVudCBtZXRhZGF0YS5cbiAgICovXG4gIHB1YmxpYyB0cmFja0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBtZXRhZGF0YT86IGFueSk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oJ3RyYWNrRXZlbnQnLCBldmVudE5hbWUsIG1ldGFkYXRhKVxuICB9XG5cblxuICAvKipcbiAgICogQSB2aXNpdG9yIGlzIHNvbWVvbmUgd2hvIGdvZXMgdG8geW91ciBzaXRlIGJ1dCBkb2VzIG5vdCB1c2UgdGhlIG1lc3Nlbmdlci5cbiAgICogWW91IGNhbiB0cmFjayB0aGVzZSB2aXNpdG9ycyB2aWEgdGhlIHZpc2l0b3IgdXNlcl9pZC5cbiAgICogVGhpcyB1c2VyX2lkIGNhbiBiZSB1c2VkIHRvIHJldHJpZXZlIHRoZSB2aXNpdG9yIG9yIGxlYWQgdGhyb3VnaCB0aGUgUkVTVCBBUEkuXG4gICAqL1xuICBwdWJsaWMgZ2V0VmlzaXRvcklkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2NhbGxJbnRlcmNvbSgnZ2V0VmlzaXRvcklkJylcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGlhcyBmb3IgZ2V0VmlzaXRvcklkKClcbiAgICogQGFsaWFzIGdldFZpc2l0b3JJZCgpXG4gICAqIEByZWFkb25seVxuICAgKi9cbiAgZ2V0IHZpc2l0b3JJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oJ2dldFZpc2l0b3JJZCcpXG4gIH1cblxuICAvKipcbiAgICogR2l2ZXMgeW91IHRoZSBhYmlsaXR5IHRvIGhvb2sgaW50byB0aGUgc2hvdyBldmVudC4gUmVxdWlyZXMgYSBmdW5jdGlvbiBhcmd1bWVudC5cbiAgICovXG4gIHB1YmxpYyBvblNob3coaGFuZGxlcjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oJ29uU2hvdycsIGhhbmRsZXIpXG4gIH1cblxuICAvKipcbiAgICogR2l2ZXMgeW91IHRoZSBhYmlsaXR5IHRvIGhvb2sgaW50byB0aGUgaGlkZSBldmVudC4gUmVxdWlyZXMgYSBmdW5jdGlvbiBhcmd1bWVudC5cbiAgICovXG4gIHB1YmxpYyBvbkhpZGUoaGFuZGxlcjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oJ29uSGlkZScsIGhhbmRsZXIpXG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgYWxsb3dzIHlvdSB0byByZWdpc3RlciBhIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgY3VycmVudCBudW1iZXIgb2YgdW5yZWFkIG1lc3NhZ2VzIGNoYW5nZXMuXG4gICAqL1xuICBwdWJsaWMgb25VbnJlYWRDb3VudENoYW5nZShoYW5kbGVyOiAodW5yZWFkQ291bnQ/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsbEludGVyY29tKCdvblVucmVhZENvdW50Q2hhbmdlJywgaGFuZGxlcilcbiAgfVxuXG4gIC8qKlxuICAgKiBJZiB5b3Ugd291bGQgbGlrZSB0byB0cmlnZ2VyIGEgdG91ciBiYXNlZCBvbiBhbiBhY3Rpb24gYSB1c2VyIG9yIHZpc2l0b3IgdGFrZXMgaW4geW91ciBzaXRlIG9yIGFwcGxpY2F0aW9uLCBcbiAgICogb3UgY2FuIHVzZSB0aGlzIEFQSSBtZXRob2QuIFlvdSBuZWVkIHRvIGNhbGwgdGhpcyBtZXRob2Qgd2l0aCB0aGUgaWQgb2YgdGhlIHRvdXIgeW91IHdpc2ggdG8gc2hvdy4gVGhlIGlkIG9mIFxuICAgKiB0aGUgdG91ciBjYW4gYmUgZm91bmQgaW4gdGhlIOKAnFVzZSB0b3VyIGV2ZXJ5d2hlcmXigJ0gc2VjdGlvbiBvZiB0aGUgdG91ciBlZGl0b3IuXG4gICAqXG4gICAqIFBsZWFzZSBub3RlIHRoYXQgdG91cnMgc2hvd24gdmlhIHRoaXMgQVBJIG11c3QgYmUgcHVibGlzaGVkIGFuZCB0aGUg4oCcVXNlIHRvdXIgZXZlcnl3aGVyZeKAnSBzZWN0aW9uIG11c3QgYmUgXG4gICAqIHR1cm5lZCBvbi4gSWYgeW91J3JlIGNhbGxpbmcgdGhpcyBBUEkgdXNpbmcgYW4gaW52YWxpZCB0b3VyIGlkLCBub3RoaW5nIHdpbGwgaGFwcGVuLlxuICAgKi9cbiAgcHVibGljIHN0YXJ0VG91cih0b3VySWQ6IG51bWJlcik6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLl9jYWxsSW50ZXJjb20oJ3N0YXJ0VG91cicsIHRvdXJJZClcbiAgfVxuXG4gIC8qKlxuICAgKiBQcml2YXRlIGhhbmRsZXIgdG8gcnVuIEludGVyY29tIG1ldGhvZHMgc2FmZWx5XG4gICAqL1xuICBwcml2YXRlIF9jYWxsSW50ZXJjb20oZm46IHN0cmluZywgLi4uYXJncykge1xuICAgIGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGlmICgoPGFueT53aW5kb3cpLkludGVyY29tKSB7XG4gICAgICByZXR1cm4gKDxhbnk+d2luZG93KS5JbnRlcmNvbShmbiwgLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICBpbmplY3RJbnRlcmNvbVNjcmlwdChjb25mOiBJbnRlcmNvbUNvbmZpZywgYWZ0ZXJJbmplY3RDYWxsYmFjazogKGV2OiBFdmVudCkgPT4gYW55KTogdm9pZCB7XG5cbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFNldCB0aGUgd2luZG93IGNvbmZpZ3VyYXRpb24gdG8gY29uZlxuICAgICg8YW55PndpbmRvdykuaW50ZXJjb21TZXR0aW5ncyA9IGNvbmZcblxuICAgIC8vIENyZWF0ZSB0aGUgaW50ZXJjb20gc2NyaXB0IGluIGRvY3VtZW50XG4gICAgY29uc3QgcyA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICBzLnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0J1xuICAgIHMuYXN5bmMgPSB0cnVlXG4gICAgcy5zcmMgPSBgaHR0cHM6Ly93aWRnZXQuaW50ZXJjb20uaW8vd2lkZ2V0LyR7dGhpcy5pZH1gXG5cbiAgICBpZiAoKHMgYXMgYW55KS5hdHRhY2hFdmVudCkge1xuICAgICAgKHMgYXMgYW55KS5hdHRhY2hFdmVudCgnb25sb2FkJywgYWZ0ZXJJbmplY3RDYWxsYmFjaylcbiAgICB9IGVsc2Uge1xuICAgICAgcy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgYWZ0ZXJJbmplY3RDYWxsYmFjaywgZmFsc2UpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVuZGVyZXIyICYmIHRoaXMucmVuZGVyZXIyLmFwcGVuZENoaWxkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyMi5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmhlYWQsIHMpXG4gICAgfVxuXG4gICAgKDxhbnk+d2luZG93KS5JbnRlcmNvbSgndXBkYXRlJywgY29uZilcbiAgfVxuXG4gIGxvYWRJbnRlcmNvbShjb25maWc6IEludGVyY29tQ29uZmlnLCBhZnRlckxvYWRDYWxsYmFjazogKGV2PzogRXZlbnQpID0+IGFueSk6IHZvaWQge1xuICAgIGlmICghaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5pZCA9IGNvbmZpZy5hcHBJZFxuICAgIGNvbnN0IHcgPSA8YW55PndpbmRvd1xuICAgIGNvbnN0IGljID0gdy5JbnRlcmNvbVxuXG4gICAgLy8gU2V0IHdpbmRvdyBjb25maWcgZm9yIEludGVyY29tXG4gICAgdy5pbnRlcmNvbVNldHRpbmdzID0gY29uZmlnXG5cbiAgICBpZiAodHlwZW9mIGljID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBpYygncmVhdHRhY2hfYWN0aXZhdG9yJylcbiAgICAgIGljKCd1cGRhdGUnLCBjb25maWcpXG4gICAgICBhZnRlckxvYWRDYWxsYmFjaygpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGk6IGFueSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaS5jKGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICAgIGkucSA9IFtdXG4gICAgICBpLmMgPSBmdW5jdGlvbiAoYXJnczogYW55KSB7XG4gICAgICAgIGkucS5wdXNoKGFyZ3MpXG4gICAgICB9XG4gICAgICB3LkludGVyY29tID0gaVxuICAgICAgdGhpcy5pbmplY3RJbnRlcmNvbVNjcmlwdChjb25maWcsIGFmdGVyTG9hZENhbGxiYWNrKVxuICAgIH1cblxuICB9XG59XG4iXX0=