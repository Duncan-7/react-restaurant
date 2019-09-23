import React from 'react';
import './App.css';
import burger from './images/burger.jpg';
import pie from './images/pie.jpg';
import oysters from './images/oysters.jpg';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    this.state = {
      currentTab: "home"
    }
  }

  handleTabChange(e) {
    this.setState({ currentTab: e.target.id });
  };

  render() {
    return (
      <div id="content">
        <h1>The Brexit Club</h1>
        <Nav currentTab={this.state.currentTab} handleTabChange={this.handleTabChange} />
        <Text currentTab={this.state.currentTab} />
      </div>
    )
  }
}

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleTabChange(e);
  }

  render() {
    return (
      <nav>
        <span id="home" className={`link ${this.props.currentTab === "home" ? "selected" : ""}`} onClick={this.handleClick}>Home</span>
        <span id="menu" className={`link ${this.props.currentTab === "menu" ? "selected" : ""}`} onClick={this.handleClick}>Menu</span>
        <span id="contact" className={`link ${this.props.currentTab === "contact" ? "selected" : ""}`} onClick={this.handleClick}>Contact</span>
      </nav>
    )
  }
}

class Text extends React.Component {
  render() {
    let content
    switch (this.props.currentTab) {
      case "home":
        content = homeText;
        break;
      case "menu":
        content = menuText;
        break;
      case "contact":
        content = contactText;
        break;
      default:
        content = homeText;
    }
    return (
      <div className="tab-body">
        {content}
      </div>
    )
  }
}

function MenuItem(props) {
  return (
    <div className="menu-item">
      <img className="menu-image" src={props.food} />
      <div className="menu-caption">
        {props.caption}
      </div>
    </div>
  )
}

function App() {
  return (
    <Content />
  );
}

export default App;

const homeText = (
  <div>
    <p>Welcome to the Brexit Club, home of the ruling prototypes.</p>
    <br />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est neque. Quisque mattis ultricies egestas. Sed condimentum venenatis finibus. Aliquam efficitur nibh at mauris porttitor, ullamcorper vulputate orci ullamcorper. Quisque sodales lacus non odio gravida, a venenatis tortor laoreet. Nunc eu velit venenatis, ornare mauris nec, faucibus ligula. Nam ac tempus orci, at mattis dolor. Praesent non molestie urna, elementum placerat dolor.</p>
    <br />
    <p>Etiam vel enim scelerisque, posuere purus sed, iaculis massa. Sed ac quam iaculis, rhoncus arcu ac, porta dolor. Quisque et dui orci. Integer pharetra neque non odio iaculis, in bibendum urna mattis. Sed mattis vel tellus ac lacinia. Aliquam pulvinar augue sit amet nisi blandit aliquam. Sed rhoncus lacinia lorem, placerat feugiat arcu ultricies a.</p>
    <br />
    <p>Proin feugiat lacinia ipsum in lacinia. Quisque lacinia libero sed eros dictum, eget faucibus ante bibendum. Integer nec orci dapibus, elementum turpis eu, porta nunc. Ut id est sed risus maximus vulputate quis vel magna. Cras pharetra mauris a vulputate porta. Aliquam scelerisque, orci at volutpat tempor, orci orci consectetur neque, vel finibus leo sapien ut ligula.</p>
  </div>
);



const menuText = (
  <div className="menu-container">
    <MenuItem
      food={burger}
      caption="Bourgeois Burger, made of 100% ground Unicorn, with a side of battered diamond rings and potato wedge-issues"
    />
    <MenuItem
      food={pie}
      caption="Steak and Ale Pie, get used to all the flavours you'll have to pretend to like when campaigning outside of London. Wonderful upper crust"
    />
    <MenuItem
      food={oysters}
      caption="Offshore Oysters, with great treasures hidden behind an impenetrable shell (company)"
    />
    <MenuItem
      food={burger}
      caption="I've run out of time to come up with any more witty banter so I'm just going to write some stock descriptions"
    />
  </div>
)

const contactText = (
  <div>
    Address:<br />
    1 Old Boy's Avenue<br />
    London<br />
    N13 37H<br />
    United(ish) Kingdom<br /><br />
    Phone Number:<br />
    1234567890<br /><br />
    Email:<br />
    Rather gauche, don't you think?<br />
  </div>
);