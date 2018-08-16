import React, { Component } from "react";
import arrowblue from "../static/imges/arrowblue.svg";
import styled from "styled-components";
import { date } from "../data/counters";
import { connect } from "react-redux";
import { getBanksOfCounter } from "../actions/db";

const Wraper = styled.div`
  height: 260px;
  border-radius: 2px;
  cursor: pointer;
  background-image: linear-gradient(to bottom, rgba(12, 18, 143, 0), #0c128f);
`;

class CountersList extends Component {
  state = {
    isOpen: false
  };
  banksCounterHandler = event => {
    this.props.getData();
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.onChangeState(this.state.isOpen);
    this.props.componentForSidebar(["Banks", event.target.id]);
  };

  render() {
    return (
      <div className="container back">
        <div className="row">
          <div
            className="col tit"
            style={{
              paddingTop: "50px",
              marginLeft: "15px"
            }}
          >
            Список стран
          </div>
          <div className="col-auto" style={{ paddingTop: "50px" }}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      alt="back"
                      src={arrowblue}
                      className="arrow"
                      id="left"
                      onClick={this.arrowClick}
                    />
                  </td>
                  <td>
                    <hr className="line" />
                  </td>
                  <td>
                    <img
                      alt="next"
                      src={arrowblue}
                      className="arrow"
                      id="right"
                      onClick={this.arrowClick}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="row horizScroll"
            style={{
              marginTop: "30px",
              marginLeft: "0px",
              marginRight: "0px",
              whiteSpace: "nowrap",
              display: "inline-block"
            }}
          >
            {date.map((k, i) => (
              <div
                className="col-"
                id={k["id"]}
                key={i}
                onClick={this.banksCounterHandler}
                style={{
                  paddingRight: "20px",
                  paddingLeft: "20px",
                  display: "inline-block"
                }}
              >
                <Wraper
                // className="row horizScroll"
                // style={{
                //   whiteSpace: "nowrap",
                //   display: "inline-block",
                //   position: "relative",
                //   zIndex: 1
                // }}
                >
                  {/* <div
                    className="horizScroll"
                    style={{
                      display: "inline-block"
                    }}
                  >
                    <NameOfCounter id={k["id"]}>{k["name"]}</NameOfCounter>
                    <BankList id={k["id"]}>
                      <u id={k["id"]}>Список банков</u>
                    </BankList>
                  </div> */}

                  <div
                    className="countersImg "
                    // style={{ backgroundImage: `url(${k["img"]})` }}
                  >
                    <img id={k["id"]} alt={k["name"]} src={k["img"]} />
                  </div>
                </Wraper>
              </div>
            ))}
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
    getData: () => {
      dispatch(getBanksOfCounter());
    },
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
)(CountersList);
