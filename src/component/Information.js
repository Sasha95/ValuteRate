import React, { Component } from "react";
import arrowblue from "../static/imges/arrowblue.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

//#region
const Button = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 2px;
  background-color: #ffffff;
  border: none;

  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #0c128f;
`;
//#endregion

export default class Information extends Component {
  render() {
    return (
      <div className="container inform">
        <div
          className="row mx-0 px-0"
          style={{ paddingTop: "60px", paddingBottom: "60px" }}
        >
          <div className="col tit">Терминология</div>
          <div className="col-auto p-0">
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
              whiteSpace: "nowrap",
              display: "inline-block",
              margin: "40px 0px",
              pdding: "0px"
            }}
          >
            <div className="card col" style={{ display: "inline-block" }}>
              <div className="description-info">Валютный коридор</div>
              <div>
                Валютный коридор – (англ. Currency <br /> corridor) это
                определенный диапазон, <br /> в пределах которого центральный
                <br />
                банк допускает колебания курса <br /> национальной валюты.
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button className="mt-auto p-2">
                <Link
                  className="linkDecoration"
                  to="information/valutecorridor"
                >
                  Подробнее
                </Link>
              </Button>
            </div>

            <div className="card col" style={{ display: "inline-block" }}>
              <div className="description-info">
                Валютный арбитраж <br />
              </div>
              <div>
                Валютный арбитраж – (англ. Currency <br /> Arbitrage) является
                одновременной <br /> покупкой и продажейвалюты с целью <br />
                получения дохода за счет разницы <br /> цен на различных рынках.
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Button className="mt-auto p-2">
                <Link className="linkDecoration" to="information/valutearbitr">
                  Подробнее
                </Link>
              </Button>
            </div>

            <div
              className="card col"
              style={{ display: "inline-block", top: "10px" }}
            >
              <div className="description-info">
                Валютный арбитраж <br /> на основании <br />
                коридоров
              </div>
              <div>
                Валютный арбитраж на основании <br /> коридоров – проведение
                операций по <br /> приобретению/продаже валюты <br />
                безналичным способом, с целью <br /> получения дохода.
              </div>
              <br />
              <br />
              <br />
              <br />
              <Button className="mt-auto p-2">
                <Link
                  className="linkDecoration"
                  to="information/valutearbitrcor"
                >
                  Подробнее
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
