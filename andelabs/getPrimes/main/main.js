function primeNumbers(n,y){
	if (n < 0 || n.constructor !== Number) {
		return false;
	}
	if (!y) {
		var y = [];
	}
	if (n == 0){
		return y;
	}
	n = parseInt(n);
	//function check if number is prime
	function is_prime(x){
		var prime = true;
		var sqrtx = Math.floor(Math.sqrt(x));
		for (var i = 2; i <= sqrtx; i++){
			if (x % i == 0){
				prime = false;
			}
		} 
		return (x == 1) ? false : prime;
	}
	if (is_prime(n)){
		y.unshift(n);
	}
	return primeNumbers(n-1, y);
	
}
module.exports = {getPrimes : primeNumbers}