const customerAge = Number(prompt("Enter your age:"));
const customerName = prompt("Enter your full name:");
if (customerAge <= 12){
    console.log(`Consgratulations ${customerName}`)
    console.log("You are eligible for eating free foot.");
}
else if (customerAge >= 20 ){
   const discount = 0.20 // 20% discount
   console.log(`You are eligible for a ${discount * 100}% discount on your food bill.`);
    
    console.log(`Hello ${customerName}`);

}