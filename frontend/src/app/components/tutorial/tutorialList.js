class TutorialList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.convertToTwoDimensionArray = this.convertToTwoDimensionArray.bind(this);
  }

  convertToTwoDimensionArray(tutorials) {
    const dataArray = [];
    let rowArray = null;
    let columnCount = 0;
    for (let i = 0; i < tutorials.length; i++) {
      if (columnCount === 0) {
        rowArray = [];
        dataArray.push(rowArray);
      }
      rowArray.push(tutorials[i]);
      columnCount++;
      if (columnCount === 4) {
        columnCount = 0;
      }
    }
    return dataArray;
  }

  render() {
    const {tutorials} = this.props;
    // Convert model to two dimension array
    const data = this.convertToTwoDimensionArray(tutorials);
    return (
      <div id="aToZTab" className="col s12">
        {data.map((rowArray, rowIndex) => {
          return (
            <div key={rowIndex} className="tutorialRows row">
              {rowArray.map((element, colIndex) => {
                return <TutorialDetail key={colIndex} tutorial={element}/>;
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

TutorialList.propTypes = {
  tutorials: React.PropTypes.array.isRequired
};
