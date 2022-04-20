import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() characters:any[] = [];

  constructor() {
   }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges){
    let newCharacters = (changes['characters']['currentValue'])
    this.characters = newCharacters;
  }

}
