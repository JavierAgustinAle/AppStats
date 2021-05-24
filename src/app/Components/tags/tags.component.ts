import { Component, OnInit } from '@angular/core';
import { ITag } from '../../Models/ITag.model';
import { TagService } from '../../Services/tag.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags = [
    { title: 'grass' },
    { title: 'road sign' },
    { title: 'pet' },
    { title: 'blanket' },
    { title: 'sheep' },
    { title: 'asleep' }
  ]

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    // this.tagService.getTags().subscribe((res: any) => {
    //   console.log(res.data)
    // })
    this.tags.map(p => p['timesUse'] = Math.floor(Math.random() * (100 - 1)) + 1);
    console.log(this.tags)

  }

}
