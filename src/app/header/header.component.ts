import { AuthService } from './../auth/auth.service';
import { Response } from '@angular/http';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';

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
  constructor(private dataStorageService: DataStorageService,
  private authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
