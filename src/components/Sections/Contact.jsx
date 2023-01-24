import React from "react";
import styled from "styled-components";
export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="whiteBg">
        <div className="container">
          <ContactInfo>
            <h1 className="font40 extraBold">Bize Ulaşın </h1>
            <div className="container" style={{ padding: 0 }}>
              <div className="row ">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  Mithatpaşa Mah Eski Zirai Donatım Kurumu Bahçesi, 54100
                  <br />
                  Adapazarı/Sakarya
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="container" style={{ padding: 0 }}>
                    <div className="row ">
                      <div className="col-xs-3">
                        <b>Telefon :</b>
                      </div>
                      <div className="col-xs-9">
                        +90 533 722 41 93 / +90 537 608 82 50
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-xs-3">
                        <b>Mail :</b>
                      </div>
                      <div className="col-xs-9">info@bgyapitasarim.com</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ContactInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96722.91190262945!2d30.3822939!3d40.74902445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ccb2fad58e639f%3A0xb84f12f8c14f1221!2sSakarya!5e0!3m2!1str!2str!4v1674543269658!5m2!1str!2str"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  width: 100%;
`;
const ContactInfo = styled.div`
  padding: 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
