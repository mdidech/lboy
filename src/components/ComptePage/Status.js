import React, { useContext, useEffect } from "react";
import { ProductContext } from "../../context/context";
import Spinner from "../../components/Spinner";
import Title from "../Title";
import OrdersColumns from "./OrdersColumns";
import OrderList from "./OrderList";
import { Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";

const Status = () => {
  const { authUser, pendingOrders, GetOrderPanding, getUserOrder } = useContext(
    ProductContext
  );
  useEffect(() => {
    getUserOrder();
    GetOrderPanding();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {authUser ? (
        <section className='py-3'>
          <div className='container'>
            <Title title='commandes en attente' center />
          </div>
          <div className='table-responsive-sm py-3 text-center'>
            <div className='text-right  py-2'>
              <Link
                to='/moncompte/3'
                className='btn btn-primary rounded-circle'
                onClick={() => {
                  getUserOrder();
                  GetOrderPanding();
                }}
              >
                <IoMdRefresh />
              </Link>
            </div>
            <table className='table table-hover table-sm'>
              <OrdersColumns addRemove={true} />
              <OrderList orders={pendingOrders} addRemove={true} />
            </table>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Status;
