//variables



let btn = document.querySelector('#new-quote');
let person = document.querySelector('.person');
let quote = document.querySelector('.quote');


//quotes

const quotes =  [
    { 
      quote: `"The only limit to our realization of tomorrow is our doubts of today."`, 
      person: `Franklin D. Roosevelt` 
    },
  
    { 
      quote: `"Success is not final, failure is not fatal: It is the courage to continue that counts."`, 
      person: `Winston Churchill` 
    },
  
    { 
      quote: `"In the middle of difficulty lies opportunity."`, 
      person: `Albert Einstein` 
    },
  
    { 
      quote: `"Don't watch the clock; do what it does. Keep going."`, 
      person: `Sam Levenson` 
    },
  
    { 
      quote: `"The best way to predict the future is to invent it."`, 
      person: `Alan Kay` 
    },
  
    { 
      quote: `"Your time is limited, so don't waste it living someone else's life."`, 
      person: `Steve Jobs` 
    },
  
    { 
      quote: `"You miss 100% of the shots you don't take."`, 
      person: `Wayne Gretzky` 
    },
  
    { 
      quote: `"It does not matter how slowly you go as long as you do not stop."`, 
      person: `Confucius` 
    },
  
    { 
      quote: `"If you want to lift yourself up, lift up someone else."`, 
      person: `Booker T. Washington` 
    },
  
    { 
      quote: `"Success usually comes to those who are too busy to be looking for it."`, 
      person: `Henry David Thoreau` 
    },
  
    { 
      quote: `"Opportunities don't happen. You create them."`, 
      person: `Chris Grosser` 
    },
  
    { 
      quote: `"Believe you can and you're halfway there."`, 
      person: `Theodore Roosevelt` 
    },
  
    { 
      quote: `"The only way to do great work is to love what you do."`, 
      person: `Steve Jobs` 
    },
  
    { 
      quote: `"Hard work beats talent when talent doesn't work hard."`, 
      person: `Tim Notke` 
    },
  
    { 
      quote: `"I find that the harder I work, the more luck I seem to have."`, 
      person: `Thomas Jefferson` 
    }
  ];

  
btn.addEventListener('click',function(){
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person; 
})