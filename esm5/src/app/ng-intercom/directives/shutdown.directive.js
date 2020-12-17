/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
var IntercomShutdownDirective = /** @class */ (function () {
    function IntercomShutdownDirective(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    IntercomShutdownDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.intercomShutdown !== false) {
            this.intercom.shutdown();
        }
    };
    IntercomShutdownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[intercomShutdown]'
                },] }
    ];
    /** @nocollapse */
    IntercomShutdownDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomShutdownDirective.propDecorators = {
        intercomShutdown: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomShutdownDirective;
}());
export { IntercomShutdownDirective };
if (false) {
    /** @type {?} */
    IntercomShutdownDirective.prototype.intercomShutdown;
    /**
     * @type {?}
     * @private
     */
    IntercomShutdownDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2h1dGRvd24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20tYW5ndWxhci0xMC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vZGlyZWN0aXZlcy9zaHV0ZG93bi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQTtBQUU1RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sc0JBQXNCLENBQUE7O0FBRzdDO0lBTUUsbUNBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUdNLDJDQUFPOzs7SUFEZDtRQUVFLElBQUksSUFBSSxDQUFDLGdCQUFnQixLQUFLLEtBQUssRUFBRTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFBO1NBQ3pCO0lBQ0gsQ0FBQzs7Z0JBZEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzs7O2dCQUxPLFFBQVE7OzttQ0FPYixLQUFLOzBCQUtMLFlBQVksU0FBQyxPQUFPOztJQU12QixnQ0FBQztDQUFBLEFBZkQsSUFlQztTQVpZLHlCQUF5Qjs7O0lBQ3BDLHFEQUFrQzs7Ozs7SUFFdEIsNkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7SW50ZXJjb219IGZyb20gJy4uL2ludGVyY29tL2ludGVyY29tJ1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpbnRlcmNvbVNodXRkb3duXSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21TaHV0ZG93bkRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGludGVyY29tU2h1dGRvd246IGJvb2xlYW5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGludGVyY29tOiBJbnRlcmNvbSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnRlcmNvbVNodXRkb3duICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaHV0ZG93bigpXG4gICAgfVxuICB9XG59XG4iXX0=