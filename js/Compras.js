var preco = [0, 200, 190, 298, 245, 170, 350, 380, 700, 410, 270];
var produtos = ["", "Memória DDR3", "Memória DDR3","Memória DDR4", "Memória DDR4", "HD Sata III" , "HD Sata III" , "SSD Sata III", "SSD Sata III", "SSD M2", "SSD M2"];

function comprar(){
    var produto = document.getElementById("selProduto");
    var posicao_produto = produto.selectedIndex;
    var nome_produto = produto.value;
    var preco_produto = preco[posicao_produto];
    var text_area = document.getElementById("lisPedArea");
    var campo_preco = document.getElementById("price");
    var tipo_produto = produtos[posicao_produto];
    
    if(!campo_preco.value){
        campo_preco.value = preco[0];
    }
    if(posicao_produto != 0){
        text_area.value += tipo_produto + " " +  nome_produto + "\n"; 
        campo_preco.value = parseInt(preco_produto) + parseInt(campo_preco.value);
    }
    else{
        alert("Nenhum produto selecionado!");
    }


}