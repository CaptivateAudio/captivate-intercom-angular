/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IntercomHideDirective } from './directives/hide.directive';
import { IntercomShowMessagesDirective } from './directives/show-messages.directive';
import { IntercomShowNewMessageDirective } from './directives/show-new-message.directive';
import { IntercomShowDirective } from './directives/show.directive';
import { IntercomShutdownDirective } from './directives/shutdown.directive';
import { IntercomTrackEventDirective } from './directives/track-event.directive';
import { Intercom } from './intercom/intercom';
import { IntercomConfig } from './shared/intercom-config';
var IntercomModule = /** @class */ (function () {
    function IntercomModule() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    IntercomModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: IntercomModule,
            providers: [
                Intercom,
                { provide: IntercomConfig, useValue: config },
            ]
        };
    };
    IntercomModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        RouterModule
                    ],
                    declarations: [
                        IntercomHideDirective,
                        IntercomShowMessagesDirective,
                        IntercomShowNewMessageDirective,
                        IntercomShowDirective,
                        IntercomShutdownDirective,
                        IntercomTrackEventDirective
                    ],
                    exports: [
                        IntercomHideDirective,
                        IntercomShowMessagesDirective,
                        IntercomShowNewMessageDirective,
                        IntercomShowDirective,
                        IntercomShutdownDirective,
                        IntercomTrackEventDirective
                    ],
                    providers: [
                        Intercom,
                        IntercomConfig
                    ]
                },] }
    ];
    return IntercomModule;
}());
export { IntercomModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjb20ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20tYW5ndWxhci0xMC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vaW50ZXJjb20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUE7QUFDbkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sc0NBQXNDLENBQUE7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUNBQXlDLENBQUE7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUE7QUFDbkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUE7QUFDM0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQUd6RDtJQUFBO0lBbUNBLENBQUM7Ozs7O0lBVFEsc0JBQU87Ozs7SUFBZCxVQUFlLE1BQXNCO1FBQ25DLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsUUFBUTtnQkFDUixFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRTthQUM5QztTQUNGLENBQUE7SUFDSCxDQUFDOztnQkFsQ0YsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixxQkFBcUI7d0JBQ3JCLDZCQUE2Qjt3QkFDN0IsK0JBQStCO3dCQUMvQixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsMkJBQTJCO3FCQUM1QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AscUJBQXFCO3dCQUNyQiw2QkFBNkI7d0JBQzdCLCtCQUErQjt3QkFDL0IscUJBQXFCO3dCQUNyQix5QkFBeUI7d0JBQ3pCLDJCQUEyQjtxQkFDNUI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULFFBQVE7d0JBQ1IsY0FBYztxQkFDZjtpQkFDRjs7SUFXRCxxQkFBQztDQUFBLEFBbkNELElBbUNDO1NBVlksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcbmltcG9ydCB7IEludGVyY29tSGlkZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9oaWRlLmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tU2hvd01lc3NhZ2VzRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3Nob3ctbWVzc2FnZXMuZGlyZWN0aXZlJ1xuaW1wb3J0IHsgSW50ZXJjb21TaG93TmV3TWVzc2FnZURpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zaG93LW5ldy1tZXNzYWdlLmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tU2hvd0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zaG93LmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tU2h1dGRvd25EaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2h1dGRvd24uZGlyZWN0aXZlJ1xuaW1wb3J0IHsgSW50ZXJjb21UcmFja0V2ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3RyYWNrLWV2ZW50LmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tIH0gZnJvbSAnLi9pbnRlcmNvbS9pbnRlcmNvbSdcbmltcG9ydCB7IEludGVyY29tQ29uZmlnIH0gZnJvbSAnLi9zaGFyZWQvaW50ZXJjb20tY29uZmlnJ1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBSb3V0ZXJNb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgSW50ZXJjb21IaWRlRGlyZWN0aXZlLFxuICAgIEludGVyY29tU2hvd01lc3NhZ2VzRGlyZWN0aXZlLFxuICAgIEludGVyY29tU2hvd05ld01lc3NhZ2VEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaG93RGlyZWN0aXZlLFxuICAgIEludGVyY29tU2h1dGRvd25EaXJlY3RpdmUsXG4gICAgSW50ZXJjb21UcmFja0V2ZW50RGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBJbnRlcmNvbUhpZGVEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaG93TWVzc2FnZXNEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaG93TmV3TWVzc2FnZURpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNob3dEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaHV0ZG93bkRpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVRyYWNrRXZlbnREaXJlY3RpdmVcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgSW50ZXJjb20sXG4gICAgSW50ZXJjb21Db25maWdcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogSW50ZXJjb21Db25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEludGVyY29tTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJbnRlcmNvbU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBJbnRlcmNvbSxcbiAgICAgICAgeyBwcm92aWRlOiBJbnRlcmNvbUNvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9LFxuICAgICAgXVxuICAgIH1cbiAgfVxufVxuIl19