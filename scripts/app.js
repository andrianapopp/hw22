const num = prompt(`Your number`)

if (num < 1 ){
    alert(NaN)
} else {
    for (let i = 2; i < num / 2; i++) {
        alert(i)
    }
}
alert(num)