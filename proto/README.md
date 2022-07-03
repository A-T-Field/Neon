```proto3
syntax = "proto3";

service HelloService {
  rpc SayHello(HelloRequest) returns (HelloReply) {}
}

message Message {
  optional string name = 1;
  optional int32 id = 2;
}
```