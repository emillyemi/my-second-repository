let vitorias = 100
let derrotas = 2

score (vitorias, derrotas)
function score(vitorias, derrotas){
 nivel = " "
 saldoVitorias = vitorias - derrotas
      if (saldoVitorias < 10){
          nivel = "Ferro"
          }
        else if(saldoVitorias <= 20){
            nivel = "Bronze"
            }
         else if (saldoVitorias <= 50){
            nivel = "Prata"
            }
            else if(saldoVitorias <= 80){
               nivel = "Ouro"
               }
                 else if(saldoVitorias <= 90){
            nivel = "Diamante"
            }
            else if (saldoVitorias <= 100){
              nivel = "Lendário"
                }
           else if(saldoVitorias >= 101){
               nivel = "Imortal"
               }
}

  console.log("O Herói tem saldo de " + (saldoVitorias) + " e está no nível de " + (nivel))
