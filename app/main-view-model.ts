import { Observable } from '@nativescript/core';
import { CameraOptions, requestPermissions } from '@nativescript/camera';

export class HelloWorldModel extends Observable {
  private _counter: number;
  private _message: string;

  constructor() {
    super();
  }

  onTap() {
    requestPermissions().then(
      (x) => {},
      (e) => {}
    );
  }
}
