import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-draw-square',
  templateUrl: './draw-square.component.html',
  styleUrls: ['./draw-square.component.css']
})
export class DrawSquareComponent implements OnInit,AfterViewInit {
  pos:any;
  counts:any = [];
  X:any=0;
  moveBox:boolean = true;
  highlightBox:boolean=false;
  constructor() { }

  ngAfterViewInit(): void {
  
    
  }

  ngOnInit(): void {

  }

  createBox(){

  let elements = document.getElementsByClassName('highlightbox'); 
  if(elements.length){
    console.log(document.getElementsByClassName('highlightbox'))
    elements[0].classList.remove('highlightbox');

  }
  this.counts.push(this.X);
  this.X++;
  

  }


  //move Boxes
  onMove(event){
    console.log("move", event.target)
    let elements = document.getElementsByClassName('highlightbox'); 
    if(elements.length){
      console.log(document.getElementsByClassName('highlightbox'))
      elements[0].classList.remove('highlightbox');
  
    }    
    let elementID = event.target.id;
    document.getElementById(elementID).classList.add("highlightbox");
  }

  onToggle(event){
    console.log("moveBox", this.moveBox);
  }
  onMoveBox(e){
if(this.moveBox){
  console.log("keyup",e.target);

let keyCode = e.which || e.keyCode;
switch(keyCode){
    case 37: //left arrow key
            this.moveLeft(e);
            break;
            case 38: //Up arrow key
            this.moveUp(e);
            break;
          case 39: //right arrow key
            this.moveRight(e);
            break;
          case 40: //down arrow key
            this.moveDown(e);
            break;	
          case 46: //delete button
            this.deleteBox(e);
            break;	
}
}
  }

deleteBox(e){
  $("#"+e.target.id).remove();
}

  moveLeft(e){
    if($("#"+e.target.id).css("left") >= '0px'){
       $("#"+e.target.id).finish().animate({left:"-=50"})
    }
  }

  moveRight(e){
    $("#"+e.target.id).finish().animate({left:"+=50"})
  }

  moveUp(e){
    $("#"+e.target.id).finish().animate({top:"-=50"})
  }

  moveDown(e){
    $("#"+e.target.id).finish().animate({top:"+=50"})
  }
}
