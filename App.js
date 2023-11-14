import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="Header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restrauntList = {
  type: "restaurant",
  data: {
    type: "F",
    id: "73011",
    name: "KFC",
    uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
    city: "22",
    area: "Anand Vihar Colony",
    totalRatingsString: "5000+ ratings",
    cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
    cuisines: ["American", "Snacks", "Biryani"],
    tags: [],
    costForTwo: 30000,
    costForTwoString: "₹300 FOR TWO",
    deliveryTime: 31,
    minDeliveryTime: 31,
    maxDeliveryTime: 31,
    slaString: "31 MINS",
    lastMileTravel: 6.199999809265137,
    slugs: {
      restaurant: "kfc-chukkuwala-chukkuwala",
      city: "dehradun",
    },
    cityState: "22",
    address:
      "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
    locality: "Clock Tower",
    parentId: 547,
    unserviceable: false,
    veg: false,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "50% off",
      shortDescriptionList: [
        {
          meta: "50% off | Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "50% OFF",
      shortDescriptionList: [
        {
          meta: "Use WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "50% off up to ₹100 | Use code WELCOME50",
          discountType: "Percentage",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    ribbon: [
      {
        type: "PROMOTED",
      },
    ],
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "cid=5698075~p=1~eid=00000185-8b09-7c92-0e51-a04b00dc0124",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "6.1 kms",
    hasSurge: false,
    sla: {
      restaurantId: "73011",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      lastMileTravel: 6.199999809265137,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: true,
    avgRating: "4.0",
    totalRatings: 5000,
    new: false,
  },
  subtype: "basic",
};

const RestaurantCard = (props) => {
  return (
    <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="rest-logo"
        alt="img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/pxqhnjvdhm3nyqkhxute"
      ></img>

      <h3>Khana Khazana</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>4.4 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-bar">
        <button>Search</button>
      </div>
      <div className="restaurant-components">
        <RestaurantCard restData={restrauntList} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
