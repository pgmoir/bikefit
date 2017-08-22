import { EventEmitter, Output } from '@angular/core';
import { Cyclist } from './../shared/models/cyclist.model';

export class CyclistService {
    @Output() cyclistsChanged = new EventEmitter<Cyclist[]>();

    private cyclists: Cyclist[] = [
        new Cyclist('Phil', 'Smith', 'male', 2003, 'July', 15),
        new Cyclist('Sue', 'Smith', 'female', 2005, 'June', 10),
      ];

    getCyclists() {
        return this.cyclists.slice();
    }

    addCyclist(cyclist: Cyclist) {
        this.cyclists.push(cyclist);
        this.cyclistsChanged.emit(this.cyclists.slice());
    }

    addCyclists(cyclists: Cyclist[]) {
        this.cyclists.push(...cyclists);
        this.cyclistsChanged.emit(this.cyclists.slice());
    }
}
