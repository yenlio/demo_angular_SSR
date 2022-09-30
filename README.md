Tạo một dự án ANGULAR
    +ng new project-name

Bên trong project thêm Angular Universal
    +cd project-name
    +ng add @nguniversal/express-engine

Hệ thống sẽ thêm và cập nhật một số file
   + create src/app/app.server.module.ts
   + create src/main.server.ts 
   + create src/tsconfig.server.json 
   + update package.json 
   + update .angular-cli.json 
   + update src/main.ts 
   + update src/app/app.module.ts 
   + update .gitignore 

Giờ ta có 2 root module phân biệt : 
    +app.server.module.ts
    +app.module.ts
Server module thì import ServerModule từ @angular/platform-server còn browser module thì gọi đến BrowerModule.withServerTransition() để sử dụng  server side rendering

Tạo file server.ts( đã được tạo sãn )

trong package.json thêm các scrips:
    +"dev:ssr": "ng run angular-ssr:serve-ssr",
    +"serve:ssr": "node dist/angular-ssr/server/main.js",
    +"build:ssr": "ng build && ng run angular-ssr:server",
   + "prerender": "ng run angular-ssr:prerender"


Xong bước cấu hình
sau đó ta code như một ứng dụng  Angular bình thường
. Sau khi hoàn thành .
Nếu chạy trên môi trường localta sử dụng cú pháp: npm run dev:ssr
Nếu chạy trên môi trường ( ở đây là node), ta sử dụng 2 lệnh:
    npm run build:ssr
    npm run serve:ssr
