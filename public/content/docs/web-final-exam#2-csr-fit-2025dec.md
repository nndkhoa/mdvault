# PTUDW - CSR Test: Food Delivery WebApp

## Quy tắc nộp bài

- Tên file: **&lt;MSSV&gt;-food-delivery-exam-csr.zip** (có thể dùng định dạng file nén khác)
- Không nộp `node_modules`
- Thời gian làm bài: **120 phút**
- Thời điểm đóng link nộp bài: **10 phút** sau khi kết thúc thời gian làm bài

## Quy tắc nộp video ghi màn hình quá trình làm bài

- Sinh viên quay phim toàn bộ màn hình máy tính của mình trong suốt quá trình làm bài thi, bao gồm cả taskbar, system tray, đồng hồ hệ thống, camera cá nhân quay trọn vẹn khuôn mặt và **KHÔNG CHE** đồng hồ hệ thống.
- Sinh viên dùng **OBS Studio** kết hợp với **DroidCam** để quay phim
  - Video output: 1920 x 1080, Video Bitrate 720Kbs, FPS 30
  - Upload lên YouTube
  - Nộp link vào **cuối ngày thi**
- Sinh viên dùng **Loom** để quay phim
  - Nộp link vào **cuối ngày thi**

## Tài nguyên được cung cấp

Sinh viên được cung cấp các tài nguyên sau để thực hiện bài thi:
- `html-files`
  - `list.html` -> giao diện html hiển thị danh sách các món ăn, có hỗ trợ **filters** (lọc theo `category`, `chef`) và **phân trang dữ liệu**
  - `create-dish.html` -> giao diện html tạo mới 01 món ăn
  - Cả 2 giao diện đều sử dụng **Tailwind CSS v4** và **Heroicons**, thiết kế theo phong cách **Bento Grid** hiện đại
- `backend-spec`
  - `api-doc.md` -> mô tả các resources được cung cấp ở backend cùng phương pháp tích hợp
  - `*.http` -> các http request mẫu, gọi backend

## Yêu cầu bài thi

### A - Web App
Sinh viên xây dựng ứng dụng Web Client-side render có các chức năng sau:

**Feature 1: Hiển thị danh sách các món ăn, `url: /dishes`**
- Món ăn đầu tiên có hiển thị khác biệt so với các món ăn còn lại
- Phân trang dữ liệu bằng cách sử dụng các api phù hợp ở backend
- Filter dữ liệu theo 2 tiêu chí `category` và `chef`
  - Danh sách `category` và `chef` trong 2 dropdown-lists được lấy từ backend
  - Chỉ cần filter ở **client-side**


**Feature 2: Thêm mới một món ăn, `url: /dishes/create`**
- Validate dữ liệu nhập bằng các hàm xử lý custom, dùng `react-router` hoặc các thư viện xử lý form phù hợp như `formik`, `react-hook-form`

### B - Lưu ý

- Sinh viên chủ động tạo dự án `reactjs` với các công cụ thích hợp, chuyển đổi các file `html` sang `react-functional-component` để hoàn thành bài thi
- Các công cụ khuyên dùng:
  - **vite**
  - **tailwind v4**
  - **react-router**

## Thang điểm và quy định

**Project (tối đa 1)**

| Tiêu chí | Điểm |
|----------|------|
| Cấu hình theme cho tailwind thành công theo hướng dẫn | 0.25 |
| Không một link nào tải lại toàn bộ trang | 0.25 |
| Mọi thao tác chuyển trang, đọc/ghi backend đều thể hiện loading spinner (được cung cấp mẫu trong `list.html`) | 0.5 |

**Chức năng hiển thị danh sách món ăn /dishes (tối đa 2.5)**

| Tiêu chí | Điểm |
|----------|------|
| Convert `list.html` sang react functional component | 0.5 |
| Load được danh sách món ăn với đầy đủ thông tin, hình ảnh (12 fields) | 1 |
| Hiển thị dish summary **27 delicious dishes** ở đầu trang | 0.5 |
| Món ăn đầu tiên trong danh sách có hiển thị khác biệt | 0.25 |
| Giá tiền được định dạng (vd: 300,000) | 0.25 |

**Chức năng phân trang ở /dishes (tối đa 2)**

| Tiêu chí | Điểm |
|----------|------|
| Giới hạn số món ăn được tải xuống mỗi lần | 0.25 |
| Hiển thị đúng số lượng trang | 0.5 |
| Chuyển trang Number | 0.5 |
| Chuyển trang Next/Prev | 0.5 |
| Hiển thị page summary **Showing 1-7 of 27 dishes** ở cuối trang | 0.25 |

**Chức năng filter ở /dishes (tối đa 1.5)**

| Tiêu chí | Điểm |
|----------|------|
| Tải danh sách đầu bếp & danh sách chuyên mục vào các dropdown list | 0.75 |
| Filter danh sách món ăn hiện có trên trang theo đầu bếp & chuyên mục | 0.75 |

**Chức năng tạo mới sự kiện /dishes/create (tối đa 3)**

| Tiêu chí | Điểm |
|----------|------|
| Convert `create-dish.html` sang react functional component | 0.5 |
| Tải danh sách đầu bếp & danh sách chuyên mục vào các dropdown list | 0.5 |
| Món ăn mới được tạo thành công, đầy đủ thông tin | 1 |
| Các number-input ở `/dishes/create` được định dạng (vd: 300,000) | 0.25 |
| Kiểm tra đầy đủ dữ liệu input từ người dùng trên tất cả các input | 0.25 |
| Hiển thị validation result dễ nhìn (tailwind components, ...) | 0.25 |
| Reset form sau khi thêm món ăn | 0.25 |

---

**Chúc các bạn làm bài tốt!** 🍜🍕🍱
