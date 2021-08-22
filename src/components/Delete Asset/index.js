import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { del } from "../../httpHelper";
import './DeleteAsset.css'

const DeleteAsset_Yes = (props) => {
    const handleConfirmDeleteAsset = () => {
        let Url=`asset/${props.assetCode}`;
        del(Url)
            .then(() => alert("Delete asset OK!"))
            .catch(response => console.log(response))
    }

    const handleCancelDeleteAsset = () => {
        props.handleDeleteAssetShow();
    }

    return (
        <div id="delete-asset-yes" className={!props.deleteAssetYES ? "show-delete-asset" : ""}>
            <div className="delete-asset-header">
                <p>Are you sure?</p>
            </div>
            <div className="delete-asset-body">
                <p>Do you want to delete this asset?</p>
                <div className="button-flex">
                    <button className="delete-btn" onClick={handleConfirmDeleteAsset}>DELETE</button>
                    <button className="cancel-btn" onClick={handleCancelDeleteAsset}>CANCEL</button>
                </div>
            </div>
        </div>
    )
}

const DeleteAsset_No = (props) => {
    const handleXButton = () => {
        props.handleDeleteAssetShow();
    }

    return (
        <div id="delete-asset-no" className={!props.deleteAssetNO ? "show-delete-asset" : ""}>
            <div className="delete-asset-header">
                <p>Cannot Delete Asset</p>
                <button className="x-btn" onClick={handleXButton}>X</button>
            </div>
            <div className="delete-asset-body">
                <p>Cannot delete the asset because it belongs to one or more historical assignments.</p>
                <div className="link-edit-asset">
                    <p>If the asset is not able to be used anymore, please update its state in
                        <a href={`/editasset/${props.assetCode}`}>Edit Asset page</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

const DeleteAsset = () => {
    const [deleteAssetNO, setDeleteAssetNO] = useState(false);
    const [deleteAssetYES, setDeleteAssetYES] = useState(false);
    let { assetCode } = useParams();

    const handleDeleteAssetShow = () => {
        setDeleteAssetNO(false);
        setDeleteAssetYES(false);
    }

    const handleDeleteAssetNO = () => {
        setDeleteAssetNO(true);
        setDeleteAssetYES(false);
    }

    const handleDeleteAssetYES = () => {
        setDeleteAssetNO(false);
        setDeleteAssetYES(true);
    }

    useEffect(() => {
        let Url = `asset/check/${assetCode}`;
        del(Url)
            .then(response => {
                if (response.data.successCode === "ASSET_ABLE_TO_DELETE")
                    handleDeleteAssetYES();
            })
            .catch(error => {
                if (error.response.data.message === "ERR_ASSET_ALREADY_HAVE_ASSIGNMENT")
                    handleDeleteAssetNO();
            })
    }, [])

    return (
        <div id="delete-asset">
            <DeleteAsset_Yes assetCode={assetCode} handleDeleteAssetShow={handleDeleteAssetShow} deleteAssetYES={deleteAssetYES}/>
            <DeleteAsset_No assetCode={assetCode} handleDeleteAssetShow={handleDeleteAssetShow} deleteAssetNO={deleteAssetNO}/>
        </div>
    )
}
export default DeleteAsset;