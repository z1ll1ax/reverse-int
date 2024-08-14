module.exports = function reverse (n) {
  let ans = 0;
  n = Math.abs(n);
    while (!(n < 10)){
        ans *= 10;
        ans += (n % 10);
        n/= 10;
        n = Math.floor(n);
    }
    ans *= 10;
    ans += (n % 10);
    return ans;
}
