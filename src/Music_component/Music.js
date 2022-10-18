import '../App.css';
import React from 'react';
import Music_card from './Music_card';



class Music extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        const itemList = [
            { title: "シュガーソングとビターステップ", artist: "UNISON SQUARE GARDEN", url: "https://www.youtube.com/embed/EXgBu4jKQhI", tags: ["cover"] },
            { title: "怪獣の花唄", artist: "Vaundy", url: "https://www.youtube.com/embed/BQ_GVRtnCXo", tags: ["cover"] },
            { title: "Own Civilization (nano-mile met)", artist: "UNISON SQUARE GARDEN", url: "https://www.youtube.com/embed/c2TFcmPULbE", tags: ["cover"] },
            { title: "世界はファンシー", artist: "UNISON SQUARE GARDEN", url: "https://www.youtube.com/embed/JIi9zSOq-Co", tags: ["cover"] },
        ]

        const row_size = Math.ceil(itemList.length / 2);
        console.log(row_size);

        let roop = () => {
            const items = [];

            for (let i = 0; i < row_size; i++) {
                items.push(<div class="row">
                    <Music_card
                        title={itemList[i * 2].title}
                        artist={itemList[i * 2].artist}
                        url={itemList[i * 2].url}
                        tags={itemList[i * 2].tags}
                    />
                    <Music_card
                        title={itemList[i * 2 + 1].title}
                        artist={itemList[i * 2 + 1].artist}
                        url={itemList[i * 2 + 1].url}
                        tags={itemList[i * 2 + 1].tags}
                    />

                </div>);

            }

            return items;
        }

        return (

            /*
            <div>
                {itemList.map((item) => {
                    return (
                        <Card
                            title={item.title}
                            url={item.url}
                        />
                    );
                })}
            </div>
            */



            <div class="container-fluid">
                <p></p>
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">Music</h3>
                        <div class="card-text">音源は全て自作しています．</div>
                        {roop()}
                    </div>
                </div>
                <p></p>
            </div>
        );
    }

}
export default Music;
