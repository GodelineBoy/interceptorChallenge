import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";

@Injectable()
export class LogInterceptor implements HttpInterceptor{
    intercept(
        req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        throw new Error("Method not implemented.");
    
    const start = new Date().getTime();
    
    return  next.handle(req).pipe(
        // tap est un observable qui indique: 
        // Je fais des actions sans modifier la réponse
        tap((response) => {
                // On s'assure qu'il s'agit bien d'une réponse http
                if (response  instanceof  HttpResponse) {
                        // Ici sera le code exécuté à la réponse du serveur
                        // Dans le cas où tout s'est bien passé
                    const time = new Date().getTime();
                    console.log(`Response time : ${time - start}`);
                    }
        })
);
}
}