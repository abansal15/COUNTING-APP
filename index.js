// Jai shree ram
// document.getElementById("count-el").innerHTML = 5
let count = 0
let count2 = 0
let show = 'Previous lap'
function increment() {
    console.log("button was clicked")
    count = count + 1
    document.getElementById("count-el").innerHTML = count
    count2 = 1
}
let ans = ''
function save() {
    if (count2 || count == 0) {
        ans = ans + ' - ' + count
        let ans2 = 'Previous entries:'
        let ans3 = ans2 + ans
        document.getElementById("showw").innerHTML = ans3
        count2 = 0
    }
    // console.log(show + ' - ' + count)
}
