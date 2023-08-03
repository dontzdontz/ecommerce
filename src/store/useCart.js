import {defineStore} from 'pinia'
import { computed, ref } from 'vue'
import { ElMessage } from "element-plus";

export const useCartStore = defineStore('cart', () => {
  const products = ref([])
    
    const addCart  = (item) => {
      const hasItem = products.value.find(i => i?.id === item.id)

      if(hasItem?.amount === 10) {
        ElMessage({
          message: '如有超过10人需求，请来信洽询客服人员',
          type: 'warning',
        })
        return
      }
     

      if(hasItem) {
        hasItem.amount += 1
      } else {
        products.value.push(item)
      }

     
      ElMessage({
        message: '成功加入购物车',
        type: 'success',
      })
    }

    const decreaseAmount  = (item) => {
      const hasItem = products.value.find(i => i?.id === item.id)
      if (hasItem) {
        hasItem.amount -=1
      } 
    }

    const removeCart = (item) => {
      const hasItemIndex = products.value.findIndex(i => i?.id === item.id)
      if(hasItemIndex !== -1) {
        products.value.splice(hasItemIndex, 1)
      }
    }

    const total = computed(() => {
      if (products.value.length === 0) return 0

      let price = 0
      products.value.forEach((i) => {
        price += i.amount * i.price
      })

      return price
    })
    return { addCart, products, total, decreaseAmount, removeCart }
  })