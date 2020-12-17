/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomShutdownDirective {
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
        if (this.intercomShutdown !== false) {
            this.intercom.shutdown();
        }
    }
}
IntercomShutdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomShutdown]'
            },] }
];
/** @nocollapse */
IntercomShutdownDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomShutdownDirective.propDecorators = {
    intercomShutdown: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    IntercomShutdownDirective.prototype.intercomShutdown;
    /**
     * @type {?}
     * @private
     */
    IntercomShutdownDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2h1dGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20tYW5ndWxhci0xMC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy9zaHV0ZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQTtBQUU1RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sc0JBQXNCLENBQUE7O0FBTTdDLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFHcEMsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN0QyxDQUFDOzs7O0lBR00sT0FBTztRQUNaLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLEtBQUssRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1NBQ3pCO0lBQ0gsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7YUFDL0I7Ozs7WUFMTyxRQUFROzs7K0JBT2IsS0FBSztzQkFLTCxZQUFZLFNBQUMsT0FBTzs7OztJQUxyQixxREFBa0M7Ozs7O0lBRXRCLDZDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge0ludGVyY29tfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcblxuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21TaHV0ZG93bl0nXG59KVxuZXhwb3J0IGNsYXNzIEludGVyY29tU2h1dGRvd25EaXJlY3RpdmUge1xuICBASW5wdXQoKSBpbnRlcmNvbVNodXRkb3duOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb20pIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW50ZXJjb21TaHV0ZG93biAhPT0gZmFsc2UpIHtcbiAgICAgIHRoaXMuaW50ZXJjb20uc2h1dGRvd24oKVxuICAgIH1cbiAgfVxufVxuIl19