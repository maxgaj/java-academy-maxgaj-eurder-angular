import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {MatButtonModule, MatCardModule, MatDividerModule, MatToolbarModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    FontAwesomeModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    FontAwesomeModule
  ],
})
export class SharedModule { }
