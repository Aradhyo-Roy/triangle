function calculate(){
    var number_1= Number(document.getElementById("a").value)
    var number_2= Number(document.getElementById("b").value)
    var number_3= Number(document.getElementById("c").value)
    area=1.5*number_1*number_2;
    perimeter=number_1+number_2+number_3;
    document.getElementById("area").innerHTML=area;
    document.getElementById("perimeter").innerHTML=perimeter;
}