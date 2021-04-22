import React from "react";
import ReactDOM from "react-dom";


class video extends React.Component {
  render() {
    return <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" />;
  }
}
ReactDOM.render(<App />, document.getElementById("container"));
