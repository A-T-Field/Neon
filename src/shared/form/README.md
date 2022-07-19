# form

## 布尔值对象
```javascript
export abstract class BooleanValueObject {
    value:boolean;
    setupValue:(val:boolean):void;
}

export function useBooleanValueObject(vok:string,state?:boolean):BooleanValueObject{
    const valueRef = ref(state);

    function setupValue(val:boolean):void{
        valueRef.value = val;
    }

    return {
        value:unref(valueRef),
    }
}
```

## Field
1. 初始化状态
2. 挂载状态
3. 卸载状态
4. 加载状态
5. 执行校验状态
6. 校验结果状态
7. 激活状态
8. 浏览过状态
