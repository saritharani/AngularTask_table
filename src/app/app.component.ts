import { Component } from '@angular/core';
import {CharacterClass} from './character';

@Component({
  selector: 'app-root',
  template: `
  
  <table border="2">
<tr>
<th>Emp_ID</th>
<th>Emp_Name</th>
<th>Emp_Designation</th>
<th>Location</th>
</tr>

<tr *ngFor="let data of emp_data">
<td>{{data.emp_id}}</td>
<td>{{data.emp_name}}</td>
<td>{{data.emp_designation}}</td>
<td>{{data.location}}</td>

</tr>
</table>


  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
emp_data:CharacterClass[]=[
   {
    emp_id:"123",
    emp_name:"Saritha",
    emp_designation:"fullstack",
    location:"hyd"
   },
   {
    emp_id:"234",
    emp_name:"Dawath",
    emp_designation:"fullstack",
    location:"hyd"
   },
   {
    emp_id:"123453",
    emp_name:"Rani",
    emp_designation:"fullstack",
    location:"hyd"
   },
   {
    emp_id:"3456",
    emp_name:"SarithaRani",
    emp_designation:"fullstack",
    location:"hyd"
   },
   {
    emp_id:"890",
    emp_name:"DawathSaritha",
    emp_designation:"fullstack",
    location:"hyd"
   }
]
}
