import React from "react"
export const BillingTable = ({data}) => {
    return(
        // <>
        // {data}
        //     <div className="flex-item display-results">
        //                 <h1>Purchase Data (Data for {data.username})</h1>
        //                 {/*{{#if billingdata }}*/}

        //                 <table className="table table-hover">
        //                     <thead>
        //                     <tr>
        //                         <th>#</th>
        //                         <th>Product Details</th>
        //                         <th>Final Price</th>
        //                         <th>Modify</th>
        //                     </tr>
        //                     </thead>
        //                     <tbody id='table-body'>
        //                     {/*{{#each billingdata}}*/}

        //                     {data.billingdata.map((dt) => (
        //                     <tr>
        //                         <td>
        //                             {/*{{@index}}*/}
        //                         </td>
        //                         <td>
        //                             <ul>
        //                                 <li>Product Name: {dt.productName}</li>
        //                                 <li>Purchase Date: {dt.purchaseDate}</li>
        //                                 <li>Cost: ${dt.cost}</li>
        //                                 <li>Quantity: {dt.quantity}</li>
        //                                 <li>Category: {dt.category}</li>
        //                                 <li>Description: {dt.description}</li>
        //                             </ul>
        //                         </td>
        //                         <td>
        //                             <ul>
        //                                 <li>Total Price: ${dt.totalPrice}</li>
        //                                 <li>Discount: %{dt.discount}</li>
        //                                 <li>After Discount: ${dt.afterDiscount}</li>
        //                             </ul>
        //                         </td>
        //                         {/* <td>
        //                             <button aria-labelledby="deleteData" onClick={() => deleteRow(this)} data-index = {this._id} id="deleteData" className="submit-btn btn btn-outline-danger">DELETE</button>
        //                             <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => displayRow(this)} className="show-popup submit-btn btn btn-outline-primary"  dataUpdindex = {this._id} dataUpdname = {this.productName}
        //                                     dataDop = {this.purchaseDate} dataCost = {this.cost} dataQuantity = {this.quantity}
        //                                     dataCategory = {this.category} dataDesc = {this.description} dataGithub = {this.githubId}>UPDATE</button>
        //                         </td> */}
        //                     </tr>
        //                     ))} /
        //                     {/*{{/each}}*/}

        //                     <tr>
        //                         <td>
        //                             -
        //                         </td>
        //                         <td>
        //                             Total Price: ${data.total}
        //                         </td>
        //                         <td></td>
        //                         <td></td>
        //                     </tr>
        //                     </tbody>
        //                 </table>
        //                 {/*{{else}}*/}
        //                 {/*<svg xmlns="http://www.w3.org/2000/svg" className="d-none">*/}
        //                 {/*    <symbol id="info-fill" viewBox="0 0 16 16">*/}
        //                 {/*        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>*/}
        //                 {/*    </symbol>*/}
        //                 {/*</svg>*/}
        //                 {/*<div className="alert alert-primary d-flex align-items-center" role="alert">*/}
        //                 {/*    <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>*/}
        //                 {/*    <div>*/}
        //                 {/*        You have not created any purchase data*/}
        //                 {/*    </div>*/}
        //                 {/*</div>*/}
        //                 {/*{{/if}}*/}

        //             </div>
        // </>
        <>
        <div>
            {data}
        </div>
        </>
    )
}

