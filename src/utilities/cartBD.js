import {toast} from "react-toastify";

const addToCart = (newItem) => {
  const currentCart = JSON.parse(localStorage.getItem(`${window.location.hostname}-cart`)) || [];
  const existing = currentCart.findIndex((item) => item.item_code === newItem.item_code);
  if (existing !== -1) {
    currentCart[existing].qty += 1;
    toast("Item Already Added");
    localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(currentCart));
    return false;
  } else {
    currentCart.push(newItem);
    toast("Cart Added");
    localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(currentCart));
    return true;
  }
};

const addToProceed = (newItem, store) => {
  localStorage.removeItem(`${window.location.hostname}-${store}`);
  localStorage.setItem(`${window.location.hostname}-${store}`, JSON.stringify(newItem));
  return true;
};

const getStrdCart = (store) => {
  let strCart = [];
  const storedCart = localStorage.getItem(`${window.location.hostname}-${store}`);
  if (storedCart) {
    strCart = JSON.parse(storedCart);
  }
  return strCart;
};

const removeToCart = (key) => {
  let newCart = getStrdCart("cart");
  if (Array.isArray(newCart)) {
    newCart[key] = null;
    newCart = newCart.filter((item) => item !== null);
  } else {
    delete newCart[key];
  }

  localStorage.setItem(`${window.location.hostname}-cart`, JSON.stringify(newCart));
  toast("Item Deleted");
};

const getUser = (mail, pass) => {
  const filters = [["email_id", "=", mail]];
  if (pass) {
    filters.push(["custom_password", "=", pass]);
  }

  const filtersQuery = JSON.stringify(filters);
  const fetchURL = `https://erpmethods.vercel.app/gets/Customer?filters=${filtersQuery}&fields=["name"]`;
  console.log("object ", fetchURL);

  return fetch(fetchURL, {
    headers: {
      url: "https://erp.icfix.com.bd/",
      api_secret: "f177dc5a13eef46",
      api_key: "fb6a7b744acef86",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result[0]?.name) {
        return true;
      } else {
        return false;
      }
    });
};

const postData = (docType, body) => {
  return fetch(`https://erpmethods.vercel.app/posts/${docType}`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      url: "https://erp.icfix.com.bd/",
      api_key: "fb6a7b744acef86",
      api_secret: "f177dc5a13eef46",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result?.name) {
        return true;
      } else {
        return false;
      }
    });
};

export {addToCart, addToProceed, removeToCart, getStrdCart, getUser, postData};
