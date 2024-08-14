import { Component } from '@angular/core'; 
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';

interface People { 
	firstname?: string; 
	lastname?: string; 
	age?: string; 
} 

@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrl: './app.component.css',
	imports: [TableModule,
            InputTextModule,
            FormsModule,
            FloatLabelModule
  ],
  standalone: true
}) 
export class AppComponent { 
	tableData: People[] = []; 
	cols: any[] = []; 
  	value: string = "";
	constructor() { } 

	ngOnInit() { 
		this.cols = [ 
			{ field: 'firstname', header: 'First Name' }, 
			{ field: 'lastname', header: 'Last Name' }, 
			{ field: 'age', header: 'Age' }, 
		]; 
		this.tableData = [ 
			{ 
				firstname: 'David', 
				lastname: 'ace', 
				age: '40', 
			}, 
			{ 
				firstname: 'AJne', 
				lastname: 'west', 
				age: '40', 
			}, 
			{ 
				firstname: 'Mak', 
				lastname: 'Lame', 
				age: '40', 
			}, 
			{ 
				firstname: 'Peter', 
				lastname: 'raw', 
				age: '40', 
			}, 
			{ 
				firstname: 'Kane', 
				lastname: 'James', 
				age: '40', 
			}, 
		]; 
	} 

  onRowSelect(event: any) {

  }
} 
