// shallowReactive(浅的劫持，浅的监视，浅的响应数据)，于reactive（深的）

const reactiveHandle = {
    get(target, prop) {
        const result = Reflect.get(target, prop)
        console.log('读取数据')
        return result
    },
    set(target, prop, value) {
        const result = Reflect.set(target, prop, value)
        console.log('设置数据')
        return result
    },
    deleteProperty(target, prop) {
        const result = Reflect.set(target, prop)
        console.log('删除数据')
        return result
    }

}

function shallowReactive(target) {
    //判断当前目标对象是不是object类型（对象、数组）
    if (target && typeof target === 'object') {
        return new Proxy(target, reactiveHandle)
    }
    // 如果是基本类型，就直接返回
    return target
}

function reactive(target) {
    //判断当前目标对象是不是object类型（对象、数组）
    if (target && typeof target === 'object') {
        // 是数组
        if (Array.isArray(target)) {
            target.forEach((item, index) => {
                target[index] = reactive(item)
            })
        } else {
            // 是对象
            Object.keys(target).forEach(key => {
                target[key] = reactive(target[key])
            })
        }
        return new Proxy(target, reactiveHandle)
    }
    // 如果是基本类型，就直接返回
    return target
}


// 定义一个ref函数
function shallowRef(target) {
    return {
        //保存target对象
        _value: target,
        get value() {
            console.log('劫持到了读取数据')
            return this._value
        },
        set value(val) {
            console.log('劫持到了修改数据，准备更新界面', val)
            this._value = val
        }
    }
}
// 定义一个ref函数
function ref(target) {
    target = reactive(target)
    return {
        //保存target对象
        _value: target,
        get value() {
            console.log('劫持到了读取数据')
            return this._value
        },
        set value(val) {
            console.log('劫持到了修改数据，准备更新界面', val)
            this._value = val
        }
    }
}

