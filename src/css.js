const string = `.skin * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.skin *::before,
.skin *::after {
  box-sizing: border-box;
}

.skin {
  position: relative;
    background: #ffe600;
  min-height: 50vh;
}
.nose {
  border: 10px solid #000000;
  border-color: #000000 transparent transparent;
  width: 0px;
  height: 0px;
  position: relative;
  left: 50%;
  top: 145px;
  margin-left: -10px; /*border:10px 左边10，右边10，所以应该m-l:10px*/
  z-index: 10;
}
.arc {
  position: absolute;
  width: 20px;
  height: 6px;
  left: -10px;
  top: -16px;
  border-radius: 10px 10px 0 0;
  background: #000000;
}
.eye {
  border: 3px solid #000000;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}
.eye::before {
  content: "";
  border: 3px solid #000000;
  width: 30px;
  height: 30px;
  display: block;
  background: #ffffff;
  border-radius: 50%;
  position: relative;
  left: 6px;
}
.eye.left {
  transform: translateX(-100px);
}
.eye.right {
  transform: translateX(100px);
}
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  left: 50%;
  top: 175px;
  margin-left: -100px;
}
.mouth .up {
  position: relative;
  top: -36px;
  z-index: 1;
}
.mouth .up .lip {
  border: 3px solid black;
  width: 76px;
  height: 40px;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -38px;
  background: #ffe600;
}
.mouth .up .lip.left {
  border-radius: 0 0 0 40px;
  transform: rotate(-25deg) translateX(-46px);
}
.mouth .up .lip.right {
  border-radius: 0 0 40px 0;
  transform: rotate(25deg) translateX(46px);
}
.mouth .up .lip::before {
  content: "";
  display: block;
  width: 11px;
  height: 40px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}
.mouth .up .lip.left::before {
  right: -10px;
}
.mouth .up .lip.right::before {
  left: -10px;
}
.mouth .up .lip::after {
  content: "";
  display: block;
  width: 100px;
  height: 16px;
  position: absolute;
  top: -10px;
  background: #ffe600;
}
.mouth .up .lip.left::after {
  left: -6px;
}
.mouth .up .lip.right::after {
  right: -6px;
}
.mouth .down {
  height: 180px;
  position: absolute;
  top: 0;
  width: 100%;
  overflow: hidden;
}
.mouth .down .circle1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}
.mouth .down .circle1 .circle2 {
  background: #ff485f;
  width: 150px;
  height: 300px;
  position: absolute;
  bottom: -165px;
  left: 50%;
  margin-left: -75px;
  border-radius: 150px;
}
.face {
  position: absolute;
  left: 50%;
  top: 200px;
  width: 88px;
  height: 88px;
  margin-left: -44px;
  border: 3px solid black;
  border-radius: 50%;
  background: #ff0000;
}
.face.left {
  transform: translateX(-180px);
}
.face.right {
  transform: translateX(180px);
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.nose:hover {
  transform-origin: 50% 100%;
  animation: wave 250ms infinite linear;
}`

export default string;