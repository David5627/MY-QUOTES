import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { WeekDay } from '@angular/common';

@Component({
  selector: 'app-quote',
  templateUrl:'./quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'JOSEE', "There is only one way to happiness and that is to cease worrying about things beyond your will.", new Date(2020, 6, 11)),
    new Quote(3, 'ABDUL khazam.', "Happiness is not something ready made,you must work to find true happiness.", new Date(2020, 11, 12)),
    new Quote(4, 'Mr Psalmist', "Make your life a masterpiece;imagine no limitations on what you can be,have to do.", new Date(2020, 11, 6)),
    new Quote(5, 'BISMILLAHI Mstaf', "You see, the way you think and feel about yourself,including your beliefs and expectations about what is possible for you,determines everything that happens.", new Date(2020, 11, 6)),
    new Quote(6, 'OWEN Gabriel', "The only joy in the world is to begin since a journey of a thousand miles starts with a single step.", new Date(2020, 11, 6)),
    new Quote(6, 'David K', "You only live once, but if you do it right, once is enough.", new Date(2020, 11, 7)),
    new Quote(6, 'David K', "We all make mistakes, have struggles, and even regret things in our past. But you are not your mistakes, you are not your struggles, and you are here now with the power to shape your day and your future.", new Date(2020, 11, 7)),


  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  upvote(index) {
    this.quotes[index].like++;
  }
  downvote(index) {
    this.quotes[index].unlike++;
  }


  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);

    }
  }



  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name} Quote?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
