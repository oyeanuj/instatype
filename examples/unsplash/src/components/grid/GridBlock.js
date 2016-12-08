import React from 'react';

//const Block = ({ width, spacing, children }) => {

class Block extends React.PureComponent {

  getChildContext() {
    return { 
      parentColumnWidth: this.props.widthPx
    }
  }

  /*
  // Children won't update if we do this
  shouldComponentUpdate(nextProps) {
    const { width, spacing, children } = this.props;
    if (width !== nextProps.width || spacing != nextProps.spacing || children != nextProps.children){
      return true;
    }
    return false;
  }
  */

  render(){

    console.log('BLOCK RENDER');

    const { width, spacing, children } = this.props;

    const style = {
      position: 'relative',
      float: 'left',
      width: `${width}%`, // Should be percent
      paddingLeft: `${spacing/2}px`,
      paddingRight: `${spacing/2}px`,
      boxSizing: 'border-box',
      WebkitBoxSizing: 'border-box',
      MozBoxSizing: 'border-box'
    };

    return (
      <div style={style}>
        {children}
      </div>
    );
  }
};

Block.childContextTypes = {
  parentColumnWidth: React.PropTypes.number
};

Block.defaultProps = {
  width: 0
};

Block.propTypes = {
  // Don't require width and spacing since it will always be added by Grid ...
  // ... and we need to allow composition: <Grid><Block/><Block/></Grid>
  width: React.PropTypes.number,
  spacing: React.PropTypes.number,
  children: React.PropTypes.node
};


export default Block;
