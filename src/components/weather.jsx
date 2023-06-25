import { useEffect, useState } from "react";

function Weather() {
    /**
     * https://home.openweathermap.org/
     * 위 사이트에서 날씨,위치 정보를 rest api로 받아와서 출력하는 컴포넌트를 작성 중이다
     * fetch를 통해 요청을 해야하는데 요청 주소에는 개인 계정마다 발급되는 api key를 입력해야한다
     * 네트워크 탭에서 보려면 볼 수는 있지만 깃허브에 올리기때문에 최대한 노출을 줄이고 싶었고
     * 환경 변수를 적용하여 아래와 같이 리액트에서 환경변수로 api key를 관리하였다
     *
     * 1. 루트 디렉토리에 .env파일 작성하기
     * 1-1. REACT_APP_ 로 꼭 시작해주기(prefix값 필수)
     * 1-2. 작성 된 문자열에는 "", '', ``등 넣지 않기 ;도 마찬가지
     * 2. 작성 후 프론트서버 재기동 할 것!
     * 3. 사용하려는 위치에서 process.env.REACT_APP_작성명 으로 호출해서 사용하면 됨
     * 4. 사용목적을 완성 시키기 위해 루트에 있는 .gitignore파일에 .env파일 추가하기
     */
    const apiKey = process.env.REACT_APP_WEATHER_API;
    console.log(apiKey);
    const GET_WEATHER_URL = (lat, lon) =>
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    // const [coords, setCoords] = useState([]);
    useEffect(() => {
        async function onSuccess(position) {
            const { latitude, longitude } = position.coords;
            // setCoords([latitude, longitude]);
            const data = await fetch(GET_WEATHER_URL(latitude, longitude));
            const json = await data.json();
            console.log(json);
        }
        function onError(err) {
            console.error(err);
            console.error("위치 정보를 불러오지 못했습니다.");
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    return <div></div>;
}

export default Weather;
