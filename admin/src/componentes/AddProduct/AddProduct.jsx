import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from "../../assets/upload_area.svg"

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "",
        new_price: "",
        old_price: ""
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = (e) => {
        setProductDetails(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }

    const Add_product = async () => {
        // console.log("Product Details:", productDetails);
        let formData = new FormData();
        formData.append('product', image);

        let response = await fetch('https://e-commerce-backend-sme3.onrender.com/upload', {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: formData
        });

        let responseData = await response.json();

        if (responseData.success) {
            let updatedProduct = { ...productDetails, image: responseData.image_url };
            // console.log("Final Product:", updatedProduct);

            let productResponse = await fetch('https://e-commerce-backend-sme3.onrender.com/addproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedProduct),
            });

            let productData = await productResponse.json();
            productData.success ? alert('Product Added') : alert('Failed');
        } else {
            alert('Image Upload Failed');
        }
    }

    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="">Select Category</option>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className='addproduct-thumnail-img' />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={Add_product} className='addproduct-btn'>ADD</button>
        </div>
    )
}

export default AddProduct;
