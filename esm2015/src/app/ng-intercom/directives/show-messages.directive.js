/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
export class IntercomShowMessagesDirective {
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
        if (this.intercomShowMessages !== false) {
            this.intercom.showMessages();
        }
    }
}
IntercomShowMessagesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[intercomShowMessages]'
            },] }
];
/** @nocollapse */
IntercomShowMessagesDirective.ctorParameters = () => [
    { type: Intercom }
];
IntercomShowMessagesDirective.propDecorators = {
    intercomShowMessages: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    IntercomShowMessagesDirective.prototype.intercomShowMessages;
    /**
     * @type {?}
     * @private
     */
    IntercomShowMessagesDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1tZXNzYWdlcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS1hbmd1bGFyLTEwLyIsInNvdXJjZXMiOlsic3JjL2FwcC9uZy1pbnRlcmNvbS9kaXJlY3RpdmVzL3Nob3ctbWVzc2FnZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7QUFFNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHNCQUFzQixDQUFBOztBQU03QyxNQUFNLE9BQU8sNkJBQTZCOzs7O0lBR3hDLFlBQW9CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDdEMsQ0FBQzs7OztJQUdNLE9BQU87UUFDWixJQUFJLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxLQUFLLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtTQUM3QjtJQUNILENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOzs7O1lBTE8sUUFBUTs7O21DQU9iLEtBQUs7c0JBS0wsWUFBWSxTQUFDLE9BQU87Ozs7SUFMckIsNkRBQXNDOzs7OztJQUUxQixpREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtJbnRlcmNvbX0gZnJvbSAnLi4vaW50ZXJjb20vaW50ZXJjb20nXG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ludGVyY29tU2hvd01lc3NhZ2VzXSdcbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21TaG93TWVzc2FnZXNEaXJlY3RpdmUge1xuICBASW5wdXQoKSBpbnRlcmNvbVNob3dNZXNzYWdlczogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmludGVyY29tU2hvd01lc3NhZ2VzICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaG93TWVzc2FnZXMoKVxuICAgIH1cbiAgfVxufVxuIl19