> https://api.thecatapi.com/v1/images/search?limit=1
>
> f94c50cd-5a80-4bd5-8ee8-487923a8211c

```json
{
  namespace:"default",
  // 全局默认值 局部可选 模块写入 外部写入
  tag:"default",
  // 全局为空 局部必选 外部写入
  url:"/v1/images/search",
  // 全局默认值 局部可选 外部写入
  method:"get",
  // 全局默认值 局部不可选 模块写入
  baseURL:"https://api.thecatapi.com/",
  // 全局默认值 局部可选 模块写入 外部写入
  headers:{},
  // 全局为空 局部可选 外部写入
  params:{
    limit:1
  },
  // 全局默认值 局部可选 模块写入 外部写入
  dataType:"json",// buffer form file blob
  // 全局为空 局部可选 外部写入
  data:{}, // plain object ArrayBuffer ArrayBufferView URLSearchParams FormData File Blob
  // 全局默认值 局部可选 模块写入 外部写入
  timeout:0,
  // 全局默认值 局部可选 模块写入
  withCredentials:false,
  // 全局默认值 局部可选 模块写入
  validateStatus: function (status) {
    return status >= 200 && status < 400; // 默认值
  },
  // 全局默认值 局部不可选
  signal: controller.signal, // const controller = new AbortController(); controller.abort();
  // 全局默认值 局部可选 模块写入
  xsrfCookieName:"XSRF-TOKEN",
  // 全局默认值 局部可选 模块写入
  xsrfHeaderName:"X-XSRF-TOKEN",
  // 全局默认值 局部可选 模块写入 外部写入
  responseType:"json" // 允许在使用 protobuf3 的情况下需要修改成为 blob
  // auth JWT ｜ 自定义 Token
  // paramsSerializer 用来序列化 params 参数
  // transformRequest 如果在使用 protobuf3 的情况下对发送数据进行序列化
  // transformResponse 如果在使用 protobuf3 的情况下对响应数据进行反序列化
  // onUploadProgress 用于处理上传进度
  // onDownloadProgress 用于处理下载进度
}
```

```json
// global
{
  version:1,
  tag:"default",
  url:"",
  method:"GET",
  baseURL:"http://localhost:8080/",
  headers:{},
  params:{},
  data:{},
  dataType:"json",
  timeout:0 * 10000,
  timeoutErrorMessage:"request time",
  withCredentials:false,
  validateStatus: function (status) {
    return status >= 200 && status < 400;
  },
  xsrfCookieName:"XSRF-TOKEN",
  xsrfHeaderName:"X-XSRF-TOKEN",
  responseType:"json"
}

// module
{
  namespace:"cat",
  baseURL:"https://api.thecatapi.com/",
  timeout:9 * 10000
}

// service
{
  url:"/v1/images/search",
  method:"GET",
  params:{
    limit:10
  }
}
```

POST
DELETE
PATCH
GET
UPLOAD
DOWNLOAD
