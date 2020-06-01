import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from "./store/actions";
import { addProduct } from "../shoping-car/store/actions";
import { useParams } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import Button from "../../ui/Button";
import Counter from "../../components/Counter";
import style from "./productDetail.module.css";

function ProductDetail({ addCar = () => {} }) {
  const [totalProducts, setTotalProducts] = useState(1);
  const dispatch = useDispatch();
  let { detail } = useParams();
  const currentProduct = useSelector((state) => state.products.productDetail);
  const productsAdded = useSelector((state) => state.shoppingCar.productsAdded);
  const productFound = productsAdded.find((product) => product.id === detail);

  const {
    product,
    feature,
    description,
    list_price,
    product_photos,
  } = currentProduct;

  useEffect(() => {
    dispatch(getProductDetail(detail));
    //eslint-disable-next-line
  }, [detail]);

  const images =
    !!product_photos && !!product_photos.length
      ? product_photos.map(({ photo }) => {
          return {
            photo1: photo,
            photo2: photo,
          };
        })
      : false;

  return (
    <div className={style.productDetail}>
      {Object.entries(currentProduct).length > 0 ? (
        <>
          <div className={style.arrowTop}>
            {images && (
              <div>
                <ImageGallery items={images} />
              </div>
            )}
            <div>
              <h1>{product}</h1>
              <h2>{feature}</h2>
              <p>{description}</p>
              <h2>
                S/
                {!!list_price &&
                  !!list_price.length &&
                  list_price[0] &&
                  list_price[0].pricesale &&
                  list_price[0].pricesale}{" "}
                x kg
              </h2>
              <Counter
                className="mb-20"
                watch={(value) => {
                  setTotalProducts(value);
                }}
                initialValue={productFound && productFound.total}
              />
              <Button
                className="mb-20"
                fullWidth
                primary
                onClick={() =>
                  dispatch(addProduct(currentProduct, totalProducts))
                }
              >
                AGREGAR AL CARRITO
              </Button>
              <div>
                <h3>Disponibilidad y tiempos de entrega</h3>
                <ul>
                  <li>Disponible para despachao a domicilio</li>
                  <li>Disponible para retiro en tu tienda seleccionada</li>
                  <li>Disponible para despacho express</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={style.arrowBottom}>
            <h2>Descripcion del producto</h2>
            <p className={style.customP}>{description}</p>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </>
      ) : (
        <h1>no hay datos</h1>
      )}
    </div>
  );
}

export default ProductDetail;
