import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavComponent } from "./components/nav/nav.component";
import { SigninComponent } from "./pages/signin/signin.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { MsgErrorComponent } from "./components/msg-error/msg-error.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { MenuComponent } from "./components/menu/menu.component";
import { HomeComponent } from "./pages/home/home.component";
import { RequestsComponent } from "./pages/requests/requests.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SigninComponent,
    SignupComponent,
    MsgErrorComponent,
    ProfileComponent,
    MenuComponent,
    HomeComponent,
    RequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
