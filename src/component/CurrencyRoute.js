import React, { Component } from "react";
import greenarrow from "../static/imges/greenarrow.svg";
import mangoarrow from "../static/imges/mangoarrow.svg";
import { data, result } from "../data/data";

export default class CurrencyRoute extends Component {
  state = {
    hover: false,
    select: -1
  };
  hoverOn = e => {
    this.setState({ hover: true, select: Number(e.target.id) });
  };
  hoverOff = () => {
    this.setState({ hover: false, select: -1 });
  };

  render() {
    // console.log("loc", data, "noloc", this.props.data);
    return (
      <div className="container horizScroll">
        <div
          className="row "
          style={{
            maxWidth: "199px",
            width: "auto",
            whiteSpace: "nowrap",
            display: "inline-block"
          }}
        >
          {data.map(k => (
            <div
              className="col blockWrap cell "
              key={k["id"]}
              id={k["id"]}
              onMouseEnter={this.hoverOn}
              onMouseLeave={this.hoverOff}
            >
              <hr className="vertical" />
              {this.state.hover !== false && this.state.select === k["id"] ? (
                <div className="percent">
                  {k["count"] > 0 ? "+" + k["count"] : k["count"]} {k["valute"]}
                </div>
              ) : (
                <div
                  className={`percent ${
                    Number(k["percent"]) < 0 ? "recession" : ""
                  } 
              `}
                  id={k["id"]}
                >
                  {Number(k["percent"]) < 0 ? (
                    <span>
                      <img
                        alt="recession"
                        className="img-fluid"
                        src={mangoarrow}
                      />
                      {Math.abs(Number(k["percent"]))}%
                    </span>
                  ) : (
                    <span>
                      <img
                        alt="growth"
                        className="img-fluid"
                        src={greenarrow}
                      />
                      {Math.abs(Number(k["percent"]))}%
                    </span>
                  )}
                </div>
              )}

              <div className="bankname">{k["bankName"]}</div>
            </div>
          ))}
          {!this.props.isPersonal ? (
            <span>
              <div
                className="col"
                style={{ display: "inline-block", width: "199px" }}
              >
                <hr className="vertical" />
                <div className="percent">+{result["percent"]}%</div>
                <div className="bankname">
                  + {result["money"]} {result["valute"]} <br />
                  за {result["currentDay"]}
                </div>
              </div>

              <div className="description">
                *Данный маршрут указывает доход при вложении в $1 000
              </div>
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
