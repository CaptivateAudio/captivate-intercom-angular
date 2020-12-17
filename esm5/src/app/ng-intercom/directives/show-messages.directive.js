/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
var IntercomShowMessagesDirective = /** @class */ (function () {
    function IntercomShowMessagesDirective(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    IntercomShowMessagesDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (this.intercomShowMessages !== false) {
            this.intercom.showMessages();
        }
    };
    IntercomShowMessagesDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[intercomShowMessages]'
                },] }
    ];
    /** @nocollapse */
    IntercomShowMessagesDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomShowMessagesDirective.propDecorators = {
        intercomShowMessages: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomShowMessagesDirective;
}());
export { IntercomShowMessagesDirective };
if (false) {
    /** @type {?} */
    IntercomShowMessagesDirective.prototype.intercomShowMessages;
    /**
     * @type {?}
     * @private
     */
    IntercomShowMessagesDirective.prototype.intercom;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1tZXNzYWdlcy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS1hbmd1bGFyLTEwLyIsInNvdXJjZXMiOlsic3JjL2FwcC9uZy1pbnRlcmNvbS9kaXJlY3RpdmVzL3Nob3ctbWVzc2FnZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7QUFFNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHNCQUFzQixDQUFBOztBQUc3QztJQU1FLHVDQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFHTSwrQ0FBTzs7O0lBRGQ7UUFFRSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxLQUFLLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtTQUM3QjtJQUNILENBQUM7O2dCQWRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO2lCQUNuQzs7OztnQkFMTyxRQUFROzs7dUNBT2IsS0FBSzswQkFLTCxZQUFZLFNBQUMsT0FBTzs7SUFNdkIsb0NBQUM7Q0FBQSxBQWZELElBZUM7U0FaWSw2QkFBNkI7OztJQUN4Qyw2REFBc0M7Ozs7O0lBRTFCLGlEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge0ludGVyY29tfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcblxuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21TaG93TWVzc2FnZXNdJ1xufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbVNob3dNZXNzYWdlc0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIGludGVyY29tU2hvd01lc3NhZ2VzOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb20pIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW50ZXJjb21TaG93TWVzc2FnZXMgIT09IGZhbHNlKSB7XG4gICAgICB0aGlzLmludGVyY29tLnNob3dNZXNzYWdlcygpXG4gICAgfVxuICB9XG59XG4iXX0=