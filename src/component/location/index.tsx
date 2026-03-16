import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">오시는 길</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>
      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 기차 및 지하철(1호선, 수인분당선) 이용시
            <br />
            수원역 <b>2, 3번 출구</b> 나와서
            <br />
            롯데몰 외부 또는 내부를 가로질러 오시면 됩니다.
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            수원역 환승센터 하차 후
            <br />
            롯데몰 외부 또는 내부를 가로질러 오시면 됩니다.
          </div>
        </div>
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            - 웨딩홀 500 ~ 600대 동시 주차 가능
            <br />
            - 무료 주차 <b>2시간</b>
            {/* <br />
            - 주차권은 축의대 or 데스크 수령 */}
            <br />
            - 사전정산 (2층 에스컬레이터 앞)
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
