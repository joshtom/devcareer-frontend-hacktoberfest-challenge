var billingDiscount = document.getElementById('billing-discount');
var Query = window.matchMedia('(max-width:375px)');

myDiscount = (Query) =>{
   if(Query.matches){
    billingDiscount.innerHTML = '-25%';
   }
}

myDiscount(Query);
Query.addEventListener('onload', myDiscount);