/* Autor: Daniel Bispo
 * Email: danielvbispo@outlook.com
 * mar/2019
 * 
 * Corrige o campo quantidade do produto:
 * Se o campo quantidade não existir, o produto recebe
 * o campo quantitade com o valor = 0
 *
 * Parâmetro - conteúdo do arquivo .json previamente armazenado
 *             como string no localStorage
 * Retorno - objeto JavaScript convertido em string 
*/
function fixQuantity(serverFile){

    if (!serverFile) return;
    
    const database = JSON.parse(serverFile);

    // um novo objeto é utilizado para manter a ordem das propriedades
    database.forEach(function(product,index, arr){
        if(!product.quantity){
            arr[index] = {"id" : product.id,
                          "name" : product.name,
                          "quantity": 0,
                          "price" : product.price,  
                          "category" : product.category};
        }
    });
    
    return JSON.stringify(database);
}