# Luyện thi KET Reading (Part 1 → 9)

Web ôn tập KET Reading dạng tĩnh, chạy offline bằng trình duyệt — không cần cài đặt hay server.

## Cấu trúc

```
index.html        # Trang chủ, liệt kê Part 1–9
part1/            # Part 1 — Matching biển báo (Signs)
  index.html
  data.js         # 20 bộ đề: câu hỏi, biển báo, đáp án, giải thích
part4/            # Part 4 — Đọc hiểu (Right/Wrong/Doesn't say & Who…?)
  index.html
  data.js         # 18 bài đọc: đoạn dịch + câu hỏi 21–27, đáp án, giải thích
source/           # Tài liệu gốc (PDF/DOCX đề bài & đáp án)
```

## Dùng thử

Mở `index.html` ở thư mục gốc bằng trình duyệt, chọn Part muốn luyện.

## Thêm một Part mới

1. Tạo thư mục `partN/` với `index.html` (+ `data.js` nếu cần).
2. Trong `index.html` ở gốc, đổi `ready: false` thành `ready: true` cho Part đó.

## Tiến độ

- [x] Part 1 — Matching biển báo (20 bộ đề)
- [x] Part 4 — Đọc hiểu (18 bài)
- [ ] Part 2, 3, 5 → 9 — sẽ cập nhật
