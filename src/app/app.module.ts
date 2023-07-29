import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MissingNumberComponent } from './missing-number/missing-number.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentXComponent } from './component-x/component-x.component';
import { ComponentYComponent } from './component-y/component-y.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { CommunicationComponent } from './communication/communication.component';
import { BottomLeftComponent } from './bottom-left/bottom-left.component';
import { BottomRightComponent } from './bottom-right/bottom-right.component';
import { TopRightComponent } from './top-right/top-right.component';
import { TopLeftComponent } from './top-left/top-left.component';
import { CenterComponent } from './center/center.component';

@NgModule({
  declarations: [
    AppComponent,
    MissingNumberComponent,
    ComponentXComponent,
    ComponentYComponent,
    ComponentComponent,
    PhoneNumberComponent,
    CommunicationComponent,
    BottomLeftComponent,
    BottomRightComponent,
    TopRightComponent,
    TopLeftComponent,
    CenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
