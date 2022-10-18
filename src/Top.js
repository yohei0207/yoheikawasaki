import './App.css';
import React from 'react';

class Top extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className='container-fluid'>
          <p></p>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Yohei Kawasaki</h2>
              <h6 className="card-subtitle mb-2 ">慶應義塾大学 大学院理工学研究科 修士課程1年</h6>
              <p className="card-text">HCIの研究をしています．</p>
            </div>
          </div>
        </div>


        <div className='container-fluid'>
          <p></p>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">発表歴</h4>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">2022 川崎陽平，松井良太，杉浦裕太，"瞬き時のフォトリフレクタのセンサ値の変化を利用した個人認証システムの提案", 2022, <strong>学生奨励賞受賞</strong>.</li>
                <li class="list-group-item">2021 川崎陽平，杉浦裕太，"腹部触覚提示を用いた足圧中心位置の誘導システム", エンタテインメントコンピューティングシンポジウム論文集, pp. 335-339, 2021.</li>
              </ul>
            </div>
          </div>
        </div>
        <p></p>
      </div>

    );
  }

}
export default Top;
