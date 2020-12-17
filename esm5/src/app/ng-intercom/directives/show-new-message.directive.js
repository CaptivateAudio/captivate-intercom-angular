/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener, Input } from '@angular/core';
import { Intercom } from '../intercom/intercom';
/* tslint:disable:directive-selector */
var IntercomShowNewMessageDirective = /** @class */ (function () {
    function IntercomShowNewMessageDirective(intercom) {
        this.intercom = intercom;
    }
    /**
     * @return {?}
     */
    IntercomShowNewMessageDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var msg = this.message ? this.message : this.intercomShowNewMessage;
        if (msg) {
            this.intercom.showNewMessage(this.message);
        }
        else {
            this.intercom.showNewMessage();
        }
    };
    IntercomShowNewMessageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[intercomShowNewMessage]'
                },] }
    ];
    /** @nocollapse */
    IntercomShowNewMessageDirective.ctorParameters = function () { return [
        { type: Intercom }
    ]; };
    IntercomShowNewMessageDirective.propDecorators = {
        message: [{ type: Input }],
        intercomShowNewMessage: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return IntercomShowNewMessageDirective;
}());
export { IntercomShowNewMessageDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1uZXctbWVzc2FnZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1pbnRlcmNvbS1hbmd1bGFyLTEwLyIsInNvdXJjZXMiOlsic3JjL2FwcC9uZy1pbnRlcmNvbS9kaXJlY3RpdmVzL3Nob3ctbmV3LW1lc3NhZ2UuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUE7QUFFNUQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLHNCQUFzQixDQUFBOztBQUc3QztJQU9FLHlDQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7Ozs7SUFHRCxpREFBTzs7O0lBRFA7O1lBRVEsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0I7UUFDckUsSUFBSSxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7U0FDM0M7YUFDSTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFLENBQUE7U0FDL0I7SUFDSCxDQUFDOztnQkFuQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3JDOzs7O2dCQUxPLFFBQVE7OzswQkFPYixLQUFLO3lDQUNMLEtBQUs7MEJBS0wsWUFBWSxTQUFDLE9BQU87O0lBVXZCLHNDQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FqQlksK0JBQStCOzs7SUFDMUMsa0RBQXdCOztJQUN4QixpRUFBdUM7Ozs7O0lBRTNCLG1EQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5pbXBvcnQge0ludGVyY29tfSBmcm9tICcuLi9pbnRlcmNvbS9pbnRlcmNvbSdcblxuLyogdHNsaW50OmRpc2FibGU6ZGlyZWN0aXZlLXNlbGVjdG9yICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW50ZXJjb21TaG93TmV3TWVzc2FnZV0nXG59KVxuZXhwb3J0IGNsYXNzIEludGVyY29tU2hvd05ld01lc3NhZ2VEaXJlY3RpdmUge1xuICBASW5wdXQoKSBtZXNzYWdlOiBzdHJpbmdcbiAgQElucHV0KCkgaW50ZXJjb21TaG93TmV3TWVzc2FnZTogc3RyaW5nXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnRlcmNvbTogSW50ZXJjb20pIHtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpIHtcbiAgICBjb25zdCBtc2cgPSB0aGlzLm1lc3NhZ2UgPyB0aGlzLm1lc3NhZ2UgOiB0aGlzLmludGVyY29tU2hvd05ld01lc3NhZ2VcbiAgICBpZiAobXNnKSB7XG4gICAgICB0aGlzLmludGVyY29tLnNob3dOZXdNZXNzYWdlKHRoaXMubWVzc2FnZSlcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmludGVyY29tLnNob3dOZXdNZXNzYWdlKClcbiAgICB9XG4gIH1cbn1cbiJdfQ==