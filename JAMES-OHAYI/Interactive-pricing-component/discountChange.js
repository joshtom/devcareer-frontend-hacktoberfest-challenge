var billingDiscount = document.getElementById('billing-discount');
var billingContainer = document.querySelector('.billing-container');
var Query = window.matchMedia('(max-width:575px)');

myDiscount = (Query) =>{
   if(Query.matches){
    billingDiscount.innerHTML = '-25%';

   }
}

myDiscount(Query);
Query.addEventListener('resize', myDiscount);