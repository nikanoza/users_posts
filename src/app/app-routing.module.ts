import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { PostsComponent } from "./posts/posts.component";
import { UserResolver } from "./user-resolver.service";
import { UserComponent } from "./user/user.component";

const routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path: 'users/:id', component: UserComponent, resolve: {user: UserResolver}},
    {path: 'posts', component: PostsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}