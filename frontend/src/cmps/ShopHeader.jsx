import React, { useContext, useEffect } from 'react'
import Edit from '../styles/icons/edit.png'
import CloudinaryService from '../services/CloudinaryService'
export default function ShopHeader({ shop, updateLogo ,loggedInUser,updatInfo}) {


    async function HandleEdit(ev) {

        let img = await CloudinaryService.uploadImg(ev)
        shop.style.logoUrl = img.url
        updateLogo(shop)
    }

    function handleInput(ev){
            let name=ev.currentTarget.getAttribute('name')
             shop.info={...shop.info,[name]:ev.currentTarget.textContent}
            updatInfo(shop)
    }
    return (
        <div className="shop-header">
            <div className="main-content flex column align-center space-around">
            
                {/* <div className="flex column align-center header-container"> */}
                    <div className="logo-wrapper">
                    <img className="logo" src={shop.style.logoUrl}></img>
                    {loggedInUser && shop && loggedInUser.shopId === shop._id ?
                  <label htmlFor="upload-photo" className="edit-label"><img className='edit-shop-btn' src={Edit}></img></label>:null}
                    <input type="file" className="file-upload" name="photo" onChange={HandleEdit} id="upload-photo" />
                    </div>
                    <p contentEditable={loggedInUser && shop && loggedInUser.shopId === shop._id ?true:false}  name="name"  onBlur={handleInput} suppressContentEditableWarning={true} className="headline">{shop.info.name}</p>
                {/* </div> */}
                <p contentEditable={loggedInUser && shop && loggedInUser.shopId === shop._id ?true:false} onBlur={handleInput} suppressContentEditableWarning={true} name="description" className="main-text">{shop.info.description}</p>
            </div>


        </div>
    )
}
