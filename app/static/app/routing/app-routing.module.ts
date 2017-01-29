import { UserProfileComponent } from './../components/user-profile/user-profile.component';
import { HomeComponent } from './../components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignUpComponent } from './../components/sign-up/sign-up.component';
import { LoginComponent } from './../components/login/login.component';

const routes: Routes = [
    { 
        path: '',
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'signup',
                component: SignUpComponent
            },
            {
                path: ':username',
                component: UserProfileComponent
            }
        ]
     }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}