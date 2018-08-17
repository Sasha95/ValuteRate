import React, { Component } from "react";
import logo from "../static/imges/logo.svg";
import envelope from "../static/imges/envelope.svg";
import phone from "../static/imges/phone.svg";
import user from "../static/imges/user.svg";
import navbaruser from "../static/imges/navbaruser.svg";
import userNav from "../static/imges/userNav.svg";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ReactModal from "react-modal";

import home from "../static/imges/personalImge/home.svg";
import credit from "../static/imges/personalImge/credit-card.svg";
import arrow from "../static/imges/personalImge/arrow.svg";
import settings from "../static/imges/personalImge/settings.svg";
import star from "../static/imges/personalImge/star.svg";

//#region стили
const Info = styled.span`
  color: white;
`;

const ModalScore = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #0c128f;
  padding-bottom: 8px;
`;
const SubScore = styled.div`
  font-size: 14px;
  font-weight: normal;
  color: #0c128f;
  opacity: 0.25;
`;

const UserImg = {
  borderRadius: "20px",
  backgroundColor: "#ffffff",
  width: "40px",
  height: "40px",
  padding: "0px",
  cursor: "pointer"
};

//#endregion

class Navbar extends Component {
  state = {
    isOpen: false,
    showModal: false,
    onHover: -1
  };

  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  componentWillMount() {
    ReactModal.setAppElement("body");
  }
  images = [home, credit, arrow, settings, star];
  links = [
    { name: "desktop", nameru: "Рабочий стол" },
    { name: "score", nameru: "Мой счет" },
    { name: "transfer", nameru: "Переводы" },
    { name: "private", nameru: "Личные данные" },
    { name: "referal", nameru: `Реферальная программа` }
  ];
  HoverLink = event => {
    this.setState({ onHover: Number(event.target.id) });
  };
  HoverLeave = () => {
    this.setState({ onHover: -1 });
  };
  render() {
    const data = this.props.testStore.getEntryDataFromServer;
    return (
      <div className="container">
        <div>
          <ReactModal
            id="right"
            isOpen={this.state.showModal}
            contentLabel="onRequestClose Example"
            onRequestClose={this.handleCloseModal}
            className="Modal"
            overlayClassName="Overlay"
          >
            {data["check"] ? (
              <div style={{ padding: "30px 40px 40px 40px" }}>
                <SubScore>На счету </SubScore>
                <ModalScore>
                  {data["valute"]} {data["score"]}
                </ModalScore>

                {this.links.map((link, key) => (
                  <div key={key} className="modalText">
                    <Link
                      id={key}
                      onClick={this.handleCloseModal}
                      action="REPLACE"
                      className="linkDecoration row"
                      to={`/personal/` + link["name"]}
                    >
                      {key === this.state.onHover ? (
                        <div className="col-2 p-0">
                          <img id={key} alt="" src={this.images[key]} />
                        </div>
                      ) : (
                        ""
                      )}
                      <div
                        id={key}
                        onMouseEnter={this.HoverLink}
                        onMouseLeave={this.HoverLeave}
                        className="col-10 p-0"
                      >
                        {link["nameru"]}
                      </div>
                    </Link>
                  </div>
                ))}

                <div
                  className="linkDecoration"
                  style={{ paddingTop: "31px" }}
                  id="exit"
                >
                  Выйти
                </div>
              </div>
            ) : (
              <div>
                <div className="d-flex justify-content-center">
                  <button
                    className="mb-0 BtnEnter"
                    style={{
                      width: "160px",
                      opacity: 1
                    }}
                    onClick={this.entryHandler}
                  >
                    Вход
                  </button>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="BtnRegistration"
                    onClick={this.OpenSideBar}
                  >
                    <img alt="registration" src={user} className="user pr-2" />
                    Регистрация
                  </button>
                </div>
              </div>
            )}
          </ReactModal>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div
            className="row align-items-center"
            style={{ width: "1366px", margin: "0px" }}
          >
            <Link
              className="navbar-brand col log"
              to="/"
              style={{
                paddingLeft: "103px",
                paddingTop: "26px",
                paddingBottom: "22px"
              }}
            >
              <div className="img.logo">
                <img src={logo} alt="logo" className="logo" />
              </div>
            </Link>
            <span
              className="col-md-auto d-none d-lg-block"
              id="mail"
              style={{
                marginTop: "31px",
                marginBottom: "31px"
              }}
            >
              <Info>
                <img src={envelope} alt="mail" /> info@corridor.com
              </Info>
            </span>
            <span
              className="col-md-auto d-none d-lg-block"
              id="phone"
              style={{
                marginTop: "31px",
                marginBottom: "31px"
              }}
            >
              <Info>
                <img src={phone} alt="phone" />
                +7 499 586-10-25
              </Info>
            </span>

            {data["check"] ? (
              <div
                className="d-flex align-items-center col navbarImg"
                onClick={this.handleOpenModal}
                style={{ cursor: "pointer" }}
              >
                <span
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#ffffff",
                    borderRadius: 30,
                    padding: "12px 17px 17px 17px"
                  }}
                >
                  <img src={navbaruser} alt="user" />
                </span>
                <span style={{ paddingLeft: "15px", color: "white" }}>
                  <span style={{ fontSize: "15px", fontWeight: "bold" }}>
                    {data["name"]}
                  </span>
                  <div
                    style={{
                      fontFamily: "Gravity-Regular",
                      fontSize: "15px",
                      fontWeight: "normal"
                    }}
                  >
                    {data["valute"]}
                    {data["score"]}
                  </div>
                </span>
              </div>
            ) : (
              <div className="col-xs-auto d-none d-md-none d-md-block d-lg-block">
                <span className="mx-2 ml-3">
                  <button className="BtnEnter" onClick={this.entryHandler}>
                    Вход
                  </button>
                </span>
                <span>
                  <button
                    className="BtnRegistration"
                    onClick={this.OpenSideBar}
                  >
                    <img alt="registration" src={user} className="user pr-2" />
                    Регистрация
                  </button>
                </span>
              </div>
            )}

            <div
              className="col-md-auto col-sm-auto col-auto select"
              style={{
                marginTop: "20px",
                marginBottom: "20px",
                paddingRight: "103px"
              }}
            >
              <select
                name=""
                id="input0"
                required="required"
                className="check-lang"
              >
                <option value="RU">RU</option>
                <option value="EN">EN</option>
                <option value="DE">DE</option>
                <option value="FR">FR</option>
              </select>
            </div>
            <div
              className="btn-group col-md-auto d-sm-block d-md-none d-lg-none"
              style={UserImg}
              onClick={this.handleOpenModal}
            >
              <img
                alt="user"
                style={{
                  padding: "12px"
                }}
                src={userNav}
              />
            </div>
          </div>
        </nav>
      </div>
    );
  }
  OpenSideBar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.handleCloseModal();
    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["Registation"]);
  };
  entryHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.handleCloseModal();
    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["Entry"]);
  };
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onChangeState: isClicked => {
      dispatch({
        type: "RESET"
      });
      dispatch({
        type: "CHANGE_STATE",
        payload: isClicked
      });
    },
    componentForSidebar: component => {
      dispatch({ type: "TRANSFER_COMPONENT", payload: component });
    }
  })
)(Navbar);
