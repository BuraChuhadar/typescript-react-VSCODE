/// <reference path="../declarations/react-global.d.ts" />

interface DemoProps {
   checked:boolean;
  
}

interface DemoState {
   checked:boolean;
  
}

class HelloWorld extends React.Component<DemoProps, DemoState> {
	constructor(props:DemoProps) {
		super(props);
	}
	state: DemoState = {
    	checked: this.props.checked
  	}
	private _toggleCheckbox = () => {
    	this.setState({checked: !this.state.checked});
  	}
	render() {
		return (
		<div>
			<input id="chkbox" type="checkbox" checked={this.state.checked} onChange={this._toggleCheckbox} />
			<label htmlFor="chkbox">Hello World	</label>
		</div>
		)
	}
}

React.render(React.createElement(HelloWorld, {checked: false}), document.getElementById('example'));