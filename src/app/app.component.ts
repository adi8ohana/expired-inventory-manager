import { Component } from '@angular/core'; 
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';

interface RowObj { 
	fullname?: string; 
	counter?: string; 
} 

@Component({ 
	selector: 'expired', 
	templateUrl: './app.component.html', 
	styleUrl: './app.component.css',
	imports: [TableModule,
            InputTextModule,
            FormsModule,
            FloatLabelModule,
			ButtonModule
  ],
  standalone: true
}) 
export class AppComponent { 
	tableData: RowObj[] = []; 
  	AmbulanceNumber: string = "";
  	FullName: string = "";
	
	constructor() { } 

	ngOnInit() { 
		this.tableData = [ 
			{ 
				fullname: 'David', 
				counter: '40', 
			}, 
			{ 
				fullname: 'AJne', 
				counter: '40', 
			}, 
			{ 
				fullname: 'Mak', 
				counter: '30', 
			},
		]; 
	} 

} 
