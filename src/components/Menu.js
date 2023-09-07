const Menu = () => {
    const menuItems = [
        { name: "Spaghetti", price: "$12.00" },
        { name: "Bruschetta", price: "$5.99" },
        { name: "Greek Salad", price: "$12.99" },
        { name: "Grilled Chicken", price: "$15.00" },
        { name: "Margherita Pizza", price: "$14.00" },
        { name: "Cheeseburger", price: "$13.00" },
        { name: "Steak", price: "$20.00" },
        { name: "Seafood Paella", price: "$22.00" },
        { name: "Fettuccine Alfredo", price: "$14.00" },
        { name: "Chicken Parmesan", price: "$16.00" },
        { name: "Lemon Desert", price: "$5.00" },
      ];
    
    return (
        <div className="container">
            <div className="row ">
            <h2 className="text-center mt-3">Little Lemon Restaurant Menu</h2>
            <div className="col-8 mx-auto d-block">
        
        <table className="table ">
          <thead>
            <tr>
              <th scope="col">Menu Items</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {menuItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
    
      </div>
            </div>

        </div>
 
   
    );
  };
  
  export default Menu;
  