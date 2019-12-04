import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SigninComponent } from "./pages/signin/signin.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { RequestsComponent } from "./pages/requests/requests.component";

import { AuthGuard } from "./auth/auth.guard";
import { LoginGuard } from "./auth/login.guard";

const routes: Routes = [
  {
    path: "user/signin",
    component: SigninComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "user/signup",
    component: SignupComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "requests", component: RequestsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
