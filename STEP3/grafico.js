// Gerando um dataset aleatorio com varores entre 1 e 100
var temp = [];
var dados = [];

for (let i = 0; i <27; i++){
    temp = [];
    for (let j = 0; j <12; j++){
        temp.push(Math.ceil(Math.random() * 100));
    }
    dados.push(temp);
}
// Setando valores iniciais
var posicao = 0
// Dados Grafico
var data = {
    labels:['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
        data: dados[posicao],
        backgroundColor:[
        '#0089FA',
        '#25547A',
        '#006DC7',
        '#0089FA',
        '#25547A',
        '#006DC7',
        '#0089FA',
        '#25547A',
        '#006DC7',
        '#0089FA',
        '#25547A',
        '#006DC7'
        ],            
        borderWidth:1,
        borderColor:'#777',
        hoverBorderWidth:3,
        hoverBorderColor:'#000'    
    }]
};	
// Opções Grafico
var option = {
    responsive:true,
    title:{
        display:true,
        text:'Quantidade de Produtos Vendidos por Mês',
        fontSize:25
    },
    
    legend:{
        display:false
    }
};
// Função para mudar os valores
function seletor(){
    // Pegando as informações do 1 seletor
    var selectCategoria = document.getElementById('categoria');
    var optionCategoria = selectCategoria.options[selectCategoria.selectedIndex];
    var categoria = Number(optionCategoria.value);
    // Pegando as informações do 2 seletor  
    var selectTipo = document.getElementById('tipo');
    var optionTipo = selectTipo.options[selectTipo.selectedIndex];
    var tipo = Number(optionTipo.value);
    // Pegando as informações do 3 seletor
    var selectProduto = document.getElementById('produto');
    var optionProduto = selectProduto.options[selectProduto.selectedIndex];
    var produto = Number(optionProduto.value);
    // Fazendo a tratativa de cada seletor com base no anterior
    switch(categoria){
        case 0:
            document.getElementById('option_2_1').text = "Fruta";        
            document.getElementById('option_2_2').text = "Verdura";        
            document.getElementById('option_2_3').text = "Bebida";
            switch(tipo){
                case 0:
                    document.getElementById('option_3_1').text = "Maça";        
                    document.getElementById('option_3_2').text = "Uva";        
                    document.getElementById('option_3_3').text = "Morango";
                    break
                case 1:
                    document.getElementById('option_3_1').text = "Alface";        
                    document.getElementById('option_3_2').text = "Pimentao";        
                    document.getElementById('option_3_3').text = "Cenoura";
                    break
                case 2:
                    document.getElementById('option_3_1').text = "Agua";        
                    document.getElementById('option_3_2').text = "Refrigerante";        
                    document.getElementById('option_3_3').text = "Suco";
                    break
            }
            break
        case 1:
            document.getElementById('option_2_1').text = "Masculina";        
            document.getElementById('option_2_2').text = "Feminina";        
            document.getElementById('option_2_3').text = "Infantil";
            switch(tipo){
                case 0:
                    document.getElementById('option_3_1').text = "Camisa";        
                    document.getElementById('option_3_2').text = "Calça";        
                    document.getElementById('option_3_3').text = "Sapato";
                    break
                case 1:
                    document.getElementById('option_3_1').text = "Vestido";        
                    document.getElementById('option_3_2').text = "Saia";        
                    document.getElementById('option_3_3').text = "Salto";
                    break
                case 2:
                    document.getElementById('option_3_1').text = "Camiseta";        
                    document.getElementById('option_3_2').text = "Bermuda";        
                    document.getElementById('option_3_3').text = "Conjunto";
                    break
            }
            break
        case 2:
            document.getElementById('option_2_1').text = "Limpeza";        
            document.getElementById('option_2_2').text = "Higiene";        
            document.getElementById('option_2_3').text = "Decoração";
            switch(tipo){
                case 0:
                    document.getElementById('option_3_1').text = "Desinfetante";        
                    document.getElementById('option_3_2').text = "Tira Manchas";        
                    document.getElementById('option_3_3').text = "Sabão";
                    break
                case 1:
                    document.getElementById('option_3_1').text = "Shampoo";        
                    document.getElementById('option_3_2').text = "Desodorante";        
                    document.getElementById('option_3_3').text = "Perfume";
                    break
                case 2:
                    document.getElementById('option_3_1').text = "Luminária";        
                    document.getElementById('option_3_2').text = "Quadro";        
                    document.getElementById('option_3_3').text = "Plantas";
                    break
            }  
            break 

    }
    // Definição da posição utilizando transformação linear para que dado 3 variaveis com valores de 0 a 2 possam resultar em um mapeamento em uma unica variavel
    posicao =  categoria * 9 + tipo * 3 + produto  
    
    //Gerando o grafico, como data depende de posicao, então quando setamos a posicao no comando anterior os dados foram atualizados
    var canvas = document.getElementById('sales'); 
    var myLineChart = Chart.Bar(canvas,{
        data:data,
        options:option
    });   
}
