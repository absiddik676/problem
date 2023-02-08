function foo(params) {
    console.log("foo")
}
function bar(params) {
    console.log("bar")
    foo()
}
console.log(bar())