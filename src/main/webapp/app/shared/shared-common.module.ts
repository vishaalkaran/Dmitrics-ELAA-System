import { NgModule } from '@angular/core';

import { DmitricsElaaSystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [DmitricsElaaSystemSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [DmitricsElaaSystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class DmitricsElaaSystemSharedCommonModule {}
