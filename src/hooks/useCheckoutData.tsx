import { Checkout, CHECKOUT_KEY } from "@/lib/utils";
import { useEffect, useState } from "react";

const useCheckoutData = () => {
  const [data, setData] = useState<Checkout | null>(null);

  useEffect(() => {
    // mengecek storage
    if (typeof window !== "undefined" && window.sessionStorage) {
      const value = window.sessionStorage.getItem(CHECKOUT_KEY);

      if (value) {
        setData(JSON.parse(value));
      }
    }
  }, []);

  return {
    data,
  };
};

export default useCheckoutData;
