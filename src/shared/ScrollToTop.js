import { Component } from "react";
import { withRouter } from "react-router-dom";
import { theme } from "../config";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, theme.animation.duration);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
