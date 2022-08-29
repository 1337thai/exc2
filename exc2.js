function verifyEnablement(){
    let selectedValue = document.querySelector("select").value


    if(selectedValue == "disabled"){
            document.querySelector(".some-text").disabled = true 
             
         let pEelement =   document.querySelector("#message")

         pEelement.innerText = "DESABILITADO"

         pEelement.style.background = "red"
        pEelement.style.color = "white"
    }

        else{
            document.querySelector(".some-text").disabled = false

            let pEelement = document.querySelector("#message")

            pEelement.innerText = ""
        }
    

}