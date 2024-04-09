import React, {useEffect, useState} from "react";

export const BillingSystemPage = () => {
    const [data, setData] = useState({username: "default"});
    useEffect(() => {
        const fetchBillingData = async () => {
            const response = await fetch(`${window.ENVIRONMENT.api}/billingsystem`, {
                method: "GET",
                credentials: "include", // Ensure that credentials are included in the request
            });
            const jsonData = await response.json();
            setData(jsonData);
        };

        fetchBillingData();
    }, [])

    return (
        <>
            <nav className="navbar bg-body-tertiary fixed-top top-nav">
                <div className="container-fluid">
                    <div className="container" style={{textAlign: "center"}}>
                        <a className="navbar-brand title" style={{color: "#fff"}} href="#">Billing System</a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar"
                         aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/billingsystem">Billing System</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/instructions">Instructions</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/user_info">User Information</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/auth/logout">Logout</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="apply-translation">
                <div className="flex-container">
                    <div className="flex-item inside-form">
                        <h2>Add Purchase Data</h2>
                        <form action="/add-data" method="POST">
                            <label htmlFor="productname">Product Name</label>
                            <br/>
                            <input autoFocus="true" autoComplete="off" type="text" name="productName" id="productname" placeholder="Enter product name" required/>
                            <br/>
                            <label htmlFor="purchasedate">Date Of Purchase</label>
                            <input autoComplete="off" type="date" id="purchasedate" name="purchaseDate" required/>
                            <br/>
                            <label htmlFor="cost">Product Cost</label>
                            <input autoComplete="off" type="number" id="cost" name="cost" placeholder="Enter cost for single" required/>
                            <br/>
                            <label htmlFor="quantity">Product Quantity</label>
                            <input autoComplete="off" type="number" id="quantity" name="quantity" placeholder="Enter quantity" required/>
                            <br/>
                            <label htmlFor="category">Product Category</label>
                            <br/>
                            <select id="category" name="category">
                                <option disabled selected>Choose Category</option>
                                <option value="food">Food</option>
                                <option value="electronics">Electronics</option>
                                <option value="furniture">Furniture</option>
                                <option value="clothing">Clothing</option>
                                <option value="kitchen">Kitchen</option>
                                <option value="living-bedroom">Living/Bedroom space</option>
                                <option value="other">Other</option>
                            </select>
                            <br/>
                            <label htmlFor="description">Product Description</label>
                            <br/>
                            <input autoComplete="off" type="text" id="description" name="description" placeholder="Enter any product description" required/>
                            <input type="hidden" value={data.id} name="githubId"/>
                            <br/>
                            <button type="submit" id="submit" className="btn btn-primary submit-btn">SUBMIT</button>
                            <button type="reset" className="btn btn-primary submit-btn">RESET</button>
                        </form>
                    </div>
                    <div className="flex-item display-results">
                        <h1>Purchase Data (Data for {data.username})</h1>
                        {/*{{#if billingdata }}*/}
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Details</th>
                                <th>Final Price</th>
                                <th>Modify</th>
                            </tr>
                            </thead>
                            <tbody id='table-body'>
                            {/*{{#each billingdata}}*/}
                            <tr>
                                <td>
                                    {/*{{@index}}*/}
                                </td>
                                <td>
                                    <ul>
                                        <li>Product Name: </li>
                                        <li>Purchase Date: </li>
                                        <li>Cost: $</li>
                                        <li>Quantity: </li>
                                        <li>Category: </li>
                                        <li>Description: </li>
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        <li>Total Price: $</li>
                                        <li>Discount: %</li>
                                        <li>After Discount: $</li>
                                    </ul>
                                </td>
                                <td>
                                    <button aria-labelledby="deleteData" onClick="deleteRow(this)" data-index = "{{_id}}" id="deleteData" className="submit-btn btn btn-outline-danger">DELETE</button>
                                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="displayRow(this)" className="show-popup submit-btn btn btn-outline-primary"  data-updindex = "{{_id}}" data-updname = "{{productName}}"
                                            data-dop = "{{purchaseDate}}" data-cost = "{{cost}}" data-quantity = "{{quantity}}"
                                            data-category = "{{category}}" data-desc = "{{description}}" data-github = "{{githubId}}">UPDATE</button>
                                </td>
                            </tr>
                            {/*{{/each}}*/}
                            <tr>
                                <td>
                                    -
                                </td>
                                <td>
                                    Total Price: ${data.total}
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                            </tbody>
                        </table>
                        {/*{{else}}*/}
                        {/*<svg xmlns="http://www.w3.org/2000/svg" className="d-none">*/}
                        {/*    <symbol id="info-fill" viewBox="0 0 16 16">*/}
                        {/*        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>*/}
                        {/*    </symbol>*/}
                        {/*</svg>*/}
                        {/*<div className="alert alert-primary d-flex align-items-center" role="alert">*/}
                        {/*    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>*/}
                        {/*    <div>*/}
                        {/*        You have not created any purchase data*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*{{/if}}*/}

                    </div>
                </div>

            </div>

            {/*//     <div className="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">*/}
            {/*//         <div className="modal-dialog modal-lg" role="document">*/}
            {/*//             <div className="modal-content">*/}
            {/*//             <div className="modal-header">*/}
            {/*//                 <h5 className="modal-title" id="exampleModalLabel">Update </h5>*/}
            {/*//             </div>*/}
            {/*//             <div className="modal-body">*/}
            {/*//                 <div className="modal-body-form" >*/}
            {/*//                     <form action="/update_data" method="POST"> <!-- form for user to update purchase data -->*/}
            {/*//                         <input type="hidden" name="_method" value="PUT">*/}
            {/*//                         <label for="updproductname">Product Name</label>*/}
            {/*//                         <br>*/}
            {/*//                         <input autocomplete="off" type="text" id="updproductname" name="productName" placeholder="Enter product name" required>*/}
            {/*//                         <br>*/}
            {/*//                         <label for="updpurchasedate">Date Of Purchase</label>*/}
            {/*//                         <input aria-label="purchase-date" autocomplete="off" type="date" id="updpurchasedate" name="purchaseDate" required>*/}
            {/*//                         <br>*/}
            {/*//                         <label for="updcost">Product Cost</label>*/}
            {/*//                         <input autocomplete="off" type="number" id="updcost" name="cost" placeholder="Enter cost for single" required>*/}
            {/*//                         <br>*/}
            {/*//                         <label for="updquantity">Product Quantity</label>*/}
            {/*//                         <input autocomplete="off" type="number" id="updquantity" name="quantity" placeholder="Enter quantity" required>*/}
            {/*//                         <br>*/}
            {/*//                         <label for="updcategory">Product Category</label>*/}
            {/*//                         <br>*/}
            {/*//                         <select id="updcategory" name="category" aria-label="category">*/}
            {/*//                             <option disabled selected>Choose Category</option>*/}
            {/*//                             <option value="food">Food</option>*/}
            {/*//                             <option value="electronics">Electronics</option>*/}
            {/*//                             <option value="furniture">Furniture</option>*/}
            {/*//                             <option value="clothing">Clothing</option>*/}
            {/*//                             <option value="kitchen">Kitchen</option>*/}
            {/*//                             <option value="living-bedroom">Living/Bedroom space</option>*/}
            {/*//                             <option value="other">Other</option>*/}
            {/*//                         </select>*/}
            {/*//                         <br>*/}
            {/*//                         <label for="upddescription">Product Description</label>*/}
            {/*//                         <br>*/}
            {/*//                         <input autocomplete="off" type="text" id="upddescription" name="description" placeholder="Enter any product description" required>*/}
            {/*//                         <br>*/}
            {/*//                         <input type="hidden" id="githubid" name="githubId" readonly>*/}
            {/*//                         <input type="hidden" id="updindex" name="_id" readonly>*/}
            {/*//*/}
            {/*//                         <div class="modal-footer">*/}
            {/*//                             <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">CANCEL</button>*/}
            {/*//                             <button type="submit" class="btn btn-success btn-sm" id="updsubmit">UPDATE</button>*/}
            {/*//                             <button type="reset" class="btn btn-primary btn-sm" id="reset">RESET</button>*/}
            {/*//                         </div>*/}
            {/*//                     </form>*/}
            {/*//                 </div>*/}
            {/*//             </div>*/}
            {/*//*/}
            {/*//         </div>*/}
            {/*//     </div>*/}
            {/*// </div>*/}


</>
    )
}