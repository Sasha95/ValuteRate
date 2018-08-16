import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import arrow_back from "../../static/imges/personalImge/arrow_back.svg";
import { refData } from "../../data/referalsData";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

class Referal extends Component {
  state = {
    isOpen: false
  };
  copy = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });

    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["copy"]);
  };

  render() {
    const url = "https://corridor.com/soc/sh-1?r=210211";
    const Line = styled.div`
      width: 1px;
      height: 110px;
      opacity: 0.15;
      background-color: #0c128f;
    `;
    return (
      <div
        className="container containerRef"
        style={{ backgroundColor: "#fff" }}
      >
        <Link
          id={0}
          to={"/personal/desktop"}
          className="linkDecoration backDesktop"
          action="REPLACE"
        >
          <img src={arrow_back} alt="back" className="arrow_back" /> Рабочий
          стол
        </Link>
        <div className="row m-3">Пригласите друзей</div>
        <div className="row mx-3" id="fontRef">
          Копируйте и отправляйте реферальную ссылку друзьям. Вы получите 15% с
          каждой транзакции пользователя, зарегистрировавшегося по вашей ссылке.
        </div>
        <form className="form-inline ml-3" id="corpad">
          <div className="form-group">
            <input
              type="text"
              placeholder={url}
              id="before"
              required
              disabled
            />
            <CopyToClipboard text={url}>
              <label onClick={this.copy} style={{ cursor: "pointer" }}>
                &nbsp;
              </label>
            </CopyToClipboard>
            <div className="acquaint">
              Перед началом работы ознакомтесь с общими<br />
              <u className="acquaint-rules">правилами реферальной программы</u>
            </div>
          </div>
        </form>

        <div className="container horizScroll">
          <div
            className="row mx-3"
            style={{
              maxWidth: "199px",
              width: "auto",
              whiteSpace: "nowrap",
              display: "inline-block"
            }}
          >
            <Line className="blockWrap" />
            <div className="col blockWrap">
              <div className="friends">Ваши друзья</div>
              <br />
              <div className="counIncFriend">{refData["friends"]}</div>
            </div>
            <Line className="blockWrap" />
            <div className="col blockWrap">
              <div className="friends">Доход от друзей</div>
              <br />
              <div className="counIncFriend">
                {refData["valute"]}
                {refData["incomeFriends"]}
              </div>
            </div>

            <Line className="blockWrap" />
            <div className="col blockWrap">
              <div className="friends">Взнос друзей</div>
              <br />
              <div className="counIncFriend">
                {refData["valute"]}
                {refData["contributionFriends"]}
              </div>
            </div>
            <Line className="blockWrap" />
            <div className="col blockWrap">
              <div className="friends">
                Доход от друзей<br /> в ожидании
              </div>
              <div className="counIncFriend" style={{ marginTop: "11px" }}>
                {refData["valute"]}
                {refData["contributionFriendsWait"]}
              </div>
            </div>
          </div>
        </div>
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
)(Referal);
