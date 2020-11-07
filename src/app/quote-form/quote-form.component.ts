import { Component, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-form',
  templateUrl:'./quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit { 

  newQuote = new Quote(0,"","",new Date());
    @Output()addQuote =new EventEmitter<Quote>();
  submitQuote(){
      this.addQuote.emit(this.newQuote)
      this.newQuote = new Quote(0,"","",new Date());
  }
  constructor() { }

  ngOnInit(): void {
  }

}
