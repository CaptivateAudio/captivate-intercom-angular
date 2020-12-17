/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
var IntercomShowDirective = /** @class */ (function () {
    function IntercomShowDirective(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    IntercomShowDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var msg = this.message ? this.message : this.intercomShow;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.show();
        }
    };
    IntercomShowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[intercomShow]'
                },] }
    ];
    /** @nocollapse */
    IntercomShowDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomShowDirective.propDecorators = {
        message: [{ type: Input }],
        intercomShow: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomShowDirective;
}());
export { IntercomShowDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS1hbmd1bGFyLTEwLyIsInNvdXJjZXMiOlsic3JjL2FwcC9uZy1pbnRlcmNvbS9kaXJlY3RpdmVzL3Nob3cuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7QUFFNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHNCQUFzQixDQUFBOztBQUc3QztJQU9FLCtCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFHTSx1Q0FBTzs7O0lBRGQ7O1lBRVEsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZO1FBQzNELElBQUksR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1NBQzNDO2FBQ0k7WUFDSCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1NBQ3JCO0lBQ0gsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUMzQjs7OztnQkFMTyxRQUFROzs7MEJBT2IsS0FBSzsrQkFDTCxLQUFLOzBCQUtMLFlBQVksU0FBQyxPQUFPOztJQVV2Qiw0QkFBQztDQUFBLEFBcEJELElBb0JDO1NBakJZLHFCQUFxQjs7O0lBQ2hDLHdDQUF3Qjs7SUFDeEIsNkNBQTZCOzs7OztJQUVqQix5Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuaW1wb3J0IHtJbnRlcmNvbX0gZnJvbSAnLi4vaW50ZXJjb20vaW50ZXJjb20nXG5cbi8qIHRzbGludDpkaXNhYmxlOmRpcmVjdGl2ZS1zZWxlY3RvciAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2ludGVyY29tU2hvd10nXG59KVxuZXhwb3J0IGNsYXNzIEludGVyY29tU2hvd0RpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIG1lc3NhZ2U6IHN0cmluZ1xuICBASW5wdXQoKSBpbnRlcmNvbVNob3c6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IG1zZyA9IHRoaXMubWVzc2FnZSA/IHRoaXMubWVzc2FnZSA6IHRoaXMuaW50ZXJjb21TaG93XG4gICAgaWYgKG1zZykge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaG93TmV3TWVzc2FnZSh0aGlzLm1lc3NhZ2UpXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5pbnRlcmNvbS5zaG93KClcbiAgICB9XG4gIH1cbn1cbiJdfQ==