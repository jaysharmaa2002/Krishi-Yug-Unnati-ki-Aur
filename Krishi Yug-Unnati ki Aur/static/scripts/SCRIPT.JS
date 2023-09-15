var speechRecognition=window.webkitSpeechRecognition
var recognition=new speechRecognition()
var textbox = $("#textInput")
var instructions=$("#instructions")
var content=''
recognition.continuous=true
recognition.onstart=function()
{
	instructions.text("VOICE RECOGNITION IS ON")
}

recognition.onspeechend=function()
{
	instructions.text("NO ACTIVITY")
}

recognition.onerror=function()
{
	instructions.text("PLEASE CHECK YOUR INTERNET CONNECTION!")
}

recognition.onresult=function(event)
{
	var current=event.resultIndex;
	var transcript=event.results[current][0].transcript
	content+=transcript
	textbox.val(content)
}


$("#startbtn").click(function(event)
{
	if(content.length)
	{
		content+=''
	}
	recognition.start()
})


textbox.on('input',function()
{
	content=$(this).val()
})