import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";




// function App() {
//   //   const [like, setLike] = useState (false);

//   //   const [Nolike, NosetLike] = useState (false);

//   //   const like반전 = () => setLike((현재like) => !현재like);

//   //   const Nolike반전 = () => NosetLike((현재Nolike) => !현재Nolike);

//   //   let likeButton = <button onClick={like반전}>좋아요</button>;
//   //   if (like === true){
//   //     likeButton =<button onClick={like반전}>좋아요 취소</button>;
//   //   }

//   //   let NolikeButton = <button onClick={Nolike반전}>싫어요</button>;
//   //   if (Nolike === true){
//   //     NolikeButton =<button onClick={Nolike반전}>싫어요 취소</button>;
//   //   }

//   //   return (
//   //     <div>
//   //       <h1>좋아요 버튼</h1>
//   //       {likeButton}
//   //       <h1>싫어요 버튼</h1>
//   //       {NolikeButton}
//   //      </div>
//   //   )

//   // }

//   // const [like, setLike,] = useState(false);
//   // const [like2, setLike2,] = useState(false);

//   // function 클릭시()
//   // {
//   //   setLike(!like);
//   // }

//   // function 클릭시2()
//   // {
//   //   setLike2(!like2);
//   // }

//   // return (
//   //   <>
//   //   {like === false ? (
//   //    <button onClick={클릭시}>좋아요</button>

//   //   ) : (
//   //   <button onClick={클릭시}>좋아요 취소</button>

//   //   )
//   //   }

//   //   {like2 === false ? (
//   //    <button onClick={클릭시2}>싫어요</button>

//   //   ) : (
//   //   <button onClick={클릭시2}>싫어요 취소</button>
//   //   )
//   //   }

//   //   </>
//   // )

//   const [like, setLike] = useState(false);
//   const [dislike, setDisLike] = useState(false);

//   const AAA = () => {
//     if (dislike === true) {
//       setDisLike(false);
//     }
//     setLike(!like);
//   };

//   const BBB = () => {
//     if (like === true) {
//       setLike(false);
//     }
//     setDisLike(!dislike);
//   };

//   const 좋아요또는취소버튼 = like ? (
//     <button onClick={AAA}>좋아요 취소</button>
//   ) : (
//     <button onClick={AAA}>좋아요</button>
//   );

//   const 안좋아요또는취소버튼 = dislike ? (
//     <button onClick={BBB}>안좋아요 취소</button>
//   ) : (
//     <button onClick={BBB}>안좋아요</button>
//   );

//   return (
//     <div>
//       {좋아요또는취소버튼}
//       {안좋아요또는취소버튼}
//     </div>
//   );
// }

// export default App;




function App() {
  
  const [like, setLike] = useState(false);
  const [dislike, setDisLike] = useState(false);

  const AAA = () => {
    if (dislike === true) {
      setDisLike(false);
    }
    setLike(!like);
  };

  const BBB = () => {
    if (like === true) {
      setLike(false);
    }
    setDisLike(!dislike);
  };

  const 좋아요또는취소버튼 = like ? (
    <button onClick={AAA}>좋아요 취소</button>
  ) : (
    <button onClick={AAA}>좋아요</button>
  );

  const 안좋아요또는취소버튼 = dislike ? (
    <button onClick={BBB}>안좋아요 취소</button>
  ) : (
    <button onClick={BBB}>안좋아요</button>
  );

  return (
    <div>
      {좋아요또는취소버튼}
      {안좋아요또는취소버튼}
    </div>
  );
}

export default App;

