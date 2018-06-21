 /*  
Temat zadania:
 Na stronie jest wyświetlany obraz z podpisem. 
 Podpis powinien pokazywać, ile razy kliknięto ten obraz. 
 Użyj jQuery aby to zrealizować - dodaj dla tego obrazu nasłuchiwacz zdarzeń click, który będzie powiększać zmienną numClicks oraz aktualizować podpis. 
 
*/
    var numClicks = 0;
    
    $("#crocs").on("click", function(index) 
    
    {
        numClicks++;
        $("#results").text("You clicked " + numClicks + " times");
    
    });
    
   