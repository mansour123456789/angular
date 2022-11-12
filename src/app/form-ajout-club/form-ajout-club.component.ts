import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Club } from '../Entity/club';
import { ClubService } from '../service/club.service';

@Component({
  selector: 'app-form-ajout-club',
  templateUrl: './form-ajout-club.component.html',
  styleUrls: ['./form-ajout-club.component.css']
})
export class FormAjoutClubComponent implements OnInit {
club=new Club()
  constructor(private service:ClubService,private router :Router) { }

  ngOnInit() {
  }
  ajouerclub(club : Club) {
    alert(this.club.nameclub)
    this.club.image="no-image.jpg";
    this.club.validation=0;
    this.club.idetudiant="0"
      this.service.demande(this.club).subscribe(
        data=> {console.log("nej7t")
           this.router.navigate(['/homme'])
  
      /*this.router.navigate(['/'])*/
  
    },
       error=> {console.log("ghaltaaa"),
       alert("remplir le formuler ou bien les cordoner est exist");}
    
      )
    }
  
  }

