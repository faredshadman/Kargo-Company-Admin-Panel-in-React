import React, {useState,useEffect} from "react";
import axios from 'axios';
import Attachment from "../../../../components/OrdersComponents/Attachment";
import CommonInformation from "../../../../components/OrdersComponents/CommonInformation";
import CustomerSection from "../../../../components/OrdersComponents/CustomerSection";
import OrderInformation from "../../../../components/OrdersComponents/OrderInformation";
import MainPackage from "../../../../components/OrdersComponents/Package/MainPackage";
import ProductContent from "../../../../components/OrdersComponents/ProductContent";
import ShipmentDefination from "../../../../components/OrdersComponents/ShipmentDefination";
import TotalPriceOrder from "../../../../components/OrdersComponents/TotalPriceOrder";
import "../../../../orders.scss";
import Customerinfo from './Jsons/Customerinfo.json';
import Commoninfo from './Jsons/Commoninfo.json';
const ManuelOrder = () => {
    const [data, setData] = useState(Customerinfo);
    const [com, setCom] = useState(Commoninfo);

  let emtyinputs = Object.values(data).slice(0).every(a => (a && a !== "0"));
  let emtycommon = Object.values(com).slice(0).every(a => (a && a !== "0"));
  console.log(emtyinputs);
  console.log(emtycommon);
  if(emtyinputs){
  let items = JSON.stringify(data);
  localStorage.setItem('adress_information', items);
  let userinfo = localStorage.getItem('adress_information');
  let send = JSON.parse(userinfo);
}

  if (emtycommon){
    let items = JSON.stringify(com);
    localStorage.setItem('common_information', items);
    let userinfo = localStorage.getItem('common_information');
    let send = JSON.parse(userinfo);
    
}
  function handle(e) {
    e.preventDefault()
    const newdata = { ...data }
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    // console.log(JSON.parse(userinfo));
  };

function Common(e){
const newdata={...com}
newdata[e.target.id] = e.target.value;
setCom(newdata);
}


  return (
    <>
      <CustomerSection data={data} handle={handle}  />
      {emtyinputs ? <CommonInformation com={com} Common={Common} />:""}
      {emtyinputs&&emtycommon ? <OrderInformation />:""}
      {/* {emtyinputs && emtycommon ? <MainPackage /> : ""} */}
      <MainPackage />
      <ShipmentDefination shipment={true} />
      <ProductContent />
      <Attachment />
      <TotalPriceOrder />
    </>
  );
};

export default ManuelOrder;
