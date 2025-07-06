import React from 'react'

const DoneList = (listActivity) => {
  // console.log(props.dataActivity);
  
  let doneList=listActivity.listActivity.filter((item) => item.done !== '');
  // console.log(doneList);
  
  
  return (
    <div>
      <h1>Done:</h1>
      <div class="flex flex-row gap-3 ">

{doneList.map((item) =>{
  return(
    <div className={item.done>item.deadline?'delay card':'advance card'} >
      
        <div class="flex flex-col">
          <h1>{item.activity}</h1>
          <h2>
            <span>{item.important}</span> Priority
          </h2>
          <h2>Deadline: <span>{item.deadline}</span></h2>
          <h2>Done date: <span>{item.done}</span></h2>
          <h1>{item.done>item.deadline?'delay':item.done==item.deadline?'on time':'advance'}</h1>
        </div>
      
    </div>
  )
})}

</div>
    </div>
  )
}

export default DoneList
