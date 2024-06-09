import React, { useEffect, useState } from "react";
import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Carousel from "../Components/Carousel";
import { Form } from "react-bootstrap";

export default function Home() {
  const [foodCat, setFoodCat] = useState('');
  const [foodItem, setFoodItem] = useState([]);
  const [search,setSearch]= useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      setFoodItem(data[0]); // data[0] -> food_items, data[1] -> food_category
      setFoodCat(data[1]);
    } else {
      console.error("Failed to fetch data");
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  const handleSubmit=()=>{

  }

  return (
    <div>
      
      <div>
        <NavBar />
      </div>
      <div>
        <Carousel foodItem={foodItem} />
      </div>

      <div className="m-3">
        

          <Form className="d-flex" onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={search}
              onChange={(e)=>{setSearch(e.target.value)}}
            />
          
          </Form>
        

        {foodCat.length !== 0 ? (
          foodCat.map((data) => {
            return (
              <div key={data._id}>
                <div className="fs-3 m-3">{data.CategoryName}</div>
                <hr />
                <div className="row m-3">
                  {foodItem.length !== 0 ? (
                    foodItem
                      .filter((item) =>  (item.CategoryName === data.CategoryName)&& (item.name.toLowerCase().includes(search.toLocaleString()))) 
                      .map((filterItems) => {
                        return (
                          <div
                            className="col-12-col-md-6 col-lg-3"
                            key={filterItems._id}
                          >
                            <Card
                              foodItems ={filterItems}
                              options={filterItems.options[0]}                            
                            />
                          </div>
                        );
                      })
                  ) : (
                    <div>No data</div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div>No categories</div>
        )}
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
}
