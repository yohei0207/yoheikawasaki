import * as React from 'react';

//const pages = ['Products', 'Pricing', 'Blog'];


const pages = [
  { title: "Product", to: "./product" },
  { title: "Music", to: "./music" },

];

class Head extends React.Component {
  render() {
    return (

      <nav class="navbar navbar-expand-lg navbar-light bg-success">
        <a class="navbar-brand" href="/">Yohei Kawasaki</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

            {pages.map((page) => {
              return (
                <li className='nav-item'>
                  <a class="nav-link" href={page.to}>{page.title}</a>
                </li>
              );
            })}
            
          </ul>
        </div>
      </nav>

    );
  }
}

export default Head;