var nomeVinho = prompt('Qual o nome do vinho?');
var tipoVinho = prompt('Qual o tipo do vinho?(Tinto, Branco, Rosé, Espumante ou Licoroso)');
var safra = parseInt(prompt('Qual a safra?'));
var quantidadeEstoque = parseInt(prompt('Qual a quantidade em estoque?'));

alert('Cadastro realizado! Veja os detalhes no console.');

console.log(
    '===== CADASTRO DO VINHO =====\n' +
    'Nome: ' + nomeVinho + '\n' +
    'Tipo: ' + tipoVinho + '\n' +
    'Safra: ' + safra + '\n' +
    'Quantidade no estoque: ' + quantidadeEstoque
);