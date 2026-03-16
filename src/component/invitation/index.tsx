import { Fragment } from "react/jsx-runtime"
import {
  BRIDE_FULLNAME,
  BRIDE_INFO,
  BRIDE_FATHER,
  BRIDE_MOTHER,
  GROOM_FULLNAME,
  GROOM_INFO,
  GROOM_FATHER,
  GROOM_MOTHER,
  GROOM_TITLE,
  BRIDE_TITLE,
} from "../../const"
import { useModal } from "../modal"
import { Button } from "../button"
import { LazyDiv } from "../lazyDiv"
import PhoneIcon from "../../icons/phone-flip-icon.svg?react"
import EnvelopeIcon from "../../icons/envelope-icon.svg?react"

export const Invitation = () => {
  const { openModal, closeModal } = useModal()
  return (
    <LazyDiv className="card invitation">
      {/* <h2 className="english">Invitation</h2> */}
      <h2 className="korean">초대합니다</h2>

      <div className="break" />

      <div className="content" style={{fontSize: "0.96rem", marginTop: "0.3rem", marginBottom: "0.3rem"}}>초여름의 푸르름 속에서</div>
      <div className="content" style={{fontSize: "0.96rem", marginTop: "0.3rem", marginBottom: "0.3rem"}}>소중한 분들을 모시고</div>
      <div className="content"  style={{fontSize: "0.96rem", marginTop: "0.3rem", marginBottom: "0.3rem"}}>새로운 시작을 하려 합니다.</div>
      <div className="break" />
      <div className="content" style={{fontSize: "0.96rem", marginTop: "0.3rem", marginBottom: "0.3rem"}}>올바른 길로 인도하며</div>
      <div className="content" style={{fontSize: "0.96rem", marginTop: "0.3rem", marginBottom: "0.3rem"}}>서로를 믿고 응원하는</div>
      <div className="content" style={{fontSize: "0.96rem", marginTop: "0.3rem", marginBottom: "0.3rem"}}>부부가 되겠습니다.</div>
      <div className="break" />
      <div className="content" style={{fontSize: "0.96rem", marginTop: "0.3rem", marginBottom: "0.3rem"}}>행복한 가정을 이루도록</div>
      <div className="content" style={{fontSize: "0.96rem", marginTop: "0.3rem", marginBottom: "0.3rem"}}>오셔서 축복해 주세요.</div>

      <div className="break" />

      <div className="name" style={{marginBottom: "0.5rem"}}>
        {GROOM_FATHER} · {GROOM_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{GROOM_TITLE}</span>
        </span>{" "}
        {GROOM_FULLNAME}
      </div>
      <div className="name" style={{marginTop: "0.5rem"}}>
        {BRIDE_FATHER} · {BRIDE_MOTHER}
        <span className="relation">
          의 <span className="relation-name">{BRIDE_TITLE}</span>
        </span>{" "}
        {BRIDE_FULLNAME}
      </div>

      <div className="break" />

      <Button
        onClick={() => {
          openModal({
            className: "contact-modal",
            closeOnClickBackground: true,
            header: (
              <div className="title-group">
                <div className="title">축하 인사 전하기</div>
                <div className="subtitle">
                  전화, 문자메세지로 축하 인사를 전해보세요.
                </div>
              </div>
            ),
            content: (
              <>
                <div className="contact-info">
                  {GROOM_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
                <div className="contact-info">
                  {BRIDE_INFO.filter(({ phone }) => !!phone).map(
                    ({ relation, name, phone }) => (
                      <Fragment key={relation}>
                        <div className="relation">{relation}</div>
                        <div>{name}</div>
                        <div>
                          <PhoneIcon
                            className="flip icon"
                            onClick={() => {
                              window.open(`tel:${phone}`, "_self")
                            }}
                          />
                          <EnvelopeIcon
                            className="icon"
                            onClick={() => {
                              window.open(`sms:${phone}`, "_self")
                            }}
                          />
                        </div>
                      </Fragment>
                    ),
                  )}
                </div>
              </>
            ),
            footer: (
              <Button
                buttonStyle="style2"
                className="bg-light-grey-color text-dark-color"
                onClick={closeModal}
              >
                닫기
              </Button>
            ),
          })
        }}
      >
        연락하기
      </Button>
      <br />
    </LazyDiv>
  )
}
