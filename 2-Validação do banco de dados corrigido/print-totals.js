/* Autor: Daniel Bispo
 * Email: danielvbispo@outlook.com
 * mar/2019
 * 
 * Calcula o valor total do estoque por categoria:
 * Gera um arquivo .txt informando a categoria de produtos,
 * quantidade e o valor total
 *
 * Parâmetro - conteúdo do arquivo .json previamente armazenado
 *             como string no localStorage
 * Retorno - um arquivo .txt
*/
function printCategoryTotal(serverFile) {

    if (!serverFile) return;

    // recebe o JSON no tipo JavaScript object
    const database = JSON.parse(serverFile);

    // armazena o nome de cada categoria
    const categories = [];
    database.forEach(function(x){
        if(!categories.includes(x.category)){
            categories.push(x.category);
        }
    });

    categories.sort();

    const totalByCategory = [];
    
    categories.forEach(function(x){
        
        let total = 0;
        
        // seleciona apenas os produtos de mesma categoria
        database.filter(function(a){return a.category.match(x);})
        .forEach(function (b){
            total += b.price * b.quantity;
        });        
        totalByCategory.push({category: x, total : Number(total.toFixed(2))});
    });
    
    printTotals(totalByCategory);    
}

/*
 * Gera um arquivo com o nomes das categorias 
 * e seus respectivos totais
 */ 
function printTotals(totalByCategory){

    const totals = [];

    // insere um cabeçalho
    totals.push("Autor: Daniel Bispo\n"+
               "Email: danielvbispo@outlook.com\n"+
               "mar/2019\n"+
               "-".repeat(100) + "\n\n" + 
               "Validação do banco de dados corrigido\n\n"+
               "Lista com o valor total do estoque por categoria," +
               " considerando a quantidade de cada produto:" + "\n\n");

    // insere os dados
    totalByCategory.forEach(function(x){
        totals.push("Categoria: " + x.category + "\ntotal: " + x.total +"\n");
    });

    // insere a linha de rodapé
    totals.push("\n" + "-".repeat(100));

    // gera o arquivo .txt
    const file = new Blob([totals.join("\n")], {type: "text/plan"});
   
    // disponibiliza o download
    const a = document.createElement("a"), url = URL.createObjectURL(file);
    a.href = url;
    a.download = "Total by Category.txt"; // nome do arquivo gerado
    document.body.appendChild(a);
    a.click();
}