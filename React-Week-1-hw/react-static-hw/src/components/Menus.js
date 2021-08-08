import React from 'react';

const MenusText = ({ item }) => {
  return (
    <p>{item}</p>
  );
};

const MenuAnchorTag = ({ item }) => {
  return (
    <a>{item}</a>
  );
} ;

const Menus = ( { menuTextsArray, menuAnchorsArray } ) => {
  return (
    <section className="section" id="menus">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-10 content">
            <h2 className="title">Menu</h2>
            {
              menuTextsArray.map((text) => (
                <MenusText key={text} item={text}/>
              ))
            }   
            {
              menuAnchorsArray.map((anchor) =>(
                <MenuAnchorTag key={anchor} item={anchor}/> 
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menus;
