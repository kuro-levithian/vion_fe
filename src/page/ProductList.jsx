import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import { Product, Sale_Product } from '../data'
import styled from "styled-components";

const PProduct = styled.div`
display: flex;
max-width: inherit;
`;


const ProductList = () => {
    return (
        <div className='big-container'>
        <Header/>
        <section className="shop-product home">
        <div className="box-container">
          <div className="left-col">
            <div className="left-col-1">
              <h2 className="title">Danh mục sản phẩm</h2>
              <div className="box">
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Nước uống</a>
                </div>
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Bánh kẹo &amp; Đồ ngọt các loại</a>
                </div>
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Ngũ cốc &amp; sản phẩm từ sữa</a>
                </div>
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Trái cây &amp; Rau củ</a>
                </div>
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Đồ gia dụng</a>
                </div>
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Rau củ &amp; Đồ đóng hộp</a>
                </div>
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Dụng cụ nhà bếp</a>
                </div>
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Thịt, Cá &amp; Thực phẩm đông lạnh</a>
                </div>
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Mì, Sốt &amp; Đồ ăn liền</a>
                </div>
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Đồ trang điểm</a>
                </div>
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Pet Care</a>
                </div>
              </div>
            </div>
            <div className="left-col-1">
              <h2 className="title">Tình trạng</h2>
              <div className="box">
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Còn hàng</a>
                </div>
                <div className="check">
                  <i className="fas fa-caret-right" />
                  <a href="#">Đang giảm giá</a>
                </div>
              </div>
            </div>
            <div className="left-col-1">
              <h2 className="title">Sản phẩm nổi bật</h2>
              <div className="box">
                  {Sale_Product.map((item)=>(
                      <div className='image'>
                      <img src={item.image} alt="" />
                      <div className="content">
                        <h3>{item.title}</h3>
                        <p><span>{item.main_price}</span>{item.sub_price}</p>
                      </div>
                      </div>
                  ))}
              </div>
            </div>
          </div>
          {/* ----------- right-col starts -----------  */}
          <div className="right-col">
            <div className="logo">
              <a href="#"><img src="images/shop-1.webp" alt="" /></a>
            </div>
            <div className="right-col-1">
              <div className="icons">
                <i className="fas fa-th-large" />
                <i className="fas fa-th-list" />
              </div>
              <div className="select">
                <select>
                  <option>Phổ biến nhất</option>
                  <option>Đánh giá cao nhất</option>
                  <option selected>Mới nhất</option>
                  <option>Đắt nhất</option>
                  <option>Rẻ nhất</option>
                </select>
              </div>
            </div>
            <div className="right-col-3">
              <section className="product">
                <div className="box-container">
                    {Product.map((item)=>(
                        <div className="box">
                        <span className="discount">-33%</span>
                        <div className="corner-box"><span /></div>
                        <img src={item.image} alt="" />
                        <h3>{item.title}</h3>
                        <p>Còn hàng - <span>1</span>kg</p>
                        <div className="price"><span>{item.main_price}</span>{item.sub_price}</div>
                        <button type="button" className="btn">Thêm</button>
                      </div>
                    ))}
                </div>
              </section>
            </div>
            <div className="next-page">
              <div className="page">1</div>
              <div className="page">2</div>
              <div className="page"><i className="far fa-arrow-right" /></div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      </div>
    )
}

export default ProductList
