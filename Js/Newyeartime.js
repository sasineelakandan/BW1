const newyar=new Date('01/01/2026')
const today=new Date()
const defernce=newyar-today

const totalDay=Math.floor(defernce/(1000*60*60))

console.log(totalDay)