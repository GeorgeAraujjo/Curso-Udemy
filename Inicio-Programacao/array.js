// Array - É uma estrutura de dados dinâmica, podesse adicionar e excluir dados.
//é um objeto.

const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])
//  O length vai dizer quantos dados tem na Array
console.log(valores.length);

//push adiciona dados em um array
valores.push({id:3},false,null,'teste')
console.log(valores);

//O pop exclui o ultimo dado do array.
console.log(valores.pop());

delete valores [0]
console.log(valores)

