import React from "react";
import styled from "styled-components";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


const Inform = styled.td`
  padding-left: 2rem;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

export default function History() {
 
  return (
<div>
<Table striped bordered hover>
        <thead>
            <tr>
                <th>ID</th>
                <th>Ngày đặt hàng</th>
                <th>Tình trạng</th>
                <th>Tổng số tiền</th>
                <th>Thông tin đơn hàng</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>{new Date().toString().split("GMT+7")[0]}</td>
                <td>Hoàn thành</td>
                <td>$54</td>
                <td><Inform href="">Xem chi tiết</Inform><Inform href="">Đặt hàng lại</Inform></td>
            </tr>

        </tbody>
    </Table>

</div>
  );
}
