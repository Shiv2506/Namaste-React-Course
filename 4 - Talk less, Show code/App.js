import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import logo from "../Images/Food_fire_logo.png";

/* My Food App structure will look like this,
Header
    - Logo
    - Nav Items (Right side)
Body
    - Search bar
    - Restaurant list
        - Restaurant Card
            - Image
            - Name
            - Rating
            - Cuisines
Footer
    - Links
    - Copyright
*/

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src={logo} />
      {/* <h2>Food Villa</h2> */}
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// ---  way 1 -----
// const RestaurantCard = () =>{
//     return (
//         <div className="card">
//             <img alt="burger" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/trmvlfhtzqz7f5bchhzk"></img>
//             <h2>Burger King</h2>
//             <h4>Burgers, American</h4>
//             <h4>4.2 stars</h4>
//         </div>
//     )
// }

// --- way 2 ------
// const burgerKing = {
//     name :"Burger King",
//     image : "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/trmvlfhtzqz7f5bchhzk",
//     cuisines : ["Burger", "American"],
//     rating : 4.2
// }

// const RestaurantCard = () =>{
//     return (
//         <div className="card">
//             <img alt="burger" src={burgerKing.image}></img>
//             <h2>{burgerKing.name}</h2>
//             <h4>{burgerKing.cuisines.join(", ")}</h4>
//             <h4>{burgerKing.rating} stars</h4>
//         </div>
//     )
// }

