import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  // phaserGame: Phaser.Game;
  // config: Phaser.Types.Core.GameConfig;
  // constructor() {
  //   this.config = {
  //     type: Phaser.AUTO,
  //     width: 800,
  //     height: 600,
  //     backgroundColor: '#2d2d2d',
  //     scene: [ MainScene ],
  //     parent: 'phaser-example',
     
  //   };
  // }



  ngOnInit() { 
    // this.phaserGame = new Phaser.Game(this.config);
  }

}
// class MainScene extends Phaser.Scene {
//   group1;
//   group2;
//   group3;
//   group4;
//   constructor() {
//     super({ key: 'main' });
//   }
//   create() {
//     this.group1 = this.add.group({ key: 'ball', frameQuantity: 16 });
//     this.group2 = this.add.group({ key: 'ball', frameQuantity: 16 });
//     this.group3 = this.add.group({ key: 'ball', frameQuantity: 16 });
//     this.group4 = this.add.group({ key: 'ball', frameQuantity: 16 });

//     Phaser.Actions.PlaceOnCircle(this.group1.getChildren(), { x: 400, y: 300, radius: 200 });
//     Phaser.Actions.PlaceOnCircle(this.group2.getChildren(), { x: 400, y: 300, radius: 160 });
//     Phaser.Actions.PlaceOnCircle(this.group3.getChildren(), { x: 400, y: 300, radius: 120 });
//     Phaser.Actions.PlaceOnCircle(this.group4.getChildren(), { x: 400, y: 300, radius: 80 });

//   }
//   preload() {
//     this.load.image('ball', 'assets/sprites/shinyball.png');
//   }
//   update() {
//     Phaser.Actions.RotateAroundDistance(group1.getChildren(), { x: 400, y: 300 }, 0.02, 200);
//     Phaser.Actions.RotateAroundDistance(group2.getChildren(), { x: 400, y: 300 }, 0.02, 160);
//     Phaser.Actions.RotateAroundDistance(group3.getChildren(), { x: 400, y: 300 }, 0.02, 120);
//     Phaser.Actions.RotateAroundDistance(group4.getChildren(), { x: 400, y: 300 }, 0.02, 80);
// }
  
// }