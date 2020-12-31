import React from "react";
import LayoutWithSidebar from "../components/layout/LayoutWithSidebar";
import PageHeader from "../components/layout/PageHeader";
import Button from "../components/ui/Button";
import Widget from "../components/ui/dashboard/Widget";
import RGL, { WidthProvider } from "react-grid-layout";

interface Props {}

const ReactGridLayout = WidthProvider(RGL);

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <PageHeader>
          <span className="textstyle-header flex-1">Dashboard</span>
          <Button variant="secondary">Edit Dashboard</Button>
        </PageHeader>
        <div className="w-full px-8 py-8 flex justify-center fill-screen-height">
          {/* <ReactGridLayout
            layout={this.state.layout}
            onLayoutChange={this.onLayoutChange}
            {...this.props}
          >
            {this.generateDOM()}
          </ReactGridLayout> */}
        </div>
      </>
    );
  }
}

export default Dashboard;
