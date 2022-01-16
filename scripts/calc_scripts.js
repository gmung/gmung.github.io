function calc()
       {

          // se rapporte à la valeur présent du prêt
          var PV = parseFloat(document.getElementById('PV').value);

          // se rapporte à la mise de fond effectuée en % par le l'emprunteur
          var MF = parseFloat(document.getElementById("MF").value);

          // se rapporte au taux d'intérêt sur 5 ans
          var I = parseFloat(document.getElementById('I').value);
       
          // se rapporte au nombre de période de capitalisation du prêt
          var N = parseFloat(document.getElementById('N').value);

          var PVMF = PV - (PV * (MF/100));

          // se rapporte à l'équivalent de I
          var Ie = Math.pow((1 + ((I/100) / 2)), 2/12) - 1;

          var TauxSCHL5 = 0.04;
          var T5 = PVMF * TauxSCHL5;
          
          var TauxSCHL10 = 0.031;
          var T10 = PVMF * TauxSCHL10;
          
          var TauxSCHL15 = 0.028;
          var T15 = PVMF * TauxSCHL15;

          //document.getElementById('result').value = Math.round((PVMF/((1- Math.pow((1+Ie),-(N*12)))/Ie)) * 100) /100;
          
          var  a = document.getElementById('tauxSCHL_div');
          var b = document.getElementById('result_div');
          b.style.display = "block";
          
          if (MF >= 20){
              document.getElementById('paiement').value = Math.round((PVMF/((1- Math.pow((1+Ie),-(N*12)))/Ie)) * 100) /100;
              document.getElementById('tauxSCHL').value = "";
              document.getElementById('%to$').value = "";
              a.style.display = "none";
          }else{
                 if (MF == 15){
                     document.getElementById('paiement').value = Math.round(((PVMF+T15)/((1- Math.pow((1+Ie),-(N*12)))/Ie)) * 100) /100;
                     document.getElementById('tauxSCHL').value = TauxSCHL15 * 100;
                     document.getElementById('%to$').value = TauxSCHL15 * PV; 
                     a.style.display = "block";
                 }else{
                        if (MF == 10){
                            document.getElementById('paiement').value = Math.round(((PVMF+T10)/((1- Math.pow((1+Ie),-(N*12)))/Ie)) * 100) /100;
                            document.getElementById('tauxSCHL').value = TauxSCHL10 * 100;
                            document.getElementById('%to$').value = TauxSCHL10 * PV; 
                            a.style.display = "block";
                        }else{
                               if (MF == 5){
                                   document.getElementById('paiement').value = Math.round(((PVMF+T5)/((1- Math.pow((1+Ie),-(N*12)))/Ie)) * 100) /100;
                                   document.getElementById('tauxSCHL').value = TauxSCHL5 * 100;
                                   document.getElementById('%to$').value = TauxSCHL5 * PV;
                                   a.style.display = "block";
                               }else{

                               }
                        }
                 }
              }
       }

       
function Test() {
  var y = document.getElementById('result_div');
  y.style.display = "block";
}




       
       
 


              
       

          

