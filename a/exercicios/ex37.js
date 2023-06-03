function progressaoAritmetica(n, a1, r) {
    let termos = []
    let soma = 0
  
    for (let i = 0; i < n; i++) {
      let termo = a1 + i * r
      termos.push(termo)
      soma += termo
    }
  
    console.log("Progressão Aritmética:");
    console.log("Termos:", termos);
    console.log("Soma dos elementos:", soma);
  }
  

  function progressaoGeometrica(n, a1, r) {
    let termos = []
    let soma = 0
  
    for (let i = 0; i < n; i++) {
      let termo = a1 * Math.pow(r, i)
      termos.push(termo)
      soma += termo
    }
  
    console.log("Progressão Geométrica:")
    console.log("Termos:", termos)
    console.log("Soma dos elementos:", soma)
  }
  

  progressaoAritmetica(5, 2, 3)
  progressaoGeometrica(5, 2, 3)
