function placeOrder(a){
    console.log("Customer Order number:", a);

     deliverOrder(function(){
        console.log("Delivered Order number:", a);
    })
}

function deliverOrder(callback){
setTimeout(callback, 5000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);
placeOrder(6);