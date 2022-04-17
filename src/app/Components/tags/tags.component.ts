import { Component, OnInit } from '@angular/core';
import { ITag } from '../../Models/ITag.model';
import { TagService } from '../../Services/tag.service';

// Redux
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import * as StateActions from '../../store/actions/state.actions';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags: any[];
  order: string = 'desc';
  descending: boolean = false;

  constructor(private tagService: TagService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.store.dispatch(new StateActions.ChangeIcon('tag'));
    this.tagService.getTags().subscribe((res: any) => {
      this.tags = res.data;
      this.tags.splice(0, 1);
      this.tags.splice(100);
    }, error => {
      this.store.dispatch(new StateActions.SetError(true));
      this.store.dispatch(new StateActions.SetStatus(error));
    });
  }

  sortAlphabet(): void {
    if (!this.descending) {
      this.tags = this.tags.sort((a, b) => a.toLocaleLowerCase().trim().localeCompare(b.toLocaleLowerCase().trim()));
    } else {
      this.tags.sort(function (a, b) {
        if (a.toLocaleLowerCase().trim() > b.toLocaleLowerCase().trim()) {
          return -1;
        }
        if (b.toLocaleLowerCase().trim() > a.toLocaleLowerCase().trim()) {
          return 1;
        }
        return 0;
      });
    }
    this.descending = !this.descending;
  }

  sortLength(): void {
    if (this.order === 'desc') {
      this.tags.sort((a, b) => a.length - b.length);
      this.order = 'asc';
    } else {
      this.tags.sort((a, b) => b.length - a.length);
      this.order = 'desc';
    }
  }
}
