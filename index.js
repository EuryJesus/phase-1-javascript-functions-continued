function saturdayFun(msg = 'roller-skate'){
    return `This Saturday, I want to ${msg}!`
}

function mondayWork(msg = 'go to the office'){
    return `This Monday, I will ${msg}.`
}

function wrapAdjective(special){
    const stage1 = 'You are...!';
return  function (msg = 'a hard worker'){
    const stage2 = 'You are...!';
    return function(msg = 'a dedicated programmer'){
        console.log(`${stage1} ${stage2} ${special}`)

      };
    };
 }
 const encouragingPromptFucntion = wrapAdjective('special')
wrapAdjective('special')('a dedicated programmer');
wrapAdjective('special')('a hard worker')