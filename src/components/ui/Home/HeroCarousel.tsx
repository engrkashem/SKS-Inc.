import { Carousel } from 'antd';
import familyShopping from '../../../assets/images/carousel/familyShopping.jpg';
import fruits from '../../../assets/images/carousel/fruitsInShop.jpg';
import handMade from '../../../assets/images/carousel/handAnticsTeracota.jpg';
import shoe from '../../../assets/images/carousel/ladiesShoeBag.jpg';
import coupleShop from '../../../assets/images/carousel/onlineCoupleShopping.jpg';
import sale from '../../../assets/images/carousel/sale50.jpg';
import cart from '../../../assets/images/carousel/shoppingCart.jpg';
import shopFriend from '../../../assets/images/carousel/shoppingWithFrnds.jpg';
import veg from '../../../assets/images/carousel/vegitables.jpg';
import jacket from '../../../assets/images/carousel/winterJacket.jpg';

export default function HeroCarousel() {
  return (
    <Carousel autoplay arrows>
      <div>
        <img src={shoe} alt="Ladies Bag and Shoe" />
      </div>
      <div>
        <img src={familyShopping} alt="familyShopping" />
      </div>
      <div>
        <img src={fruits} alt="fruits" />
      </div>
      <div>
        <img src={handMade} alt="handMade" />
      </div>
      <div>
        <img src={coupleShop} alt="coupleShop" />
      </div>
      <div>
        <img src={sale} alt="Sale" />
      </div>
      <div>
        <img src={cart} alt="cart" />
      </div>
      <div>
        <img src={shopFriend} alt="shopFriend" />
      </div>
      <div>
        <img src={veg} alt="vag" />
      </div>
      <div>
        <img src={jacket} alt="jacket" />
      </div>
    </Carousel>
  );
}
