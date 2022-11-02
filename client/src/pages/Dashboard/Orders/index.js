import React from "react";
import SearchOrders from "./SearchOrders";
import OrderItem from "./OrderItem";
import image1 from "../../../assets/images/FaeturedProducts/01.webp";

function OrdersPage() {
  const orders = [
    {
      qty: 1,
      img: image1,
      name: "red dress",
      desc1: "Women Pink",
      desc2: "White Printed Straight Kurta",
      id: 1,
    },
    {
      qty: 1,
      img: image1,
      name: "red dress",
      desc1: "Women Pink",
      desc2: "White Printed Straight Kurta",
      id: 2,
    },
    {
      qty: 1,
      img: image1,
      name: "red dress",
      desc1: "Women Pink",
      desc2: "White Printed Straight Kurta",
      id: 3,
    },
  ].map((order) => (
    <OrderItem
      name={order.name}
      qty={order.qty}
      img={order.img}
      desc1={order.desc1}
      desc2={order.desc2}
      key={order.id}
    />
  ));

  return (
    <>
      <SearchOrders />
      {orders}
    </>
  );
}

export default OrdersPage;
