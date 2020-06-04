import React, { Component, createContext } from "react";
import { linkData } from "./linkData";
import { SocialData } from "./SocialData";
import firebase from "./firebase";
import { firebaseAuth } from "./firebase";
export const ProductContext = createContext();
export class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartItems: 0,
    links: linkData,
    socialIcons: SocialData,
    products: [],
    cart: [],
    cartItem: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    loading: false,
    authUser: {},
    userDocId: "",
    currentUser: {},
    userOrders: [],
    pendingOrders: [],
    ordersList: [],
    userDetails: [],
    alert: null,
    searchProducts: [],
  };

  //se charge le premier apres loading
  componentDidMount() {
    try {
      // recuperer l'ensemble des produits de la base de données
      firebase
        .collection("produits")
        .orderBy("id")
        .onSnapshot((snapShot) => {
          const produits = snapShot.docs.map((doc) => {
            return { ...doc.data(), docId: doc.id };
          });
          // affecter les produits a des variables state
          this.setProducts(produits);
        });
      const unsubscribe = firebaseAuth.onAuthStateChanged(async (user) => {
        if (user) {
          // recuperer l'utilisateur déja connecté
          await this.setState({ authUser: user }, async () => {
            await this.getUser();
            this.getOrders();
            this.getUserOrder();
            this.GetOrderPanding();
          });
        } else {
          await this.setState({ authUser: null });
        }
      });
      return () => {
        unsubscribe();
      };
    } catch (error) {
      console.log(error);
    }
  }
  logoutUser = () => {
    this.setState({ authUser: null, currentUser: null });
  };
  setAlert = (alert) => {
    this.setState({ alert });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  setSubmitted = () => {
    this.setState({ submitted: !this.state.submitted });
  };

  // ------variable storeproducts & featuredProducts ---------------
  setProducts = (products) => {
    let storeProducts = products.map((item) => {
      const product = { ...item };
      return product;
    });
    //featuredProducts contient les produits de la page home
    let featuredProducts = storeProducts.filter((item) => {
      return item.featured === true;
    });
    this.setState(
      {
        storeProducts,
        featuredProducts,
        filteredProducts: storeProducts,
        //recuperer la cart depuis localstorage
        cart: this.getStorageCart(),
        loading: false,
      },
      () => this.addTotals()
    );
  };

  //cette  fonction va recuperer la cart depuis localstorage
  getStorageCart = () => {
    let cart;
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {
      cart = [];
    }
    return cart;
  };
  //cette fonction va instaurer les elements de ma cart dans localstorage
  syncStorage = () => {
    localStorage.setItem("cart", JSON.stringify(this.state.cart));
  };
  // cette fonction va retourner 2 variables:  total de la cart et le nombres des éléments dans la cart
  getTotals = () => {
    let total = 0;
    let cartItems = 0;
    this.state.cart.forEach((item) => {
      total += parseFloat(item.total);
      cartItems += item.count;
    });
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      total,
    };
  };
  // cette fonction affecte le total de la cart et le nombre des elements à deux state
  addTotals = () => {
    const totals = this.getTotals();
    this.setState({ cartItems: totals.cartItems, cartTotal: totals.total });
  };
  //cette fonction permet d'ajouter des produits a partir de la liste dans la cart
  addToCart = (id) => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find((item) => item.id === id);
    if (!tempItem) {
      // si le produit ajouter n'existe pas déja dans la cart
      tempItem = tempProducts.find((item) => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      // si le produit ajouter existe dans la cart
      tempItem.count++;
      tempItem.total = parseFloat(tempItem.total) * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }
    this.setState({ cart: tempCart }, () => {
      this.addTotals();
      this.syncStorage();
    });
  };
  // pour ouvrir et fermer le side bar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  //incrementer le nombre des elements à commander d'un produit
  increment = (id) => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.setState({ cart: [...tempCart] }, () => {
      this.addTotals();
      this.syncStorage();
    });
  };
  //decrementer le nombre des elements à commander d'un produit
  decrement = (id) => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.count = cartItem.count - 1;
    if (cartItem.count > 0) {
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));
      this.setState({ cart: [...tempCart] }, () => {
        this.addTotals();
        this.syncStorage();
      });
    } else {
      this.removeItem(id);
    }

    console.log(this.state.cart);
  };
  //supprimer un element de la cart par son id
  removeItem = (id) => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    this.setState({ cart: [...tempCart] }, () => {
      this.addTotals();
      this.syncStorage();
    });
  };

  //vider la cart
  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.addTotals();
      this.syncStorage();
    });
  };
  //recuperer l'id utilisatuer et leurs coordonnées
  getUser = () => {
    try {
      firebase
        .collection("users")
        .where("email", "==", this.state.authUser.email)
        .get()
        .then(async (snapshot) => {
          const docs = await snapshot.docs.map((doc) => {
            return doc;
          });
          if (docs.length > 0) {
            this.setState({ userDocId: docs[0].id });
            this.setState({ currentUser: docs[0].data() });
          } else {
            console.log("no orders exist");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  getUserByOrder = (user) => {
    try {
      firebase
        .collection("users")
        .where("email", "==", user)
        .get()
        .then(async (snapshot) => {
          const docs = await snapshot.docs.map((doc) => {
            return doc;
          });
          if (docs.length > 0) {
            this.setState({ userDetails: docs[0].data() });
          } else {
            console.log("no orders exist");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  getOrders = () => {
    try {
      firebase
        .collection("orders")
        .get()
        .then(async (snapshot) => {
          let docs = await snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          if (docs.length !== 0) {
            this.setState({ ordersList: [...docs] });
          } else {
            console.log("no orders exist");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  //recupere les orders d'un utilisateur
  getUserOrder = () => {
    try {
      firebase
        .collection("orders")
        .where("user", "==", this.state.authUser.email)
        .get()
        .then(async (snapshot) => {
          let docs = await snapshot.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          });
          if (docs.length !== 0) {
            this.setOrders(docs);
          } else {
            this.setState({
              userOrders: [],
              pendingOrders: [],
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  setOrders = (orders) => {
    let userOrders = orders.map((item) => {
      const order = { ...item };
      return order;
    });
    this.setState({
      userOrders,
    });
  };
  GetOrderPanding = () => {
    if (this.state.userOrders) {
      const userOrdersPanding = this.state.userOrders.filter((item) => {
        return item.progress === "en attente";
      });
      if (userOrdersPanding.length !== 0) {
        this.setState({ pendingOrders: [...userOrdersPanding] });
      } else {
        this.setState({ pendingOrders: [] });
      }
    }
  };
  removeOrder = (id) => {
    let tempOrders = [...this.state.ordersList];
    tempOrders = tempOrders.filter((item) => item.id !== id);
    let tempPending = [...this.state.pendingOrders];
    tempPending = tempPending.filter((item) => item.id !== id);
    this.setState(
      { ordersList: [...tempOrders], pendingOrders: [...tempPending] },
      () => {
        firebase
          .collection("orders")
          .doc(id)
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
        this.getUserOrder();
        // this.GetOrderPanding();
      }
    );
  };
  removeProduit = (id) => {
    let tempStore = [...this.state.storeProducts];
    tempStore = tempStore.filter((item) => item.id !== id);
    this.setState({ storeProducts: [...tempStore] }, () => {
      firebase
        .collection("produits")
        .doc(id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    });
  };
  productsByCategory = (category) => {
    let ProductsByCategory = this.state.filteredProducts.filter(
      (item) => item.categorie === category
    );
    this.setState({ searchProducts: ProductsByCategory });
  };
  SetSearchProducts = (produit) => {
    const products = this.state.searchProducts.filter((item) => {
      return item.title.includes(produit);
    });
    this.setState({ searchProducts: products });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          setSubmitted: this.setSubmitted,
          getUserOrder: this.getUserOrder,
          GetOrderPanding: this.GetOrderPanding,
          removeOrder: this.removeOrder,
          removeProduit: this.removeProduit,
          getUserByOrder: this.getUserByOrder,
          setAlert: this.setAlert,
          productsByCategory: this.productsByCategory,
          SetSearchProducts: this.SetSearchProducts,
          logoutUser: this.logoutUser,
          getUser: this.getUser,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
export default ProductProvider;
