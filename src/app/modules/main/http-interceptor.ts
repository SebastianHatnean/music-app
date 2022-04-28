import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import swal from 'sweetalert2';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const updatedRequest = request.clone({
      headers: request.headers.set(
        'Authorization',
        `Bearer ${localStorage['access_token']}`
      ),
    });

    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {}
        },
        (error) => {
          if (error.status === 403) {
            swal.fire('You are not allowed to perform this action!', '', 'error');
          }
        }
      )
    );
  }
}
