import {
  BRIDE_FULLNAME,
  GROOM_FULLNAME,
  LOCATION,
  WEDDING_DATE,
  WEDDING_DATE_FORMAT,
} from "../../const"
import { COVER_IMAGE } from "../../images"
import { LazyDiv } from "../lazyDiv"

const DAY_OF_WEEK = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

export const Cover = () => {
  return (
    <LazyDiv className="card cover">
      <h2 className="korean">동유 ♥ 예린</h2>
      <div className="image-wrapper">
        <img src={COVER_IMAGE} alt="sample" />
      </div>
      {/* <div className="subtitle">Save the date for the wedding of</div> */}
      <div  className="subtitle"/>
      {/* <div className="names">
        {GROOM_FULLNAME}
        <div className="divider" />
        {BRIDE_FULLNAME}
      </div> */}
      <div className="info">{WEDDING_DATE.format(WEDDING_DATE_FORMAT)}</div>
      <div className="info">수원 메리빌리아 더 프레스티지 가든홀</div>
    </LazyDiv>
  )
}
