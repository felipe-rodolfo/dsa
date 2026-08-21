function func4(arr) {
  let esquerda = 0;
  let direita = arr.length - 1;
  
  while (esquerda <= direita) {
    let meio = Math.floor((esquerda + direita) / 2);
    if (arr[meio] === 5) {
      return meio;
    } else if (arr[meio] < 5) {
      esquerda = meio + 1;
    } else {
      direita = meio - 1;
    }
  }
  return -1;
}

// O(log n)