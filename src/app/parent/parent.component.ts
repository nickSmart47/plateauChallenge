import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  starWarsCharacters: any = {}
  url = `api/people/`

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.url).subscribe((data: any) => {
      this.starWarsCharacters = data.results;
    })
  }

}
