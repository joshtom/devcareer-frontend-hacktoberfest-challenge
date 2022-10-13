var slider = document.getElementById('slider');
var selector = document.getElementById('selector');
var sliderBar = document.getElementById('slider-bar');
var amount = document.getElementById('amount-checker');
var pageViews = document.getElementById('page-views');


var cost = 8;
var costValue1 = 4;
var costValue2 = costValue1 + 4;
var costValue3 = costValue2 + 8;
var costValue4 = costValue3 + 12;

var views = 10;
var viewsValue1 = 5;
var viewsValue2 = viewsValue1 * 2;
var viewsValue3 = viewsValue2 * 5;
var viewsValue4 = viewsValue3 * 2;


/*
- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month

*/


slider.oninput = function(){
   selector.style.left = this.value + '%';
   sliderBar.style.width = this.value + '%';
  

   if(this.value >= 0 && this.value <= 20){
      amount.innerHTML = "$" + cost +'.00';
      pageViews.innerHTML = views + 'K' + '&nbsp' ;
   } 
  
   else if(this.value >= 21 && this.value <= 40){
      amount.innerHTML = "$" + (cost + costValue1 ) +'.00';
      pageViews.innerHTML = (views * viewsValue1) + 'K' + '&nbsp';
      
   }
   
   else if(this.value >= 41 && this.value <= 60){
    amount.innerHTML = "$" + (cost + costValue2) +'.00';
    pageViews.innerHTML = (views * viewsValue2) + 'K' +'&nbsp';
    
 }
 
 else if(this.value >= 61 && this.value <= 80){
    amount.innerHTML = "$" + (cost + costValue3) +'.00';
    pageViews.innerHTML = (views * viewsValue3) + 'K' +'&nbsp';
    
 }
 
 else if(this.value >= 81 && this.value <= 100){
    amount.innerHTML = "$" + (cost + costValue4) +'.00';
    pageViews.innerHTML = ((views * viewsValue4)/1000) + 'M' +'&nbsp';
    
 }
 else{
     alert('error');
 }


}


