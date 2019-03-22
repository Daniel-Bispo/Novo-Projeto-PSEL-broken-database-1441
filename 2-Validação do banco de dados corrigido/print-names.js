/* Autor: Daniel Bispo
 * Email: danielvbispo@outlook.com
 * mar/2019
 * 
 * Valida a correção do nome de cada produto:
 * Gera um arquivo .txt com todos os nomes listados
 *
 * Parâmetro - conteúdo do arquivo .json previamente armazenado
 *             como string no localStorage
 * Retorno - um arquivo .txt
 */
function printProductName(serverFile) {

    if (!serverFile) return;

    // recebe o JSON no tipo JavaScript object
    const database = JSON.parse(serverFile);

    database.sort(function (a, b) {
        if (a.category.toLowerCase() < b.category.toLowerCase()) { return -1; }
        if (a.category.toLowerCase() > b.category.toLowerCase()) { return 1; }
        if (a.id < b.id) {return -1;}
        if (a.id > b.id) {return 1;}
    });
    printNames(database);
}

/*
 * Gera um arquivo com o nomes dos produtos
 * ordenados por categoria e id respectivamente
 */
function printNames(database){

    const names = [];

    // insere um cabeçalho
    names.push("Autor: Daniel Bispo\n"+
               "Email: danielvbispo@outlook.com\n"+
               "mar/2019\n"+ 
               "-".repeat(100) + "\n\n" + 
               "Validação do banco de dados corrigido\n\n"+
               "Lista de nomes dos produtos ordenados por categoria em ordem alfabética," +
               " e id em ordem crescente:" + "\n\n");

    // insere os dados
    database.forEach(x => names.push(x.name + "\n"));

    // insere a linha de rodapé
    names.push("\n" + "-".repeat(100));

    // gera o arquivo .txt
    const file = new Blob([names.join("\n")], {type: "text/plan"});
   
    // disponibiliza o download
    const a = document.createElement("a"), url = URL.createObjectURL(file);
    a.href = url;
    a.download = "List of Names.txt"; // nome do arquivo gerado
    document.body.appendChild(a);
    a.click();
}