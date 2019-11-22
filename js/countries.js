
 $(document).on("change", "#country-select", function () {
     var url='http://api.worldbank.org/v2/country/'+$('#country-select option:selected').val()+'?format=json';
     $.get(url,function(data){
         var h3=document.createElement("h3");
         console.log(data[1]);
         h3.innerHTML="Country : "+data[1][0].name+"<br>Capital : "+data[1][0].capitalCity+"<br>"+"Region : "+data[1][0].region.value;
         document.getElementById("country-body").innerHTML="";
         document.getElementById("country-body").appendChild(h3);
     })     
});
