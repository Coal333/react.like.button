import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [like, setLike] = useState (false);
  
  const like반전 = () => setLike((현재like) => !현재like);
  
  let likeButton = <button onClick={like반전}>좋아요</button>;
  if (like === true){
    likeButton =<button onClick={like반전}>좋아요 취소</button>;
  }

  return (
    <div>
      <h1>좋아요 버튼</h1>
      {likeButton}
     </div>
  )
}

  // const [like, setLike,] = useState(false);
  // const [like2, setLike2,] = useState(false);

  // function 클릭시()
  // {
  //   setLike(!like);
  // }

  // function 클릭시2()
  // {
  //   setLike2(!like2);
  // }
  

  // return (
  //   <>
  //   {like === false ? (
  //    <button onClick={클릭시}>좋아요</button>


  //   ) : (
  //   <button onClick={클릭시}>좋아요 취소</button>
    
  //   )
  //   }

  //   {like2 === false ? (
  //    <button onClick={클릭시2}>싫어요</button>


  //   ) : (
  //   <button onClick={클릭시2}>싫어요 취소</button>
  //   )
  //   }

  //   </>
  // )
// }

export default App
