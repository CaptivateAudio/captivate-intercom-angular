/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomHideDirective {
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
        if (this.intercomHide !== false) {
            this.intercom.hide();
        }
    }
}
IntercomHideDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomHide]'
            },] }
];
/** @nocollapse */
IntercomHideDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomHideDirective.propDecorators = {
    intercomHide: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    IntercomHideDirective.prototype.intercomHide;
    /**
     * @type {?}
     * @private
     */
    IntercomHideDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlkZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS1hbmd1bGFyLTEwLyIsInNvdXJjZXMiOlsic3JjL2FwcC9uZy1pbnRlcmNvbS9kaXJlY3RpdmVzL2hpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUE7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFBOztBQU0vQyxNQUFNLE9BQU8scUJBQXFCOzs7O0lBR2hDLFlBQ1UsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUN4QixDQUFDOzs7O0lBR0UsT0FBTztRQUNaLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxLQUFLLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQTtTQUN2QjtJQUNILENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7O1lBTFEsUUFBUTs7OzJCQU9kLEtBQUs7c0JBTUwsWUFBWSxTQUFDLE9BQU87Ozs7SUFOckIsNkNBQThCOzs7OztJQUc1Qix5Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQgeyBJbnRlcmNvbSB9IGZyb20gJy4uL2ludGVyY29tL2ludGVyY29tJ1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpkaXJlY3RpdmUtc2VsZWN0b3IgKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpbnRlcmNvbUhpZGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbUhpZGVEaXJlY3RpdmUge1xuICBASW5wdXQoKSBpbnRlcmNvbUhpZGU6IGJvb2xlYW5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGludGVyY29tOiBJbnRlcmNvbVxuICApIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW50ZXJjb21IaWRlICE9PSBmYWxzZSkge1xuICAgICAgICB0aGlzLmludGVyY29tLmhpZGUoKVxuICAgIH1cbiAgfVxufVxuIl19