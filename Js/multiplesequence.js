function* generateMultiplicationSequences() {
    yield '1*';
    
    for (let num = 2; num <= 6; num++) {
        let sequence = Array(num).fill(num).join('*')
        
        yield sequence; 
    }
}


const generator = generateMultiplicationSequences();
for(let i of generator){
    console.log(i)
}