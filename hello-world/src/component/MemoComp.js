import React from 'react'

function MemoComp({name}) {

    console.log('MemoCompenet');
  return (
   
    <div>
        MemoComp <br/>
        {name}
    </div>
  )
}

export default React.memo(MemoComp)