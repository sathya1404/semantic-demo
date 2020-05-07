import React, { Component } from "react";
import { Dropdown, Menu, Search } from "semantic-ui-react";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      options: [
        { key: 1, text: "performance and strategy", value: 1 },
        { key: 1, text: "one NHSBT", value: 1 },
        { key: 1, text: "Our values", value: 2 },
        { key: 1, text: "Our board", value: 3 },
        { key: 1, text: "Transparency", value: 4 },
      ],

      services: [
        { key: 1, text: "Blood Services", value: 1 },
        { key: 1, text: "Transplantation services", value: 2 },
        { key: 1, text: "Diagnostic and therapeutic services", value: 3 },
        { key: 1, text: "Clinical", value: 4 },
      ],
      develops: [
        { key: 1, text: "Scientific discovery", value: 1 },
        { key: 1, text: "Advanced therapies", value: 2 },
        { key: 1, text: "service developments", value: 3 },
      ],
      involed: [
        { key: 1, text: "Donate", value: 1 },
        { key: 1, text: "Get inolved", value: 2 },
        { key: 1, text: "Partners", value: 3 },
        { key: 1, text: "Tell a story", value: 4 },
      ],
      carriers: [
        { key: 1, text: "Explore Our jobs", value: 1 },
        { key: 1, text: "All vacanices", value: 2 },
        { key: 1, text: "Carrier SpotLight", value: 3 },
        { key: 1, text: "Your Benefits", value: 4 },
        { key: 1, text: "Application Process", value: 5 },
      ],
    };
  }

  render() {
    return (
      <div>
        <div className="primary-header">
          <img
            height="50px"
            width="auto"
            className="logo"
            src="https://nhsbtdbe.blob.core.windows.net/umbraco-assets-corp/3760/nhsbt-left-align_scaled.svg"
            size="small"
          />
          <Search className="search" placeholder="Search results" />
        </div>

        <container text>
          <div className="secondary-header">
            <Menu  compact className="drop-down-menu">
              <Dropdown
                className="drop-down"
                text="who are you"
                options={this.state.options}
                simple
                item
              />
              <Dropdown
                className="drop-down"
                text="What we do"
                options={this.state.services}
                simple
                item
              />
              <Dropdown
                className="drop-down"
                text="How we help"
                options={this.state.develops}
                simple
                item
              />
              <Dropdown
                className="drop-down"
                text="How can you help"
                options={this.state.involed}
                simple
                item
              />
              <Dropdown
                className="drop-down"
                text="Carrier"
                options={this.state.carriers}
                simple
                item
              />
            </Menu>
            <button  className="custom-menu-header" textAlign="center">
              News
            </button>
          </div>
        </container>
        </div>
    );
  }
}

export default Main;
