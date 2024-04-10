import React, {useEffect, useState} from "react";
import { BillingTable } from "../components/BillingTable";
export const BillingSystemPage = () => {
    const [data, setData] = useState({});
    const initialState = {
        productName: "",
        purchaseDate: null,
        cost: 0,
        quantity: 0,
        category: "",
        description: "",
        githubId: "",
        _id: ""
    }
    const [billingFormData, setBillingFormData] = useState(initialState);

    useEffect(() => {
        const fetchBillingData = async () => {
            const response = await fetch(`${window.ENVIRONMENT.api}/billingsystem`, {
                method: "GET",
                mode: "cors",
                credentials: "include", // Ensure that credentials are included in the request
            });
            const jsonData = await response.json();
            debugger
            //console.log(jsonData)
            setData(jsonData);
        };

        fetchBillingData();
    }, [])
    console.log(data)

    // const [text, setText] = useState(initialState)
    // useEffect(() => {
    //     const sendBillingData = async () => {
    //         const response = await fetch(`${window.ENVIRONMENT.api}/add-data`, {
    //             method: "POST",
    //             mode: "cors",
    //             headers: {
    //                 "Content-Type": 'application/json'
    //             },
    //             credentials: "include", // Ensure that credentials are included in the request
    //         });
    //         const jsonData = await response.json();
    //         //setData(jsonData);
    //         console.log(JSON.parse(jsonData))
    //     };
    //
    //     sendBillingData();
    // }, [])
    const handleSubmit = (e) => {
        e.preventDefault();


        const finalFormEndpoint = e.target.action;
        const data = Array.from(e.target.elements)
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

        console.log(data)
        fetch(`${window.ENVIRONMENT.api}/add-data`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(() => {
                // setMessage("We'll be in touch soon.");
                // setStatus('success');
                console.log('success')
            })
            .catch((err) => {
                console.log(err.toString());
                // setStatus('error');

            });
    };

    const displayRow = (row) =>  {
        setBillingFormData(
            {productName: row.getAttribute('dataUpdname'),
                purchaseDate: row.getAttribute('dataDop'),
                cost: row.getAttribute('dataCost'),
                quantity: row.getAttribute('dataQuantity'),
                category: row.getAttribute('dataCategory'),
                description: row.getAttribute('dataDesc'),
                githubId: row.getAttribute('dataGithub'),
                _id: row.getAttribute('dataUpdindex')
        })
        //setting the value for input html tag
        // document.getElementById("updindex").setAttribute('value', row.getAttribute('data-updindex'))
        // document.getElementById("githubid").setAttribute('value', row.getAttribute('data-github'))
        // document.getElementById("updproductname").setAttribute('value', row.getAttribute('data-updname'))
        //
        // const dt = new Date(row.getAttribute('data-dop'))
        // const month = dt.getMonth()+1
        // const date = dt.getDate()
        // const year = dt.getFullYear()
        // const formattedDate =`${year}-${month.toString().padStart(2, '0')}-${date.toString().padStart(2, '0')}`
        // document.getElementById("updpurchasedate").setAttribute('value', formattedDate)
        // document.getElementById("updcost").setAttribute('value', row.getAttribute('data-cost'))
        // document.getElementById("updquantity").setAttribute('value', row.getAttribute('data-quantity'))
        // document.getElementById("updcategory").value = row.getAttribute('data-category')
        // document.getElementById("upddescription").setAttribute('value', row.getAttribute('data-desc'))
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        const finalFormEndpoint = e.target.action;
        const data = Array.from(e.target.elements)
            .filter((input) => input.name)
            .reduce((obj, input) => Object.assign(obj, { [input.name]: input.value }), {});

        console.log(data)
        fetch(`${window.ENVIRONMENT.api}/update_data`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error(response.statusText);
                }

                return response.json();
            })
            .then(() => {
                // setMessage("We'll be in touch soon.");
                // setStatus('success');
                console.log('success')
            })
            .catch((err) => {
                console.log(err.toString());
                // setStatus('error');

            });
    };

    const deleteRow = async (r) =>  {
        //saving the object containing the index to remove
        let payload = JSON.stringify({_id:r.getAttribute('data-index')})
        console.log(payload)
        const response = await fetch( `${window.ENVIRONMENT.api}/delete_data`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method:"DELETE",
            body: payload, //sending the object to server with delete request
        })

    }


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
                        <form onSubmit={handleSubmit} method="POST">
                            <label htmlFor="productname">Product Name</label>
                            <br/>
                            <input  autoFocus="true" autoComplete="off" type="text" name="productName" id="productname" placeholder="Enter product name" required/>
                            <br/>
                            <label htmlFor="purchasedate">Date Of Purchase</label>
                            <input  autoComplete="off" type="date" id="purchasedate" name="purchaseDate" required/>
                            <br/>
                            <label htmlFor="cost">Product Cost</label>
                            <input  autoComplete="off" type="number" id="cost" name="cost" placeholder="Enter cost for single" required/>
                            <br/>
                            <label htmlFor="quantity">Product Quantity</label>
                            <input  autoComplete="off" type="number" id="quantity" name="quantity" placeholder="Enter quantity" required/>
                            <br/>
                            <label htmlFor="category">Product Category</label>
                            <br/>
                            <select  id="category" name="category">
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
                            <input  autoComplete="off" type="text" id="description" name="description" placeholder="Enter any product description" required/>
                            <input type="hidden" value={data.id} name="githubId"/>
                            <br/>
                            <button type="submit" id="submit" className="btn btn-primary submit-btn">SUBMIT</button>
                            <button type="reset" className="btn btn-primary submit-btn">RESET</button>
                        </form>
                    </div>
                    <BillingTable data={data} />
                    
                    
                </div>

            </div>

                 <div className="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div className="modal-dialog modal-lg" role="document">
                         <div className="modal-content">
                         <div className="modal-header">
                             <h5 className="modal-title" id="exampleModalLabel">Update </h5>
                         </div>
                        <div className="modal-body">
                             <div className="modal-body-form" >
                                 <form onSubmit={handleUpdate} method="POST">
                                     <input type="hidden" name="_method" value="PUT" />
                                     <label htmlFor="updproductname">Product Name</label>
                                     <br />
                                     <input value={billingFormData.productName} autoComplete="off" type="text" id="updproductname" name="productName" placeholder="Enter product name" required />
                                     <br />
                                     <label htmlFor="updpurchasedate">Date Of Purchase</label>
                                     <input value={billingFormData.purchaseDate} aria-label="purchase-date" autoComplete="off" type="date" id="updpurchasedate" name="purchaseDate" required />
                                    <br />
                                     <label htmlFor="updcost">Product Cost</label>
                                     <input value={billingFormData.cost} autoComplete="off" type="number" id="updcost" name="cost" placeholder="Enter cost for single" required />
                                     <br />
                                     <label htmlFor="updquantity">Product Quantity</label>
                                     <input value={billingFormData.quantity} autoComplete="off" type="number" id="updquantity" name="quantity" placeholder="Enter quantity" required />
                                     <br />
                                     <label htmlFor="updcategory">Product Category</label>
                                     <br />
                                     <select value={billingFormData.category} id="updcategory" name="category" aria-label="category">
                                         <option disabled selected>Choose Category</option>
                                         <option value="food">Food</option>
                                         <option value="electronics">Electronics</option>
                                         <option value="furniture">Furniture</option>
                                         <option value="clothing">Clothing</option>
                                         <option value="kitchen">Kitchen</option>
                                         <option value="living-bedroom">Living/Bedroom space</option>
                                         <option value="other">Other</option>
                                     </select>
                                     <br />
                                     <label htmlFor="upddescription">Product Description</label>
                                     <br />
                                     <input value={billingFormData.description} autoComplete="off" type="text" id="upddescription" name="description" placeholder="Enter any product description" required />
                                     <br />
                                     <input value={billingFormData.githubId} type="hidden" id="githubid" name="githubId" readOnly={true} />

                                     <input value={billingFormData._id} type="hidden" id="updindex" name="_id" readOnly={true}/>

                                     <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">CANCEL</button>
                                         <button type="submit" className="btn btn-success btn-sm" id="updsubmit">UPDATE</button>
                                         <button type="reset" className="btn btn-primary btn-sm" id="reset">RESET</button>
                                     </div>
                                 </form>
                             </div>
                         </div>

                     </div>
                 </div>
             </div>


</>
    )

}