 /*  
Temat zadania:
 Na stronie jest wyświetlany obraz z podpisem. 
 Podpis powinien pokazywać, ile razy kliknięto ten obraz. 
 Użyj jQuery aby to zrealizować - dodaj dla tego obrazu nasłuchiwacz zdarzeń click, który będzie powiększać zmienną numClicks oraz aktualizować podpis. 
 
Wykonanie: 
 Efekt jest poprawny ale prawdopodobnie kod zawiera błędy, bo edytor Khan Academy nie wyświetla, że zadanie wykonano dobrze.
 
 */
 
 var total = 1;
    $("#crocs").on("click", function(index, numClicks) 
    
    {
    var numClicks =  total ++;
    $("#results").text("You clicked " + numClicks + " times");
    
    });	
	