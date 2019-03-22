/* Autor: Daniel Bispo
 * Email: danielvbispo@outlook.com
 * mar/2019
 * 
 * Corrige o preço dos produtos:
 * Altera do tipo string para number
 * 
 * Parâmetro - conteúdo do arquivo .json previamente armazenado
 *             como string no localStorage
 * Retorno - objeto JavaScript convertido em string 
*/
function fixPrice(serverFile) {

    if (!serverFile) return;

    const database = JSON.parse(serverFile);

    // o casting é utilizado pra simplificar a implementação
    database.forEach(x => x.price = Number(x.price));
    
    return JSON.stringify(database);
}   