import { reactive } from 'vue'
const useReactive = (obj: any) => {
    const data = reactive(obj);
    const setData = (newObj: any) => {
        Object.assign(data, newObj)
    }
    return [data, setData]

}
export default useReactive