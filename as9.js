//Armstrong number

let arm = 371;
let arm2 = arm;
let count = 0;
let sum = 0;
let y = 0;
while(arm>0){
	count++;
	arm = Math.round(arm /10);
}


while(arm2 > 0){
	let a = arm2%10;
	sum = a ** count + sum;
	arm2 = parseInt(arm2 /10);
	
}
console.log(sum);

//strong number 

let strong = 145;
let sum2 = 0;
while(strong>0){
	let a = strong%10;
	strong = parseInt(strong /10);
	
	while(a>0){
		y = a;
		a = a -1;
		sum = a + y;
		
		
	}
}
console.log(sum);