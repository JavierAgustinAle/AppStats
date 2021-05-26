import { Component, OnInit } from '@angular/core';
import { ITag } from '../../Models/ITag.model';
import { TagService } from '../../Services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: ITag[];

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagService.getTags().subscribe((res: any) => {
      this.tags = res.data;
    });
  }

}
