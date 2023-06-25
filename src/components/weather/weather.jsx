import { useEffect, useState } from "react";
import { TiLocation } from "react-icons/ti";
import Cloud from "../../assets/images/Cloud.png";
import DustStorm from "../../assets/images/DustStorm.png";
import Fog from "../../assets/images/Fog.png";
import Rain from "../../assets/images/Rain.png";
import Shower from "../../assets/images/Shower.png";
import Snow from "../../assets/images/Snow.png";
import Sun from "../../assets/images/Sun.png";
import SunCloud from "../../assets/images/SunCloud.png";
import Thunder from "../../assets/images/Thunder.png";
import { styled } from "styled-components";

function Weather() {
    const [location, setLocation] = useState("");
    const [weather, setWeather] = useState("");
    const [temp, setTemp] = useState(0);

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

    const apiKakaoKey = process.env.REACT_APP_KAKAO_API;
    const GET_WEATHER_URL = (lat, lon) =>
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API}&units=metric&lang=ko`;
    const GET_LOCATION_URL = (lat, lon) =>
        `https://dapi.kakao.com/v2/local/geo/coord2address.json?y=${lat}&x=${lon}&input_coord=WGS84`;
    useEffect(() => {
        async function onSuccess(position) {
            const { latitude, longitude } = position.coords;
            console.log(latitude, longitude);
            {
                const response = await fetch(
                    GET_WEATHER_URL(latitude, longitude)
                );
                const data = await response.json();
                const { main, weather } = data;
                setTemp(Math.floor(main.temp));
                if (weather.length > 0) {
                    const id = weather[0].id;
                    if (200 > id && id < 300) {
                        setWeather(Thunder);
                    } else if (300 >= id && id <= 501) {
                        setWeather(Rain);
                    } else if (502 >= id && id <= 531) {
                        setWeather(Shower);
                    } else if (600 >= id && id <= 622) {
                        setWeather(Snow);
                    } else if (701 >= id && id <= 741) {
                        setWeather(Fog);
                    } else if (751 >= id && id <= 781) {
                        setWeather(DustStorm);
                    } else if (800 === id) {
                        setWeather(Sun);
                    } else if (801 >= id && id <= 803) {
                        setWeather(SunCloud);
                    } else if (804 === id) {
                        setWeather(Cloud);
                    } else if (900 >= id && id <= 962) {
                        setWeather(DustStorm);
                    }
                }
            }
            {
                const response = await fetch(
                    GET_LOCATION_URL(latitude, longitude),
                    {
                        method: "GET",
                        headers: { Authorization: `KakaoAK ${apiKakaoKey}` },
                    }
                );
                const data = await response.json();
                const { region_2depth_name, region_3depth_name } =
                    data?.documents[0]?.address;
                setLocation(region_2depth_name + " " + region_3depth_name);
            }
        }
        function onError(err) {
            console.error(err);
            console.error("위치 정보를 불러오지 못했습니다.");
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, [GET_WEATHER_URL, apiKakaoKey]);

    return (
        <>
            <img src={weather} alt="" />
            <LocationInfo>
                <span>{temp}°</span>
                <TiLocation className="icon_location" />
                {location}
            </LocationInfo>
        </>
    );
}

export default Weather;

const LocationInfo = styled.div`
    padding-left: 8px;
    span {
        padding-bottom: 4px;
        padding-left: 4px;
        display: inline-block;
        font-size: 20px;
        font-weight: 500;
        color: #242e47;
    }
    .icon_location {
        margin-left: 6px;
        font-size: 18px;
        margin-bottom: -3.4px;
        color: #258fff;
    }
`;
