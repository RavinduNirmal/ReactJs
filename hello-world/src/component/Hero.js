// import React from 'react'

// function Hero({hero}) {
 
//      if(hero==='joker'){
//         throw new Error('Not a hero')
//      }

//   return (
//     <div>
//         {hero}
//     </div>
//   )
// }

// export default Hero

// import React from 'react'

// function Hero({heroname}) {

//     if(heroname==='joker'){
//         throw new Error('Not a Hero')
//     }
//   return (
//     <div>{heroname}</div>
//   )
// }

// export default Hero;


import React from 'react'

function Hero({heroname}) {

  if(heroname === 'joker'){
    throw new Error('Not a hero')
  }
  
  return (
    <div>
      {heroname}
    </div>
  )
}

export default Hero