// OrderAPI.js
import axios from "axios"

const BASE_URL = "http://localhost:8080/orders"

export const createOrder = async (orderData, token = null) => {
  try {
    const headers = token
      ? {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }
      : {
          "Content-Type": "application/json",
        }

    const response = await axios.post(`${BASE_URL}/create`, orderData, {
      headers,
    })

    // Trả về phản hồi từ server
    return response.data
  } catch (error) {
    // Kiểm tra lỗi từ server nếu có
    if (error.response) {
      console.error("Error response from server:", error.response.data)
      throw new Error(error.response.data.message || "Lỗi không xác định")
    } else if (error.request) {
      console.error("No response from server:", error.request)
      throw new Error("Không thể kết nối đến server")
    } else {
      console.error("Unexpected error:", error.message)
      throw new Error("Lỗi không xác định")
    }
  }
}

// Hàm gọi API để lấy danh sách đơn hàng của người dùng
export const getAllOrders = async (token) => {
  try {
    // Đảm bảo token được truyền vào khi gọi API
    if (!token) {
      throw new Error("Token là bắt buộc!")
    }

    // Thiết lập headers với Authorization Bearer token
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }

    // Gửi yêu cầu GET để lấy danh sách đơn hàng
    const response = await axios.get(`${BASE_URL}/list`, { headers })

    // Trả về dữ liệu đơn hàng nếu API trả về thành công
    return response.data
  } catch (error) {
    // Kiểm tra lỗi từ server nếu có
    if (error.response) {
      console.error("Error response from server:", error.response.data)
      throw new Error(error.response.data.message || "Lỗi không xác định")
    } else if (error.request) {
      console.error("No response from server:", error.request)
      throw new Error("Không thể kết nối đến server")
    } else {
      console.error("Unexpected error:", error.message)
      throw new Error("Lỗi không xác định")
    }
  }
}

// Hàm gọi API để lấy thông tin đơn hàng theo orderId
export const getOrderById = async (orderId, token) => {
  try {
    // Đảm bảo token và orderId được truyền vào khi gọi API
    if (!token) {
      throw new Error("Token là bắt buộc!")
    }

    if (!orderId) {
      throw new Error("orderId là bắt buộc!")
    }

    // Thiết lập headers với Authorization Bearer token
    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    }

    // Gửi yêu cầu GET để lấy thông tin đơn hàng theo orderId
    const response = await axios.get(`${BASE_URL}/${orderId}`, { headers })

    // Trả về dữ liệu đơn hàng nếu API trả về thành công
    return response.data
  } catch (error) {
    // Kiểm tra lỗi từ server nếu có
    if (error.response) {
      console.error("Error response from server:", error.response.data)
      throw new Error(error.response.data.message || "Lỗi không xác định")
    } else if (error.request) {
      console.error("No response from server:", error.request)
      throw new Error("Không thể kết nối đến server")
    } else {
      console.error("Unexpected error:", error.message)
      throw new Error("Lỗi không xác định")
    }
  }
}