import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

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
