import { Observable } from 'rxjs/Observable';
import { FormControl } from '@angular/forms';

export class CustomValidators {
  static invalidDay(control: FormControl): {[s: string]: boolean} {
    if (control.value > 30) {
      return {'invalidDayOfMonth': true};
    }
    return null;
  }

  // seems to be problematic - firing 3 times
  static asyncInvalidDay(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('checking');
        if (control.value > 31) {
          console.log('failed');
          resolve({'invalidDayOfMonthAsync': true});
        } else {
          console.log('passed');
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }
}
