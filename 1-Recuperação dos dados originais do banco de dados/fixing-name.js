/* Autor: Daniel Bispo
 * Email: danielvbispo@outlook.com
 * mar/2019
 * 
 * Corrige o nome de cada produto:
 * Remove os caracteres: æ, ß, ¢, ø
 * e substitui respectivamente por: a, b, c, o
 * 
 * Parâmetro - conteúdo do arquivo .json previamente armazenado
 *             como string no localStorage
 * Retorno - objeto JavaScript convertido em string
*/
function fixName(serverFile) {

    if (!serverFile) return;

    const database = JSON.parse(serverFile);

    /* 
     * percorre cada produto da base de dados
     * e substitui os caracteres especiais
     */
    database.forEach(function(product){
        product.name = product.name
                        .replace(/æ/g,"a")
                        .replace(/ß/g,"b")
                        .replace(/¢/g,"c")
                        .replace(/ø/g,"o");
    });

    return JSON.stringify(database);
}