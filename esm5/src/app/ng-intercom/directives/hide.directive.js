/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
var IntercomHideDirective = /** @class */ (function () {
    function IntercomHideDirective(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    IntercomHideDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.intercomHide !== false) {
            this.intercom.hide();
        }
    };
    IntercomHideDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[intercomHide]'
                },] }
    ];
    /** @nocollapse */
    IntercomHideDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomHideDirective.propDecorators = {
        intercomHide: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomHideDirective;
}());
export { IntercomHideDirective };
if (false) {
    /** @type {?} */
    IntercomHideDirective.prototype.intercomHide;
    /**
     * @type {?}
     * @private
     */
    IntercomHideDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS1hbmd1bGFyLTEwLyIsInNvdXJjZXMiOlsic3JjL2FwcC9uZy1pbnRlcmNvbS9kaXJlY3RpdmVzL2hpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFBOztBQUcvQztJQU1FLCtCQUNVLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDeEIsQ0FBQzs7OztJQUdFLHVDQUFPOzs7SUFEZDtRQUVFLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxLQUFLLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUN2QjtJQUNILENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFMUSxRQUFROzs7K0JBT2QsS0FBSzswQkFNTCxZQUFZLFNBQUMsT0FBTzs7SUFNdkIsNEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWJZLHFCQUFxQjs7O0lBQ2hDLDZDQUE4Qjs7Ozs7SUFHNUIseUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHsgSW50ZXJjb20gfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcblxuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21IaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21IaWRlRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgaW50ZXJjb21IaWRlOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb21cbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmludGVyY29tSGlkZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pbnRlcmNvbS5oaWRlKClcbiAgICB9XG4gIH1cbn1cbiJdfQ==