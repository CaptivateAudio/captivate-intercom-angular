/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomTrackEventDirective {
    /**
     * @param {?} intercom
     */
    constructor(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    onClick() {
        /** @type {?} */
        const e = this.event ? this.event : this.intercomTrackEvent;
        if (e && this.metadata) {
            this.intercom.trackEvent(e, this.metadata);
        }
        else if (e && !this.metadata) {
            this.intercom.trackEvent(e);
        }
        else {
            throw new Error('Error in intercomTrackEvent directive: You must specify an event to track.');
        }
    }
}
IntercomTrackEventDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomTrackEvent]'
            },] }
];
/** @nocollapse */
IntercomTrackEventDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomTrackEventDirective.propDecorators = {
    event: [{ type: Input }],
    intercomTrackEvent: [{ type: Input }],
    metadata: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhY2stZXZlbnQuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20tYW5ndWxhci0xMC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy90cmFjay1ldmVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQTtBQUU1RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sc0JBQXNCLENBQUE7O0FBSzdDLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFLdEMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7O0lBR00sT0FBTzs7Y0FDTixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQjtRQUMzRCxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDM0M7YUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUE7U0FDNUI7YUFDSTtZQUNILE1BQU0sSUFBSSxLQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQTtTQUM5RjtJQUNILENBQUM7OztZQXZCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjthQUNqQzs7OztZQUpPLFFBQVE7OztvQkFNYixLQUFLO2lDQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFLTCxZQUFZLFNBQUMsT0FBTzs7OztJQVByQiw0Q0FBc0I7O0lBQ3RCLHlEQUFtQzs7SUFDbkMsK0NBQXNCOzs7OztJQUVWLCtDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge0ludGVyY29tfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ludGVyY29tVHJhY2tFdmVudF0nXG59KVxuZXhwb3J0IGNsYXNzIEludGVyY29tVHJhY2tFdmVudERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGV2ZW50OiBzdHJpbmdcbiAgQElucHV0KCkgaW50ZXJjb21UcmFja0V2ZW50OiBzdHJpbmdcbiAgQElucHV0KCkgbWV0YWRhdGE6IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGUgPSB0aGlzLmV2ZW50ID8gdGhpcy5ldmVudCA6IHRoaXMuaW50ZXJjb21UcmFja0V2ZW50XG4gICAgaWYgKGUgJiYgdGhpcy5tZXRhZGF0YSkge1xuICAgICAgdGhpcy5pbnRlcmNvbS50cmFja0V2ZW50KGUsIHRoaXMubWV0YWRhdGEpXG4gICAgfVxuICAgIGVsc2UgaWYgKGUgJiYgIXRoaXMubWV0YWRhdGEpIHtcbiAgICAgIHRoaXMuaW50ZXJjb20udHJhY2tFdmVudChlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgaW4gaW50ZXJjb21UcmFja0V2ZW50IGRpcmVjdGl2ZTogWW91IG11c3Qgc3BlY2lmeSBhbiBldmVudCB0byB0cmFjay4nKVxuICAgIH1cbiAgfVxufVxuIl19