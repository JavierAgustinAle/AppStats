import { Component, OnInit } from '@angular/core';
import { ITag } from '../../Models/ITag.model';
import { TagService } from '../../Services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: any[];
  order: string = 'desc';

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagService.getTags().subscribe((res: any) => {
      this.tags = res.data;
    });
  }

  sortAlphabet(): void {
    this.tags.sort(function (a, b) {
      var n = a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
      return n === 0 && a !== b ? b.localeCompare(a) : n;
    });
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