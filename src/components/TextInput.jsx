import React from 'react';

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render() {
    return <input className="edit"
                  autoFocus={true}
                  type="text" />
  }
};
