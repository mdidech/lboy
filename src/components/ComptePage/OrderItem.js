import React from "react";
// import { FaTrash } from "react-icons/fa";
import Modal from "../Modal";
const OrderItem = ({ orderList, addRemove }) => {
  const { id, total, progress, order } = orderList;
  // const [list, setList] = useState({ id, total, progress, order });

  // const updateOrder = (id) => {
  //   setList({ id, total, progress, order });
  // };
  return (
    <tr style={{ fontSize: "12px" }}>
      <td className='col-lg-3 ' style={{ width: "25%" }}>
        {id}
      </td>
      <td className='col-lg-3 ' style={{ width: "25%" }}>
        {order.length}
      </td>
      <td className='col-lg-2 ' style={{ width: "20%" }}>
        {total} Dhs
      </td>
      <td className='col-lg-2 ' style={{ width: "20%" }}>
        {progress}
      </td>
      {addRemove ? (
        <td
          className='col-lg-2 text-center'
          style={{ width: "10%", fontSize: "10px" }}
        >
          <Modal id={id} />
        </td>
      ) : (
        <></>
      )}
    </tr>
  );
};

export default OrderItem;
