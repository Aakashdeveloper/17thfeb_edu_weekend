import {Component,OnChanges,Input,
        Output, EventEmitter} from '@angular/core';

@Component({
    selector:'star-edu',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>()

    ngOnChanges(): void{
        this.starWidth = this.rating*86/5
    }

    onStar():void{
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`)
    }
}

/*
var a = " hii i am";
var b = "angular"

a+b
hii i am angular

`how are you ${b}`

how are you angular

function add(a,b){
    return a+b
}

var sum = add(1,2)
sum == 3
*/