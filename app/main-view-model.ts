import { Observable } from '@nativescript/core';
import {
  CameraOptions,
  requestPermissions,
  takePicture,
} from '@nativescript/camera';

export class HelloWorldModel extends Observable {
  private _counter: number;
  private _message: string;

  constructor() {
    super();
  }

  onTap() {
    requestPermissions().then(
      (x) => {
        takePicture().then(() => {
          console.log('picture taken');
        });
      },
      (e) => {}
    );
  }
}
