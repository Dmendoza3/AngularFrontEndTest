import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { get } from './get/get';
import { insert } from './insert/insert';
import { menu } from './menu/menu';
import { login } from './login/login';
import { NotFound } from './404/404';

const routes: Routes = [
    {
        path:'',
        redirectTo: '/login',
        pathMatch:'full'
    },
    {
        path:'login',
        component:login
    },
    {
        path: 'menu',
        component: menu
    },
    {
        path:'get',
        component: get
    },
    {
        path: 'insert',
        component: insert
    },
    {
        path:'404',
        component: NotFound
    },
    {
        path:'**',
        redirectTo:'/404',
        pathMatch:'full'
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'top'})],
    exports: [RouterModule]
})
export class AppRoutingModule{

}
