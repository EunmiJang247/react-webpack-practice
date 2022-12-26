# react-webpack-practice

12월 8일
번들러
왜 써야하나?
-CRA : 
1. 필수적인 리액트 개발에 필요한 라이브러리를 설치해 준다. React, react dom이 있음. 
2. 그 중 하나가 전처리기(babel. Css, Typescript)의 역할을 알아서 해줌(번들러가 해주는 기능)
3. 백앤드 개발을 하지 않았는데. 배포가 가능하게 해준다. (번들러가 해주는 기능)

CRA는 눈에 보이지는 않지만 번들러의 역할을 해주는 패키지이다. 
-> Bundler란?
1. 파일분할로 인한 문제들을 해결해준다. 
    1. nodeJS가 등장함으로써 자바스크립트파일을 분할할수 있게 되었다. 
    2. 파일분할의 문제 : 통신을 할 때 쓸데없이 트래픽을 낭비한다 -> 번들러는 쪼개진 파일들을 하나로 묶어서 만들어주는 기능을 한다. 
    3. 이것뿐만 아니라 코드의 압축을 해서 용량이 줄어들고 로딩을 빠르게 하는것을 해준다. 
2. 전처리기 설정을 해준다. 
    1. 전처리가 필요한 라이브러리나 언어들을 처리해준다. 
    2. 별도의 작업 없이 번들러에 설정 한번만 해두면 알아서 해석을 해주는 기능이다. 
3. Dev Server & HMR을 지원한다. 
    1. 번들러 라이브러리를 쓰는 이유 (프론트앤드 개발자에게 매우 큰 편의성을 제공한다)
    2. Dev Server : 백앤드 개발 없이 내가 만든 웹 프론트앤드 프로젝트를 배포할 수 있게 함(SPA나 Static Wev을 만들때 매우 용이. 배포를 해야지만 테스트할수 있는 것들을 테스트해줌)
    3. HMR : Hot Module Reload : 모듈의 추가 수정 삭제를 실시간으로 프로젝트에 반영하는 기능(코드를 수정했을 때 확인하려면 새로고침을 했어야 하지만 이 과정을 알아서 해줌)

개발할때는 알필요 없는데 이제 이론적으로 알고있어야 한다.  번들러의 종류
1. Webpack : 2012년에 나왔다. CRA가 Webpack을 번들러로 사용하고 있음. 
    1. 장점 : js언어 외에도 지원하는 언어나 라이브러리 폭이 넓음. 
    2. 많은 개발자들이 오랫동안 사용해왔기에 안정적이고 다양하게 붙일 수 있는 기능들이 많음. 
2. Parcel : 2017년에 출시됨. 
    1. 목적: Webpack의 설정 복잡도를 해결하고자 나온 번들러. 
    2. 설정을 하는 작업이 아예 없다싶이함. 
    3. Webpack같은 경우는 각 언어마다의 loader가 존재하는데 이 loader라는 것 조차 설정을 안해도 됨. 
    4. 설정을 안해도 된다는 뜻은 반대로 Parcel이 지원하지 않는 내용이라면 쓸 수 없다는 의마와도 같음. 
    5. 일반적인 규모의 단순한 프로젝트에 적합
3. Rollup : 2016년에 출시됨. Webpack을 발전시킨 형태로 나온것. 
    1. 장점 : js언어 외에도 지원하는 언어나 라이브러리 폭이 넓음. 
    2. 웹팩이랑 내부적으로 돌아가는 방식이 다름. 
    3. 번들링 속도가 빠르고 번들링된 파일에 크기 또한 작다. 
    4. Webpack같은 경우는 번들링 결과를 무조건 프로젝트에서 사용하는 형태로밖에나올 수 없는 데 rollup은 추가적으로 ES6모듈 형태로도 만들 수 있다. 그래서 라이브러리를 만들 때는 왠만하면 롤업을 사용한다. 뷰가 롤업을 쓴다. 

   **Webpack
현재 버전5가 마지막버전. 
버전마다 문법이 상이함. 

1. Webpack의 전처리기 등록(babel)
    1. Dev Server와 HMR기능 등록
    2. React와 React DOM설치해서 CRA와 동일한 환경 만들것. 

npm install -D webpack
npm install -D webpack-cli

touch webpack.config.js

npm install -D babel-loader
npm install -D @babel/core.  //es6를 es5로 바꿔줌. 
npm install -D @babel/preset-env // 화살표 함수를 es5로 바꿔줌. 
npm install -D @babel/preset-react

Nom install react react-do
npx webpack


**Plugin / Dev Server 
-플러그인
1. loader는 Webpack의 부속품의 개념이라면 Plugin은 Webpack위에 올리는 또 다른 라이브러리 
2. Html-webpack-plugin : 번들링을 할 때마다 html파일을 자동으로 수정해주는 플러그인
3. Clean-webpack-plugin : 더이상 쓸모가 없어진 레거시 번들링 파일들을 삭제해주는 플러그인. 

npm install -D html-webpack-plugin
npm install -D clean-webpack-plugin

마지막으로 dev Server
쓰는 이유 : 백앤드개발 없이내가만든 프론트앤드 프로젝트를 배포해보기 위해서.. 
HMR기능이 자체적으로 포함되어 있음. 

Dev Server를 이용했을 때, 더이상 bundle파일을 만들어주지 않음. 
대신, 메모리에 번들링된 결과를 가지고 있음
모듈에 변화가 있을 때(추가/수정/삭제) 이를 감지할 수 있고 메모리에서 즉각 반영이 됨. 

npm install -D webpack-dev-server
 npx webpack serve : dev서버로 실행해라 



궁금한것. 
웹팩을 써서 CRA랑 같은 환경을 만드는게 오늘의 목적이었다. 
그러면 웹팩을 왜 알아야해?

CRA에서 지원하지 않는 내용 : TypeScript전처리기. 
이럴 바에야 이런 설정들을 한번에 묶어두고 필요할 때마다 사용하게는게 더 나음. 
그래서 많은 회사들이 CRA를 쓰지 않고, 사내 컨벤션 & 프로젝트 구조등을 반영한 번들러 패키지를 만들어줌. 

State management -> 뭘 쓸지에 따라서 폴더 구조 미리 만들어 둘 수 있음. 
Modern CSS -> 미리 컴포넌트들 만들어둘 수 있음(React다루면서 CSS신경 안쓰려고)
번들러 설정을 통해 우리 프로젝트의 컨벤션과 구조를 포함시킬 수 있음(전처리기 등)
—> 사내 라이브러리로 만드는 것. 


TS써야 하는가?
웹개발자 필수요소. 
기본적으로 자바스크립트와 모든 문법이 동일함. 내부적으로 구동되는 방식 또한 동일하다. 
기존 js의 문제
개발자의 오타나 실수에 의한 버그 혹은 에러를 실제 프로그램을 돌리고나서야만 확인할 수 있음. 
변수에 타입이 없기때문에 어떤 자료형을 넣어도 에러가 나지 않음. 
ts가 해주는 일은 딱 하나 
-> 변수들의 타입을 붙여주는 것 
-> Narrowing
-> 향상된 에러체크 

ts는 코드를 돌리기 전부터 에러를 출력해주는데 목적이 있음. 
