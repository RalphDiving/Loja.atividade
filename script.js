// Tarefa 1 //
const nomeLoja= "Ralph's Store"

const produtos= [
    { nome: "Colar de Cristal Luminoso", categoria: "acessórios", preco: 35, quantidade: 4, vendidos: 43 },
    { nome: "Pingentes de Cristais Luminosos", categoria: "acessórios", preco: 15, quantidade: 3, vendidos: 51 },
    { nome: "Adaga Cristalina", categoria: "equipamento", preco: 120, quantidade: 15, vendidos: 12 },
    { nome: "Espada Cristalina", categoria: "equipamento", preco: 210, quantidade: 10, vendidos: 6 },
    { nome: "Pacote de doces cristalinos sortudos", categoria: "brinde", preco: 6, quantidade: 35, vendidos: 22 },
    
];
// Tarefa 2 //
function Listarprodutos(lista){
    for (let i=0; i<lista.length; i++){
        const p= lista[i];
        console.log(`${i+1}. ${p.nome} | ${p.categoria} | ${p.preco} | ${p.quantidade} un. | ${p.vendidos} vendidos`);
    }
}
// Tarefa 3 //
function cadrastarProduto(lista, nome, categoria, preco, quantidade){
    const nomeFormatado= formatarNome(nome);
    const novoProduto= {
        nome: nomeFormatado,
        categoria: categoria,
        preco: preco,
        quantidade: quantidade,
        vendidos: 0
    };
    lista.push(novoProduto);
    return lista.length;
}
// Tarefa 4 //
function calcularValorEstoque(lista){
    let total= 0;
    for (i=o; i<lista.length; i++){
        total += lista[i].preco * lista[i].quantidade;
    }
    return total;
}
// Tarefa 5 //
function buscarProduto(lista, termo){
    const termoLower= termo.toLowerCase();
    for (let i= 0; i<lista.length; i++){
      if (lista[i].nome.toLowerCase().includes(termoLower)){
        return lista[i];
    
      }
    }
    return null;
}
// Tarefa 6 //
function produtosEmFalta(lista, minimo){
    const emFalta = [];
    for(let i=0;i<lista.length;i++){
        if(lista[i].quantidade<minimo){
            emFalta.push(lista[i]);
        }
    }
    return emFalta;
}
// Tarefa 7...67 //
function aplicarDesconto(lista, categoria, percentual){
    let alterados= 0;
    for (let i=0;i<lista.length;i++){
        if (lista[i].categoria === categoria){
            lista[i].preco = lista[i].preco - (lista[i].preco * percentual/100);
            alterados++;
        }
    }
    return alterados;
}
// Tarefa 8 //
function registrarVenda(lista, nome, quantidade) {
    const prod= buscarProduto(lista, nome);
    if (!prod || prod.quantidade < quantidade){
        return false;
  }
prod.quantidade -= quantidade;
prod.vendidos += quantidade;
return true;
}
// Tarefa 9 //
function formatarNome(texto){
    const limpo= texto.trim()
    if (limpo.length === 0){
        return "";
    }
 return limpo.charAt(0).toUpperCase() + limpo.slice(1).toLowerCase();
}
// Tarefa 10 //
function converterParaJSON(lista){
    return JSON.stringify(lista)   
}

function lerJSON(texto){
    return JSON.parse(texto);
}
// Tarefa 11 //
function GerarRelatório(nome, lista){
   console.log(`==== RELATÓRIO: ${nome.toUpperCase()} ====`);
   console.log(`Produtos cadastrados: ${lista.length}`);
   console.log(`Valor total em estoque: R$ ${calcularValorEstoque(lista)}`);
    const baixos= produtosEmFalta(lista, 5);
    console.log(`Produtos com estoque baixo: ${baixos.length}`);
    for(let i=0;i<baixos.length;i++){
        console.log(`${baixos[i].nome} (${baixos[i].quantidade} un.)`);
    }
}
