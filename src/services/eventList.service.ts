import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { eventList } from '../model/eventList';

@Injectable()
export class eventListService {
    private eventListRef = this.db.list<eventList>('event');
    constructor(private db: AngularFireDatabase) { }

    geteventList() {
        return this.eventListRef;
    }

    addEvent(event: eventList){
        return this.eventListRef.push(event);
    }

    updateEvent(event: eventList){
        return this.eventListRef.update(event.key, event);
    }

    removeEvent(event: eventList){
        return this.eventListRef.remove(event.key);
    }
}