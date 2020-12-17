/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomShowNewMessageDirective {
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
        const msg = this.message ? this.message : this.intercomShowNewMessage;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.showNewMessage();
        }
    }
}
IntercomShowNewMessageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomShowNewMessage]'
            },] }
];
/** @nocollapse */
IntercomShowNewMessageDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomShowNewMessageDirective.propDecorators = {
    message: [{ type: Input }],
    intercomShowNewMessage: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    IntercomShowNewMessageDirective.prototype.message;
    /** @type {?} */
    IntercomShowNewMessageDirective.prototype.intercomShowNewMessage;
    /**
     * @type {?}
     * @private
     */
    IntercomShowNewMessageDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1uZXctbWVzc2FnZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS1hbmd1bGFyLTEwLyIsInNvdXJjZXMiOlsic3JjL2FwcC9uZy1pbnRlcmNvbS9kaXJlY3RpdmVzL3Nob3ctbmV3LW1lc3NhZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7QUFFNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHNCQUFzQixDQUFBOztBQU03QyxNQUFNLE9BQU8sK0JBQStCOzs7O0lBSTFDLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUdELE9BQU87O2NBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0I7UUFDckUsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDM0M7YUFDSTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUE7U0FDL0I7SUFDSCxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7YUFDckM7Ozs7WUFMTyxRQUFROzs7c0JBT2IsS0FBSztxQ0FDTCxLQUFLO3NCQUtMLFlBQVksU0FBQyxPQUFPOzs7O0lBTnJCLGtEQUF3Qjs7SUFDeEIsaUVBQXVDOzs7OztJQUUzQixtREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtJbnRlcmNvbX0gZnJvbSAnLi4vaW50ZXJjb20vaW50ZXJjb20nXG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ludGVyY29tU2hvd05ld01lc3NhZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbVNob3dOZXdNZXNzYWdlRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nXG4gIEBJbnB1dCgpIGludGVyY29tU2hvd05ld01lc3NhZ2U6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIG9uQ2xpY2soKSB7XG4gICAgY29uc3QgbXNnID0gdGhpcy5tZXNzYWdlID8gdGhpcy5tZXNzYWdlIDogdGhpcy5pbnRlcmNvbVNob3dOZXdNZXNzYWdlXG4gICAgaWYgKG1zZykge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaG93TmV3TWVzc2FnZSh0aGlzLm1lc3NhZ2UpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaG93TmV3TWVzc2FnZSgpXG4gICAgfVxuICB9XG59XG4iXX0=