// --- way 3 ------

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "621039",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      uuid: "4f436b44-5368-4740-85d8-ca288a98b7f3",
      city: "1",
      area: "Yelahanka",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "trmvlfhtzqz7f5bchhzk",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 5.599999904632568,
      slugs: {
        restaurant: "leon's---burgers-&-wings-(leon-grill)-yelahanka-yelahanka",
        city: "bangalore",
      },
      cityState: "1",
      address:
        '"""No.2027, 4TH B CROSS, A MAIN YELHANKA  NEW TOWN BENGALURU, Yelahanka , B.B.M.P  North, Karnataka-560064"" "',
      locality: "Yelahanka Satellite Town",
      parentId: 371281,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 on select items | Use code SPECIALS",
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
            meta: "Use SPECIALS",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 on select items | Use code SPECIALS",
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
      adTrackingID: "cid=5903532~p=1~eid=00000186-2ba2-f0fb-192f-e6b200dc014f",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "621039",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 5.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 500,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "359058",
      name: "Pizza Hut",
      uuid: "cf9617f8-1528-42dd-841b-6db495d94578",
      city: "1",
      area: "Yelahanka",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "gt8f5qmkc8oqkqpdmvns",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 1.2999999523162842,
      slugs: {
        restaurant: "pizza-hut-kattigenahalli-yelahanka",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "Ground floor, 2nd Cross, Vinayak Nagar, Kattigenahalli, Bagalur, Bengaluru - 560064",
      locality: "Vinayak Nagar",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
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
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
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
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "359058",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 1.2999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "120178",
      name: "Meghana Foods",
      uuid: "f6b09091-fbfb-4efc-84b7-dadbd0a36a23",
      city: "1",
      area: "Sahakara Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "oycavthjdkphqevhzk7t",
      cuisines: [
        "Biryani",
        "Andhra",
        "North Indian",
        "South Indian",
        "Chinese",
        "Seafood",
      ],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 8.5,
      slugs: {
        restaurant: "meghana-foods-yelahanka-sahakar-nagar",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "GRD West Gate situated at Site no. 2822, Khatha no. 2916/2822, Sahakara Nagar, Yelahanka Hobli, Bangalore 560092",
      locality: "Park View Layout",
      parentId: 635,
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
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "8.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "120178",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 8.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "151355",
      name: "KOLKATA FAMOUS KATI ROLL",
      uuid: "e357ef78-14a4-4df5-8f84-c420525453d0",
      city: "1",
      area: "Yelahanka",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "eyxtrh4bcg3e1x7mtmbj",
      cuisines: ["North Indian"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 25,
      minDeliveryTime: 25,
      maxDeliveryTime: 25,
      slaString: "25 MINS",
      lastMileTravel: 2.0999999046325684,
      slugs: {
        restaurant: "kolkata-famous-kati-roll-bagalur",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "1&2 kvsr layout above relaince fresh baglur cross kattigenhalli banglore bbmp north KARNATAKA 560064",
      locality: "KVSR Layout",
      parentId: 3550,
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
      adTrackingID: "cid=5712997~p=4~eid=00000186-2ba2-f0fb-192f-e6b300dc0404",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "151355",
        deliveryTime: 25,
        minDeliveryTime: 25,
        maxDeliveryTime: 25,
        lastMileTravel: 2.0999999046325684,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "410400",
      name: "McDonald's",
      uuid: "c2fd9abb-6399-48c5-9e77-13ae9285d6b4",
      city: "1",
      area: "International Airport",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "0e8f93a56b93e43d7627c2c21bc1106c",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 66,
      minDeliveryTime: 66,
      maxDeliveryTime: 66,
      slaString: "66 MINS",
      lastMileTravel: 7.599999904632568,
      slugs: {
        restaurant: "mcdonalds-chikkajala-jala-hobli-yelahanka",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "Hardcastle Resturants Pvt Ltd,Mcdonalds Family Restaurants, Survey nos. 5, 6, and 7 ,Chikkajala, Jala Hobli, Bangalore North Taluk, Bangalore Urban District, Pin Code- 562157",
      locality: "Chikkajala",
      parentId: 630,
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
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "410400",
        deliveryTime: 66,
        minDeliveryTime: 66,
        maxDeliveryTime: 66,
        lastMileTravel: 7.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.1",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "579703",
      name: "Burger King",
      uuid: "081c023b-3910-4660-b386-36a354e32a40",
      city: "1",
      area: "Yelahanka",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "rceumqnosbk44qj0wobg",
      cuisines: ["American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "burger-king-baglur-yelahanka",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "no17, sy no.9,Ground floor & 1st floor , kattigenahalli village jala hobli bangalore north bangalore yelahanka north  karmataka-560064",
      locality: "Baglur",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Get every item under 129",
        shortDescriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "Get every item under 129",
            discountType: "FinalPrice",
            operationType: "RESTAURANT",
          },
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
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
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "579703",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
];

// const RestaurantCard = (props) =>{
//     return (
//         <div className="card">
//             <img alt="burger" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?.cloudinaryImageId}></img>
//             <h2>{props.restaurant.data?.name}</h2>
//             <h4>{props.restaurant.data?.cuisines.join(", ")}</h4>
//             <h4>{props.restaurant.data?.lastMileTravelString}</h4>
//         </div>
//     )
// }

// -- way 4 -----
// const RestaurantCard = ({restaurant}) =>{
//     return (
//         <div className="card">
//             <img alt="burger" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurant.data?.cloudinaryImageId}></img>
//             <h2>{restaurant.data?.name}</h2>
//             <h4>{restaurant.data?.cuisines.join(", ")}</h4>
//             <h4>{restaurant.data?.lastMileTravelString}</h4>
//         </div>
//     )
// }

//  -- way 5 ---
// const RestaurantCard = ({restaurant}) =>{
//     const {name,cuisines,cloudinaryImageId,lastMileTravelString} = restaurant.data;
//     return (
//         <div className="card">
//             <img alt="burger" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
//             <h2>{name}</h2>
//             <h4>{cuisines.join(", ")}</h4>
//             <h4>{lastMileTravelString}</h4>
//         </div>
//     )
// }

// const Body = () => {
//     return (
//       <div className="restaurant-list">
//         <RestaurantCard restaurant={restaurantList[0]} />
//         <RestaurantCard restaurant={restaurantList[1]}/>
//         <RestaurantCard restaurant={restaurantList[2]}/>
//         <RestaurantCard restaurant={restaurantList[3]}/>
//         <RestaurantCard restaurant={restaurantList[4]}/>
//         <RestaurantCard restaurant={restaurantList[5]}/>
//       </div>
//     );
//   };

// --- way 6 ----

const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString}) =>{
    return (
        <div className="card">
            <img alt="burger" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}></img>
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

// const Body = () => {
//   return (
//     <div className="restaurant-list">
//       <RestaurantCard {...restaurantList[0].data} />
//       <RestaurantCard {...restaurantList[1].data}/>
//       <RestaurantCard {...restaurantList[2].data}/>
//       <RestaurantCard {...restaurantList[3].data}/>
//       <RestaurantCard {...restaurantList[4].data}/>
//       <RestaurantCard {...restaurantList[5].data}/>
//     </div>
//   );
// };

// -- way 7 ----

const Body = () => {
    return (
      <div className="restaurant-list">
        {
            restaurantList.map( (restaurant)=>{
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
            })
        }
      </div>
    );
  };
  

const Footer = () => {
  return <h3>Footer component</h3>;
};

const AppLayout = () => {
  return (
    // <React.Fragment></React.Fragment> is same as <></>
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;
