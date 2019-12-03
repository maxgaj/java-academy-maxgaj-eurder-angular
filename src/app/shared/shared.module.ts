import {NgModule} from '@angular/core';
import {CoreModule} from '../core/core.module';
import {MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { LoadingComponentComponent } from './loading-component/loading-component.component';


@NgModule({
  declarations: [LoadingComponentComponent],
  imports: [
    CoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    LoadingComponentComponent
  ],
})
export class SharedModule { }
