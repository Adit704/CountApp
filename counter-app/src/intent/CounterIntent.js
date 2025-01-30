import { Subject } from 'rxjs';

class CounterIntent {
    increment$ = new Subject();
    decrement$ = new Subject();
    reset$ = new Subject();

    increment = () => this.increment$.next();
    decrement = () => this.decrement$.next();
    reset = () => this.reset$.next();
}

export default CounterIntent;
