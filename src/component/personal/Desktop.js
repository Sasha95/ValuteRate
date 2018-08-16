import React, { Component } from "react";
import info from "../../static/imges/personalImge/info-default.svg";
import { data } from "../../data/dataForDesctop";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { connect } from "react-redux";
//#region
const Income = styled.div`
  font-size: 24px;
  font-family: Gravity;
  font-style: Gravity-Bold;
  color: #0c128f;
  font-weight: bold;
`;

const ButtonAdd = styled.button`
  width: 220px;
  height: 50px;
  border-radius: 2px;
  background-color: #0c128f;
  color: white;
  border: none;
  margin: 0px;
  cursor: pointer;
`;
const ButtonToday = ButtonAdd.extend`
  margin: 0px;
  border: solid 1px #cbd0e8;
  background-color: #ffffff;
  color: #0c128f;
  font-weight: bold;
`;
//#endregion
class Desktop extends Component {
  state = {
    isOpen: false,
    windowWidth: false
  };
  addHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["AddFacilities"]);
  };

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth <= 572 ? true : false
    });
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    const block1 = () => {
      return (
        <div className="box" style={{ maxHeight: "290px" }}>
          <div className="row">
            <div className="col inc" style={{ whiteSpace: "nowrap" }}>
              <div>
                <span className="smallInfo">
                  Заработок на сегодня
                  {"   "}
                </span>
                <img src={info} alt="подробная информация" />
              </div>
              <div
                className="TextTodayDesktop"
                style={{ position: "absolute" }}
              >
                {data["valute"]}
                {data["today"]}
              </div>
            </div>
            {this.state.windowWidth ? (
              ""
            ) : (
              <div style={{ paddingRight: "15px", textAlign: "right" }}>
                <span className="smallInfo">За месяц</span>
                <Income>
                  {data["valute"]}
                  {data["today"]}
                </Income>
              </div>
            )}
          </div>
          {this.state.windowWidth ? (
            ""
          ) : (
            <div>
              <div style={{ textAlign: "right" }}>
                <span className="smallInfo">За неделю</span>
                <Income>
                  {data["valute"]}
                  {data["week"]}
                </Income>
              </div>
              <div style={{ paddingTop: "60px" }}>
                <ButtonToday className="col"> Сегодняшний коридор</ButtonToday>
              </div>
            </div>
          )}
          {/* {} */}
          {this.state.windowWidth ? (
            <div className="container">
              <div
                className="row justify-content-center align-items-center"
                style={{ paddingTop: "15%" }}
              >
                <div style={{ paddingRight: "15px", textAlign: "center" }}>
                  <span className="smallInfo">За месяц</span>
                  <Income>
                    {data["valute"]}
                    {data["today"]}
                  </Income>
                </div>
                <div>
                  <span className="smallInfo">За неделю</span>
                  <Income>
                    {data["valute"]}
                    {data["week"]}
                  </Income>
                </div>
              </div>
              <div className="row justify-content-center align-items-center">
                <ButtonToday className="row align-items-center">
                  {" "}
                  Сегодняшний коридор
                </ButtonToday>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      );
    };
    const block2 = () => {
      return (
        <div
          className={
            this.state.windowWidth ? "col px-3 w-100" : "col-4 p-0 w-100"
          }
        >
          <div
            className="box"
            style={{
              maxHeight: this.state.windowWidth ? "195px" : "290px",
              textAlign: "center"
            }}
          >
            <span className="smallInfo">Мой счёт</span>
            <Income style={{ fontSize: "40px" }}>
              {data["valute"]}
              {data["score"]}
            </Income>
            <div
              style={{ paddingTop: this.state.windowWidth ? "0px" : "95px" }}
            >
              <ButtonAdd className="col" onClick={this.addHandler}>
                Добавить средства
              </ButtonAdd>
            </div>
          </div>
        </div>
      );
    };
    const block3 = () => {
      return (
        <div
          className={this.state.windowWidth ? "col w-100 p-0" : "col-8 w-100"}
        >
          <div className="box">
            <div className="text">
              <span className="smallInfo">Дохода с учетом комиссии </span>
              <img src={info} alt="подробная информация" /> {"  "}
              <Income style={{ fontSize: "40px" }}>
                {data["valute"]}
                {data["commission"]}
              </Income>
            </div>
          </div>
        </div>
      );
    };
    const block4 = () => {
      return (
        <div className={this.state.windowWidth ? "col p-0" : "col-4 p-0"}>
          <div className="box">
            <span className="smallInfo">Реферальная программа</span>
            <Income style={{ fontSize: "40px" }}>
              {data["valute"]}
              {data["referal"]}
            </Income>
          </div>
        </div>
      );
    };

    return this.props.testStore.dataForDesktop[0] == undefined ? (
      <div className="mx-auto align-self-center">
        <ReactLoading
          type="spinningBubbles"
          color="#0c128f"
          height={150}
          width={150}
        />
      </div>
    ) : Number(this.props.testStore.dataForDesktop[0]) <= 0 ? (
      <div
        className="col w-100 p-0"
        style={{ borderRadius: "2px", border: "solid 1px #cbd0e8" }}
      >
        <div className="nomamiTitle">Необходимо добавить средства</div>
        <div className="nomanyBase">
          Здесь будет отображаться основная информация о состоянии счета и ваших
          доходах на актуальную дату.
        </div>
        <div style={{ top: "375px", position: "absolute" }}>
          <button className="nomanyButton" onClick={this.addHandler}>
            Добавить средства
          </button>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="row">
          <div className="col">{this.state.windowWidth ? "" : block1()}</div>
          {this.state.windowWidth ? (
            <div className="w-100  px-3">{block1()}</div>
          ) : (
            ""
          )}
          {block2()}
        </div>
        {this.state.windowWidth ? (
          <div style={{ textAlign: "center" }}>
            {block3()}
            {block4()}
          </div>
        ) : (
          <div className="row">
            {block3()}
            {block4()}
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    testStore: state
  }),
  dispatch => ({
    onChangeState: isClicked => {
      dispatch({
        type: "RESET"
      }),
        dispatch({
          type: "CHANGE_STATE",
          payload: isClicked
        });
    },
    componentForSidebar: component => {
      dispatch({ type: "TRANSFER_COMPONENT", payload: component });
    }
  })
)(Desktop);
