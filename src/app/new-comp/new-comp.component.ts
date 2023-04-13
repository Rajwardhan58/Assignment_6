import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent {
  Name = "Jay Ganesh...!"
  newName = this.Name+" Jay Shankar"
}
