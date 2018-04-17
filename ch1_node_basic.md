# Working Node
***
## Tìm hiểu về module, cách import(require) export nó trong node.
> `Module là tập hợp các function, hành động tương đồng với nhau, 
nằm chung trong một file hay gọi là module.`
* Ví dụ như các chương trong một cuốn tiểu thuyết
> Mục đích là để dễ quản lí, thêm sửa xóa(edit) và tái sử dụng lại,
ngoài ra còn mang tính đóng gói.
Ví dụ ở đây tạo một file module gồm nhiều function. `createModule.js`
```Javascript
const message = name => `Hello ${name}`;
const waiting = name => `Right here waiting for ${name}!`;

export { message, waiting };
```
Tiếp theo là import module `createModule` vào trong `useModule.js`
```javascript
import { message, waiting } from './createModule';

const mess = message('H`');
console.log(mess);

const wait = waiting('H`');
console.log(wait);
```
console sẽ hiển thị
```
Hello H`
Right here waiting for H`
```
## Quản lí module bằng npm hoặc yarn.
> Cài đặt module vào node_modulesvà quản lí nó theo file config có tên là package.json, 
chia sẻ cho nguời khác, chỉ việc `npm install` hoặc `yarn`, node_modules sẽ tự
cài đặt theo dependencies hoặc devdependencies tròn package.json.
> `npm init` hoặc `yarn init` để tạo package.json.
## Làm việc với file bằng file system(fs).
> Cách truy cập, vào ra file với Node
> Thao tác với data trong file
Tạo một file `data.txt` có nội dụng bất kì
Mở file đấy bằng fs module trong Node
Tạo một file fileAccess.js
```javascript
const fs = require('fs');

//open
// param ban đầu là path file
// param t2 là cách truy xuất như read or write
fs.open('data.txt', 'r+', function(err, file) {
  if(err) {
    console.log('file error');
    return;
  } console.log('open file data');
}
// Đọc file the cách đồng bộ
const data = fs.readFileSync('path.txt')
// Hoặc đọc file bất đồng bộ
fs.readFile('path', function(err, data) {
  if (err) {
    console.log('file error');
  } else {
    console.log(data);
  }
});
```
> Kết quả trả về sẽ có dang `buffer`, vì vậy nên toString hoặc chọn 'utf8'
bên trong hàm read
> `buffer`là các lớp lưu trữ dữ liệu thô như 1 mảng các số nguyên tương ứng.
> `fs` có thể đọc, ghi file, ngoài ra còn có thể tạo thư mực với hàm mkdir
như trên terminal.
## Async và callback trong NodeJS.
> Như bạn biết thì synchronous là code(các câu lệnh) được chạy tuần tự 
trừ trên xuống dưới. Đây chính là cơ chế lập trình đồng bộ. Tuy nhiên khi 
truyền một callback function. Xem ví dụ dưới: 
```Javascript
const fs = require('fs');

fs.readFile('data.txt', function(err, data) {
  if (err) {
    console.log("New Error");
  } 
  console.log("New data");
});

console.log("ended!");
```
> Giải thích cơ chế async ở đây:
* `Đầu tiên engine sẽ thực thi lần lượt câu lệnh, tuy nhiên sau khi 
chạy qua readFile phát hiện 1 callback, sinh ra 1 event là readFile và 
nó sẽ đưa callback vào queue event trong event loop. Tiếp tục chạy sync 
cấc câu lệnh còn lại, rồi mới chạy tiếp những câu lệnh đã đưa vào queue 
trước đó.`
## Async và cách dùng promise.
> Promise sinh ra khi có quá nhiều callback lồng nhau, hay còn gọi là 
callback hell, việc đó khiến code nhìn rất phức tạp và khó kiểm soát, 
maintainability hay là debug. (install q module for promise in NodeJS)
## Tạo webserver bằng http mudule.
> Xem ví dụ Hello world
