# Express
***
## `Express là gì ?. Nếu chức năng của framework này ?`
> Express là framework tối giản và tiện ích để xây dựng fast web app 
dựa trên NodeJS, với nhiều tính năng mạnh mẽ như: 
* Thiết lập middleware để phản hồi request từ HTTP.
* Routing được sử dụng với nhiều action khác nhau based on HTTP và URL.
* Và trả về HTML pages dựa trên các params truyền vào template.
## `WebServices la gi ? Có bao nhiêu loại: RESTfull, SOAP`
* Theo [tutorialpoint](#https://www.tutorialspoint.com/nodejs/nodejs_restful_api.htm) 
một web service là một tập hợp các tiêu chuẩn và các giao thức mở cho phép exchange 
data giữa applications hoặc systems.
* Theo [guru99](#https://www.guru99.com/web-service-architecture.html#1) thì web service
là một môi trường được chuẩn hóa để thao tác giữa 2 phái client và server trên nền WWW.
> Tóm lại, theo cách hiểu của em, Web Service là dịch vụ web, chứa dữ liệu thô dạng XML(hoặc JSON, sẽ tìm hiểu sau).
Khi server nhận request từ người dùng, server đưa vào web service
và web service sẽ phân tích và trả về kiểu dữ liệu mà người dùng có thể hiểu được.
### Kiểu Web Service chính
**SOAP**(Simple Object Access Protocol)
* Giao thức truy cập Web Service,truyền tải dữ liệu thô dưới dạng XML, rất đơn giản và có thể mở rộng, ngoài ra thì nó cho phép vượt firewall
* SOAP gồm :
  - HEADER: chứa địa chỉ web service, host, Content-Type, Content-Length.
  - BODY: 
**RESTful**(Representational State Transfer)
* REST là một kiểu kiến trúc được sử dụng để build những ứng dụng web lightweight, maintainable, and scalable, và nó được gọi là ứng dụng web theo kiểu RESRful WS.
* Build một RESTful WS dựa the quy tắc của REST:
  - Sử dụng HTTP protocol(POST, GET, PUT, DELETE)
  - Stateless: Ko lưu trong tin của client
  - Hiển thị cấu trúc thư mục nhu urls
  - Truyền tải JSON hoặc XML
## `Có các loại RESTFull method nào ?`
**4 method chính:**
- POST
- GET
- PUT
- DELETE
## `Các bước tạo ra web server đơn giản bằng Express ?`
```Javascript
//chạy ví dụ ở ch2_express.js
const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('FPT SOFTWARE'));

app.listen(3000, () => console.log('Fsoft is running on port 3000'));
```
## `Routing là gì ?`
> **Routing** `đề cập đến việc xác định chính xác yêu cầu từ phía client để application có thể phản hồi, đó là một url/path thông qua method của HTTP`
## `Nếu các khái niệm Route method, Route path, Route param ?`
* Mỗi route thì có một hoặc nhiều hơn cấc hàm xử lí nó, defined theo syntax ```app.METHOD(PATH, HANDLER)```
  - **Route method:** truyền tải http method request ví dụ như hàm get() ở trên của một instance(app) của lớp express
  - **Route path:** là đường dẫn trên server, route paths có thể là strings, string patterns, hoặc Regex.
  
  ```Javascript
  app.get('/random.text', function (req, res) {
  res.send('random.text');
  });

  //String pattern
  app.get('/users/*', function(req, res) {
  // Do something.
  });
  // đường dẫn mà có dấu * sẽ khớp bắt đầu user

  //Regex
  app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
  });
  // đường dẫn nào kết thúc là fly thì được
  ```
  
  - **Route Handler:** là hàm được thực thi khi truy cập đến đường dẫn đó.
  
  - **Route Param:** là tên trên đường dẫn và có value tương ứng, thuộc về đối tương req có thuộc tính params(req.params.user), ví dụ:
  `user/:user tương ứng là user/phuocnd3`
  
## `Template engine là gì ?, trình bày cách để tạo template trong express`
> *Là một công cụ để thay thế biến thành giá trị trong template file và chuyển đổi thành HTML lúc runtime rồi gửi tới client. Đây là cách tạo HTML page dễ dàng hơn.*
**Cách tạo template trong express**
* Cần chọn engine cần cho express
* tạo file có đuôi '.' + 'tên engine', một số engine như: pug(jade), ejs hoặc có thể tự dev engine của chính bạn.
* xem ví dụ demo ở repository [own-template-engine](#https://github.com/phuocding/own-template-engine).

## `Middleware là gì ?, Nếu các chức năng của middleware`

## `Nêu tác dụng của phương thức use, all, next()`
