var discos = [
    ["Western Digital", "HD_WD_500gb_70", "HD Sata III", "500GB", 170],
    ["Seagate", "HD_Seagate_1Tb_70", "HD Sata III", "1TB", 350],
    ["Samdisk", "SSD_Samdisk_480Gb_70", "SSD Sata III", "480GB", 380],
    ["Kingston", "SSD_Kingston_960Gb_70", "SSD Sata III", "960GB", 700],
    ["Kingston", "SSD_Kingston_M2_5000Gb_70", "SSD M2", "500GB", 410],
    ["Western Digital", "SSD_WD_M2_240Gb_70", "SSD M2", "240GB", 270]
]

function exibeDiscos(posicao) {
    var titulo = document.getElementById("titDes");
    var img = document.getElementById("imgDes");
    var prc = document.getElementById("prcDes");

    titulo.innerHTML = "<h1>" + discos[posicao][0] + "</h1>";
    img.src = "../html/ImagensPakiMemo/" + discos[posicao][1] + ".jpg";
    prc.innerHTML = "<p>Interface: " + discos[posicao][2] + "</p>" +
        "<p>Capacidade:  " + discos[posicao][3] + "</p>" +
        "<p>Preço: R$  " + discos[posicao][4]+",00</p>"; 
<<<<<<< HEAD
=======



>>>>>>> 72b06e38b4e299eb8cf7bd95d6d64d61908003c9
}