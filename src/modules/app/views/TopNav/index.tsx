import {Icon, NavBar} from "antd-mobile";
import {routerActions} from "connected-react-router";
import {RootState} from "modules";
import React from "react";
import {connect, DispatchProp} from "react-redux";
import "./index.less";

interface Props extends DispatchProp {
  avatarUrl: string;
  logoUrl: string;
}

class Component extends React.PureComponent<Props> {
  onShowUser = () => {
    // this.props.dispatch(thisModule.actions.showCurModal(CurModal.userInfo));
  };
  openBulletins = () => {
    this.props.dispatch(routerActions.push("/bulletins"));
  };
  render() {
    const {logoUrl, avatarUrl} = this.props;
    return (
      <div className="app-TopNav">
        <NavBar onLeftClick={this.onShowUser} icon={<span className="avatar" style={{backgroundImage: `url(${avatarUrl})`}} />} rightContent={<Icon key="0" type="search" />}>
          <img src={logoUrl} className="logo" />
        </NavBar>
      </div>
    );
  }
}
const mapStateToProps = (state: RootState) => {
  return {
    logoUrl: state.app.projectConfig!.logoUrl,
    avatarUrl: state.app.curUser!.avatarUrl,
  };
};

export default connect(mapStateToProps)(Component);
