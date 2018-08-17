import React, { Component } from "react";
import { connect } from "react-redux";
import { SideEntry } from "../../actions/EntryAction";

class Entry extends Component {
  state = {
    showModal: false,
    isOpen: false
  };
  siteEntry = () => {
    this.props.getData("mail", "pass");
    this.setState({ showModal: true });
  };
  handleOpenModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  OpenSideBar = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.handleCloseModal();
    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["Registation"]);
  };

  render() {
    return (
      <div id="Title">
        Вход
        <form>
          <div>
            <span className="Label">E-mail</span>
            <input
              style={{
                height: "50px",
                borderRadius: "2px",
                backgroundColor: "#ffffff",
                border: "solid 1px #cbd0e8"
              }}
              type="email"
              className="form-control w-100"
            />
          </div>
          <div style={{ paddingBottom: "20px", paddingTop: "23px" }}>
            <span className="Label">Пароль</span>
            <span
              id="forgotMini"
              className="Label"
              style={{ paddingLeft: "120px" }}
            >
              Забыли пароль?
            </span>
            <input
              style={{
                height: "50px",
                borderRadius: "2px",
                backgroundColor: "#ffffff",
                border: "solid 1px #cbd0e8"
              }}
              type="password"
              className="form-control w-100"
            />
          </div>
        </form>
        <div>
          <div className="Label">
            <span id="forgot" style={{ paddingRight: "116px" }}>
              Забыли пароль?
            </span>
            <button className="btnEntry" onClick={this.siteEntry}>
              Войти
            </button>
            <div
              style={{
                textAlign: "right",
                paddingTop: "10px",
                paddingRight: "15px"
              }}
            >
              <u style={{ cursor: "pointer" }} onClick={this.OpenSideBar}>
                Регистрация
              </u>
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
    getData: (mail, pass) => {
      dispatch(SideEntry(mail, pass));
    },
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
)(Entry);
