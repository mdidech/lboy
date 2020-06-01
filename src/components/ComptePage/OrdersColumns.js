import React from "react";

const OrdersColumns = ({ addRemove }) => {
  return (
    // <div className='container-fluid text-center d-none d-lg-block mt-5'>
    //   <div className='row'>
    //     <div className='col-lg-3'>
    //       <p className='text-uppercase'>reference</p>
    //     </div>
    //     <div className='col-lg-3'>
    //       <p className='text-uppercase'>nombre des éléments</p>
    //     </div>
    //     <div className='col-lg-2'>
    //       <p className='text-uppercase'>total</p>
    //     </div>
    //     <div className='col-lg-2'>
    //       <p className='text-uppercase'>status</p>
    //     </div>
    //     {addRemove ? (
    //       <div className='col-lg-2'>
    //         <p className='text-uppercase'>supprimer</p>
    //       </div>
    //     ) : (
    //       <div className='col-lg-2'></div>
    //     )}
    //   </div>
    // </div>
    <thead style={{ fontSize: "12px" }} className='thead-dark'>
      <tr>
        <th className='col-lg-3 ' style={{ width: "25%" }}>
          Reference
        </th>
        <th className='col-lg-3 ' style={{ width: "25%" }}>
          Nombre des éléments
        </th>
        <th className='col-lg-2 ' style={{ width: "20%" }}>
          Total
        </th>
        <th className='col-lg-2 ' style={{ width: "20%" }}>
          Status
        </th>
        {addRemove ? (
          <th className='col-lg-2 ' style={{ width: "10%" }}></th>
        ) : (
          <></>
        )}
      </tr>
    </thead>
  );
};

export default OrdersColumns;
