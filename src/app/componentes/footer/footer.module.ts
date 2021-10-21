import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { FooterRoutingModule } from './footer-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [FooterComponent],
  exports:[FooterComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    FooterRoutingModule
  ]
})
export class FooterModule { }
