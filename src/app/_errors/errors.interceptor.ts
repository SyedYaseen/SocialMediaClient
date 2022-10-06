import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpClient
} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {forEachChild} from "@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript";

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
      return next.handle(request).pipe(
        catchError(err => {
          if(err){
            switch (err.status) {
                case 500:
                    this.router.navigateByUrl('/server-error');
                    this.toastr.error(err.status, "Weird error");
                    break;

                case 404:
                    this.router.navigateByUrl('/not-found');
                    break;

                case 401:
                    this.toastr.error("You are not authorized");
                    break;

                case 400:
                    const errObj = err.error.errors;
                    let modalErrors = [];
                    if(errObj){
                        for (let key in errObj) {
                            errObj[key].forEach(item => modalErrors.push(item))
                        }
                        throw modalErrors;
                    } else {
                        this.toastr.error(err.error);
                    }
                    break;

                default:
                    break;
            }
          }


          return throwError(err);
        })
    )
  }
}
