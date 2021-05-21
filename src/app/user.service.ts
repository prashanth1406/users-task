import { User } from "./user";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private usersUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  /** GET Users from the server */
  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.usersUrl)
      .pipe(catchError(this.handleError<User[]>("getUsers", [])));
  }
   /** GET User from the server by UserId */
   getUserDetails(userId): Observable<User> {
    return this.http
      .get<User>(this.usersUrl+'/'+userId)
      .pipe(catchError(this.handleError<User>("getUsers")));
  }

  /** Handle Http operation that failed. */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`UserService: ${message}`);
  }
}
