import { Component } from "@angular/core";
import { Recipe } from '../recipe.model'

@Component ({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {

    recipes: Recipe[] = [
        new Recipe('Baklava', 'Turkish traditional dessert pastry.', 'https://cleobuttera.com/wp-content/uploads/2018/03/lifted-baklava.jpg')
    ];

}