import React from 'react'
import './Admin.css';
import Sidebar from '../../componentes/Sidebar/Sidebar';
import AddProduct from '../../componentes/AddProduct/AddProduct';
import ListProduct from '../../componentes/ListProduct/ListProduct';
import { Routes, Route } from 'react-router-dom';

const Admin = () => {
    return (
        <div className='admin'>
            <Sidebar />
            <Routes>
                <Route path='/addproduct' element={<AddProduct />} />
                <Route path='/listproduct' element={<ListProduct />} />
            </Routes>
        </div>
    )
}

export default Admin
