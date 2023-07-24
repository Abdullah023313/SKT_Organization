import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { IBookingForAdd } from '../Model/IBookingForAdd';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }


  reservationStatus(iPAddress: String): Observable<any> {
    const url = 'https://localhost:7052/api/Booking?iPAddress='+iPAddress;
    return this.http.get(url)
      .pipe(
        catchError(error => {
          console.log('Error: Could not connect to server.', error);
          return throwError(error.message);
        })
      );
  }

  submitBooking(formData: IBookingForAdd): Observable<any> {
    const url = 'https://localhost:7052/api/Booking';

    let bookingForAdd:IBookingForAdd ={
     ...formData,
      "gender":  Number(formData.gender),     
    }
    return this.http.post<any>(url, bookingForAdd)
      .pipe(
        catchError(error => {
          console.log('Error: Could not connect to server.', error);
          return throwError(error.message);
        })
      );
  }
}
