import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {endWith, interval, map, Observable, take} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountdownService {
  constructor(private apollo: Apollo) {}

  getCounter(seconds: number): Observable<string> {
    return interval(1000)
      .pipe(
        take(seconds),
        map(count => seconds - count),
        endWith(0),
        map(countdown => {
          const hrs = (~~(countdown / 3600)).toString();
          const mins = (~~((countdown % 3600) / 60)).toString();
          const secs = (~~countdown % 60).toString();
          return `${hrs.padStart(2, '0')}h:${mins.padStart(2, '0')}m:${secs.padStart(2, '0')}s`;
        })
  )
  }
}
