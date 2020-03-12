import React from 'react';
//import ReactAutocomplete from 'react-autocomplete'

class SelectStock extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      value: '',
    };
  }


  render() {
    return (
      <div>[SelectStock component here]</div>
      /*<ReactAutocomplete
        items={[
          { id: 'foo', label: 'ITSA3' },
          { id: 'bar', label: 'WEGE3' },
          { id: 'baz', label: 'EGIE3' },
        ]}
        shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
        getItemValue={item => item.label}
        renderItem={(item, highlighted) =>
          <div
            key={item.id}
            style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
          >
            {item.label}
          </div>
        }
        value={this.state.value}
        onChange={e => this.setState({ value: e.target.value })}
        onSelect={value => this.setState({ value })}
      />*/
    )
  }
  
}

export default SelectStock;