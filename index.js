//Array of Cats (Jason Deruulo)

const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(c){
    cats.push(c)
}
function destructivelyPrependCat(c){
    cats.unshift(c)
}
function destructivelyRemoveFirstCat(c){
    cats.shift(c)
}
function destructivelyRemoveLastCat(c){
    cats.pop(c)
}
function destructivelyRemoveFirstCat(c){
    cats.shift(c)
}
function appendCat(c){
    const copyCats = [...cats]
    copyCats.push(c)
    return copyCats
}
function prependCat(c){
    const copyCats = [c, ...cats]
    return copyCats
}
function removeLastCat(){
    const copyCats = cats.slice(0,2)
    return copyCats
}
function removeFirstCat(){
    const copyCats = cats.slice(1,3)
    return copyCats
}