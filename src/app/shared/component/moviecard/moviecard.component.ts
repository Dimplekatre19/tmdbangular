import { Component, OnInit } from '@angular/core';
import { Imovie } from '../../models/movie';
import { moviearr } from '../../consts/movie';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {
  movieData:Array<Imovie>=[];
  constructor() { }

  ngOnInit(): void {
    this.movieData=moviearr;
  }

}
