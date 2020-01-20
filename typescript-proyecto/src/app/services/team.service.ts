import { Injectable } from "@angular/core";
import { Team } from "../interfaces/team";
import { AngularFireList, AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export const TeamTableHeaders = ["name", "country", "players"];

@Injectable({
  providedIn: "root"
})
export class TeamService {
  private teamDb: AngularFireList<Team>;
  constructor(private db: AngularFireDatabase) {
    this.teamDb = this.db.list("/team", ref => ref.orderByChild("name"));
  }
  getTeam(): Observable<Team[]> {
    return this.teamDb.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }));
      })
    );
  }
  addTeam(team: Team) {
    return this.teamDb.push(team);
  }
  deleteTeam(id: string) {
    this.db.list("/team").remove(id);
  }
  editTeam(newTeamData) {
    const $key = newTeamData.$key;
    delete newTeamData.$key;
    this.db.list("/team").update($key, newTeamData);
  }
}
