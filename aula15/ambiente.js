let num = [4, 5, 8, 1, 9, 6]
num[6] = 7
num.push(3)
num.sort()


console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`A última posição d vetor é ${num[num.length - 1]}`)


for(let pos=0; pos<num.length; pos++) {
    console.log(num[pos])
}