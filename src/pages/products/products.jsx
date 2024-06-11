import React from 'react'
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from 'react-redux';
import Cart from '../../components/cart/Cart';
import { useEffect } from 'react';
import { getData } from '../../api/home/home';

const Products = () => {

  const data = useSelector((state) => state.home.data);
  const dispatch = useDispatch()
  const imgApi = "http://65.108.148.136:8072/images/";

  useEffect(() => {
    dispatch(getData())
  },[dispatch])

  return (
    <div>
      <div className="flex mt-[50px] gap-[700px] justify-center">
        <div className="flex gap-[10px]">
          <h1 className="text-[lightGrey]">Home /</h1>
          <h1>Explore Our Products</h1>
        </div>

        <div>
          <select
            className="w-[200px] rounded-[3px] h-[40px] border border-[lightGrey]"
            name=""
            id=""
          >
            <option value="Populary">Populary</option>
          </select>
        </div>
      </div>

      <div className="flex gap-[30px]">
        <div className="sidebar">
          <div className="category">
            <h3>Category</h3>
            <ul>
              <li>
                <a href="#">All products</a>
              </li>
              <li>
                <a href="#">Electronics</a>
              </li>
              <li>
                <a href="#">Home & Lifestyle</a>
              </li>
              <li>
                <a href="#">Medicine</a>
              </li>
              <li>
                <a href="#">Sports & Outdoor</a>
              </li>
              <li>
                <a href="#">See all</a>
              </li>
            </ul>
          </div>

          <div className="brands">
            <h3>Brands</h3>
            <ul>
              <li>
                <input type="checkbox" id="samsung" />
                <label htmlFor="samsung">Samsung</label>
              </li>
              <li>
                <input type="checkbox" id="apple" />
                <label htmlFor="apple">Apple</label>
              </li>
              <li>
                <input type="checkbox" id="huawei" />
                <label htmlFor="huawei">Huawei</label>
              </li>
              <li>
                <input type="checkbox" id="pocco" />
                <label htmlFor="pocco">Pocco</label>
              </li>
              <li>
                <input type="checkbox" id="lenovo" />
                <label htmlFor="lenovo">Lenovo</label>
              </li>
              <li>
                <a href="#">See all</a>
              </li>
            </ul>
          </div>

          <div className="features">
            <h3>Features</h3>
            <ul>
              <li>
                <input type="checkbox" id="metallic" />
                <label htmlFor="metallic">Metallic</label>
              </li>
              <li>
                <input type="checkbox" id="plastic-cover" />
                <label htmlFor="plastic-cover">Plastic cover</label>
              </li>
              <li>
                <input type="checkbox" id="8gb-ram" />
                <label htmlFor="8gb-ram">8GB Ram</label>
              </li>
              <li>
                <input type="checkbox" id="super-power" />
                <label htmlFor="super-power">Super power</label>
              </li>
              <li>
                <input type="checkbox" id="large-memory" />
                <label htmlFor="large-memory">Large Memory</label>
              </li>
              <li>
                <a href="#">See all</a>
              </li>
            </ul>
          </div>

          <div className="price-range">
            <h3>Price range</h3>
            <input type="number" min="0" max="999999" placeholder="Min" />
            <input type="number" min="0" max="999999" placeholder="Max" />
            <input type="range" min="0" max="999999" step="1" />
            <button type="button">Apply</button>
          </div>
          <div className="condition">
            <h3>Condition</h3>
            <ul>
              <li>
                <input type="radio" name="condition" id="any" defaultChecked />
                <label htmlFor="any">Any</label>
              </li>
              <li>
                <input type="radio" name="condition" id="refurbished" />
                <label htmlFor="refurbished">Refurbished</label>
              </li>
              <li>
                <input type="radio" name="condition" id="brand-new" />
                <label htmlFor="brand-new">Brand new</label>
              </li>
              <li>
                <input type="radio" name="condition" id="old-items" />
                <label htmlFor="old-items">Old items</label>
              </li>
            </ul>
          </div>

          <div className="ratings">
            <h3>Ratings</h3>
            <ul>
              <li>
                <input type="checkbox" id="five-stars" />
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    // value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </li>
              <li>
                <input type="checkbox" id="four-stars" />
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    // value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </li>
              <li>
                <input type="checkbox" id="three-stars" />
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    // value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </li>
              <li>
                <input type="checkbox" id="two-stars" />
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    // value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </li>
              <li>
                <input type="checkbox" id="one-star" />
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    // value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[50px] grid grid-cols-3 w-[70%] gap-[30px] pt-[50px] ">
          {data?.map((el, index) => (
            <Cart
            image={`${imgApi}${el.image}`}
            productName={el.productName}
            price={el.price}
            discountPrice={el.quantity}
            quantity={el.price + 72}
        />
          ))}
        </div>
      </div>
          <div className='flex justify-center mt-[50px]'>
            <button className="w-[200px] h-[40px] rounded-[5px] border bg-[#DB4444] text-[white]">
              More Products
            </button>
          </div>
    </div>
  );
}

export default Products