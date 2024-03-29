import { Component } from "@angular/core";

/**
 * @title Basic Inputs
 */
@Component({
  selector: "input-overview-example",
  styleUrls: ["input-overview-example.css"],
  templateUrl: "input-overview-example.html"
})
export class InputOverviewExample {

  list = ([] = [{ value :"Prashant", type: "text" }, { type: "radio",value :"Prashant" }, { type: "checkbox",value :"Prashant"}]);
  
}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
