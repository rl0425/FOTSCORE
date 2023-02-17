import Main from "./component/main/Main";
import {useEffect} from "react";

function App() {

  // 화면 크기 조정 함수
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
      // <div><span>ss</span></div>
    <Main />
  );
}

export default App;
