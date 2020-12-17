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
export class IntercomModule {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: IntercomModule,
            providers: [
                Intercom,
                { provide: IntercomConfig, useValue: config },
            ]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjb20ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctaW50ZXJjb20tYW5ndWxhci0xMC8iLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctaW50ZXJjb20vaW50ZXJjb20ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUE7QUFDOUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUE7QUFDbkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sc0NBQXNDLENBQUE7QUFDcEYsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0seUNBQXlDLENBQUE7QUFDekYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkJBQTZCLENBQUE7QUFDbkUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUNBQWlDLENBQUE7QUFDM0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sb0NBQW9DLENBQUE7QUFDaEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBQzlDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQTtBQTRCekQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBc0I7UUFDbkMsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxRQUFRO2dCQUNSLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFO2FBQzlDO1NBQ0YsQ0FBQTtJQUNILENBQUM7OztZQWxDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHFCQUFxQjtvQkFDckIsNkJBQTZCO29CQUM3QiwrQkFBK0I7b0JBQy9CLHFCQUFxQjtvQkFDckIseUJBQXlCO29CQUN6QiwyQkFBMkI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLDZCQUE2QjtvQkFDN0IsK0JBQStCO29CQUMvQixxQkFBcUI7b0JBQ3JCLHlCQUF5QjtvQkFDekIsMkJBQTJCO2lCQUM1QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsUUFBUTtvQkFDUixjQUFjO2lCQUNmO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBJbnRlcmNvbUhpZGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvaGlkZS5kaXJlY3RpdmUnXG5pbXBvcnQgeyBJbnRlcmNvbVNob3dNZXNzYWdlc0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zaG93LW1lc3NhZ2VzLmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tU2hvd05ld01lc3NhZ2VEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2hvdy1uZXctbWVzc2FnZS5kaXJlY3RpdmUnXG5pbXBvcnQgeyBJbnRlcmNvbVNob3dEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvc2hvdy5kaXJlY3RpdmUnXG5pbXBvcnQgeyBJbnRlcmNvbVNodXRkb3duRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3NodXRkb3duLmRpcmVjdGl2ZSdcbmltcG9ydCB7IEludGVyY29tVHJhY2tFdmVudERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy90cmFjay1ldmVudC5kaXJlY3RpdmUnXG5pbXBvcnQgeyBJbnRlcmNvbSB9IGZyb20gJy4vaW50ZXJjb20vaW50ZXJjb20nXG5pbXBvcnQgeyBJbnRlcmNvbUNvbmZpZyB9IGZyb20gJy4vc2hhcmVkL2ludGVyY29tLWNvbmZpZydcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUm91dGVyTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEludGVyY29tSGlkZURpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNob3dNZXNzYWdlc0RpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNob3dOZXdNZXNzYWdlRGlyZWN0aXZlLFxuICAgIEludGVyY29tU2hvd0RpcmVjdGl2ZSxcbiAgICBJbnRlcmNvbVNodXRkb3duRGlyZWN0aXZlLFxuICAgIEludGVyY29tVHJhY2tFdmVudERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgSW50ZXJjb21IaWRlRGlyZWN0aXZlLFxuICAgIEludGVyY29tU2hvd01lc3NhZ2VzRGlyZWN0aXZlLFxuICAgIEludGVyY29tU2hvd05ld01lc3NhZ2VEaXJlY3RpdmUsXG4gICAgSW50ZXJjb21TaG93RGlyZWN0aXZlLFxuICAgIEludGVyY29tU2h1dGRvd25EaXJlY3RpdmUsXG4gICAgSW50ZXJjb21UcmFja0V2ZW50RGlyZWN0aXZlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIEludGVyY29tLFxuICAgIEludGVyY29tQ29uZmlnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW50ZXJjb21Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IEludGVyY29tQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJbnRlcmNvbU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSW50ZXJjb21Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgSW50ZXJjb20sXG4gICAgICAgIHsgcHJvdmlkZTogSW50ZXJjb21Db25maWcsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgIF1cbiAgICB9XG4gIH1cbn1cbiJdfQ==