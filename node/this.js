var prnthv= {
    local: function(){
    console.log("Hello, This is Praneeth!");
    console.log(this === prnthv);
}
};
prnthv.local();

function xyz(){
    console.log("This is worthless!");
    console.log(this=== global)
}
xyz();