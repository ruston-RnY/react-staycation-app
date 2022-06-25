import React, { Component } from "react";
import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";
import ItemDetails from "../assets/json/itemDetails.json";
import FeaturedImage from "../parts/FeaturedImage";

export default class DetailPage extends Component {
  componentDidMount() {
    window.title = "Detail Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      {
        pageTitle: "Home",
        pageHref: "",
      },
      {
        pageTitle: "House Detail",
        pageHref: "",
      },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle data={ItemDetails} breadcrumb={breadcrumb} />
        <FeaturedImage data={ItemDetails.imageUrls} />
      </>
    );
  }
}
