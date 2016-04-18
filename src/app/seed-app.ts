/// <reference path="./../../typings/browser/ambient/konva/index.d.ts" />

import {Component} from 'angular2/core';
import * as Konva from 'konva';

@Component({
  selector:'seed-app',
  templateUrl: 'app/seed-app.html'
})
export class App {
  _init() {
    var stage = new Konva.Stage({
      height: 300,
      width: 400,
      container: '#container'
    });

    var layer = new Konva.Layer();

    var rect = new Konva.Rect({
      height: 300,
      width: 400,
      stroke: 'red',
      strokeWidth: 2
    });

    layer.add(rect);

    stage.add(layer);
  }
  ngOnInit() {
    this._init();
  }
}
