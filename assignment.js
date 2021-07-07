// KilometerToMeter funtion
function kilometerToMeter(km){
    if(km<0){
        return 'please enter a non negative value';
    }
    else{
    var meter= km*1000;
    }
return meter;
} 

//console.log(kilometerToMeter(2));


//budgetCalculator function
 function budgetCalculator(watch,phone, laptop){
     if(watch<0 || phone<0 || laptop<0){
         return 'please enter a valid number';
     }

     else{
        var watchPrice= watch*50;
        var phonePrice= phone*100;
        var laptopPrice= laptop*500;
        var totalPrice= watchPrice+phonePrice+laptopPrice;

        }
 return totalPrice;
}  
//console.log(budgetCalculator(1,2,3));

//hotelCost function
function hotelCost(day){
     var cost=0;
     if(day<0){
         return 'Wrong input! please check again';
     }
     if(day<=10){
        cost= day*100;
     }
     else if(day<=20){
         var firstCost= 10*100;
         var remaining= day-10;
         var secondCost= remaining*80;
         cost= firstCost+secondCost;
     }
     else{
         var firstCost= 10*100;
         var secondCost= 10*80;
         var remaining= day-20;
         var thirdCost= remaining*50;
         cost = firstCost+secondCost+thirdCost;
     }
     return cost;

 }

//console.log(hotelCost(-1));


//megaFriend function
function megaFriend(friends){
    var mega= friends[0];
    for(var i=0; i<friends.length;i++){
        if(friends[i].length>mega.length){
            mega= friends[i];
        }
    }

    return mega;
}

//var friends= ['salekin newaz', 'sami', 'ovi khan', 'dfhksfd jdfsjd ksdjksdj'];
//console.log(megaFriend(friends));