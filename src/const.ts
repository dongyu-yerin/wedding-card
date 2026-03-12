import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"
import "dayjs/locale/ko"

dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.locale("ko")

export { dayjs }

export const WEDDING_DATE = dayjs.tz("2026-06-21 10:30", "Asia/Seoul")
export const WEDDING_DATE_FORMAT = `YYYY년 MMMM D일 dddd A h시${WEDDING_DATE.minute() === 0 ? "" : " m분"}`

// 예식 당월 휴무일. 켈린더에 표시하기 위함.
// 예: 예식일 8월 -> 8월 15일 광복절
export const HOLIDAYS = [3]

export const LOCATION = "메리빌리아 더 프레스티지 수원"
export const LOCATION_ADDRESS = "경기 수원시 권선구 세화로 116 메리빌리아더프레스티지 웨딩홀"

// 카카오톡 공유 시 위치 정보로 사용할 주소.
// LOCATION 과 동일하게 설정해도 무방하나, 필요에 따라 좀 더 상세히 작성 가능.
export const SHARE_ADDRESS = LOCATION_ADDRESS
export const SHARE_ADDRESS_TITLE = LOCATION

// 네이버 지도 및 카카오 네비게이션에 사용할 좌표. [경도, 위도] 형식.
export const WEDDING_HALL_POSITION = [126.996539,  37.262752]

// 네이버 지도의 웨딩홀 장소 ID
// 네이버 지도 웹페이지에서 웨딩홀 검색 후 URL에서 확인 가능.
// 예: https://map.naver.com/p/entry/place/13321741 -> 13321741
export const NMAP_PLACE_ID = 1856237237

// 카카오 지도의 웨딩홀 장소 ID
// 카카오 지도 웹페이지에서 웨딩홀 검색 후 해당 장소에서 상세보기 클릭 시 URL에서 확인 가능.
// 예: https://place.map.kakao.com/8634826 -> 8634826
export const KMAP_PLACE_ID = 8634826

export const BRIDE_FULLNAME = "심예린"
export const BRIDE_FIRSTNAME = "예린"
export const BRIDE_TITLE = "장녀"
export const BRIDE_FATHER = "심상길"
export const BRIDE_MOTHER = "임순원"
export const BRIDE_INFO = [
  {
    relation: "신부",
    name: BRIDE_FULLNAME,
    phone: "010-4143-2962",
    account: "",
  },
  {
    relation: "신부 아버지",
    name: BRIDE_FATHER,
    phone: "010-5455-2962",
    account: "농협은행 352-0365-3643-73",
  },
  {
    relation: "신부 어머니",
    name: BRIDE_MOTHER,
    phone: "010-8822-2962",
    account: "농협은행 179-1775-2044-877",
  },
]

export const GROOM_FULLNAME = "김동유"
export const GROOM_FIRSTNAME = "동유"
export const GROOM_TITLE = "차남"
export const GROOM_FATHER = "김기수"
export const GROOM_MOTHER = "송현주"
export const GROOM_INFO = [
  {
    relation: "신랑",
    name: GROOM_FULLNAME,
    phone: "010-4217-8336",
    account: "우리은행 1002-164-616228",
  },
  {
    relation: "신랑 아버지",
    name: GROOM_FATHER,
    phone: "010-3613-2252",
    account: "농협은행 356-0625-3625-13",
  },
  {
    relation: "신랑 어머니",
    name: GROOM_MOTHER,
    phone: "010-3617-8336",
    account: "",
  },
]
