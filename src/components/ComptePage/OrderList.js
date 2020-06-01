import React from "react";
import OrderItem from "./OrderItem";

const OrderList = ({ orders, addRemove }) => {
  return (
    <tbody>
      {orders.length > 0 ? (
        <>
          {orders.map((order) => (
            <OrderItem key={order.id} orderList={order} addRemove={addRemove} />
          ))}
        </>
      ) : (
        <tr className='my-5 '>
          <td className='text-title text-center' colSpan='5'>
            Mon historique est vide
          </td>
        </tr>
      )}
    </tbody>
  );
};

export default OrderList;
