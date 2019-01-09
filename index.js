function shout(string){
  return string.toUpperCase()
}

function logShout(string){
  console.log(shout(string));
}

function logWhisper(string){
  console.log(whisper(string))
}

function whisper(string){
  return string.toLowerCase()
}

function sayHiToGrandma(string){
  if(string.toUpperCase() === true){
  return 'YES INDEED'
  }
  if(string.toLowerCase() === true){
    return 'I can\'t hear you!'
  }
  if(string === 'I love you, Grandma.'){
    return 'I love you, too.'
  }
}
