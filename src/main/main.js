/// <reference path="../declarations/react-global.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            checked: this.props.checked
        };
        this._toggleCheckbox = function () {
            _this.setState({ checked: !_this.state.checked });
        };
    }
    HelloWorld.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("input", {"id": "chkbox", "type": "checkbox", "checked": this.state.checked, "onChange": this._toggleCheckbox}), React.createElement("label", {"htmlFor": "chkbox"}, "Hello World	")));
    };
    return HelloWorld;
})(React.Component);
React.render(React.createElement(HelloWorld, { checked: false }), document.getElementById('example'));
//# sourceMappingURL=main.js.map