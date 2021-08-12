// export const EndPoint = "http://localhost:9994/asset-management";
export const EndPoint = process.env.REACT_APP_BACKEND_URL || "https://java-backend-group3-test.azurewebsites.net/asset-management";
export const CREATE_ASSET = "/create-asset";

// API
// CATEGORY
export const GET_CATEGORY = "category";
export const CREATE_CATEGORY = "category";

//ASSET
export const CREATE_ASSET_API = "asset";
