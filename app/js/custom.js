
function initializeWidget()
 {
// 	var myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");
// var requestOptions = {
//     method: "post",
//     headers: myHeaders,
//     redirect: "follow",
    
// };
// content = `<h1 style= "color: green;">por si algo</h1>`
// fetch("https://v1.nocodeapi.com/melquicedec/zohomail/yKNlUeNcYLePckhe/sendEmail?fromAddress=mzelaya@realtimeassistance.com&toAddress=zelayajeremy874@gmail.com&content="+ content +"&subject=Test", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));




	/*
	 * Subscribe to the EmbeddedApp onPageLoad event before initializing the widget 
	 */
	
	 ZOHO.embeddedApp.on("PageLoad",function(data)
 	{
		
	
	 	 
		if(data && data.Entity)
		{

	 	 	 
	 		ZOHO.CRM.API.getRecord({Entity:data.Entity,RecordID:data.EntityId})
	 		.then(function(response)
	 		{
				dataF = response.data;
				
				dataF.forEach(datos => {
					info = datos;
					infoFiltrada = info.Account_Name;
					infoInterna = infoFiltrada.name;
					systemSize = info.Total_System_Size;
					ammount = info.Financed_Amount;
					id = info.Client_ID;
					vendorName = info.Owner;
					correo = info.Owner.email;
					vendorName1 = vendorName.name;
					
				});
     				document.getElementById("nombre").value = (infoInterna.replace(/(\")/g,""));
					document.getElementById("tamano").value = JSON.stringify(systemSize);
					document.getElementById("precio").value = JSON.stringify(ammount);
					document.getElementById("vendedor").value = (vendorName1.replace(/(\")/g,""));
					document.getElementById("cedula").value = (id.replace(/(\")/g,""));
					document.getElementById("correo").value = (correo.replace(/(\")/g,""));
					
	 		});	
	 	}
		
	 })
	
	 
	ZOHO.embeddedApp.init();
}