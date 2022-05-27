// 发送ajax请求
import { ref } from 'vue'
import axios from 'axios'

export default function <T>(url: string) {
    // 加载状态
    const loading = ref(true)
    //请求成功数据
    const data = ref<T | null>(null)
    //错误信息
    const errorMsg = ref('')
    axios.get(url).then((res) => {
        loading.value = false
        data.value = res.data
    }).catch((error) => {
        loading.value = true
        errorMsg.value = error.message || '未知错误'
    })
    return {
        loading,
        data,
        errorMsg
    }
}