import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FooterComponent } from "./footer.component";
import { AuthGuard } from '../../guards/auth.guard';


const routes: Routes = [
    {
        path: '', 
        component: FooterComponent,
        children: [            
            {
                path: 'home',
                loadChildren: () => import('../../pages/home/home.module').then(m => m.HomePageModule), 
              },
             
              {
                path: 'book',
                loadChildren: () => import('../../pages/book/book.module').then( m => m.BookPageModule), 
              },
              {
                path: '',
                redirectTo: '/footer/book',
                pathMatch: 'full'
            }
        ],
    },
    {
        path: '',
        redirectTo: '/footer/book',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class FooterRoutingModule{}