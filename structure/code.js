tkt = 0
svv = 0.0
squ = 0
dia = 1

while(dia < 4){
  if(dia == 1){
    console.log("no dia 19/01")
    svv = 153.98
    squ = 3
    tkt = svv/squ
    tkt = Math.round(tkt)
    }
  if(dia == 2){
    console.log("no dia 20/01")
    svv = 337.01
    squ = 7
    tkt = svv/squ
    tkt = Math.round(tkt)
  }

  if(dia == 3){
    console.log("no dia 23/01")
    svv = 295.33
    squ = 5
    tkt = svv/squ
    tkt = Math.round(tkt)
    } 
  
  console.log("O valor das vendas é de:", svv) 
  console.log("A quantidade total de vendas foi de:", squ) 
  console.log("então o ticket médio diário do seu restaurante foi: ", tkt, "\n")

  dia++
  }
