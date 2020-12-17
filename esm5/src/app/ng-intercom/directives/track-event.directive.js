/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
var IntercomTrackEventDirective = /** @class */ (function () {
    function IntercomTrackEventDirective(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    IntercomTrackEventDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var e = this.event ? this.event : this.intercomTrackEvent;
        if (e && this.metadata) {
            this.intercom.trackEvent(e, this.metadata);
        }
        else if (e && !this.metadata) {
            this.intercom.trackEvent(e);
        }
        else {
            throw new Error('Error in intercomTrackEvent directive: You must specify an event to track.');
        }
    };
    IntercomTrackEventDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[intercomTrackEvent]'
                },] }
    ];
    /** @nocollapse */
    IntercomTrackEventDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomTrackEventDirective.propDecorators = {
        event: [{ type: Input }],
        intercomTrackEvent: [{ type: Input }],
        metadata: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomTrackEventDirective;
}());
export { IntercomTrackEventDirective };
if (false) {
    /** @type {?} */
    IntercomTrackEventDirective.prototype.event;
    /** @type {?} */
    IntercomTrackEventDirective.prototype.intercomTrackEvent;
    /** @type {?} */
    IntercomTrackEventDirective.prototype.metadata;
    /**
     * @type {?}
     * @private
     */
    IntercomTrackEventDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stZXZlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20tYW5ndWxhci0xMC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy90cmFjay1ldmVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQTtBQUU1RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sc0JBQXNCLENBQUE7O0FBRTdDO0lBUUUscUNBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUdNLDZDQUFPOzs7SUFEZDs7WUFFUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtRQUMzRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDM0M7YUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDNUI7YUFDSTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQTtTQUM5RjtJQUNILENBQUM7O2dCQXZCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtpQkFDakM7Ozs7Z0JBSk8sUUFBUTs7O3dCQU1iLEtBQUs7cUNBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUtMLFlBQVksU0FBQyxPQUFPOztJQWF2QixrQ0FBQztDQUFBLEFBeEJELElBd0JDO1NBckJZLDJCQUEyQjs7O0lBQ3RDLDRDQUFzQjs7SUFDdEIseURBQW1DOztJQUNuQywrQ0FBc0I7Ozs7O0lBRVYsK0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7SW50ZXJjb219IGZyb20gJy4uL2ludGVyY29tL2ludGVyY29tJ1xuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21UcmFja0V2ZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21UcmFja0V2ZW50RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgZXZlbnQ6IHN0cmluZ1xuICBASW5wdXQoKSBpbnRlcmNvbVRyYWNrRXZlbnQ6IHN0cmluZ1xuICBASW5wdXQoKSBtZXRhZGF0YTogYW55XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb20pIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgY29uc3QgZSA9IHRoaXMuZXZlbnQgPyB0aGlzLmV2ZW50IDogdGhpcy5pbnRlcmNvbVRyYWNrRXZlbnRcbiAgICBpZiAoZSAmJiB0aGlzLm1ldGFkYXRhKSB7XG4gICAgICB0aGlzLmludGVyY29tLnRyYWNrRXZlbnQoZSwgdGhpcy5tZXRhZGF0YSlcbiAgICB9XG4gICAgZWxzZSBpZiAoZSAmJiAhdGhpcy5tZXRhZGF0YSkge1xuICAgICAgdGhpcy5pbnRlcmNvbS50cmFja0V2ZW50KGUpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFcnJvciBpbiBpbnRlcmNvbVRyYWNrRXZlbnQgZGlyZWN0aXZlOiBZb3UgbXVzdCBzcGVjaWZ5IGFuIGV2ZW50IHRvIHRyYWNrLicpXG4gICAgfVxuICB9XG59XG4iXX0=