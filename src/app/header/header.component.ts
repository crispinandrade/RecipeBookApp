import {
  Component,
  OnInit,
  // EventEmitter,
  // Output,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Create event emitter that can be listenable from the app.component
  // @Output() featureSelected = new EventEmitter<string>();
  // Implement event emitter and emit 'feature' (recieved from the template)
  // onSelect(feature: string){
  //   this.featureSelected.emit(feature)
  // }
  constructor() { }

  ngOnInit() {
  }
}
