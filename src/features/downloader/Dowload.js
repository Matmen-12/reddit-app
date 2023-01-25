import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectItems, getPosts, loadingState } from "./downloadSlice";

export function Download(){
const selectedItems = useSelector(selectItems);
const actualState = useSelector(loadingState);
const dispatch = useDispatch()
useEffect(() => {
  dispatch(getPosts())
}, [])


const entires = selectedItems.map((item) => {

  return (
//   <div className='row container-sm m-5 p-2 bg-light border'>
//   <img  className="img-fluid" src={item.img !== undefined ? item.img : "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg"}
//   />
//   <h3>{item.subject}</h3> 
//   <p>{item.description}</p> 
//   <div className='d-flex align-items-bottom-center justify-content-center'>
//   <div className='row border gap-1 justify-content-center'>  
//     <button type='button' className='col border bg-danger justify-content-center text-white'>Dislike</button>
//     <div className='text-center col border'>Number of likes: {item.likes}</div>
//     <button type='button'className='col border bg-success text-center text-white'>Like</button>
//   </div>
//   </div>
// </div>
<div className='card mb-2 bg-light'>
  <img onError="this.src= 'https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg'" className="card-img top max-height:50px" src={item.img !== undefined ? item.img : "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/insert-image-html.jpg"}/>
    <div className="card-body">
      <h2 className="card-title">{item.subject}</h2>
      <p className="card-text">{item.description}</p>
      <div className="col-8-center">
      <div className="row justify-content-center">
      <h3 className='col-3 text-center'>Likes: <strong>{item.likes}</strong></h3>
    </div>
      <button type='button' className='col-4 border bg-danger justify-content-center text-white btn-lg'>Dislike</button>
      <button type='button'className='col-4 border bg-success text-center text-white'>Like</button>
    </div>
    </div>
</div>

  )

})
return (
  <div className='container'>
  {actualState ? <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div> :  <div className='row'>{entires}</div>}
  </div>
)

}
