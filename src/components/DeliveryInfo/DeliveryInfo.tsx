import "./DeliveryInfo.css"; // Make sure to create and include this CSS file

const DeliveryInfo = () => {
  return (
    <div className="product-about__block">
      <div className="product-delivery__list">
        <ul>
          <li className="product-delivery__item">
            <div className="product-delivery__icon-wrapper">
              <img className="product-delivery__icon" src="/svgexport-44.png" />
            </div>
            <div className="product-delivery__main">
              <div className="product-delivery__type">
                Доставка кур'єром Укрпошта, Meest ПОШТА, Нової Пошти
              </div>
              <div className="product-delivery__time">
                <time>Відправимо завтра</time>
              </div>
            </div>
            <div className="product-delivery__coast">
              <p className="product-delivery__coast_color_green">Безкоштовно</p>
            </div>
          </li>
          <li className="product-delivery__item">
            <div className="product-delivery__icon-wrapper">
              <img className="product-delivery__icon" src="/svgexport-43.png" />
            </div>
            <div className="product-delivery__main">
              <div className="product-delivery__type">
                Самовивіз з відділень поштових операторів
              </div>
              <div className="product-delivery__time">
                <time>Відправимо завтра</time>
              </div>
              <div className="product-delivery__map">
                <a role="button">Дивитись на мапі</a>
              </div>
            </div>
            <div className="product-delivery__coast">
              <p className="product-delivery__coast_color_green">Безкоштовно</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DeliveryInfo;
