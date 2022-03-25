import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "./models/user.model";
import { ServerService } from "./server.service";


@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<User>{

    constructor(private server: ServerService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<User> | Promise<User> {
        return this.server.getUser(+route.params['id']);
    }
}