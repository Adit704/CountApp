import { BehaviorSubject, merge, interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

class CounterModel {
    count$ = new BehaviorSubject(0);
    autoIncrement$ = new BehaviorSubject(false);

    constructor(intent) {
        merge(
            intent.increment$.pipe(map(() => Math.min(this.count$.value + 1, 98))),
            intent.decrement$.pipe(map(() => Math.max(this.count$.value - 1, 0))),
            intent.reset$.pipe(map(() => 0)),
            this.autoIncrement$.pipe(
                switchMap(isOn => isOn 
                    ? interval(1100).pipe(map(() => Math.min(this.count$.value + 1, 98))) 
                    : [])
            )
        ).subscribe(this.count$);
    }

    toggleAutoIncrement = () => {
        this.autoIncrement$.next(!this.autoIncrement$.value);
    };
}

export default CounterModel;
