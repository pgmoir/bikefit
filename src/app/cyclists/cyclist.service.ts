import { Cyclist } from './../shared/models/cyclist.model';

import { Subject } from 'rxjs/Subject';

export class CyclistService {
    cyclistsChanged = new Subject<Cyclist[]>();

    private cyclists: Cyclist[] = [
        new Cyclist('Phil', 'Smith', 'male', 2003, 'July', 15),
        new Cyclist('Sue', 'Smith', 'female', 2005, 'June', 10),
      ];

    getCyclists() {
        return this.cyclists.slice();
    }

    addCyclist(cyclist: Cyclist) {
        this.cyclists.push(cyclist);
        this.cyclistsChanged.next(this.cyclists.slice());
    }

    addCyclists(cyclists: Cyclist[]) {
        this.cyclists.push(...cyclists);
        this.cyclistsChanged.next(this.cyclists.slice());
    }
}
