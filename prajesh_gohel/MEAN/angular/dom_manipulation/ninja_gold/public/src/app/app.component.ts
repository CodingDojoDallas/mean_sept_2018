import { Component, OnInit } from '@angular/core';
import { NinjaService } from './ninja.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'public';
  gold: number;
  info: Object[];
  constructor (private _ninjaService: NinjaService) {}
  ngOnInit() {
    this.info = [];
    this.gold = 0;
  }
  handleClick(location: string) {
    switch(location) {
      case 'farm':
        var gold_earned = Math.floor((Math.random() * 30) + 20);
        this.gold += gold_earned;
        var object = {
          total_gold: this.gold,
          message: `Oh wow, you earned ${gold_earned} gold at the farm`,
          color: "green"
        };
        this.info.splice(0, 0, object);
        console.log(this.info);
        break;

      case 'cave':
      var gold_earned = Math.floor((Math.random() * 49) + 51);
      this.gold += gold_earned;
        var object = {
          total_gold: this.gold,
          message: `Oh wow, you earned ${gold_earned} gold at the cave`,
          color: "green"
        };
        this.info.splice(0, 0, object);
        console.log(this.info);
        break;

      case 'house':
      var gold_earned = Math.floor((Math.random() * 175) + 25);
      this.gold += gold_earned;
        var object = {
          total_gold: this.gold,
          message: `Oh wow, you earned ${gold_earned} gold at the house`,
          color: "green"
        };
        this.info.splice(0, 0, object);
        console.log(this.info);
        break;

      case 'casino':
        var random = Math.floor(Math.random() * 2)
        if (random == 0) {
          var gold_lost = Math.floor((Math.random() * 500) - 1000);
          this.gold += gold_lost;
          gold_lost = gold_lost * -1;
          var object = {
            total_gold: this.gold,
            message: `Oh no, you lost ${gold_lost} gold at the casino! Bummer!`,
            color: "red"
          }
          this.info.splice(0, 0, object);
          console.log(this.info);
          break;
        }
        var gold_yay = Math.floor((Math.random() * 500) + 500);
        this.gold += gold_yay;
        var object = {
          total_gold: this.gold,
          message: `Oh wow, you earned ${gold_yay} gold at the casino`,
          color: "green"
        };
        this.info.splice(0, 0, object);
        console.log(this.info);
        break;
        
      default:
        console.log("default");
    }
  }
}
