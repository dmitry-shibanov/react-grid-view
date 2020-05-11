import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.refElement = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    console.log(this.refElement.current.clientHeight);
    // this.refElement.current.addEventListener("load", this.setSpans);
  }

  calculateSpan = (e) => {
    //e.preventDefault();
    const spans = Math.ceil(e.target.clientHeight / 10);

    this.setState({ spans:spans });
  };

  setSpans = () => {
      const height = this.refElement.current.clientHeight;

      const spans = Math.ceil(height / 10);
      this.setState({spans:spans});
  }

  render() {
    const { description, urls } = this.props.image;
    // const style = {
    //   gridRowEnd: `span ${this.state.spans}`,
    // };

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img
          ref={this.refElement}
          src={urls.regular}
          alt={description}
        //   style={style}
          onLoad={this.calculateSpan}
        />
      </div>
    );
  }
}

export default ImageCard;
