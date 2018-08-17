import React, { Component } from "react";

export default class ValuteCorridor extends Component {
  state = {
    windowWidth: undefined
  };

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });

  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  render() {
    return (
      <div className="grid-video">
        <div className="row align-items-center m-0">
          <div className="col-md-auto pl-0">
            <div className="corridor pad head-text">Валютный коридор</div>
            <div className="finin pad head-text">
              Финансовый инструмент, который
              <br /> помогает заработать арбитражную
              <br /> прибыль на переводе денег и<br /> обмена валют в разных
              точках мира!
            </div>
          </div>
          <iframe
            className="embed-responsive-item col col-video"
            title="description"
            width="760"
            height="426"
            src="https://www.youtube.com/embed/pzD9zGcUNrw?rel=0&amp;showinfo=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}
