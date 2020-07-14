

 var com=[]

$("#sub").on("click",function(){
	com.push({
	user:document.getElementById('User').value,
	comment:document.getElementById('comment').value	
	})
	
return com
})

$("#butt").on("click",function(){
	if(com.length>1){
		com.shift()
	}
	if (com.length===0) {
		alert("No comments to show !")
	}
	 for (var i = 0; i < com.length; i++) {
   	$(`<p>${com[i].user+": "+com[i].comment}</p>`).appendTo(".comments")
          }
})