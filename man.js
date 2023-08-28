nomeestudante = [];
function submit(){
    var nome1= document.getElementById("nome1").value;
    var nome2= document.getElementById("nome2").value;
    var nome3= document.getElementById("nome3").value;
    var nome4= document.getElementById("nome4").value;
nomeestudante.push(nome1);
nomeestudante.push(nome2);
nomeestudante.push(nome3);
nomeestudante.push(nome4);
console.log(nomeestudante);

document.getElementById("displayname").innerHTML=nomeestudante;
document.getElementById("submitbutton").style.display="none";
document.getElementById("sortingbutton").style.display="inline-block";
}
function sorting(){
    nomeestudante.sort();
    console.log(nomeestudante);
    document.getElementById("displayname").innerHTML=nomeestudante;

}







