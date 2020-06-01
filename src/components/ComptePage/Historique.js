import React, { useContext } from "react";
import { ProductContext } from "../../context/context";
import Title from "../Title";
import Spinner from "../Spinner";
import OrdersColumns from "./OrdersColumns";
import OrderList from "./OrderList";
import { Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";
const Historique = () => {
  const { authUser, userOrders, getUserOrder } = useContext(ProductContext);
  return (
    <>
      {authUser ? (
        <section className='py-3'>
          <div className='container'>
            <Title title='Historique des commandes' center />
          </div>
          <div className='table-responsive-sm py-3 text-center'>
            <div className='text-right  py-2'>
              <Link
                to='/moncompte/2'
                className='btn btn-primary rounded-circle'
                onClick={() => {
                  getUserOrder();
                }}
              >
                <IoMdRefresh />
              </Link>
            </div>
            <table className='table table-hover table-sm'>
              <OrdersColumns addRemove={false} />
              <OrderList orders={userOrders} addRemove={false} />
            </table>
          </div>
        </section>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Historique;
