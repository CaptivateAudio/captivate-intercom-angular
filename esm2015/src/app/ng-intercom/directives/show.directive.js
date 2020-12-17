/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomShowDirective {
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
        const msg = this.message ? this.message : this.intercomShow;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.show();
        }
    }
}
IntercomShowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomShow]'
            },] }
];
/** @nocollapse */
IntercomShowDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomShowDirective.propDecorators = {
    message: [{ type: Input }],
    intercomShow: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    IntercomShowDirective.prototype.message;
    /** @type {?} */
    IntercomShowDirective.prototype.intercomShow;
    /**
     * @type {?}
     * @private
     */
    IntercomShowDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS1hbmd1bGFyLTEwLyIsInNvdXJjZXMiOlsic3JjL2FwcC9uZy1pbnRlcmNvbS9kaXJlY3RpdmVzL3Nob3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7QUFFNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHNCQUFzQixDQUFBOztBQU03QyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBSWhDLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUdNLE9BQU87O2NBQ04sR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZO1FBQzNELElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzNDO2FBQ0k7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ3JCO0lBQ0gsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBTE8sUUFBUTs7O3NCQU9iLEtBQUs7MkJBQ0wsS0FBSztzQkFLTCxZQUFZLFNBQUMsT0FBTzs7OztJQU5yQix3Q0FBd0I7O0lBQ3hCLDZDQUE2Qjs7Ozs7SUFFakIseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmltcG9ydCB7SW50ZXJjb219IGZyb20gJy4uL2ludGVyY29tL2ludGVyY29tJ1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpbnRlcmNvbVNob3ddJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbVNob3dEaXJlY3RpdmUge1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmdcbiAgQElucHV0KCkgaW50ZXJjb21TaG93OiBzdHJpbmdcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGludGVyY29tOiBJbnRlcmNvbSkge1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBwdWJsaWMgb25DbGljaygpOiB2b2lkIHtcbiAgICBjb25zdCBtc2cgPSB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UgOiB0aGlzLmludGVyY29tU2hvd1xuICAgIGlmIChtc2cpIHtcbiAgICAgIHRoaXMuaW50ZXJjb20uc2hvd05ld01lc3NhZ2UodGhpcy5tZXNzYWdlKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaW50ZXJjb20uc2hvdygpXG4gICAgfVxuICB9XG59XG4iXX0=