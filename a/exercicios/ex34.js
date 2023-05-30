function analisarString(string1, string2) {
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()
  
    for (let i = 0; i < string1.length; i++) {
      if (!string2.includes(string1[i])) {
        return false
      }
    }
  
    return true
  }
  
  console.log(analisarString('Carro', 'Carro'))
  