"use strict";
/*global $ */

$(document).ready(function () {
/*VARIABELEN declareren*/
      var x = "X",
        o = "O",
        score = 0,
        scoreX = $("#xScore").text("0"),
        scoreO = $("#oScore").text("0"),
        table1,
        table2,
        table3;
    
    
    
    $("#new").prop("disabled",true);
    $(".container").hide();
    $(".score").hide();
    
    
    /*FUNCTIE VAN DE BEGINSCHERM
      SPEEL WORDT AANGEMAAKT*/
    
    
    $("#new").prop("disabled",true);
    
    $("img").fadeToggle(1000, function (){
          
    $(".container").slideDown(400);
    /*FUNCTIES WAAR ALS JE LEVEL SELECTEERT WORDT DE BUTTON ENABLED */
        
    $("#easy").on("click",function(){
        
        $("#new").prop("disabled",false);
         if($("#new").text() === "PLAY AGAIN")
             $("#new").text("START GAME");
        table2.empty();
        table3.empty();
        $(".score").fadeToggle(100);
        
            
    });
    $("#medium").on("click",function(){
        
        $("#new").prop("disabled",false);
         if($("#new").text() === "PLAY AGAIN")
             $("#new").text("START GAME");
        table1.empty();
        table3.empty();
         $(".score").fadeToggle(100);
    
    });
    $("#hard").on("click",function(){
        
        $("#new").prop("disabled",false);
         if($("#new").text() === "PLAY AGAIN")
             $("#new").text("START GAME");
        table1.empty();
        table2.empty();
        $(".score").fadeToggle(100);
    });
        
     /*********************************************************/   
    /*FUNCTIE START GAME*/
    $("#new").on("click",function(){
    
        
         if ($("#easy").prop("checked") && $("#medium").prop("checked", false))
         {
                 $("#bord1").html("<table id='table1'></table>");
                 table1 = $("#bord1").children();
                 table1.html("<tr><td id='t1td1'></td><td id='t1td2'></td><td id='t1td3'></td></tr><tr><td id='t1td4'></td><td id='t1td5'></td><td id='t1td6'></td></tr><tr><td id='t1td7'></td><td id='t1td8'></td><td id='t1td9'></td></tr>");
                 $("#bord1").fadeIn(100);
                 $("#bord2").empty();
                 $("#bord3").empty();
                 $(".score").fadeIn(100);
                 Input();
                 
                        
         } 
         else 
         { // BEGIN VAN DE GROTE ELSE
            

            
             if ($("#easy").prop("checked", false) && $("#medium").prop("checked"))
             {
                    $("#bord2").html("<table id ='table2'></table>");
                    table2 = $("#bord2").children();
                    table2.html("<tr><td id='t2td1'></td><td id='t2td2'></td><td id='t2td3'></td><td id='t2td4'></td></tr><tr><td id='t2td5'></td><td id='t2td6'></td><td id='t2td7'></td><td id='t2td8'></td></tr><tr><td id='t2td9'></td><td id='t2td10'></td><td id='t2td11'></td><td id='t2td12'></td></tr><tr><td id='t2td13'></td><td id='t2td14'></td><td id='t2td15'></td><td id='t2td16'></td></tr>");
                    $("#bord2").fadeIn(100);
                    $("#bord1").empty();
                    $("#bord3").empty();
                    $(".score").fadeIn(100);
                    Input();
                    
             } 
                else 
                {

                    if ($("#hard").prop("checked") && $("#easy").prop("checked", false) && $("#medium").prop("checked", false))
                    {
                        $("#bord3").html("<table id ='table3'></table>");
                        table3 = $("#bord3").children();
                        table3.html("<tr><td id='t3td1'></td><td id='t3td2'></td><td id='t3td3'></td><td id='t3td4'></td><td id='t3td5'></td></tr><tr><td id='t3td6'></td><td id='t3td7'></td><td id='t3td8'></td><td id='t3td9'></td><td id='t3td10'></td></tr><tr><td id='t3td11'></td><td id='t3td12'></td><td id='t3td13'></td><td id='t3td14'></td><td id='t3td15'></td></tr><tr><td id='t3td16'></td><td id='t3td17'></td><td id='t3td18'></td><td id='t3td19'></td><td id='t3td20'></td></tr><tr><td id='t3td21'></td><td id='t3td22'></td><td id='t3td23'></td><td id='t3td24'></td><td id='t3td25'></td></tr>");
                        $("#bord3").fadeIn(100);
                        $("#bord2").empty();
                        $("#bord1").empty();
                        $(".score").fadeIn(100);
                        Input();
                       
                    }
                }

         }//einde grote else
          
              
/* CPU PLAYER MOVE */
         //  VOOR TABEL 1
         function CpuMove1() {
         var t1 = ["#t1td1", "#t1td2", "#t1td3", "#t1td4", "#t1td5",
                  "#t1td6 ", "#t1td7 ","#t1td8 ","#t1td9"];
               
           for (var i = 0; i < t1.length; i++)
           { 
               var id = t1[i];
           
               if ($(id).text() !== x && $(id).text() !== o)
                {
                    $(id).text(o);
                    return $(id);
                } 
              
            } 
           
        }; 
              
    // VOOR TABEL 2
         function CpuMove2() {
         var t2 = ["#t2td1", "#t2td2", "#t2td3", "#t2td4", "#t2td5",
                  "#t2td6 ", "#t2td7 ", "#t2td8 ", "#t2td9 ", "#t2td10",
                  "#t2td11", "#t2td12", "#t2td13", "#t2td14", "#t2td15",
                  "#t2td16"];
                      
         for (var i = 0; i < t2.length; i++)
         {
             var id = t2[i];
             
                 if ($(id).text() !== x && $(id).text() !== o)
                 {
                     $(id).text(o);
                     return $(id);
                 }
           
         }
     }; 

       //VOOR TABEL 3 
       function CpuMove3() {
        var t3 = ["#t3td1", "#t3td2", "#t3td3", "#t3td4", "#t3td5",
                  "#t3td6 ", "#t3td7 ", "#t3td8 ", "#t3td9 ", "#t3td10",
                  "#t3td11", "#t3td12", "#t3td13", "#t3td14", "#t3td15",
                  "#t3td16", "#t3td17", "#t3td18", "#t3td19", "#t3td20",
                  "#t3td21", "#t3td22", "#t3td23", "#t3td24", "#t3td25"];
           
           for (var i = 0; i < t3.length; i++)
           {
             var id = t3[i];
             
                 if ($(id).text() !== x && $(id).text() !== o)
                 {
                     $(id).text(o);
                     return $(id);
                 }
           
            }
        };
 /*FUNCTIE WINS() wordt uitgevoerd wanneer X of O wint*/
   function Wins(){       
      function Win1()
            {
                if($("#t1td1").text() === x && $("#t1td2").text() === x && $("#t1td3").text() === x || 
                $("#t1td4").text() === x && $("#t1td5").text() === x && $("#t1td6").text() === x ||
                $("#t1td7").text() === x && $("#t1td8").text() === x && $("#t1td9").text() === x ||
                $("#t1td1").text() === x && $("#t1td5").text() === x && $("#t1td9").text() === x ||
                $("#t1td1").text() === x && $("#t1td4").text() === x && $("#t1td7").text() === x ||
                $("#t1td2").text() === x && $("#t1td5").text() === x && $("#t1td8").text() === x ||
                $("#t1td3").text() === x && $("#t1td6").text() === x && $("#t1td9").text() === x)                                                                                  
                {
                    alert("X win!");
                    scoreX.text(parseInt(scoreX.text()) + 1);
                    $("#again").prop("disabled",false);
                    $("#new").text("PLAY AGAIN");
                                                   
                     
                }
                else if($("#t1td1").text() === o && $("#t1td2").text() === o && $("#t1td3").text() === o ||
                        $("#t1td4").text() === o && $("#t1td5").text() === o && $("#t1td6").text() === o ||
                        $("#t1td7").text() === o && $("#t1td8").text() === o && $("#t1td9").text() === o ||
                        $("#t1td1").text() === o && $("#t1td5").text() === o && $("#t1td9").text() === o ||
                        $("#t1td1").text() === o && $("#t1td4").text() === o && $("#t1td7").text() === o ||
                        $("#t1td2").text() === o && $("#t1td5").text() === o && $("#t1td8").text() === o ||
                        $("#t1td3").text() === o && $("#t1td6").text() === o && $("#t1td9").text() === o)
                         {
                                alert("O win!");
                                scoreO.text(parseInt(scoreO.text()) + 1);
                                $("#again").prop("disabled",false);
                                $("#new").text("PLAY AGAIN");
                             
                         }
               
            }
      
    function Win2()
            { if ($("#t2td1").text() === x && $("#t2td2").text() === x && $("#t2td3").text() === x && $("#t2td4").text() === x ||
                 $("#t2td5").text() === x && $("#t2td6").text() === x && $("#t2td7").text() === x && $("#t2td8").text() === x ||
                 $("#t2td9").text() === x && $("#t2td10").text() === x && $("#t2td11").text() === x && $("#t2td12").text() === x ||
                 $("#t2td13").text() === x && $("#t2td14").text() === x && $("#t2td15").text() === x && $("#t2td16").text() === x ||
                 $("#t2td1").text() === x && $("#t2td6").text() === x && $("#t2td11").text() === x && $("#t2td16").text() === x ||
                 $("#t2td4").text() === x && $("#t2td7").text() === x && $("#t2td10").text() === x && $("#t2td13").text() === x ||
                 $("#t2td1").text() === x && $("#t2td5").text() === x && $("#t2td9").text() === x && $("#t2td13").text() === x  ||
                 $("#t2td2").text() === x && $("#t2td6").text() === x && $("#t2td10").text() === x && $("#t2td14").text() === x ||
                 $("#t2td3").text() === x && $("#t2td7").text() === x && $("#t2td11").text() === x && $("#t2td15").text() === x ||
                 $("#t2td4").text() === x && $("#t2td8").text() === x && $("#t2td12").text() === x && $("#t2td16").text() === x)
                 {
                     alert("X win!");
                     $("#again").prop("disabled",false);
                      scoreX.text(parseInt(scoreX.text()) + 1);
                     $("#new").text("PLAY AGAIN");
                 }
                else if ($("#t2td1").text() === o && $("#t2td2").text() === o && $("#t2td3").text() === o && $("#t2td4").text() === o ||
                        $("#t2td5").text() === o && $("#t2td6").text() === o && $("#t2td7").text() === o && $("#t2td8").text() === o ||
                        $("#t2td9").text() === o && $("#t2td10").text() === o && $("#t2td11").text() === o && $("#t2td12").text() === o ||
                        $("#t2td13").text() === o && $("#t2td14").text() === o && $("#t2td15").text() === o && $("#t2td16").text() === o ||
                        $("#t2td1").text() === o && $("#t2td6").text() === o && $("#t2td11").text() === o && $("#t2td16").text() === o ||
                        $("#t2td4").text() === o && $("#t2td7").text() === o && $("#t2td10").text() === o && $("#t2td13").text() === o ||
                        $("#t2td1").text() === o && $("#t2td5").text() === o && $("#t2td9").text() === o && $("#t2td13").text() === o ||
                        $("#t2td2").text() === o && $("#t2td6").text() === o && $("#t2td10").text() === o && $("#t2td14").text() === o ||
                        $("#t2td3").text() === o && $("#t2td7").text() === o && $("#t2td11").text() === o && $("#t2td15").text() === o ||
                        $("#t2td4").text() === o && $("#t2td8").text() === o && $("#t2td12").text() === o && $("#t2td16").text() === o)
                        {
                             alert("O win!");
                            $("#again").prop("disabled",false);
                            scoreO.text(parseInt(scoreO.text()) + 1);
                            $("#new").text("PLAY AGAIN");
                                              
                        }
               
            }
    function Win3()
            { if ($("#t3td1").text() === x && $("#t3td2").text() === x && $("#t3td3").text() === x && $("#t3td4").text() === x && $("#t3td5").text() === x || 
                 $("#t3td6").text() === x && $("#t3td7").text() === x && $("#t3td8").text() === x && $("#t3td9").text() === x && $("#t3td10").text() === x || 
                 $("#t3td11").text() === x && $("#t3td12").text() === x && $("#t3td13").text() === x && $("#t3td14").text() === x && $("#t3td15").text() === x || $("#t3td16").text() === x && $("#t3td17").text() === x && $("#t3td18").text() === x && $("#t3td19").text() === x && $("#t3td20").text() === x ||
                 $("#t3td21").text() === x && $("#t3td22").text() === x && $("#t3td23").text() === x && $("#t3td24").text() === x && $("#t3td25").text() === x ||                 
                 $("#t3td1").text() === x && $("#t3td7").text() === x && $("#t3td13").text() === x && $("#t3td19").text() === x && $("#t3td25").text() === x ||
                 $("#t3td5").text() === x && $("#t3td9").text() === x && $("#t3td13").text() === x && $("#t3td17").text() === x && $("#t3td21").text() === x ||
                 $("#t3td1").text() === x && $("#t3td6").text() === x && $("#t3td11").text() === x &&  $("#t3td16").text() === x  && $("#t3td21").text() === x ||
                 $("#t3td2").text() === x && $("#t3td7").text() === x && $("#t3td12").text() === x && $("#t3td17").text() === x && $("#t3td22").text() === x ||
                 $("#t3td3").text() === x && $("#t3td8").text() === x && $("#t3td13").text() === x && $("#t3td18").text() === x && $("#t3td23").text() === x ||
                 $("#t3td4").text() === x && $("#t3td9").text() === x && $("#t3td14").text() === x && $("#t3td19").text() === x && $("#t3td24").text() === x ||
                 $("#t3td5").text() === x && $("#t3td10").text() === x && $("#t3td15").text() === x && $("#t3td20").text() === x && $("#t3td25").text() === x )
                 {
                     alert("X win!");
                      $("#again").prop("disabled",false);
                      scoreX.text(parseInt(scoreX.text()) + 1);
                     $("#new").text("PLAY AGAIN");
                    
                 }
             else if ($("#t3td1").text() === o && $("#t3td2").text() === o && $("#t3td3").text() === o && $("#t3td4").text() === o && $("#t3td5").text() === o || 
                 $("#t3td6").text() === o && $("#t3td7").text() === o && $("#t3td8").text() === o && $("#t3td9").text() === o && $("#t3td10").text() === o || 
                 $("#t3td11").text() === o && $("#t3td12").text() === o && $("#t3td13").text() === o && $("#t3td14").text() === o && $("#t3td15").text() === o || $("#t3td16").text() === o && $("#t3td17").text() === o && $("#t3td18").text() === o && $("#t3td19").text() === o && $("#t3td20").text() === o ||
                 $("#t3td21").text() === o && $("#t3td22").text() === o && $("#t3td23").text() === o && $("#t3td24").text() === o && $("#t3td25").text() === o ||                 
                 $("#t3td1").text() === o && $("#t3td7").text() === o && $("#t3td13").text() === o && $("#t3td19").text() === o && $("#t3td25").text() === o ||
                 $("#t3td5").text() === o && $("#t3td9").text() === o && $("#t3td13").text() === o && $("#t3td17").text() === o && $("#t3td21").text() === o ||
                 $("#t3td1").text() === o && $("#t3td6").text() === o && $("#t3td11").text() === o &&  $("#t3td16").text() === o  && $("#t3td21").text() === o ||
                 $("#t3td2").text() === o && $("#t3td7").text() === o && $("#t3td12").text() === o && $("#t3td17").text() === o && $("#t3td22").text() === o ||
                 $("#t3td3").text() === o && $("#t3td8").text() === o && $("#t3td13").text() === o && $("#t3td18").text() === o && $("#t3td23").text() === o ||
                 $("#t3td4").text() === o && $("#t3td9").text() === o && $("#t3td14").text() === o && $("#t3td19").text() === o && $("#t3td24").text() === o ||
                 $("#t3td5").text() === o && $("#t3td10").text() === o && $("#t3td15").text() === o && $("#t3td20").text() === o && $("#t3td25").text() === o )
                 {
                     alert("O win!");
                     $("#again").prop("disabled",false);
                     scoreO.text(parseInt(scoreO.text()) + 1);
                     $("#new").text("PLAY AGAIN");
                 }
          
               
            }
        
       
         Win1();
         Win2();
         Win3();
       
    }; /*FUNCTIE WINS()*/
          
   
   /*X of O op de tabelen plaatsen*/
          
        function Input()
        {
            $("td").one("click", function (){ 
            $(this).text(x);  // GEBRUIKER MOVE
            CpuMove2();
            CpuMove3();
            CpuMove1();
            Wins();
            
            });
        }
    
    });
        
    
      }); //StartGame functie***     
      
              }); /*document ready*/
 