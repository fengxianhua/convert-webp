
## webp转换器

```
四个模块：
cwebp
dwebp
gif2webp
webpmux
```

## 合成webp动图

```javascript

  var webp=require('convert-webp');
  var input=["./frames/0.webp +500","./frames/1.webp +500","./frames/2.webp +500"];

  webp.webpmux_animate(input, "anim_container.webp", "10", "255,255,255,255", function(status,error){
    console.log(status,error);
  });

```

文档和工具：
https://developers.google.com/speed/webp/download
https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html
