var tabMemorias = new Array (4);
tabMemorias[0] = ["Tipo DDR3", "Kingston_4GB","Kingston", "4Gb", 200 ];
tabMemorias[1] = ["Tipo DDR3", "Samsung_8GB","Samsung", "8b", 190  ];
tabMemorias[2] = ["Tipo DDR4", "Fury_8GB","Kingston", "8Gb", 298 ];
tabMemorias[3] = ["Tipo DDR4", "Corsair_8GB","Corsair", "8Gb", 245 ];

function MostraMemorias(posicao) {
    var jan = open("", tabMemorias[posicao][0],
        "location=no,status=no," +
        "width=290,height=500");

    with (jan.document) {
        write("<!DOCTYPE html>");
        write("<html><head><title> Memórias </title>");
        write("<link rel='stylesheet'");
        write(" href='../css/stylePakiMemo.css'>");
        write("</head><body>");
        write("<div class='janInfoDetalhe'>");
        write("<h2>", tabMemorias[posicao][0], "</h2>");
        write("<img src='../html/ImagensPakiMemo/"+tabMemorias[posicao][1]+".jpg'>");
        write("<p> Interface: " , tabMemorias[posicao][2], "</p>");
        write("<p> Capacidade: " , tabMemorias[posicao][3], "</p>");
        write("<p> Preço: R$ ");
        write(tabMemorias[posicao][4], ",00</p>");
        write("<input type='button' value='Fechar'");
        write("onClick='window.close();'/></div>");
        write("</body></html>");
        close();
    }
}