import '../App.css';
import React from 'react';
import Product_card from './Product_card';
import toio from '../pics/toio.png';



class Product extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const itemList = [
      { id_num:"m0", id_target: "#m0", title: "Webサイト", description: "Reactでこのポートフォリオを作成しました．フロントエンドのフレームワークにはBootstrapを用いました．", tags: ["React", "Bootstrap"], img: toio },
      { id_num:"m1", id_target: "#m1", title: "toio × Unity", description: "toioをコントローラとしてUnityでゲームを作成しました．", tags: ["Unity", "toio", "C#"], img: toio },
      { id_num:"m2", id_target: "#m2", title: "Discord BOT", description: "サポーターズ様のハッカソンにてDiscord BOTを作成しました．", tags: ["Discord", "Python"], img: toio },
      { id_num:"m3", id_target: "#m3", title: "シフト管理アプリ", description: "アルバイト先の塾のシフトの提出・管理をするアプリを作成しました．LINEのアカウントを連携をしています．", tags: ["PHP", "LINE", "Bootstrap"], img: toio },
    ]

    const row_size = Math.ceil(itemList.length / 2);
    console.log(row_size);

    let roop = () => {
      const items = [];

      for (let i = 0; i < row_size; i++) {
        items.push(<div class="row">
          <Product_card
            id_target={itemList[i * 2].id_target}
            id_num={itemList[i * 2].id_num}
            title={itemList[i * 2].title}
            description={itemList[i * 2].description}
            tags={itemList[i * 2].tags}
            img={itemList[i * 2].img}
          />
          <Product_card
            id_target={itemList[i * 2 + 1].id_target}
            id_num={itemList[i * 2 + 1].id_num}
            title={itemList[i * 2 + 1].title}
            description={itemList[i * 2 + 1].description}
            tags={itemList[i * 2 + 1].tags}
            img={itemList[i * 2 + 1].img}
          />
        </div>);
      }
      return items;
    }




    return (
      <div>
        <div class="container-fluid">
          <p></p>
          <div class="card">
            <div class="card-body">
              <h3 class="card-title">Product</h3>
              <div class="card-text">今まで作ったもの．</div>
              {roop()}
            </div>
          </div>
          <p></p>
        </div>
      </div>
    );
  }

}
export default Product;
