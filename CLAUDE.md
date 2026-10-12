# Quy tắc làm việc với AI trong project này

AI phải đọc file này trước khi bắt đầu bất kỳ task nào.

## 1. Không chạy type-check, lint, build

- **Không tự chạy** `tsc --noEmit`, `eslint`, `next lint`, `next build` (và các lệnh tương đương) sau khi sửa code.
- Mục đích: tiết kiệm token và trả lời task nhanh nhất có thể.
- Chỉ chạy khi người dùng **yêu cầu rõ ràng**, ví dụ khi họ chuẩn bị deploy và nhờ chạy build, type-check, lint.
- Khi báo cáo kết quả, chỉ cần nói đã sửa gì. Có thể ghi chú ngắn rằng chưa chạy type-check/lint, không cần xin phép hay giải thích dài.
