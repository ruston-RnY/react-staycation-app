import React, { Component } from "react";
import Header from "../parts/Header";
import PageDetailTitle from "../parts/PageDetailTitle";
import ItemDetails from "../assets/json/itemDetails.json";
import FeaturedImage from "../parts/FeaturedImage";
import PageDetailDescription from "../parts/PageDetailDescription";
import BookingForm from "../parts/BookingForm";
import Categories from "../parts/Categories";
import Testimony from "../parts/Testimony";
import Footer from "../parts/Footer";

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
        <div className="container mt-4" style={{ marginBottom: 40 }}>
          <div className="row">
            <div className="col-7 pr-5">
              <PageDetailDescription data={ItemDetails} />
            </div>
            <div className="col-5">
              <BookingForm itemDetails={ItemDetails} />
            </div>
          </div>
        </div>
        <Categories data={ItemDetails.categories} />
        <Testimony data={ItemDetails.testimonial} />
        <Footer />
      </>
    );
  }
}
