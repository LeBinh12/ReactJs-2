import productsApi from 'Api/productApi';
import { useEffect, useState } from 'react';

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      (async () => {
          try {
              const result = await productsApi.get(productId);
              console.log(result);
              setProduct(result);
                setLoading(true);
          } catch (e) {
            console.error("Looi: ",e);
          }
          setLoading(false);
    })();
  }, [productId]);

  return { product, loading };
}
