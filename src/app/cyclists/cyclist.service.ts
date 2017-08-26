import { Cyclist } from './../shared/models/cyclist.model';

import { Subject } from 'rxjs/Subject';

export class CyclistService {
    cyclistsChanged = new Subject<Cyclist[]>();
    startedEditing = new Subject<number>();

    private cyclists: Cyclist[] = [
        new Cyclist('Phil', 'Smith', 'male', 2003, 'July', 15),
        new Cyclist('Sue', 'Smith', 'female', 2005, 'June', 10),
      ];

    getCyclists() {
        return this.cyclists.slice();
    }

    getCyclist(index: number) {
        return this.cyclists[index];
    }

    addCyclist(cyclist: Cyclist) {
        this.cyclists.push(cyclist);
        this.cyclistsChanged.next(this.cyclists.slice());
    }

    updateCyclist(index: number, cyclist: Cyclist) {
        this.cyclists[index] = cyclist;
        this.cyclistsChanged.next(this.cyclists.slice());
    }

    deleteCyclist(index: number) {
        this.cyclists.splice(index, 1);
        this.cyclistsChanged.next(this.cyclists.slice());
    }

    addCyclists(cyclists: Cyclist[]) {
        this.cyclists.push(...cyclists);
        this.cyclistsChanged.next(this.cyclists.slice());
    }
}
