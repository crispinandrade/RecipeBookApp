import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hamburger', 'Tasty sandwich', 'http://www.webweaver.nu/clipart/img/misc/food/fast-food/hamburger.png'),
    new Recipe('Hamburger', 'Tasty sandwich', 'http://www.webweaver.nu/clipart/img/misc/food/fast-food/hamburger.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
