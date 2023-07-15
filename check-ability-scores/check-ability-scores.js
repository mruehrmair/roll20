// Register a function for the 'ready' event.  When it occurs, which happens only once
//   this function will get called.  This avoids getting events resulting from the
//   loading of all the game state into the API
on('ready',()=>{

  // Declare a function called myFunc.  This is using the "Fat Arrow" function syntax
  //   and the const declaration from Javascript ES6
  const sendToChat = (msg)=>{
   sendChat('check-ability-scores', msg);    
  };
  
  const areRollsOk = (rolls)=>{
   let result = true;
   const isHigherThan = (roll) => roll > 13;
   const sum = rolls.reduce((partialSum, a) => partialSum + a, 0);
   const rollsLowerThan = rolls.filter(roll => roll < 6);
   result = rolls.some(isHigherThan) && (rollsLowerThan.length >= 2 ? false : true) && sum >= 55;
   return result;
  };

  // Register a function for the 'chat:message' event.  This event occurs for all
  //   chat messages, so it's important to filter down to just the ones you care about
  on('chat:message',msg=>{
    //  First check the type is an API message.  API messages are not show shown in chat
    //    and begin with a ! in the first character of the message.
    //
    //  Next, make sure this is our API message.  The regular expression checks that the 
    //    command starts with "!call-my-func" and either ends or has a space, all case 
    //    insensitive.
    if('api'===msg.type && /^!check-ability-scores(\b\s|$)/i.test(msg.content)){
      
      let dicerolls = msg.inlinerolls||[];
      
      if(dicerolls.length == 0)
      {
          sendToChat('No rolls found.');
      }
      else{
        //myFunc(JSON.stringify(dicerolls));
        let diceRollTotals = [];
        dicerolls.forEach(r=>{ diceRollTotals.push((r.results||{}).total) });
        if(areRollsOk(diceRollTotals))
        {
            sendToChat(`Your roll results => ${diceRollTotals.join()}`);
        }
        else
        {
            sendToChat(`Your rolls are too low. Consider rerolling => ${diceRollTotals.join()}`);
        }
      }   
    }
  });
});
