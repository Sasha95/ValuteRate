import React, { Component } from "react";
import { connect } from "react-redux";
import "../../static/main.css";

class Registation extends Component {
  state = {
    isOpen: false,
    showModal: false
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
    this.props.componentForSidebar(["Entry"]);
  };
  registration = (mail, password) => {
    return false;
  };
  render() {
    return (
      <div>
        {this.registration() ? (
          <div>
            <div id="Title">Регистрация прошла успешно</div>
            <div>
              На указанный вами e-mail адрес, было отправлено письмо для
              подтверждения регистрационных данных.
            </div>
          </div>
        ) : (
          <div>
            <div id="Title">Регистрация</div>
            <form>
              <div>
                <span className="Label">E-mail</span>
                <input
                  style={{ height: "50px" }}
                  type="email"
                  className="form-control"
                />
              </div>
              <div style={{ paddingBottom: "20px", paddingTop: "23px" }}>
                <span className="Label">Пароль</span>
                <input
                  style={{ height: "50px" }}
                  type="password"
                  className="form-control"
                />
              </div>
            </form>
            <div id="subText">
              Регистрируясь, вы соглашаетесь с <u>правилами пользования </u>{" "}
              сайтом и даете согласие на <u>обработку персональных данных</u>.
            </div>
            <div style={{ textAlign: "center" }} className=" m-0">
              <div>Каптча</div>
              <div style={{ padding: "16px 0px 14px 0px" }}>
                <button
                  className="buttonRegistration"
                  onClick={this.registration}
                >
                  Зарегистрироваться
                </button>
              </div>
              <div style={{ fontSize: "14px", color: "#0c128f" }}>
                <u style={{ cursor: "pointer" }} onClick={this.OpenSideBar}>
                  Войти на сайт
                </u>
              </div>
            </div>
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
)(Registation);
